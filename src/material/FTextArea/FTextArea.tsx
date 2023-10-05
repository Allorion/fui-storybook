import React, {FC} from "react";
import {FStack} from "../index";
import FLoadIcon from "../../icons/FLoadIcon";

export interface IFTextArea {
    label?: string
    st?: React.CSSProperties,
    value?: string | undefined
    cols?: number
    rows?: number
    placeholder?: string
    readOnly?: boolean
    disabled?: boolean
    autoComplete?: boolean,
    className?: string,
    id?: string,
    fullWidth?: boolean,
    onChange?: React.ChangeEventHandler<HTMLTextAreaElement> | undefined,
    onClick?:  React.MouseEventHandler<HTMLTextAreaElement> | undefined
    onFocus?: React.FocusEventHandler<HTMLTextAreaElement> | undefined,
    errText?: string[],
    helpText?: string,
    load?: boolean,
}

const FTextArea: FC<IFTextArea> = (
    {
        label,
        st,
        value,
        cols,
        rows,
        placeholder,
        readOnly,
        disabled,
        autoComplete,
        className,
        id,
        fullWidth,
        onChange,
        onClick,
        onFocus,
        errText,
        helpText,
        load,
    }
) => {

    return (
        <React.Fragment>
            <div
                style={{
                    width: fullWidth ? '100%' : 'fit-content'
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
                        onClick={onClick}
                        onFocus={onFocus}
                        cols={cols}
                        rows={rows}
                        style={{
                            borderColor: errText !== undefined && errText.length > 0 ? 'red' : '#C4C4C4'
                        }}
                        disabled={disabled || load}
                        readOnly={readOnly}
                        //@ts-ignore
                        autoComplete={autoComplete}
                        required
                        value={load ? undefined : value}
                        placeholder={placeholder}
                        className="form-control"
                        onChange={onChange}
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
}

export default FTextArea;
