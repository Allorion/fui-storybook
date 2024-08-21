import { createRow } from "./createRow";
import { createTagTb } from "../createXmlTags";
import { getCellData } from "../getCellData";

export const convertHtmlTbToXml = (opt: Element, width: number) => {

    const thead = opt.querySelector('thead');
    const tbody = opt.querySelector('tbody');

    let theadXml = ''
    let tbodyXml = ''

    if (thead !== null) {
        theadXml = createRow(thead)
    }

    if (tbody !== null) {
        tbodyXml = createRow(tbody)
    }

    let countCell = 0

    if (thead !== null) {
        const rows = thead.querySelectorAll('tr')
        const firstCell: HTMLTableCellElement[] = Array.from(rows[0].querySelectorAll('th, td'));

        firstCell.forEach((cell) => {
            const { colspan } = getCellData(cell);
            countCell += colspan
        })
    } else if (tbody !== null) {
        const rows = tbody.querySelectorAll('tr')
        const firstCell: HTMLTableCellElement[] = Array.from(rows[0].querySelectorAll('th, td'));

        firstCell.forEach((cell) => {
            const { colspan } = getCellData(cell);
            countCell += colspan
        })
    }

    return createTagTb(theadXml + tbodyXml, countCell, width)

}