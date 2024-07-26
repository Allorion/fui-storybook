import React, {forwardRef} from "react";
import "./FSelect.css"
import {FStack} from "../../index";
import FLoadIcon from "../../../icons/FLoadIcon";

export interface IFSelect extends React.InputHTMLAttributes<HTMLSelectElement> {
    label?: string
    st?: React.CSSProperties
    children?: React.ReactChild | React.ReactNode
    value?: string | number | readonly string[] | undefined
    fullWidth?: boolean
    disabled?: boolean
    id?: string,
    className?: string,
    load?: boolean,
    errText?: string[],
    helpText?: string,
    width?: string | number,
    height?: string | number,
}

const FSelect = forwardRef<HTMLSelectElement, IFSelect>(({
                                                             label,
                                                             st,
                                                             children,
                                                             value,
                                                             fullWidth,
                                                             disabled,
                                                             id,
                                                             className,
                                                             load = false,
                                                             errText,
                                                             helpText,
                                                             height = 'auto',
                                                             width = 'fit-content',
                                                             ...props
                                                         }, ref) => {

    return (
        <React.Fragment>
            <div
                className={`form-group ${className !== undefined ? className : ''}`}
                style={{
                    width: fullWidth ? '100%' : width,
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    height: "auto",
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
                        ref={ref}
                        disabled={disabled || load}
                        style={Object.assign({}, st, {
                            borderColor: errText !== undefined && errText.length > 0 ? 'red' : '#C4C4C4',
                            height: height
                        })}
                        className="form-control"
                        value={load ? undefined : value}
                        {...props}
                    >
                        {!load &&
                            children
                        }
                    </select>
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
            </div>
        </React.Fragment>
    )
});

export default FSelect
