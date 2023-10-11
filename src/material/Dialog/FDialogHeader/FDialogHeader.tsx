// *********************************************************************************************************************
// Головная часть компонента диалогового окна
// *********************************************************************************************************************

import React, {FC} from "react";
import {FCloseIcon} from "../../../icons";

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
                    <FCloseIcon st={{cursor: "pointer"}} handleClose={handleClose} color={'primary'} size={30}/>
                }
            </div>
        </React.Fragment>
    )
}

export default FDialogHeader