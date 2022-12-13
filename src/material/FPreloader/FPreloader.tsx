// *********************************************************************************************************************
// Родительский компонет прелоадера
// *********************************************************************************************************************

import React, {FC} from "react";
import "./FPreloader.css"

export interface IFPreloader {
    st?: React.CSSProperties,
    backgroundColor?: string,
    children?: React.ReactChild | React.ReactNode,
    open: boolean
}


const FPreloader: FC<IFPreloader> = ({
                                         st,
                                         backgroundColor = '#e0e0e0',
                                         children,
                                         open
                                     }) => {

    if (open) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }

    let style: React.CSSProperties = {
        backgroundColor: backgroundColor,
        display: open ? 'block' : 'none'
    }

    if (st !== undefined) {
        style = Object.assign(style, st)
    }

    return (
        <React.Fragment>
            <div className="f-preloader" style={style}>
                <div className="f-preloader-row">
                    {children}
                </div>
            </div>
        </React.Fragment>
    )
}

export default FPreloader