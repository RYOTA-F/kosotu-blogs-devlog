import React from 'react'
import type { Preview, StoryFn } from '@storybook/react'
import { MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
}

export const decorators = [
  (Story: StoryFn) => (
    <MantineProvider>
      <Story />
    </MantineProvider>
  ),
]

export default preview
