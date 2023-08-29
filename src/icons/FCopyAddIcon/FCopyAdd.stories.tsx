import React from 'react';

import {ComponentMeta, Story} from '@storybook/react';

import {IFCopyAdd} from "./FCopyAdd";
import FCopyAdd from "./FCopyAdd";
import "bootstrap/dist/css/bootstrap.css"
import {FStack} from "../../material";

export default {
    title: 'FMaterial UI-Kit/FCopyAdd',
    comment: FCopyAdd,
} as ComponentMeta<typeof FCopyAdd>;

const Template: Story<IFCopyAdd> = (args) => {
    return (
        <FCopyAdd {...args}/>
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
        <FCopyAdd color={'primary'}/>
        <FCopyAdd color={'secondary'}/>
        <FCopyAdd color={'success'}/>
        <FCopyAdd color={'danger'}/>
        <FCopyAdd color={'warning'}/>
        <FCopyAdd color={'info'}/>
        <FCopyAdd color={'light'}/>
        <FCopyAdd color={'dark'}/>
        <FCopyAdd color={'link'}/>
    </FStack>
)
