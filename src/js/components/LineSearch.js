import { addLines, addSeries } from '../actions/index'
import { connect } from "react-redux"
import Grid from '@material-ui/core/Grid'
import Instructions from './LineSearch-components/Instructions'
import OfficeLogo from '../../img/the-office.svg'
import QuoteInput from './LineSearch-components/QuoteInput'
import StateDebug from './StateDebug'

const mapStateToProps = (state, ownProps) => {
  return {}
}

function mapDispatchToProps(dispatch) {
  return {}
}

const ConnectedLineSearch = function ({}) {
  return (
    <Grid container style={{ textAlign: 'center', marginBottom: 1024, marginTop: 16 }}>
      <Grid container item justify='center' style={{margin: 'auto', width: 820}}>
        <Grid item xs={12}>
          <img src={OfficeLogo} style={{margin: 'auto'}}/>
        </Grid>
        <Instructions/>
        <QuoteInput/>
      </Grid>
      <StateDebug/>
    </Grid>
  )
}

const LineSearch = connect(mapStateToProps, mapDispatchToProps)(ConnectedLineSearch)

export default LineSearch