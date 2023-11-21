import React, {FC, useEffect, useRef, useState} from "react";
import {FStack} from "../index";
import {FArrowIcon} from "../../icons";
import './FSelectSearchDb.css'
import FLoadIcon from "../../icons/FLoadIcon";
import {generateUniqueId} from "../../dop-function/generateUniqueId";

export interface IFSelectSearchDb {
    fetchingFunc: (text: string) => Promise<any[]>,
    selectedElement: (e: any | undefined) => void,
    selectItem: any,
    label?: string
    st?: React.CSSProperties,
    id?: string,
    fullWidth?: boolean,
    className?: string,
    disabled?: boolean
    readOnly?: boolean,
    required?: boolean,
    errText?: string[],
    helpText?: string,
    onFocus?: React.FocusEventHandler<HTMLInputElement> | undefined,
    onBlur?: React.FocusEventHandler<HTMLInputElement> | undefined,
    minLengthText?: number,
    defaultValue?: string
}

const FSelectSearchDb: FC<IFSelectSearchDb> = ({
                                                   fetchingFunc,
                                                   selectedElement,
                                                   selectItem,
                                                   st,
                                                   id,
                                                   className,
                                                   disabled,
                                                   readOnly,
                                                   fullWidth,
                                                   label,
                                                   onBlur,
                                                   onFocus,
                                                   errText,
                                                   helpText,
                                                   minLengthText,
                                                   required,
                                                   defaultValue
                                               }) => {

    const [valueInput, setValueInput] = useState<string>('')

    const [arrObject, setArrObject] = useState<any[]>([])

    const timerDebounceRef = useRef<number>();

    const [load, setLoad] = useState<boolean>(false)

    const idList = generateUniqueId()

    useEffect(() => {
        if (defaultValue !== undefined) {
            setValueInput(defaultValue)

            if (timerDebounceRef.current) {
                clearTimeout(timerDebounceRef.current);
            }

            if (defaultValue !== '') {
                if (minLengthText !== undefined && defaultValue.length === minLengthText) {
                    // @ts-ignore
                    timerDebounceRef.current = setTimeout(() => {
                        setLoad(true)
                        fetchingFunc(defaultValue).then(r => {
                            setArrObject(r)
                            setLoad(false)
                        })
                    }, 1000);
                } else {
                    // @ts-ignore
                    timerDebounceRef.current = setTimeout(() => {
                        setLoad(true)
                        fetchingFunc(defaultValue).then(r => {
                            setArrObject(r)
                            setLoad(false)
                        })
                    }, 1000);
                }

            } else {
                setArrObject([])
                setLoad(false)
            }
        }
    }, [defaultValue]);

    const handlerOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        const text = e.target.value

        setValueInput(text)

        if (timerDebounceRef.current) {
            clearTimeout(timerDebounceRef.current);
        }

        if (text !== '') {
            if (minLengthText !== undefined && text.length === minLengthText) {
                // @ts-ignore
                timerDebounceRef.current = setTimeout(() => {
                    setLoad(true)
                    fetchingFunc(text).then(r => {
                        setArrObject(r)
                        setLoad(false)
                    })
                }, 1000);
            } else {
                // @ts-ignore
                timerDebounceRef.current = setTimeout(() => {
                    setLoad(true)
                    fetchingFunc(text).then(r => {
                        setArrObject(r)
                        setLoad(false)
                    })
                }, 1000);
            }

        } else {
            setLoad(true)
            fetchingFunc(text).then(r => {
                setArrObject([])
                setLoad(false)
            })
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
                        required={required}
                        style={{
                            borderColor: errText !== undefined && errText.length > 0 ? 'red' : '#C4C4C4'
                        }}
                        type={'text'}
                        className="form-control select-search-db-input"
                        value={!load ? valueInput : ''}
                        onChange={handlerOnChange}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        list={'f-select-search-' + idList}
                        id={'f-select-search-input-' + idList}
                    />
                    {(!load && !disabled) &&
                        <div className={'select-search-db-input-arrow'}>
                            <FArrowIcon direction={'down'} size={15}/>
                        </div>
                    }
                    {load &&
                        <div className={'select-search-db-input-load'}>
                            <FLoadIcon size={10}/>
                        </div>
                    }
                </div>
                {(arrObject.length === 0 && !disabled) &&
                    <datalist className={'datalist-class'} id={'f-select-search-' + idList}>
                        <option>Введите текст</option>
                    </datalist>
                }
                {(!load && arrObject !== undefined && arrObject.length > 0) &&
                    <datalist id={'f-select-search-' + idList}>
                        <FStack direction={'column'} st={{paddingLeft: '11px'}}>
                            {arrObject.slice(0, 10).map((opt, index) => (
                                <option
                                    key={index}
                                    onClick={(e) => {
                                        selectedElement(opt)
                                        //@ts-ignore
                                        setValueInput(e.target.textContent)
                                    }}
                                >
                                    {selectItem(opt)}
                                </option>
                            ))
                            }
                        </FStack>
                    </datalist>
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
            </div>
        </React.Fragment>
    )
};

export default FSelectSearchDb;