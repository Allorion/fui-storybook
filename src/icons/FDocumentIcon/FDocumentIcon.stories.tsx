import React from 'react';

import { Meta, StoryFn } from '@storybook/react';

import { IFDocumentIcon } from './FDocumentIcon';
import FDocumentIcon from './FDocumentIcon';
import 'bootstrap/dist/css/bootstrap.css';
import { FStack } from '../../material';

export default {
  title: 'Icons/FDocumentIcon',
    tags: ['autodocs'],
    component: FDocumentIcon,
} satisfies Meta<typeof FDocumentIcon>;

const Template: StoryFn<IFDocumentIcon> = (args) => {
  return <FDocumentIcon {...args} />;
};

export const Default = Template.bind({});

Default.args = {
  id: 'document-icon-id',
  className: 'document-icon-className',
  st: { padding: '20px' },
  size: 64,
  handleClick: () => {
    alert('Клик');
  },
};

export const ColorContained: StoryFn<IFDocumentIcon> = () => (
  <FStack spacing={2} direction={'row'}>
    <FDocumentIcon color={'primary'} />
    <FDocumentIcon color={'secondary'} />
    <FDocumentIcon color={'success'} />
    <FDocumentIcon color={'danger'} />
    <FDocumentIcon color={'warning'} />
    <FDocumentIcon color={'info'} />
    <FDocumentIcon color={'light'} />
    <FDocumentIcon color={'dark'} />
    <FDocumentIcon color={'link'} />
  </FStack>
);

export const Files: StoryFn<IFDocumentIcon> = () => (
    <FStack spacing={2} direction={'row'}>
        <FDocumentIcon file={'check'} />
        <FDocumentIcon file={'download'} />
        <FDocumentIcon file={'upload'} />
        <FDocumentIcon file={'close'} />
        <FDocumentIcon file={'excel'} />
        <FDocumentIcon file={'doc'} />
        <FDocumentIcon file={'docx'} />
        <FDocumentIcon file={'pdf'} />
        <FDocumentIcon file={'jpg'} />
        <FDocumentIcon file={'png'} />
        <FDocumentIcon file={'txt'} />
    </FStack>
);
