import { render, screen } from '@testing-library/react'
import { Provider } from "react-redux"
import { createStore } from "redux"

import ResultsFoundCount from '../js/components/LineSearch-components/ResultsFoundCount'

const initialState = {
  matches: [0,1],
  filteredCharacter: null
}

function testReducer (state = initialState) {
  return state
}

test('renders plural correctly', () => {
  render(
    <Provider store={createStore(testReducer)}>
      <ResultsFoundCount/>
    </Provider>
  )
  const wordFound = screen.getByText(/results found/i);
  expect(wordFound).toBeInTheDocument();
});

const initialStateSinglular = {
  matches: [0],
  filteredCharacter: null
}

function testReducerSingular (state = initialStateSinglular) {
  return state
}

test('renders plural correctly', () => {
  render(
    <Provider store={createStore(testReducerSingular)}>
      <ResultsFoundCount/>
    </Provider>
  )
  const wordFound = screen.getByText(/result found/i);
  expect(wordFound).toBeInTheDocument();
})
