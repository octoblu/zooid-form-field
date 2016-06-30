import React from 'react'
import { storiesOf } from '@kadira/storybook'

import FormField from '../src'

storiesOf('FormField', module)
  .addWithInfo('Basic', 'Basic Form Field', () => (
    <FormField>
      <input type="text" placeholder="Form Input" />
    </FormField>
  ), { inline: true })
  .addWithInfo('className', 'Add custom class', () => (
    <FormField className="coolClassName">
      <input type="text" placeholder="Form Input" />
    </FormField>
  ), { inline: true })
