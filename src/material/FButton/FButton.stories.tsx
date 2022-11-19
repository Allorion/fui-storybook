import React from 'react';
import "./FButton-story.css";

import {ComponentStory, ComponentMeta, Story} from '@storybook/react';

import FButton, {IFButton} from "./FButton";

export default {
    title: 'FMaterial UI-Kit/FButton',
    comment: FButton,
    // argTypes: {
    //     children: {
    //         defaultValue: 'Button'
    //     }
    // }
} as ComponentMeta<typeof FButton>;

const Template: Story<IFButton> = (args) => <FButton {...args}>Button</FButton>;

export const Default: Story<IFButton> = () => <FButton>Button</FButton>

export const onClick: Story<IFButton> = () => (
    <FButton onClick={() => alert('Hello World!')}>Button</FButton>
)

export const Variant: Story<IFButton> = () => (
    <div className={'stack'}>
        <FButton variant={'contained'}>contained</FButton>
        <FButton variant={'outlined'}>outlined</FButton>
    </div>
)

export const Color: Story<IFButton> = () => (
    <div className={'stack'}>
        <FButton color={'primary'}>primary</FButton>
        <FButton color={'secondary'}>secondary</FButton>
        <FButton color={'success'}>success</FButton>
        <FButton color={'danger'}>danger</FButton>
        <FButton color={'warning'}>warning</FButton>
        <FButton color={'info'}>info</FButton>
        <FButton color={'light'}>light</FButton>
        <FButton color={'dark'}>dark</FButton>
        <FButton color={'link'}>link</FButton>
    </div>
)

export const Size: Story<IFButton> = () => (
    <div className={'stack'}>
        <FButton size={'btn-lg'}>btn-lg</FButton>
        <FButton size={'btn-xs'}>btn-xs</FButton>
        <FButton size={'btn-sm'}>btn-sm</FButton>
    </div>
)

export const Disabled: Story<IFButton> = () => (
    <div className={'stack'}>
        <FButton disabled={true}>true</FButton>
        <FButton disabled={false}>false</FButton>
    </div>
)

export const Style: Story<IFButton> = () => (
    <FButton st={
        {
            backgroundColor: 'black',
            color: 'white',
            width: '100px'
        }
    }>
        Style
    </FButton>
)

export const Class: Story<IFButton> = () => (
    <FButton className={'class-button'}>
        Class
    </FButton>
)
export const FullWidth: Story<IFButton> = () => (
    <FButton fullWidth={true}>
        fullWidth
    </FButton>
)
export const Id: Story<IFButton> = () => (
    <FButton id={'button-id'}>
        Id
    </FButton>
)



