import { FC } from "react";

import '../styles/FTabs.css'

export interface IFTab {
    children?: React.ReactElement | React.ReactNode
    id?: string,
    className?: string
    st?: React.CSSProperties,
    disabled?: boolean
    active?: boolean
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined
}

const FTab: FC<IFTab> = ({
    children,
    id,
    className,
    st,
    onClick,
    disabled,
    active
}) => {

    return (
        <button
            className={`f-tabs-btn ${active ? 'active' : ''} ${className !== undefined ? className : ''}`}
            disabled={disabled}
            onClick={onClick}
            id={id}
            style={st}
            type={"button"}
        >
            {children}
        </button>
    )
}

export default FTab
