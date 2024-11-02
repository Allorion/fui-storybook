import { Meta, StoryFn } from '@storybook/react';



import { FStack } from '@material/index';
import FMinusIcon, { IFMinusIcon } from './FMinusIcon';

export default {
  title: 'Icons/FMinusIcon',
  tags: ['autodocs'],
  component: FMinusIcon,
} satisfies Meta<typeof FMinusIcon>;

const Template: StoryFn<IFMinusIcon> = (args) => {
  return <FMinusIcon {...args} />;
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

export const ColorContained: StoryFn<IFMinusIcon> = () => (
  <FStack spacing={2} direction={'row'}>
    <FMinusIcon color={'primary'} />
    <FMinusIcon color={'secondary'} />
    <FMinusIcon color={'success'} />
    <FMinusIcon color={'danger'} />
    <FMinusIcon color={'warning'} />
    <FMinusIcon color={'info'} />
    <FMinusIcon color={'light'} />
    <FMinusIcon color={'dark'} />
    <FMinusIcon color={'link'} />
  </FStack>
);
