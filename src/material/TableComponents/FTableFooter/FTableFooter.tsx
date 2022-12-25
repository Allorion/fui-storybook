import React, {FC} from "react";

export interface IFTableFooter {
    st?: React.CSSProperties
    children?: React.ReactChild | React.ReactNode
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

    let style = {}

    if (st !== undefined) {
        style = Object.assign({
            marginTop: '16px',
            display: 'flex',
        }, st)
    } else {
        style = {
            marginTop: '16px',
            display: 'flex',
        }
    }

    return (
        <React.Fragment>
            <tfoot style={style} id={id} className={className} onClick={onClick}>
                {children}
            </tfoot>
        </React.Fragment>
    );
};

export default FTableFooter;