import React, {useRef, useState} from "react";
import './FButtonFile.css'
import {FStack} from "../index";

export interface IFButtonFile {
    children?: React.ReactChild | React.ReactNode,
    variant?: 'contained' | 'default'
    color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link'
    size?: 'btn-lg' | 'btn-sm' | 'btn-xs'
    disabled?: boolean
    st?: React.CSSProperties,
    className?: string
    fullWidth?: boolean
    id?: string,
    onChange: (file: FileList | null) => void,
    multiple?: boolean,
    maxCount?: number,
    accept?: string
    spacing?: 0 | 0.5 | 1 | 2 | 3 | 4 | 8 | 12 | undefined,
    direction?: "row" | "row-reverse" | "column" | "column-reverse" | undefined
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
        maxCount,
        accept,
        spacing,
        direction
    }: IFButtonFile
) => {

    const fileRef = useRef();
    const [files, setFiles] = useState<[]>([]);
    // console.log(files)
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
        <React.Fragment>
            <button
                disabled={disabled}
                className={`btn ${variant === 'contained' ? 'btn' : 'btn-default'}-${color} ${size} ${className !== undefined ? className : ''}`}
                style={st}
                id={id}
                //@ts-ignore
                onClick={() => fileRef.current.click()}
            >
                {children}
            </button>
            <input
                style={{display: 'none'}}
                //@ts-ignore
                ref={fileRef}
                onChange={(e) => {

                    const newFiles = [...files]

                    //@ts-ignore
                    Object.values(e.target.files).map((opt) => {
                        //@ts-ignore
                        newFiles.push(opt)
                    })

                    // @ts-ignore
                    setFiles(newFiles)
                    // @ts-ignore
                    onChange(newFiles)
                }}
                multiple={multiple}
                type="file"
                hidden
                maxCount={maxCount}
                accept={accept}
            />
            <div className="custom-files-preview" id="files" style={{marginTop: '16px'}}>
                <FStack direction={direction} spacing={spacing}>
                    {files !== undefined &&
                        files.map((opt, index) => {
                            return (
                                <span
                                    // @ts-ignore
                                    key={`file-${opt.name}-${Math.round(+opt.size / 1024)}}`}
                                    className="tag tag-default tag-file tag-block"
                                    style={{
                                        width: 'fit-content',
                                        display: 'flex',
                                        justifyContent: 'flex-end',
                                    }}
                                >
                                    <span className="tag-file-name">
                                        {/*@ts-ignore*/}
                                        {opt.name}
                                    </span>
                                    <span className="tag-file-size">
                                        {/*@ts-ignore*/}
                                        ({Math.round(+opt.size / 1024)} КБ)
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
                                                 let arFiles = [...files]

                                                 arFiles.splice(index, 1)

                                                 //@ts-ignore
                                                 setFiles(arFiles)

                                                 if (arFiles.length === 0) {
                                                     // @ts-ignore
                                                     fileRef.current.value = null;
                                                     // @ts-ignore
                                                     onChange(null)
                                                 } else {
                                                     // @ts-ignore
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
        </React.Fragment>
    )
}

export default FButtonFile
