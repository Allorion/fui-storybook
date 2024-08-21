import { Meta, StoryFn } from '@storybook/react';



import img3 from '@images/3.png';
import img2 from '@images/1.png';

import FOpenImgFull, { IFOpenImgFull } from './FOpenImgFull';

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
  handleClose: () => { },
};
