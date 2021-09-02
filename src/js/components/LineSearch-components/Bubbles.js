import { connect } from 'react-redux'
import { Box, Grid } from '@material-ui/core'

const mapStateToProps = (state, ownProps) => {
  return {
    bubbleData: state.bubbleData
  }
}

function mapDispatchToProps(dispatch) {
  return {}
}

function ConnectedBubbles ({ bubbleData }) {
  const circleSizeMobile = 10
  return (
    <Grid container item xs={12}>
      <Grid item xs={12}>
        <Box display={{xs: 'none', sm: 'block' }}>
          <svg viewBox={'0 0 1024 410'} style={{ userSelect: 'none' }}>
            <g transform='translate(0 30)'>
              {
                Object.values(bubbleData.seasons).map((season, seasonIdx) => {
                  return (
                    <g transform={`translate(0 ${seasonIdx*40})`} key={`bubble_season_${seasonIdx}`}>
                      <text x='100' y='0' dy='0.33em' 
                        fontSize='14' fontWeight='700' letterSpacing='.5px'
                        fill='#777'
                        textAnchor='end'>Season {seasonIdx+1}</text>
                      <line x1='125' y1='0' x2={(season.episodes.length*35)+90} y2='0' 
                        stroke='#AAA' strokeWidth='1'/>
                      <g transform='translate(100 0)'>
                      {
                        season.episodes.map((episode, episodeIdx) => {
                          return (
                            <g data-testid={`bc-${seasonIdx}-${episodeIdx}`}
                              transform={`translate(${(episodeIdx * 35) + 25} 0)`} key={`bubble_season_${seasonIdx}_episode_${episodeIdx}`}
                              style={{
                                cursor: episode > 0 ? 'pointer' : null
                              }}
                              onClick={()=>{
                                if (episode > 0) {
                                  const reference = document.getElementById(`quote_${seasonIdx+1}_${episodeIdx+1}`)
                                  if(reference === null) {
                                    return
                                  }
                                  window.scrollTo({
                                    top: reference.offsetTop,
                                    behavior: 'smooth'
                                  })
                                }
                              }}                          
                            >
                              <circle 
                                cx='0' cy='0' r='15' 
                                fill={ episode === 0 ? 'white' : '#a6cee3' }
                                stroke={ episode === 0 ? '#AAA' : 'none' }/>
                              <text x='0' y='0' 
                                fill={ episode === 0 ? 'white' : '#333' }
                                fontWeight='700' fontSize='12' 
                                textAnchor='middle' dy='0.33em'>{episode}</text>
                            </g>
                          )
                        })
                      }
                      </g>
                    </g>
                  )
                })
              }
            </g>
            <g transform='translate(0 385)'>
              <text x='100' fill='#AAA' y='0' dy='0.33em' fontSize='10' letterSpacing='1px' fontWeight='600'  textAnchor='end'>EPISODE</text>
              <line x1='125' y1='0' x2={(26*35)+90} y2='0' stroke='#CCC' strokeWidth='1'/>
              {
                new Array(26).fill(0).map((n,idx)=>{
                  return (
                    <g transform={`translate(${125+(idx*35)} 0)`} key={`bubbles_legend_episode_${idx}`}>
                      <circle cx='0' cy='0' r='10' fill='white' stroke='#CCC'/>
                      <text fill='#AAA' dy='.33em' fontSize='10' textAnchor='middle'>{idx+1}</text>
                    </g>
                  )
                })
              }
            </g>
          </svg>
        </Box>
        <Box display={{ xs: 'block', sm: 'none' }}>
          <svg viewBox={'0 0 370 660'} style={{ userSelect: 'none' }}>
            <g transform='translate(0 20)'>
              {
                Object.values(bubbleData.seasons).map((season, seasonIdx) => {
                  return (
                    <g transform={`translate(0 ${seasonIdx*65})`} key={`bubble_season_${seasonIdx}`}>
                      <text x='5' y='-2' dy='0.33em' 
                        fontSize='14' fontWeight='700' letterSpacing='.5px'
                        fill='#777'>Season {seasonIdx+1}</text>                    
                      <g transform='translate(-10 20)'>                
                      {
                        season.episodes.map((episode, episodeIdx) => {
                          return (
                            <g data-testid={`bc-mobile-${seasonIdx}-${episodeIdx}`}
                              transform={`translate(${25 + (episodeIdx * circleSizeMobile*1.333)} ${(episodeIdx % 2 === 1 ? circleSizeMobile * 1.8 : 0)})`} key={`bubble_season_${seasonIdx}_episode_${episodeIdx}`}
                              style={{
                                cursor: episode > 0 ? 'pointer' : null
                              }}
                              onClick={()=>{
                                if (episode > 0) {
                                  const reference = document.getElementById(`quote_${seasonIdx+1}_${episodeIdx+1}`)
                                  if(reference === null) {
                                    return
                                  }
                                  window.scrollTo({
                                    top: reference.offsetTop,
                                    behavior: 'smooth'
                                  })
                                }
                              }}                          
                            >
                              <line x1='0' y1='0' x2={circleSizeMobile*0.75} y2={ episodeIdx % 2 === 1 ? -circleSizeMobile: circleSizeMobile }  stroke='#AAA' strokeWidth='1' opacity={ episodeIdx === season.episodes.length - 1 ? 0 : 1 }/>
                              <circle 
                                cx='0' cy='0' r={circleSizeMobile}
                                fill={ episode === 0 ? 'white' : '#a6cee3' }
                                stroke={ episode === 0 ? '#AAA' : 'none' }
                                strokeWidth='1'/>
                              <text x='0' y='0' 
                                fill={ episode === 0 ? 'white' : '#333' }
                                fontWeight='700' fontSize='10' 
                                textAnchor='middle' dy='0.33em'>{episode}</text>
                            </g>
                          )
                        })
                      }
                      </g>
                    </g>
                  )
                })
              }
            </g>
            <g transform='translate(0 620)'>
              <text x='5' y='-20' fill='#AAA' dy='0.33em' fontSize='10' letterSpacing='1px' fontWeight='600'>EPISODE</text>
              {
                new Array(26).fill(0).map((n,episodeIdx)=>{
                  return (
                    <g transform={`translate(${25 + (episodeIdx * circleSizeMobile*1.333)} ${(episodeIdx % 2 === 1 ? circleSizeMobile * 1.8 : 0)})`} key={`bubble_legend_episode_${episodeIdx}`}>
                      <line x1='0' y1='0' x2={circleSizeMobile*0.75} y2={ episodeIdx % 2 === 1 ? -circleSizeMobile: circleSizeMobile }  stroke='#CCC' strokeWidth='1' opacity={ episodeIdx === 25 ? 0 : 1 }/>
                      <circle 
                        cx='0' cy='0' r={circleSizeMobile}
                        fill='white'
                        stroke='#CCC'/>
                      <text x='0' y='0' 
                        fill='#CCC'
                        fontWeight='700' fontSize='10' 
                        textAnchor='middle' dy='0.33em'>{episodeIdx+1}</text>
                    </g>
                  )
                })
              }
            </g>
          </svg>
        </Box>
      </Grid>
    </Grid>
  )
}

const Bubbles = connect(mapStateToProps, mapDispatchToProps)(ConnectedBubbles)

export default Bubbles