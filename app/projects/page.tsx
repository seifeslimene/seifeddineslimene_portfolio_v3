import type { Metadata } from 'next';
import { CustomMDX } from 'app/components/mdx';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'A summary of my projects.',
};

let url: any;
const env = process.env.NODE_ENV;
if (env == 'development') {
  url = 'http://localhost:3001';
} else if (env == 'production') {
  url = 'https://myporfolio-io.vercel.app';
}

const ProjectContent = async () => {
  const data = await fetch(`${url}/api/github`, {
    cache: 'no-store',
  });
  const { ContentsToList } = await data.json();
  const normalizedContentToList = ContentsToList.map((contentToList) =>
    atob(contentToList)
  );
  function validateText(string) {
    if (/(http(s?)):\/\//i.test(string)) {
      return true;
    } else {
      return false;
    }
  }
  function getUrl(content) {
    const parts = content.split('\n');
    const url = parts[3];
    return url;
  }
  function getTypeApp(content) {
    const parts = content.split('\n');
    const typeApp = parts[5];
    return typeApp;
  }
  const components = {
    h1: (props) => (
      <h1 {...props} className="text-2xl min-h-[60px] mb-0">
        {props.children}
      </h1>
    ),
    p: (props) => {
      if (validateText(props.children)) {
        return null;
      }
      return (
        <p {...props} className="">
          {props.children}
        </p>
      );
    },
  };

  const normalizedWebContentToList = normalizedContentToList.filter(
    (normalizedContent) => getTypeApp(normalizedContent) === 'Web'
  );
  const normalizedMobileContentToList = normalizedContentToList.filter(
    (normalizedContent) => getTypeApp(normalizedContent) === 'Mobile'
  );

  return (
    <>
      <section className="flex flex-wrap gap-5 prosiness">
        {normalizedWebContentToList.map((normalizedContent, index) => {
          const urlWebsite = getUrl(normalizedContent);
          return (
            <div className="xs:w-full sm:w-[100%] h-[300px] border-2 border-solid border-black rounded-[10px] box-border p-5 flex flex-col relative cursor-pointer">
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>
                  <CustomMDX source={normalizedContent} components={components} />
                </div>
                <div>
                  <img src={`https://picsum.photos/id/${238 + index}/350/200`} alt='project' style={{ borderRadius: '5px', height: '200px', width: '350px' }} height={200} width={350} />
                </div>
              </div>
              <div className="absolute bottom-5 right-5">
                <img
                  width="35"
                  height="35"
                  src={
                    urlWebsite
                      ? '/images/projects/online.svg'
                      : '/images/projects/offline.svg'
                  }
                  alt="See Project Online"
                  className="inline-block"
                ></img>
                <a
                  href={getUrl(normalizedContent)}
                  className="ml-2"
                  target="_blank"
                >
                  {urlWebsite ? 'View Online' : 'Not Available Online'}
                </a>
              </div>
            </div>
          );
        })}
      </section>
      {/* <hr className='border-black border-2 border-solid w-11/12 my-[0] mx-[auto]'></hr> */}
      <section className="flex flex-wrap gap-5 mt-[100px]">
        {normalizedMobileContentToList.map((normalizedContent) => {
          const urlWebsite = getUrl(normalizedContent);
          return (
            <div className="xs:w-full sm:w-[47%] h-[300px] border-2 border-solid border-black rounded-[10px] box-border p-5 flex flex-col relative cursor-pointer">
              <CustomMDX source={normalizedContent} components={components} />
              <div className="absolute bottom-5 right-5">
                <img
                  width="35"
                  height="35"
                  src={
                    urlWebsite
                      ? '/images/projects/online.svg'
                      : '/images/projects/offline.svg'
                  }
                  alt="See Project Online"
                  className="inline-block"
                ></img>
                <a
                  href={getUrl(normalizedContent)}
                  className="ml-2"
                  target="_blank"
                >
                  {urlWebsite ? 'View Online' : 'Not Available Online'}
                </a>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default function ProjectPage() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">
        my projects
      </h1>
      <h2>🚧 Under construction</h2>
      {/* <div className="prose prose-neutral dark:prose-invert mb-12">
        <p>Here's a summary of my projects so far.</p>
      </div>
      <article className="prose prose-quoteless prose-neutral dark:prose-invert">
        <ProjectContent />
      </article> */}
    </section>
  );
}
