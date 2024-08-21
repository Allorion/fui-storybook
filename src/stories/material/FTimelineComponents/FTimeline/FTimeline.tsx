import { FC } from 'react';

import "./FTimeline.css"

export interface IFTimeline {
    children?: React.ReactElement | React.ReactNode,
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
        <div className={`fv-timeline ${className !== undefined ? className : ''}`} style={st} id={id}>
            {children}
        </div>
    );
};

export default FTimeline;