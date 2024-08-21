import { forwardRef } from "react";

import FLoadIcon from "@icons/FLoadIcon";

import FStack from "@material/FStack";

export interface IFFullDateField extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string
    st?: React.CSSProperties,
    value?: string | number | readonly string[] | undefined
    fullWidth?: boolean
    disabled?: boolean
    id?: string,
    className?: string
    load?: boolean,
    errText?: string[],
    helpText?: string,
    width?: string | number,
    height?: string | number,
}

const FFullDateField = forwardRef<HTMLInputElement, IFFullDateField>((
    {
        label,
        st,
        value,
        fullWidth,
        disabled,
        load = false,
        errText,
        helpText,
        height = 'auto',
        width,
        ...props
    },
    ref
) => {

    const style: {
        whiteSpace: string,
        overflow: string,
        textOverflow: string,
        width: string | number,
        height: string | number,
    } = {
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        width: fullWidth ? '100%' : 'fit-content',
        height: 'auto',
    }

    if (width !== undefined) {
        style['width'] = width
    }

    if (height !== undefined) {
        style['height'] = height
    }

    st = Object.assign({}, st, style);

    return (
            <div className={`form - group ${load ? 'ui left icon input loading' : ''}`} style={st}>
                {label &&
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
                }
                <input
                    ref={ref}
                    disabled={disabled || load}
                    style={{
                        borderColor: errText !== undefined && errText.length > 0 ? 'red' : '#C4C4C4'
                    }}
                    value={load ? '' : value}
                    type='date'
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
                    <FStack direction={'column'} st={{ paddingLeft: '11px' }}>
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
                        <FLoadIcon size={10} />
                    </div>
                }
            </div>
    )
})

export default FFullDateField;
