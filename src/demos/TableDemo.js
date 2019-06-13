import React, { useEffect } from 'react';
import Table from '../components/govukComponents/Table'

function TableDemo() {

  useEffect(() => {
    document.title = 'Table demo'
  }, [])

  return (
    <main id="#content">
      <h1 className="govuk-heading-l">Table</h1>
      <Table />
    </main>
  )
}

export default TableDemo
