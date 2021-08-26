import { connect } from 'react-redux'
import Grid from '@material-ui/core/Grid'

const mapStateToProps = (state, ownProps) => {
  return {
    resultsFound: state.filteredCharacter !== null ? state.matches.filter(o=>{ return o.speaker === state.filteredCharacter }).length : state.matches.length
  }
}

function mapDispatchToProps(dispatch) {
  return {}
}

function ConnectedResultsFoundCount (props) {
  return (
    <Grid item container xs={12} justifyContent='flex-end'>
      <span style={{fontWeight: 700, marginRight: 4}}>{ props.resultsFound }</span> result{ props.resultsFound === 1 ? '' : 's' } found
    </Grid>
  )
}

const ResultsFoundCount = connect(mapStateToProps, mapDispatchToProps)(ConnectedResultsFoundCount)

export default ResultsFoundCount