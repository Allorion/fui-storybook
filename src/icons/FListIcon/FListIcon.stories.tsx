import React from 'react';

import {ComponentMeta, Story} from '@storybook/react';

import {IFListIcon} from "./FListIcon";
import FListIcon from "./FListIcon";
import "bootstrap/dist/css/bootstrap.css"
import {FStack} from "../../index";

export default {
    title: 'FMaterial UI-Kit/FListIcon',
    comment: FListIcon,
} as ComponentMeta<typeof FListIcon>;

const Template: Story<IFListIcon> = (args) => {
    return (
        <FListIcon {...args}/>
    )
}

export const Default = Template.bind({});

Default.args = {
    id: 'list-icon-id',
    className: 'list-icon-className',
    st: {padding: '20px'},
    size: 64,
    handleClick: () => {
        alert('Клик')
    }
}

export const ColorContained: Story<IFListIcon> = () => (
    <FStack spacing={2} direction={'row'}>
        <FListIcon color={'primary'}/>
        <FListIcon color={'secondary'}/>
        <FListIcon color={'success'}/>
        <FListIcon color={'danger'}/>
        <FListIcon color={'warning'}/>
        <FListIcon color={'info'}/>
        <FListIcon color={'light'}/>
        <FListIcon color={'dark'}/>
        <FListIcon color={'link'}/>
    </FStack>
)
