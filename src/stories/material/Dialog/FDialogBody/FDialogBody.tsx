// *********************************************************************************************************************
// Основная часть компонента диалогового окна
// *********************************************************************************************************************


import { FC } from "react";

export interface IFDialogBody {
    st?: React.CSSProperties
    children?: React.ReactElement | React.ReactNode
    scroll?: boolean
}


const FDialogBody: FC<IFDialogBody> = ({
    st,
    children,
    scroll = true
}) => {

    let style: React.CSSProperties = {

    }

    if (scroll) {
        style['overflowY'] = 'auto'
    }

    if (st !== undefined) {
        style = Object.assign(style, st)
    }

    return (
        <div className="dialog-body" style={style}>
            {children}
        </div>
    )
}

export default FDialogBody