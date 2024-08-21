import "@style/Colors.css"
import './FButton.css'

export interface IFButton {
    children?: React.ReactElement | React.ReactNode,
    variant?: 'contained' | 'default'
    color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link'
    size?: 'btn-lg' | 'btn-sm' | 'btn-xs'
    disabled?: boolean
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined
    st?: React.CSSProperties,
    className?: string
    fullWidth?: boolean
    id?: string,
    type?: "button" | "submit" | "reset" | undefined
}

const FButton = (
    {
        children,
        variant = 'contained',
        color = 'primary',
        size = 'btn-sm',
        disabled,
        onClick,
        st,
        className,
        fullWidth,
        id,
        type = 'button'
    }: IFButton
) => {
    
    let style = st !== undefined ? {...st} : undefined

    if (fullWidth) {
        if (style === undefined) {
            style = {
                width: '100%'
            }
        } else {
            style.width = '100%'
        }
    } else {
        if (style === undefined) {
            style = {
                width: "fit-content"
            }
        } else {
            style.width = "fit-content"
        }
    }

    return (
        <button
            disabled={disabled}
            type={type}
            className={`btn ${variant === 'contained' ? 'btn' : 'btn-default'}-${color} ${size} ${className !== undefined ? className : ''}`}
            onClick={onClick}
            style={style}
            id={id}
        >
            {children}
        </button>
    )
}

export default FButton
