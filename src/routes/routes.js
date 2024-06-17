import React, { Suspense, lazy } from 'react';
import AppLayout from '../Layout/Index';
// import Home from '../views/Home/Index';
import Projects from '../views/Projects/Index';
import Contact from '../views/Contact/Index';
import About from '../views/About/Index';
import { redirect } from 'react-router-dom';
import Bio from '../views/About/Components/Bio/Bio';
import Experience from '../views/About/Components/Experience/Experience';
import Education from '../views/About/Components/Education/Education';
import { Backdrop, CircularProgress } from '@mui/material';

const Home = lazy(() => import('../views/Home/Index'));

const fallback = React.createElement(
  Backdrop,
  {
    sx: { color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 },
    open: true,
  },
  React.createElement(CircularProgress, { color: 'inherit' })
);

export const routes = [
  {
    path: '/',
    element: React.createElement(AppLayout),
    children: [
      {
        index: true,
        loader: async () => redirect('/hello'),
      },
      {
        path: 'hello',
        element: React.createElement(
          Suspense,
          { fallback },
          React.createElement(Home)
        ),
      },
      {
        path: 'about',
        element: React.createElement(About),
        children: [
          {
            index: true,
            loader: async () => redirect('personal-info/bio/overview'),
          },
          {
            path: 'personal-info/bio/:file',
            element: React.createElement(Bio),
          },
          {
            path: 'personal-info/experience/:file',
            element: React.createElement(Experience),
          },
          {
            path: 'personal-info/education/:file',
            element: React.createElement(Education),
          },
        ],
      },
      {
        path: 'projects',
        element: React.createElement(Projects),
      },
      {
        path: 'contact-me',
        element: React.createElement(Contact),
      },
    ],
  },
];
