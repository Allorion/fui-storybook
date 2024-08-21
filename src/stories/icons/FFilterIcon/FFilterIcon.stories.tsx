import { Meta, StoryFn } from '@storybook/react';



import { FStack } from '@material/index';
import FFilterIcon, { IFFilterIcon } from './FFilterIcon';

export default {
  title: 'Icons/FFilterIcon',
  tags: ['autodocs'],
  component: FFilterIcon,
} satisfies Meta<typeof FFilterIcon>;

const Template: StoryFn<IFFilterIcon> = (args) => {
  return <FFilterIcon {...args} />;
};

export const Default = Template.bind({});

Default.args = {
  id: 'trash-icon-id',
  className: 'trash-icon-className',
  st: { padding: '20px' },
  size: 64,
  handleClick: () => {
    alert('Клик');
  },
};

export const ColorContained: StoryFn<IFFilterIcon> = () => (
  <FStack spacing={2} direction={'row'}>
    <FFilterIcon color={'primary'} />
    <FFilterIcon color={'secondary'} />
    <FFilterIcon color={'success'} />
    <FFilterIcon color={'danger'} />
    <FFilterIcon color={'warning'} />
    <FFilterIcon color={'info'} />
    <FFilterIcon color={'light'} />
    <FFilterIcon color={'dark'} />
    <FFilterIcon color={'link'} />
  </FStack>
);
