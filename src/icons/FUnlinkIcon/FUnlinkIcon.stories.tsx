import React from 'react';

import {Meta, StoryFn} from '@storybook/react';
import 'bootstrap/dist/css/bootstrap.css';
import FUnlinkIcon, {IFUnlinkIcon} from "../../../../fui/src/icons/FUnlinkIcon/FUnlinkIcon";
import FStack from "../../../../fui/src/material/FStack/FStack";

export default {
  title: 'Icons/FUnlinkIcon',
    tags: ['autodocs'],
    component: FUnlinkIcon,
} satisfies Meta<typeof FUnlinkIcon>;

const Template: StoryFn<IFUnlinkIcon> = (args) => {
  return <FUnlinkIcon {...args} />;
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

export const ColorContained: StoryFn<IFUnlinkIcon> = () => (
  <FStack spacing={2} direction={'row'}>
    <FUnlinkIcon color={'primary'} />
    <FUnlinkIcon color={'secondary'} />
    <FUnlinkIcon color={'success'} />
    <FUnlinkIcon color={'danger'} />
    <FUnlinkIcon color={'warning'} />
    <FUnlinkIcon color={'info'} />
    <FUnlinkIcon color={'light'} />
    <FUnlinkIcon color={'dark'} />
    <FUnlinkIcon color={'link'} />
  </FStack>
);
