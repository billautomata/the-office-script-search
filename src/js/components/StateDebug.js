import { connect } from "react-redux"
import { Grid } from '@material-ui/core'


const mapStateToProps = (state, ownProps) => {
  return {
    state: state
  }
}

function mapDispatchToProps(dispatch) {
  return {
  }
}

const ConnectedStateDebug = function ({ state }) {

  return (
    <Grid container>
      <Grid item xs={4}>Series Length: {state.series.length}</Grid>
      <Grid item xs={4}>Lines Length: {state.lines.length}</Grid>
      <Grid item xs={4}>Matches Length: {state.matches.length}</Grid>
      <Grid item xs={12}>Expanded Matches: {state.expandedMatches.join(',')}</Grid>
      <Grid item xs={12}>Treemap Leaves: {state.treemapLeaves.length}</Grid>
      <Grid item xs={12}>Filtered Character: {state.filteredCharacter}</Grid>
    </Grid>
  )
}

const StateDebug = connect(mapStateToProps, mapDispatchToProps)(ConnectedStateDebug)

export default StateDebug