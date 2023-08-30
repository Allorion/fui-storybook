import React from 'react';

import { Meta, StoryFn } from '@storybook/react';

import { IFPenIcon } from './FPenIcon';
import FPenIcon from './FPenIcon';
import 'bootstrap/dist/css/bootstrap.css';
import { FStack } from '../../material';

export default {
  title: 'FMaterial UI-Kit/FCopyAddIcon',
    tags: ['autodocs'],
    component: FPenIcon,
} satisfies Meta<typeof FPenIcon>;

const Template: StoryFn<IFPenIcon> = (args) => {
  return <FPenIcon {...args} />;
};

export const Default = Template.bind({});

Default.args = {
  id: 'pen-icon-id',
  className: 'pen-icon-className',
  st: { padding: '20px' },
  size: 64,
  handleClick: () => {
    alert('Клик');
  },
};

export const ColorContained: StoryFn<IFPenIcon> = () => (
  <FStack spacing={2} direction={'row'}>
    <FPenIcon color={'primary'} />
    <FPenIcon color={'secondary'} />
    <FPenIcon color={'success'} />
    <FPenIcon color={'danger'} />
    <FPenIcon color={'warning'} />
    <FPenIcon color={'info'} />
    <FPenIcon color={'light'} />
    <FPenIcon color={'dark'} />
    <FPenIcon color={'link'} />
  </FStack>
);
