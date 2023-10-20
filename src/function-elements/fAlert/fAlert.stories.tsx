import React from 'react';
import {Meta, StoryFn} from '@storybook/react';
import 'bootstrap/dist/css/bootstrap.css';
import {FButton, FStack} from '../../material';
import {fAlert} from "../index";
import {IfAlert} from "./fAlert";

export default {
    title: 'Function Elements/fAlert',
    tags: ['autodocs'],
} satisfies Meta<typeof fAlert>

export const Default: StoryFn<IfAlert> = () => (
    <FStack spacing={2} direction={'row'}>
        <FButton
            color={'primary'}
            onClick={() => fAlert(
                {
                    title: 'Информирование!',
                    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, eligendi.\nasdasdasd\nadsasd',
                    variant: 'info'
                }
            )}
        >
            Info
        </FButton>
        <FButton
            color={'danger'}
            onClick={() => fAlert(
                {
                    title: 'Ошибка!',
                    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, eligendi.',
                    variant: 'error'
                }
            )}
        >
            Error
        </FButton>
        <FButton
            color={'success'}
            onClick={() => fAlert(
                {
                    title: 'Успешное выполнение!',
                    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, eligendi.',
                    variant: 'success'
                }
            )}
        >
            Success
        </FButton>
        <FButton
            color={'warning'}
            onClick={() => fAlert(
                {
                    title: 'Что-то не так!',
                    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, eligendi.',
                    variant: 'warning'
                }
            )}
        >
            Success
        </FButton>
    </FStack>
);