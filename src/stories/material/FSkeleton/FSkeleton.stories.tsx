import { Meta, StoryFn } from '@storybook/react';


import "./FSkeletonStories.css"

import FSkeleton, { IFSkeleton } from './FSkeleton';

export default {
    title: 'Components/FEEDBACK/FSkeleton',
    tags: ['autodocs'],
    component: FSkeleton,
} satisfies Meta<typeof FSkeleton>;

const Progress: StoryFn<IFSkeleton> = (args) => {
    return (
        <FSkeleton {...args}>
            <div
                className={'circle test-block-fskeleton'}
                style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                }}
            >
                Круг
            </div>
            <div
                className={'rectangle test-block-fskeleton'}
                style={{
                    width: '128px',
                    height: '32px',
                }}
            >
                Прямоугольник
            </div>
            <span
                className={'span-el test-block-fskeleton'}
            >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aperiam cupiditate nemo optio quaerat quia quod sapiente, ullam veniam voluptatem.
            </span>
        </FSkeleton>
    );
};

export const Default = Progress.bind({});

Default.args = {
    enable: true,
}
