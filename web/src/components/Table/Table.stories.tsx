/* eslint-disable jsx-a11y/anchor-is-valid */

// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof Table> = (args) => {
//   return <Table {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import Table from './Table'

const people = [
  {
    name: 'Lindsay Walton',
    title: 'Front-end Developer',
    email: 'lindsay.walton@example.com',
    role: 'Member',
  },
  {
    name: 'Lindsay Walton',
    title: 'Front-end Developer',
    email: 'lindsay.walton@example.com',
    role: 'Member',
  },
  {
    name: 'Lindsay Walton',
    title: 'Front-end Developer',
    email: 'lindsay.walton@example.com',
    role: 'Member',
  },
  // More people...
]

export const generated = () => {
  return <Table tableData={people} />
}

export default {
  title: 'Components/Table',
  component: Table,
}
