// *********************************************************************************************************************
// Родительский компонет прогресс бара
// *********************************************************************************************************************

import { FC } from "react";

import "./FProgress.css"

export interface IFProgress {
    st?: React.CSSProperties,
    color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link'
}

const FProgress: FC<IFProgress> = ({
    st,
    color = 'primary'
}) => {

    const valueColor: string = color === 'primary' ? '#007bff' :
        color === 'secondary' ? '#6c757d' :
            color === 'success' ? '#28a745' :
                color === 'danger' ? '#dc3545' :
                    color === 'warning' ? '#ffc107' :
                        color === 'info' ? '#17a2b8' :
                            color === 'light' ? '#f8f9fa' :
                                color === 'dark' ? '#343a40' : '#007bff'

    return (
        <div className="authorization-spinner visible" id="authorizationSpinner" style={st}>
            <div className="spinner-item" style={{ color: valueColor }} />
        </div>
    )
}

export default FProgress