import React, { useEffect } from 'react';
import Select from '../components/govukComponents/Select'

function SelectDemo() {

  useEffect(() => {
    document.title = 'Select demo'
  }, [])

  var items = [
    {
      value: "published",
      text: "Recently published",
      disabled: true
    },
    {
      value: "updated",
      text: "Recently updated",
      selected: false
    },
    {
      value: "views",
      text: "Most views",
    },
    {
      value: "comments",
      text: "Most comments"
    }
  ]

  return (
    <main id="main-content">
      <h1 className="govuk-heading-l">Select</h1>
      <Select
        id="sort"
        name="sort"
        label={
          { text: "Sort by" }
        }
        items={items}
      />
    </main>
  )
}

export default SelectDemo