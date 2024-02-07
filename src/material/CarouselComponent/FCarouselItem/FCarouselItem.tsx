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
    }
) => {

    return (
        <React.Fragment>
            <div
                key={index}
                id={id}
                style={st}
                className={`card ${index === current ? 'active' : ''} ${index === quantityItems - 1 && current === 0 ? 'left' : ''} ${index === current - 1 ? 'left' : ''} ${index === current + 1 ? 'right' : ''} ${index === 0 && current === quantityItems - 1 ? 'right' : ''} ${className !== undefined ? className : ''}`}
            >
                {children}
            </div>
        </React.Fragment>
    );
};

export default FCarouselItem;
