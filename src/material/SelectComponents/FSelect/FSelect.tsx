import React, {FC} from "react";
import "./FSelect.css"

export interface IFSelect {
    label?: string
    st?: React.CSSProperties
    onChange?: React.ChangeEventHandler<HTMLSelectElement> | undefined
    children?: React.ReactChild | React.ReactNode
    value?: string | number | readonly string[] | undefined
    multiple?: boolean | undefined
    size?: number | undefined
    fullWidth?: boolean
    disabled?: boolean
    defaultValue?: string | number | readonly string[] | undefined,
    id?: string,
    className?: string
}

const FSelect: FC<IFSelect> = ({
                                   label,
                                   st,
                                   onChange,
                                   children,
                                   value,
                                   multiple,
                                   size,
                                   fullWidth,
                                   disabled,
                                   defaultValue,
                                   id,
                                   className
                               }) => {

    return (
        <React.Fragment>
            <div
                className={`form-group ${className !== undefined ? className : ''}`}
                style={{
                    width: fullWidth ? '100%' : 'fit-content',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'

                }}
                id={id}
            >
                <label
                    className="control-label with-offset"
                    style={{
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                    }}
                >
                    {label}
                </label>
                <select
                    disabled={disabled}
                    style={st}
                    className="form-control"
                    onChange={onChange}
                    value={value}
                    multiple={multiple}
                    size={size}
                    defaultValue={defaultValue}
                >
                    {children}
                </select>
            </div>
        </React.Fragment>
    )
}

export default FSelect