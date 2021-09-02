import cleanUpLines from '../../lib/cleanUpLines'
import generateTreemap from '../../lib/generateTreemap'
import initializeBubbleData from '../../lib/initializeBubbleData'
import updateBubbleData from '../../lib/updateBubbleData'

import {
  ADD_LINES,
  ADD_SERIES,
  CHARACTER_FILTER,
  EXPAND_LINE,
  EXPAND_ALL_LINES,
  FIND_MATCHES,
  FINISH_LOADING,
  SET_QUOTE,
  SET_SIZE,
  SHOW_ALL,
  TREEMAP_SIZE
} from '../../constants/action-types'

const initialState = {  
  bubbleData: { seasons: [] },
  expandedMatches: [],
  filteredCharacter: null,
  finishedLoading: false,
  isTabletOrMobile: false,
  lines: [],
  matches: [],
  maxSlice: false,
  series: [],
  showAll: false,
  treemapDimensions: [0,0],
  treemapLeaves: [],  
  quote: 'that\'s what she said', // low value setting
  // quote: 'said', // high value setting
}

function rootReducer(state = initialState, action) {
  switch(action.type) {
    case ADD_LINES:
      const lines = cleanUpLines(action.payload)
      return Object.assign({}, state, { lines })
    case ADD_SERIES: 
      const bubbleData = initializeBubbleData(action.payload)
      return Object.assign({}, state, { series: action.payload, bubbleData })    
    case CHARACTER_FILTER:
      const updatedBubbleDataFilteredCharacter = updateBubbleData(state.bubbleData, state.matches, action.payload)
      return Object.assign({}, state, { filteredCharacter: action.payload, bubbleData: updatedBubbleDataFilteredCharacter }) 
    case EXPAND_ALL_LINES:
      let allExpandedMatches
      if (action.payload === true) {
        allExpandedMatches = state.matches.map((match,matchIdx)=>{ return matchIdx})
      } else {
        allExpandedMatches = []
      }
      return Object.assign({}, state, { expandedMatches: allExpandedMatches })          
    case EXPAND_LINE:
      let expandedMatches = state.expandedMatches.filter(n=>{return true})
      if(expandedMatches.indexOf(action.payload) !== -1) {
        expandedMatches = expandedMatches.filter(n=>{ return n !== action.payload })
      } else {
        expandedMatches.push(action.payload) 
      }      
      return Object.assign({}, state, { expandedMatches })     
    case FIND_MATCHES: 
      const matches = state.lines.filter(o=>{ 
        if(state.quote.toLowerCase().trim().split(' ').length === 1) {
          return o.search_text.toLowerCase().split(' ').indexOf(state.quote.toLowerCase().trim()) !== -1
        } else {
          return o.search_text.toLowerCase().indexOf(state.quote.toLowerCase().trim()) !== -1 
        }            
      })
      const updatedBubbleData = updateBubbleData(state.bubbleData, matches, null)
      const treemapLeaves = generateTreemap(matches, state.treemapDimensions)
      return Object.assign({}, state, { matches, bubbleData: updatedBubbleData, expandedMatches: [], treemapLeaves, filteredCharacter: null, showAll: false })
    case FINISH_LOADING:
      return Object.assign({}, state, { finishedLoading: true })      
    case SET_QUOTE: 
      return Object.assign({}, state, { quote: action.payload.quote })
    case SET_SIZE:
      return Object.assign({}, state, { isTabletOrMobile: action.payload })
    case SHOW_ALL:
      return Object.assign({}, state, { showAll: action.payload })
    case TREEMAP_SIZE:
      if(action.payload.current === undefined || action.payload.current === null) {
        return
      }
      // let treemapParentNode = action.payload
      const treemapDimensions = [ action.payload.current.clientWidth, action.payload.current.clientHeight ]
      return Object.assign({}, state, { treemapDimensions, treemapLeaves: generateTreemap(state.matches, treemapDimensions) })  
    default:
      return state
  }
}

export default rootReducer