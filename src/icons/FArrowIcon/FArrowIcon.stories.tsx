import React from 'react';
import {ComponentMeta, Story} from '@storybook/react';
import "bootstrap/dist/css/bootstrap.css"
import {FStack} from "../../index";
import FArrowIcon, {IFArrowIcon} from "./FArrowIcon";

export default {
    title: 'FMaterial UI-Kit/FArrowIcon',
    comment: FArrowIcon,
} as ComponentMeta<typeof FArrowIcon>;

const Template: Story<IFArrowIcon> = (args) => {
    return (
        <FArrowIcon {...args}/>
    )
}

export const Default = Template.bind({});

Default.args = {
    id: 'arrow-icon-id',
    className: 'arrow-icon-className',
    st: {padding: '20px'},
    size: 64,
    handleClick: () => {
        alert('Клик')
    }
}

export const ColorContained: Story<IFArrowIcon> = () => (
    <FStack spacing={2} direction={'row'}>
        <FArrowIcon color={'primary'}/>
        <FArrowIcon color={'secondary'}/>
        <FArrowIcon color={'success'}/>
        <FArrowIcon color={'danger'}/>
        <FArrowIcon color={'warning'}/>
        <FArrowIcon color={'info'}/>
        <FArrowIcon color={'light'}/>
        <FArrowIcon color={'dark'}/>
        <FArrowIcon color={'link'}/>
    </FStack>
)

export const Direction: Story<IFArrowIcon> = () => (
    <FStack spacing={2} direction={'row'}>
        <FArrowIcon direction={'up'}/>
        <FArrowIcon direction={'right'}/>
        <FArrowIcon direction={'down'}/>
        <FArrowIcon direction={'left'}/>
    </FStack>
)