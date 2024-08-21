import { FC } from "react"

import "./FNative.css"

export interface IFNative {
    label: string,
    id?: string,
    className?: string,
    st?: React.CSSProperties,
    children?: React.ReactElement | React.ReactNode,
    value?: string[] | number[],
    singleChoice?: (element: string[]) => void,
    multipleChoice?: (element: string[]) => void,
    disabled?: boolean,
    size?: number,
    overflowX?: boolean,
    width?: number | 'auto' | 'fit-content' | 'inherit' | 'initial' | 'max-content' | 'min-content' | 'revert' | 'unset' | '-webkit-fill-available'
    fullWidth?: boolean
}

const FNative: FC<IFNative> = ({
    label,
    id,
    className,
    st,
    children,
    value,
    singleChoice,
    multipleChoice,
    disabled,
    size = 4,
    overflowX,
    width = '-webkit-fill-available',
    fullWidth
}) => {

    const handleSingleChoice = (event: React.ChangeEvent<HTMLSelectElement>) => {
        if (singleChoice) {
            const a = []
            a.push(event.target.value)
            singleChoice(a)
        }
    }

    const handlerMultipleChoice = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const { options } = event.target;
        const value: string[] = [];
        for (let i = 0, l = options.length; i < l; i += 1) {
            if (options[i].selected) {
                value.push(options[i].value);
            }
        }
        if (multipleChoice) {
            multipleChoice(value)
        }
    }

    if (fullWidth) {
        if (st === undefined) {
            st = {
                width: '100%'
            }
        } else {
            st.width = '100%'
        }
    }

    return (
        <div className={`f-form-native ${className !== undefined ? className : ''}`} style={st} id={id}>
            <label className={'f-native-label'}>{label}</label>
            <select
                style={{
                    overflowX: overflowX ? 'auto' : 'hidden',
                    width: width
                }}
                size={size}
                disabled={disabled}
                //@ts-ignore
                value={value}
                multiple={true}
                className={'f-native'}
                onChange={(event) => {
                    if (singleChoice) {
                        handleSingleChoice(event)
                    } else if (multipleChoice) {
                        handlerMultipleChoice(event)
                    }
                }}>
                {children}
            </select>
        </div>
    )

}

export default FNative