import React from 'react';

import { Meta, StoryFn } from '@storybook/react';

import { IFDownloadIcon } from './FDownloadIcon';
import FDownloadIcon from './FDownloadIcon';
import 'bootstrap/dist/css/bootstrap.css';
import { FStack } from '../../material';

export default {
  title: 'FMaterial UI-Kit/FDownloadIcon',
    tags: ['autodocs'],
    component: FDownloadIcon,
} satisfies Meta<typeof FDownloadIcon>;

const Template: StoryFn<IFDownloadIcon> = (args) => {
  return <FDownloadIcon {...args} />;
};

export const Default = Template.bind({});

Default.args = {
  id: 'list-icon-id',
  className: 'list-icon-className',
  st: { padding: '20px' },
  size: 64,
  handleClick: () => {
    alert('Клик');
  },
};

export const ColorContained: StoryFn<IFDownloadIcon> = () => (
  <FStack spacing={2} direction={'row'}>
    <FDownloadIcon color={'primary'} />
    <FDownloadIcon color={'secondary'} />
    <FDownloadIcon color={'success'} />
    <FDownloadIcon color={'danger'} />
    <FDownloadIcon color={'warning'} />
    <FDownloadIcon color={'info'} />
    <FDownloadIcon color={'light'} />
    <FDownloadIcon color={'dark'} />
    <FDownloadIcon color={'link'} />
  </FStack>
);
