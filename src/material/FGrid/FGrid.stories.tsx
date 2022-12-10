import React from 'react';

import {ComponentMeta, Story} from '@storybook/react';

import {IFGrid} from "./FGrid";

import "./FGrid-story.css"
import FGrid from "./FGrid";

import "bootstrap/dist/css/bootstrap.css"

export default {
    title: 'FMaterial UI-Kit/FGrid',
    comment: FGrid,
} as ComponentMeta<typeof FGrid>;

const TemplateDefault: Story<IFGrid> = (args) => (
    <FGrid obj={'container'} {...args}>
        <FGrid obj={'item'} {...args} sm={8} md={8} lg={8} xl={8} xxl={8}>
            <div className={'item'}>
                Item 1
            </div>
        </FGrid>
        <FGrid obj={'item'}  {...args} sm={4} md={4} lg={4} xl={4} xxl={4}>
            <div className={'item'}>
                Item 2
            </div>
        </FGrid>
        <FGrid obj={'item'}  {...args} sm={4} md={4} lg={4} xl={4} xxl={4}>
            <div className={'item'}>
                Item 3
            </div>
        </FGrid>
        <FGrid obj={'item'}  {...args} sm={8} md={8} lg={8} xl={8} xxl={8}>
            <div className={'item'}>
                Item 1
            </div>
        </FGrid>
    </FGrid>
)

export const Default = TemplateDefault.bind({});

Default.args = {
    id: 'grid-id',
    className: 'grid-className',
    st: {marginTop: '20px'}
};

const TemplateCol: Story<IFGrid> = (args) => (
    <FGrid obj={'container'}>
        <FGrid obj={'item'} sm={2} md={2} lg={2} xl={2} xxl={2}>
            <div className={'item'}>
                1 of 3
            </div>
        </FGrid>
        <FGrid obj={'item'} {...args}>
            <div className={'item'}>
                Содержание переменной ширины
            </div>
        </FGrid>
        <FGrid obj={'item'} sm={5} md={5} lg={5} xl={5} xxl={5}>
            <div className={'item'}>
                3 of 3
            </div>
        </FGrid>
    </FGrid>
)

export const Col = TemplateCol.bind({});

Col.args = {
    sm: 1,
    md: 1,
    lg: 1,
    xl: 1,
    xxl: 1,
};

const TemplateColAuto: Story<IFGrid> = (args) => (
    <FGrid obj={'container'}>
        <FGrid obj={'item'} sm={2} md={2} lg={2} xl={2} xxl={2}>
            <div className={'item'}>
                1 of 3
            </div>
        </FGrid>
        <FGrid obj={'item'} {...args}>
            <div className={'item'}>
                Содержание переменной ширины
            </div>
        </FGrid>
        <FGrid obj={'item'} sm={5} md={5} lg={5} xl={5} xxl={5}>
            <div className={'item'}>
                3 of 3
            </div>
        </FGrid>
    </FGrid>
)
export const ColAuto = TemplateColAuto.bind({});

ColAuto.argTypes = {
    colAuto: {
        options: ['col-sm-auto', 'col-md-auto', 'col-lg-auto', 'col-xl-auto', 'col-xxl-auto'],
        control: {type: 'select'},
    },
}

ColAuto.args = {
    colAuto: "col-sm-auto"
};