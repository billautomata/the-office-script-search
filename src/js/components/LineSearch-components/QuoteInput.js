import { connect } from 'react-redux'
import { Grid, TextField } from '@material-ui/core'
import { findMatches, setQuote } from '../../actions/index'

const mapStateToProps = (state, ownProps) => {
  return {
    quote: state.quote
  }
}

function mapDispatchToProps(dispatch) {
  return {
    findMatches: payload => dispatch(findMatches(payload)),
    setQuote: payload => dispatch(setQuote(payload))
  }
}

function ConnectedQuoteInput (props) {
  return (
    <Grid item xs={12}>
      <TextField label="Quote" variant="outlined" 
        defaultValue={props.quote} 
        style={{ marginBottom: 14, width: '100%' }}
        onChange={(event)=>{ 
          props.setQuote({ quote: event.nativeEvent.target.value })
        }}
        onKeyUp={(event)=>{
          if(event.nativeEvent.code === 'Enter' || event.nativeEvent.code === 'NumpadEnter') {
            props.findMatches({})
          }                  
        }}/>
    </Grid>
  )
}

const QuoteInput = connect(mapStateToProps, mapDispatchToProps)(ConnectedQuoteInput)

export default QuoteInput