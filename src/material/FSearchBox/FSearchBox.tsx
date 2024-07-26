import React, {forwardRef} from "react";
import {FButton, FStack} from "../index";
import './FSearchBox.css'
import '../FTextField/FTextField.css'
import FLoadIcon from "../../icons/FLoadIcon";
import '../statick/index.css'

export interface IFSearchBox extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string,
    st?: React.CSSProperties,
    fullWidth?: boolean,
    disabled?: boolean,
    readOnly?: boolean | undefined,
    errText?: string[],
    helpText?: string,
    className?: string,
    load?: boolean,

    children?: React.ReactChild | React.ReactNode,
    variant?: 'contained' | 'default'
    color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link'
    onClickButton?: React.MouseEventHandler<HTMLButtonElement> | undefined
}

const FSearchBox = forwardRef<HTMLInputElement, IFSearchBox>(({
                                                                  label,
                                                                  type,
                                                                  fullWidth,
                                                                  disabled,
                                                                  readOnly,
                                                                  errText,
                                                                  helpText,
                                                                  st,
                                                                  className,
                                                                  load = false,

                                                                  children,
                                                                  onClickButton,
                                                                  color,
                                                                  variant,
                                                                  ...props
                                                              }, ref) => {

    let style = {
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
    }
    st = Object.assign({}, st, style);

    if (fullWidth) {
        if (st === undefined) {
            st = {
                width: '100%'
            }
        } else {
            st.width = '100%'
        }
    } else {
        if (st === undefined) {
            st = {
                width: 'fit-content'
            }
        } else {
            st.width = 'fit-content'
        }
    }

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
                    <div className={`${load ? 'ui left icon input loading' : ''}`} style={{width: '100%'}}>
                        <input
                            ref={ref}
                            style={{
                                borderColor: errText !== undefined && errText.length > 0 ? 'red' : '#C4C4C4'
                            }}
                            disabled={disabled}
                            readOnly={readOnly || load}
                            className={`form-control f-search-box-inp ${className !== undefined ? className : ''}`}
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
                    <FButton
                        st={{
                            borderTopLeftRadius: '0',
                            borderBottomLeftRadius: '0',
                            height: '34px',
                            whiteSpace: 'nowrap',
                            textAlign: 'center',
                        }}
                        disabled={disabled}
                        onClick={onClickButton}
                        color={color}
                        variant={variant}
                    >
                        {children}
                    </FButton>
                </div>
            </div>
        </React.Fragment>
    )
})

export default FSearchBox
