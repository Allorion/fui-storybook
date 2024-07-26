import React, {forwardRef} from "react";
import {FStack} from "../index";
import FLoadIcon from "../../icons/FLoadIcon";

export interface IFTextArea extends React.InputHTMLAttributes<HTMLTextAreaElement> {
    label?: string
    st?: React.CSSProperties,
    value?: string | undefined
    disabled?: boolean
    className?: string,
    id?: string,
    fullWidth?: boolean,
    errText?: string[],
    helpText?: string,
    load?: boolean,
    width?: string | number,
    height?: string | number
}

const FTextArea = forwardRef<HTMLTextAreaElement, IFTextArea>((
    {
        label,
        st,
        value,
        disabled,
        className,
        id,
        fullWidth,
        errText,
        helpText,
        load,
        width = 'fit-content',
        height = 'auto',
        ...props
    },
    ref
) => {

    return (
        <React.Fragment>
            <div
                style={{
                    width: fullWidth ? '100%' : width,
                    height: "auto"
                }}
                className={`control-group ${className !== undefined ? className : ''}`}
                id={id}
            >
                <div className={`${load ? 'ui left icon input loading' : ''} form-group`} style={st}>
                    {label &&
                        <label className="control-label with-offset required">
                            {label}
                        </label>
                    }
                    <textarea
                        ref={ref}
                        style={{
                            borderColor: errText !== undefined && errText.length > 0 ? 'red' : '#C4C4C4',
                            height: height
                        }}
                        disabled={disabled || load}
                        value={load ? undefined : value}
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
            </div>
        </React.Fragment>
    )
})

export default FTextArea;
