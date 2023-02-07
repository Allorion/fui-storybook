import React, {FC} from 'react';
import './FAccordion.css'

export interface IFAccordion {
    children?: React.ReactChild | React.ReactNode,
    variant?: 'info' | 'alert' | 'warning'
    title?: string,
    id?: string,
    className?: string,
    st?: React.CSSProperties
}

const FAccordion: FC<IFAccordion> = ({
                                         variant = 'info',
                                         title,
                                         children,
                                         id,
                                         className,
                                         st
                                     }) => {
    return (
        <React.Fragment>
            <div className={`card ${className !== undefined ? className : ''}`} id={id}>

                <details className={variant} style={st}>
                    <summary className={'fv-accord-title'}>{title}</summary>
                    {children}
                </details>

            </div>
        </React.Fragment>
    );
};

export default FAccordion;