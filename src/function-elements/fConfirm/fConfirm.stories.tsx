import React from 'react';
import {Meta, StoryFn} from '@storybook/react';
import FStack from "../../../../fui/src/material/FStack/FStack";
import FButton from "../../../../fui/src/material/FButton/FButton";
import fAlert from "../../../../fui/src/function-elements/fAlert/fAlert";
import fConfirm, {IfConfirm} from "../../../../fui/src/function-elements/fConfirm/fConfirm";

export default {
    title: 'Function Elements/fConfirm',
    tags: ['autodocs'],
} satisfies Meta<typeof fConfirm>

export const Default: StoryFn<IfConfirm> = () => (
    <FStack spacing={2} direction={'row'}>
        <FButton
            color={'primary'}
            onClick={async () => {
                const a = await fConfirm(
                    {
                        title: 'Вам нравится работа в РосНИИВХ?',
                        body: 'Думаю вы понимаете почему тут нет ответа "НЕТ"',
                    }
                )

                if (a) {
                    fAlert({
                        body: 'Ситх, ты выбрал правильную, темную, сторону',
                        variant: 'success'
                    })
                } else {
                    fAlert({
                        body: 'Не бойся, мы же оба знаем правильный ответ\nПопробуй снова!',
                        variant: 'error'
                    })
                }
            }}
        >
            Ответить на главный вопрос жизни
        </FButton>
    </FStack>
);