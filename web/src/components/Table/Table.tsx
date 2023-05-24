import react from 'react'

import TableType from './types'
import './Table.scss'

const Table = ({ tableData }: TableType) => {
  // The elements of the table could be split up into separate components.
  // I tend to start with the simplest approach with the least amount of code
  // and then build up if changes are needed. ie, if we have 2 tables in the backlog and they have different data structures,
  // we build a table that's as reusable as possible, ship the priority first, then extend the component to handle different data structures
  // ideally, the component shouldn't care about the shape of the data, it should just make a table
  if (!tableData.length) {
    return <>No data found</>
  }

  return (
    <table className="table">
      {/* BEM for naming CSS classes is my preference, I'm open to different approaches,
      this is just familiar and easy to follow.
      SCSS can get wild and classes can get forgotten about, BEM makes it easier to remove/change things, and it's really scalable
      I'm a big fan of writing CSS and I find it so much easier to maintain a codebase where we have full control over
      styling without needing to rely on extensive documentation to update component styling.
      Tailwind isn't a good example of this, but CSS frameworks can be super bulky and ick.
      I can work within Tailwind if necessary but my opinion is that writing good CSS from the outset is the way to go */}
      <thead className="table__header">
        {tableData?.map(({ name }, index: number) => {
          return (
            <th key={name + index.toString()} className="table__header">
              {name}
            </th>
          )
        })}
      </thead>
      <tbody className="table__body">
        {tableData?.map(({ statistic }, index: number) => {
          return <tr key={statistic + index.toString()}>{statistic}</tr>
        })}
      </tbody>
    </table>
  )
}

export default Table
