import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';

import {Meta, StoryFn} from '@storybook/react';

import {IFDropdownItem} from '../../../../../fui/src/material/interfaces';
import {FDropdown, FDropdownItem} from '../../../../../fui/src/material/index';

export default {
  title: 'Components/INPUTS/FDropdownItem',
    tags: ['autodocs'],
  component: FDropdownItem,
} satisfies Meta<typeof FDropdownItem>;

const Template: StoryFn<IFDropdownItem> = (args) => {
  return (
    <FDropdown label={'Выбор'}>
      <FDropdownItem {...args}>One</FDropdownItem>
      <FDropdownItem>Two</FDropdownItem>
      <FDropdownItem>Three</FDropdownItem>
    </FDropdown>
  );
};

export const Default = Template.bind({});

Default.args = {
  onClick: () => {},
  disabled: false,
  st: {
    padding: '6px',
  },
  className: 'class-f-dropdown-item',
  id: 'id-f-dropdown-item',
};
