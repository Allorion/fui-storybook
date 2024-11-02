import { Meta, StoryFn } from '@storybook/react';



import { FStack } from '@material/index';
import FReloadIcon, { IFReloadIcon } from './FReloadIcon';

export default {
  title: 'Icons/FReloadIcon',
  tags: ['autodocs'],
  component: FReloadIcon,
} satisfies Meta<typeof FReloadIcon>;

const Template: StoryFn<IFReloadIcon> = (args) => {
  return <FReloadIcon {...args} />;
};

export const Default = Template.bind({});

Default.args = {
  id: 'plus-icon-id',
  className: 'plus-icon-className',
  st: { padding: '20px' },
  size: 64,
  handleClick: () => {
    alert('Клик');
  },
};

export const ColorContained: StoryFn<IFReloadIcon> = () => (
  <FStack spacing={2} direction={'row'}>
    <FReloadIcon color={'primary'} />
    <FReloadIcon color={'secondary'} />
    <FReloadIcon color={'success'} />
    <FReloadIcon color={'danger'} />
    <FReloadIcon color={'warning'} />
    <FReloadIcon color={'info'} />
    <FReloadIcon color={'light'} />
    <FReloadIcon color={'dark'} />
    <FReloadIcon color={'link'} />
  </FStack>
);
