import React from "react";
import './FExportTableToExcel.css'
//@ts-ignore
import ReactHTMLTableToExcel from 'react-html-table-to-excel';

export interface IFExportTableToExcel {
    label: string,
    variant?: 'contained' | 'default'
    color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link'
    size?: 'btn-lg' | 'btn-sm' | 'btn-xs'
    disabled?: boolean
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined
    st?: React.CSSProperties,
    className?: string
    fullWidth?: boolean
    id?: string,
    idTable: string,
    fileName: string,
}

const FExportTableToExcel = (
    {
        variant = 'contained',
        color = 'primary',
        size = 'btn-sm',
        disabled,
        onClick,
        st,
        className,
        fullWidth,
        id,
        idTable,
        fileName,
        label,
    }: IFExportTableToExcel
) => {

    if (fullWidth) {
        if (st === undefined) {
            st = {
                width: '100%'
            }
        } else {
            st.width = '100%'
        }
    } else {
        if (st === undefined) {
            st = {
                width: "fit-content"
            }
        } else {
            st.width = "fit-content"
        }
    }

    return (
        <React.Fragment>
            <ReactHTMLTableToExcel
                disabled={disabled}
                id={id}
                className={`btn ${variant === 'contained' ? 'btn' : 'btn-default'}-${color} ${size} ${className !== undefined ? className : ''}`}
                table={idTable}
                filename={fileName}
                sheet="tablexls"
                buttonText={label}
                onClick={onClick}
                style={st}
            />
        </React.Fragment>
    )
}

export default FExportTableToExcel
