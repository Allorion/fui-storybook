import React from 'react';

import {ComponentMeta, Story} from '@storybook/react';

import "bootstrap/dist/css/bootstrap.css"
import "./FTable/FTable.css"
import {FTable, FTableBody, FTableDataCell, FTableHead, FTableHeaderCell, FTableRow} from "../index";
import {IFTable} from "./FTable/FTable";
import {IFTableHead} from "./FTableHead/FTableHead";
import {IFTableHeaderCell} from "./FTableHeaderCell/FTableHeaderCell";
import {IFTableDataCell} from "./FTableDataCell/FTableDataCell";
import {IFTableBody} from "./FTableBody/FTableBody";
import {IFTableRow} from "./FTableRow/FTableRow";


export default {
    title: 'FMaterial UI-Kit/FTable',
    comment: FTable,
} as ComponentMeta<typeof FTable>;

const Table: Story<IFTable> = (args) => (
    <FTable {...args}>
        <FTableHead>
            <FTableRow>
                <FTableHeaderCell>Дата</FTableHeaderCell>
                <FTableHeaderCell>Тип</FTableHeaderCell>
                <FTableHeaderCell>Наименование</FTableHeaderCell>
                <FTableHeaderCell>Номер</FTableHeaderCell>
            </FTableRow>
        </FTableHead>
        <FTableBody>
            <FTableRow>
                <FTableDataCell>28.08.20 16:08</FTableDataCell>
                <FTableDataCell>Информация</FTableDataCell>
                <FTableDataCell>Не доклады БВУ на 8:00 по водохозяйственной обстановке</FTableDataCell>
                <FTableDataCell>78786575676</FTableDataCell>
            </FTableRow>
            <FTableRow>
                <FTableDataCell>28.08.20 16:08</FTableDataCell>
                <FTableDataCell>Информация</FTableDataCell>
                <FTableDataCell>Не доклады БВУ на 8:00 по водохозяйственной обстановке</FTableDataCell>
                <FTableDataCell>78786575676</FTableDataCell>
            </FTableRow>
            <FTableRow>
                <FTableDataCell>28.08.20 16:08</FTableDataCell>
                <FTableDataCell>Информация</FTableDataCell>
                <FTableDataCell>Не доклады БВУ на 8:00 по водохозяйственной обстановке</FTableDataCell>
                <FTableDataCell>78786575676</FTableDataCell>
            </FTableRow>
        </FTableBody>
    </FTable>
)


export const Default = Table.bind({});

Default.args = {
    id: 'table-id',
    className: 'table-className',
    st: {
        margin: '8px'
    },
    onClick: () => console.log('Таблица')
};

const TableHead: Story<IFTableHead> = (args) => (
    <FTable>
        <FTableHead {...args}>
            <FTableRow>
                <FTableHeaderCell>Дата</FTableHeaderCell>
                <FTableHeaderCell>Тип</FTableHeaderCell>
                <FTableHeaderCell>Наименование</FTableHeaderCell>
                <FTableHeaderCell>Номер</FTableHeaderCell>
            </FTableRow>
        </FTableHead>
        <FTableBody>
            <FTableRow>
                <FTableDataCell>28.08.20 16:08</FTableDataCell>
                <FTableDataCell>Информация</FTableDataCell>
                <FTableDataCell>Не доклады БВУ на 8:00 по водохозяйственной обстановке</FTableDataCell>
                <FTableDataCell>78786575676</FTableDataCell>
            </FTableRow>
            <FTableRow>
                <FTableDataCell>28.08.20 16:08</FTableDataCell>
                <FTableDataCell>Информация</FTableDataCell>
                <FTableDataCell>Не доклады БВУ на 8:00 по водохозяйственной обстановке</FTableDataCell>
                <FTableDataCell>78786575676</FTableDataCell>
            </FTableRow>
            <FTableRow>
                <FTableDataCell>28.08.20 16:08</FTableDataCell>
                <FTableDataCell>Информация</FTableDataCell>
                <FTableDataCell>Не доклады БВУ на 8:00 по водохозяйственной обстановке</FTableDataCell>
                <FTableDataCell>78786575676</FTableDataCell>
            </FTableRow>
        </FTableBody>
    </FTable>
)


export const DefaultTableHead = TableHead.bind({});

DefaultTableHead.args = {
    id: 'table-head-id',
    className: 'table-head-className',
    st: {
        backgroundColor: '#fff6f6'
    },
    onClick: () => console.log('Заголовок таблицы')
};

const TableBody: Story<IFTableBody> = (args) => (
    <FTable>
        <FTableHead>
            <FTableRow>
                <FTableHeaderCell>Дата</FTableHeaderCell>
                <FTableHeaderCell>Тип</FTableHeaderCell>
                <FTableHeaderCell>Наименование</FTableHeaderCell>
                <FTableHeaderCell>Номер</FTableHeaderCell>
            </FTableRow>
        </FTableHead>
        <FTableBody {...args}>
            <FTableRow>
                <FTableDataCell>28.08.20 16:08</FTableDataCell>
                <FTableDataCell>Информация</FTableDataCell>
                <FTableDataCell>Не доклады БВУ на 8:00 по водохозяйственной обстановке</FTableDataCell>
                <FTableDataCell>78786575676</FTableDataCell>
            </FTableRow>
            <FTableRow>
                <FTableDataCell>28.08.20 16:08</FTableDataCell>
                <FTableDataCell>Информация</FTableDataCell>
                <FTableDataCell>Не доклады БВУ на 8:00 по водохозяйственной обстановке</FTableDataCell>
                <FTableDataCell>78786575676</FTableDataCell>
            </FTableRow>
            <FTableRow>
                <FTableDataCell>28.08.20 16:08</FTableDataCell>
                <FTableDataCell>Информация</FTableDataCell>
                <FTableDataCell>Не доклады БВУ на 8:00 по водохозяйственной обстановке</FTableDataCell>
                <FTableDataCell>78786575676</FTableDataCell>
            </FTableRow>
        </FTableBody>
    </FTable>
)


export const DefaultTableBody = TableBody.bind({});

DefaultTableBody.args = {
    id: 'table-body-id',
    className: 'table-body-className',
    st: {
        backgroundColor: '#fff6f6'
    },
    onClick: () => console.log('Тело таблицы')
};

const TableRow: Story<IFTableRow> = (args) => (
    <FTable>
        <FTableHead>
            <FTableRow {...args}>
                <FTableHeaderCell>Дата</FTableHeaderCell>
                <FTableHeaderCell>Тип</FTableHeaderCell>
                <FTableHeaderCell>Наименование</FTableHeaderCell>
                <FTableHeaderCell>Номер</FTableHeaderCell>
            </FTableRow>
        </FTableHead>
        <FTableBody>
            <FTableRow {...args}>
                <FTableDataCell>28.08.20 16:08</FTableDataCell>
                <FTableDataCell>Информация</FTableDataCell>
                <FTableDataCell>Не доклады БВУ на 8:00 по водохозяйственной обстановке</FTableDataCell>
                <FTableDataCell>78786575676</FTableDataCell>
            </FTableRow>
            <FTableRow {...args}>
                <FTableDataCell>28.08.20 16:08</FTableDataCell>
                <FTableDataCell>Информация</FTableDataCell>
                <FTableDataCell>Не доклады БВУ на 8:00 по водохозяйственной обстановке</FTableDataCell>
                <FTableDataCell>78786575676</FTableDataCell>
            </FTableRow>
            <FTableRow {...args}>
                <FTableDataCell>28.08.20 16:08</FTableDataCell>
                <FTableDataCell>Информация</FTableDataCell>
                <FTableDataCell>Не доклады БВУ на 8:00 по водохозяйственной обстановке</FTableDataCell>
                <FTableDataCell>78786575676</FTableDataCell>
            </FTableRow>
        </FTableBody>
    </FTable>
)


export const DefaultTableRow = TableRow.bind({});

DefaultTableRow.args = {
    id: 'table-row-id',
    className: 'table-row-className',
    st: {
        backgroundColor: '#fff6f6'
    },
    onClick: () => console.log('Строка таблицы')
};

const TableHeaderCell: Story<IFTableHeaderCell> = (args) => (
    <FTable>
        <FTableHead>
            <FTableRow>
                <FTableHeaderCell {...args}>Дата</FTableHeaderCell>
                <FTableHeaderCell {...args}>Тип</FTableHeaderCell>
                <FTableHeaderCell {...args}>Наименование</FTableHeaderCell>
                <FTableHeaderCell {...args}>Номер</FTableHeaderCell>
            </FTableRow>
        </FTableHead>
        <FTableBody>
            <FTableRow>
                <FTableDataCell>28.08.20 16:08</FTableDataCell>
                <FTableDataCell>Информация</FTableDataCell>
                <FTableDataCell>Не доклады БВУ на 8:00 по водохозяйственной обстановке</FTableDataCell>
                <FTableDataCell>78786575676</FTableDataCell>
            </FTableRow>
            <FTableRow>
                <FTableDataCell>28.08.20 16:08</FTableDataCell>
                <FTableDataCell>Информация</FTableDataCell>
                <FTableDataCell>Не доклады БВУ на 8:00 по водохозяйственной обстановке</FTableDataCell>
                <FTableDataCell>78786575676</FTableDataCell>
            </FTableRow>
            <FTableRow>
                <FTableDataCell>28.08.20 16:08</FTableDataCell>
                <FTableDataCell>Информация</FTableDataCell>
                <FTableDataCell>Не доклады БВУ на 8:00 по водохозяйственной обстановке</FTableDataCell>
                <FTableDataCell>78786575676</FTableDataCell>
            </FTableRow>
        </FTableBody>
    </FTable>
)


export const DefaultTableHeaderCell = TableHeaderCell.bind({});

DefaultTableHeaderCell.args = {
    id: 'table-header-cell-id',
    className: 'table-header-cell-className',
    st: {
        backgroundColor: '#fff6f6'
    },
    onClick: () => console.log('Ячейка заголовка таблицы')
};

const TableDataCell: Story<IFTableDataCell> = (args) => (
    <FTable>
        <FTableHead>
            <FTableRow>
                <FTableHeaderCell>Дата</FTableHeaderCell>
                <FTableHeaderCell>Тип</FTableHeaderCell>
                <FTableHeaderCell>Наименование</FTableHeaderCell>
                <FTableHeaderCell>Номер</FTableHeaderCell>
            </FTableRow>
        </FTableHead>
        <FTableBody>
            <FTableRow>
                <FTableDataCell {...args}>28.08.20 16:08</FTableDataCell>
                <FTableDataCell {...args}>Информация</FTableDataCell>
                <FTableDataCell {...args}>Не доклады БВУ на 8:00 по водохозяйственной обстановке</FTableDataCell>
                <FTableDataCell {...args}>78786575676</FTableDataCell>
            </FTableRow>
        </FTableBody>
    </FTable>
)


export const DefaultTableDataCell = TableDataCell.bind({});

DefaultTableDataCell.args = {
    id: 'table-data-cell-id',
    className: 'table-data-cell-className',
    st: {
        backgroundColor: '#fff6f6'
    },
    onClick: () => console.log('Ячейка тела таблицы')
};
