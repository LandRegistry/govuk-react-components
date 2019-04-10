import React, { Component } from 'react'
import Label from './Label'
import Hint from './Hint'
import ErrorMessage from './ErrorMessage'

class Input extends Component {
  render() {

    var describedBy = ''
    this.props.describedBy ? describedBy = this.props.describedBy : ''

    if (this.props.hint) {
      const hintId = this.props.id + '-hint'
      this.props.describedBy ? describedBy = describedBy + ' ' + this.props.describedBy : describedBy = describedBy + ' ' + hintId;
      var hint = <Hint
        id={hintId}
        {...this.props.hint}
      />
    }

    if (this.props.errorMessage) {
      const errorId = this.props.id ? this.props.id + '-error' : '';
      this.props.describedBy ? describedBy = describedBy + ' ' + this.props.describedBy : describedBy = describedBy + ' ' + errorId;
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
          aria-describedby={describedBy}
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

