export type Article = {
  slug: string;
  title: string;
  summary: string;
  date: string;
  readTime: string;
  image: string;
  featured: boolean;
};

const featuredSummary =
  'Learn how to build a custom pagination component in ReactJS from scratch. Follow this step-by-step guide to integrate Pagination component in your ReactJS project.';

const featuredTitle =
  'Build A Custom Pagination Component In Reactjs From Scratch';

const listTitle =
  'Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling';

export const articles: Article[] = [
  {
    slug: 'pagination-component-in-reactjs',
    title: featuredTitle,
    summary: featuredSummary,
    date: '2023-03-22',
    readTime: '9 min read',
    image: '/images/articles/pagination component in reactjs.jpg',
    featured: true,
  },
  {
    slug: 'create-loading-screen-in-react-js',
    title: featuredTitle,
    summary: featuredSummary,
    date: '2023-03-22',
    readTime: '9 min read',
    image: '/images/articles/create loading screen in react js.jpg',
    featured: true,
  },
  {
    slug: 'create-modal-component-in-react-using-react-portals',
    title: listTitle,
    summary: '',
    date: '2023-03-22',
    readTime: '',
    image: '/images/articles/create modal component in react using react portals.png',
    featured: false,
  },
  {
    slug: 'form-validation-in-reactjs-using-custom-react-hook',
    title: listTitle,
    summary: '',
    date: '2023-03-22',
    readTime: '',
    image: '/images/articles/form validation in reactjs using custom react hook.png',
    featured: false,
  },
  {
    slug: 'smooth-scrolling-in-reactjs',
    title: listTitle,
    summary: '',
    date: '2023-03-22',
    readTime: '',
    image: '/images/articles/smooth scrolling in reactjs.png',
    featured: false,
  },
  {
    slug: 'create-modal-component-in-react-using-react-portals-2',
    title: listTitle,
    summary: '',
    date: '2023-03-22',
    readTime: '',
    image: '/images/articles/create modal component in react using react portals.png',
    featured: false,
  },
  {
    slug: 'create-modal-component-in-react-using-react-portals-3',
    title: listTitle,
    summary: '',
    date: '2023-03-22',
    readTime: '',
    image: '/images/articles/create modal component in react using react portals.png',
    featured: false,
  },
  {
    slug: 'create-modal-component-in-react-using-react-portals-4',
    title: listTitle,
    summary: '',
    date: '2023-03-22',
    readTime: '',
    image: '/images/articles/create modal component in react using react portals.png',
    featured: false,
  },
];
