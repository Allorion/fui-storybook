import React, {FC} from "react";
import "./FSelect.css"
import {FStack} from "../../index";
import FLoadIcon from "../../../icons/FLoadIcon";

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
    errText?: string[],
    helpText?: string,
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
                                   load = false,
                                   errText,
                                   helpText,
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
                        style={Object.assign({}, st, {borderColor: errText !== undefined && errText.length > 0 ? 'red' : '#C4C4C4'})}
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

export default FSelect
