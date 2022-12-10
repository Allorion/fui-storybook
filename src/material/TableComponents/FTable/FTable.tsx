import React, {FC} from "react";
import "./FTable.css"

export interface IFTable {
    st?: React.CSSProperties
    children?: React.ReactChild | React.ReactNode
    id?: string
    className?: string
    onClick?: React.MouseEventHandler<HTMLTableElement> | undefined
}


const FTable: FC<IFTable> = ({
                                 st,
                                 children,
                                 id,
                                 className,
                                 onClick
                             }) => {
    return (
        <React.Fragment>
            <table
                className={`table table-bordered table-bordered-half ${className}`}
                style={st}
                id={id}
                onClick={onClick}
            >
                {children}
            </table>
        </React.Fragment>
    );
};

export default FTable;