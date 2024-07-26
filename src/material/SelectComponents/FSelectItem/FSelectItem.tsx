import React, {FC} from "react";

export interface IFSelectItem {
    st?: React.CSSProperties
    value?: string | number | readonly string[] | undefined
    children?: React.ReactChild | React.ReactNode
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
        <React.Fragment>
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
        </React.Fragment>
    )

}

export default FSelectItem
