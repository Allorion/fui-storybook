import React from 'react';

import { Meta, StoryFn } from '@storybook/react';

import FSelectSearchDb, { IFSelectSearchDb } from './FSelectSearchDb';

export default {
  title: 'FMaterial UI-Kit/FSelectSearchDb',
  tags: ['autodocs'],
  component: FSelectSearchDb,
} satisfies Meta<typeof FSelectSearchDb>;

const Template: StoryFn<IFSelectSearchDb> = (args) => <FSelectSearchDb {...args} />;

export const Default = Template.bind({});

Default.args = {
  id: 'select-search-db-id',
  className: 'select-search-db-className',
  st: { marginTop: '20px' },
  label: 'Поле поиска по базе',
  //     fetchingFc(text: string, setState: React.Dispatch<React.SetStateAction<any>>)
  //     Требуется передать функцию с запросом к бд, где ответ от сервера сохраняется в useState
  fetchingFc: () => {},
  // optArray(opt: any) => {
  //     if (Object.values(opt).length !== 0) {
  //         return <p>{opt.name} {opt.age}</p>
  //     }
  // }
  optArray: (opt: any) => {
    if (Object.values(opt).length !== 0) {
      return (
        <p>
          {opt.name} {opt.age}
        </p>
      );
    }
  },
  value: {
    name: 'Иван',
    age: '24',
  },
  // Функция возвращает объект выбранного option
  selectedOpt: (e: any) => {
    console.log(e);
  },
};

export const FullWidth = Template.bind({});

FullWidth.args = {
  label: 'Поле поиска по базе',
  fullWidth: true,
};

export const Disabled = Template.bind({});

Disabled.args = {
  label: 'Поле поиска по базе',
  disabled: true,
};

export const ReadOnly = Template.bind({});

ReadOnly.args = {
  label: 'Поле поиска по базе',
  readOnly: true,
};

export const Load = Template.bind({});

Load.args = {
  load: true,
};

export const ErrText: StoryFn<IFSelectSearchDb> = () => (
  <FSelectSearchDb
    fullWidth={true}
    errText={['Первая ошибка', 'Вторая ошибка']}
    label={'Error Text'}
    fetchingFc={() => {}}
    optArray={() => {}}
    selectedOpt={() => {}}
  />
);

export const HelpText: StoryFn<IFSelectSearchDb> = () => (
  <FSelectSearchDb
    fullWidth={true}
    helpText={'Текст помощи'}
    fetchingFc={() => {}}
    optArray={() => {}}
    selectedOpt={() => {}}
  />
);
