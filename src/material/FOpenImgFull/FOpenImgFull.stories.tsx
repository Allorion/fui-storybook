import React from 'react';

import {ComponentMeta, Story} from '@storybook/react';

import {IFOpenImgFull} from "./FOpenImgFull";

import FOpenImgFull from "./FOpenImgFull";

import "bootstrap/dist/css/bootstrap.css"

// @ts-ignore
import img3 from "./statick/3.png"
// @ts-ignore
import img2 from "./statick/1.png"

export default {
    title: 'FMaterial UI-Kit/FOpenImgFull',
    comment: FOpenImgFull,
} as ComponentMeta<typeof FOpenImgFull>;

const TemplateDefault: Story<IFOpenImgFull> = (args) => (
    <FOpenImgFull {...args}/>
)

export const Default = TemplateDefault.bind({});

const imgUrl: string[] = [
    img3,
    img2
]

Default.args = {
    id: 'grid-id',
    className: 'grid-className',
    st: {marginTop: '20px'},
    imagesUrl: imgUrl,
    selectedImg: 0,
    openAndClose: true,
    handleClose: () => {}
};