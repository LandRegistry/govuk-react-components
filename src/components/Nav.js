import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'


function Nav(props) {
  const links = props.navigation.map((link, key) => (
    <li key={key}>
      <NavLink className={`govuk-link ${link.classes || ''}`} to={link.href}>
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

Nav.propTypes = {
  navigation: PropTypes.arrayOf(PropTypes.shape({
    href: PropTypes.string,
    classes: PropTypes.string,
    text: PropTypes.string,
  })).isRequired,
}

export default Nav
