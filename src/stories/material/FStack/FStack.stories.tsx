import { Meta, StoryFn } from '@storybook/react';



import FStack, { IFStack } from './FStack';

export default {
  title: 'Components/LAYOUT/FStack',
  tags: ['autodocs'],
  component: FStack,
  argTypes: {
    spacing: {
      defaultValue: 2,
    },
  },
} satisfies Meta<typeof FStack>;

const Template: StoryFn<IFStack> = (args) => (
  <FStack {...args}>
    <div className={'item'}>item 1</div>
    <div className={'item'}>Item 2</div>
    <div className={'item'}>Item 3</div>
  </FStack>
);

export const Default = Template.bind({});

Default.args = {
  id: 'stack-id',
  className: 'stack-className',
  st: { marginTop: '20px' },
};

export const Interactive = Template.bind({});
Interactive.argTypes = {
  direction: {
    options: ['row', 'row-reverse', 'column', 'column-reverse'],
    control: { type: 'select' },
  },
  alignItems: {
    options: ['flex-start', 'center', 'flex-end', 'stretch', 'baseline'],
    control: { type: 'select' },
  },
  justifyContent: {
    options: ['flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'space-evenly'],
    control: { type: 'select' },
  },
  spacing: {
    options: [0, 0.5, 1, 2, 3, 4, 8, 12],
    control: { type: 'radio' },
  },
  wrap: {
    options: ['nowrap', 'wrap', 'wrap-reverse'],
    control: { type: 'select' }
  }
};
Interactive.args = {
  direction: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  spacing: 2,
};
