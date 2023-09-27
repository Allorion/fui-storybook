import React, {FC} from "react";
import {FButton, FStack} from "../index";
import './FSearchBox.css'
import '../FTextField/FTextField.css'

export interface IFSearchBox {
    label?: string,
    st?: React.CSSProperties,
    value?: string | number | readonly string[] | undefined,
    onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined,
    type?: 'text' | 'number' | 'email' | 'tel' | 'password',
    onBlur?: React.FocusEventHandler<HTMLInputElement> | undefined,
    onFocus?: React.FocusEventHandler<HTMLInputElement> | undefined,
    fullWidth?: boolean,
    disabled?: boolean,
    readOnly?: boolean | undefined,
    defaultValue?: string | number | readonly string[] | undefined,
    errText?: string[],
    helpText?: string,
    onInput?: React.FormEventHandler<HTMLInputElement> | undefined,
    id?: string,
    className?: string,
    load?: boolean,
    min?: number,
    max?: number,
    placeholder?: string | undefined,


    children?: React.ReactChild | React.ReactNode,
    variant?: 'contained' | 'default'
    color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link'
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined
}

const FSearchBox: FC<IFSearchBox> = ({
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
                                         helpText,
                                         onInput,
                                         st,
                                         id,
                                         className,
                                         load = false,
                                         min,
                                         max,
                                         placeholder,

                                         children,
                                         onClick,
                                         color,
                                         variant
                                     }) => {

    let style = {
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
    }
    st = Object.assign({}, st, style);

    return (
        <React.Fragment>
            <div
                className={`f-search-box
                form-group`} style={st}>
                {label &&
                    <label className="control-label with-offset" style={{
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                    }}>
                        {label}
                    </label>
                }
                <div className={'f-search-box-box'}>
                    <div className={`${load ? 'ui left icon input loading' : ''}`} style={{width: fullWidth ? '100%' : 'fit-content'}}>
                        <input
                            id={id}
                            placeholder={placeholder}
                            style={{
                                borderColor: errText !== undefined && errText.length > 0 ? 'red' : '#C4C4C4'
                            }}
                            min={min}
                            max={max}
                            disabled={disabled}
                            defaultValue={defaultValue}
                            required
                            onInput={onInput}
                            readOnly={readOnly || load}
                            value={value}
                            //@ts-ignore
                            onChange={onChange}
                            type={type === undefined ? 'text' : type}
                            className={`form-control f-search-box-inp ${className !== undefined ? className : ''}`}
                            onBlur={onBlur}
                            onFocus={onFocus}
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
                    <FButton
                        st={{
                            borderTopLeftRadius: '0',
                            borderBottomLeftRadius: '0',
                            height: '34px',
                            whiteSpace: 'nowrap',
                            textAlign: 'center',
                        }}
                        disabled={disabled}
                        onClick={onClick}
                        color={color}
                        variant={variant}
                    >
                        {children}
                    </FButton>
                </div>
            </div>
        </React.Fragment>
    )
}

export default FSearchBox
