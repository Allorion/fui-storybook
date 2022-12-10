import React from 'react';

import {ComponentMeta, Story} from '@storybook/react';

import FPaper, {IFPaper} from "./FPaper";

import "bootstrap/dist/css/bootstrap.css"

export default {
    title: 'FMaterial UI-Kit/FPaper',
    comment: FPaper,
} as ComponentMeta<typeof FPaper>;

const Template: Story<IFPaper> = (args) => <FPaper {...args}>
    Тут что-то должно быть
</FPaper>


export const Default = Template.bind({});

Default.args = {
    label: 'FPaper',
    id: 'id-fpaper',
    className: 'classname-fpaper',
    st: {
        marginTop: '16px'
    }
};

export const FontSizeLabel = Template.bind({});

FontSizeLabel.args = {
    label: 'FPaper',
    fontSizeLabel: '16px'
};

export const FontSizeBody = Template.bind({});

FontSizeBody.args = {
    label: 'FPaper',
    fontSizeBody: '14px'
};