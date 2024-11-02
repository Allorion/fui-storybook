import "@style/Colors.css"

export interface IFMinusIcon {
    color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link'
    size?: number
    st?: React.CSSProperties,
    id?: string,
    className?: string,
    handleClick?: () => void,
}

const FMinusIcon = ({
    color = 'primary',
    size = 32,
    st,
    className,
    id,
    handleClick
}: IFMinusIcon) => {
    return (
        <svg
            width={size}
            style={st}
            className={`bi bi-pencil ${color} ${className !== undefined ? className : ''}`}
            viewBox="0 0 16 16"
            onClick={handleClick}
            id={id}
        >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
            <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8" />
        </svg>
    );
};

export default FMinusIcon;
