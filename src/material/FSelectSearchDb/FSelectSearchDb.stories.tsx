import React from 'react';

import {ComponentMeta, Story} from '@storybook/react';

import FSelectSearchDb, {IFSelectSearchDb} from "./FSelectSearchDb";

export default {
    title: 'FMaterial UI-Kit/FSelectSearchDb',
    comment: FSelectSearchDb,
} as ComponentMeta<typeof FSelectSearchDb>;

const Template: Story<IFSelectSearchDb> = (args) => <FSelectSearchDb {...args}/>

export const Default = Template.bind({});

Default.args = {
    id: 'select-search-db-id',
    className: 'select-search-db-className',
    st: {marginTop: '20px'},
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
            return <p>{opt.name} {opt.age}</p>
        }
    },
    value: {
        name: 'Иван',
        age: '24'
    },
    // Функция возвращает объект выбранного option
    selectedOpt: (e: any) => {
        console.log(e)
    },
    optionLabel: 'name',
};

export const FullWidth = Template.bind({});

FullWidth.args = {
    label: 'Поле поиска по базе',
    fullWidth: true
};

export const Disabled = Template.bind({});

Disabled.args = {
    label: 'Поле поиска по базе',
    disabled: true
};

export const ReadOnly = Template.bind({});

ReadOnly.args = {
    label: 'Поле поиска по базе',
    readOnly: true
};



