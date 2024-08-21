import { Meta, StoryFn } from '@storybook/react';



import { FStack } from '@material/index';
import FTrashIcon, { IFTrashIcon } from './FTrashIcon';

export default {
    title: 'Icons/FTrashIcon',
    tags: ['autodocs'],
    component: FTrashIcon,
} satisfies Meta<typeof FTrashIcon>;

const Template: StoryFn<IFTrashIcon> = (args) => {
    return <FTrashIcon {...args} />;
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

export const ColorContained: StoryFn<IFTrashIcon> = () => (
    <FStack spacing={2} direction={'row'}>
        <FTrashIcon color={'primary'} />
        <FTrashIcon color={'secondary'} />
        <FTrashIcon color={'success'} />
        <FTrashIcon color={'danger'} />
        <FTrashIcon color={'warning'} />
        <FTrashIcon color={'info'} />
        <FTrashIcon color={'light'} />
        <FTrashIcon color={'dark'} />
        <FTrashIcon color={'link'} />
    </FStack>
);
