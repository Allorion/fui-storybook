import React, {FC} from "react";
import {FStack} from "../index";

export interface IFFullDateField {
    label?: string
    st?: React.CSSProperties,
    value?: string | undefined
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
    errText?: string[],
    helpText?: string,
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
        helpText
    }
) => {

    let style = {
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        width: fullWidth ? '100%' : 'fit-content'
    }

    st = Object.assign({}, st, style);

    return (
        <React.Fragment>
            <div className={`form - group ${load ? 'ui left icon input loading' : ''}`} style={st}>
                {label &&
                    <label
                        className="control-label"
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
                    disabled={disabled || load}
                    required
                    defaultValue={defaultValue}
                    value={load ? undefined : value}
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
                    <i className="search icon"></i>
                }
            </div>
        </React.Fragment>
    )
}

export default FFullDateField;