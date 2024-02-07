import React from 'react';

import { Meta, StoryFn } from '@storybook/react';

import FFullDateField, { IFFullDateField } from './FFullDateField';

export default {
  title: 'Components/INPUTS/FFullDateField',
  tags: ['autodocs'],
  component: FFullDateField,
} satisfies Meta<typeof FFullDateField>;

const Template: StoryFn<IFFullDateField> = (args) => <FFullDateField {...args} />;

export const Default = Template.bind({});

Default.args = {
  className: 'full-date-field-className',
  id: 'full-date-field-id',
  st: { padding: '20px' },
  value: '2023-01-01',
  defaultValue: '2023-01-01',
  onChange: (e) => console.log(e.target.value),
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

export const ErrText: StoryFn<IFFullDateField> = () => (
  <FFullDateField
    fullWidth={true}
    errText={['Первая ошибка', 'Вторая ошибка']}
    label={'Error Text'}
  />
);

export const HelpText: StoryFn<IFFullDateField> = () => (
  <FFullDateField fullWidth={true} helpText={'Текст помощи'} />
);
