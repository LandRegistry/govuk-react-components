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

  // Find out if we have any conditional items
  const conditional = !!props.items.find(item => item.conditional)

  if (props.errorMessage) {
    var errorId = idPrefix + '-error';
    describedBy += ' ' + errorId;
    errorMessage = <ErrorMessage id={errorId} {...props.errorMessage} />
  }

  const innerHtml = <>
    {hint}
    {errorMessage}

    <div className={`govuk-radios${props.classes ? ' ' + props.classes : ''}${conditional ? ' govuk-radios--conditional' : ''}`}
      {...props.attributes}
      ref={radioRef}
      data-module={conditional ? 'radios' : null}
    >
      {props.items.map((radio, index) =>
        radio.divider ? <div key={radio.divider + index} className="govuk-radios__divider">{radio.divider}</div> : <React.Fragment key={props.name + index}><div className="govuk-radios__item">
          <input
            className="govuk-radios__input"
            id={idPrefix + '-' + (index + 1)}
            name={props.name}
            type="radio"
            value={radio.value}
            defaultChecked={radio.checked}
            data-aria-controls={radio.conditional ? `conditional-${idPrefix}-${index + 1}` : null}
            aria-describedby={radio.hint ? `${idPrefix}-${index + 1}-item-hint` : null}
            disabled={radio.disabled}
          />
          <Label text={radio.text} classes="govuk-radios__label" for={idPrefix + '-' + (index + 1)} />
          {radio.hint ? <Hint classes="govuk-radios__hint" {...radio.hint} id={`${idPrefix}-${index + 1}-item-hint`} /> : ''}
        </div>
          {radio.conditional ? <div
            className={`govuk-radios__conditional ${radio.checked ? '' : 'govuk-radios__conditional--hidden'}`}
            id={`conditional-${idPrefix}-${index + 1}`}
          >
            {radio.conditional.html}
          </div> : ''}</React.Fragment>
      )}
    </div>
  </>

  return (
    <div className={`govuk-form-group${props.errorMessage ? ' govuk-form-group--error' : ''} ${props.formGroup ? props.formGroup.classes : ''}`} >
      {props.fieldset ? <Fieldset describedBy={describedBy} {...props.fieldset}>
        {innerHtml}
      </Fieldset> : innerHtml}
    </div>
  )
}

Radios.defaultProps = {
  describedBy: ''
}

export default Radios
