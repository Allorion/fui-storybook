import { Meta, StoryFn } from '@storybook/react';



import { FButton, FStack } from '@material/index';
import fPrompt, { IfPrompt } from "./fPrompt";
import { fAlert } from '@function-elements/index';

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