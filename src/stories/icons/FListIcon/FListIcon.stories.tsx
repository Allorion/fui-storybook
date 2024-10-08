import { Meta, StoryFn } from '@storybook/react';



import { FStack } from '@material/index';
import FListIcon, { IFListIcon } from './FListIcon';

export default {
  title: 'Icons/FListIcon',
  tags: ['autodocs'],
  component: FListIcon,
} satisfies Meta<typeof FListIcon>;

const Template: StoryFn<IFListIcon> = (args) => {
  return <FListIcon {...args} />;
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

export const ColorContained: StoryFn<IFListIcon> = () => (
  <FStack spacing={2} direction={'row'}>
    <FListIcon color={'primary'} />
    <FListIcon color={'secondary'} />
    <FListIcon color={'success'} />
    <FListIcon color={'danger'} />
    <FListIcon color={'warning'} />
    <FListIcon color={'info'} />
    <FListIcon color={'light'} />
    <FListIcon color={'dark'} />
    <FListIcon color={'link'} />
  </FStack>
);
