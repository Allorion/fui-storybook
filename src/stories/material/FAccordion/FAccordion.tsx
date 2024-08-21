import { FC, useEffect, useState } from 'react';

import './FAccordion.css';

export interface IFAccordion {
    children?: React.ReactElement | React.ReactNode;
    variant?: 'info' | 'alert' | 'warning';
    title?: string;
    id?: string;
    className?: string;
    st?: React.CSSProperties;
    onClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
    open?: boolean;
    defaultOpen?: boolean;
}

const FAccordion: FC<IFAccordion> = ({
    variant = 'info',
    title,
    children,
    id,
    className,
    st,
    onClick,
    open,
    defaultOpen
}) => {

    const [isOpen, setIsOpen] = useState(defaultOpen);

    useEffect(() => {
        if (open !== undefined) {
            setIsOpen(open)
        }
    }, [open]);

    return (
        <div onClick={onClick} className={`card ${className || ''}`} id={id}>
            <details className={`${variant}`} open={isOpen} style={st}>
                <summary className={'fv-accord-title'}>{title}</summary>
                {children}
            </details>
        </div>
    );
};

export default FAccordion;
