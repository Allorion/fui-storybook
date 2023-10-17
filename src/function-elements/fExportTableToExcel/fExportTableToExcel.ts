import * as XLSX from 'xlsx';
import ReactDOM from 'react-dom/client';

export interface IfExportTableToExcel {
    tableId: string,
    fileName: string,
    jsxElement?: JSX.Element
}

const fExportTableToExcel = async ({tableId, fileName, jsxElement}: IfExportTableToExcel) => {

    function jsxToHtml(element: JSX.Element): Promise<Element | null> {
        return new Promise((resolve) => {
            const container = document.createElement('div');
            const root = ReactDOM.createRoot(container);

            const observer = new MutationObserver((mutationsList) => {
                for (const mutation of mutationsList) {
                    if (mutation.addedNodes.length) {
                        // Проверяем добавление элементов с нужным ID
                        const table = container.querySelector(`#${tableId}`);
                        if (table) {
                            observer.disconnect(); // Отключаем наблюдателя
                            resolve(table);
                        }
                    }
                }
            });

            root.render(element);

            observer.observe(container, {childList: true, subtree: true});
        });
    }

    if (jsxElement === undefined) {

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
            XLSX.writeFile(workbook, `${fileName}.xlsx`);
            return true
        } else {
            return false
        }
    } else {
        jsxToHtml(jsxElement).then((table) => {
            if (table) {

                // Создайте книгу XLSX
                const workbook = XLSX.utils.book_new();

                // Создайте лист XLSX
                const worksheet = XLSX.utils.table_to_sheet(table);

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

    }
};

export default fExportTableToExcel