import React, {FC} from 'react';
import "./FIcoClose.css"

export interface IFIcoClose {
    handleClose?: () => void,
    st?: React.CSSProperties,
    className?: string,
    id?: string
}

const FIcoClose: FC<IFIcoClose> = ({
                                       handleClose,
                                       st,
                                       className,
                                       id
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

export default FIcoClose;