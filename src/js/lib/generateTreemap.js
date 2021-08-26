import * as d3 from 'd3'

export default function generateTreemap (matches) {
  const treeMapDimensions = { width: 1024, height: 172 }
  // characters in the matches
  const characters = matches.reduce((accumulator, object)=>{
    // console.log(object)
    if(accumulator[object.speaker] === undefined) {
      accumulator[object.speaker] = { name: object.speaker, value: 0, seasonEpisodes: [] }
    }
    accumulator[object.speaker].value += 1
    accumulator[object.speaker].seasonEpisodes.push( {season: object.season, episode: object.episode })
    return accumulator
  },{})

  const treemap = d3.treemap()
    .tile(d3.treemapSquarify.ratio(2))
    .size([treeMapDimensions.width, treeMapDimensions.height])
    .padding(1)
    .round(true)(d3.hierarchy({name: '', children: Object.values(characters)}).sum(d => d.value).sort((a, b) => b.value - a.value))

  return treemap.leaves()
}
