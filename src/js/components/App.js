import { addLines, addSeries, findMatches, finishLoading, setSize } from '../actions/index'
import { connect } from "react-redux"
import { csv } from 'd3'
import { useMediaQuery } from 'react-responsive'
import DataOfficeLines from '../../data/the-office-lines-scripts.csv'
import DataOfficeSeries from '../../data/the-office-series.csv'
import LineSearch from './LineSearch'

const mapStateToProps = (state, ownProps) => {
  return {}
}

function mapDispatchToProps(dispatch) {
  return {
    addLines: payload => dispatch(addLines(payload)),
    addSeries: payload => dispatch(addSeries(payload)),
    finishLoading: payload => dispatch(finishLoading(payload)),
    findMatches: payload => dispatch(findMatches(payload)),
    setSize: payload => dispatch(setSize(payload))
  }
}

const ConnectedApp = function ({ addLines, addSeries, findMatches, finishLoading, setSize }) {

  setSize({ payload: useMediaQuery({ query: '(max-width: 1224px)' }) })

  csv(DataOfficeLines).then(d=>{
    addLines(d)
    csv(DataOfficeSeries).then(d=>{
      addSeries(d)
      findMatches()
      finishLoading()
    })  
  })

  return (
    <>
      <LineSearch/>
    </>
  )
}

const App = connect(mapStateToProps, mapDispatchToProps)(ConnectedApp)

export default App