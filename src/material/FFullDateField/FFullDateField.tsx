import React, {forwardRef} from "react";
import {FStack} from "../index";
import '../statick/index.css'
import FLoadIcon from "../../icons/FLoadIcon";

export interface IFFullDateField extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string
    st?: React.CSSProperties,
    value?: string | number | undefined
    fullWidth?: boolean
    disabled?: boolean
    id?: string,
    className?: string
    load?: boolean,
    errText?: string[],
    helpText?: string,
    width?: string | number,
    height?: string | number,
}

const FFullDateField = forwardRef<HTMLInputElement, IFFullDateField>((
    {
        label,
        st,
        value,
        fullWidth,
        disabled,
        load = false,
        errText,
        helpText,
        height = 'auto',
        width,
        ...props
    },
    ref
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
                    ref={ref}
                    disabled={disabled || load}
                    style={{
                        borderColor: errText !== undefined && errText.length > 0 ? 'red' : '#C4C4C4'
                    }}
                    // value={load ? '' : value}
                    type='date'
                    className="form-control"
                    {...props}
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
})

export default FFullDateField;
