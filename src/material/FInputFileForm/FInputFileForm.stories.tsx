import React from 'react';

import {Meta, StoryFn} from '@storybook/react';

import FInputFileForm, {IFInputFileForm} from './FInputFileForm';

import 'bootstrap/dist/css/bootstrap.css';

export default {
  title: 'Components/INPUTS/FInputFileForm',
  tags: ['autodocs'],
  component: FInputFileForm,
} satisfies Meta<typeof FInputFileForm>;

const TemplateDefault: StoryFn<IFInputFileForm> = (args) => <FInputFileForm {...args} />;

export const Default = TemplateDefault.bind({});

Default.args = {
  id: 'input-file-form-id',
  className: 'input-file-form-className',
  st: { marginTop: '20px' },
  dataMaxSize: {
    size: 7,
    dimension: 'МБ',
  },
  name: 'input-file-form-name',
  accept: '.zip',
  multiple: false,
  disabled: false,
  onChange: (e) => console.log(e),
  deleteFile: false,
};
