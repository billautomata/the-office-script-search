export default function updateBubbleData (bubbleData, matches) {
  const newBubbleData = { seasons: [] }
  newBubbleData.seasons = bubbleData.seasons.map(season => {
      const o = { episodes: [] }
      o.episodeCount = season.episodeCount
      season.episodes.map(episode=>{
        o.episodes.push(0)
      })
      return o
    }) 

  matches.forEach(match => {
    newBubbleData.seasons[Number(match.season)-1].episodes[Number(match.episode)-1] += 1
  })

  return newBubbleData
}