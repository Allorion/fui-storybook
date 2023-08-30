import React, { useState } from 'react';

import { Meta, StoryFn } from '@storybook/react';

import FPagination, { IFPagination } from './FPagination';

import './FPagination.css';

import 'bootstrap/dist/css/bootstrap.css';

export default {
  title: 'FMaterial UI-Kit/FPagination',
  tags: ['autodocs'],
  component: FPagination,
} satisfies Meta<typeof FPagination>;

const Template: StoryFn<IFPagination> = (args) => <FPagination {...args} />;

export const Default = Template.bind({});

Default.argTypes = {
  siblingCount: {
    options: [0, 1, 2],
    control: { type: 'select' },
  },
};

Default.args = {
  id: 'id-FPagination',
  className: 'classname-FPagination',
  st: {
    marginTop: '16px',
  },
  currentPage: 2,
  totalCount: 100,
  pageSize: 10,
  siblingCount: 1,
  //@ts-ignore
  onPageChange: (page) => setCurrentPage(page),
};
