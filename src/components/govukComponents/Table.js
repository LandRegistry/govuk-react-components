import React from 'react'

function Table(props) {
  var caption
  if (props.caption) {
    caption = <caption className={`govuk-table__caption ${props.captionClasses || ''}`}>
      { props.caption }
    </caption>
  }

  var head
  if (props.head) {
    head = <thead className="govuk-table__head">
      <tr className="govuk-table__row">
        {props.head.map((item, index) =>
          <th
            key={index}
            scope="col"
            className={`govuk-table__header ${item.format ? `govuk-table__header--${item.format}` : ''} ${item.classes || ''}`}
            colSpan={item.colspan || null}
            rowSpan={item.rowspan || null}
            {...item.attributes}
          >
            {item.html || item.text}
          </th>
        )}
      </tr>
    </thead>
  }


  return <table className={`govuk-table ${props.classes}`} {...props.attributes}>
    {caption}
    {head}

    <tbody className="govuk-table__body">
      {props.rows.map((row, rowIndex) =>
        <tr key={rowIndex} className="govuk-table__row">
          {row.map((cell, cellIndex) => {

            const commonAttributes = {
              colSpan: cell.colspan,
              rowSpan: cell.rowspan,
              attributes: cell.attributes
            }

            if (cellIndex === 0 && props.firstCellIsHeader) {
              return <th key={`${rowIndex}:${cellIndex}`} scope='row' className={`govuk-table__header ${cell.classes || ''}`} {...commonAttributes}>
                {cell.html || cell.text}
              </th>
            } else {
              return <td key={`${rowIndex}:${cellIndex}`} className={`govuk-table__cell ${cell.classes || ''} ${cell.format ? `govuk-table__cell--${cell.format}` : ''}`} {...commonAttributes}>
                {cell.html || cell.text}
              </td>
            }
          })}
        </tr>
      )}
    </tbody>
  </table>
}

Table.defaultProps = {
  classes: ''
}

export default Table;
