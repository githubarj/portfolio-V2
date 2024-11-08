import React from 'react';
import {
  FaFolderOpen,
  FaGraduationCap,
  FaRegAddressCard,
  FaMarkdown,
  FaEnvelope,
  FaExternalLinkAlt,
  FaPhoneAlt,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { filterIcons } from '../../views/Projects/Components/filterIcons';

const optionsLabel = (title, parent) => {
  return React.createElement(
    Link,
    {
      className: 'menu-options ',
      to: `about/personal-info/${parent}/${title}`,
    },
    React.createElement(FaMarkdown),
    title
  );
};

const filterLabel = (title, icon, color) => {
  return React.createElement(
    'div',
    { className: 'filter-options' },
    React.createElement(icon, { color: color }),
    title
  );
};

export const aboutItems = [
  {
    key: 'personal-info',
    label: 'Personal Info',
    children: [
      {
        key: 'bio',
        icon: React.createElement(FaRegAddressCard),
        label: 'Bio',
        children: [
          {
            key: 'overview',
            label: optionsLabel('overview', 'bio'),
          },
          {
            key: 'coding-stats',
            label: optionsLabel('coding-stats', 'bio'),
          },
        ],
      },
      {
        key: 'experience',
        icon: React.createElement(FaFolderOpen),
        label: 'Experience',
        children: [
          {
            key: 'software-developer',
            label: optionsLabel('software-developer', 'experience'),
          },
          {
            key: 'tech-support',
            label: optionsLabel('tech-support', 'experience'),
          },
          {
            key: 'voluntee-librarian',
            label: optionsLabel('voluntee-librarian', 'experience'),
          },
          {
            key: 'tech-attachee',
            label: optionsLabel('tech-attachee', 'experience'),
          },
          {
            key: 'stem-teacher',
            label: optionsLabel('stem-teacher', 'experience'),
          },
        ],
      },
      {
        key: 'education',
        icon: React.createElement(FaGraduationCap),
        label: 'Education',
        children: [
          {
            key: 'alliance-hs',
            label: optionsLabel('alliance-hs', 'education'),
          },
          {
            key: 'strathmore-uni',
            label: optionsLabel('strathmore-uni', 'education'),
          },
        ],
      },
    ],
  },
  {
    key: 'contacts',
    label: 'Contacts',
    children: [
      {
        key: 'email',
        icon: React.createElement(FaEnvelope),
        label: 'githubarj@gmail.com',
      },
      {
        key: 'phone',
        icon: React.createElement(FaPhoneAlt),
        label: '+44 7365178696',
      },
    ],
  },
];

const projectMenus = filterIcons.map((item) => ({
  key: item.key,
  label: filterLabel(item.label, item.icon, item.color),
}));

export const projectsItems = [
  {
    key: 'projects',
    label: 'Projects',
    children: projectMenus,
  },
];

export const contactItems = [
  {
    key: 'contacts',
    label: 'Contacts',
    children: [
      {
        key: 'email',
        icon: React.createElement(FaEnvelope),
        label: 'githubarj@gmail.com',
      },
      {
        key: 'phone',
        icon: React.createElement(FaPhoneAlt),
        label: '+44 7365178696',
      },
    ],
  },
  {
    key: 'find-me-also-on',
    label: 'find-me-also-on',
    children: [
      {
        key: 'github',
        icon: React.createElement(FaExternalLinkAlt),
        label: 'github account',
      },
      {
        key: 'wakatime',
        icon: React.createElement(FaExternalLinkAlt),
        label: 'wakatime profile',
      },
      {
        key: 'codewars',
        icon: React.createElement(FaExternalLinkAlt),
        label: 'codewars profile',
      },
    ],
  },
];
