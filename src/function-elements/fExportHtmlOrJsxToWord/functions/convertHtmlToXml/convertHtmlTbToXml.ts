import {createRow} from "./createRow";
import {createTagTb} from "../createXmlTags";

export const convertHtmlTbToXml = (opt: Element) => {

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

    let rows = 0

    if (thead !== null) {
        rows = thead.querySelectorAll('tr').length
    } else if (tbody !== null) {
        rows = tbody.querySelectorAll('tr').length
    }

    return createTagTb(theadXml + tbodyXml, rows)

}