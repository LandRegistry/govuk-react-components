import React, { useEffect } from 'react';
import WarningText from '../components/govukComponents/WarningText'

function WarningTextDemo() {

  useEffect(() => {
    document.title = 'Skip link demo'
  })

  return (
    <main id="#content">
      <h1 className="govuk-heading-l">Warning text</h1>
      <WarningText text="Skip to main content" />
    </main>
  )
}

export default WarningTextDemo