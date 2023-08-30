import React, {FC, useEffect, useState} from "react";
import './FSelectSearchDb.css'
import {FStack} from "../index";

export interface IFSelectSearchDb {
    label?: string
    st?: React.CSSProperties,
    selectedOpt: any
    value?: Object | undefined
    optArray: any
    fetchingFc: any
    fullWidth?: boolean,
    id?: string,
    className?: string,
    disabled?: boolean
    readOnly?: boolean,
    load?: boolean,
    errText?: string[],
    helpText?: string,
}

const FSelectSearchDb: FC<IFSelectSearchDb> = (
    {
        value,
        st,
        label,
        optArray,
        fetchingFc,
        selectedOpt,
        fullWidth,
        id,
        className,
        disabled,
        readOnly,
        load = false,
        errText,
        helpText,
    }
) => {

    // @ts-ignore
    const [flag, setFlag] = useState<boolean>(false)
    const [textValue, setTextValue] = useState<string>('')

    const [arrObj, setArrObj] = useState<any[] | undefined>(undefined)

    // Обязательно в функции с запросом передается и текст и стейт
    const onChange = (e: { target: { value: string; }; }) => {
        if (e.target.value !== '') {
            setTextValue(e.target.value)
            fetchingFc(e.target.value, setArrObj)
            setFlag(true)
        } else {
            setTextValue('')
            setArrObj(undefined)
            selectedOpt(undefined)
            setFlag(false)
        }
    }

    let style = {
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        width: 'fit-content'
    }

    st = Object.assign({}, st, style);

    if (fullWidth) {
        st.width = '100%'
    }

    useEffect(() => {
        //@ts-ignore
        setTextValue(value);
    }, [value])

    // @ts-ignore
    return (
        <React.Fragment>
            <div className={`form-group ${className !== undefined ? className : ''} ${load ? 'ui left icon input loading' : ''}`} style={st} id={id}>
                {label &&
                    <label className="control-label with-offset" style={{
                        whiteSpace: 'nowrap',
                        textOverflow: 'ellipsis'
                    }}>
                        {label}
                    </label>
                }
                <input
                    readOnly={readOnly}
                    disabled={disabled || load}
                    required
                    type="text"
                    list="cars"
                    //@ts-ignore
                    value={load ? undefined : textValue}
                    //@ts-ignore
                    onChange={onChange}
                    className="form-control input-select-search"
                    onFocus={() => {
                        // @ts-ignore
                        if (arrObj?.length !== 0) {
                            setFlag(true)
                        } else if (value === undefined) {
                            setFlag(false)
                        } else {
                            setFlag(true)
                        }
                    }}
                    onBlur={() => {
                        if (Object.values(textValue).length === 0) {
                            setFlag(false)
                        }
                    }}
                />
                <div
                    className={'dropdown-select-search'}
                    style={{
                        display: !flag ? 'none' : 'block',
                        width: 'inherit'
                    }}
                >
                    {
                        arrObj !== undefined && arrObj !== null &&
                        arrObj.slice(0, 10).map((opt, index) => (
                            <option
                                key={index}
                                onClick={(e) => {
                                    selectedOpt(opt)
                                    setFlag(false)
                                    // @ts-ignore
                                    setTextValue(e.target.text)
                                }}
                            >
                                {optArray(opt)}
                            </option>
                        ))
                    }
                </div>
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

export default FSelectSearchDb