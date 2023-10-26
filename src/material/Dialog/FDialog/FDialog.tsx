// *********************************************************************************************************************
// Родительский компонет диалогового окна
// *********************************************************************************************************************

import React, {FC, useEffect} from "react";
import "../style/style.css"

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

    useEffect(() => {
        if (document.querySelectorAll(".active-dialog").length > 0) {
            document.body.classList.add('open-dialog')
        } else {
            document.body.classList.remove('open-dialog')
        }
    }, [openAndClose])

    return (
        <React.Fragment>
            <div
                className={`${openAndClose ? 'f-dialog active-dialog' : 'f-dialog'} ${className !== undefined ? className : ''}`}
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
        </React.Fragment>
    )
}

export default FDialog