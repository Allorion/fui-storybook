// *********************************************************************************************************************
// Нижняя часть компонента диалогового окна
// *********************************************************************************************************************


import React, {FC} from "react";

export interface IFDialogFooter {
    children?: React.ReactChild | React.ReactNode
}


const FDialogFooter: FC<IFDialogFooter> = ({
                                       children
                                   }) => {

    return (
        <React.Fragment>
            <div className={'dialog-footer'}>
                {children}
            </div>
        </React.Fragment>
    )
}

export default FDialogFooter