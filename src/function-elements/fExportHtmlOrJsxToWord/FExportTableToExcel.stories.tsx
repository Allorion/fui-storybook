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
import fExportHtmlOrJsxToWord, {IfExportHtmlOrJsxToWord} from "./fExportHtmlOrJsxToWord";
import {fAlert} from "../../function-elements";
import FStack from "../../material/FStack";
import FPaper from "../../material/FPaper";

export default {
    title: 'Function Elements/fExportHtmlOrJsxToWord',
    tags: ['autodocs'],
} satisfies Meta<typeof fExportHtmlOrJsxToWord>;

const Template: StoryFn<IfExportHtmlOrJsxToWord> = (args) => {
    return (
        <React.Fragment>
            <FButton
                onClick={() => {
                    fExportHtmlOrJsxToWord(args).then(result => {
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
            <div id={`${args.divId !== undefined ? args.divId : ''}`}>
                <FTable id={`${args.tableId !== undefined ? args.tableId : ''}`}>
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
                <FPaper>
                    <span>
                    {`onClick={() => {
                        fExportHtmlOrJsxToWord({tableId: 'test-export-table', fileName: 'testExport'}).then(result => {
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
                </FPaper>
                <FPaper>
                    <p>asdsadasjasduudiafdguashydoaghdyasgyasy</p>
                </FPaper>
            </div>
        </React.Fragment>
    )
};

export const TableId = Template.bind({});

TableId.args = {
    fileName: 'testExport',
    tableId: 'test-export-table',
    format: "A4",
    orientation: 'landscape'
};

export const DivId = Template.bind({});

DivId.args = {
    fileName: 'testExport',
    divId: 'test-div-export-table',
    format: "A4",
    orientation: 'landscape'
};

const HtmlCodeTemplate: StoryFn<IfExportHtmlOrJsxToWord> = (args) => {
    return (
        <React.Fragment>
            <FStack direction={'column'} spacing={2}>
                <FButton
                    onClick={() => {
                        fExportHtmlOrJsxToWord(args).then(result => {
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
                <span>
                    В jsxElement необходимо передать значение с типом JSX.Element внутри обязательно должны находиться теги таблицы
                    можно использовать помимо стандартных html тегов, теги FUI. Можно передавать несколько таблиц, обязательное условие
                    они должны быть объедены в общий тег. Можно передавать просто текст, но он также должен быть оформлен в виде таблицы
                </span>
                <h5>Пример jsxElement</h5>
                <span>
                    {`<>
            <h1>Тут заголовок формы от можно использовать h1-h5</h1>
            <br/>
            <span>Тут текст в теге span</span>
            <br/>
            <p>Тут текст в теге p</p>
            <br/>
            <span>чтобы сделать отступ в одну строку можно использовать тег br</span>
            <br/>
            <FTable>
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
            <br/>
            <FTable>
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
        </>`}
                </span>
            </FStack>
        </React.Fragment>
    )
};

export const TableHTML = HtmlCodeTemplate.bind({});

TableHTML.args = {
    fileName: 'testExport',
    jsxElement: (
        <>
            <h1>Тут заголовок формы от можно использовать h1-h5</h1>
            <br/>
            <span>Тут текст в теге span</span>
            <br/>
            <p>Тут текст в теге p</p>
            <br/>
            <span>чтобы сделать отступ в одну строку можно использовать тег br</span>
            <br/>
            <FTable>
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
            <br/>
            <FTable>
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
        </>
    )
};