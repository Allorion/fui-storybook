import React from 'react';
import "bootstrap/dist/css/bootstrap.css"

import {ComponentMeta, Story} from '@storybook/react';

import FCheckbox, {IFCheckbox} from "./FCheckbox";

export default {
    title: 'FMaterial UI-Kit/FCheckbox',
    comment: FCheckbox,
} as ComponentMeta<typeof FCheckbox>;

const Template: Story<IFCheckbox> = (args) => <FCheckbox {...args}/>

export const Default = Template.bind({});

Default.args = {
    id: 'checkbox-id',
    className: 'checkbox-className',
    st: {marginTop: '20px'},
    defaultChecked: true,
    checked: true,
    label: 'Checkbox',
    onChange: () => alert('Hello World!'),
    disabled: false
};




