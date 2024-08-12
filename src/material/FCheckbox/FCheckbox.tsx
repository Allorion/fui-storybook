import React, { forwardRef } from "react";
import "./Checkbox.css"

export interface IFCheckbox {
    label?: React.ReactChild | React.ReactNode,
    className?: string
    id?: string
    st?: React.CSSProperties | undefined,
}

const FCheckbox = forwardRef<HTMLInputElement, IFCheckbox>(({
    label,
    className,
    id,
    st,
    ...props
}, ref) => {

    return (
        <React.Fragment>
            <div className={`f-checkbox ${className !== undefined ? className : ''}`} id={id} style={st}>
                <label>
                    <input
                        ref={ref}
                        type="checkbox"
                        {...props}
                    />
                    {label}
                </label>
            </div>
        </React.Fragment>
    )
});

export default FCheckbox;
