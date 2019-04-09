import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Nav extends Component {

  constructor(props) {
    super(props)

    this.state = {
      navigation: []
    };
  }

  componentWillMount() {
    this.setState({ navigation: this.props.navigation })
  }

  render() {

    const links = this.state.navigation ? this.state.navigation.map((link, key) =>
      <li key={key} className="govuk-header__navigation-item">
        <NavLink className={`govuk-link ${link.classes ? ' ' + link.classes : ''}`} to={link.href} >
          {link.text}
        </NavLink>
      </li>
    ) : []

    return (
      <div className="app-pane__nav">
        <nav className="app-navigation govuk-clearfix">
          <ul className="app-navigation__list govuk-width-container">
            {links}
          </ul>
        </nav>
      </div>
    )
  }
}

export default Nav