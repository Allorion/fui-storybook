import React from 'react';

import {ComponentMeta, Story} from '@storybook/react';

import "bootstrap/dist/css/bootstrap.css"
import FPreloader, {IFPreloader} from "./FPreloader";
import {FProgress} from "../index";

export default {
    title: 'FMaterial UI-Kit/FPreloader',
    comment: FPreloader,
} as ComponentMeta<typeof FPreloader>;

const Progress: Story<IFPreloader> = (args) => {

    return (
        <FPreloader {...args} >
            <FProgress/>
        </FPreloader>
    )
}

export const Default = Progress.bind({});

Default.args = {
    st: {
        padding: 0
    },
    backgroundColor: 'black',
    open: true
};
