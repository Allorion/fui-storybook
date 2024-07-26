import React from 'react';

import {Meta, StoryFn} from '@storybook/react';

import 'bootstrap/dist/css/bootstrap.css';
import FCarousel from "./FCarousel";
import FCarouselItem from "./FCarouselItem";
import {IFCarousel} from "./FCarousel/FCarousel";


import cardImg from "../../../statick/images/Card.jpg"

export default {
    title: 'Components/SURFACES/CarouselComponents',
    tags: ['autodocs'],
    component: FCarousel,
} satisfies Meta<typeof FCarousel>;

const cards = [cardImg, cardImg, cardImg, cardImg, cardImg, cardImg, cardImg, cardImg]

const Template: StoryFn<IFCarousel> = (args) => {

    return (
        <>
            <FCarousel {...args}/>
        </>
    );
};

export const Default = Template.bind({});

Default.args = {
    className: 'f-carousel-class',
    id: 'f-carousel-id',
    width: '917px',
    height: '196px',
    visibleElAmount: 3,
    children: (
        <React.Fragment>
            {cards.map((opt, index) => {
                return (
                    <FCarouselItem widthCard={'300px'} heightCard={'196px'} index={index}>
                        <img src={opt} alt={`Постер ${index}`} width={'300px'}/>
                    </FCarouselItem>
                )
            })}
        </React.Fragment>
    ),
};

export const AutoSwitching = Template.bind({});

AutoSwitching.args = {
    autoSwitching: {
        flag: true,
        timeSecond: 2000,
    },
    className: 'f-carousel-class',
    id: 'f-carousel-id',
    width: '917px',
    height: '196px',
    visibleElAmount: 3,
    children: (
        <React.Fragment>
            {cards.map((opt, index) => {
                return (
                    <FCarouselItem widthCard={'300px'} heightCard={'196px'} index={index}>
                        <img src={opt} alt={`Постер ${index}`} width={'300px'}/>
                        <p>{index}</p>
                    </FCarouselItem>
                )
            })}
        </React.Fragment>
    ),
};
