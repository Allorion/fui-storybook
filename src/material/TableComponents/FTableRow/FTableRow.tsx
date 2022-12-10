import React, {FC} from "react";

export interface IFTableRow {
    st?: React.CSSProperties
    children?: React.ReactChild | React.ReactNode
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
        <React.Fragment>
            <tr style={st} onClick={onClick} id={id} className={className}>
                {children}
            </tr>
        </React.Fragment>
    );
};

export default FTableRow;