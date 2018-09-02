import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';

const PublicNav = () => (
  <div className="navbar">
    <Header />
    <ul className="publicNav">
      <li>
        <Link to="/login">
          Log In
          </Link>
      </li>
      <li>
        <Link to="/register">
          Sign Up
          </Link>
      </li>
      <li>
        <Link to="/">
          Home
          </Link>
      </li>
    </ul>
  </div>
);

export default PublicNav;
