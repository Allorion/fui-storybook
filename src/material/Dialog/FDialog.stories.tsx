import React from 'react';

import {ComponentMeta, Story} from '@storybook/react';

import "bootstrap/dist/css/bootstrap.css"
import FDialog from "./FDialog";
import {IFDialog} from "./FDialog/FDialog";
import FDialogHeader from "./FDialogHeader";
import FDialogBody from "./FDialogBody";
import FDialogFooter from "./FDialogFooter";
import {FButton, FStack} from "../index";
import "./style/FDialog.stories.css"

export default {
    title: 'FMaterial UI-Kit/FDialog',
    comment: FDialog,
} as ComponentMeta<typeof FDialog>;

const Dialog: Story<IFDialog> = (args) => {

    return (
        <FDialog {...args} >
            <FDialogHeader
                title={'Это диалоговое окно'}
                handleClose={() => {}}
            />
            <FDialogBody scroll={true}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi cum, ea eius fugit
                    incidunt nulla rerum veniam? A cumque deleniti dignissimos dolores eos excepturi perferendis
                    praesentium recusandae repudiandae vel.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi cum, ea eius fugit
                    incidunt nulla rerum veniam? A cumque deleniti dignissimos dolores eos excepturi perferendis
                    praesentium recusandae repudiandae vel.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi cum, ea eius fugit
                    incidunt nulla rerum veniam? A cumque deleniti dignissimos dolores eos excepturi perferendis
                    praesentium recusandae repudiandae vel.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi cum, ea eius fugit
                    incidunt nulla rerum veniam? A cumque deleniti dignissimos dolores eos excepturi perferendis
                    praesentium recusandae repudiandae vel.
                </p><p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi cum, ea eius fugit
                incidunt nulla rerum veniam? A cumque deleniti dignissimos dolores eos excepturi perferendis
                praesentium recusandae repudiandae vel.
            </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi cum, ea eius fugit
                    incidunt nulla rerum veniam? A cumque deleniti dignissimos dolores eos excepturi perferendis
                    praesentium recusandae repudiandae vel.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi cum, ea eius fugit
                    incidunt nulla rerum veniam? A cumque deleniti dignissimos dolores eos excepturi perferendis
                    praesentium recusandae repudiandae vel.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi cum, ea eius fugit
                    incidunt nulla rerum veniam? A cumque deleniti dignissimos dolores eos excepturi perferendis
                    praesentium recusandae repudiandae vel.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi cum, ea eius fugit
                    incidunt nulla rerum veniam? A cumque deleniti dignissimos dolores eos excepturi perferendis
                    praesentium recusandae repudiandae vel.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi cum, ea eius fugit
                    incidunt nulla rerum veniam? A cumque deleniti dignissimos dolores eos excepturi perferendis
                    praesentium recusandae repudiandae vel.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi cum, ea eius fugit
                    incidunt nulla rerum veniam? A cumque deleniti dignissimos dolores eos excepturi perferendis
                    praesentium recusandae repudiandae vel.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi cum, ea eius fugit
                    incidunt nulla rerum veniam? A cumque deleniti dignissimos dolores eos excepturi perferendis
                    praesentium recusandae repudiandae vel.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi cum, ea eius fugit
                    incidunt nulla rerum veniam? A cumque deleniti dignissimos dolores eos excepturi perferendis
                    praesentium recusandae repudiandae vel.
                </p><p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi cum, ea eius fugit
                incidunt nulla rerum veniam? A cumque deleniti dignissimos dolores eos excepturi perferendis
                praesentium recusandae repudiandae vel.
            </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi cum, ea eius fugit
                    incidunt nulla rerum veniam? A cumque deleniti dignissimos dolores eos excepturi perferendis
                    praesentium recusandae repudiandae vel.
                </p>


            </FDialogBody>
            <FDialogFooter>
                <FStack direction={'row'} spacing={2}>
                    <FButton color={'primary'}>Сохранить</FButton>
                    <FButton color={'danger'} onClick={() => {}}>Закрыть</FButton>
                </FStack>
            </FDialogFooter>
        </FDialog>
    )
}


export const Default = Dialog.bind({});

Default.args = {
    id: 'dialog-id',
    className: 'dialog-className',
    // st: {
    //     width: '300px'
    // },
    openAndClose: true
};
