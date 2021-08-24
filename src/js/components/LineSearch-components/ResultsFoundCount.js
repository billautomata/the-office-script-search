import { connect } from 'react-redux'
import Grid from '@material-ui/core/Grid'

const mapStateToProps = (state, ownProps) => {
  return {
    resultsFound: state.matches.length
  }
}

function mapDispatchToProps(dispatch) {
  return {}
}

function ConnectedResultsFoundCount (props) {
  return (
    <Grid item container xs={12} justify='flex-end'>
      { props.resultsFound } result{ props.resultsFound === 1 ? '' : 's' } found
    </Grid>
  )
}

const ResultsFoundCount = connect(mapStateToProps, mapDispatchToProps)(ConnectedResultsFoundCount)

export default ResultsFoundCount