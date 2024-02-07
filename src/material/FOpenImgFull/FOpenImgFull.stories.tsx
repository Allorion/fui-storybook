import React from 'react';

import { Meta, StoryFn } from '@storybook/react';

import { IFOpenImgFull } from './FOpenImgFull';

import FOpenImgFull from './FOpenImgFull';

import 'bootstrap/dist/css/bootstrap.css';

// @ts-ignore
import img3 from './statick/3.png';
// @ts-ignore
import img2 from './statick/1.png';

export default {
  title: 'Components/LAB/FOpenImgFull',
  tags: ['autodocs'],
  component: FOpenImgFull,
} satisfies Meta<typeof FOpenImgFull>;

const TemplateDefault: StoryFn<IFOpenImgFull> = (args) => <FOpenImgFull {...args} />;

export const Default = TemplateDefault.bind({});

const imgUrl: string[] = [img3, img2];

Default.args = {
  id: 'grid-id',
  className: 'grid-className',
  st: { marginTop: '20px' },
  imagesUrl: imgUrl,
  selectedImg: 0,
  openAndClose: true,
  handleClose: () => {},
};
