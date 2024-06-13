import React from 'react';
import AppLayout from '../Layout/Index';
import Home from '../views/Home/Index';
import Projects from '../views/Projects/Index';
import Contact from '../views/Contact/Index';
import About from '../views/About/Index';
import { redirect } from 'react-router-dom';
import PersonalInfo from '../views/About/Components/PersonalInfo/PersonalInfo';
import Bio from '../views/About/Components/PersonalInfo/Bio';

export const routes = [
  {
    path: '/',
    element: React.createElement(AppLayout),
    children: [
      { index: true, loader: async () => redirect('/hello') },
      { path: 'hello', element: React.createElement(Home) },
      {
        path: 'about',
        element: React.createElement(About),
        children: [
          {
            path: 'personal-info',
            element: React.createElement(PersonalInfo),
            children: [
              {
                index: true,
                path: 'bio/:id',
                element: React.createElement(Bio),
              },
            ],
          },
        ],
      },
      { path: 'projects', element: React.createElement(Projects) },
      { path: 'contact-me', element: React.createElement(Contact) },
    ],
  },
];
