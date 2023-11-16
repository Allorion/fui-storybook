import {convertHtmlTbToXml} from "./functions/convertHtmlToXml/convertHtmlTbToXml";
import {jsxToHtml} from "./functions/jsxToHtml";
import {generateDocx} from "./functions/generateDocx";
import {convertJsxElementToXml} from "./functions/convertHtmlToXml/convertJsxElementToXml";

export interface IfExportHtmlOrJsxToWord {
    tableId?: string,
    divId?: string,
    fileName: string,
    jsxElement?: JSX.Element,
    format?: 'A4' | 'A3' | 'A2' | 'A1',
    orientation?: 'landscape' | 'vertical'
}

export const fExportHtmlOrJsxToWord = async ({
                                                 tableId,
                                                 fileName,
                                                 jsxElement,
                                                 format,
                                                 orientation,
                                                 divId
                                             }: IfExportHtmlOrJsxToWord) => {


    if (tableId !== undefined && jsxElement === undefined && divId === undefined) {
        const htmlTable = document.getElementById(tableId);
        if (htmlTable) {
            const stringTb = convertHtmlTbToXml(htmlTable)
            await generateDocx({data: stringTb, format: format, orientation: orientation, fileName: fileName})
            return true
        } else {
            return false
        }
    } else if (jsxElement !== undefined && divId === undefined && tableId === undefined) {
        let status: boolean = false

        await jsxToHtml(jsxElement).then(async (element) => {
            if (element !== null) {
                await generateDocx({
                    data: convertJsxElementToXml(element),
                    format: format,
                    orientation: orientation,
                    fileName: fileName
                })
                status = true
            } else {
                status = true
            }
        });

        return status
    } else if (divId !== undefined && jsxElement === undefined && tableId === undefined) {

        const divBlock: HTMLElement | null = document.getElementById(divId);

        if (divBlock !== null) {
            await generateDocx({
                data: convertJsxElementToXml(divBlock),
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