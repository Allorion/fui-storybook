import React, {useState} from 'react';

import {ComponentMeta, Story} from '@storybook/react';

import FPagination, {IFPagination} from "./FPagination";

import "./FPagination.css"

import "bootstrap/dist/css/bootstrap.css"


export default {
    title: 'FMaterial UI-Kit/FPagination',
    comment: FPagination,
} as ComponentMeta<typeof FPagination>;

const Template: Story<IFPagination> = (args) => <FPagination {...args}/>


export const Default = Template.bind({});

Default.argTypes = {
    siblingCount: {
        options: [0, 1, 2],
        control: {type: 'select'},
    },
}

Default.args = {
    id: 'id-FPagination',
    className: 'classname-FPagination',
    st: {
        marginTop: '16px'
    },
    currentPage: 2,
    totalCount: 100,
    pageSize: 10,
    siblingCount: 1,
    //@ts-ignore
    onPageChange: (page) => setCurrentPage(page),
};