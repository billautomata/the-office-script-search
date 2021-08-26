import Bubbles from './LineSearch-components/Bubbles'
import { connect } from "react-redux"
import Grid from '@material-ui/core/Grid'
import Instructions from './LineSearch-components/Instructions'
import Matches from './LineSearch-components/Matches'
import OfficeLogo from '../../img/the-office.svg'
import QuoteInput from './LineSearch-components/QuoteInput'
// import StateDebug from './StateDebug'
import Treemap from './LineSearch-components/Treemap'

const mapStateToProps = (state, ownProps) => {
  return {}
}

function mapDispatchToProps(dispatch) {
  return {}
}

// todo
// loading screen
// handle no results found

const ConnectedLineSearch = function () {
  return (
    <Grid container style={{ textAlign: 'center', marginBottom: 1024, marginTop: 16 }}>
      <Grid container item justifyContent='center' style={{margin: 'auto', width: 820}}>
        <Grid item xs={12}>
          <img src={OfficeLogo} style={{margin: 'auto'}} alt='logo for the office television series'/>
        </Grid>
        <Instructions/>
        {/* <StateDebug/> */}
        <QuoteInput/>
      </Grid>
      <Bubbles/>      
      <Treemap/>
      <Matches/>
    </Grid>
  )
}

const LineSearch = connect(mapStateToProps, mapDispatchToProps)(ConnectedLineSearch)

export default LineSearch