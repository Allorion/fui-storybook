import React from 'react';

import {ComponentMeta, Story} from '@storybook/react';

import FStack, {IFStack} from "./FStack";

// import "./FStack-story.css"

import "bootstrap/dist/css/bootstrap.css"

export default {
    title: 'FMaterial UI-Kit/FStack',
    comment: FStack,
    argTypes: {
        spacing: {
            defaultValue: 2
        }
    }
} as ComponentMeta<typeof FStack>;

const Template: Story<IFStack> = (args) => <FStack {...args}>
    <div className={'item'}>item 1</div>
    <div className={'item'}>Item 2</div>
    <div className={'item'}>Item 3</div>
</FStack>


export const Default = Template.bind({});

Default.args = {
    id: 'stack-id',
    className: 'stack-className',
    st: {marginTop: '20px'}
};

export const Interactive = Template.bind({});
Interactive.argTypes = {
    direction: {
        options: ['row', 'row-reverse', 'column', 'column-reverse'],
        control: {type: 'select'},
    },
    alignItems: {
        options: ["flex-start", "center", "flex-end", "stretch", "baseline"],
        control: {type: 'select'},
    },
    justifyContent: {
        options: ["flex-start", "center", "flex-end", "space-between", "space-around", "space-evenly"],
        control: {type: 'select'},
    },
    spacing: {
        options: [0, 0.5, 1, 2, 3, 4, 8, 12],
        control: {type: 'radio'},
    },
}
Interactive.args = {
    direction: 'row',
    alignItems: "center",
    justifyContent: 'center',
    spacing: 2
};

