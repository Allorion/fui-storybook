import "@style/Colors.css"

export interface IFCloseIcon {
    color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link'
    size?: number
    st?: React.CSSProperties,
    id?: string,
    className?: string,
    handleClose?: () => void,
}


const FCloseIcon = ({ color = 'primary', size = 70, st, id, className, handleClose }: IFCloseIcon) => {
    return (
        <svg
            width={size}
            style={st}
            className={`bi bi-x-lg ${color} ${className !== undefined ? className : ''}`}
            viewBox="0 0 16 16"
            onClick={handleClose}
            id={id}
        >
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
        </svg>
    );
};

export default FCloseIcon;
