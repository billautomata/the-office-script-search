import { connect } from 'react-redux'
import { Box, Grid } from '@material-ui/core'
import { setShowAll } from '../../actions/index'
import { MATCH_FILTER_DEFAULT } from '../../constants/definitions'

const mapStateToProps = (state) => {
  return {
    resultsFound: state.filteredCharacter !== null ? state.matches.filter(o=>{ return o.speaker === state.filteredCharacter }).length : state.matches.length,
    showAll: state.showAll
  }
}

function mapDispatchToProps(dispatch) {
  return {
    changeShowAll: payload => dispatch(setShowAll(payload))
  }
}

function ConnectedResultsFoundCount (props) {
  return (
    <Grid item container xs={12} justifyContent='flex-end'>
      <div style={{textAlign: 'right'}}>        
        <Box component='span' style={{ userSelect: 'none', cursor: 'pointer', marginRight: 4, display: (props.showAll || props.resultsFound < MATCH_FILTER_DEFAULT) ? 'none' : null }}
          onClick = { () => {
            props.changeShowAll(!props.showAll)
          }}  
        >
          <span style={{ marginRight: 8, fontSize: 10, fontWeight: 900 }}>show all</span>
          <span>Showing <span style={{ fontWeight: 700 }}>50</span> of</span>
        </Box>
        <span style={{ fontWeight: 700, marginRight: 4 }}>{ props.resultsFound }</span>result{ props.resultsFound === 1 ? '' : 's' } found        
      </div>
    </Grid>
  )
}

const ResultsFoundCount = connect(mapStateToProps, mapDispatchToProps)(ConnectedResultsFoundCount)

export default ResultsFoundCount