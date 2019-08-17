import React from 'react';
import { NavLink } from 'react-router-dom';
import { css } from '@emotion/core';

export default function Nav() {
  return (
    <div className='nav-links'>
      <nav
        css={css`
          border: 2px solid deeppink;
        `}
      >
        <NavLink exact to='/'>
          Home
        </NavLink>
        <NavLink exact to='/actions'>
          Actions
        </NavLink>
        <NavLink exact to='/projects'>
          Projects
        </NavLink>
      </nav>
    </div>
  );
}
