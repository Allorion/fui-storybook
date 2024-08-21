import { Meta, StoryFn } from '@storybook/react';

import { Fragment } from 'react/jsx-runtime';



import cardImg from "@images/Card.jpg"

import FCarousel, { IFCarousel } from "./FCarousel/FCarousel";
import FCarouselItem from './FCarouselItem';


export default {
    title: 'Components/SURFACES/CarouselComponents',
    tags: ['autodocs'],
    component: FCarousel,
} satisfies Meta<typeof FCarousel>;

const cards = [cardImg, cardImg, cardImg, cardImg, cardImg, cardImg, cardImg, cardImg]

const Template: StoryFn<IFCarousel> = (args) => {

    return (
        <>
            <FCarousel {...args} />
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
        <Fragment>
            {cards.map((opt, index) => {
                return (
                    <FCarouselItem widthCard={'300px'} heightCard={'196px'} index={index}>
                        <img src={opt} alt={`Постер ${index}`} width={'300px'} />
                    </FCarouselItem>
                )
            })}
        </Fragment>
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
        <Fragment>
            {cards.map((opt, index) => {
                return (
                    <FCarouselItem widthCard={'300px'} heightCard={'196px'} index={index}>
                        <img src={opt} alt={`Постер ${index}`} width={'300px'} />
                        <p>{index}</p>
                    </FCarouselItem>
                )
            })}
        </Fragment>
    ),
};
