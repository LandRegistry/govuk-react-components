import React from 'react'

function Table(props) {

  if (props.caption) {
    var caption = <caption className={`govuk-table__caption${props.captionClasses ? ' ' + props.captionClasses : ''}`}>
      {props.caption}
    </caption>
  }

  if (props.head) {
    var head = <thead class="govuk-table__head">
      <tr className="govuk-table__row">
        {props.head.map((item, index) =>
          <th
            key
            className={`govuk-table__header${item.format ? ' govuk-table__header--' + item.format : ''}
            ${item.classes ? ' ' + item.classes : ''}`}
            colspan={item.colspan}
            rowspan={item.rowspan}
            {...props.attributes}
            scope="col">
            {item.html ? item.html : item.text}</th>
        )}
      </tr>
    </thead>
  }

  var body = props.rows.map((row, index) =>
    <tr key={"row" + index} className="govuk-table__row">
      {row.text.map((cell, index) => {
        if (index === 0 && props.firstCellIsHeader) {
          <th class="govuk-table__header" scope="row">{cell.html ? cell.html : cell.text}</th>
        }
      }
      )}
    </tr>
  )

  // {% elseif loop.first %}
  // <td class="govuk-table__cell
  // {%- if cell.format %} govuk-table__cell--{{ cell.format }}{% endif %}
  // {%- if cell.classes %} {{ cell.classes }}{% endif %}"
  // {%- if cell.colspan %} colspan="{{ cell.colspan }}"{% endif %}
  // {%- if cell.rowspan %} rowspan="{{ cell.rowspan }}"{% endif %}{% for attribute, value in cell.attributes %} {{ attribute }}="{{ value }}"{% endfor %}>{{ cell.html | safe if cell.html else cell.text }}</td>
  // {% else %}
  // <td class="govuk-table__cell
  // {%- if cell.format %} govuk-table__cell--{{ cell.format }}{% endif %}
  // {%- if cell.classes %} {{ cell.classes }}{% endif %}"
  // {%- if cell.colspan %} colspan="{{ cell.colspan }}"{% endif %}
  // {%- if cell.rowspan %} rowspan="{{ cell.rowspan }}"{% endif %}{% for attribute, value in cell.attributes %} {{ attribute }}="{{ value }}"{% endfor %}>{{ cell.html | safe if cell.html else cell.text }}</td>
  // {% endif %}


  return (
    <table
      className={`govuk-table${props.classes ? ' ' + props.classes : ''}`}
      {...props.attributes}
    >
      {caption}
      {head}
      <tbody class="govuk-table__body">
        {body}
      </tbody>
    </table>

  )
}

export default Table
