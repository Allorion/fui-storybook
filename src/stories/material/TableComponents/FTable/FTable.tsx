import { FC } from "react";

import "./FTable.css"

import FStack from "@material/FStack";

export interface IFTable {
    st?: React.CSSProperties
    children?: React.ReactElement | React.ReactNode
    id?: string
    className?: string
    onClick?: React.MouseEventHandler<HTMLTableElement> | undefined,
    overflowX?: 'visible' | 'hidden' | 'clip' | 'scroll' | 'auto' | undefined
}

const FTable: FC<IFTable> = ({
    st,
    children,
    id,
    className,
    onClick,
    overflowX = "auto"
}) => {
    return (
        <FStack direction={'row'} spacing={2} st={{ overflowX: overflowX }}>
            <table
                className={`table table-bordered table-bordered-half ${className}`}
                style={st}
                id={id}
                onClick={onClick}
            >
                {children}
            </table>
        </FStack>
    );
};

export default FTable;