import React, {FC} from "react";
import './RadioButton.css'

export interface IFRadioButton {
    label?: React.ReactChild | React.ReactNode,
    onClick: React.MouseEventHandler<HTMLInputElement> | undefined
    className?: string
    id?: string
    st?: React.CSSProperties | undefined,
    checked?: boolean | undefined
    disabled?: boolean
}

const FRadioButton: FC<IFRadioButton> = ({
                                          label,
                                          onClick,
                                          className,
                                          id,
                                          st,
                                          checked,
                                          disabled
                                      }) => {

    return (
        <React.Fragment>
            <div className={`f-radio ${className !== undefined ? className : ''}`} id={id} style={st}>
                <label>
                    <input
                        type="radio"
                        onClick={onClick}
                        checked={checked}
                        disabled={disabled}
                    />
                    {label}
                </label>
            </div>

        </React.Fragment>
    )
}

export default FRadioButton;