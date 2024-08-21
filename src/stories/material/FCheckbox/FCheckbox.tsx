import { forwardRef } from "react";

import "./Checkbox.css"

export interface IFCheckbox extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: React.ReactElement | React.ReactNode,
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
    )
});

export default FCheckbox;
