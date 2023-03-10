import React from 'react';

import {ComponentMeta, Story} from '@storybook/react';

import FFullDateField, {IFFullDateField} from "./FFullDateField";

export default {
    title: 'FMaterial UI-Kit/FFullDateField',
    comment: FFullDateField,
} as ComponentMeta<typeof FFullDateField>;

const Template: Story<IFFullDateField> = (args) => <FFullDateField {...args}/>

export const Default = Template.bind({});

Default.args = {
    className: 'full-date-field-className',
    id: 'full-date-field-id',
    st: {padding: '20px'},
    value: '2023-01-01',
    defaultValue: '2023-01-01',
    onChange: (e) => console.log(e.target.value)
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
