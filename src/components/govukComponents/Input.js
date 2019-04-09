import React, { Component } from 'react'
import Label from './Label'
import Hint from './Hint'
import ErrorMessage from './ErrorMessage'

class Input extends Component {
  render() {

    if (this.props.hint) {
      var hintId = this.props.id + '-hint';

      var hint = <Hint
        id={hintId}
        classes={this.props.hint.classes}
        attributes={this.props.hint.attributes}
        html={this.props.hint.html}
        text={this.props.hint.text}
      />
    }

    if (this.props.errorMessage) {
      var errorId = this.props.id ? this.props.id + '-error' : '';
      var errorMessage = <ErrorMessage
        id={errorId}
        {...this.props.errorMessage}
      />
    }

    return (
      <div className={`govuk-form-group${this.props.formGroup ? ' ' + this.props.formGroup.classes : ''} ${this.props.errorMessage ? 'govuk-form-group--error' : ''} `}>
        <Label {...this.props.label}></Label>
        {hint}
        {errorMessage}
        <input className={`govuk-input${this.props.classes ? ' ' + this.props.classes : ''} ${this.props.errorMessage ? ' govuk-input--error' : ''}`} id={this.props.id} name={this.props.id} type={this.props.type}
          value={this.props.value}
          aria-describedby={this.props.describedBy}
          autoComplete={this.props.autocomplete}
          pattern={this.props.pattern}
          {...this.props.attributes}
        />
      </div>
    )
  }
}

Input.defaultProps = {
  type: 'text'
}

export default Input

