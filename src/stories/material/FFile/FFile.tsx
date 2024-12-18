import { FC } from 'react';

import FCloseIcon from "@icons/FCloseIcon";

import FStack from '@material/FStack';

export interface IFFile {
    id?: string,
    className?: string,
    st?: React.CSSProperties,
    handleDelete?: () => void,
    name: string
}

const FFile: FC<IFFile> = ({
    id,
    className,
    st,
    handleDelete,
    name
}) => {
    return (
        <FStack direction={'row'} spacing={1} className={className} id={id} st={st}>
            <svg className="svg-icon text-primary" focusable="false" role="img" viewBox="0 0 24 24">
                <path d="M15 16H9a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2zm-6-2h3a1 1 0 0 0 0-2H9a1 1 0 0 0 0 2z" />
                <path
                    d="M19.74 8.33l-5.44-6a1 1 0 0 0-.74-.33h-7A2.53 2.53 0 0 0 4 4.5v15A2.53 2.53 0 0 0 6.56 22h10.88A2.53 2.53 0 0 0 20 19.5V9a1 1 0 0 0-.26-.67zM14 5l2.74 3h-2a.79.79 0 0 1-.74-.85V5zm3.44 15H6.56a.532.532 0 0 1-.56-.5v-15a.53.53 0 0 1 .56-.5H12v3.15A2.79 2.79 0 0 0 14.71 10H18v9.5a.53.53 0 0 1-.56.5z" />
            </svg>
            <FStack direction={'row'} alignItems={'center'} st={{ width: '100%' }}>
                <span>{name}</span>
                <FCloseIcon
                    size={20}
                    handleClose={handleDelete}
                    st={{
                        width: '15px',
                        height: '15px',
                        marginLeft: '16px'
                    }}
                />
            </FStack>
        </FStack>
    );
};

export default FFile;
