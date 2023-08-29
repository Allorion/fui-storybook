import React, {FC} from "react";
import "./Checkbox.css"

export interface IFCheckbox {
    label?: React.ReactChild | React.ReactNode,
    onChange: React.ChangeEventHandler<HTMLInputElement> | undefined
    defaultChecked?: boolean | undefined
    className?: string
    id?: string
    st?: React.CSSProperties | undefined,
    checked?: boolean | undefined,
    disabled?: boolean
}


const FCheckbox: FC<IFCheckbox> = ({
                                       label,
                                       onChange,
                                       defaultChecked,
                                       className,
                                       id,
                                       st,
                                       checked,
                                       disabled
                                   }) => {

    return (
        <React.Fragment>
            <div className={`f-checkbox ${className !== undefined ? className : ''}`} id={id} style={st}>
                <label>
                    <input
                        defaultChecked={defaultChecked}
                        type="checkbox"
                        onChange={onChange}
                        checked={checked}
                        disabled={disabled}
                    />
                    {label}
                </label>
            </div>
        </React.Fragment>
    )
}

export default FCheckbox;
