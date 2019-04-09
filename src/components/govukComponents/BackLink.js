import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class BackLink extends Component {

  render() {

    return (
      <Link to={this.props.href} className={`govuk-back-link${this.props.classes ? ' ' + this.props.classes : ''}`} {...this.props.attributes}>Back</Link>
    )
  }
}

BackLink.defaultProps = {
  to: "/"
}

export default BackLink