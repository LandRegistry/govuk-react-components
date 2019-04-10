import React, { Component } from 'react'

class Hint extends Component {

  render() {

    return (
      <span id={this.props.id} className={`govuk-hint${this.props.classes ? ' ' + this.props.classes : ''}`}>
        {this.props.html ? this.props.html : this.props.text}
      </span>
    )
  }
}

export default Hint