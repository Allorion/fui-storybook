import { FC } from "react";

import '../static/FDropdown.css'

import downArrow from '../static/down-arrow.png'

import FButton from "@material/FButton";
import FStack from "@material/FStack";

export interface IFDropdown {
    label?: React.ReactElement | React.ReactNode,
    children?: React.ReactElement | React.ReactNode,
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
        <div className={'f-dropdown'}>
            <FButton
                variant={variant}
                color={color}
                size={size}
                disabled={disabled}
                st={st}
                className={`f-dropdown-bottom ${className !== undefined ? className : ''}`}
                id={id}
                onClick={() => {
                    document.getElementsByClassName('#heading');
                }}
            >
                <FStack direction={'row'} spacing={1} justifyContent={"center"} alignItems={'center'}>
                    {label}
                    <img className={'f-dropdown-down-arrow'} src={downArrow} />
                </FStack>
            </FButton>
            <div className="f-dropdown-content">
                {children}
            </div>
        </div>
    )
}

export default FDropdown
