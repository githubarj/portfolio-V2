import React from 'react';
import {
  FaFolderOpen,
  FaGraduationCap,
  FaRegAddressCard,
  FaMarkdown,
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
    key: '57',
    label: 'Personal Info',
    children: [
      {
        key: '1',
        icon: React.createElement(FaRegAddressCard),
        label: 'Bio',
        children: [
          {
            key: '11',
            label: optionsLabel('Overview'),
          },
          {
            key: '12',
            label: optionsLabel('Personal Info'),
          },
        ],
      },
      {
        key: '2',
        icon: React.createElement(FaFolderOpen),
        label: 'Experience',
        children: [
          {
            key: '21',
            label: optionsLabel('software-developer'),
          },
          {
            key: '22',
            label: optionsLabel('it-officer'),
          },
          {
            key: '23',
            label: optionsLabel('volunteer-librarian'),
          },
          {
            key: '45',
            label: optionsLabel('attachee'),
          },
          {
            key: '24',
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
];
