import React, {FC} from "react";
import '../statick/FDropdown.css'
import {FButton, FStack} from "../../index";

// @ts-ignore
import downArrow from '../statick/down-arrow.png'

export interface IFDropdown {
    label?: React.ReactChild | React.ReactNode,
    children?: React.ReactChild | React.ReactNode,
    variant?: 'contained' | 'default'
    color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link'
    size?: 'btn-lg' | 'btn-sm' | 'btn-xs'
    disabled?: boolean
    st?: React.CSSProperties,
    className?: string
    id?: string,
}

const FDropdown: FC<IFDropdown> = ({
                                       label,
                                       variant = 'contained',
                                       color = 'primary',
                                       size = 'btn-sm',
                                       disabled,
                                       st,
                                       className,
                                       id,
                                       children
                                   }) => {

    return (
        <React.Fragment>
            <div className={'f-dropdown'}>
                <FButton
                    variant={variant}
                    color={color}
                    size={size}
                    disabled={disabled}
                    st={st}
                    className={className}
                    id={id}
                    onClick={() => {
                        document.getElementsByClassName('#heading');
                    }}
                >
                    <FStack direction={'row'} spacing={1}>
                        {label}
                        <img className={'f-dropdown-down-arrow'} src={downArrow}/>
                    </FStack>
                </FButton>
                <div className="f-dropdown-content">
                    {children}
                </div>
            </div>
        </React.Fragment>
    )
}

export default FDropdown
