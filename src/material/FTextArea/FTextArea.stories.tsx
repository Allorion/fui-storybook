import React from 'react';

import {ComponentMeta, Story} from '@storybook/react';

import FTextArea, {IFTextArea} from "./FTextArea";

export default {
    title: 'FMaterial UI-Kit/FTextArea',
    comment: FTextArea,
} as ComponentMeta<typeof FTextArea>;

const Template: Story<IFTextArea> = (args) => <FTextArea {...args}/>

export const Default = Template.bind({});

Default.args = {
    className: 'text-area-className',
    id: 'text-area-id',
    st: {padding: '20px'},
    label: 'FTextArea',
    placeholder: 'Тут должен быть текст',
    cols: 3,
    rows: 5,
    autoComplete: true
};

export const Disabled = Template.bind({});

Disabled.args = {
    disabled: true
};

export const ReadOnly = Template.bind({});

ReadOnly.args = {
    readOnly: true
};

export const FullWidth = Template.bind({});

FullWidth.args = {
    fullWidth: true
};
