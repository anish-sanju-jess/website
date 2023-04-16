import defaultImage from './assets/images/default.png';

const CONFIG = {
  name: 'MindMate',
  origin: 'https://mindmatesite.vercel.app/',
  basePathname: '/',
  trailingSlash: false,
  title: 'MindMate — A students community',
  description:
    'Suitable Study Material for all the students. 🚀',
  defaultImage: defaultImage,
  defaultTheme: 'system', // Values: "system" | "light" | "dark" | "light:only" | "dark:only"
  language: 'en',
  textDirection: 'ltr',
  dateFormatter: new Intl.DateTimeFormat('en', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  }),
};

export const SITE = { ...CONFIG };
export const DATE_FORMATTER = CONFIG.dateFormatter;
