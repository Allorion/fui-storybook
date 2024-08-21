import { Meta, StoryFn } from '@storybook/react';



import FContainer, { IFContainer } from './FContainer';

export default {
  title: 'Components/LAYOUT/FContainer',
  tags: ['autodocs'],
  component: FContainer,
} satisfies Meta<typeof FContainer>;

const Template: StoryFn<IFContainer> = (args) => (
  <FContainer {...args}>
    <div style={{ backgroundColor: '#cfe8fc', height: '100vh' }} />
  </FContainer>
);

export const Default = Template.bind({});

Default.args = {
  id: 'container-id',
  className: 'container-className',
  st: { padding: '20px' },
};

export const MaxWidth = Template.bind({});
MaxWidth.argTypes = {
  maxWidth: {
    options: ['container-xs', 'container-sm', 'container-md', 'container-lg', 'container-fluid'],
    control: { type: 'select' },
  },
};
MaxWidth.args = {
  maxWidth: 'container-xs',
};
