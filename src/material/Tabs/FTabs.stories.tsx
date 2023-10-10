import React from 'react';

import {Meta, StoryFn} from '@storybook/react';

import 'bootstrap/dist/css/bootstrap.css';

import {IFTabs} from '../../../../fui/src/material/interfaces';
import {FTab, FTabs} from '../../../../fui/src/material/index';

export default {
  title: 'Components/NAVIGATION/FTabs',
    tags: ['autodocs'],
  component: FTabs,
} satisfies Meta<typeof FTabs>;

const Tabs: StoryFn<IFTabs> = (args) => {
  return (
    <FTabs {...args}>
      <FTab className={'f-tabs-btn'} active={true} onClick={() => {}}>
        Item 1
      </FTab>
      <FTab className={'f-tabs-btn'} onClick={() => {}}>
        Item 2
      </FTab>
      <FTab className={'f-tabs-btn'} disabled={true} onClick={() => {}}>
        Item 3
      </FTab>
    </FTabs>
  );
};

export const Default = Tabs.bind({});
