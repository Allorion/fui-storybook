import React from 'react';

export interface IFFilterIcon {
    color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link'
    size?: number
    st?: React.CSSProperties,
    id?: string,
    className?: string,
    handleClick?: () => void,
}

const FFilterIcon = ({color = 'dark', size = 30, st, id, className, handleClick}: IFFilterIcon) => {
    return (
        <svg
            width={size}
            viewBox="0 0 24 24"
            className={`${color} ${className !== undefined ? className : ''}`}
            id={id}
            onClick={handleClick}
            style={st}
        >
            <path fill="none" d="M0 0h24v24H0z"/>
            <path fillRule="nonzero" d="M14 14v6l-4 2v-8L4 5V3h16v2l-6 9zM6.404 5L12 13.394 17.596 5H6.404z"/>
        </svg>
    );
};

export default FFilterIcon;