import { Checkbox } from 'antd';
import React from 'react';
import {
  FaFolderOpen,
  FaGraduationCap,
  FaRegAddressCard,
  FaMarkdown,
  FaPhone,
  FaEnvelope,
  FaExternalLinkAlt,
  FaReact,
  FaHtml5,
  FaCss3,
  FaRust,
  FaPhoneAlt,
} from 'react-icons/fa';
import { SiGnubash } from 'react-icons/si';
import { IoLogoJavascript } from 'react-icons/io5';
import { SiSolidity } from 'react-icons/si';

const optionsLabel = (title) => {
  return React.createElement(
    'div',
    { className: 'menu-options ' },
    React.createElement(FaMarkdown),
    title
  );
};

const filterLabel = (title, icon) => {
  return React.createElement(
    'div',
    { className: 'filter-options' },
    React.createElement(icon),
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
            label: optionsLabel('Overview'),
          },
          {
            key: 'interests',
            label: optionsLabel('Interests'),
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
            label: optionsLabel('software-developer'),
          },
          {
            key: 'it-officer',
            label: optionsLabel('it-officer'),
          },
          {
            key: 'voluntee-librarian',
            label: optionsLabel('voluntee-librarian'),
          },
          {
            key: 'attachee',
            label: optionsLabel('attachee'),
          },
          {
            key: 'stem-teacher',
            label: optionsLabel('stem-teacher'),
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
            label: optionsLabel('alliance-hs'),
          },
          {
            key: 'strathmore-uni',
            label: optionsLabel('strathmore-uni'),
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
        label: 'githuba9520@gmail.com',
      },
      {
        key: 'phone',
        icon: React.createElement(FaPhoneAlt),
        label: '+254 798320724',
      },
    ],
  },
];

export const projectsItems = [
  {
    key: 'projects',
    label: 'Projects',
    children: [
      { key: 'React', label: filterLabel('React', FaReact) },
      { key: 'JavaScript', label: filterLabel('JavaScript', IoLogoJavascript) },
      { key: 'Rust', label: filterLabel('Rust', FaRust) },
      { key: 'HTML', label: filterLabel('HTML', FaHtml5) },
      { key: 'CSS', label: filterLabel('CSS', FaCss3) },
      { key: 'Solidity', label: filterLabel('Solidity', SiSolidity) },
      { key: 'Bash', label: filterLabel('Bash', SiGnubash) },
    ],
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
        label: 'githuba9520@gmail.com',
      },
      {
        key: 'phone',
        icon: React.createElement(FaPhoneAlt),
        label: '+254 798320724',
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
