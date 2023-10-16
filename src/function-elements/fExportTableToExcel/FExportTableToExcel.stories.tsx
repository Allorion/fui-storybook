import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Meta, StoryFn} from '@storybook/react';
import FTable from "../../material/TableComponents/FTable";
import FTableHead from "../../material/TableComponents/FTableHead";
import FTableHeaderCell from "../../material/TableComponents/FTableHeaderCell";
import FTableBody from "../../material/TableComponents/FTableBody";
import FTableDataCell from "../../material/TableComponents/FTableDataCell";
import FTableRow from "../../material/TableComponents/FTableRow";
import FButton from "../../material/FButton";
import fExportTableToExcel, {IfExportTableToExcel} from "./fExportTableToExcel";
import {fAlert} from "../../function-elements";


export default {
    title: 'Function Elements/fExportTableToExcel',
    tags: ['autodocs'],
} satisfies Meta<typeof fExportTableToExcel>;

const Template: StoryFn<IfExportTableToExcel> = (args) => {
    return (
        <React.Fragment>
            <FButton
                onClick={() => {
                    fExportTableToExcel({tableId: 'test-export-table', fileName: 'testExport'}).then(result => {
                        if (result) {
                            fAlert({
                                title: 'Файл создан',
                                variant: "success",
                                body: 'Таблица добавлена в Excel'
                            })
                        } else {
                            fAlert({
                                title: 'Файл не создан',
                                variant: "error",
                                body: 'Таблица не добавлена в Excel'
                            })
                        }
                    })
                }}
            >
                Экспортировать в Excel
            </FButton>
            <FTable id={'test-export-table'}>
                <FTableHead>
                    <FTableRow>
                        <FTableHeaderCell row={2}>№ п/п</FTableHeaderCell>
                        <FTableHeaderCell col={2}>Разработчики</FTableHeaderCell>
                    </FTableRow>
                    <FTableRow>
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
            <span>
                {`onClick={() => {
                    fExportTableToExcel({tableId: 'test-export-table', fileName: 'testExport'}).then(result => {
                        if (result) {
                            fAlert({
                                title: 'Файл создан',
                                variant: "success",
                                body: 'Таблица добавлена в Excel'
                            })
                        } else {
                            fAlert({
                                title: 'Файл не создан',
                                variant: "error",
                                body: 'Таблица не добавлена в Excel'
                            })
                        }
                    })
                }}`}
            </span>
        </React.Fragment>
    )
};

export const Default = Template.bind({});

Default.args = {
    fileName: 'testExport',
    tableId: 'test-export-table',
};