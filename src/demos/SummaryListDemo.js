import React, { useEffect } from 'react';
import SummaryList from '../components/govukComponents/SummaryList'

function SummaryListDemo() {

  useEffect(() => {
    document.title = 'Summary list demo'
  }, [])

  return (
    <main id="#content">
      <h1 className="govuk-heading-l">Summary list</h1>
      <SummaryList />
    </main>
  )
}

export default SummaryListDemo
