export default function cleanUpLines (lines) {
  const charactersToRemove = ['?','.',',','!','-']
  const filteredLines = lines.filter(o=>{return o.deleted !== 'TRUE'})

  // clean up the lines
  filteredLines.forEach(line=>{
    line.search_text = line.line_text.replace(RegExp('\\[.*?\\]'),'');          
    charactersToRemove.forEach((c,idx)=>{
      line.search_text = line.search_text.replaceAll(c,' ')
    })          
    line.search_text = line.search_text.split(' ').filter(o=>o.length>0).join(' ')
  })
  return filteredLines
}