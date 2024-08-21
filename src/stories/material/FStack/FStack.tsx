import { FC } from "react";

import "./FStack.css"

export interface IFStack {
    direction?: 'row' | "row-reverse" | 'column' | "column-reverse",
    alignItems?: "flex-start" | "center" | "flex-end" | "stretch" | "baseline",
    justifyContent?: "flex-start" | "center" | "flex-end" | "space-between" | "space-around" | "space-evenly",
    spacing?: number,
    children?: React.ReactElement | React.ReactNode,
    className?: string,
    st?: React.CSSProperties,
    id?: string,
    wrap?: "nowrap" | "wrap" | "wrap-reverse" | undefined
}

const FStack: FC<IFStack> = ({
    children,
    alignItems,
    justifyContent,
    direction = 'column',
    wrap,
    spacing = 0,
    className,
    st,
    id
}) => {

    let style: React.CSSProperties = {
        gap: `${+spacing * 8}px`,
        display: 'flex',
        flexDirection: direction,
        justifyContent: justifyContent,
        alignItems: alignItems,
        flexWrap: wrap
    }

    if (st !== undefined) {
        style = Object.assign(style, st);
    }

    return (
        <div
            className={className}
            style={style}
            id={id}
        >
            {children}
        </div>
    )
}

export default FStack