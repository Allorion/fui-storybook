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

    return createTagTb(theadXml + tbodyXml)

}