import { connect } from 'react-redux'
import Grid from '@material-ui/core/Grid'
import ResultsFoundCount from './ResultsFoundCount'

const mapStateToProps = (state, ownProps) => {
  return {
    matches: state.matches,
    series: state.series
  }
}

function mapDispatchToProps(dispatch) {
  return {}
}

function ConnectedMatches (props) {
  return (
    <Grid item container style={{width: 1024, margin: 'auto', letterSpacing: 0.5}}>
      <ResultsFoundCount/>
      <Grid item container data-testid='matches' xs={12}>
        <Grid item container xs={12} alignItems='center' style={{ padding: 12, textAlign: 'center', marginBottom: 2, fontWeight: 600, letterSpacing: 1 }}>
          <Grid item xs={1} style={{textDecoration: 'underline'}}>Season</Grid>
          <Grid item xs={2} style={{textDecoration: 'underline'}}>Episode</Grid>
          <Grid item xs={2} style={{textDecoration: 'underline'}}>Speaker</Grid>
          <Grid item xs={6} style={{ textAlign: 'left', textDecoration: 'underline' }}>Line</Grid>
          <Grid item xs={1} style={{ cursor: 'pointer', color: 'steelblue', fontSize: 10, fontWeight: 500, textAlign: 'right', textDecoration: 'none !important' }}
              onClick={()=>{ this.expandAll = !this.expandAll; this.state.matches.forEach(match=>{match.showMore = this.expandAll}); this.forceUpdate() }}>
                {/* { this.expandAll !== true ? 'expand all' : 'collapse all' } */}
          </Grid>
        </Grid>      
      {
        props.matches.map((match,matchIndex)=>{
          return (
            <Grid data-testid={`matches_${match.id}`} id={`quote_${match.season}_${match.episode}`} key={`match_${match.id}`} item container xs={12} alignItems='center' style={{ borderRadius: 4, backgroundColor: matchIndex % 2 === 0 ? "#FFFFFF" : '#F3F3F3', padding: 12, textAlign: 'center', marginBottom: 0 }}>
              <Grid item xs={1}>{match.season}</Grid>
              <Grid item xs={2}>{props.series.filter(o=>{ return Number(o.Season) === Number(match.season) })[Number(match.episode)-1].EpisodeTitle}</Grid>
              <Grid item xs={2}>{match.speaker}</Grid>
              <Grid item xs={6} style={{ textAlign: 'left' }}>
                {(()=>{
                  if (match.showMore === true) {
                    const previousLine = props.lines.filter(o=>{ return Number(o.id) === Number(match.id)-1 })[0]
                    return (
                      <div style={{padding: '0px 0px 12px 0px'}}><b>{previousLine.speaker}</b> {previousLine.line_text}</div>
                    )
                  }
                })()}
                <b>{match.showMore ? match.speaker + ' ' : ''}</b>{match.line_text}
                {(()=>{
                  if (match.showMore === true) {
                    const nextLine = props.lines.filter(o=>{ return Number(o.id) === Number(match.id)+1 })[0]
                    return (
                      <div style={{padding: '12px 0px 0px 0px'}}><b>{nextLine.speaker}</b> {nextLine.line_text}</div>
                    )
                  }
                })()}
              </Grid>
              <Grid item xs={1} style={{ cursor: 'pointer', color: 'steelblue', fontSize: 10, textAlign: 'right' }}
                onClick={()=>{ match.showMore = !match.showMore; this.forceUpdate() }}>{ match.showMore ? 'less' : 'more'}</Grid>
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