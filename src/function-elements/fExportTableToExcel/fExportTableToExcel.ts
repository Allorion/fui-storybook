import * as XLSX from 'xlsx';

export interface IfExportTableToExcel {
    tableId: string,
    fileName: string
}

const fExportTableToExcel = async ({tableId, fileName}: IfExportTableToExcel) => {

    const htmlTable = document.getElementById(tableId);
    if (htmlTable) {
        // Создайте книгу XLSX
        const workbook = XLSX.utils.book_new();

        // Создайте лист XLSX
        const worksheet = XLSX.utils.table_to_sheet(htmlTable);

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
        XLSX.writeFile(workbook, `${fileName}ыы.xlsx`);
        return true
    } else {
        return false
    }

};

export default fExportTableToExcel
