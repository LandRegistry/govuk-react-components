import React from 'react'
import ErrorMessage from './ErrorMessage'
import Hint from './Hint'
import Label from './Label'

function FileUpload(props) {

  var describedBy = props.describedBy

  if (props.hint) {
    const hintId = props.id + '-hint'
    describedBy += ' ' + hintId
    var hint = <Hint
      id={hintId}
      {...props.hint}
    />
  }

  if (props.errorMessage) {
    const errorId = props.id ? props.id + '-error' : '';
    describedBy += ' ' + errorId
    var errorMessage = <ErrorMessage
      id={errorId}
      {...props.errorMessage}
    />
  }
  return (

    <div className={`govuk-form-group${props.errorMessage ? ' govuk-form-group--error' : ''}${props.formGroup ? ' ' + props.formGroup.classes : ''}`}>
      <Label {...props.label} />
      {hint}
      {errorMessage}
      <input
        className={`govuk-file-upload${props.classes ? ' ' + props.classes : ''}${props.errorMessage ? ' govuk-file-upload--error' : ''}`}
        id={props.id}
        name={props.name}
        type="file"
        defaultValue={props.value}
        aria-describedby={describedBy}
        {...props.attributes}
      />
    </div>
  )
}

FileUpload.defaultProps = {
  describedBy: ''
}

export default FileUpload
