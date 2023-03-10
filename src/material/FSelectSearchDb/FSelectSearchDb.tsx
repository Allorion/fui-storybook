import React, {FC, useEffect, useState} from "react";

export interface IFSelectSearchDb {
    label?: string
    st?: React.CSSProperties,
    selectedOpt: any
    value?: Object | undefined
    optionLabel?: string
    optArray: any
    fetchingFc: any
    fullWidth?: boolean,
    id?: string,
    className?: string,
    disabled?: boolean
    readOnly?: boolean,
}

const FSelectSearchDb: FC<IFSelectSearchDb> = (
    {
        value,
        st,
        label,
        optionLabel,
        optArray,
        fetchingFc,
        selectedOpt,
        fullWidth,
        id,
        className,
        disabled,
        readOnly
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
        overflow: 'hidden',
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
            <div className={`form-group ${className !== undefined ? className : ''}`} style={st} id={id}>
                {label &&
                    <label className="control-label with-offset" style={{
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                    }}>
                        {label}
                    </label>
                }
                <input
                    readOnly={readOnly}
                    disabled={disabled}
                    required
                    type="text"
                    list="cars"
                    //@ts-ignore
                    value={textValue}
                    //@ts-ignore
                    onChange={onChange}
                    className="form-control input-select-search"
                    onFocus={() => {
                        // @ts-ignore
                        if (value === undefined || value[optionLabel] === '') {
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
                                onClick={() => {
                                    selectedOpt(opt)
                                    setFlag(false)
                                    // @ts-ignore
                                    setTextValue(opt[optionLabel])
                                }}
                            >
                                {optArray(opt)}
                            </option>
                        ))
                    }
                </div>
            </div>
        </React.Fragment>
    )
}

export default FSelectSearchDb