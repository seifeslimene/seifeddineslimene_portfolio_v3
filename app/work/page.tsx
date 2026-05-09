import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Work',
  description: 'A summary of my work and contributions.',
};

async function Stars() {
  let res = await fetch('https://api.github.com/repos/vercel/next.js');
  let json = await res.json();
  let count = Math.round(json.stargazers_count / 1000);
  return `${count}k stars`;
}

export default function WorkPage() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">my work</h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>Here's a summary of my work so far.</p>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">Apprentus</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Frontend developer React.js, 2020 — Present
        </p>
        <p>
          • Led the development of innovative user-focused features,
          significantly boosting user engagement and satisfaction through
          detailed analysis of user behavior.
          <br />
          • Built a repository of reusable codes and libraries, enhancing future
          development, improving code quality, and streamlining workflow.
          <br />
          • Played a key role in technical validation of UI/UX designs, ensuring
          they were viable, aesthetically pleasing, and functional, thus
          maintaining a high-quality user experience.
          <br />
          • Optimized application performance for improved speed and
          scalability, resulting in a superior user experience that exceeded
          expectations.
          <br />
          • Addressed cross-browser compatibility issues, ensuring a consistent
          user experience across platforms and retaining a diverse user base.
          <br />• Focused on SEO principles, improving the application's online
          visibility, search engine rankings, and significantly increasing
          website traffic.
        </p>

        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">
          Independant Freelancer
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Fullstack Developer, 2019 — 2020
        </p>
        <p>
          • Led numerous projects with a diverse range of clients, significantly
          contributing to each, including the development of a Booking Plugin
          System using Stencil.js to streamline appointment booking processes. •
          Designed the system to integrate seamlessly into any website via a
          Javascript script tag, enhancing the user experience through a
          straightforward booking journey: - Starts with a discreet icon on the
          site. - Icon click reveals a pop-up with a list of services. - Users
          select services and proceed to pick times, displayed through a
          calendar view. • •- Ajax is utilized for dynamic presentation of
          available slots, allowing users to choose suitable times. - Final step
          involves users confirming their booking details and entering personal
          information. • Actively performed troubleshooting and enhancements on
          WordPress websites, handling tasks from minor bug fixes to major
          performance improvements using HTML, CSS, and PHP to boost site
          functionality and user experience.
        </p>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">
          La Soie S.A.R.L.
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Functional ERP Administrator, 2017 — 2019
        </p>
        <p>
          • Work as ERP Microsoft Navision Functional Administrator.
          <br />
          • Took a proactive role in the seamless integration of innovative
          features into the ERP system, leveraging a wide range of APIs with
          proficiency. This strategic involvement not only markedly improved the
          system's functionality but also dramatically elevated the overall user
          experience.
          <br />• Led the charge in devising and compiling detailed
          documentation that thoroughly explained the usage and advantages of
          the recent additions to the system. This initiative played a critical
          role in ensuring users could easily adapt to the changes, promoting a
          more fluid transition and enhancing user satisfaction.
        </p>
      </div>
    </section>
  );
}
