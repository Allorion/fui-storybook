import { FC } from "react";

export interface IFTableFooter {
    st?: React.CSSProperties
    children?: React.ReactElement | React.ReactNode
    onClick?: React.MouseEventHandler<HTMLTableSectionElement> | undefined
    id?: string
    className?: string
}

const FTableFooter: FC<IFTableFooter> = ({
    st,
    children,
    id,
    className,
    onClick
}) => {

    return (
        <tfoot style={st} id={id} className={className} onClick={onClick}>
            {children}
        </tfoot>
    );
};

export default FTableFooter;