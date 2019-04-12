import React from 'react'

function SkipLink(props) {

  return (
    <a href={props.href} className={`govuk-skip-link${props.classes ? ' ' + porps.classes : ''}`} {...props.attributes}>
      {props.html ? props.hmtl : props.text}
    </a>
  )
}

SkipLink.defaultProps = {
  href: '#content'
}

export default SkipLink;