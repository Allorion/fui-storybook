import React from 'react';

import {ComponentMeta, Story} from '@storybook/react';

import {IFContainer} from "./FContainer";

import "./FContainer-story.css"
import FContainer from "./FContainer";

export default {
    title: 'FMaterial UI-Kit/FContainer',
    comment: FContainer,
    argTypes: {
        spacing: {
            defaultValue: 2
        }
    }
} as ComponentMeta<typeof FContainer>;

const Template: Story<IFContainer> = (args) => <FContainer {...args}>
    <div style={{ backgroundColor: '#cfe8fc', height: '100vh' }} />
</FContainer>


export const Default = Template.bind({});

Default.args = {
    id: 'container-id',
    className: 'container-className',
    st: {padding: '20px'}
};

export const MaxWidth = Template.bind({});
MaxWidth.argTypes = {
    maxWidth: {
        options: ['container-xs', 'container-sm', 'container-md', 'container-lg', 'container-fluid'],
        control: {type: 'select'},
    },
}
MaxWidth.args = {
    maxWidth: 'container-xs',
};

