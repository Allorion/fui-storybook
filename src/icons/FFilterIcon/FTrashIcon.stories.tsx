import React from 'react';

import {Meta, StoryFn} from '@storybook/react';

import 'bootstrap/dist/css/bootstrap.css';

import {FFilterIcon} from '../../../../fui/src/icons/index'
import {IFFilterIcon} from '../../../../fui/src/icons/interfaces'
import {FStack} from '../../../../fui/src//material';

export default {
  title: 'Icons/FFilterIcon',
    tags: ['autodocs'],
    component: FFilterIcon,
  argTypes: {
    // @ts-ignore
    spacing: {
      defaultValue: 2,
    },
  },
} satisfies Meta<typeof FFilterIcon>;

const Template: StoryFn<IFFilterIcon> = (args) => {
  return <FFilterIcon {...args} />;
};

export const Default = Template.bind({});

Default.args = {
  id: 'trash-icon-id',
  className: 'trash-icon-className',
  st: { padding: '20px' },
  size: 64,
  handleClick: () => {
    alert('Клик');
  },
};

export const ColorContained: StoryFn<IFFilterIcon> = () => (
  <FStack spacing={2} direction={'row'}>
    <FFilterIcon color={'primary'} />
    <FFilterIcon color={'secondary'} />
    <FFilterIcon color={'success'} />
    <FFilterIcon color={'danger'} />
    <FFilterIcon color={'warning'} />
    <FFilterIcon color={'info'} />
    <FFilterIcon color={'light'} />
    <FFilterIcon color={'dark'} />
    <FFilterIcon color={'link'} />
  </FStack>
);
