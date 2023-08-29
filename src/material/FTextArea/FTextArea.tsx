import React, {FC} from "react";

export interface IFTextArea {
    label?: string
    st?: React.CSSProperties,
    value?: string | undefined
    cols?: number
    rows?: number
    placeholder?: string
    readOnly?: boolean
    disabled?: boolean
    autoComplete?: boolean,
    className?: string,
    id?: string,
    fullWidth?: boolean,
    onChange?: React.ChangeEventHandler<HTMLTextAreaElement> | undefined,
    onClick?:  React.MouseEventHandler<HTMLTextAreaElement> | undefined
    onFocus?: React.FocusEventHandler<HTMLTextAreaElement> | undefined,

}

const FTextArea: FC<IFTextArea> = (
    {
        label,
        st,
        value,
        cols,
        rows,
        placeholder,
        readOnly,
        disabled,
        autoComplete,
        className,
        id,
        fullWidth,
        onChange,
        onClick,
        onFocus,
    }
) => {

    return (
        <React.Fragment>
            <div
                style={{
                    width: fullWidth ? '100%' : 'fit-content'
                }}
                className={`control-group ${className !== undefined ? className : ''}`}
                id={id}
            >
                <div className="form-group" style={st}>
                    {label &&
                        <label className="control-label with-offset required">
                            {label}
                        </label>
                    }
                    <textarea
                        onClick={onClick}
                        onFocus={onFocus}
                        cols={cols}
                        rows={rows}
                        disabled={disabled}
                        readOnly={readOnly}
                        //@ts-ignore
                        autoComplete={autoComplete}
                        required
                        value={value}
                        placeholder={placeholder}
                        className="form-control"
                        onChange={onChange}
                    />
                </div>
            </div>

        </React.Fragment>
    )
}

export default FTextArea;
