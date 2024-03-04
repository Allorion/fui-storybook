import React, {FC} from "react";
import '../styles/FTabs.css'

export interface IFTabs {
    children?: React.ReactChild | React.ReactNode
    id?: string,
    className?: string
    st?: React.CSSProperties,
    orientation?: 'vertical' | 'horizontal'
}

const FTabs: FC<IFTabs> = ({
                               children,
                               id,
                               className,
                               st,
                               orientation = 'horizontal'
                           }) => {

    return (
        <React.Fragment>
            <div className={`f-tabs ${orientation} ${className !== undefined ? className : ''}`} id={id} style={st}>
                {children}
            </div>
        </React.Fragment>
    )
}

export default FTabs
