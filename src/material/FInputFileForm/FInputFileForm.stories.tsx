import React from 'react';

import {ComponentMeta, Story} from '@storybook/react';

import {IFInputFileForm} from "./FInputFileForm";

import FInputFileForm from "./FInputFileForm";

import "bootstrap/dist/css/bootstrap.css"

export default {
    title: 'FMaterial UI-Kit/FInputFileForm',
    comment: FInputFileForm,
} as ComponentMeta<typeof FInputFileForm>;

const TemplateDefault: Story<IFInputFileForm> = (args) => (
    <FInputFileForm {...args}/>
)

export const Default = TemplateDefault.bind({});

Default.args = {
    id: 'input-file-form-id',
    className: 'input-file-form-className',
    st: {marginTop: '20px'},
    dataMaxSize: 100,
    name: 'input-file-form-name',
    accept: '.zip',
    multiple: false,
    disabled: false,
    onChange: (e) => console.log(e!.target!.files![0]),
    deleteFile: false
};