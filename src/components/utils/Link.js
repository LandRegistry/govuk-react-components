import React from 'react'
import { Link as ReactRouterLink } from 'react-router-dom'

function Link(props) {
  const {
    children, classes, attributes, to, href,
  } = props
  if (to) {
    return <ReactRouterLink ref={props.forwardedRef} to={to} className={classes} {...attributes}>{props.children}</ReactRouterLink>
  }
  return <a ref={props.forwardedRef} href={href} className={classes} {...attributes}>{children}</a>
}

Link.defaultProps = {
  classes: '',
  className: '',
}

export default React.forwardRef((props, ref) => <Link {...props} forwardedRef={ref} />);
