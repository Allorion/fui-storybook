import {jsxToHtml} from "./dop-function/jsxToHtml";
import {XLSXUni} from "./dop-function/export-excel/core";

export interface IfExportTableToExcel {
    tableId?: string,
    fileName: string,
    jsxElement?: JSX.Element
}

const fExportTableToExcel = async ({tableId, fileName, jsxElement}: IfExportTableToExcel) => {

    if (jsxElement === undefined && tableId !== undefined) {

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
    } else if (jsxElement !== undefined) {

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
    } else {
        return false
    }
};

export default fExportTableToExcel