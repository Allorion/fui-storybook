import { Meta, StoryFn } from '@storybook/react';



import { FStack } from '@material/index';
import FArrowIcon, { IFArrowIcon } from './FArrowIcon';

export default {
  title: 'Icons/FArrowIcon',
  tags: ['autodocs'],
  component: FArrowIcon,
} satisfies Meta<typeof FArrowIcon>;

const Template: StoryFn<IFArrowIcon> = (args) => {
  return <FArrowIcon {...args} />;
};

export const Default = Template.bind({});

Default.args = {
  id: 'arrow-icon-id',
  className: 'arrow-icon-className',
  st: { padding: '20px' },
  size: 64,
  handleClick: () => {
    alert('Клик');
  },
};

export const ColorContained: StoryFn<IFArrowIcon> = () => (
  <FStack spacing={2} direction={'row'}>
    <FArrowIcon color={'primary'} />
    <FArrowIcon color={'secondary'} />
    <FArrowIcon color={'success'} />
    <FArrowIcon color={'danger'} />
    <FArrowIcon color={'warning'} />
    <FArrowIcon color={'info'} />
    <FArrowIcon color={'light'} />
    <FArrowIcon color={'dark'} />
    <FArrowIcon color={'link'} />
  </FStack>
);

export const Direction: StoryFn<IFArrowIcon> = () => (
  <FStack spacing={2} direction={'row'}>
    <FArrowIcon direction={'up'} />
    <FArrowIcon direction={'right'} />
    <FArrowIcon direction={'down'} />
    <FArrowIcon direction={'left'} />
  </FStack>
);
