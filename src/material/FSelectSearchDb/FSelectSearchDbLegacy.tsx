import React, {FC, useEffect, useRef, useState} from "react";
import './FSelectSearchDb.css'
import {FStack} from "../index";
import {FArrowIcon} from "../../icons";

interface IFSelectSearchDb {
    label?: string
    st?: React.CSSProperties,
    selectedOpt: (e: any | undefined) => void
    value?: Object | undefined
    optArray: any
    fetchingFc: (e: string) => any[] | undefined
    fullWidth?: boolean,
    id?: string,
    className?: string,
    disabled?: boolean
    readOnly?: boolean,
    load?: boolean,
    errText?: string[],
    helpText?: string,
    onFocus?: React.FocusEventHandler<HTMLInputElement> | undefined,
    onBlur?: React.FocusEventHandler<HTMLInputElement> | undefined,
}

const FSelectSearchDb: FC<IFSelectSearchDb> = ({
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
                                                   onFocus,
                                                   onBlur,
                                               }) => {

    const [textValue, setTextValue] = useState<string>('')

    const [arrObj, setArrObj] = useState<any[] | undefined>(undefined)

    const timerDebounceRef = useRef();

    // Обязательно в функции с запросом передается и текст и стейт
    const onChange = (e: { target: { value: string; }; }) => {
        if (e.target.value !== '') {
            if (timerDebounceRef.current) {
                clearTimeout(timerDebounceRef.current);
            }
            setTextValue(e.target.value)
            //@ts-ignore
            timerDebounceRef.current = setTimeout(()    => {
                setArrObj(fetchingFc(e.target.value))
            })
        } else {
            setTextValue('')
            setArrObj(undefined)
            selectedOpt(undefined)
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

    return (
        <React.Fragment>
            <div
                className={`select-search-db ${className !== undefined ? className : ''} ${load ? 'ui left icon input loading' : ''}`}
                style={st} id={id}>
                {label &&
                    <label
                        className="control-label with-offset"
                        style={{
                            whiteSpace: 'nowrap',
                            textOverflow: 'ellipsis'
                        }}
                    >
                        {label}
                    </label>
                }
                <div className={'select-search-db-input-block'}>
                    <input
                        readOnly={readOnly}
                        disabled={disabled || load}
                        required
                        type={'text'}
                        className="form-control select-search-db-input"
                        //@ts-ignore
                        value={load ? undefined : textValue}
                        //@ts-ignore
                        onChange={onChange}
                        onFocus={onFocus}
                        onBlur={onBlur}
                    />
                    {!load &&
                        <div className={'select-search-db-input-arrow'}>
                            <FArrowIcon direction={'down'} size={15}/>
                        </div>
                    }
                </div>
                {(!load && arrObj !== undefined && arrObj !== null && arrObj.length > 0) &&
                    <div className={'select-search-db-dropdown'}>
                        <FStack direction={'column'} st={{paddingLeft: '11px'}}>
                            {arrObj.slice(0, 10).map((opt, index) => (
                                <li
                                    key={index}
                                    onClick={(e) => {
                                        selectedOpt(opt)
                                        // @ts-ignore
                                        setTextValue(e.target.text)
                                    }}
                                >
                                    {optArray(opt)}
                                </li>
                            ))
                            }
                        </FStack>
                    </div>
                }
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
                    <i className="search icon" style={{top: '4px'}}/>
                }
            </div>
        </React.Fragment>
    )
}