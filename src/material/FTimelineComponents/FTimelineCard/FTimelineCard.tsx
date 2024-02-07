import React, {FC} from 'react';
import {FPaper} from "../../index";

export interface IFTimelineCard {
    children?: React.ReactChild | React.ReactNode,
    st?: React.CSSProperties,
    title?: string,
    id?: string,
    className?: string
}

const FTimelineCard: FC<IFTimelineCard> = ({
                                               children,
                                               st,
                                               title,
                                               id,
                                               className
                                           }) => {
    return (
        <React.Fragment>
            <div className={`fv-tl-block-card ${className !== undefined ? className : ''}`} id={id}>
                <div className={'fv-tl-line-circle'}/>
                <FPaper label={title} st={st} className={'fv-tl-card'}>
                    {children}
                </FPaper>
            </div>
        </React.Fragment>
    );
};

export default FTimelineCard;