import React, {FC} from "react";
import '../styles/FTabs.css'
    
export interface IFTab {
    children?: React.ReactChild | React.ReactNode
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
        <React.Fragment>
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
        </React.Fragment>
    )
}

export default FTab
