import { findMatches } from '../../actions/index'
import cleanUpLines from '../../lib/cleanUpLines'

import {
  ADD_LINES,
  ADD_SERIES,
  EXPAND_LINE,
  FIND_MATCHES,
  SET_QUOTE
} from '../../constants/action-types'

const initialState = {
  quote: 'that\'s what she said',
  lines: [],
  series: [],
  matches: []
}



function rootReducer(state = initialState, action) {
  switch(action.type) {
    case ADD_LINES:
      const lines = cleanUpLines(action.payload)
      console.log('cleaned up lines length', lines.length)
      return Object.assign({}, state, { lines })
    case ADD_SERIES: 
      return Object.assign({}, state, { series: action.payload })      
    case EXPAND_LINE: 
      break;
    case FIND_MATCHES: 
      console.log('find matches run')
      const matches = state.lines.filter(o=>{ 
        if(state.quote.toLowerCase().trim().split(' ').length === 1) {
          return o.search_text.toLowerCase().split(' ').indexOf(state.quote.toLowerCase().trim()) !== -1
        } else {
          return o.search_text.toLowerCase().indexOf(state.quote.toLowerCase().trim()) !== -1 
        }            
      })    
      console.log('matches length', matches.length)
      return Object.assign({}, state, { matches })
    case SET_QUOTE: 
      return Object.assign({}, state, { quote: action.payload.quote })
    default:
      return state
  }
  // return state
}

export default rootReducer