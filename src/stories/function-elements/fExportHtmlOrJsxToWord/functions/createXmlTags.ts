export const createTagH1 = (text: string): string => {
    return `<w:p><w:pPr><w:pStyle w:val="a4"/></w:pPr><w:r><w:t>${text}</w:t></w:r></w:p>`
}

export const createTagH1ToH6 = (text: string): string => {
    return `<w:p><w:pPr><w:pStyle w:val="a6"/></w:pPr><w:r><w:t>${text}</w:t></w:r></w:p>`
}

export const createTagP = (text: string): string => {
    return `<w:p><w:pPr><w:ind w:firstLine="708"/></w:pPr><w:r><w:t>${text}</w:t></w:r></w:p>`
}

export const createStartSpan = (): string => {
    return `<w:p><w:pPr><w:ind w:firstLine="708"/></w:pPr><w:r>`
}

export const createEndSpan = () => {
    return `</w:r></w:p>`
}

export const createTagSpan = (text: string) => {
    return `<w:t>${text}</w:t><w:t xml:space="preserve"> </w:t>`
}

export const createTagBr = () => {
    return `<w:p></w:p>`
}

export const createTagTb = (table: string, rows: number, width: number): string => {

    const arr: string[] = ['<w:tblGrid>']

    for (let i = 0; i < rows; i++) {
        arr.push(`<w:gridCol w:w="${Math.floor(width/rows)}"/>`)
    }

    arr.push('</w:tblGrid>')

    return `<w:tbl><w:tblPr><w:tblStyle w:val="a7"/><w:tblW w:w="1" w:type="auto"/><w:tblLook w:val="04A0" w:firstRow="1" w:lastRow="0" w:firstColumn="1" w:lastColumn="0" w:noHBand="0" w:noVBand="1"/></w:tblPr>${arr.join('')}${table}</w:tbl>`
}

export const createTagTbRow = (listCel: string) => {
    return `<w:tr>${listCel}</w:tr>`
}

const addTextTbHead = (text: string | undefined,) => {
    let newText = ''

    if (text !== undefined) {
        newText = `<w:r><w:rPr><w:rFonts w:cs="Times New Roman"/><w:b/><w:bCs/><w:color w:val="000000"/><w:szCs w:val="28"/></w:rPr><w:t>${text}</w:t></w:r>`
    }

    return newText
}

const addTextTbBody = (text: string | undefined,) => {
    let newText = ''

    if (text !== undefined) {
        newText = `<w:r><w:rPr><w:rFonts w:cs="Times New Roman"/><w:color w:val="000000"/><w:szCs w:val="28"/></w:rPr><w:t>${text}</w:t></w:r>`
    }

    return newText
}

export const createTagTbHeaderCell = (text?: string, rowSpan?: 'restart' | 'continue', colSpan?: number) => {
    return `<w:tc><w:tcPr><w:tcW w:w="1" w:type="dxa"/>${colSpan !== undefined ? `<w:gridSpan w:val="${colSpan}"/>` : ''}${rowSpan !== undefined ? `<w:vMerge ${rowSpan === 'restart' ? 'w:val="restart"' : 'w:val="continue"'}/>` : ''}<w:vAlign w:val="center"/></w:tcPr><w:p><w:pPr><w:ind w:firstLine="0"/><w:jc w:val="center"/><w:rPr><w:rFonts w:cs="Times New Roman"/><w:b/><w:bCs/><w:color w:val="000000"/><w:szCs w:val="28"/></w:rPr></w:pPr>${addTextTbHead(text)}</w:p></w:tc>`
}

export const createTagTbBodyCell = (text?: string, rowSpan?: 'restart' | 'continue', colSpan?: number) => {
    return `<w:tc><w:tcPr><w:tcW w:w="1" w:type="dxa"/>${colSpan !== undefined ? `<w:gridSpan w:val="${colSpan}"/>` : ''}${rowSpan !== undefined ? `<w:vMerge ${rowSpan === 'restart' ? 'w:val="restart"' : 'w:val="continue"'}/>` : ''}<w:vAlign w:val="center"/></w:tcPr><w:p><w:pPr><w:ind w:firstLine="0"/><w:rPr><w:rFonts w:cs="Times New Roman"/><w:color w:val="000000"/><w:szCs w:val="28"/></w:rPr></w:pPr>${addTextTbBody(text)}</w:p></w:tc>`
}