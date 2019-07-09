import React, {useEffect} from 'react'
import Details from '../components/govukComponents/Details'

function DetailsDemo() {
  useEffect(() => {
    document.title = 'Details demo'
  })

  return (

    <main id="content">
      <h1 className="govuk-heading-l">Details</h1>
      <Details open summaryHtml={<p>Details</p>} html={<p>Details main content</p>} />
    </main>
  )
}

export default DetailsDemo
