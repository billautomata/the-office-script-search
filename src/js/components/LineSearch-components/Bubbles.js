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
      <svg style={{ width: 1024, height: 420 }}>
        <g transform='translate(0 30)'>
          {
            Object.values(bubbleData.seasons).map((season, seasonIdx) => {
              return (
                <g transform={`translate(0 ${seasonIdx*40})`}>
                  <text x='100' y='0' dy='0.33em' fontSize='16' fontWeight='600' textAnchor='end'>Season {seasonIdx+1}</text>
                  <line x1='125' y1='0' x2={(season.episodes.length*35)+90} y2='0' stroke='#AAA' strokeWidth='2'/>
                  <g transform='translate(100 0)'>
                  {
                    season.episodes.map((episode, episodeIdx) => {
                      return (
                        <g transform={`translate(${(episodeIdx * 35) + 25} 0)`}>
                          <circle 
                            cx='0' cy='0' r='15' 
                            fill={ episode === 0 ? 'white' : 'steelblue' }
                            stroke='#AAA'
                          />
                          <text x='0' y='0' fill='white' fontWeight='700' fontSize='14' textAnchor='middle' dy='0.33em'>{episode}</text>
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
          <text x='100' y='0' dy='0.33em' fontSize='12' fontWeight='600' textAnchor='end'>Episode</text>
          <line x1='125' y1='0' x2={(26*35)+90} y2='0' stroke='#AAA' strokeWidth='2'/>
          {
            new Array(26).fill(0).map((n,idx)=>{
              return (
                <g transform={`translate(${125+(idx*35)} 0)`}>
                  <circle cx='0' cy='0' r='10' fill='white' stroke='#AAA'/>
                  <text dy='.33em' fontSize='10' textAnchor='middle'>{idx+1}</text>
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