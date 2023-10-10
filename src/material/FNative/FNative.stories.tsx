import React from 'react';

import {Meta, StoryFn} from '@storybook/react';

import {IFNative} from '../../../../fui/src/material/interfaces';
import {FNative} from '../../../../fui/src/material/index';

import 'bootstrap/dist/css/bootstrap.css';

export default {
  title: 'Components/INPUTS/FNative',
    tags: ['autodocs'],
    component: FNative,
} satisfies Meta<typeof FNative>;

const TemplateDefault: StoryFn<IFNative> = (args) => (
  <FNative {...args}>
    <option value={'Vania'}>Ваня</option>
    <option value={'Igor'}>Игорь</option>
    <option value={'Misha'}>Миша</option>
    <option value={'Vlad'}>Влад</option>
    <option value={'Vlad'}>Длинный текст, который не помещается в FNative</option>
  </FNative>
);

export const Default = TemplateDefault.bind({});

Default.args = {
  id: 'input-file-form-id',
  className: 'input-file-form-className',
  st: { marginTop: '20px', height: '100px' },
};

export const Label = TemplateDefault.bind({});

Label.args = {
  label: 'FNative',
};

export const Size = TemplateDefault.bind({});

Size.args = {
  size: 3,
};

export const OverflowX = TemplateDefault.bind({});

OverflowX.args = {
  overflowX: true,
};

export const Disabled = TemplateDefault.bind({});

Disabled.args = {
  disabled: true,
};

export const Value = TemplateDefault.bind({});

Value.args = {
  value: ['Vania', 'Misha'],
};

export const SingleChoice = TemplateDefault.bind({});

SingleChoice.args = {
  value: ['Vania'],
  singleChoice: (element) => {},
};

export const MultipleChoice = TemplateDefault.bind({});

MultipleChoice.args = {
  value: ['Vania', 'Misha'],
  multipleChoice: (element) => {},
};
