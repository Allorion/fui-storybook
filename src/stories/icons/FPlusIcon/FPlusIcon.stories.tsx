import { Meta, StoryFn } from '@storybook/react';



import { FStack } from '@material/index';
import FPlusIcon, { IFPlusIcon } from './FPlusIcon';

export default {
  title: 'Icons/FPlusIcon',
  tags: ['autodocs'],
  component: FPlusIcon,
} satisfies Meta<typeof FPlusIcon>;

const Template: StoryFn<IFPlusIcon> = (args) => {
  return <FPlusIcon {...args} />;
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

export const ColorContained: StoryFn<IFPlusIcon> = () => (
  <FStack spacing={2} direction={'row'}>
    <FPlusIcon color={'primary'} />
    <FPlusIcon color={'secondary'} />
    <FPlusIcon color={'success'} />
    <FPlusIcon color={'danger'} />
    <FPlusIcon color={'warning'} />
    <FPlusIcon color={'info'} />
    <FPlusIcon color={'light'} />
    <FPlusIcon color={'dark'} />
    <FPlusIcon color={'link'} />
  </FStack>
);
