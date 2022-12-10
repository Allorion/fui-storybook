import React, {FC} from "react";
import "./FPaper.css"
import {FontSizeBody} from "./FPaper.stories";

export interface IFPaper {
    label?: string
    children?: React.ReactChild | React.ReactNode
    st?: React.CSSProperties
    fontSizeLabel?: string
    fontSizeBody?: string
    id?: string
    className?: string,
}

const FPaper: FC<IFPaper> = (
    {
        label,
        children,
        st,
        fontSizeLabel,
        id,
        className,
        fontSizeBody
    }
) => {

    return (
        <React.Fragment>
            <div className={`panel panel-default ${className}`} style={st} id={id}>
                {label &&
                    <div className="panel-heading">
                        <h3 style={{fontSize:fontSizeLabel}} className="panel-title">{label}</h3>
                    </div>
                }
                <div
                    className="panel-body" style={{fontSize:fontSizeBody}}>
                    {children}
                </div>
            </div>
        </React.Fragment>
    )
}

export default FPaper;
