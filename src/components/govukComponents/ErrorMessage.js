import React, { Component } from 'react'

class ErrorMessage extends Component {
  render() {

    if (this.props.visuallyHiddenText) {
      var visuallyHiddenText = <span className="govuk-visually-hidden">{this.props.visuallyHiddenText}</span>
    }

    return (
      <span id={this.props.id} className={`govuk-error-message${this.props.classes ? ' ' + this.props.classes : ''}`} {...this.props.attributes}>
        {visuallyHiddenText}
        {this.props.html ? this.props.html : this.props.text}
      </span>
    )
  }
}

ErrorMessage.defaultProps = {
  visuallyHiddenText: "Error "
}

export default ErrorMessage