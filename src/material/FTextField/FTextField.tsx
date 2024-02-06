import React, {FC} from "react";
import {FStack} from "../index";
import "./FTextField.css"
import FLoadIcon from "../../icons/FLoadIcon";

export interface IFTextField {
    label?: string,
    st?: React.CSSProperties,
    value?: string | number | readonly string[] | undefined | null,
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
    required?: boolean,
    min?: number,
    max?: number,
    placeholder?: string | undefined,
    width?: string | number,
    height?: string | number,
}

const FTextField: FC<IFTextField> = (
    {
        label,
        value,
        onChange,
        type = 'text',
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
        required,
        height = 'auto',
        width,
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
        width: 'fit-content',
        height: 'auto',
    }


    if (width !== undefined) {
        style['width'] = width
    }

    if (height !== undefined) {
        style['height'] = height
    }

    st = Object.assign({}, style, st);

    if (value === null) {
        value = ''
    }

    if (type === 'number' && (value === undefined)) {
        value = ''
    }

    return (
        <React.Fragment>
            <div
                className={`
                form-group ${className !== undefined ? className : ''}`} style={st} id={id}>
                {label &&
                    <label className="control-label with-offset" style={{
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                    }}>
                        {label}
                    </label>
                }
                <div className={`${load ? 'ui left icon input loading' : ''}`}>
                    <input
                        height={height}
                        placeholder={placeholder}
                        style={{
                            borderColor: errText !== undefined && errText.length > 0 ? 'red' : '#C4C4C4',
                            height: height
                        }}
                        min={min}
                        max={max}
                        disabled={disabled}
                        defaultValue={defaultValue}
                        required={required}
                        onInput={onInput}
                        readOnly={readOnly || load}
                        value={value}
                        //@ts-ignore
                        onChange={onChange}
                        type={type}
                        className="form-control"
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
                        <div className={'input-load'}>
                            <FLoadIcon size={10}/>
                        </div>
                    }
                </div>
            </div>
        </React.Fragment>
    )
}

export default FTextField;
