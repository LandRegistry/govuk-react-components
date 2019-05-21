import React, { useEffect } from 'react';
import Table from '../components/govukComponents/Table'

function TableDemo() {

  useEffect(() => {
    document.title = 'Table demo'
  }, [])

  return (
    <main id="main-content">
      <h1 className="govuk-heading-l">Table</h1>
      <Table
        caption="Dates and amounts"
        firstCellIsHeader={true}
        head={[{
          text: "Date"
        },
        {
          text: "Amount"
        }
        ]}
        rows={[
          [
            {
              text: "First 6 weeks"
            },
            {
              text: "£109.80 per week"
            }
          ],
          [
            {
              text: "Next 33 weeks"
            },
            {
              text: "£109.80 per week"
            }
          ],
          [
            {
              text: "Total estimated pay"
            },
            {
              text: "£4,282.20"
            }
          ]
        ]}
      />
    </main>
  )
}

export default TableDemo
