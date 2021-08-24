export default function buildEmptyBubbleData (series) {
  console.log('buildEmptyBubbleData', series)
  const seasons = {}
  series.forEach(episode => {
    if(seasons[episode.Season] === undefined) {
      seasons[episode.Season] = {
        episodes: []
      }
    }
    if(seasons[episode.Season].episodeCount === undefined) {
      seasons[episode.Season].episodeCount = 0
    }
    seasons[episode.Season].episodeCount += 1    
  })
  
  Object.values(seasons).forEach(season => {
    for (let i = 0; i < season.episodeCount; i++) {
      season.episodes.push(0)
    }
  })

  return {
    seasons: toArray(seasons)
  }
}

function toArray (object) {
  const o = []
  Object.values(object).forEach((obj, objIndex)=>{
    o.push(obj)
  })
  return o
}