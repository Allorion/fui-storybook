import { FC } from "react";

export interface IFTableHead {
    st?: React.CSSProperties
    children?: React.ReactElement | React.ReactNode
    onClick?: React.MouseEventHandler<HTMLTableSectionElement> | undefined
    id?: string
    className?: string,
    textAlignment?: 'left' | 'right' | 'center' | 'justify'
}

const FTableHead: FC<IFTableHead> = ({
    st,
    children,
    id,
    className,
    onClick,
    textAlignment = 'left'
}) => {

    const style = Object.assign({}, { textAlign: textAlignment }, st)

    return (
        <thead style={style} id={id} className={className} onClick={onClick}>
            {children}
        </thead>
    );
};

export default FTableHead;