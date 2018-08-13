import React from 'react';
import { Link } from 'react-router-dom';
import Header from './components/Header/Header';

const PublicNav = () => (
  <div className="navbar">
      <Header title="Voluntrack" />
      <ul className="publicNav">
        <li>
          <Link to="/">
            Home
          </Link>
        </li>
        <li>
          <Link to="/register">
            Sign Up
          </Link>
        </li>
        <li>
          <Link to="/login">
            Log In
          </Link>
        </li>
      </ul>
  </div>
);

export default PublicNav;
