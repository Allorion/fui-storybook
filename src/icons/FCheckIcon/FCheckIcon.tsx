import React from 'react';
import "../../material/statick/Colors.css"

export interface IFCheckIcon {
    color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link'
    size?: number
    st?: React.CSSProperties,
    id?: string,
    className?: string,
    handleClick?: () => void,
}
const FCheckIcon = ({
                        color = 'success',
                        size = 30,
                        st,
                        id,
                        className,
                        handleClick
                    }: IFCheckIcon) => {
    return (
        <svg
            width={size}
            viewBox="0 0 16 16"
            className={`${color} ${className !== undefined ? className : ''}`}
            id={id}
            onClick={handleClick}
            style={st}
        >
            <path clipRule="evenodd"
                  d="M15.4142 4.41421L6 13.8284L0.585785 8.41421L3.41421 5.58578L6 8.17157L12.5858 1.58578L15.4142 4.41421Z"
                  fillRule="evenodd"/>
        </svg>
    );
};

export default FCheckIcon;
