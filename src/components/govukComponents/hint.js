import React, { Component } from 'react'
import ReactHtmlParser from 'react-html-parser'

class Hint extends Component {

  render() {

    return (
      <span id={this.props.id} className={`govuk-hint${this.props.classes ? ' ' + this.props.classes : ''}`}>
        {this.props.html ? ReactHtmlParser(this.props.html) : this.props.text}
      </span>
    )
  }
}

export default Hint