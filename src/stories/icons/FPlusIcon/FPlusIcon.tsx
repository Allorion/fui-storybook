import "@style/Colors.css"

export interface IFPlusIcon {
    color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link'
    size?: number
    st?: React.CSSProperties,
    id?: string,
    className?: string,
    handleClick?: () => void,
}

const FPlusIcon = ({
    color = 'primary',
    size = 32,
    st,
    className,
    id,
    handleClick
}: IFPlusIcon) => {
    return (
        <svg
            onClick={handleClick}
            className={`MuiSvgIcon-root MuiSvgIcon-fontSizeMedium ${color} ${className !== undefined ? className : ''}`}
            id={id}
            width={size}
            style={st}
            focusable="false"
            aria-hidden="true"
            viewBox="0 0 24 24"
            data-testid="AddCircleOutlineOutlinedIcon"
        >
            <path
                d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
        </svg>
    );
};

export default FPlusIcon;
