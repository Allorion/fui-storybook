import React from 'react';

import {ComponentMeta, Story} from '@storybook/react';

import "bootstrap/dist/css/bootstrap.css"
import FProgress, {IFProgress} from "./FProgress";

export default {
    title: 'FMaterial UI-Kit/FProgress',
    comment: FProgress,
} as ComponentMeta<typeof FProgress>;

const Progress: Story<IFProgress> = (args) => {

    return (
        <FProgress {...args} >

        </FProgress>
    )
}


export const Default = Progress.bind({});
Default.argTypes = {
    color: {
        options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'link'],
        control: {type: 'select'},
    },
}

Default.args = {
    st: {
        width: '5rem',
        height: '5rem'
    },
};
