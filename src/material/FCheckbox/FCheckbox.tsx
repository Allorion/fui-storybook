import React, {FC} from "react";

export interface IFCheckbox {
    label?: string | undefined
    onClick: React.MouseEventHandler<HTMLInputElement> | undefined
    defaultChecked?: boolean | undefined
    className?: string
    id?: string
    st?: React.CSSProperties | undefined,
    checked?: boolean | undefined
}


const FCheckbox: FC<IFCheckbox> = ({
                                       label,
                                       onClick,
                                       defaultChecked,
                                       className,
                                       id,
                                       st,
                                       checked
                                   }) => {

    return (
        <React.Fragment>
            <div className={className !== undefined ? `checkbox ${className}` : 'checkbox'} id={id} style={st}>
                <label>
                    <input
                        defaultChecked={defaultChecked}
                        type="checkbox"
                        onClick={onClick}
                        checked={checked}
                    />
                    {label && <span>{label}</span>}
                </label>
            </div>
        </React.Fragment>
    )
}

export default FCheckbox;