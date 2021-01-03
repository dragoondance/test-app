import React from 'react'
import App from '../src/App'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer'

jest.mock('react-native-appearance', () => ({
  theme: jest.fn(),
}));

it('renders correctly', () => {
  renderer.create(<App />)
})