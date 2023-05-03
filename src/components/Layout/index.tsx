import React from 'react';
import { CustomRouter } from 'src/routes';
import './layout.scss';

const Layout = () => {
  return <div>{CustomRouter()}</div>;
};

export default Layout;
