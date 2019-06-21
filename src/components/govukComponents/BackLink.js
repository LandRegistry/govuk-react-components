import React from 'react'
import Link from '../utils/Link.js'

function BackLink(props) {
  const contents = props.html ? props.html : props.text

  const {attributes, href, to} = props

  return <Link classes={`govuk-back-link ${props.classes}`} {...{attributes, href, to}}>{contents}</Link>
}

BackLink.defaultProps = {
  href: "/",
  text: 'Back',
  classes: ''
}

export default BackLink
