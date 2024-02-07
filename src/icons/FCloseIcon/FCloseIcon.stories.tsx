import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import 'bootstrap/dist/css/bootstrap.css';
import FCloseIcon, { IFCloseIcon } from './FCloseIcon';

export default {
  title: 'Icons/FCloseIcon',
  tags: ['autodocs'],
  component: FCloseIcon,
} satisfies Meta<typeof FCloseIcon>;

const Template: StoryFn<IFCloseIcon> = (args) => {
  return <FCloseIcon {...args} />;
};

export const Default = Template.bind({});

Default.args = {
  id: 'close-icon-id',
  className: 'close-icon-className',
  st: { padding: '20px' },
  handleClose: () => {
    alert('Клик');
  },
};
