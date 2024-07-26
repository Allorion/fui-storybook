import React from 'react';
// import "./FButtonFile-story.css";
import 'bootstrap/dist/css/bootstrap.css';

import {Meta, StoryFn} from '@storybook/react';

import FButtonFile, {IFButtonFile} from './FButtonFile';

export default {
  title: 'Components/INPUTS/FButtonFile',
    tags: ['autodocs'],
    component: FButtonFile,
} satisfies Meta<typeof FButtonFile>;

const Template: StoryFn<IFButtonFile> = (args) => <FButtonFile {...args}>Button</FButtonFile>;

export const Default = Template.bind({});

Default.argTypes = {
  direction: {
    options: ['row', 'row-reverse', 'column', 'column-reverse'],
    control: { type: 'select' },
  },
  spacing: {
    options: [0, 0.5, 1, 2, 3, 4, 8, 12],
    control: { type: 'radio' },
  },
};

Default.args = {
  id: 'stack-id',
  className: 'stack-className',
  st: { marginTop: '20px' },
  onChange: (file) => console.log(file),
  multiple: true,
  maxCount: 20,
  direction: 'row',
  spacing: 2,
};

export const onClick: StoryFn<IFButtonFile> = () => (
  <FButtonFile onChange={(file) => console.log(file)}>Button</FButtonFile>
);

export const Variant: StoryFn<IFButtonFile> = () => (
  <div className={'stack'}>
    <FButtonFile onChange={(file) => console.log(file)} variant={'contained'}>
      contained
    </FButtonFile>
    <FButtonFile onChange={(file) => console.log(file)} variant={'default'}>
      outlined
    </FButtonFile>
  </div>
);

export const ColorContained: StoryFn<IFButtonFile> = () => (
  <div className={'stack'}>
    <FButtonFile onChange={(file) => console.log(file)} color={'primary'}>
      primary
    </FButtonFile>
    <FButtonFile onChange={(file) => console.log(file)} color={'secondary'}>
      secondary
    </FButtonFile>
    <FButtonFile onChange={(file) => console.log(file)} color={'success'}>
      success
    </FButtonFile>
    <FButtonFile onChange={(file) => console.log(file)} color={'danger'}>
      danger
    </FButtonFile>
    <FButtonFile onChange={(file) => console.log(file)} color={'warning'}>
      warning
    </FButtonFile>
    <FButtonFile onChange={(file) => console.log(file)} color={'info'}>
      info
    </FButtonFile>
    <FButtonFile onChange={(file) => console.log(file)} color={'light'}>
      light
    </FButtonFile>
    <FButtonFile onChange={(file) => console.log(file)} color={'dark'}>
      dark
    </FButtonFile>
    <FButtonFile onChange={(file) => console.log(file)} color={'link'}>
      link
    </FButtonFile>
  </div>
);

export const ColorDefault: StoryFn<IFButtonFile> = () => (
  <div className={'stack'}>
    <FButtonFile onChange={(file) => console.log(file)} variant={'default'} color={'primary'}>
      primary
    </FButtonFile>
    <FButtonFile onChange={(file) => console.log(file)} variant={'default'} color={'secondary'}>
      secondary
    </FButtonFile>
    <FButtonFile onChange={(file) => console.log(file)} variant={'default'} color={'success'}>
      success
    </FButtonFile>
    <FButtonFile onChange={(file) => console.log(file)} variant={'default'} color={'danger'}>
      danger
    </FButtonFile>
    <FButtonFile onChange={(file) => console.log(file)} variant={'default'} color={'warning'}>
      warning
    </FButtonFile>
    <FButtonFile onChange={(file) => console.log(file)} variant={'default'} color={'info'}>
      info
    </FButtonFile>
    <FButtonFile onChange={(file) => console.log(file)} variant={'default'} color={'light'}>
      light
    </FButtonFile>
    <FButtonFile onChange={(file) => console.log(file)} variant={'default'} color={'dark'}>
      dark
    </FButtonFile>
    <FButtonFile onChange={(file) => console.log(file)} variant={'default'} color={'link'}>
      link
    </FButtonFile>
  </div>
);

export const Size: StoryFn<IFButtonFile> = () => (
  <div className={'stack'}>
    <FButtonFile onChange={(file) => console.log(file)} size={'btn-lg'}>
      btn-lg
    </FButtonFile>
    <FButtonFile onChange={(file) => console.log(file)} size={'btn-xs'}>
      btn-xs
    </FButtonFile>
    <FButtonFile onChange={(file) => console.log(file)} size={'btn-sm'}>
      btn-sm
    </FButtonFile>
  </div>
);

export const Disabled: StoryFn<IFButtonFile> = () => (
  <div className={'stack'}>
    <FButtonFile onChange={(file) => console.log(file)} disabled={true}>
      true
    </FButtonFile>
    <FButtonFile onChange={(file) => console.log(file)} disabled={false}>
      false
    </FButtonFile>
  </div>
);

export const FullWidth: StoryFn<IFButtonFile> = () => (
  <FButtonFile onChange={(file) => console.log(file)} fullWidth={true}>
    fullWidth
  </FButtonFile>
);
