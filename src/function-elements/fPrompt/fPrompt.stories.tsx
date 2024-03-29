import React from 'react';
import {Meta, StoryFn} from '@storybook/react';
import 'bootstrap/dist/css/bootstrap.css';
import {FButton, FStack} from '../../material';
import {fAlert, fPrompt} from "../index";
import {IfPrompt} from "./fPrompt";

export default {
    title: 'Function Elements/fPrompt',
    tags: ['autodocs'],
} satisfies Meta<typeof fPrompt>

export const Default: StoryFn<IfPrompt> = () => (
    <FStack spacing={2} direction={'row'}>
        <FButton
            color={'primary'}
            onClick={async () => {
                const a = await fPrompt(
                    {
                        title: 'Вам нравится работа в РосНИИВХ?',
                        body: 'Думаю вы понимаете почему нельзя отвечать "НЕТ"',
                    }
                )

                if (a !== null && a.toLowerCase() === 'нет') {
                    fAlert({
                        body: 'Ты сделал не верный выбор и за тобой уже выехали',
                        variant: 'error'
                    })
                } else if (a !== null && a.toLowerCase() === 'да') {
                    fAlert({
                        body: 'Ситх, ты выбрал правильную, темную, сторону',
                        variant: 'success'
                    })
                } else {
                    fAlert({
                        body: 'Не бойся, мы же оба знаем правильный ответ\nПопробуй снова!',
                        variant: 'info'
                    })
                }
            }}
        >
            Ответить на главный вопрос жизни
        </FButton>
    </FStack>
);