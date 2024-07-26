import React from 'react';

import {Meta, StoryFn} from '@storybook/react';

import 'bootstrap/dist/css/bootstrap.css';
import FProgress, {IFProgress} from './FProgress';

export default {
  title: 'Components/FEEDBACK/FProgress',
  tags: ['autodocs'],
  component: FProgress,
} satisfies Meta<typeof FProgress>;

const Progress: StoryFn<IFProgress> = (args) => {
  return <FProgress {...args}/>;
};

export const Default = Progress.bind({});
Default.argTypes = {
  color: {
    options: [
      'primary',
      'secondary',
      'success',
      'danger',
      'warning',
      'info',
      'light',
      'dark',
      'link',
    ],
    control: { type: 'select' },
  },
};

Default.args = {
  st: {
    marginLeft: '20px',
    width: '5rem',
    height: '5rem',
  },
};
