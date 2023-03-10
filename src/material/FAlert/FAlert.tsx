import React, {FC} from 'react'
import "./FAlert.css"

export interface IFAlert {
    variant: 'info' | 'error'
    onClose?: React.MouseEventHandler<HTMLButtonElement> | undefined
    title: string
    body: string
    st?: React.CSSProperties | undefined
    open: boolean
    vertical: 'top' | 'bottom';
    horizontal: 'left' | 'center' | 'right';
    buttonClose: boolean,
    id?: string,
    className?: string
}

const FAlert: FC<IFAlert> = ({
                                 variant,
                                 open = false,
                                 title,
                                 body,
                                 st,
                                 vertical,
                                 horizontal,
                                 onClose,
                                 buttonClose,
                                 className,
                                 id
                             }) => {

    let style: React.CSSProperties = {
        opacity: open ? 1 : 0,
        transition: '1s'
    }

    if (st !== undefined) {
        style = Object.assign({}, st, style)
    }

    return (
        <React.Fragment>
            <div
                className={`f-snackbar ${vertical} ${horizontal} ${className !== undefined ? className : ''}`}
                id={id}
                style={style}
            >
                <div className="alert alert-notice-static alert-notice alert-info alert-dismissable in"
                     style={{width: '100%'}}>
                    {buttonClose &&
                        <button data-dismiss="alert" className="close" onClick={onClose}
                                type="button">
                            <svg className="lexicon-icon lexicon-icon-times icon-monospaced"
                                 focusable="false" viewBox="0 0 22 22">
                                <path
                                    d="M13.484 11L21 3.484 18.516 1 11 8.516 3.484 1 1 3.484 8.516 11 1 18.516 3.484 21 11 13.484 18.516 21 21 18.516 13.484 11z"></path>
                            </svg>
                        </button>
                    }
                    <div className="alert-icon" style={{
                        color: variant === 'info' ? '#95BFFF' : '#D10000',
                        background: variant === 'info' ? 'rgba(149, 191, 255, 0.4)' : 'rgba(209, 0, 0, 0.4)'
                    }}>
                        <svg className="svg-icon" focusable="false" role="img">
                            {variant === 'info' ?
                                <path
                                    d="M7.234 2.313c.308 0 .571.031.79.092.219.062.417.144.595.246.177.102.335.208.471.318.137.109.274.215.41.318.137.103.287.181.451.236.164.055.352.089.564.103h10.172c.185 0 .355.034.513.103.157.068.294.161.41.277.116.116.212.256.287.42.076.163.11.334.103.512v4.625L20.688 8.25V4.938H10.516c-.212 0-.396.031-.554.092a2.027 2.027 0 0 0-.451.246 8.753 8.753 0 0 0-.421.318c-.136.109-.29.215-.461.318-.171.102-.369.181-.595.235s-.492.089-.8.103H2.313v11.813h6.563v1.313H1V3.625c0-.185.034-.355.103-.513.068-.157.161-.294.277-.41.116-.116.256-.212.42-.287.164-.075.335-.109.513-.102h4.921zm0 2.625c.164 0 .308-.014.431-.041.123-.027.236-.072.338-.133a2.85 2.85 0 0 0 .297-.205c.096-.075.205-.167.328-.277a6.22 6.22 0 0 0-.317-.267 2.258 2.258 0 0 0-.308-.205c-.109-.062-.222-.106-.338-.134s-.26-.044-.431-.051H2.313v1.313h4.921zm10.449 2.625L22 11.879V22H10.188V7.563h7.495zm.38 3.937h1.692l-1.692-1.692V11.5zm2.625 9.188v-7.875H16.75V8.875H11.5v11.813h9.188zm-6.563-2.625h5.25v1.313h-5.25v-1.313zm2.625-2.625h2.625v1.313H16.75v-1.313z"></path>
                                :
                                <>
                                    <path
                                        d="M21.145 24.146H3.854c-1.047 0-2.001-.532-2.552-1.423s-.6-1.982-.131-2.919L9.816 2.513A2.984 2.984 0 0 1 12.499.855c1.144 0 2.172.635 2.684 1.658l8.646 17.292a2.981 2.981 0 0 1-.131 2.919 2.984 2.984 0 0 1-2.553 1.422zM12.5 1.854c-.774 0-1.442.413-1.789 1.105L2.065 20.251a1.986 1.986 0 0 0 .087 1.946 1.986 1.986 0 0 0 1.701.948h17.292c.698 0 1.335-.354 1.701-.948.367-.594.4-1.321.088-1.946L14.289 2.96A1.965 1.965 0 0 0 12.5 1.854z"></path>
                                    <path
                                        d="M10.945 18.15c0 .674.52 1.143 1.274 1.143.791 0 1.304-.469 1.304-1.143 0-.688-.513-1.15-1.304-1.15-.761 0-1.274.461-1.274 1.15zm.227-9.002l.22 6.614h1.677l.227-6.614h-2.124z"></path>
                                </>
                            }
                        </svg>
                    </div>
                    <div className="alert-body"><p className="alert-title">
                        {title}</p>
                        <p>{body}</p></div>
                </div>
            </div>
        </React.Fragment>
    )

}

export default FAlert