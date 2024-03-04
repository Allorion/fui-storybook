import React, {FC} from "react";

export interface IFTableDataCell {
    st?: React.CSSProperties
    row?: number | undefined
    col?: number | undefined
    children?: React.ReactChild | React.ReactNode
    onClick?: React.MouseEventHandler<HTMLTableHeaderCellElement> | undefined
    id?: string
    onBlur?: React.FocusEventHandler<HTMLTableDataCellElement> | undefined,
    onFocus?: React.FocusEventHandler<HTMLTableDataCellElement> | undefined
    className?: string,
    textAlignment?: 'left' | 'right' | 'center' | 'justify',
    height?: number | string
}

const FTableDataCell: FC<IFTableDataCell> = ({
                                                 st,
                                                 row,
                                                 col,
                                                 children,
                                                 onClick,
                                                 id,
                                                 onBlur,
                                                 onFocus,
                                                 className,
                                                 textAlignment,
                                                 height = 'auto'
                                             }) => {

    const style = Object.assign({}, {textAlign: textAlignment, height}, st)

    return (
        <React.Fragment>
            <td
                style={style}
                rowSpan={row}
                colSpan={col}
                onClick={onClick}
                id={id}
                onBlur={onBlur}
                onFocus={onFocus}
                className={className}
            >
                {children}
            </td>
        </React.Fragment>
    );
};

export default FTableDataCell;