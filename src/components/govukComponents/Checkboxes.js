import React, { useEffect } from 'react'
import CheckboxesJS from 'govuk-frontend/components/checkboxes/checkboxes'
import ErrorMessage from './ErrorMessage'
import Fieldset from './Fieldset'
import Hint from './Hint'
import Label from './Label'

function Checkboxes(props) {
  const checkboxRef = React.createRef();

  useEffect(() => {
    new CheckboxesJS(checkboxRef.current).init()
  })

  var idPrefix = props.idPrefix ? props.idPrefix : props.name
  var describedBy = props.describedBy
  var hint
  var errorMessage

  if (props.hint) {
    var hintId = idPrefix + '-hint';
    describedBy += ' ' + hintId;

    hint = <Hint id={hintId} {...props.hint} aria-describedby={describedBy} />
  }

  if (props.errorMessage) {
    var errorId = idPrefix + '-error';
    describedBy += ' ' + errorId;
    errorMessage = <ErrorMessage id={errorId} {...props.errorMessage} />
  }

  const innerHtml = props.items.map((checkbox, index) =>
    <><div key={props.name + index} className="govuk-checkboxes__item">
      <input
        id={checkbox.conditional ? props.name + '-conditional-' + (index + 1) : props.name + (index + 1)}
        className="govuk-checkboxes__input"
        type="checkbox" name={props.name}
        value={checkbox.value}
        aria-controls={checkbox.conditional ? `conditional-${props.name}-conditional-${index + 1}` : ''}
      />
      <Label text={checkbox.text} classes="govuk-checkboxes__label" for={props.name + (index + 1)} />
      {checkbox.hint ? <Hint classes="govuk-checkboxes__hint" {...checkbox.hint} /> : ''}
    </div>
      {checkbox.conditional ? <div
        className="govuk-checkboxes__conditional govuk-checkboxes__conditional--hidden"
        id={`conditional-${props.name}-conditional-${index + 1}`}
      >
        {checkbox.conditional.html}
      </div> : ''}</>
  )
  return (
    <div className={`govuk-checkboxes${props.classes ? ' ' + props.classes : ''}`}
      {...props.attributes}
      ref={checkboxRef}
    >
      <div className={`govuk-form-group${props.errorMessage ? ' govuk-form-group--error' : ''} ${props.formGroup ? props.formGroup.classes : ''}`} >
        {props.fieldset ? <Fieldset
          describedBy={describedBy}
          {...props.fieldset}>
          {hint}
          {errorMessage}
          {innerHtml}</Fieldset> : <>{hint}{errorMessage}{innerHtml}</>}
      </div>
    </div>
  )
}

Checkboxes.defaultProps = {
  describedBy: ''
}

export default Checkboxes