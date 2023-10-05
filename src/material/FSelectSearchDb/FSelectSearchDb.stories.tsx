import React from 'react';

import {Meta, StoryFn} from '@storybook/react';

import FSelectSearchDb, {IFSelectSearchDb} from './FSelectSearchDb';

export default {
    title: 'Components/INPUTS/FSelectSearchDb',
    component: FSelectSearchDb,
} satisfies Meta<typeof FSelectSearchDb>;

const Template: StoryFn<IFSelectSearchDb> = (args) => <FSelectSearchDb {...args} />;

export const Default = Template.bind({});

Default.args = {
    id: 'select-search-db-id',
    className: 'select-search-db-className',
    st: {marginTop: '20px'},
    label: 'Поле поиска по базе',
    fetchingFunc: (e) => {
        return []
    },
    selectedElement: (e) => {
        console.log(e)
    },
    selectItem: (opt: any) => {
        if (Object.values(opt).length !== 0) {
            return (
                <p>
                    {opt.title}
                </p>
            );
        }
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
        fetchingFunc={() => {
            return []
        }}
        selectItem={() => {
        }}
        selectedElement={(e) => console.log(e)}
    />
);

export const HelpText: StoryFn<IFSelectSearchDb> = () => (
    <FSelectSearchDb
        fullWidth={true}
        helpText={'Текст помощи'}
        fetchingFunc={() => {
            return []
        }}
        selectItem={() => {
        }}
        selectedElement={(e) => console.log(e)}
    />
);
