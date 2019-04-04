import React, { Component } from 'react'

class Hint extends Comnponent {

  render() {

    return (
      <span id={this.props.id} class={`govuk-hint${this.props.classes ? ' ' + this.props.classes : ''}`}>
        {/* // {...attributes}>
      //   {{ params.html | safe if params.html else params.text }} */}
      </span>
    )
  }
}

export default Hint