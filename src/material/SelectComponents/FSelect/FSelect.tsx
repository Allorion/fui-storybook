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
    className?: string,
    load?: boolean,
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
                                   className,
                                   load = false
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
                <div className={`${load ? 'ui left icon input loading' : ''}`}>
                    <select
                        disabled={disabled || load}
                        style={st}
                        className="form-control"
                        onChange={onChange}
                        value={load ? undefined : value}
                        multiple={multiple}
                        size={size}
                        defaultValue={defaultValue}
                    >
                        {!load &&
                            children
                        }
                    </select>
                    {load &&
                        <i className="search icon"></i>
                    }
                </div>
            </div>
        </React.Fragment>
    )
}

export default FSelect
