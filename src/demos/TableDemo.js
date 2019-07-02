import React, {useEffect} from 'react'
import Table from '../components/govukComponents/Table'

function TableDemo() {
  useEffect(() => {
    document.title = 'Table demo'
  }, [])

  const tableDemo = {
    caption: 'Caption 1: Months and rates',
    captionClasses: 'govuk-heading-m',
    firstCellIsHeader: true,
    head: [
      {
        text: 'Month you apply',
      },
      {
        text: 'Rate for bicycles',
        format: 'numeric',
      },
      {
        text: 'Rate for vehicles',
        format: 'numeric',
      },
    ],
    rows: [
      [
        {
          text: 'January',
        },
        {
          text: '£85',
          format: 'numeric',
        },
        {
          text: '£95',
          format: 'numeric',
        },
      ],
      [
        {
          text: 'February',
        },
        {
          text: '£75',
          format: 'numeric',
        },
        {
          text: '£55',
          format: 'numeric',
        },
      ],
      [
        {
          text: 'March',
        },
        {
          text: '£165',
          format: 'numeric',
        },
        {
          text: '£125',
          format: 'numeric',
        },
      ],
    ],
  }

  return (
    <main id="#content">
      <h1 className="govuk-heading-l">Table</h1>
      <Table {...tableDemo} />
    </main>
  )
}

export default TableDemo
