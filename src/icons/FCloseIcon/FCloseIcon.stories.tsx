import React from 'react';
import {ComponentMeta, Story} from '@storybook/react';
import "bootstrap/dist/css/bootstrap.css"
import {FStack} from "../../index";
import FCloseIcon, {IFCloseIcon} from "./FCloseIcon";

export default {
    title: 'FMaterial UI-Kit/FCloseIcon',
    comment: FCloseIcon,
} as ComponentMeta<typeof FCloseIcon>;

const Template: Story<IFCloseIcon> = (args) => {
    return (
        <FCloseIcon {...args}/>
    )
}

export const Default = Template.bind({});

Default.args = {
    id: 'close-icon-id',
    className: 'close-icon-className',
    st: {padding: '20px'},
    handleClose: () => {
        alert('Клик')
    }
}