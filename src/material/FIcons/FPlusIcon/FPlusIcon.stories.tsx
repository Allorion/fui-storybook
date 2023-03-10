import React from 'react';

import {ComponentMeta, Story} from '@storybook/react';

import {IFPlusIcon} from "./FPlusIcon";
import FPlusIcon from "./FPlusIcon";
import "bootstrap/dist/css/bootstrap.css"
import {FStack} from "../../index";

export default {
    title: 'FMaterial UI-Kit/FPlusIcon',
    comment: FPlusIcon,
} as ComponentMeta<typeof FPlusIcon>;

const Template: Story<IFPlusIcon> = (args) => {
    return (
        <FPlusIcon {...args}/>
    )
}

export const Default = Template.bind({});

Default.args = {
    id: 'plus-icon-id',
    className: 'plus-icon-className',
    st: {padding: '20px'},
    size: 64,
    handleClick: () => {
        alert('Клик')
    }
}

export const ColorContained: Story<IFPlusIcon> = () => (
    <FStack spacing={2} direction={'row'}>
        <FPlusIcon color={'primary'}/>
        <FPlusIcon color={'secondary'}/>
        <FPlusIcon color={'success'}/>
        <FPlusIcon color={'danger'}/>
        <FPlusIcon color={'warning'}/>
        <FPlusIcon color={'info'}/>
        <FPlusIcon color={'light'}/>
        <FPlusIcon color={'dark'}/>
        <FPlusIcon color={'link'}/>
    </FStack>
)
