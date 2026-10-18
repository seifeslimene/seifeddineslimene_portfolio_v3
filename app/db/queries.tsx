// @ts-nocheck
'use server';

import { auth, youtube } from '@googleapis/youtube';
// import { sql } from './postgres';
import { sql } from '@vercel/postgres';
import path from 'path';
import {
  unstable_cache as cache,
  unstable_noStore as noStore,
} from 'next/cache';

const youtubePrivateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n');

let googleAuth = youtubePrivateKey
  ? new auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        client_id: process.env.GOOGLE_CLIENT_ID,
        private_key: youtubePrivateKey,
      },
      scopes: ['https://www.googleapis.com/auth/youtube.readonly'],
    })
  : null;

// let googleAuth = new auth.OAuth2({
//   client_id: process.env.GOOGLE_CLIENT_ID,
//   private_key: process.env.GOOGLE_PRIVATE_KEY
// });

let yt = googleAuth
  ? youtube({
      version: 'v3',
      auth: googleAuth,
    })
  : null;

export async function getBlogViews() {
  if (!process.env.POSTGRES_URL) {
    return [];
  }

  noStore();
  let { rows } = await sql`
    SELECT count
    FROM views
  `;

  return rows.reduce((acc, curr) => acc + Number(curr.count), 0);
}

export async function getViewsCount(): Promise<
  { slug: string; count: number }[] | never
> {
  if (!process.env.POSTGRES_URL) {
    return { rows: [] };
  }

  noStore();
  return sql`
    SELECT slug, count
    FROM views
  `;
}

// export const getSeifYouTubeSubs = cache(
//   async () => {
//     let response = await yt.channels.list({
//       id: ['UCpnXvUkqIeEBXcv9akeOALA'],
//       part: ['statistics'],
//     });

//     let channel = response.data.items![0];
//     return Number(channel?.statistics?.subscriberCount).toLocaleString();
//   },
//   ['Seif-youtube-subs'],
//   {
//     revalidate: 3600,
//   }
// );

export const getSeifYouTubeSubs = async () => {
  if (!yt) {
    return '0';
  }

  try {
    let response = await yt.channels.list({
      id: ['UCWUxXzMaxN3j9JOXEuAkHJA'],
      part: ['statistics'],
    });

    let channel = response.data.items![0];
    return Number(channel?.statistics?.subscriberCount).toLocaleString();
  } catch {
    return '0';
  }
};

// export const getVercelYouTubeSubs = cache(
//   async () => {
//     let response = await yt.channels.list({
//       id: ['UCpnXvUkqIeEBXcv9akeOALA'],
//       part: ['statistics'],
//     });

//     let channel = response.data.items![0];
//     return Number(channel?.statistics?.subscriberCount).toLocaleString();
//   },
//   ['vercel-youtube-subs'],
//   {
//     revalidate: 3600,
//   }
// );

export const getVercelYouTubeSubs = async () => {
  if (!yt) {
    return '0';
  }

  try {
    let response = await yt.channels.list({
      id: ['UCWUxXzMaxN3j9JOXEuAkHJA'],
      part: ['statistics'],
    });

    let channel = response.data.items![0];
    return Number(channel?.statistics?.subscriberCount).toLocaleString();
  } catch {
    return '0';
  }
};

export async function getGuestbookEntries() {
  if (!process.env.POSTGRES_URL) {
    return { rows: [] };
  }

  noStore();
  return sql`
    SELECT id, body, created_by, updated_at
    FROM guestbook
    ORDER BY created_at DESC
    LIMIT 100
  `;
}
