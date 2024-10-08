import { Meta, StoryFn } from '@storybook/react';



import FCheckbox, { IFCheckbox } from './FCheckbox';

export default {
  title: 'Components/INPUTS/FCheckbox',
  tags: ['autodocs'],
  component: FCheckbox,
} satisfies Meta<typeof FCheckbox>;

const Template: StoryFn<IFCheckbox> = (args) => <FCheckbox {...args} />;

export const Default = Template.bind({});

Default.args = {
  id: 'checkbox-id',
  className: 'checkbox-className',
  st: { marginTop: '20px' },
  defaultChecked: true,
  checked: true,
  label: 'Checkbox',
  onChange: () => alert('Hello World!'),
  disabled: false,
};
