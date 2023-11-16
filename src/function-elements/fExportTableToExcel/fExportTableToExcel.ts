import {jsxToHtml} from "./dop-function/jsxToHtml";
import {XLSXUni} from "./dop-function/export-excel/core";

export interface IfExportTableToExcel {
    tableId?: string,
    divId?: string,
    fileName: string,
    jsxElement?: JSX.Element
}

const fExportTableToExcel = async ({tableId, fileName, jsxElement, divId}: IfExportTableToExcel) => {

    if (tableId !== undefined && jsxElement === undefined && divId === undefined) {

        const htmlTable = document.getElementById(tableId);
        if (htmlTable) {
            const container = document.createElement('div');
            const copiedElement = htmlTable.cloneNode(true); // Клонируем элемент
            container.appendChild(copiedElement); // Добавляем клонированный элемент в блок назначения

            let file: XLSXUni = XLSXUni.exportDOMToXLSX(container);
            file.save(`${fileName}.xlsx`);
            return true
        } else {
            return false
        }
    } else if (jsxElement !== undefined && divId === undefined && tableId === undefined) {

        let status: boolean = false

        await jsxToHtml(jsxElement).then((element) => {
            if (element) {
                let file: XLSXUni = XLSXUni.exportDOMToXLSX(element);
                file.save(`${fileName}.xlsx`);
                status = true
            } else {
                status = true
            }
        });
        return status
    } else if (divId !== undefined && jsxElement === undefined && tableId === undefined) {

        const divBlock: HTMLElement | null = document.getElementById(divId);

        if (divBlock !== null) {

            const container = document.createElement('div');

            divBlock.querySelectorAll('span, p, br, p, table').forEach(opt => {
                const copiedElement = opt.cloneNode(true); // Клонируем элемент
                container.appendChild(copiedElement); // Добавляем клонированный элемент в блок назначения
            })

            let file: XLSXUni = XLSXUni.exportDOMToXLSX(container);

            file.save(`${fileName}.xlsx`);

            return true
        } else {
            return false
        }
    } else {
        return false
    }
};

export default fExportTableToExcel