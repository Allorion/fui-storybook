// *********************************************************************************************************************
// Нижняя часть компонента диалогового окна
// *********************************************************************************************************************


import { FC } from "react";

export interface IFDialogFooter {
    children?: React.ReactElement | React.ReactNode,
    className?: string,
    st?: React.CSSProperties | undefined,
    id?: string,
}


const FDialogFooter: FC<IFDialogFooter> = ({
    children,
    className,
    st,
    id
}) => {

    return (
        <div className={`dialog-footer ${className !== undefined ? className : ''}`} id={id} style={st}>
            {children}
        </div>
    )
}

export default FDialogFooter