import React from 'react';

import {ComponentMeta, Story} from '@storybook/react';

import {IFTrashIcon} from "./FTrashIcon";
import FTrashIcon from "./FTrashIcon";
import "bootstrap/dist/css/bootstrap.css"
import {FStack} from "../../index";

export default {
    title: 'FMaterial UI-Kit/FTrashIcon',
    comment: FTrashIcon,
    argTypes: {
        spacing: {
            defaultValue: 2
        }
    }
} as ComponentMeta<typeof FTrashIcon>;

const Template: Story<IFTrashIcon> = (args) => {
    return (
        <FTrashIcon {...args}/>
    )
}

export const Default = Template.bind({});

Default.args = {
    id: 'trash-icon-id',
    className: 'trash-icon-className',
    st: {padding: '20px'},
    size: 64,
    handleClick: () => {
        alert('Клик')
    }
}

export const ColorContained: Story<IFTrashIcon> = () => (
    <FStack spacing={2} direction={'row'}>
        <FTrashIcon color={'primary'}/>
        <FTrashIcon color={'secondary'}/>
        <FTrashIcon color={'success'}/>
        <FTrashIcon color={'danger'}/>
        <FTrashIcon color={'warning'}/>
        <FTrashIcon color={'info'}/>
        <FTrashIcon color={'light'}/>
        <FTrashIcon color={'dark'}/>
        <FTrashIcon color={'link'}/>
    </FStack>
)
