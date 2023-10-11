import React, {useState} from 'react';

import {Meta, StoryFn} from '@storybook/react';

import 'bootstrap/dist/css/bootstrap.css';
import FDialog, {IFDialog} from "../../../../fui/src/material/Dialog/FDialog/FDialog";
import FButton from "../../../../fui/src/material/FButton/FButton";
import FDialogHeader from "../../../../fui/src/material/Dialog/FDialogHeader/FDialogHeader";
import FDialogBody from "../../../../fui/src/material/Dialog/FDialogBody/FDialogBody";
import FDialogFooter from "../../../../fui/src/material/Dialog/FDialogFooter/FDialogFooter";
import FStack from "../../../../fui/src/material/FStack/FStack";

export default {
    title: 'Components/FEEDBACK/FDialog',
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
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate dolor eveniet explicabo laboriosam maxime minus non placeat porro vel veritatis.
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
