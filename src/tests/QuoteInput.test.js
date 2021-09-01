import { render, screen } from '@testing-library/react'
import { Provider } from "react-redux"
import { createStore } from "redux"

import QuoteInput from '../js/components/LineSearch-components/QuoteInput'

const initialState = {
  quote: 'foo'
}

function testReducer (state = initialState) {
  return state
}

test('sets the quote as the display value', () => {
  render(
    <Provider store={createStore(testReducer)}>
      <QuoteInput/>
    </Provider>
  )
  const wordFound = screen.getByDisplayValue(/foo/i);
  expect(wordFound).toBeInTheDocument();
});