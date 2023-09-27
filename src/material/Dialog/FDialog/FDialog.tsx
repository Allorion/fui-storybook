// *********************************************************************************************************************
// Родительский компонет диалогового окна
// *********************************************************************************************************************

import React, {FC, useEffect} from "react";
import "../style/style.css"
import {FContainer} from "../../index";

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

    useEffect(() => {
        if (openAndClose) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [openAndClose])

    return (
        <React.Fragment>
            <FContainer maxWidth={'container-fluid'}>
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
                            style={Object.assign({}, {maxHeight: '80vh', minWidth: '85%'}, st)}
                        >
                            {children}
                        </div>
                    </div>
                </div>
            </FContainer>
        </React.Fragment>
    )
}

export default FDialog