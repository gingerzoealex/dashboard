const getColumnTitles = (data) => {
  const tableHeaders = Object.keys(data[0])
  return tableHeaders
}

export default getColumnTitles
