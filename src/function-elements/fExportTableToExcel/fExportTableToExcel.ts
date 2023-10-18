import * as XLSX from 'xlsx';
import {jsxToHtml} from "../../dop-function/jsxToHtml";

export interface IfExportTableToExcel {
    tableId?: string,
    fileName: string,
    jsxElement?: JSX.Element
}

const fExportTableToExcel = async ({tableId, fileName, jsxElement}: IfExportTableToExcel) => {

    if (jsxElement === undefined && tableId !== undefined) {

        const htmlTable = document.getElementById(tableId);

        if (htmlTable) {
            // Создайте книгу XLSX
            const workbook = XLSX.utils.book_new();

            // Создайте лист XLSX
            const worksheet = XLSX.utils.table_to_sheet(htmlTable, { raw: true });

            // Примените стиль к всей таблице
            worksheet['!cols'] = [{wch: 15}, {wch: 15}, {wch: 15}]; // Настройте ширину столбцов
            worksheet['!rows'] = [{hpt: 15}]; // Настройте высоту строк

            // Примените черные внешние и внутренние границы к таблице
            worksheet['!table'] = {
                border: {
                    top: {style: 'solid', color: '#000'}, // Черный цвет границ
                    bottom: {style: 'solid', color: '#000'},
                    left: {style: 'solid', color: '#000'},
                    right: {style: 'solid', color: '#000'},
                },
            };

            // Добавьте лист к книге
            XLSX.utils.book_append_sheet(workbook, worksheet, 'Лист 1');

            // Генерируйте XLSX-файл
            XLSX.writeFile(workbook, `${fileName}.xlsx`);
            return true
        } else {
            return false
        }
    } else if (jsxElement !== undefined){
        jsxToHtml(jsxElement).then((table) => {
            if (table) {

                // Создайте книгу XLSX
                const workbook = XLSX.utils.book_new();

                // Создайте лист XLSX
                const worksheet = XLSX.utils.table_to_sheet(table, { raw: true });

                // Примените стиль к всей таблице
                worksheet['!cols'] = [{wch: 15}, {wch: 15}, {wch: 15}]; // Настройте ширину столбцов
                worksheet['!rows'] = [{hpt: 15}]; // Настройте высоту строк

                // Примените черные внешние и внутренние границы к таблице
                worksheet['!table'] = {
                    border: {
                        top: {style: 'solid', color: '#000'}, // Черный цвет границ
                        bottom: {style: 'solid', color: '#000'},
                        left: {style: 'solid', color: '#000'},
                        right: {style: 'solid', color: '#000'},
                    },
                };

                // Добавьте лист к книге
                XLSX.utils.book_append_sheet(workbook, worksheet, 'Лист 1');

                // Генерируйте XLSX-файл
                XLSX.writeFile(workbook, `${fileName}.xlsx`);
                return true
            } else {
                return false
            }
        });

    } else {
        return false
    }
};

export default fExportTableToExcel