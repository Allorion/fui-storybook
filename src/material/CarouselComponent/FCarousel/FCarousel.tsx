import React, {FC, useEffect, useState} from 'react';
import '../statick/carousel.css'
import {generateUniqueId} from "../../../dop-function/generateUniqueId";
import ArrowRight from '../statick/arrow-right.svg'
import ArrowLeft from '../statick/arrow-left.svg'

export interface IFCarousel {
    autoSwitching?: {
        flag: boolean,
        timeSecond: number
    },
    className?: string,
    id?: string,
    children?: React.ReactChild | React.ReactNode,
    st?: React.CSSProperties,
    width?: string | number,
    height?: string | number,
    visibleElAmount: number
}

const FCarousel: FC<IFCarousel> = (
    {
        autoSwitching,
        className,
        id,
        st,
        width = 'auto',
        height = 'auto',
        children,
        visibleElAmount = 3
    }
) => {

    const [currentIndex, setCurrentIndex] = useState<number>(1)
    const [figuresList, setFiguresList] = useState<NodeListOf<HTMLElement> | null>(null)

    const idEl = `xc${generateUniqueId()}`

    useEffect(() => {
        const scrollContainer = document.querySelector('.' + idEl);
        if (scrollContainer) {
            setFiguresList(scrollContainer.querySelectorAll('figure'));
        }
    }, []);

    function scrollToIndex(index: number) {
        if (figuresList !== null) {
            figuresList[index].scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
                inline: 'center'
            });
        }
    }

    const prevButton = () => {
        if (currentIndex > 1) {
            scrollToIndex(currentIndex - 1);
            setCurrentIndex(prevState => prevState - 1)
        }
    }

    const nextButton = () => {
        if (figuresList !== null && currentIndex < figuresList.length - visibleElAmount - 1) {
            scrollToIndex(currentIndex + 1);
            setCurrentIndex(prevState => prevState + 1)
        }
    }

    useEffect(() => {
        if (autoSwitching?.flag) {

            let localFigureList: NodeListOf<HTMLElement> | null = null

            const scrollContainer = document.querySelector('.' + idEl);
            if (scrollContainer) {
                localFigureList = scrollContainer.querySelectorAll('figure');
            }

            let current: number = 1
            let flag: boolean = false

            const localScroll = (index: number) => {
                if (localFigureList !== null) {
                    localFigureList[index].scrollIntoView({
                        behavior: 'smooth',
                        block: 'nearest',
                        inline: 'center'
                    });
                }
            }

            const handleInterval = () => {
                if (!flag) {
                    if (localFigureList !== null && current < localFigureList.length - visibleElAmount - 1) {
                        current++
                        localScroll(current);
                    } else {
                        current -= 1
                        localScroll(current);
                        flag = true
                    }
                } else {
                    if (current !== 1) {
                        current--
                        localScroll(current);
                    } else {
                        current++
                        localScroll(current);
                        flag = false
                    }
                }
            };

            // Устанавливаем интервал
            const intervalId = setInterval(handleInterval, autoSwitching.timeSecond);

            // Очищаем интервал при размонтировании компонента
            return () => clearInterval(intervalId);
        }
    }, []);

    return (
        <React.Fragment>
            <div className={`f-carousel-container ${idEl} ${className !== undefined ? className : ''}`} id={id}
                 style={st}>
                {(currentIndex > 1 && !autoSwitching?.flag) &&
                    <button className="f-carousel-button prev" onClick={prevButton}>
                        <img
                            src={ArrowLeft}
                            alt="Назад"/>
                    </button>
                }
                <ul className="f-horizontal-scroll-bar" style={{width, height}}>
                    {children}
                </ul>
                {(figuresList !== null && currentIndex < figuresList.length - visibleElAmount - 1 && !autoSwitching?.flag) &&
                    <button className="f-carousel-button next" onClick={nextButton}>
                        <img
                            src={ArrowRight}
                            alt="Вперед"/>
                    </button>
                }
            </div>
        </React.Fragment>
    );
};

export default FCarousel;
