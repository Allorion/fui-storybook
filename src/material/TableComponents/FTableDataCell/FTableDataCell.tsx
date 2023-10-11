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
    className?: string
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
                                        className
                                    }) => {
    return (
        <React.Fragment>
            <td
                style={st}
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