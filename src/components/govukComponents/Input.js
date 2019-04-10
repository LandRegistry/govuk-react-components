import React from 'react'
import Label from './Label'
import Hint from './Hint'
import ErrorMessage from './ErrorMessage'

function Input(props) {

  var describedBy = ''
  props.describedBy ? describedBy = props.describedBy : ''

  if (props.hint) {
    const hintId = props.id + '-hint'
    props.describedBy ? describedBy = describedBy + ' ' + props.describedBy : describedBy = describedBy + ' ' + hintId;
    var hint = <Hint
      id={hintId}
      {...props.hint}
    />
  }

  if (props.errorMessage) {
    const errorId = props.id ? props.id + '-error' : '';
    props.describedBy ? describedBy = describedBy + ' ' + props.describedBy : describedBy = describedBy + ' ' + errorId;
    var errorMessage = <ErrorMessage
      id={errorId}
      {...props.errorMessage}
    />
  }

  return (
    <div className={`govuk-form-group${props.formGroup ? ' ' + props.formGroup.classes : ''} ${props.errorMessage ? 'govuk-form-group--error' : ''} `}>
      <Label {...props.label}></Label>
      {hint}
      {errorMessage}
      <input className={`govuk-input${props.classes ? ' ' + props.classes : ''} ${props.errorMessage ? ' govuk-input--error' : ''}`} id={props.id} name={props.id} type={props.type}
        value={props.value}
        aria-describedby={describedBy}
        autoComplete={props.autocomplete}
        pattern={props.pattern}
        {...props.attributes}
      />
    </div>
  )
}

Input.defaultProps = {
  type: 'text'
}

export default Input

