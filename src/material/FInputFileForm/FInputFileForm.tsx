import React, {FC, useEffect, useRef} from 'react';
import "./FInputFileForm.css"

export interface IFInputFileForm {
    id?: string,
    className?: string,
    st?: React.CSSProperties,
    dataMaxSize?: number,
    name?: string,
    accept?: string,
    multiple?: boolean,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    disabled?: boolean,
    deleteFile?: boolean,
}

const FInputFileForm: FC<IFInputFileForm> = ({
                                                 id,
                                                 className,
                                                 st,
                                                 dataMaxSize,
                                                 name,
                                                 accept,
                                                 multiple = false,
                                                 onChange,
                                                 disabled = false,
                                                 deleteFile
                                             }) => {

    let disabledColor: {
        customFileLabel: React.CSSProperties | undefined,
        svgIcon: React.CSSProperties | undefined,
        span: React.CSSProperties | undefined,
        b: React.CSSProperties | undefined,
    } = {
        customFileLabel: undefined,
        svgIcon: undefined,
        span: undefined,
        b: undefined,
    }

    if (disabled) {
        disabledColor = {
            customFileLabel: {
                backgroundColor: '#F3F3F3',
                borderRadius: '8px',
                border: '1px dashed #C4C4C4'
            },
            svgIcon: {
                color: '#888888'
            },
            span: {
                color: '#C4C4C4'
            },
            b: {
                color: '#888888'
            }
        }
    }

    const inputRef = useRef<{
        value: null | undefined
    }>({
        value: undefined
    });

    useEffect(() => {
        if (deleteFile) {
            inputRef.current.value = null
        }
    }, [deleteFile])

    return (
        <React.Fragment>
            <div
                className="custom-file custom-file-dropzone"
                style={st}
            >
                <input
                    accept={accept}
                    type="file"
                    className={`custom-file-input ${className !== undefined ? className : ''}`}
                    name={name}
                    id={id}
                    data-max-size={dataMaxSize}
                    multiple={multiple}
                    onChange={(e) => onChange(e)}
                    disabled={disabled}
                    //@ts-ignore
                    ref={inputRef}
                />
                <label
                    className="custom-file-label"
                    style={disabledColor.customFileLabel}
                >
                    <svg
                        className="svg-icon icon-md"
                        focusable="false"
                        role="img"
                        viewBox="0 0 36 35"
                        style={disabledColor.svgIcon}
                    >
                        <path
                            d="M19.035 16.465a1.458 1.458 0 0 0-2.041 0l-4.376 4.229a1.459 1.459 0 1 0 2.013 2.1l1.91-1.852v8.225a1.458 1.458 0 1 0 2.917 0v-8.152l1.881 1.895a1.459 1.459 0 0 0 2.071 0 1.457 1.457 0 0 0 0-2.07l-4.375-4.375z"/>
                        <path
                            d="M26.269 10.208a8.75 8.75 0 0 0-16.538 0 7.292 7.292 0 0 0-4.491 12.06 1.457 1.457 0 1 0 2.187-1.851 4.375 4.375 0 0 1 3.282-7.292h.145a1.458 1.458 0 0 0 1.459-1.167 5.833 5.833 0 0 1 11.433 0 1.458 1.458 0 0 0 1.458 1.167h.088a4.376 4.376 0 0 1 3.281 7.292 1.457 1.457 0 0 0 .131 2.07 1.458 1.458 0 0 0 1.563.235c.189-.085.357-.21.494-.366a7.292 7.292 0 0 0-4.492-12.148z"/>
                    </svg>
                    <br/>
                    <span style={disabledColor.span}>
                        <b style={disabledColor.b}>Выберите</b> или переместите файл для загрузки<br/> <small>Максимальный
                    размер {dataMaxSize} Мб</small>
                    </span>
                </label>
            </div>
        </React.Fragment>
    );
};

export default FInputFileForm;