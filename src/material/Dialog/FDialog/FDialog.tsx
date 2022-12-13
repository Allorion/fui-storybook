// *********************************************************************************************************************
// Родительский компонет диалогового окна
// *********************************************************************************************************************

import React, {FC} from "react";
import "../style/style.css"

export interface IFDialog {
    children?: React.ReactChild | React.ReactNode
    openAndClose: boolean
    id?: string,
    className?: string
    st?: React.CSSProperties
}


const FDialog: FC<IFDialog> = ({
                                   children,
                                   openAndClose,
                                   id,
                                   className,
                                   st
                               }) => {

    if (openAndClose) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }

    return (
        <React.Fragment>
            <div
                className={`f-dialog ${className !== undefined ? className : ''}`}
                style={{
                    display: openAndClose ? 'block' : 'none'
                }}
                id={id}
            >
                <div className="f-dialog-table">
                    <div
                        className="f-dialog-content modal-content"
                        style={st}
                    >
                        {children}
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default FDialog