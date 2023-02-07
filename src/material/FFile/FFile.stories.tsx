import React from 'react';

import {ComponentMeta, Story} from '@storybook/react';

import {IFFile} from "./FFile";

import FFile from "./FFile";

import "bootstrap/dist/css/bootstrap.css"

export default {
    title: 'FMaterial UI-Kit/FFile',
    comment: FFile,
} as ComponentMeta<typeof FFile>;

const TemplateDefault: Story<IFFile> = (args) => (
    <FFile {...args}/>
)

export const Default = TemplateDefault.bind({});

Default.args = {
    id: 'file-id',
    className: 'file-className',
    st: {marginTop: '20px'},
    handleDelete: () => console.log('Удалить'),
    name: 'file.pdf'
};