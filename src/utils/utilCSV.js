export function parseCSV(csv, sep=',') {
  if(!csv) return []

  var csv_split = csv.split("").slice(0, 1000)
  var lines = csv.split('\n')
  var validLines = lines.filter(line => line)
  var columns = validLines[0].split(sep)
  var contentLines = validLines.slice(1)
  var contentDictList = contentLines.map(line => parseCSVCore(line, columns, sep))

  console.log('utils.utilCSV::parseCSV: columns:', columns, 'contentLines:', contentLines, 'contentDictList:', contentDictList)

  return contentDictList
}

function parseCSVCore(line, columns, sep=',') {
  var contents = line.split(sep)
  var result = columns.reduce((o, col, i) => {
    var content = i >= contents.length ? '' : contents[i]
    o[col] = content

    return o
  }, {});

  return result
}
