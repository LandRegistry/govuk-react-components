import React from 'react'
import PropTypes from 'prop-types'
import ErrorMessage from './ErrorMessage'
import Hint from './Hint'
import Label from './Label'

function FileUpload(props) {
  var { describedBy } = props
  var hint
  var errorMessage

  if (props.hint) {
    const hintId = `${props.id}-hint`
    describedBy += ` ${hintId}`
    hint = (
      <Hint
        id={hintId}
        {...props.hint}
      />
    )
  }

  if (props.errorMessage) {
    const errorId = props.id ? `${props.id}-error` : ''
    describedBy += ` ${errorId}`
    errorMessage = (
      <ErrorMessage
        id={errorId}
        {...props.errorMessage}
      />
    )
  }
  return (

    <div className={`govuk-form-group${props.errorMessage ? ' govuk-form-group--error' : ''} ${(props.formGroup && props.formGroup.classes) || ''}`}>
      <Label
        {...props.label}
        for={props.id}
      />
      {hint}
      {errorMessage}
      <input
        className={`govuk-file-upload ${props.classes}${props.errorMessage ? ' govuk-file-upload--error' : ''}`}
        id={props.id}
        name={props.name}
        type="file"
        defaultValue={props.value}
        aria-describedby={describedBy || null}
        {...props.attributes}
      />
    </div>
  )
}

FileUpload.defaultProps = {
  describedBy: '',
  classes: '',
}

FileUpload.propTypes = {
  attributes: PropTypes.object,
  classes: PropTypes.string,
  describedBy: PropTypes.string,
  errorMessage: PropTypes.object,
  formGroup: PropTypes.object,
  hint: PropTypes.object,
  id: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
}

export default FileUpload
