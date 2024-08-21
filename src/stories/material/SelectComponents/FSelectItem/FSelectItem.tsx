import { FC } from "react";

export interface IFSelectItem {
    st?: React.CSSProperties
    value?: string | number | readonly string[] | undefined
    children?: React.ReactElement | React.ReactNode
    disabled?: boolean
    onClick?: React.MouseEventHandler<HTMLOptionElement> | undefined
    selected?: boolean
    className?: string,
    id?: string
}

const FSelectItem: FC<IFSelectItem> = ({
    st,
    value,
    children,
    onClick,
    disabled,
    className,
    id,
    selected
}) => {

    return (
        <option
            selected={selected}
            disabled={disabled}
            onClick={onClick}
            style={st}
            value={value}
            className={className}
            id={id}
        >
            {children}
        </option>
    )

}

export default FSelectItem
