import React, {FC} from 'react';
import '../statick/carousel.css'

export interface FCarouselItem {
    children?: React.ReactChild | React.ReactNode,
    className?: string,
    id?: string,
    current: number,
    index: number,
    quantityItems: number,
    st?: React.CSSProperties,
    widthCard?: number | string,
    heightCard?: number | string,
}

const FCarouselItem: FC<FCarouselItem> = (
    {
        index,
        children,
        className,
        id,
        current,
        quantityItems,
        st,
        widthCard = '390px',
        heightCard = '250px',
    }
) => {

    const style = Object.assign({}, {width: widthCard, height: heightCard}, st)

    return (
        <React.Fragment>
            <div
                key={index}
                id={id}
                style={style}
                className={`card ${index === current ? 'active' : ''} ${index === quantityItems - 1 && current === 0 ? 'left' : ''} ${index === current - 1 ? 'left' : ''} ${index === current + 1 ? 'right' : ''} ${index === 0 && current === quantityItems - 1 ? 'right' : ''} ${className !== undefined ? className : ''}`}
            >
                {children}
            </div>
        </React.Fragment>
    );
};

export default FCarouselItem;
