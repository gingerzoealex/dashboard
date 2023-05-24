// making a types file and passing the props to the components
// explicity is more personal preference - i think it looks cleaner and easier
// to follow, as well as easier debugging if a prop is causing an error (rather than using the spread operator)
type TableType = {
  tableData: Array<object>
}

export default TableType
