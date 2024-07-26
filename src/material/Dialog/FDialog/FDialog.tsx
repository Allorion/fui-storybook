// *********************************************************************************************************************
// Родительский компонет диалогового окна
// *********************************************************************************************************************

import React, {FC, useEffect, useRef} from "react";
import "../style/style.css"
import ReactDOM from 'react-dom';
import {generateUniqueId} from "../../../dop-function/generateUniqueId";

export interface IFDialog {
    openAndClose: boolean
    id?: string,
    className?: string
    st?: React.CSSProperties,
    children?: React.ReactChild | React.ReactNode,
    hide?: boolean
    closeButtonBackPage?: React.Dispatch<React.SetStateAction<boolean>>,
    width?: 'xs' | 'md' | 'lg' | 'xxl' | 'adaptive'
}

const FDialog: FC<IFDialog> = ({
                                   openAndClose,
                                   closeButtonBackPage,
                                   hide,
                                   children,
                                   id,
                                   className,
                                   st,
                                   width = 'lg'
                               }) => {

    const idDialog = useRef<string>(generateUniqueId());

    useEffect(() => {
        const openDialog = document.querySelectorAll(".active-dialog")

        if (openDialog.length > 0) {
            // openDialog.forEach(opt => {
            //     const arrClassName = [...opt.classList]
            //     if (arrClassName.indexOf(idDialog.current) !== -1) {
            //
            //     }
            // })
            document.body.classList.add('open-dialog')
        } else {
            document.body.classList.remove('open-dialog')
        }
    }, [openAndClose])

    if (!openAndClose) return null;
    return ReactDOM.createPortal(
        <div
            className={`${openAndClose ? `f-dialog ${idDialog.current} active-dialog` : 'f-dialog'} ${className !== undefined ? className : ''}`}
            onClick={() => closeButtonBackPage && closeButtonBackPage(false)}
            id={id}
            style={st}
        >
            <div
                className={`${openAndClose ? 'f-dialog-content active' : 'f-dialog-content'} ${hide ? 'hide' : ''}`}
                style={{
                    width: width === 'xxl' ? '95vw' : width === 'lg' ? '80vw' : width === 'md' ? '65vw' : width === 'xs' ? '50vw' : 'fit-content'
                }}
                onClick={(e) => e.stopPropagation()}
            >
                {children}
            </div>
        </div>
        , document.body);
}

export default FDialog