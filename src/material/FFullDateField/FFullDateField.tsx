import React, {FC} from "react";

export interface IFFullDateField {
    label?: string
    st?: React.CSSProperties,
    value?: string | undefined
    onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined
    fullWidth?: boolean
    defaultValue?: string | number | readonly string[] | undefined
    disabled?: boolean
    readOnly?: boolean,
    id?: string,
    className?: string
}

const FFullDateField: FC<IFFullDateField> = (
    {
        label,
        st,
        value,
        onChange,
        fullWidth,
        defaultValue,
        disabled,
        readOnly
    }
) => {

    let style = {
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        width: fullWidth ? '100%' : 'fit-content'
    }

    st = Object.assign({}, st, style);

    return (
        <React.Fragment>
            <div className="form-group" style={st}>
                {label &&
                    <label
                        className="control-label"
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
                    readOnly={readOnly}
                    disabled={disabled}
                    required
                    defaultValue={defaultValue}
                    value={value}
                    //@ts-ignore
                    onChange={onChange}
                    type='date'
                    className="form-control"
                />
            </div>
        </React.Fragment>
    )
}

export default FFullDateField;