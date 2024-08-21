import "@style/Colors.css"

export interface IFArrowIcon {
    color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link'
    size?: number
    st?: React.CSSProperties,
    direction?: 'up' | 'down' | 'left' | 'right',
    handleClick?: () => void,
    id?: string,
    className?: string,
}
const FArrowIcon = ({
    color = 'primary',
    size = 32,
    st,
    direction = 'right',
    handleClick,
    id,
    className
}: IFArrowIcon) => {

    const style = {
        transform: `rotate(
                         ${direction === 'down' ? 90 :
                direction === 'up' ? -90 :
                    direction === 'right' ? 0 :
                        180}deg)`
    }

    st = Object.assign({}, style, st)

    return (
        <svg
            width={size}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
            className={`arrow-icon ${color} ${className !== undefined ? className : ''}`}
            style={st}
            onClick={handleClick}
            id={id}
        >
            <path
                d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
        </svg>
    );
};

export default FArrowIcon;
