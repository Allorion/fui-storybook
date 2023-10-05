import React from 'react';

import { Meta, StoryFn } from '@storybook/react';

import { FTextField } from '../index';
import { IFTextField } from './FTextField';

import 'bootstrap/dist/css/bootstrap.css';

export default {
  title: 'Components/INPUTS/FTextField',
  tags: ['autodocs'],
  component: FTextField,
} satisfies Meta<typeof FTextField>;

const Template: StoryFn<IFTextField> = (args) => (
  <div style={{ width: 'auto' }}>
    <FTextField {...args} />
  </div>
);

export const Default = Template.bind({});

Default.args = {
  id: 'stack-id',
  className: 'stack-className',
};

export const Label = Template.bind({});

Label.args = {
  label: 'Имя пользователя',
};

export const Value = Template.bind({});

Value.args = {
  value: 'Что-то изменилось',
};

export const DefaultValue = Template.bind({});

DefaultValue.args = {
  defaultValue: 'Что-то изменилось 2.0',
};

export const Load = Template.bind({});

Load.args = {
  load: true,
};

export const Interactive = Template.bind({});
Interactive.argTypes = {
  type: {
    options: ['text', 'number', 'email', 'tel'],
    control: { type: 'select' },
  },
  disabled: {
    options: [true, false],
    control: { type: 'select' },
  },
  readOnly: {
    options: [true, false],
    control: { type: 'select' },
  },
};
Interactive.args = {
  type: 'text',
  disabled: false,
};

export const FullWidth: StoryFn<IFTextField> = () => (
  <FTextField fullWidth={true} label={'fullWidth'} />
);

export const ErrText: StoryFn<IFTextField> = () => (
  <FTextField errText={['Первая ошибка', 'Вторая ошибка']} label={'Error Text'} />
);

export const OnChange: StoryFn<IFTextField> = () => (
  <FTextField onChange={(event) => event.target.value} />
);

export const OnBlur: StoryFn<IFTextField> = () => (
  <FTextField onBlur={(event) => console.log(event.target.value)} />
);

export const OnFocus: StoryFn<IFTextField> = () => (
  <FTextField onFocus={(event) => console.log(event.target.value)} />
);

export const OnInput: StoryFn<IFTextField> = () => (
  <FTextField onInput={(event) => console.log('onInput')} />
);

export const HelpText: StoryFn<IFTextField> = () => <FTextField helpText={'Текст помощи'} />;
