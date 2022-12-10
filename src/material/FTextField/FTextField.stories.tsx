import React from 'react';

import {ComponentMeta, Story} from '@storybook/react';

import {FTextField} from "../index";
import {IFTextField} from "./FTextField";

import "bootstrap/dist/css/bootstrap.css"

export default {
    title: 'FMaterial UI-Kit/FTextField',
    comment: FTextField,
    argTypes: {
        st: {
            defaultValue: {width: '500px'}
        }
    }
} as ComponentMeta<typeof FTextField>;

const Template: Story<IFTextField> = (args) => (
    <div style={{width: 'auto'}}>
        <FTextField {...args}/>
    </div>
)


export const Default = Template.bind({});

Default.args = {
    id: 'stack-id',
    className: 'stack-className',
};

export const Label = Template.bind({});

Label.args = {
    label: 'Имя пользователя'
};


export const Value = Template.bind({});

Value.args = {
    value: 'Что-то изменилось'
};

export const DefaultValue = Template.bind({});

DefaultValue.args = {
    defaultValue: 'Что-то изменилось 2.0'
};

export const Interactive = Template.bind({});
Interactive.argTypes = {
    type: {
        options: ['text', 'number', 'email', 'tel'],
        control: {type: 'select'},
    },
    disabled: {
        options: [true, false],
        control: {type: 'select'},
    },
    readOnly: {
        options: [true, false],
        control: {type: 'select'},
    },

}
Interactive.args = {
    type: 'text',
    disabled: false,
};

export const FullWidth: Story<IFTextField> = () => (
    <FTextField fullWidth={true} label={'fullWidth'}/>
)

export const ErrText: Story<IFTextField> = () => (
    <FTextField errText={['Первая ошибка', 'Вторая ошибка']} label={'Error Text'}/>
)

export const OnChange: Story<IFTextField> = () => (
    <FTextField
        onChange={(event) => event.target.value}
    />
)

export const OnBlur: Story<IFTextField> = () => (
    <FTextField
        onBlur={(event) => console.log(event.target.value)}
    />
)

export const OnFocus: Story<IFTextField> = () => (
    <FTextField
        onFocus={(event) => console.log(event.target.value)}
    />
)

export const OnInput: Story<IFTextField> = () => (
    <FTextField
        onInput={(event) => console.log('onInput')}
    />
)


