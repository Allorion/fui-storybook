import React, {FC} from 'react';
import "./FIcoClose.css"

export interface IFCloseIcon {
    handleClose?: () => void,
    st?: React.CSSProperties,
    className?: string,
    id?: string
}

const FCloseIcon: FC<IFCloseIcon> = ({
                                       handleClose,
                                       st,
                                       className,
                                       id,
                                   }) => {
    return (
        <React.Fragment>
            <div
                className={`fv_close ${className !== undefined ? className : ''}`}
                onClick={handleClose}
                style={st}
                id={id}
            >
                <span className="top"></span>
                <span className="bot"></span>
            </div>
        </React.Fragment>
    );
};

export default FCloseIcon;