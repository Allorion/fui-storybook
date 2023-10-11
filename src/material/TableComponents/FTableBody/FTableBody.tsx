import React, {FC} from "react";

export interface IFTableBody {
    st?: React.CSSProperties
    children?: React.ReactChild | React.ReactNode
    onClick?: React.MouseEventHandler<HTMLTableSectionElement> | undefined
    id?: string
    className?: string
}

const FTableBody: FC<IFTableBody> = ({
                                    st,
                                    children,
                                    id,
                                    className,
                                    onClick
                                }) => {
    return (
        <React.Fragment>
            <tbody style={st} className={className} id={id} onClick={onClick}>
            {children}
            </tbody>
        </React.Fragment>
    );
};

export default FTableBody;