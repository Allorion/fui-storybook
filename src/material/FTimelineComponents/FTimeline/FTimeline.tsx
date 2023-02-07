import React, {FC} from 'react';
import "./FTimeline.css"

export interface IFTimeline {
    children?: React.ReactChild | React.ReactNode,
    st?: React.CSSProperties,
    id?: string,
    className?: string
}

const FTimeline: FC<IFTimeline> = ({
                                       children,
                                       st,
                                       id,
                                       className
                                   }) => {

    return (
        <React.Fragment>
            <div className={`fv-timeline ${className !== undefined ? className : ''}`} style={st} id={id}>
                {children}
            </div>
        </React.Fragment>

    );
};

export default FTimeline;