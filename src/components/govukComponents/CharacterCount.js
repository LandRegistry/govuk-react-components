import React, { useEffect } from 'react'
import Textarea from "./Textarea"
import CharacterCountJS from 'govuk-frontend/components/character-count/character-count'

function CharacterCount(props) {

  const characterCountRef = React.createRef();
  const characterCountInfoClass = `${props.id}-info`

  useEffect(() => {
    new CharacterCountJS(characterCountRef.current).init()
  }, [])

  return (

    <div
      className="govuk-character-count"
      data-module="character-count"
      data-maxlength={props.maxlength}
      data-threshold={props.threshold}
      data-maxwords={props.maxwords}
      ref={characterCountRef}
    >
      <Textarea
        id={props.id}
        name={props.name}
        rows={props.rows}
        value={props.value}
        classes={`js-character-count ${props.classes}${props.errorMessage ? ' govuk-textarea--error' : ''}`}
        label={props.label}
        hint={props.hint}
        errorMessage={props.errorMessage}
        attributes={props.attributes}
        describedBy={characterCountInfoClass}
      />
      <span id={characterCountInfoClass} className="govuk-hint govuk-character-count__message" aria-live="polite">
        You can enter up to {props.maxlength || props.maxwords} {props.maxwords ? 'words' : 'characters'}
      </span>
    </div>
  )
}

CharacterCount.defaultProps = {
  classes: ''
}

export default CharacterCount
