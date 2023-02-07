import React, {FC} from 'react';
import "./FIcoArrow.css"

export interface IFIcoArrow {
    className?: string,
    id?: string,
    st?: React.CSSProperties,
    handleClick?: () => void,
    direction: 'up' | 'down' | 'left' | 'right'
}

const FIcoArrow: FC<IFIcoArrow> = ({
                                       className,
                                       id,
                                       st,
                                       handleClick,
                                       direction
                                   }) => {

    return (
        <React.Fragment>
            <div
                className={`arrow-slider ${className !== undefined ? className : ''}`}
                id={id}
                style={st}
                onClick={handleClick}
            >
                <svg width="35px" height="35px" viewBox="-5 0 18 14"
                     style={{
                         transform: `rotate(
                         ${direction === 'down' ? -90 : 
                             direction === 'up' ? 90 : 
                                 direction === 'right' ? -180 : 
                                     0}deg)`
                     }}
                >
                    <g transform="translate(8.500000, 8.500000) scale(-1, 1) translate(-8.500000, -8.500000)">
                        <polygon className="arrow-slider-pl"
                                 points="16.3746667 8.33860465 7.76133333 15.3067621 6.904 14.3175671 14.2906667 8.34246869 6.908 2.42790698 7.76 1.43613596"></polygon>
                        <polygon className="arrow-slider-pl-fixed"
                                 points="16.3746667 8.33860465 7.76133333 15.3067621 6.904 14.3175671 14.2906667 8.34246869 6.908 2.42790698 7.76 1.43613596"></polygon>
                    </g>
                </svg>
            </div>
        </React.Fragment>
    );
};

export default FIcoArrow;