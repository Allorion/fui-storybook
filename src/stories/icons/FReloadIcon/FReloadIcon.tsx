import "@style/Colors.css"

export interface IFReloadIcon {
    color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link'
    size?: number
    st?: React.CSSProperties,
    id?: string,
    className?: string,
    handleClick?: () => void,
}

const FReloadIcon = ({
    color = 'primary',
    size = 32,
    st,
    className,
    id,
    handleClick
}: IFReloadIcon) => {
    return (
        <svg
            width={size}
            style={st}
            className={`bi bi-pencil ${color} ${className !== undefined ? className : ''}`}
            viewBox="0 0 16 16"
            onClick={handleClick}
            id={id}
        >
            <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z" />
            <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466" />
        </svg>
    );
};

export default FReloadIcon;
