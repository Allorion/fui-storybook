import React, {FC} from "react";
import {FStack} from "../index";
import '../statick/index.css'
import FLoadIcon from "../../icons/FLoadIcon";

export interface IFFullDateField {
    label?: string
    st?: React.CSSProperties,
    value?: string | number | undefined | null
    onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined
    fullWidth?: boolean
    defaultValue?: string | number | readonly string[] | undefined
    disabled?: boolean
    readOnly?: boolean,
    id?: string,
    className?: string
    onkeydown?: React.KeyboardEventHandler<HTMLInputElement> | undefined,
    min?: string | undefined,
    max?: string | undefined,
    load?: boolean,
    required?: boolean,
    errText?: string[],
    helpText?: string,
    onBlur?: React.FocusEventHandler<HTMLInputElement> | undefined,
    onFocus?: React.FocusEventHandler<HTMLInputElement> | undefined,
    width?: string | number,
    height?: string | number,
}

const FFullDateField: FC<IFFullDateField> = (
    {
        label,
        st,
        value,
        onChange,
        fullWidth,
        defaultValue,
        disabled,
        readOnly,
        onkeydown,
        min,
        max,
        load = false,
        errText,
        helpText,
        onBlur,
        onFocus,
        required,
        height = 'auto',
        width,
    }
) => {

    let style: {
        whiteSpace: string,
        overflow: string,
        textOverflow: string,
        width: string | number,
        height: string | number,
    } = {
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        width: fullWidth ? '100%' : 'fit-content',
        height: 'auto',
    }

    if (width !== undefined) {
        style['width'] = width
    }

    if (height !== undefined) {
        style['height'] = height
    }

    st = Object.assign({}, st, style);

    if (typeof value === 'number') {
        value = new Date(value).toISOString().split('T')[0]
    } else if (value === undefined || value === null) {
        value = ''
    }

    return (
        <React.Fragment>
            <div className={`form - group ${load ? 'ui left icon input loading' : ''}`} style={st}>
                {label &&
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
                }
                <input
                    min={min}
                    max={max}
                    onKeyDown={onkeydown}
                    readOnly={readOnly}
                    onBlur={onBlur}
                    onFocus={onFocus}
                    disabled={disabled || load}
                    required={required}
                    style={{
                        borderColor: errText !== undefined && errText.length > 0 ? 'red' : '#C4C4C4'
                    }}
                    defaultValue={defaultValue}
                    value={load ? '' : value}
                    //@ts-ignore
                    onChange={onChange}
                    type='date'
                    className="form-control"
                />
                {helpText !== undefined &&
                    <span
                        style={{
                            whiteSpace: 'initial',
                            color: '#a6a3a3',
                            fontSize: '12px'
                        }}
                    >
                                    {helpText}
                                </span>
                }
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
                {load &&
                    <div className={'input-load'}>
                        <FLoadIcon size={10}/>
                    </div>
                }
            </div>
        </React.Fragment>
    )
}

export default FFullDateField;