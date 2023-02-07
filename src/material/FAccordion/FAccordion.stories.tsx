import React from 'react';

import "bootstrap/dist/css/bootstrap.css"

import {ComponentMeta, Story} from '@storybook/react';

import FAccordion, {IFAccordion} from "./FAccordion";
import {FStack} from "../index";

export default {
    title: 'FMaterial UI-Kit/FAccordion',
    comment: FAccordion,
} as ComponentMeta<typeof FAccordion>;

const Template: Story<IFAccordion> = (args) => {
    return (
        <FStack direction={'column'} spacing={2}>
            <FAccordion {...args} title={'Variant info'} variant={'info'}>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet distinctio exercitationem inventore iure
                    maxime quam, quo tenetur voluptate. Aperiam beatae eius, exercitationem fugiat id ipsam laborum
                    laudantium officiis repudiandae veritatis.</p>
            </FAccordion>
            <FAccordion {...args} title={'Variant warning'} variant={'warning'}>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet distinctio exercitationem inventore iure
                    maxime quam, quo tenetur voluptate. Aperiam beatae eius, exercitationem fugiat id ipsam laborum
                    laudantium officiis repudiandae veritatis.</p>
            </FAccordion>
            <FAccordion {...args} title={'Variant alert'} variant={'alert'}>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet distinctio exercitationem inventore iure
                    maxime quam, quo tenetur voluptate. Aperiam beatae eius, exercitationem fugiat id ipsam laborum
                    laudantium officiis repudiandae veritatis.</p>
            </FAccordion>
        </FStack>
    )
};

export const Default = Template.bind({});

Default.args = {
    id: 'accordion-id',
    className: 'accordion-className',
    st: {marginTop: '20px'}
};



