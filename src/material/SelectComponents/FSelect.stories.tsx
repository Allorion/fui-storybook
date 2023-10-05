import React from 'react';

import { Meta, StoryFn } from '@storybook/react';

import FSelect, { IFSelect } from './FSelect/FSelect';
import { FSelectItem } from '../index';

import 'bootstrap/dist/css/bootstrap.css';
import { IFSelectItem } from './FSelectItem/FSelectItem';

export default {
  title: 'Components/INPUTS/SelectComponents',
    tags: ['autodocs'],
  component: FSelect,
} satisfies Meta<typeof FSelect>;

const Template: StoryFn<IFSelect> = (args) => {
  return (
    <FSelect {...args}>
      <FSelectItem value={0}>-</FSelectItem>
      <FSelectItem value={'Ваня'}>Ваня</FSelectItem>
      <FSelectItem value={'Костя'}>Костя</FSelectItem>
      <FSelectItem value={'Стас'}>Стас</FSelectItem>
    </FSelect>
  );
};

export const Default = Template.bind({});

Default.args = {
  id: 'select-id',
  className: 'select-className',
  st: { marginTop: '20px' },
  label: 'ИТ отдел',
  defaultValue: 0,
  onChange: (e) => alert(e.target.value),
};

export const Disabled = Template.bind({});

Disabled.args = {
  disabled: true,
};

export const FullWidth = Template.bind({});

FullWidth.args = {
  fullWidth: true,
};

export const Load = Template.bind({});

Load.args = {
  load: true,
};

export const Size = Template.bind({});

Size.args = {
  size: 3,
};

export const Multiple = Template.bind({});

Multiple.args = {
  multiple: true,
};

const SelectItem: StoryFn<IFSelectItem> = (args) => {
  return (
    <FSelect>
      <FSelectItem {...args}>-</FSelectItem>
      <FSelectItem value={'Ваня'}>Ваня</FSelectItem>
      <FSelectItem value={'Костя'}>Костя</FSelectItem>
      <FSelectItem value={'Стас'}>Стас</FSelectItem>
    </FSelect>
  );
};

export const SelectItemDefault = SelectItem.bind({});

SelectItemDefault.args = {
  st: { marginLeft: '16px' },
  value: 0,
  onClick: () => alert('Клик!'),
  className: 'select-item-className',
  id: 'select-item-id',
};

export const SelectItemDisabled = SelectItem.bind({});

SelectItemDisabled.args = {
  disabled: true,
};

export const ErrText: StoryFn<IFSelect> = () => (
  <FSelect fullWidth={true} errText={['Первая ошибка', 'Вторая ошибка']} label={'Error Text'} />
);

export const HelpText: StoryFn<IFSelect> = () => (
  <FSelect fullWidth={true} helpText={'Текст помощи'} />
);
