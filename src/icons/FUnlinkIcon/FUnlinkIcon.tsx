import React from 'react';
import "../../material/statick/Colors.css"

export interface IFUnlinkIcon {
    color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link'
    size?: number
    st?: React.CSSProperties,
    id?: string,
    className?: string,
    handleClick?: () => void,
}


const FUnlinkIcon = ({color = 'dark', size = 30, st, id, className, handleClick}: IFUnlinkIcon) => {
    return (
        <svg
            width={size}
            style={st}
            className={`bi bi-pencil ${color} ${className !== undefined ? className : ''}`}
            viewBox="-0.5 0 25 25"
            onClick={handleClick}
            id={id}
            fill={'none'}
        >
            <path d="M9.23993 17.55L7.95993 18.84C7.33993 19.47 6.51992 19.79 5.69992 19.79C4.87992 19.79 4.05994 19.47 3.43994 18.84C2.18994 17.58 2.18994 15.54 3.43994 14.29L4.70993 13.02L6.11993 11.6L8.82993 8.86" stroke="#0F0F0F" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M8.82996 3.86V6.86" stroke="#0F0F0F" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M5.32996 5.22L6.82996 7.81" stroke="#0F0F0F" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M9.23993 17.55L7.95993 18.84C7.33993 19.47 6.51992 19.79 5.69992 19.79C4.87992 19.79 4.05994 19.47 3.43994 18.84C2.18994 17.58 2.18994 15.54 3.43994 14.29L4.70993 13.02L6.11993 11.6L8.82993 8.86" stroke="#0F0F0F" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M14.7599 7.45L16.0399 6.16C16.6599 5.53 17.4799 5.21 18.2999 5.21C19.1199 5.21 19.9399 5.53 20.5599 6.16C21.8099 7.42 21.8099 9.46 20.5599 10.71L19.2899 11.98L17.8799 13.4L15.1699 16.14" stroke="#0F0F0F" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12.33 5.22L10.83 7.81" stroke="#0F0F0F" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M15.1699 21.14V18.14" stroke="#0F0F0F" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M18.6699 19.79L17.1699 17.19" stroke="#0F0F0F" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M11.6699 19.79L13.1699 17.19" stroke="#0F0F0F" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>

        </svg>
    );
};

export default FUnlinkIcon;
