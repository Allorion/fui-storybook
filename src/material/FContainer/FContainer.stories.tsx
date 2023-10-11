import React from 'react';

import {Meta, StoryFn} from '@storybook/react';


import 'bootstrap/dist/css/bootstrap.css';
import FContainer, {IFContainer} from "../../../../fui/src/material/FContainer/FContainer";

export default {
  title: 'Components/LAYOUT/FContainer',
  tags: ['autodocs'],
  component: FContainer,
  argTypes: {
    // @ts-ignore
    spacing: {
      defaultValue: 2,
    },
  },
} satisfies Meta<typeof FContainer>;

const Template: StoryFn<IFContainer> = (args) => (
  <FContainer {...args}>
    <div style={{ backgroundColor: '#cfe8fc', height: '100vh' }} />
  </FContainer>
);

export const Default = Template.bind({});

Default.args = {
  id: 'container-id',
  className: 'container-className',
  st: { padding: '20px' },
};

export const MaxWidth = Template.bind({});
MaxWidth.argTypes = {
  maxWidth: {
    options: ['container-xs', 'container-sm', 'container-md', 'container-lg', 'container-fluid'],
    control: { type: 'select' },
  },
};
MaxWidth.args = {
  maxWidth: 'container-xs',
};
