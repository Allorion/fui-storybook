import React from 'react';

import {ComponentMeta, Story} from '@storybook/react';

import {IFAlert} from "./FAlert";

import FAlert from "./FAlert";

import "bootstrap/dist/css/bootstrap.css"

import "./FAlert-stories.css"

export default {
    title: 'FMaterial UI-Kit/FAlert',
    comment: FAlert,
    argTypes: {
        title: {
            defaultValue: 'Информация'
        },
        body: {
            defaultValue: 'Отчет правки внесены'
        },
        open: {
            defaultValue: true
        },
    }
} as ComponentMeta<typeof FAlert>;

const TemplateDefault: Story<IFAlert> = (args) => (
    <FAlert {...args}/>
)

export const Default = TemplateDefault.bind({});

Default.args = {
    open: true,
    title: 'Информация',
    body: 'Отчет правки внесены',
    st: {
        marginTop: '20px'
    },
    id: 'f-alert-id',
    className: 'f-alert-class',
    buttonClose: true,
};

export const ButtonClose = TemplateDefault.bind({});

ButtonClose.args = {
    buttonClose: true,
    onClose: () => {},
};

export const Variant = TemplateDefault.bind({});
Variant.argTypes = {
    variant: {
        options: ['info', 'error'],
        control: {type: 'select'},
    },
}
Variant.args = {
    variant: "info"
};

export const Position = TemplateDefault.bind({});
Position.argTypes = {
    vertical: {
        options: ['top', 'bottom'],
        control: {type: 'select'},
    },
    horizontal: {
        options: ['left', 'center', 'right'],
        control: {type: 'select'},
    },
}
Variant.args = {
    vertical: 'bottom',
    horizontal: 'center'
};