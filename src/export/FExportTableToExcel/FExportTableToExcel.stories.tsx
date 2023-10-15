import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import {Meta, StoryFn} from '@storybook/react';
import FExportTableToExcel, {IFExportTableToExcel} from "./FExportTableToExcel";
import FTable from "../../material/TableComponents/FTable";
import FTableHead from "../../material/TableComponents/FTableHead";
import FTableHeaderCell from "../../material/TableComponents/FTableHeaderCell";
import FTableBody from "../../material/TableComponents/FTableBody";
import FTableDataCell from "../../material/TableComponents/FTableDataCell";
import FTableRow from "../../material/TableComponents/FTableRow";


export default {
    title: 'EXPORT/FExportTableToExcel',
    tags: ['autodocs'],
    component: FExportTableToExcel,
} satisfies Meta<typeof FExportTableToExcel>;

const Template: StoryFn<IFExportTableToExcel> = (args) => {
    return (
        <React.Fragment>
            <FExportTableToExcel {...args}/>
            <FTable id={'test-export-table'}>
                <FTableHead>
                    <FTableRow>
                        <FTableHeaderCell>№ п/п</FTableHeaderCell>
                        <FTableHeaderCell>Имя</FTableHeaderCell>
                        <FTableHeaderCell>Возраст</FTableHeaderCell>
                    </FTableRow>
                </FTableHead>
                <FTableBody>
                    <FTableRow>
                         <FTableDataCell>1</FTableDataCell>
                         <FTableDataCell>Влад</FTableDataCell>
                         <FTableDataCell>23</FTableDataCell>
                    </FTableRow>
                    <FTableRow>
                        <FTableDataCell>2</FTableDataCell>
                        <FTableDataCell>Стас</FTableDataCell>
                        <FTableDataCell>24</FTableDataCell>
                    </FTableRow>
                    <FTableRow>
                        <FTableDataCell>3</FTableDataCell>
                        <FTableDataCell>Ваня</FTableDataCell>
                        <FTableDataCell>24</FTableDataCell>
                    </FTableRow>
                </FTableBody>
            </FTable>
        </React.Fragment>
    )
};

export const Default = Template.bind({});

Default.args = {
    id: 'FExportTableToExcel-id',
    className: 'FExportTableToExcel-className',
    st: {marginTop: '20px'},
    fileName: 'testExport',
    idTable: 'test-export-table',
    label: 'Экспорт Excel'
};

export const onClick: StoryFn<IFExportTableToExcel> = () => (
    <FExportTableToExcel
        onClick={() => alert('Hello World!')}
        fileName={'testExport'}
        idTable={'test-export-table'}
        label={'Export'}
    />
);

export const Variant: StoryFn<IFExportTableToExcel> = () => (
    <div className={'stack'}>
        <FExportTableToExcel
            variant={'contained'}
            fileName={'testExport'}
            idTable={'test-export-table'}
            label={'contained'}
        />
        <FExportTableToExcel
            variant={'default'}
            fileName={'testExport'}
            idTable={'test-export-table'}
            label={'default'}
        />
    </div>
);

export const ColorContained: StoryFn<IFExportTableToExcel> = () => (
    <div className={'stack'}>
        <FExportTableToExcel
            fileName={'testExport'}
            idTable={'test-export-table'}
            color={'primary'}
            label={'primary'}
        />
        <FExportTableToExcel
            fileName={'testExport'}
            idTable={'test-export-table'}
            color={'secondary'}
            label={'secondary'}
        />
        <FExportTableToExcel
            fileName={'testExport'}
            idTable={'test-export-table'}
            color={'success'}
            label={'success'}
        />
        <FExportTableToExcel
            fileName={'testExport'}
            idTable={'test-export-table'}
            color={'danger'}
            label={'danger'}
        />
        <FExportTableToExcel
            fileName={'testExport'}
            idTable={'test-export-table'}
            color={'warning'}
            label={'warning'}
        />
        <FExportTableToExcel
            fileName={'testExport'}
            idTable={'test-export-table'}
            color={'info'}
            label={'info'}
        />
        <FExportTableToExcel
            fileName={'testExport'}
            idTable={'test-export-table'}
            color={'light'}
            label={'light'}
        />
        <FExportTableToExcel
            fileName={'testExport'}
            idTable={'test-export-table'}
            color={'dark'}
            label={'dark'}
        />
        <FExportTableToExcel
            fileName={'testExport'}
            idTable={'test-export-table'}
            color={'link'}
            label={'link'}
        />
    </div>
);

export const ColorDefault: StoryFn<IFExportTableToExcel> = () => (
    <div className={'stack'}>

        <FExportTableToExcel
            fileName={'testExport'}
            idTable={'test-export-table'}
            variant={'default'}
            color={'primary'}
            label={'primary'}
        />
        <FExportTableToExcel
            fileName={'testExport'}
            idTable={'test-export-table'}
            variant={'default'}
            color={'secondary'}
            label={'secondary'}
        />
        <FExportTableToExcel
            fileName={'testExport'}
            idTable={'test-export-table'}
            variant={'default'}
            color={'success'}
            label={'success'}
        />
        <FExportTableToExcel
            fileName={'testExport'}
            idTable={'test-export-table'}
            variant={'default'}
            color={'danger'}
            label={'danger'}
        />
        <FExportTableToExcel
            fileName={'testExport'}
            idTable={'test-export-table'}
            variant={'default'}
            color={'warning'}
            label={'warning'}
        />
        <FExportTableToExcel
            fileName={'testExport'}
            idTable={'test-export-table'}
            variant={'default'}
            color={'info'}
            label={'info'}
        />
        <FExportTableToExcel
            fileName={'testExport'}
            idTable={'test-export-table'}
            variant={'default'}
            color={'light'}
            label={'light'}
        />
        <FExportTableToExcel
            fileName={'testExport'}
            idTable={'test-export-table'}
            variant={'default'}
            color={'dark'}
            label={'dark'}
        />
        <FExportTableToExcel
            fileName={'testExport'}
            idTable={'test-export-table'}
            variant={'default'}
            color={'link'}
            label={'link'}
        />
    </div>
);

export const Size: StoryFn<IFExportTableToExcel> = () => (
    <div className={'stack'}>
        <FExportTableToExcel
            fileName={'testExport'}
            idTable={'test-export-table'}
            size={'btn-lg'}
            label={'btn-lg'}
        />
        <FExportTableToExcel
            fileName={'testExport'}
            idTable={'test-export-table'}
            size={'btn-xs'}
            label={'btn-xs'}
        />
        <FExportTableToExcel
            fileName={'testExport'}
            idTable={'test-export-table'}
            size={'btn-sm'}
            label={'btn-sm'}
        />
    </div>
);

export const Disabled: StoryFn<IFExportTableToExcel> = () => (
    <div className={'stack'}>
        <FExportTableToExcel
            fileName={'testExport'}
            idTable={'test-export-table'}
            disabled={true}
            label={'btn-sm'}
        />
        <FExportTableToExcel
            fileName={'testExport'}
            idTable={'test-export-table'}
            disabled={false}
            label={'btn-sm'}
        />
    </div>
);

export const FullWidth: StoryFn<IFExportTableToExcel> = () => {
    return (
        <div className={'stack'}>
            <FExportTableToExcel
                fileName={'testExport'}
                idTable={'test-export-table'}
                fullWidth={true}
                label={'btn-sm'}
            />
            <FExportTableToExcel
                fileName={'testExport'}
                idTable={'test-export-table'}
                fullWidth={false}
                label={'btn-sm'}
            />
        </div>
    )
};
