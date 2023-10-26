import React from 'react';
import {Meta, StoryFn} from '@storybook/react';
import 'bootstrap/dist/css/bootstrap.css';
import {FButton, FStack} from '../../material';
import fNotification, {IfNotification} from "./fNotification";

export default {
    title: 'Function Elements/fNotification',
    tags: ['autodocs'],
} satisfies Meta<typeof fNotification>

export const Default: StoryFn<IfNotification> = () => (
    <FStack spacing={2} direction={'row'}>
        <FButton
            color={'primary'}
            onClick={() => fNotification(
                {
                    title: 'Информирование!',
                    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, Lorem ipsum.\ndolor sit amet,\nconsectetur adipisicing elit',
                    variant: 'info'
                }
            )}
        >
            Info
        </FButton>
        <FButton
            color={'danger'}
            onClick={() => fNotification(
                {
                    title: 'Ошибка!',
                    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, Lorem ipsum.\ndolor sit amet,\nconsectetur adipisicing elit',
                    variant: 'error'
                }
            )}
        >
            Error
        </FButton>
        <FButton
            color={'success'}
            onClick={() => fNotification(
                {
                    title: 'Успешное выполнение!',
                    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, Lorem ipsum.\ndolor sit amet,\nconsectetur adipisicing elit',
                    variant: 'success'
                }
            )}
        >
            Success
        </FButton>
        <FButton
            color={'warning'}
            onClick={() => fNotification(
                {
                    title: 'Что-то не так!',
                    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, Lorem ipsum.\ndolor sit amet,\nconsectetur adipisicing elit',
                    variant: 'warning'
                }
            )}
        >
            Success
        </FButton>
    </FStack>
);