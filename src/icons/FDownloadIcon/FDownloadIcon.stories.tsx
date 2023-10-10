import React from 'react';
import {Meta, StoryFn} from '@storybook/react';
import 'bootstrap/dist/css/bootstrap.css';
import {FDownloadIcon} from '../../../../fui/src/icons/index'
import {IFDownloadIcon} from '../../../../fui/src/icons/interfaces'
import {FStack} from '../../../../fui/src//material';

export default {
  title: 'Icons/FDownloadIcon',
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
