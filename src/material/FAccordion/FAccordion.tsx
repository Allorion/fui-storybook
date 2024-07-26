import React, {FC} from 'react';
import './FAccordion.css'

export interface IFAccordion {
    children?: React.ReactChild | React.ReactNode,
    variant?: 'info' | 'alert' | 'warning'
    title?: string,
    id?: string,
    className?: string,
    st?: React.CSSProperties,
    defaultOpen?: boolean,
    onClick?: React.MouseEventHandler<HTMLDetailsElement> | undefined,
    open?: boolean
}

const FAccordion: FC<IFAccordion> = ({
                                         variant = 'info',
                                         title,
                                         children,
                                         id,
                                         className,
                                         st,
                                         defaultOpen = false,
                                         onClick,
                                         open
                                     }) => {
    return (
        <React.Fragment>
            <div className={`card ${className !== undefined ? className : ''}`} id={id}>
                <details className={`${variant}`} open={open !== undefined ? open : defaultOpen} onClick={onClick} style={st}>
                    <summary className={'fv-accord-title'}>{title}</summary>
                    {children}
                </details>

            </div>
        </React.Fragment>
    );
};

export default FAccordion;
