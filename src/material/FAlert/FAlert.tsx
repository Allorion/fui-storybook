import React, {FC, useEffect, useRef} from "react";
import {FCloseIcon} from "../../icons";
import './FAlert.css'
import "../../static/styles/index.css"

export interface IFAlert {
    title?: string,
    body?: string,
    variant: 'info' | 'error' | 'success' | 'warning',
    onClose?: (e: boolean) => void,
    st?: React.CSSProperties | undefined,
    open: boolean,
    vertical?: 'top' | 'bottom' | 'center',
    horizontal?: 'left' | 'center' | 'right',
    buttonClose?: boolean,
    className?: string,
    displayTime?: number,
    size?: string
}

const FAlert: FC<IFAlert> = (
    {
        title,
        body,
        variant = 'info',
        displayTime,
        open,
        onClose,
        vertical = 'center',
        horizontal = 'center',
        buttonClose = false,
        size
    }
) => {

    const visible = useRef<number>();
    const hidden = useRef<number>();
    const close = useRef<number>();

    const randomId = useRef<string>((Math.random() + 1).toString(36).substring(2))

    let newTime = displayTime

    useEffect(() => {

        const progress = document.getElementById(`f-alert-progress-value-${randomId.current}`)

        // @ts-ignore
        visible.current = setTimeout(() => {
            if (open) {
                const el = document.querySelector(`#f-block-alert-${randomId.current}`)
                el!.classList.add('f-alert-visible')
                if (progress !== null) {
                    progress!.style.width = '0'
                }
            }
        })

        if (newTime !== undefined && open && onClose !== undefined) {

            if (newTime < 1) newTime = 1

            const el = document.querySelector(`#f-block-alert-${randomId.current}`)

            progress!.style.transition = `${newTime}s linear`

            // @ts-ignore
            hidden.current = setTimeout(() => {
                el!.classList.remove('f-alert-visible')
                el!.classList.add('f-alert-hidden')
            }, (newTime - 1) * 1000)
            // @ts-ignore
            close.current = setTimeout(() => {
                onClose(false)
                el!.classList.remove('f-alert-hidden')
                el!.classList.remove('f-alert-visible')
            }, newTime * 1000)
        }
    }, [open]);

    const handlerIco = (): JSX.Element => {
        let ico: JSX.Element = <>
            <path
                d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
            <path
                d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
        </>

        switch (variant) {
            case 'info':
                ico = <>
                    <path
                        d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                    <path
                        d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                </>
                break
            case "success":
                ico = <>
                    <path
                        d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                    <path
                        d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.235.235 0 0 1 .02-.022z"/>
                </>
                break
            case 'error':
                ico = <>
                    <path
                        d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                    <path
                        d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                </>
                break
            case 'warning':
                ico = <>
                    <path
                        d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                    <path
                        d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/>
                </>
                break
        }
        return ico
    }

    const handlerPosition = () => {

        const styleVertical: {
            top?: string | number,
            bottom?: string | number,
            transform?: string
        } = {}

        const styleHorizontal: {
            left?: string | number,
            right?: string | number,
            transform?: string
        } = {}

        switch (vertical) {
            case 'top':
                styleVertical.top = 0
                break
            case 'bottom':
                styleVertical.bottom = 0
                break
            case 'center':
                if (vertical === 'center' && horizontal !== 'center') {
                    styleVertical.transform = 'translateY(-50%)'
                }
                styleVertical.top = '50%'
                break
        }

        switch (horizontal) {
            case 'left':
                styleHorizontal.left = 0
                break
            case 'right':
                styleHorizontal.right = 0
                break
            case 'center':
                if (vertical === 'center' && horizontal === 'center') {
                    styleHorizontal.transform = 'translate(-50%, -50%)'
                } else {
                    styleHorizontal.transform = 'translateX(-50%)'
                }
                styleHorizontal.left = '50%'
                break
        }


        return Object.assign({}, styleHorizontal, styleVertical)
    }

    return (
        <React.Fragment>
            {open &&
                <div className='f-block-alert' id={`f-block-alert-${randomId.current}`}>
                    <div className="f-alert-component" style={handlerPosition()}>
                        <div className='f-alert'>
                            <div className={`f-alert-ico ${variant}`}>
                                <svg width="28" height="28" viewBox="0 0 16 16">
                                    {handlerIco()}
                                </svg>
                            </div>
                            <div className='f-alert-inside'
                                 style={{width: size !== undefined ? `${size}` : "fit-content"}}>
                                <div className='f-alert-header'>
                                    <h4>{title !== undefined ? title : ''}</h4>
                                    {(buttonClose && onClose) &&
                                        <FCloseIcon
                                            size={25}
                                            st={{
                                                cursor: 'pointer'
                                            }}
                                            handleClose={() => {
                                                const el = document.querySelector(`#f-block-alert-${randomId.current}`)
                                                el!.classList.remove('f-alert-visible')
                                                el!.classList.add('f-alert-hidden')
                                                onClose(false)
                                                el!.classList.remove('f-alert-visible')
                                                el!.classList.remove('f-alert-hidden')
                                                clearTimeout(visible.current)
                                                clearTimeout(hidden.current)
                                                clearTimeout(close.current)
                                            }}/>
                                    }
                                </div>
                                <div className='f-alert-body'>
                                    <span>{body}</span>
                                </div>
                            </div>
                            {newTime &&
                                <div className={'f-alert-progress'}>
                                    <div className="f-alert-progress-bar">
                                        <div className={`f-alert-progress-value ${variant}`}
                                             id={`f-alert-progress-value-${randomId.current}`}/>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            }
        </React.Fragment>
    )
};

export default FAlert;