import React, {FC, useState, useEffect} from 'react';
import '../statick/carousel.css'

export interface IFCarousel {
    autoSwitching?: {
        flag: boolean,
        timeSecond: number
    },
    className?: string,
    id?: string,
    childrenElements: (current: number) => React.ReactChild | React.ReactNode,
    quantityItems: number,
    st?: React.CSSProperties,
}

const FCarousel: FC<IFCarousel> = (
    {
        autoSwitching,
        childrenElements,
        className,
        id,
        quantityItems,
        st,
    }
) => {

    // Создаем локальный стейт для хранения индекса текущего слайда
    const [current, setCurrent] = useState<number>(1);

    // Создаем функцию для переключения на предыдущий слайд
    const prevSlide = () => {
        // Если текущий индекс равен нулю, то переходим к последнему слайду
        // Иначе уменьшаем индекс на единицу
        setCurrent(current === 0 ? quantityItems - 1 : current - 1);
    };

    // Создаем функцию для переключения на следующий слайд
    const nextSlide = () => {
        // Если текущий индекс равен последнему, то переходим к первому слайду
        // Иначе увеличиваем индекс на единицу
        setCurrent(current === quantityItems - 1 ? 0 : current + 1);
    };

    if (autoSwitching?.flag) {
        useEffect(() => {
            // Создаем таймер
            const timer = setInterval(() => {
                // Вызываем функцию nextSlide
                nextSlide();
            }, autoSwitching.timeSecond); // 3000 миллисекунд = 3 секунды
            // Возвращаем функцию для очистки таймера при размонтировании компонента
            return () => clearInterval(timer);
        }, [current]); // Передаем в зависимости текущий индекс слайда
    }

    return (
        <React.Fragment>
            <div className={`f-carousel ${className !== undefined ? className : ''}`} id={id} style={st}>
                <div className={'arrow-left'} onClick={prevSlide}/>
                <div className={'block-cards'}>
                    {childrenElements(current)}
                </div>
                <div className={'arrow-right'} onClick={nextSlide}/>
            </div>
        </React.Fragment>
    );
};

export default FCarousel;
