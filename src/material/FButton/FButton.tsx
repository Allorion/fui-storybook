import React from "react";
import 'bootstrap/dist/css/bootstrap.css'
import './FButton.css'

export interface IFButton {
    children?: React.ReactNode
    variant?: 'contained' | 'outlined'
    color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link'
    size?: 'btn-lg' | 'btn-sm' | 'btn-xs'
    disabled?: boolean
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined
    st?: React.CSSProperties,
    className?: string
    fullWidth?: boolean
    id?: string
}

const FButton = (
    {
        children,
        variant='contained',
        color='primary',
        size='btn-sm',
        disabled,
        onClick,
        st,
        className,
        fullWidth,
        id,
    } : IFButton
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

    return (
        <React.Fragment>
            <button
                disabled={disabled}
                type="button"
                className={`btn ${
                    variant !== undefined ? color !== undefined ? `${variant === 'contained' ? 'btn' : 'btn-outline'}-${color}` : `${variant === 'contained' ? 'btn' : 'btn-outline'}-${color}` : ''
                } ${size} ${className}`}
                onClick={onClick}
                style={st}
                id={id}
            >
                {children}
            </button>
        </React.Fragment>
    )
}

export default FButton