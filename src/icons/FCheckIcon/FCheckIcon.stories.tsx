import React from 'react';

import {ComponentMeta, Story} from '@storybook/react';

import {IFCheckIcon} from "./FCheckIcon";
import FCheckIcon from "./FCheckIcon";
import "bootstrap/dist/css/bootstrap.css"
import {FStack} from "../../material";

export default {
    title: 'FMaterial UI-Kit/FCheckIcon',
    comment: FCheckIcon,
} as ComponentMeta<typeof FCheckIcon>;

const Template: Story<IFCheckIcon> = (args) => {
    return (
        <FCheckIcon {...args}/>
    )
}

export const Default = Template.bind({});

Default.args = {
    id: 'check-icon-id',
    className: 'check-icon-className',
    st: {padding: '20px'},
    size: 64,
    handleClick: () => {
        alert('Клик')
    }
}

export const ColorContained: Story<IFCheckIcon> = () => (
    <FStack spacing={2} direction={'row'}>
        <FCheckIcon color={'primary'}/>
        <FCheckIcon color={'secondary'}/>
        <FCheckIcon color={'success'}/>
        <FCheckIcon color={'danger'}/>
        <FCheckIcon color={'warning'}/>
        <FCheckIcon color={'info'}/>
        <FCheckIcon color={'light'}/>
        <FCheckIcon color={'dark'}/>
        <FCheckIcon color={'link'}/>
    </FStack>
)
