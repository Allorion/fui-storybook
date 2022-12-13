// *********************************************************************************************************************
// Родительский компонет прогресс бара
// *********************************************************************************************************************

import React, {FC} from "react";
import "./FProgress.css"

export interface IFProgress {
    st?: React.CSSProperties,
    color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link'
}


const FProgress: FC<IFProgress> = ({
                                       st,
                                       color = 'primary'
                                   }) => {

    let style: React.CSSProperties = {
        borderTopColor: color === 'primary' ? '#007bff' :
            color === 'secondary' ? '#6c757d' :
                color === 'success' ? '#28a745' :
                    color === 'danger' ? '#dc3545' :
                        color === 'warning' ? '#ffc107' :
                            color === 'info' ? '#17a2b8' :
                                color === 'light' ? '#f8f9fa' :
                                    color === 'dark' ? '#343a40' : '#007bff'
    }

    if (st !== undefined) {
        style = Object.assign(style, st)
    }

    return (
        <React.Fragment>
            <div style={style} className={'f-progress'}/>
        </React.Fragment>
    )
}

export default FProgress