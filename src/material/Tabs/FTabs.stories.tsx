import React from 'react';

import {Meta, StoryFn} from '@storybook/react';

import 'bootstrap/dist/css/bootstrap.css';
import FTabs from "../../../../fui/src/material/Tabs/FTabs";
import FTab, {IFTabs} from "../../../../fui/src/material/Tabs/FTab/FTab";

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
