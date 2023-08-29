import React from 'react';

import {ComponentMeta, Story} from '@storybook/react';

import "bootstrap/dist/css/bootstrap.css"
import {FStack} from "../../material";
import FCopyAddIcon, {IFCopyAddIcon} from "./FCopyAdd";

export default {
    title: 'FMaterial UI-Kit/FCopyAddIconIcon',
    comment: FCopyAddIcon,
} as ComponentMeta<typeof FCopyAddIcon>;

const Template: Story<IFCopyAddIcon> = (args) => {
    return (
        <FCopyAddIcon {...args}/>
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

export const ColorContained: Story<IFCopyAddIcon> = () => (
    <FStack spacing={2} direction={'row'}>
        <FCopyAddIcon color={'primary'}/>
        <FCopyAddIcon color={'secondary'}/>
        <FCopyAddIcon color={'success'}/>
        <FCopyAddIcon color={'danger'}/>
        <FCopyAddIcon color={'warning'}/>
        <FCopyAddIcon color={'info'}/>
        <FCopyAddIcon color={'light'}/>
        <FCopyAddIcon color={'dark'}/>
        <FCopyAddIcon color={'link'}/>
    </FStack>
)
