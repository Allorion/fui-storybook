import {convertHtmlTbToXml} from "./functions/convertHtmlToXml/convertHtmlTbToXml";
import {jsxToHtml} from "./functions/jsxToHtml";
import {generateDocx} from "./functions/generateDocx";

export interface IfExportHtmlOrJsxToWord {
    tableId?: string,
    fileName: string,
    jsxElement?: JSX.Element,
    format?: 'A4' | 'A3' | 'A2' | 'A1',
    orientation?: 'landscape' | 'vertical'
}

export const fExportHtmlOrJsxToWord = async ({tableId, fileName, jsxElement, format, orientation}: IfExportHtmlOrJsxToWord) => {

    if (jsxElement === undefined && tableId !== undefined) {
        const htmlTable = document.getElementById(tableId);
        if (htmlTable) {
            const stringTb = convertHtmlTbToXml(htmlTable)
            await generateDocx({data: stringTb, format: format, orientation: orientation, fileName: fileName})
            return true
        } else {
            return false
        }
    } else if (jsxElement !== undefined) {

        let status: boolean = false

        await jsxToHtml(jsxElement).then(async (element) => {
            if (element) {
                const stringTb = convertHtmlTbToXml(element)
                await generateDocx({data: stringTb, format: format, orientation: orientation, fileName: fileName})
                status = true
            } else {
                status = true
            }
        });

        return status
    } else {
        return false
    }
}

export default fExportHtmlOrJsxToWord