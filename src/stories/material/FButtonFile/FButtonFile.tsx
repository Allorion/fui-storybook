import { Fragment, useRef, useState } from 'react';

import './FButtonFile.css'

import FStack from "@material/FStack";

export interface IFButtonFile {
    children?: React.ReactElement | React.ReactNode,
    variant?: 'contained' | 'default'
    color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link'
    size?: 'btn-lg' | 'btn-sm' | 'btn-xs'
    disabled?: boolean
    st?: React.CSSProperties,
    className?: string
    fullWidth?: boolean
    id?: string,
    onChange: (file: File[] | null) => void,
    multiple?: boolean,
    accept?: string
    spacing?: 0 | 0.5 | 1 | 2 | 3 | 4 | 8 | 12 | undefined,
    direction?: "row" | "row-reverse" | "column" | "column-reverse" | undefined,
    required?: boolean,
}

const FButtonFile = (
    {
        children,
        variant = 'contained',
        color = 'primary',
        size = 'btn-sm',
        disabled,
        st,
        className,
        fullWidth,
        id,
        onChange,
        multiple = false,
        accept,
        spacing,
        direction,
        required,
    }: IFButtonFile
) => {

    const fileRef = useRef<HTMLInputElement>(null);
    const [files, setFiles] = useState<File[]>([]);

    if (fullWidth) {
        if (st === undefined) {
            st = {
                width: '100%'
            }
        } else {
            st.width = '100%'
        }
    }

    return (
        <Fragment>
            <button
                disabled={disabled}
                className={`btn ${variant === 'contained' ? 'btn' : 'btn-default'}-${color} ${size} ${className !== undefined ? className : ''}`}
                style={st}
                id={id}
                onClick={() => fileRef.current?.click()}
            >
                {children}
            </button>
            <input
                required={required}
                style={{ display: 'none' }}
                ref={fileRef}
                onChange={(e) => {
                    const newFiles: File[] = [...files]
                    if (e.target.files) {
                        Array.from(e.target.files).forEach((file) => {
                            newFiles.push(file)
                        })
                    }
                    setFiles(newFiles)
                    onChange(newFiles.length > 0 ? newFiles : null)
                }}
                multiple={multiple}
                type="file"
                hidden
                accept={accept}
            />
            <div className="custom-files-preview" id="files" style={{ marginTop: '16px' }}>
                <FStack direction={direction} spacing={spacing}>
                    {files.length > 0 &&
                        files.map((opt, index) => {
                            return (
                                <span
                                    key={`file-${opt.name}-${Math.round(opt.size / 1024)}}`}
                                    className="tag tag-default tag-file tag-block"
                                    style={{
                                        width: 'fit-content',
                                        display: 'flex',
                                        justifyContent: 'flex-end',
                                    }}
                                >
                                    <span className="tag-file-name">
                                        {opt.name}
                                    </span>
                                    <span className="tag-file-size">
                                        ({Math.round(opt.size / 1024)} КБ)
                                    </span>
                                    <div
                                        className="cl-btn-3"
                                        style={{
                                            marginLeft: '16px',
                                            marginTop: '2px',
                                            width: '10px',
                                            height: '10px',
                                        }}
                                        onClick={() => {
                                            const arFiles = [...files]
                                            arFiles.splice(index, 1)
                                            setFiles(arFiles)

                                            if (arFiles.length === 0) {
                                                if (fileRef.current) {
                                                    fileRef.current.value = '';
                                                }
                                                onChange(null)
                                            } else {
                                                onChange(arFiles)
                                            }

                                        }}
                                    >
                                        <span className="top"></span>
                                        <span className="bot"></span>
                                    </div>
                                </span>
                            )
                        })
                    }
                </FStack>
            </div>
        </Fragment>
    )
}

export default FButtonFile
