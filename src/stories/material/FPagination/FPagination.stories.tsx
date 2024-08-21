import { Meta, StoryFn } from '@storybook/react';

import './FPagination.css';


import FPagination, { IFPagination } from './FPagination';

export default {
  title: 'Components/NAVIGATION/FPagination',
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
  onPageChange: () => {},
};
