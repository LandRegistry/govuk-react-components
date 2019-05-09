import React, { useEffect } from 'react'
import Textarea from "./Textarea"
import CharacterCountJS from 'govuk-frontend/components/character-count/character-count'

function CharacterCount(props) {

  const characterCountRef = React.createRef();

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
        classes={`js-character-count${props.classes ? ' ' + props.classes : ''}${props.errorMessage ? ' govuk-textarea--error' : ''}`}
        label={props.label}
        hint={props.hint}
        errorMessage={props.errorMessage}
        attributes={props.attributes}
      />
      <span id={`${props.id}-info`} className="govuk-hint govuk-character-count__message" aria-live="polite">
        You can enter up to {props.maxlength || props.maxwords} {props.maxwords ? 'words' : 'characters'}
      </span>
    </div>
  )
}

export default CharacterCount
