import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class BackLink extends Component {

  constructor(props) {
    super(props)

    this.state = {
      href: '#'
    }
  }

  componentDidMount() {
    this.setState({ href: this.props.href ? this.props.href : '/' })
  }

  render() {

    var attributes
    if (this.props.attributes) {
      attributes = this.props.attributes
    }

    return (
      <Link to={this.state.href} className={`govuk-back-link${this.props.classes ? ' ' + this.props.classes : ''}`} {...attributes}>Back</Link>
    )
  }
}

export default BackLink