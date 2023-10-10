import React from 'react';

import {Meta, StoryFn} from '@storybook/react';

import {IFTextArea} from '../../../../fui/src/material/interfaces';
import {FTextArea} from '../../../../fui/src/material/index';

export default {
  title: 'Components/INPUTS/FTextArea',
  tags: ['autodocs'],
  component: FTextArea,
} satisfies Meta<typeof FTextArea>;

const Template: StoryFn<IFTextArea> = (args) => <FTextArea {...args} />;

export const Default = Template.bind({});

Default.args = {
  className: 'text-area-className',
  id: 'text-area-id',
  st: { padding: '20px' },
  label: 'FTextArea',
  placeholder: 'Тут должен быть текст',
  cols: 3,
  rows: 5,
  autoComplete: true,
};

export const Disabled = Template.bind({});

Disabled.args = {
  disabled: true,
};

export const ReadOnly = Template.bind({});

ReadOnly.args = {
  readOnly: true,
};

export const FullWidth = Template.bind({});

FullWidth.args = {
  fullWidth: true,
};

export const Load = Template.bind({});

Load.args = {
  load: true,
};

export const ErrText: StoryFn<IFTextArea> = () => (
  <FTextArea fullWidth={true} errText={['Первая ошибка', 'Вторая ошибка']} label={'Error Text'} />
);

export const HelpText: StoryFn<IFTextArea> = () => (
  <FTextArea fullWidth={true} helpText={'Текст помощи'} />
);
