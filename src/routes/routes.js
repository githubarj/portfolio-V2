import React from 'react';
import AppLayout from '../Layout/Components/Index';
import Home from '../views/Home/Index';

export const routes = [
  {
    path: '/',
    element: React.createElement(AppLayout),
    children: [
      { index: true, path: 'home', element: React.createElement(Home) },
    ],
  },
];
