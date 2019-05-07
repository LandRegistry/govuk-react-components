import React from 'react'

function Breadcrumbs(props) {

  const breadcrumbs = props.items.map((item, index) =>
    item.href ?
      <li key={'breadcrumb' + index} className="govuk-breadcrumbs__list-item">
        <a className="govuk-breadcrumbs__link" href={item.href} {...item.attributes}>{item.html ? item.html : item.text}</a>
      </li >
      :
      <li key={'breadcrumb' + index} className="govuk-breadcrumbs__list-item" aria-current="page">{item.html ? item.html : item.text}</li>
  )

  return (
    <div className={`govuk-breadcrumbs${props.classes ? ' ' + props.classes : ''}`} {...props.attributes}>
      <ol className="govuk-breadcrumbs__list">
        {breadcrumbs}
      </ol>
    </div>
  )
}

Breadcrumbs.defaultProps = {

}

export default Breadcrumbs
