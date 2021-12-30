/* eslint-disable */
import { nanoid } from 'nanoid';

export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Sandra',
  subtitle: 'CS Undergrad',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'linpr.jpg',
  paragraphOne:
    'Hello, I am 3rd year student, pursuing B.tech in Computer Science Engineering from Mar Athanasius College of Engineering.',
  paragraphTwo:
    ' I describe myself as a quick learner and passionate in problem solving by using simple and scalable solutions.',
  paragraphThree: 'Interested in web development and machine learning.',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'kys-ss.png',
    title: 'Know Your Student',
    info: 'Student progress tracker - data analysis tool for educators',
    info2: 'Can be integrated with learning management systems',
    url: 'https://share.streamlit.io/sandra9711/kys_data_tracker/app.py',
    repo: 'https://github.com/sandra9711/kys_data_tracker/', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'lp.png',
    title: 'Librosopedia',
    info: 'An online used book store',
    info2: 'A platform to promote the resuse of books',
    url: 'https://librosopedia.web.app/',
    repo: 'https://github.com/sandra9711/.hack-Librosopedia', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'jokegen.jpg',
    title: 'Random joke generator',
    info: 'Simple app to display random Chuck Norris facts',
    info2: '',
    url: '',
    repo: 'https://github.com/sandra9711/Random-Joke-generator', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'sandrarehan97@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/sandra_mariyam',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/sandra-mariyam-jacob-2689641b2/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/sandra9711',
    },
  ],
};
