import React, { useEffect } from 'react'
import TabsJS from 'govuk-frontend/components/tabs/Tabs'

function Tabs(props) {
  const tabsRef = React.createRef()

  useEffect(() => {
    new TabsJS(tabsRef.current).init()
  }, [])
  // {#- If an id 'prefix' is not passed, fall back to using the name attribute
  // instead. We need this for error messages and hints as well -#}
  var idPrefix = props.idPrefix ? params.idPrefix : false

  if (props.items) {

    var tabContent = props.items.map((item, index) =>
      <li key={item.id + index} className="govuk-tabs__list-item">
        <a className={`govuk-tabs__tab${index === 1 ? ' govuk-tabs__tab--selected' : ''}`} href={`#${item.id ? item.id : idPrefix + "-" + index}`}
          {...props.attributes}>
          {item.label}
        </a>
      </li>
    )

    var tabs = <ul className="govuk-tabs__list">
      {tabContent}
    </ul>

    var panels = props.items.map((item, index) =>
      <section
        key={item.id + index}
        className={`govuk-tabs__panel${index > 1 ? ' govuk-tabs__panel--hidden' : ''}`}
        id={item.id}
        {...props.attributes}
      >
        {item.panel.html ? item.panel.html : item.panel.text}
      </section>
    )
  }

  return (

    <div
      id={props.id}
      className={`govuk-tabs${props.classes ? ' ' + props.classes : ''}`}
      {...props.attributes}
      data-module="tabs"
      ref={tabsRef}
    >
      <h2 className="govuk-tabs__title">
        {props.title}
      </h2>
      {tabs}
      {panels}
    </div >

  )
}

Tabs.defaultProps = {
  title: 'Contents'
}

export default Tabs;