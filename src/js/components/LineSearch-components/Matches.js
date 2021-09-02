import { connect } from 'react-redux'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import { expandAllLines, expandLine } from '../../actions/index'

const mapStateToProps = (state, ownProps) => {
  return {
    lines: state.lines,
    isTabletOrMobile: state.isTabletOrMobile,
    matches: state.matches,
    maxSlice: state.maxSlice,
    expandedMatches: state.expandedMatches,
    filteredCharacter: state.filteredCharacter,
    series: state.series
  }
}

function mapDispatchToProps(dispatch) {
  return {
    expandAllLines: payload => dispatch(expandAllLines(payload)),
    expandLine: payload => dispatch(expandLine(payload))    
  }
}

function ConnectedMatches (props) {
  return (
    <Grid item container xs={12}>
      <Grid item container data-testid='matches' xs={12}>
        <Grid item container xs={12} alignItems='center' style={{ padding: 12, textAlign: 'center', marginBottom: 2, fontWeight: 600, letterSpacing: 1 }}>            
          <Grid item xs={4} sm={1} md={1}>
            <Box display={{ xs: 'none', md: 'block' }}>
              Season
            </Box>
          </Grid>            
          <Grid item xs={6} sm={2} md={2}>
            <Box display={{ xs: 'none', md: 'block' }}>
              Episode
            </Box>
          </Grid>
          <Grid item xs={4} sm={2} md={2}>
            <Box display={{ xs: 'none', md: 'block' }}>
              Speaker
            </Box>
          </Grid>
          <Grid item xs={10} sm={4} md={6} style={{ textAlign: 'left' }}>
            <Box display={{ xs: 'none', md: 'block' }}>
              Line
            </Box>
          </Grid>
          <Grid item xs={2} sm={3} md={1} style={{ cursor: 'pointer', color: '#333', fontSize: 10, fontWeight: 900, textAlign: 'right' }}
              onClick={()=>{ props.expandedMatches.length === props.matches.length ? props.expandAllLines(false) : props.expandAllLines(true) }}>
                {props.expandedMatches.length === props.matches.length ? 'collapse all' : 'expand all'}
          </Grid>            
        </Grid>              
        {
          props.matches.slice(0,props.maxSlice === true ? props.matches.length : 50)
          .filter(match=>{
            if(props.filteredCharacter === null || props.filteredCharacter === match.speaker) {
              return true
            } else {
              return false
            }
          }).map((match,matchIndex)=>{
            const expandedMatch = props.expandedMatches.indexOf(matchIndex) !== -1
            return (
              <Grid data-testid={`matches_${match.id}`} 
                id={`quote_${match.season}_${match.episode}`} 
                key={`match_${match.id}`} item container xs={12} 
                alignItems={ expandedMatch ? 'flex-start' : 'center' }
                style={{ 
                  borderRadius: 4, 
                  backgroundColor: matchIndex % 2 === 0 ? "#FFFFFF" : '#F3F3F3', 
                  padding: 12, 
                  textAlign: 'center', 
                  marginBottom: 0 
                }}>
                <Grid item xs={2} sm={1}><Box display={{xs:'inline-block', sm: 'none'}}>S</Box>{match.season}</Grid>
                <Grid item xs={6} sm={2}>{props.series.filter(o=>{ return Number(o.Season) === Number(match.season) })[Number(match.episode)-1].EpisodeTitle}</Grid>
                <Box display={{ xs: 'block', sm: 'none' }}><Grid item xs={12} style={{ height: 32 }}/></Box>
                <Grid item xs={4} sm={2}>{match.speaker}</Grid>              
                <Grid item xs={12} sm={6} style={{ textAlign: 'left' }}>
                  {(()=>{
                    if (expandedMatch === true) {
                      const previousLine = props.lines.filter(o=>{ return Number(o.id) === Number(match.id)-1 })[0]
                      if(previousLine === undefined ) {
                        return (
                          <></>
                        )
                      }
                      return (
                        <div style={{padding: '0px 0px 12px 0px'}}><b>{previousLine.speaker}</b> {previousLine.line_text}</div>
                      )
                    }
                  })()}
                  <b>{expandedMatch === true ? match.speaker + ' ' : ''}</b>{match.line_text}
                  {(()=>{
                    if (expandedMatch === true) {
                      const nextLine = props.lines.filter(o=>{ return Number(o.id) === Number(match.id)+1 })[0]
                      if(nextLine === undefined ) {
                        return (
                          <></>
                        )
                      }
                      return (
                        <div style={{padding: '12px 0px 0px 0px'}}><b>{nextLine.speaker}</b> {nextLine.line_text}</div>
                      )
                    }
                  })()}
                </Grid>
                <Grid item xs={12} sm={1} 
                  style={{ 
                    cursor: 'pointer', 
                    color: '#333', 
                    fontSize: 10, 
                    fontWeight: 900, 
                    textAlign: 'right' 
                  }}
                  onClick={()=>{ props.expandLine(matchIndex) }}>
                    { expandedMatch === true ? 'less' : 'more'}
                  </Grid>
              </Grid>                
            )                
          })
        }
      </Grid>   
    </Grid>
  )
}

const Matches = connect(mapStateToProps, mapDispatchToProps)(ConnectedMatches)

export default Matches