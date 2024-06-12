import React from 'react';
import {
  FaFolderOpen,
  FaGraduationCap,
  FaRegAddressCard,
  FaMarkdown,
  FaPhone,
  FaEnvelope,
} from 'react-icons/fa';

const optionsLabel = (title) => {
  return React.createElement(
    'div',
    { className: 'menu-options' },
    React.createElement(FaMarkdown),
    title
  );
};

export const items = [
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
        key: '3',
        icon: React.createElement(FaGraduationCap),
        label: 'Education',
        children: [
          {
            key: '31',
            label: optionsLabel('high-school'),
          },
          {
            key: '32',
            label: optionsLabel('university'),
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
        icon: React.createElement(FaPhone),
        label: '+254 798320724',
      },
    ],
  },
];
