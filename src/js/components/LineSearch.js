import Bubbles from './LineSearch-components/Bubbles'
import { connect } from "react-redux"
import Grid from '@material-ui/core/Grid'
import Instructions from './LineSearch-components/Instructions'
import Matches from './LineSearch-components/Matches'
import OfficeLogo from '../../img/the-office.svg'
import QuoteInput from './LineSearch-components/QuoteInput'
// import StateDebug from './StateDebug'
import Treemap from './LineSearch-components/Treemap'
import BlindGuyMcSqueezy from '../../img/blind-guy-mcsqueezy.jpeg'
import LoadingScreen from './loading-screens/Maze'

const mapStateToProps = (state, ownProps) => {
  return {
    finishedLoading: state.finishedLoading,
    lines: state.lines,    
    matches: state.matches,
    series: state.series    
  }
}

function mapDispatchToProps(dispatch) {
  return {}
}

// todo
// loading screen
// max results
// handle no results found
// tests
  // treemap
  // bubbles
  // matches
    // expanded
  
const ConnectedLineSearch = function (props) {
  return (
    <Grid container style={{ textAlign: 'center', marginBottom: 1024, marginTop: 16 }}>
      <Grid item xs={12}>
        <img src={OfficeLogo} style={{ width: 820, margin: 'auto'}} alt='logo for the television series: the office'/>
      </Grid>
      {
        (()=>{
          if(props.finishedLoading === false) {
            return (
              <Grid item xs={6} style={{ margin: 'auto', marginTop: 12 }}>
                <LoadingScreen/>
              </Grid>
            )
          } else {
            return (
              <Grid container item xs={12}>
                <Grid container item justifyContent='center' style={{margin: 'auto', width: 820}}>
                  <Instructions/>
                  <QuoteInput/>
                </Grid>      
                <Grid container item xs={12} style={{ display: props.matches.length === 0 ? null : 'none' }}>
                  <Grid item xs={12} style={{ marginBottom: 24 }}>No results found.  Try another search term.</Grid>
                  <Grid item xs={12}><img src={BlindGuyMcSqueezy} alt='Michael Scott`s improv character Blind Guy McSqueezy'/></Grid>        
                </Grid>
                <Grid container item xs={12} style={{ display: props.matches.length === 0 ? 'none' : null }}>
                  <Treemap/>
                  <Bubbles/>            
                  <Matches/>
                </Grid>
              </Grid>
            )
          }
        })()
      }
    </Grid>
  )
}

const LineSearch = connect(mapStateToProps, mapDispatchToProps)(ConnectedLineSearch)

export default LineSearch