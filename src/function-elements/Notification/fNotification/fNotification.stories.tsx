import React, {useState} from 'react';
import {Meta, StoryFn} from '@storybook/react';
import 'bootstrap/dist/css/bootstrap.css';
import {FButton, FStack} from '../../../material';
import fNotification, {IfNotification} from "./fNotification";
import fNotificationDelete from "../fNotificationDelete";

export default {
    title: 'Function Elements/Notification',
    tags: ['autodocs'],
    args: {}
} satisfies Meta<typeof fNotification>

const Template: StoryFn<IfNotification> = (args) => (
    <FStack spacing={2} direction={'row'}>
        <FButton
            color={'primary'}
            onClick={() => fNotification(args)}
        >
            Add Notification
        </FButton>
    </FStack>
);


export const Default = Template.bind({});

Default.args = {
    timeSecClose: 4,
    buttonClose: false,
    variant: "info",
    title: 'Заголовок',
    body: 'Тело уведомления\nможно переносить текст на новую строку с помощью n',
};

Default.argTypes = {
    variant: {
        options: ['info', 'error', 'success', 'warning'],
        control: {type: 'select'},
    },
};

const TemplateClose: StoryFn<IfNotification> = (args) => {
    console.log(args)
    const [arrId, setArrId] = useState<string>('')

    return (
        <FStack spacing={2} direction={'row'}>
            <FButton
                color={'primary'}
                disabled={arrId !== ''}
                onClick={() => fNotification(args).then(res => {
                    setArrId(res)
                })}
            >
                Add Notification
            </FButton>
            <FButton
                color={'danger'}
                onClick={() => {
                    fNotificationDelete(arrId)
                    setArrId('')
                }}
            >
                Add Notification
            </FButton>
            <span>Для удаления уведомления необходимо вызывать fNotificationDelete и передать в нее id удаляемого уведомления</span>
        </FStack>
    )
};

export const Close = TemplateClose.bind({});

Close.args = {
    buttonClose: false,
    variant: "info",
    title: 'Заголовок',
    body: 'Тело уведомления\nможно переносить текст на новую строку с помощью n',
};

Close.argTypes = {
    variant: {
        options: ['info', 'error', 'success', 'warning'],
        control: {type: 'select'},
    },
};