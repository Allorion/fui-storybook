import { FC } from "react";

import "./FContainer.css"

export interface IFContainer {
    maxWidth?: 'container-xs' | 'container-sm' | 'container-md' | 'container-lg' | 'container-xl' | 'container-xxl' | 'container-fluid'
    children?: React.ReactElement | React.ReactNode,
    className?: string,
    st?: React.CSSProperties,
    id?: string
}

const FContainer: FC<IFContainer> = ({
    children,
    className,
    st,
    id,
    maxWidth = 'container-xs'
}) => {

    return (
        <div
            className={`${className !== undefined ? className : ''} ${maxWidth} f-container`}
            style={st}
            id={id}
        >
            {children}
        </div>
    )
}

export default FContainer