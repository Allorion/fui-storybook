import React from 'react';

import {Meta, StoryFn} from '@storybook/react';
import 'bootstrap/dist/css/bootstrap.css';
import FPaper, {IFPaper} from "../../../../fui/src/material/FPaper/FPaper";

export default {
  title: 'Components/SURFACES/FPaper',
  tags: ['autodocs'],
  component: FPaper,
} satisfies Meta<typeof FPaper>;

const Template: StoryFn<IFPaper> = (args) => <FPaper {...args}>Тут что-то должно быть</FPaper>;

export const Default = Template.bind({});

Default.args = {
  label: 'FPaper',
  id: 'id-fpaper',
  className: 'classname-fpaper',
  st: {
    marginTop: '16px',
  },
};

export const FontSizeLabel = Template.bind({});

FontSizeLabel.args = {
  label: 'FPaper',
  fontSizeLabel: '16px',
};

export const FontSizeBody = Template.bind({});

FontSizeBody.args = {
  label: 'FPaper',
  fontSizeBody: '14px',
};
