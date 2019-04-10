import React, { Component } from 'react'

class Label extends Component {
  render() {

    if (this.props.html || this.props.text) {
      var label = <label className={`govuk-label${this.props.classes ? ' ' + this.props.classes : ''}`} {...this.props.attributes} htmlFor={this.props.for}>
        {this.props.html ? this.props.html : this.props.text}
      </label>
    }

    if (this.props.isPageHeading === true) {
      var pageheading = <h1 className="govuk-label-wrapper">{label}</h1>
    }

    return pageheading ? pageheading : label
  }
}

export default Label