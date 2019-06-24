import React from 'react'

function SkipLink(props) {
  return (
    <a href={props.href} className={`govuk-skip-link ${props.classes}`} {...props.attributes}>
      {props.html ? props.hmtl : props.text}
    </a>
  )
}

SkipLink.defaultProps = {
  href: '#content',
  classes: '',
}

export default SkipLink;
