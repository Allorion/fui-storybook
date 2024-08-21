import { FC } from "react";

export interface IFTableRow {
    st?: React.CSSProperties
    children?: React.ReactElement | React.ReactNode
    onClick?: React.MouseEventHandler<HTMLTableRowElement> | undefined
    id?: string
    className?: string
}

const FTableRow: FC<IFTableRow> = ({
    st,
    children,
    onClick,
    id,
    className
}) => {
    return (
        <tr style={st} onClick={onClick} id={id} className={className}>
            {children}
        </tr>
    );
};

export default FTableRow;