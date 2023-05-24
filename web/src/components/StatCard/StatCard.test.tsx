import { render } from '@redwoodjs/testing/web'

import Stats from './StatCard'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Stats', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Stats title="Donation Total" statistic="£20.50" />)
    }).not.toThrow()
  })
})
