import React from 'react'

function Panel(props) {

  var HeadingLevel = props.headingLevel ? 'h' + props.headingLevel : 'h1'

  if (props.html || props.text) {
    var innerHtml = <div className="govuk-panel__body">
      {props.html ? props.html : props.text}
    </div>
  }
  return (

    <div class={`govuk-panel govuk-panel--confirmation${props.classes ? ' ' + props.classes : ''}`} {...props.attributes}>
      <HeadingLevel className="govuk-panel__title">
        {props.titleHtml ? props.titleHtml : props.titleText}
      </HeadingLevel>
      {innerHtml}
    </div >

  )
}


export default Panel;