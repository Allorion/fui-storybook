import {FC, Fragment} from 'react';

import '../static/carousel.css'

export interface FCarouselItem {
    children?: React.ReactElement | React.ReactNode,
    className?: string,
    id?: string,
    index: number,
    st?: React.CSSProperties,
    widthCard?: number | string,
    heightCard?: number | string,
    onClick?: React.MouseEventHandler<HTMLLIElement> | undefined,
}

const FCarouselItem: FC<FCarouselItem> = (
    {
        index,
        children,
        className,
        id,
        st,
        widthCard = '390px',
        heightCard = '250px',
        onClick
    }
) => {

    const style = Object.assign({}, {width: widthCard, height: heightCard}, st)

    return (
        <Fragment>
            <li
                key={index}
                id={id}
                style={style}
                className={className}
                onClick={onClick}
            >
                <figure>
                    <picture>
                        {children}
                    </picture>
                </figure>
            </li>
        </Fragment>
    );
};

export default FCarouselItem;
