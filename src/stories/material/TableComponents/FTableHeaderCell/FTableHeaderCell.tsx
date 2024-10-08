import { FC } from "react";

export interface IFTableHeaderCell {
    st?: React.CSSProperties
    row?: number | undefined
    col?: number | undefined
    children?: React.ReactElement | React.ReactNode
    onClick?: React.MouseEventHandler<HTMLTableHeaderCellElement> | undefined
    id?: string
    className?: string,
    textAlignment?: 'left' | 'right' | 'center' | 'justify',
    width?: number | string
}

const FTableHeaderCell: FC<IFTableHeaderCell> = ({
    st,
    row,
    col,
    children,
    onClick,
    id,
    className,
    textAlignment,
    width = 'auto'
}) => {

    const style = Object.assign({}, { textAlign: textAlignment, width }, st)

    return (
        <th
            style={style}
            rowSpan={row}
            colSpan={col}
            onClick={onClick}
            id={id}
            className={className}
        >
            {children}
        </th>
    );
};

export default FTableHeaderCell;