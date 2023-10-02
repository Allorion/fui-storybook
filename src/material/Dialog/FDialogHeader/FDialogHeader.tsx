// *********************************************************************************************************************
// Головная часть компонента диалогового окна
// *********************************************************************************************************************

import React, {FC} from "react";


export interface IFDialogHeader {
    title?: string
    handleClose?: () => void
}


const FDialogHeader: FC<IFDialogHeader> = ({
                                               title,
                                               handleClose,
                                           }) => {

    return (
        <React.Fragment>
            <div className="dialog-header">
                <div>
                    <h3 className="dialog-title" style={{margin: 0}}>
                        {title === undefined ? '' : title}
                    </h3>
                </div>
                {handleClose !== undefined &&
                    <div>
                        <div className="cl-btn-3" onClick={handleClose}>
                            <span className="top"></span>
                            <span className="bot"></span>
                        </div>
                    </div>
                }
            </div>
        </React.Fragment>
    )
}

export default FDialogHeader