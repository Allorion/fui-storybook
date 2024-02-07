import {XLSXUni} from "./dop-function/export-excel/core";
import {jsxToHtml} from "./dop-function/jsxToHtml";

export interface IfExportTableToExcel {
    tableId?: string,
    divId?: string,
    fileName: string,
    jsxElement?: string
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

        // try {
        //     const container = document.createElement('div');
        //
        //     container.innerHTML = jsxElement
        //
        //     const allElements: HTMLElement[] = Array.from(container.querySelectorAll('table, span, br, p, h1, h2, h3, h4, h5'));
        //
        //     const divBlock = document.createElement('div')
        //
        //     allElements.forEach(opt => {
        //         divBlock.appendChild(opt)
        //     })
        //
        //     let file: XLSXUni = XLSXUni.exportDOMToXLSX(divBlock);
        //     file.save(`${fileName}.xlsx`);
        //
        //     status = false
        // } catch (err) {
        //     status = false
        // }

        await jsxToHtml(jsxElement).then((element) => {
            if (element !== null) {
                let file: XLSXUni = XLSXUni.exportDOMToXLSX(element);
                file.save(`${fileName}.xlsx`);
                status = true
            } else {
                status = false
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