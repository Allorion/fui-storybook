import React from 'react';

import {Meta, StoryFn} from '@storybook/react';

import 'bootstrap/dist/css/bootstrap.css';
import FPreloader, {IFPreloader} from "../../../../fui/src/material/FPreloader/FPreloader";
import FProgress from "../../../../fui/src/material/FProgress/FProgress";


export default {
  title: 'Components/FEEDBACK/FPreloader',
  tags: ['autodocs'],
  component: FPreloader,
} satisfies Meta<typeof FPreloader>;

const Progress: StoryFn<IFPreloader> = (args) => {
  return (
    <FPreloader {...args}>
      <FProgress />
    </FPreloader>
  );
};

export const Default = Progress.bind({});

Default.args = {
  st: {
    padding: 0,
  },
  backgroundColor: 'black',
  open: true,
};
