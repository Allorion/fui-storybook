import * as XLSX from 'xlsx';
import {jsxToHtml} from "./dop-function/jsxToHtml";

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

            // Добавьте лист к книге
            XLSX.utils.book_append_sheet(workbook, worksheet, 'Лист 1');

            // Генерируйте XLSX-файл
            XLSX.writeFile(workbook, `${fileName}.xlsx`);
            return true
        } else {
            return false
        }
    } else if (jsxElement !== undefined){
        let status: boolean = false
        await jsxToHtml(jsxElement).then((table) => {
            if (table) {
                // Создается временный элемент DOM
                const tempElement = document.createElement('div');

                // В цикле добавляем во временный элемент DOM полученные таблицы
                table.forEach(opt => {

                    // Вставьте HTML-код таблиц во временный DOM элемент
                    tempElement.innerHTML += opt.outerHTML

                })

                // Создайте лист XLSX из объединенной HTML-таблицы
                const worksheet = XLSX.utils.table_to_sheet(tempElement, { raw: true });

                worksheet['!cols'] = [{wch: 15}, {wch: 15}, {wch: 15}]; // Настройте ширину столбцов
                worksheet['!rows'] = [{hpt: 15}]; // Настройте высоту строк

                // Создайте новую книгу XLSX
                const workbook = XLSX.utils.book_new();

                // Добавьте лист к книге
                XLSX.utils.book_append_sheet(workbook, worksheet, 'Лист 1');

                // Генерируйте XLSX-файл
                XLSX.writeFile(workbook, `${fileName}.xlsx`);
                status =  true
            } else {
                status =  true
            }
        });
        return status
    } else {
        return false
    }
};

export default fExportTableToExcel