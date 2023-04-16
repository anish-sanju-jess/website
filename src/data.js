import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Resources',
      links: [
        {
          text: 'AIML',
          href: getPermalink('/resources/aiml'),
        },
        {
          text: 'Blockchain',
          href: getPermalink('/resources/blockchain'),
        },
        {
          text: 'IOT',
          href: getPermalink('/resources/iot'),
        },
        {
          text: 'Cloud',
          href: getPermalink('/resources/cloud'),
        },
        {
          text: 'Cybersecurity',
          href: getPermalink('/resources/cyber'),
        },
        {
          text: 'VR and AR',
          href: getPermalink('/resources/arvr'),
        },
        {
          text: '5G',
          href: getPermalink('/resources/5g'),
        },
        {
          text: 'Quantum Computing',
          href: getPermalink('/resources/quantum'),
        },
        {
          text: 'Green Technology',
          href: getPermalink('/resources/green'),
        },
        {
          text: 'Robotics',
          href: getPermalink('/resources/robotics'),
        }
      ],
    },
    {
          text: 'Mental Health',
          href: getPermalink('/mentalhealth'),
    },
  ]
};
  
export const footerData = {
  links: [
    {
      links: [
        { text: 'AIML', href: '/resources/aiml' },
        { text: 'Blockchain', href: '/resources/blockchain' },
        { text: 'IoT', href: '/resources/iot' },
        { text: 'Cloud', href: '/resources/cloud' },
        { text: 'Cyber Security', href: '/resources/cyber' },
      ],
    },
    {
      links: [
        { text: 'Mental Health', href: '/mentalhealth' },
        { text: 'VR and AR', href: '/resources/arvr' },
        { text: '5G', href: '/resources/5g' },
        { text: 'Quantum Computing', href: '/resources/quantum' },
        { text: 'Green Technology', href: '/resources/green' },
        { text: 'Robotics', href: '/resources/robotics' },
      ]
    },
  ],
  socialLinks: [
    { ariaLabel: 'Twitter', icon: 'tabler:brand-twitter', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },
  ],
  footNote: `Made by Byte Bunch · All rights reserved.`,
};
