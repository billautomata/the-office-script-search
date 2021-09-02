import {
  ADD_LINES,
  ADD_SERIES,
  CHARACTER_FILTER,
  EXPAND_ALL_LINES,
  EXPAND_LINE,  
  FIND_MATCHES,
  FINISH_LOADING,
  SET_QUOTE,
  SET_SIZE,
  TREEMAP_SIZE
} from '../constants/action-types'

export function addLines (payload) {
  return { type: ADD_LINES, payload }
}

export function addSeries (payload) {
  return { type: ADD_SERIES, payload }
}

export function characterFilter (payload) {
  return { type: CHARACTER_FILTER, payload }
}

export function expandLine (payload) {
  return { type: EXPAND_LINE, payload }  
}

export function expandAllLines (payload) {
  return { type: EXPAND_ALL_LINES, payload }  
}

export function findMatches (payload) {
  return { type: FIND_MATCHES, payload }
}

export function finishLoading (payload) {
  return { type: FINISH_LOADING, payload }
}

export function setQuote (payload) {
  return { type: SET_QUOTE, payload }
}

export function setSize (payload) {
  return { type: SET_SIZE, payload }
}

export function treemapResize (payload) {
  return { type: TREEMAP_SIZE, payload }
}
