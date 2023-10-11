import React, {FC} from "react";

export interface IFTableHead {
    st?: React.CSSProperties
    children?: React.ReactChild | React.ReactNode
    onClick?: React.MouseEventHandler<HTMLTableSectionElement> | undefined
    id?: string
    className?: string
}

const FTableHead: FC<IFTableHead> = ({
                                    st,
                                    children,
                                    id,
                                    className,
                                    onClick
                                }) => {
    return (
        <React.Fragment>
            <thead style={st} id={id} className={className} onClick={onClick}>
            {children}
            </thead>
        </React.Fragment>
    );
};

export default FTableHead;