import React, { Component } from 'react'
import ReactHtmlParser from 'react-html-parser'

class Button extends Component {

  render() {

    var element = '';

    if (this.props.element) {
      element = this.props.element
    } else if (this.props.href) {
      element = 'a'
    } else {
      element = 'button'
    }

    const commonAttributes = { className: 'govuk-button' + (this.props.classes ? ' ' + this.props.classes : '') + (this.props.disabled ? ' govuk-button--disabled' : ''), ...this.props.attributes }

    const buttonAttributes = { name: this.props.name, type: this.props.type }

    if (element === 'a') {
      var button = <a href={this.props.href} role="button" draggable="false" {...commonAttributes}>
        {this.props.html ? ReactHtmlParser(this.props.html) : this.props.value}
      </a>
    } else if (element === 'button') {
      var button = <button value={this.props.value} {...buttonAttributes} {...commonAttributes}>
        {this.props.html ? ReactHtmlParser(this.props.html) : this.props.value}
      </button >
    }

    return button
  }
}

Button.defaultProps = {
  value: 'Submit'
}

export default Button