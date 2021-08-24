import {
  ADD_LINES,
  ADD_SERIES,
  EXPAND_LINE,
  FIND_MATCHES,
  SET_QUOTE,
} from '../constants/action-types'

export function addLines (payload) {
  return { type: ADD_LINES, payload }
}

export function addSeries (payload) {
  return { type: ADD_SERIES, payload }
}

export function expandLine (payload) {
  return { type: EXPAND_LINE, payload }  
}

export function findMatches (payload) {
  return { type: FIND_MATCHES, payload }
}

export function setQuote (payload) {
  return { type: SET_QUOTE, payload }
}