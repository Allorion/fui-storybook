import React, {useState} from 'react';

import {Meta, StoryFn} from '@storybook/react';

import 'bootstrap/dist/css/bootstrap.css';
import FDialog from './FDialog';
import {IFDialog} from './FDialog/FDialog';
import FDialogHeader from './FDialogHeader';
import FDialogBody from './FDialogBody';
import FDialogFooter from './FDialogFooter';
import {FButton, FStack} from '../index';

export default {
    title: 'FMaterial UI-Kit/FDialog',
    tags: ['autodocs'],
    component: FDialog,
} satisfies Meta<typeof FDialog>;

const Dialog: StoryFn<IFDialog> = (args) => {

    const [open, setOpen] = useState<boolean>(false)

    args.openAndClose = open

    return (
        <>
            <FButton
                color={'primary'}
                size={'btn-lg'}
                onClick={() => setOpen(true)}
            >
                Открыть модальное окно
            </FButton>
            <FDialog {...args} closeButtonBackPage={setOpen}>
                <FDialogHeader title={'Это диалоговое окно'} handleClose={() => setOpen(false)}/>
                <FDialogBody scroll={true}>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi cum, ea eius
                        fugit incidunt nulla rerum veniam? A cumque deleniti dignissimos dolores eos excepturi
                        perferendis praesentium recusandae repudiandae vel.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi cum, ea eius
                        fugit incidunt nulla rerum veniam? A cumque deleniti dignissimos dolores eos excepturi
                        perferendis praesentium recusandae repudiandae vel.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi cum, ea eius
                        fugit incidunt nulla rerum veniam? A cumque deleniti dignissimos dolores eos excepturi
                        perferendis praesentium recusandae repudiandae vel.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi cum, ea eius
                        fugit incidunt nulla rerum veniam? A cumque deleniti dignissimos dolores eos excepturi
                        perferendis praesentium recusandae repudiandae vel.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi cum, ea eius
                        fugit incidunt nulla rerum veniam? A cumque deleniti dignissimos dolores eos excepturi
                        perferendis praesentium recusandae repudiandae vel.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi cum, ea eius
                        fugit incidunt nulla rerum veniam? A cumque deleniti dignissimos dolores eos excepturi
                        perferendis praesentium recusandae repudiandae vel.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi cum, ea eius
                        fugit incidunt nulla rerum veniam? A cumque deleniti dignissimos dolores eos excepturi
                        perferendis praesentium recusandae repudiandae vel.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi cum, ea eius
                        fugit incidunt nulla rerum veniam? A cumque deleniti dignissimos dolores eos excepturi
                        perferendis praesentium recusandae repudiandae vel.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi cum, ea eius
                        fugit incidunt nulla rerum veniam? A cumque deleniti dignissimos dolores eos excepturi
                        perferendis praesentium recusandae repudiandae vel.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi cum, ea eius
                        fugit incidunt nulla rerum veniam? A cumque deleniti dignissimos dolores eos excepturi
                        perferendis praesentium recusandae repudiandae vel.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi cum, ea eius
                        fugit incidunt nulla rerum veniam? A cumque deleniti dignissimos dolores eos excepturi
                        perferendis praesentium recusandae repudiandae vel.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi cum, ea eius
                        fugit incidunt nulla rerum veniam? A cumque deleniti dignissimos dolores eos excepturi
                        perferendis praesentium recusandae repudiandae vel.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi cum, ea eius
                        fugit incidunt nulla rerum veniam? A cumque deleniti dignissimos dolores eos excepturi
                        perferendis praesentium recusandae repudiandae vel.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi cum, ea eius
                        fugit incidunt nulla rerum veniam? A cumque deleniti dignissimos dolores eos excepturi
                        perferendis praesentium recusandae repudiandae vel.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi cum, ea eius
                        fugit incidunt nulla rerum veniam? A cumque deleniti dignissimos dolores eos excepturi
                        perferendis praesentium recusandae repudiandae vel.
                    </p>
                </FDialogBody>
                <FDialogFooter>
                    <FStack direction={'row'} spacing={2}>
                        <FButton color={'primary'}>Сохранить</FButton>
                        <FButton color={'danger'} onClick={() => setOpen(false)}>
                            Закрыть
                        </FButton>
                    </FStack>
                </FDialogFooter>
            </FDialog>
        </>
    );
};

export const Default = Dialog.bind({});

Default.args = {
    id: 'dialog-id',
    className: 'dialog-className',
    st: {},
    width: 'lg',
    openAndClose: true,
};
