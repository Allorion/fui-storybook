import React, {FC} from "react";

export interface IFTableBody {
    st?: React.CSSProperties
    children?: React.ReactChild | React.ReactNode
    onClick?: React.MouseEventHandler<HTMLTableSectionElement> | undefined
    id?: string
    className?: string,
    textAlignment?: 'left' | 'right' | 'center' | 'justify'
}

const FTableBody: FC<IFTableBody> = ({
                                         st,
                                         children,
                                         id,
                                         className,
                                         onClick,
                                         textAlignment = 'left'
                                     }) => {

    const style = Object.assign({}, {textAlign: textAlignment}, st)

    return (
        <React.Fragment>
            <tbody style={style} className={className} id={id} onClick={onClick}>
            {children}
            </tbody>
        </React.Fragment>
    );
};

export default FTableBody;