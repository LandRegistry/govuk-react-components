import React, { useEffect } from 'react'
import RadiosJS from 'govuk-frontend/components/radios/radios'
import ErrorMessage from './ErrorMessage'
import Fieldset from './Fieldset'
import Hint from './Hint'
import Label from './Label'

function Radios(props) {

  const radioRef = React.createRef();

  useEffect(() => {
    new RadiosJS(radioRef.current).init()
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

  const innerHtml = props.items.map((radio, index) =>
    radio.divider ? <div key={radio.divider + index} className="govuk-radios__divider">{radio.divider}</div> : <><div key={props.name + index} className="govuk-radios__item">
      <input
        id={radio.conditional ? props.name + '-conditional-' + (index + 1) : props.name + (index + 1)}
        className="govuk-radios__input"
        type="radio" name={props.name}
        value={radio.value}
        aria-controls={radio.conditional ? `conditional-${props.name}-conditional-${index + 1}` : ''}
      />
      <Label text={radio.text} classes="govuk-radios__label" for={props.name + (index + 1)} />
      {radio.hint ? <Hint classes="govuk-radios__hint" {...radio.hint} /> : ''}
    </div>
      {radio.conditional ? <div
        className="govuk-radios__conditional govuk-radios__conditional--hidden"
        id={`conditional-${props.name}-conditional-${index + 1}`}
      >
        {radio.conditional.html}
      </div> : ''}</>
  )
  return (
    <div className={`govuk-radios${props.classes ? ' ' + props.classes : ''}`}
      {...props.attributes}
      ref={radioRef}
    >
      <div className={`govuk-form-group${props.errorMessage ? ' govuk-form-group--error' : ''} ${props.formGroup ? props.formGroup.classes : ''}`} >
        {props.fieldset ? <Fieldset
          describedBy={describedBy}
          {...props.fieldset}
        >
          {hint}
          {errorMessage}
          {innerHtml}</Fieldset> : <>{hint}{errorMessage}{innerHtml}</>}
      </div>
    </div>
  )
}

Radios.defaultProps = {
  describedBy: ''
}

export default Radios