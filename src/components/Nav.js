import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

function Nav(props) {
  const links = props.navigation.map((link, key) => (
    <li key={key}>
      <NavLink className={`govuk-link ${link.classes ? ` ${link.classes}` : ''}`} to={link.href}>
        {link.text}
      </NavLink>
    </li>
  ))

  return (
    <div className="app-pane__nav">
      <nav className="app-navigation govuk-clearfix">
        <ul className="govuk-list">
          {links}
        </ul>
      </nav>
    </div>
  )
}

export default Nav
