import React from 'react';
// import "./FButton-story.css";
import 'bootstrap/dist/css/bootstrap.css';

import {Meta, StoryFn} from '@storybook/react';

import FButton, {IFButton} from './FButton';

export default {
    title: 'FMaterial UI-Kit/FButton',
    tags: ['autodocs'],
    component: FButton,
} satisfies Meta<typeof FButton>;

const Template: StoryFn<IFButton> = (args) => <FButton {...args}>Button</FButton>;

export const Default = Template.bind({});

Default.args = {
    id: 'stack-id',
    className: 'stack-className',
    st: {marginTop: '20px'},
};

export const onClick: StoryFn<IFButton> = () => (
    <FButton onClick={() => alert('Hello World!')}>Button</FButton>
);

export const Variant: StoryFn<IFButton> = () => (
    <div className={'stack'}>
        <FButton variant={'contained'}>contained</FButton>
        <FButton variant={'default'}>outlined</FButton>
    </div>
);

export const ColorContained: StoryFn<IFButton> = () => (
    <div className={'stack'}>
        <FButton color={'primary'}>primary</FButton>
        <FButton color={'secondary'}>secondary</FButton>
        <FButton color={'success'}>success</FButton>
        <FButton color={'danger'}>danger</FButton>
        <FButton color={'warning'}>warning</FButton>
        <FButton color={'info'}>info</FButton>
        <FButton color={'light'}>light</FButton>
        <FButton color={'dark'}>dark</FButton>
        <FButton color={'link'}>link</FButton>
    </div>
);

export const ColorDefault: StoryFn<IFButton> = () => (
    <div className={'stack'}>
        <FButton variant={'default'} color={'primary'}>
            primary
        </FButton>
        <FButton variant={'default'} color={'secondary'}>
            secondary
        </FButton>
        <FButton variant={'default'} color={'success'}>
            success
        </FButton>
        <FButton variant={'default'} color={'danger'}>
            danger
        </FButton>
        <FButton variant={'default'} color={'warning'}>
            warning
        </FButton>
        <FButton variant={'default'} color={'info'}>
            info
        </FButton>
        <FButton variant={'default'} color={'light'}>
            light
        </FButton>
        <FButton variant={'default'} color={'dark'}>
            dark
        </FButton>
        <FButton variant={'default'} color={'link'}>
            link
        </FButton>
    </div>
);

export const Size: StoryFn<IFButton> = () => (
    <div className={'stack'}>
        <FButton size={'btn-lg'}>btn-lg</FButton>
        <FButton size={'btn-xs'}>btn-xs</FButton>
        <FButton size={'btn-sm'}>btn-sm</FButton>
    </div>
);

export const Disabled: StoryFn<IFButton> = () => (
    <div className={'stack'}>
        <FButton disabled={true}>true</FButton>
        <FButton disabled={false}>false</FButton>
    </div>
);

export const FullWidth: StoryFn<IFButton> = () => <FButton fullWidth={true}>fullWidth</FButton>;
