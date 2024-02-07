import React, {FC} from "react";
import '../styles/FTabs.css'

export interface IFTabs {
    children?: React.ReactChild | React.ReactNode
    id?: string,
    className?: string
    st?: React.CSSProperties
}

const FTabs: FC<IFTabs> = ({
                               children,
                               id,
                               className,
                               st
                           }) => {

    return (
        <React.Fragment>
            <div className={`f-tabs ${className !== undefined ? className : ''}`} id={id} style={st}>
                {children}
            </div>
        </React.Fragment>
    )
}

export default FTabs
