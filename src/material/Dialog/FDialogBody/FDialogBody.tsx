// *********************************************************************************************************************
// Основная часть компонента диалогового окна
// *********************************************************************************************************************


import React, {FC} from "react";


export interface IFDialogBody {
    st?: React.CSSProperties
    children?: React.ReactChild | React.ReactNode
    scroll?: boolean
}


const FDialogBody: FC<IFDialogBody> = ({
                                           st,
                                           children,
                                           scroll
                                       }) => {

    let style: React.CSSProperties = {

    }

    if (scroll) {
        style['overflowY'] = 'scroll'
    }

    if (st !== undefined) {
        style = Object.assign(style, st)
    }

    return (
        <React.Fragment>
            <div className="modal-body" style={style}>
                {children}
            </div>
        </React.Fragment>
    )
}

export default FDialogBody