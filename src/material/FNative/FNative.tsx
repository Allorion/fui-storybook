import React, {FC} from "react"
import "./FNative.css"

export interface IFNative {
    label: string,
    id?: string,
    className?: string,
    st?: React.CSSProperties,
    children?: React.ReactChild | React.ReactNode,
    value?: string[],
    singleChoice?: (element: string[]) => void,
    multipleChoice?: (element: string[]) => void,
    disabled?: boolean,
    size?: number,
    overflowX?: boolean
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
                                   size=4,
                                   overflowX,
                               }) => {

    const handleSingleChoice = (event: React.ChangeEvent<HTMLSelectElement>) => {
        if (singleChoice) {
            let a = []
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

    return (
        <React.Fragment>
            <div className={`f-form-native ${className !== undefined ? className : ''}`} style={st} id={id}>
                <label className={'f-native-label'}>{label}</label>
                <select
                    style={{
                        overflowX: overflowX ? 'auto' : 'hidden'
                    }}
                    size={size}
                    disabled={disabled}
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
        </React.Fragment>
    )

}

export default FNative