import React from 'react';

import {ComponentMeta, Story} from '@storybook/react';

import FRadioButton, {IFRadioButton} from "./FRadioButton";

export default {
    title: 'FMaterial UI-Kit/FRadioButton',
    comment: FRadioButton,
} as ComponentMeta<typeof FRadioButton>;

const Template: Story<IFRadioButton> = (args) => <FRadioButton {...args}/>

export const Default = Template.bind({});

Default.args = {
    id: 'radio-button-id',
    className: 'radio-button-className',
    st: {marginTop: '20px'},
    checked: true,
    label: 'RadioButton',
    onClick: () => alert('Hello World!'),
    disabled: false
};




