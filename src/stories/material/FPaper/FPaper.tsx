import { FC, useEffect } from "react";
import "./FPaper.css"

export interface IFPaper {
    label?: string
    children?: React.ReactElement | React.ReactNode
    st?: React.CSSProperties
    fontSizeLabel?: string
    fontSizeBody?: string
    id?: string
    className?: string,
    onAnimationEnd?: () => void,
    animated?: {
        name: string,
        value: string
    }
}

const FPaper: FC<IFPaper> = (
    {
        label,
        children,
        st,
        fontSizeLabel,
        id,
        className,
        fontSizeBody,
        onAnimationEnd,
        animated
    }
) => {

    useEffect(() => {
        if (animated !== undefined) {
            const element = document.getElementsByClassName(`animated-${animated.name}`)[0];
            element?.setAttribute(animated.name, animated.value);
        }
    }, [animated])

    return (
        <div
            className={`panel panel-default ${className} ${animated !== undefined ? `animated-${animated.name}` : ''}`}
            style={st}
            id={id}
            onAnimationEnd={onAnimationEnd}
        >
            {label &&
                <div className="panel-heading">
                    <h3 style={{ fontSize: fontSizeLabel }} className="panel-title">{label}</h3>
                </div>
            }
            <div
                className="panel-body" style={{ fontSize: fontSizeBody }}>
                {children}
            </div>
        </div>
    )
}

export default FPaper;
