import React, {FC, forwardRef} from "react";
import {FStack} from "../index";
import "./FTextField.css"
import FLoadIcon from "../../icons/FLoadIcon";

export interface IFTextField extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    st?: React.CSSProperties;
    fullWidth?: boolean;
    readOnly?: boolean | undefined;
    errText?: string[];
    helpText?: string;
    load?: boolean;
    width?: string | number;
    height?: string | number;
}


const FTextField = forwardRef<HTMLInputElement, IFTextField>(({
                                                                  label,
                                                                  type = 'text',
                                                                  fullWidth,
                                                                  readOnly,
                                                                  errText,
                                                                  helpText,
                                                                  st,
                                                                  id,
                                                                  className,
                                                                  load = false,
                                                                  height = 'auto',
                                                                  width,
                                                                  ...props
                                                              }, ref) => {

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
                        ref={ref}
                        height={height}
                        style={{
                            borderColor: errText !== undefined && errText.length > 0 ? 'red' : '#C4C4C4',
                            height: height
                        }}
                        readOnly={readOnly || load}
                        type={type}
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
});

export default FTextField;
