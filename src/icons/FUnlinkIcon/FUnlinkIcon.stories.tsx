import React from 'react';

import {ComponentMeta, Story} from '@storybook/react';

import {IFCopyAdd} from "./FUnlinkIcon";
import FUnlinkIcon from "./FUnlinkIcon";
import "bootstrap/dist/css/bootstrap.css"
import {FStack} from "../../material";

export default {
    title: 'FMaterial UI-Kit/FCopyAddIcon',
    comment: FUnlinkIcon,
} as ComponentMeta<typeof FUnlinkIcon>;

const Template: Story<IFCopyAdd> = (args) => {
    return (
        <FUnlinkIcon {...args}/>
    )
}

export const Default = Template.bind({});

Default.args = {
    id: 'pen-icon-id',
    className: 'pen-icon-className',
    st: {padding: '20px'},
    size: 64,
    handleClick: () => {
        alert('Клик')
    }
}

export const ColorContained: Story<IFCopyAdd> = () => (
    <FStack spacing={2} direction={'row'}>
        <FUnlinkIcon color={'primary'}/>
        <FUnlinkIcon color={'secondary'}/>
        <FUnlinkIcon color={'success'}/>
        <FUnlinkIcon color={'danger'}/>
        <FUnlinkIcon color={'warning'}/>
        <FUnlinkIcon color={'info'}/>
        <FUnlinkIcon color={'light'}/>
        <FUnlinkIcon color={'dark'}/>
        <FUnlinkIcon color={'link'}/>
    </FStack>
)
