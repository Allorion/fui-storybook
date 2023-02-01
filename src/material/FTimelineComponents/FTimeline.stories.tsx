import React from 'react';

import {ComponentMeta, Story} from '@storybook/react';

import FTimeline, {IFTimeline} from "./FTimeline";

import "bootstrap/dist/css/bootstrap.css"

export default {
    title: 'FMaterial UI-Kit/FTimeline',
    comment: FTimeline,
} as ComponentMeta<typeof FTimeline>;

const Template: Story<IFTimeline> = (args) => <FTimeline {...args}/>

export const Default = Template.bind({});

Default.args = {
    id: 'stack-id',
    className: 'stack-className',
    st: {marginTop: '20px'}
};