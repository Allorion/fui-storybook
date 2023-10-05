import React from 'react';

import { Meta, StoryFn } from '@storybook/react';

import FTimeline, { IFTimeline } from './FTimeline/FTimeline';
import FTimelineCard from './FTimelineCard/FTimelineCard';

import 'bootstrap/dist/css/bootstrap.css';

export default {
  title: 'Components/LAB/FTimeline',
    tags: ['autodocs'],
  component: FTimeline,
} satisfies Meta<typeof FTimeline>;

const Template: StoryFn<IFTimeline> = (args) => (
  <FTimeline {...args}>
    <FTimelineCard title={'Заголовок'}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat.
    </FTimelineCard>
    <FTimelineCard title={'Заголовок 2'}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat.
    </FTimelineCard>
    <FTimelineCard title={'Заголовок 3'}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat.
    </FTimelineCard>
  </FTimeline>
);

export const Default = Template.bind({});

Default.args = {
  id: 'timeline-id',
  className: 'timeline-className',
  st: { marginTop: '20px' },
};
