import { FC } from "react";

export interface IFDropdownItem {
    disabled?: boolean
    st?: React.CSSProperties,
    className?: string
    id?: string,
    children?: React.ReactElement | React.ReactNode,
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
        <li
            className={`f-dropdown-link ${className !== undefined ? className : ''} ${disabled ? 'disabled' : ''}`}
            id={id}
            style={st}
            onClick={onClick}
        >
            {children}
        </li>
    )
}

export default FDropdownItem
