import React from 'react';

import {ComponentMeta, Story} from '@storybook/react';

import FTimeline, {IFTimeline} from "./FTimeline/FTimeline";

import "bootstrap/dist/css/bootstrap.css"
import FTimelineBody from "./FTimelineBody/FTimelineBody";
//@ts-ignore
import ic from './statick/file_paper_document_type_folder_data_page_icon_232717.svg'

export default {
    title: 'FMaterial UI-Kit/FTimeline',
    comment: FTimeline,
} as ComponentMeta<typeof FTimeline>;

const Template: Story<IFTimeline> = (args) => (
    <FTimeline {...args}>
        <FTimelineBody
            title={'Водохозяйственный участок'}
            icon={(
                <img width={'27px'} src={ic}/>
            )}
        >
            Это часть речного бассейна, имеющая характеристики, позволяющие установить лимиты забора (изъятия) водных
            ресурсов из водного объекта и другие параметры использования водного объекта (водопользования)
        </FTimelineBody>
        <FTimelineBody title={'Водохозяйственный участок'}>
            Это часть речного бассейна, имеющая характеристики, позволяющие установить лимиты забора (изъятия) водных
            ресурсов из водного объекта и другие параметры использования водного объекта (водопользования)
        </FTimelineBody>
        <FTimelineBody title={'Водохозяйственный участок'}>
            Это часть речного бассейна, имеющая характеристики, позволяющие установить лимиты забора (изъятия) водных
            ресурсов из водного объекта и другие параметры использования водного объекта (водопользования)
        </FTimelineBody>
    </FTimeline>
)

export const Default = Template.bind({});

Default.args = {
    id: 'stack-id',
    className: 'stack-className',
    st: {marginTop: '20px'}
};