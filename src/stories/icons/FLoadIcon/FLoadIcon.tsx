import "@style/Colors.css"
import './FLoadIconCss.css'

import { useRef } from "react";

export interface IFLoadIcon {
    color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link'
    size?: number
    st?: React.CSSProperties,
    id?: string,
    className?: string,
    handleClick?: () => void,
}

const FLoadIcon = ({ size = 35, st, id, className, color = 'primary' }: IFLoadIcon) => {

    const randomId = useRef<string>((Math.random() + 1).toString(36).substring(2))

    return (
        <div style={{ margin: 0, padding: 0 }}>
            <style>
                {
                    `
                    .f-load-icon-${randomId.current} {
                        width: ${size}px;
                        height: ${size * 2.25}px;
                        -webkit-animation: anim-f-load-icon-${randomId.current} 2s linear infinite alternate;
                        animation: anim-f-load-icon-${randomId.current} 2s linear infinite alternate;
                        transform: perspective(${size * 2.5}px) rotateX(-45deg);
                        border-width: ${size / 10}px !important;
                    }
                    `
                }
                {
                    `@-webkit-keyframes anim-f-load-icon-${randomId.current} {
                        0% {
                            box-shadow: 0 0 inset;
                        }
                        100% {
                            box-shadow: 0 calc((${size * 2.25}px - 2px) * -1) inset;
                        }
                    }`
                }
                {
                    `@keyframes anim-f-load-icon-${randomId.current} {
                        0% {
                            box-shadow: 0 0 inset;
                        }
                        100% {
                            box-shadow: 0 calc((${size * 2.25}px - 2px) * -1) inset;
                        }
                    }`
                }
            </style>
            <span
                className={`f-load-icon f-load-icon-${randomId.current} ${color} ${className !== undefined ? className : ''}`}
                style={st}
                id={id}
            />
        </div>
    );
};

export default FLoadIcon;
