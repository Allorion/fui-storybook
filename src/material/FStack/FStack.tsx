import React, {FC} from "react";
import "./FStack.css"

export interface IFStack {
    direction?: 'row' | "row-reverse" | 'column' | "column-reverse",
    alignItems?: "flex-start" | "center" | "flex-end" | "stretch" | "baseline",
    justifyContent?: "flex-start" | "center" | "flex-end" | "space-between" | "space-around" | "space-evenly",
    spacing?: number,
    children?: React.ReactNode,
    className?: string,
    st?: React.CSSProperties,
    id?: string
}

const FStack: FC<IFStack> = ({
                                 children,
                                 alignItems,
                                 justifyContent,
                                 direction = 'column',
                                 spacing = 0,
                                 className,
                                 st,
                                 id
                             }) => {

    let style: React.CSSProperties = {
        display: 'flex',
        flexDirection: direction,
        // @ts-ignore
        WebkitBoxPack: justifyContent,
        justifyContent: justifyContent,
        // @ts-ignore
        WebkitBoxAlign: alignItems,
        alignItems: alignItems,
    }

    if (st !== undefined) {
        style = Object.assign(style, st);
    }

    return (
        <React.Fragment>
            <div
                className={className}
                style={style}
                id={id}
            >
                {React.Children.map(children, (child, i) => {
                    if (direction === 'row') {
                        if (i === React.Children.count(children)) return child
                        return (
                            <div style={{
                                margin: `0 0 0 ${+spacing * 8}px`
                            }}>
                                {child}
                            </div>
                        )
                    } else if (direction === 'row-reverse') {
                        if (i < 1) return child
                        return (
                            <div style={{
                                margin: `0 ${+spacing * 8}px 0 0`
                            }}>
                                {child}
                            </div>
                        )
                    } else if (direction === 'column') {
                        if (i < 1) return child
                        return (
                            <div style={{
                                margin: `${+spacing * 8}px 0 0 0`
                            }}>
                                {child}
                            </div>
                        )
                    } else if (direction === 'column-reverse') {
                        if (i === React.Children.count(children)) return child
                        return (
                            <div style={{
                                margin: `0 0 ${+spacing * 8}px`
                            }}>
                                {child}
                            </div>
                        )
                    }
                })}
            </div>
        </React.Fragment>
    )
}

export default FStack