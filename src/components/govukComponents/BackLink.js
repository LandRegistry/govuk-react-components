import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class BackLink extends Component {

  render() {

    var attributes
    if (this.props.attributes) {
      attributes = this.props.attributes
    }

    return (
      <Link to={this.props.href} className={`govuk-back-link${this.props.classes ? ' ' + this.props.classes : ''}`} {...attributes}>Back</Link>
    )
  }
}
BackLink.defaultProps = {
  props: '/'
}

BackLink.defaultProps = {
  to: "/"
}

export default BackLink