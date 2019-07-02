import React, {useEffect} from 'react'
import Label from '../components/govukComponents/Label'

function LabelDemo() {
  useEffect(() => {
    document.title = 'Label demo'
  }, [])

  return (
    <main id="main-content">
      <h1 className="govuk-heading-l">Label</h1>
      <Label text="Plain label" isPageHeading={false} />
      <Label text="Label as page header" isPageHeading />
      <Label html="Label for text input" for="input" attributes={{id: 'melon', title: 'label'}} />
      <Label html={<span className="govuk-heading-s">Label with html set instead of text</span>} for="input" />
    </main>
  )
}

export default LabelDemo
