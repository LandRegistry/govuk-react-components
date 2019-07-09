import React, {useEffect} from 'react'
import Panel from '../components/govukComponents/Panel'

function PanelDemo() {
  useEffect(() => {
    document.title = 'Panel demo'
  })

  return (
    <main id="main-content">
      <h1 className="govuk-heading-l">Panel</h1>
      <Panel titleText="Panel demo" />
      <h2 className="govuk-heading-m">Panel with text</h2>
      <Panel titleText="Application complete" text="Your reference number HDJ2123F" />
      <h2 className="govuk-heading-m">Panel with html content</h2>
      <Panel
        titleText="Skip to main content"
        html={(
          <>
Your reference number
            <br />
            <strong>HDJ2123F</strong>
          </>
)}
      />
    </main>
  )
}

export default PanelDemo
