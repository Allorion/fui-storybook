import { Meta, StoryFn } from '@storybook/react';



import { FStack } from '@material/index';
import FCheckIcon, {IFCheckIcon} from './FCheckIcon';


export default {
  title: 'Icons/FCheckIcon',
    tags: ['autodocs'],
    component: FCheckIcon,
} satisfies Meta<typeof FCheckIcon>;

const Template: StoryFn<IFCheckIcon> = (args) => {
  return <FCheckIcon {...args} />;
};

export const Default = Template.bind({});

Default.args = {
  id: 'check-icon-id',
  className: 'check-icon-className',
  st: { padding: '20px' },
  size: 64,
  handleClick: () => {
    alert('Клик');
  },
};

export const ColorContained: StoryFn<IFCheckIcon> = () => (
  <FStack spacing={2} direction={'row'}>
    <FCheckIcon color={'primary'} />
    <FCheckIcon color={'secondary'} />
    <FCheckIcon color={'success'} />
    <FCheckIcon color={'danger'} />
    <FCheckIcon color={'warning'} />
    <FCheckIcon color={'info'} />
    <FCheckIcon color={'light'} />
    <FCheckIcon color={'dark'} />
    <FCheckIcon color={'link'} />
  </FStack>
);
