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
    <Grid container xs={12}>
      <Grid item xs={12}>Series Length: {state.series.length}</Grid>
      <Grid item xs={12}>Lines Length: {state.lines.length}</Grid>
      <Grid item xs={12}>Matches Length: {state.matches.length}</Grid>
    </Grid>
  )
}

const StateDebug = connect(mapStateToProps, mapDispatchToProps)(ConnectedStateDebug)

export default StateDebug