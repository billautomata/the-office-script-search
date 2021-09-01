import { render, screen } from '@testing-library/react'
import { Provider } from "react-redux"
import { createStore } from "redux"

import Bubbles from '../js/components/LineSearch-components/Bubbles'



const episodes = [0,1,4,0,0,0]
episodes.episodeCount = 6

const bubbleData = {
  seasons: [ { episodes } ]
}

const initialState = { bubbleData }

function testReducer (state = initialState) {
  return state
}

test('the bubbles render the correct values', () => {
  render(
    <Provider store={createStore(testReducer)}>
      <Bubbles/>
    </Provider>
  )

  episodes.forEach((episode,episodeIdx) => {
    const gFound = screen.getByTestId(`bc-0-${episodeIdx}`)
    expect(Number(gFound.querySelector('text').innerHTML)).toEqual(episode)
  })
})

test('the bubbles render the text correctly', () => {
  render(
    <Provider store={createStore(testReducer)}>
      <Bubbles/>
    </Provider>
  )
  const wordFound = screen.getByText(/Season 1/i);
  const wordFounded = screen.get
  expect(wordFound).toBeInTheDocument();

  episodes.forEach((episode,episodeIdx) => {
    const gFound = screen.getByTestId(`bc-0-${episodeIdx}`)
    const textFill = gFound.querySelector('text').getAttribute('fill')
    expect(textFill).toEqual(episode === 0 ? 'white' : '#333')
  })
})

test('the bubbles render the circles correctly', () => {
  render(
    <Provider store={createStore(testReducer)}>
      <Bubbles/>
    </Provider>
  )
  const wordFound = screen.getByText(/Season 1/i);
  const wordFounded = screen.get
  expect(wordFound).toBeInTheDocument();

  episodes.forEach((episode,episodeIdx) => {
    const gFound = screen.getByTestId(`bc-0-${episodeIdx}`)
    const textFill = gFound.querySelector('circle').getAttribute('fill')    
    expect(textFill).toEqual(episode === 0 ? 'white' : '#a6cee3')
  })
})