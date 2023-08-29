import React, {FC} from "react";

export interface IFDropdownItem {
    disabled?: boolean
    st?: React.CSSProperties,
    className?: string
    id?: string,
    children?: React.ReactChild | React.ReactNode,
    onClick?: React.MouseEventHandler<HTMLLIElement> | undefined
}

const FDropdownItem: FC<IFDropdownItem> = ({
                                               disabled,
                                               st,
                                               className,
                                               id,
                                               children,
                                               onClick
                                           }) => {

    return (
        <React.Fragment>
            <li
                className={`${className !== undefined ? className : ''} ${disabled ? 'disabled' : ''}`}
                id={id}
                style={st}
                onClick={onClick}
            >
                {children}
            </li>
        </React.Fragment>
    )
}

export default FDropdownItem
