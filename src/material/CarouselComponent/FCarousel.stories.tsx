import React from 'react';

import {Meta, StoryFn} from '@storybook/react';

import 'bootstrap/dist/css/bootstrap.css';
import FCarousel from "./FCarousel";
import FCarouselItem from "./FCarouselItem";
import {IFCarousel} from "./FCarousel/FCarousel";


import cardImg from "../../../statick/images/Card.jpg"

import "./FCarousel.stories.css"

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
    width: '1300px',
    height: '250px',
    childrenElements: (current) => {
        return (
            <>
                {cards.map((opt, index) => {
                    return (
                        <FCarouselItem widthCard={'390px'} heightCard={'250px'} index={index} quantityItems={cards.length} current={current}><img
                            src={opt} alt={`Постер ${index}`}/></FCarouselItem>
                    )
                })}
            </>
        )
    },
    quantityItems: cards.length
};

export const AutoSwitching = Template.bind({});

AutoSwitching.args = {
    autoSwitching: {
        flag: true,
        timeSecond: 2000,
    },
    childrenElements: (current) => {
        return (
            <>
                {cards.map((opt, index) => {
                    return (
                        <FCarouselItem widthCard={'390px'} heightCard={'250px'}  index={index} quantityItems={cards.length} current={current}><img
                            src={opt} alt={`Постер ${index}`}/></FCarouselItem>
                    )
                })}
            </>
        )
    },
    quantityItems: cards.length
};

const TemplateFCarouselItem: StoryFn<IFCarousel> = (args) => {

    return (
        <>
            <FCarousel {...args}/>
            <span>
                Для того чтобы добавить карточки в карусель необходимо в родительское свойство <b>childrenElements</b>
                Передать функцию как пример ниже. Хочу заметить что <b>childrenElements возвращает current, который необходимо передать в FCarouselItem</b>
                <p>{'childrenElements: (current) => {'}</p>
                <p>{'return ('}</p>
                <p>{'<>'}</p>
                <p>{'{cards.map((opt, index) => {'}</p>
                <p>{'return ('}</p>
                <p>{'<FCarouselItem widthCard={390px} heightCard={250px}  index={index} quantityItems={cards.length} current={current}>'}</p>
                <p>{'<img src={opt} alt={Постер}/>'}</p>
                <p>{'</FCarouselItem>'}</p>
                <p>{')'}</p>
                <p>{'})}'}</p>
                <p>{'</>'}</p>
                <p>{')'}</p>
                <p>{'}'}</p>
            </span>
        </>
    );
};

export const FCarouselItemUsing = TemplateFCarouselItem.bind({});

FCarouselItemUsing.args = {
    childrenElements: (current) => {
        return (
            <>
                {cards.map((opt, index) => {
                    return (
                        <FCarouselItem widthCard={'390px'} heightCard={'250px'} index={index} quantityItems={cards.length} current={current}><img
                            src={opt} alt={`Постер ${index}`}/></FCarouselItem>
                    )
                })}
            </>
        )
    },
    quantityItems: cards.length
};
