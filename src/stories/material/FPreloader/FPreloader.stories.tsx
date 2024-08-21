import { Meta, StoryFn } from '@storybook/react';



import FPreloader, { IFPreloader } from './FPreloader';
import { FProgress } from '@material/index';

export default {
  title: 'Components/FEEDBACK/FPreloader',
  tags: ['autodocs'],
  component: FPreloader,
} satisfies Meta<typeof FPreloader>;

const Progress: StoryFn<IFPreloader> = (args) => {
  return (
    <FPreloader {...args}>
      <FProgress />
    </FPreloader>
  );
};

export const Default = Progress.bind({});

Default.args = {
  st: {
    padding: 0,
  },
  backgroundColor: 'black',
  open: true,
};
