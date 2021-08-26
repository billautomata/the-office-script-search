import { connect } from 'react-redux'
import { Grid } from '@material-ui/core'
// import { findMatches, setQuote } from '../../actions/index'

const mapStateToProps = (state, ownProps) => {
  return {
    bubbleData: state.bubbleData
  }
}

function mapDispatchToProps(dispatch) {
  return {}
}

function ConnectedBubbles ({ bubbleData }) {
  return (
    <Grid item xs={12}>
      <svg style={{ width: 1024, height: 420, userSelect: 'none' }}>
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
                        <g transform={`translate(${(episodeIdx * 35) + 25} 0)`} key={`bubble_season_${seasonIdx}_episode_${episodeIdx}`}
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
    </Grid>
  )
}

const Bubbles = connect(mapStateToProps, mapDispatchToProps)(ConnectedBubbles)

export default Bubbles