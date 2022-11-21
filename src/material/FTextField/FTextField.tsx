import React, {FC} from "react";
import {FStack} from "../index";

export interface IFTextField {
    label?: string
    st?: React.CSSProperties,
    value?: string | number | readonly string[] | undefined
    onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined
    type?: 'text' | 'number' | 'email' | 'tel'
    onBlur?: React.FocusEventHandler<HTMLInputElement> | undefined
    onFocus?: React.FocusEventHandler<HTMLInputElement> | undefined
    fullWidth?: boolean
    disabled?: boolean
    readOnly?: boolean | undefined
    defaultValue?: string | number | readonly string[] | undefined
    errText?: string[]
    onInput?: React.FormEventHandler<HTMLInputElement> | undefined
    id?: string
    className?: string
}

const FTextField: FC<IFTextField> = (
    {
        label,
        value,
        onChange,
        type,
        onBlur,
        onFocus,
        fullWidth,
        disabled,
        readOnly,
        defaultValue,
        errText,
        onInput,

        st,
        id,
        className
    }
) => {

    if (fullWidth) {
        if (st === undefined) {
            st = {
                width: '100%'
            }
        } else {
            st.width = '100%'
        }
    }

    let style = {
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',

    }
    st = Object.assign({}, st, style);

    return (
        <React.Fragment>
            <div className={`form-group ${className !== undefined ? className : ''}`} style={st} id={id}>
                {label &&
                    <label className="control-label with-offset" style={{
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                    }}>
                        {label}
                    </label>
                }
                <input
                    style={{
                        borderColor: errText !== undefined && errText.length > 0 ? 'red' : '#C4C4C4'
                    }}
                    disabled={disabled}
                    defaultValue={defaultValue}
                    required
                    onInput={onInput}
                    readOnly={readOnly}
                    value={value}
                    //@ts-ignore
                    onChange={onChange}
                    type={type === undefined ? 'text' : type}
                    className="form-control"
                    onBlur={onBlur}
                    onFocus={onFocus}
                />
                {errText !== undefined && errText.length > 0 &&
                        <FStack direction={'column'} st={{paddingLeft: '11px'}}>
                            {
                                errText?.map((opt, index) => {
                                    return (
                                        <span
                                            key={index}
                                            style={{
                                                whiteSpace: 'initial',
                                                color: 'red'
                                            }}
                                        >
                                {opt}
                            </span>
                                    )
                                })
                            }
                        </FStack>
                }
            </div>
        </React.Fragment>
    )
}

export default FTextField;