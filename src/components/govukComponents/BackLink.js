import React from 'react'
import Link from '../utils/Link.js'

function BackLink(props) {
  const contents = props.html ? props.html : props.text

  return (
    <Link classes={`govuk-back-link ${props.classes}`} attributes={props.attributes} href={props.href} to={props.to}>
      {contents}
    </Link>
  )
}

BackLink.defaultProps = {
  href: '/',
  text: 'Back',
  classes: '',
}

export default BackLink
