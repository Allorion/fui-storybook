// *********************************************************************************************************************
// Родительский компонет прелоадера
// *********************************************************************************************************************

import React, {FC, useEffect} from "react";
import "./FPreloader.css"
import ReactDOM from "react-dom";

export interface IFPreloader {
    st?: React.CSSProperties,
    backgroundColor?: string,
    children?: React.ReactChild | React.ReactNode,
    open: boolean
}

const FPreloader: FC<IFPreloader> = ({
                                         st,
                                         backgroundColor = '#00357d',
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

    if (!open) return null
    else return ReactDOM.createPortal(
        <div className={`f-preloader ${open ? 'active-preloader' : ''}`} style={style}>
            <div className="f-preloader-row">
                {children}
            </div>
        </div>,
        document.body
    )
}

export default FPreloader