import { Meta, StoryFn } from '@storybook/react';



import FDropdown, { IFDropdown } from './FDropdown';
import FDropdownItem from '../FDropdownItem';

export default {
  title: 'Components/INPUTS/FDropdown',
  tags: ['autodocs'],
  component: FDropdown,
} satisfies Meta<typeof FDropdown>;

const Template: StoryFn<IFDropdown> = (args) => {
  return (
    <FDropdown {...args}>
      <FDropdownItem>One</FDropdownItem>
      <FDropdownItem onClick={() => console.log(1)}>Two</FDropdownItem>
      <FDropdownItem disabled={true}>Three</FDropdownItem>
    </FDropdown>
  );
};

export const Default = Template.bind({});

Default.args = {
  label: 'Dropdown',
  variant: 'contained',
  color: 'primary',
  size: 'btn-lg',
  disabled: false,
  className: 'class-f-dropdown',
  id: 'id-f-dropdown',
};
