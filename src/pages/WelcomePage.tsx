import React from 'react';
import { Link } from 'react-router-dom';

export const WelcomePage = () => {
  return (
    <>
      <h2>Hello!</h2>
      <h3>
        Please you need to &nbsp;
        <Link to={'/login'}>log in</Link> or &nbsp;
        <Link to={'/registration'}>register</Link>
      </h3>
    </>
  );
};
