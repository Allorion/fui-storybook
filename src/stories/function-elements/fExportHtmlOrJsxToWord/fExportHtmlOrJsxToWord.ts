import { convertHtmlTbToXml } from "./functions/convertHtmlToXml/convertHtmlTbToXml";
import { generateDocx } from "./functions/generateDocx";
import { convertJsxElementToXml } from "./functions/convertHtmlToXml/convertJsxElementToXml";
import { jsxToHtml } from "./functions/jsxToHtml";

export interface IfExportHtmlOrJsxToWord {
    tableId?: string,
    divId?: string,
    fileName: string,
    jsxElement?: string,
    format?: 'A4' | 'A3' | 'A2' | 'A1',
    orientation?: 'landscape' | 'vertical'
}

export const fExportHtmlOrJsxToWord = async ({
    tableId,
    fileName,
    jsxElement,
    format = "A4",
    orientation = 'landscape',
    divId
}: IfExportHtmlOrJsxToWord) => {

    let width = 0

    switch (format) {

        case "A4":
            width = (orientation === 'landscape' ? 16838 : 11906) - (orientation === 'landscape' ? 851 : 567) - (orientation === 'landscape' ? 1701 : 1701)
            break;
        case "A3":
            width = (orientation === 'landscape' ? 23803 : 16817) - (orientation === 'landscape' ? 851 : 851) - (orientation === 'landscape' ? 1418 : 1418)
            break;
        case "A2":
            width = (orientation === 'landscape' ? 31678 : 23803) - (orientation === 'landscape' ? 1134 : 1134) - (orientation === 'landscape' ? 1701 : 1701)
            break;
        case "A1":
            width = (orientation === 'landscape' ? 31678 : 31678) - (orientation === 'landscape' ? 1701 : 1701) - (orientation === 'landscape' ? 2268 : 2268)
            break;
    }

    if (tableId !== undefined && jsxElement === undefined && divId === undefined) {
        const htmlTable = document.getElementById(tableId);
        if (htmlTable) {
            const stringTb = convertHtmlTbToXml(htmlTable, width)
            await generateDocx({ data: stringTb, format: format, orientation: orientation, fileName: fileName })
            return true
        } else {
            return false
        }
    } else if (jsxElement !== undefined && divId === undefined && tableId === undefined) {

        let status: boolean = false

        await jsxToHtml(jsxElement).then(async (element) => {
            if (element !== null) {
                await generateDocx({
                    data: convertJsxElementToXml(element, width),
                    format: format,
                    orientation: orientation,
                    fileName: fileName
                })
                status = true
            } else {
                status = false
            }
        });

        return status
    } else if (divId !== undefined && jsxElement === undefined && tableId === undefined) {

        const divBlock: HTMLElement | null = document.getElementById(divId);

        if (divBlock !== null) {
            await generateDocx({
                data: convertJsxElementToXml(divBlock, width),
                format: format,
                orientation: orientation,
                fileName: fileName
            })
            return true
        } else {
            return false
        }
    } else {
        return false
    }
}

export default fExportHtmlOrJsxToWord
