import React from "react";
import './FButton.css'
import "../statick/Colors.css"

export interface IFButton {
    children?: React.ReactChild | React.ReactNode,
    variant?: 'contained' | 'default'
    color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link'
    size?: 'btn-lg' | 'btn-sm' | 'btn-xs'
    disabled?: boolean
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined
    st?: React.CSSProperties,
    className?: string
    fullWidth?: boolean
    id?: string,
    type?: "button" | "submit" | "reset" | undefined
}

const FButton = (
    {
        children,
        variant = 'contained',
        color = 'primary',
        size = 'btn-sm',
        disabled,
        onClick,
        st,
        className,
        fullWidth,
        id,
        type = 'button'
    }: IFButton
) => {

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
                width: "initial"
            }
        } else {
            st.width = "initial"
        }
    }

    return (
        <React.Fragment>
            <button
                disabled={disabled}
                type={type}
                className={`btn ${variant === 'contained' ? 'btn' : 'btn-default'}-${color} ${size} ${className !== undefined ? className : ''}`}
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
