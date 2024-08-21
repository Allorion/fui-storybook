import { Meta, StoryFn } from '@storybook/react';



import { FStack } from '@material/index';
import FLoadIcon, { IFLoadIcon } from './FLoadIcon';

export default {
    title: 'Icons/FLoadIcon',
    tags: ['autodocs'],
    component: FLoadIcon,
} satisfies Meta<typeof FLoadIcon>;

const Template: StoryFn<IFLoadIcon> = (args) => {
    return <FLoadIcon {...args} />;
};

export const Default = Template.bind({});

Default.args = {
    id: 'trash-icon-id',
    className: 'trash-icon-className',
    st: { padding: '20px' },
    size: 64,
    handleClick: () => {
        alert('Клик');
    },
};

export const ColorContained: StoryFn<IFLoadIcon> = () => (
    <FStack spacing={2} direction={'row'}>
        <FLoadIcon color={'primary'} />
        <FLoadIcon color={'secondary'} />
        <FLoadIcon color={'success'} />
        <FLoadIcon color={'danger'} />
        <FLoadIcon color={'warning'} />
        <FLoadIcon color={'info'} />
        <FLoadIcon color={'light'} />
        <FLoadIcon color={'dark'} />
        <FLoadIcon color={'link'} />
    </FStack>
);
