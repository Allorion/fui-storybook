import { FC } from 'react';

import FPaper from '@material/FPaper';

export interface IFTimelineCard {
    children?: React.ReactElement | React.ReactNode,
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
        <div className={`fv-tl-block-card ${className !== undefined ? className : ''}`} id={id}>
            <div className={'fv-tl-line-circle'} />
            <FPaper label={title} st={st} className={'fv-tl-card'}>
                {children}
            </FPaper>
        </div>
    );
};

export default FTimelineCard;