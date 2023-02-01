import React, {FC} from 'react';
import {FPaper} from "../../index";

export interface IFTimelineBody {
    children?: React.ReactChild | React.ReactNode,
    st?: React.CSSProperties,
    title?: string,
    icon?: React.ReactChild | React.ReactNode,
}

const FTimelineBody: FC<IFTimelineBody> = ({
                                               children,
                                               st,
                                               title,
                                               icon
                                           }) => {
    return (
        <React.Fragment>
            <div className={'f_timeline_body'}>
                <FPaper label={title} st={st}>{children}</FPaper>
                <div className={'fv_timeline_num'}>
                    <div style={{height: '100%'}}/>
                    <div className={'fv_num_block'}>
                        <div className={'fv_left_block'}>
                            <div className={'fv_left_line'}/>
                        </div>
                        <div className={'fv_circle'}>
                            {icon}
                        </div>
                    </div>
                    <div className={'fv_bottom_block'}>
                        <div className={'fv_bottom_line'}/>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default FTimelineBody;