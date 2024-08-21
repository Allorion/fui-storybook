// *********************************************************************************************************************
// Родительский компонет прелоадера
// *********************************************************************************************************************

import { FC, useEffect } from "react";

import "./FPreloader.css"

export interface IFPreloader {
    st?: React.CSSProperties,
    backgroundColor?: string,
    children?: React.ReactElement | React.ReactNode,
    open: boolean
}

const FPreloader: FC<IFPreloader> = ({
    st,
    backgroundColor = '#e0e0e0',
    children,
    open
}) => {

    useEffect(() => {
        if (document.querySelectorAll(".active-preloader").length > 0) {
            document.body.classList.add('open-preloader')
        } else {
            document.body.classList.remove('open-preloader')
        }
    }, [open])

    let style: React.CSSProperties = {
        backgroundColor: backgroundColor,
    }

    if (st !== undefined) {
        style = Object.assign(style, st)
    }

    return (
        <div className={`f-preloader ${open ? 'active-preloader' : ''}`} style={style}>
            <div className="f-preloader-row">
                {children}
            </div>
        </div>
    )
}

export default FPreloader