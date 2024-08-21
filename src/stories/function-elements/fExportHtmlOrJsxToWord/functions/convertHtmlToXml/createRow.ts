import { getCellData } from "../getCellData";
import { createTagTbBodyCell, createTagTbHeaderCell, createTagTbRow } from "../createXmlTags";

export const createRow = (elTb: HTMLTableSectionElement) => {

    const rows = Array.from(elTb.querySelectorAll('tr'));

    const listRow: { [key: number]: { [key: string]: string | null | undefined } } = {}

    let countCell = 0
    const defaultRow: { [key: number]: null } = {}

    const firstCell: HTMLTableCellElement[] = Array.from(rows[0].querySelectorAll('th, td'));

    firstCell.forEach((cell) => {
        const { colspan } = getCellData(cell);
        countCell += colspan
    })

    for (let i = 0; i < countCell; i++) {
        defaultRow[i] = null
    }

    for (let i = 0; i < rows.length; i++) {
        listRow[i] = Object.assign({}, defaultRow)
    }

    const deleteCellFromRow: { [key: number]: number[] } = {}

    rows.forEach((row, iRow) => {

        const nullCell: number[] = []

        Object.values(listRow[iRow]).forEach((opt, index) => {
            if (opt === null) {
                nullCell.push(index)
            }
        })

        const cells: HTMLTableCellElement[] = Array.from(row.querySelectorAll('th, td'));

        let countEditCel = 0

        cells.forEach((cell) => {

            const { content, rowspan, colspan } = getCellData(cell);

            const listCellNull = nullCell.slice(countEditCel, countEditCel + colspan).reverse()
            let indexCellOnObj: number = 0

            listCellNull.map((nullCel, indexNullCel) => {
                if (indexNullCel === listCellNull.length - 1) {
                    indexCellOnObj = nullCel
                } else {
                    delete listRow[iRow][nullCel]
                }
            })

            if (rowspan > 1 && colspan < 2) {
                for (let i = 1; i < rowspan; i++) {
                    if (cell.tagName === 'TH') {
                        listRow[iRow + i][indexCellOnObj] = createTagTbHeaderCell(undefined, 'continue')
                    } else if (cell.tagName === 'TD') {
                        listRow[iRow + i][indexCellOnObj] = createTagTbBodyCell(undefined, 'continue')
                    }

                }
            } else if (rowspan > 1 && colspan > 1) {
                for (let i = 1; i < rowspan; i++) {
                    deleteCellFromRow[iRow + i] = []
                    listCellNull.map((nullCel, indexNullCel) => {
                        if (indexNullCel === listCellNull.length - 1) {
                            if (cell.tagName === 'TH') {
                                listRow[iRow + i][nullCel] = createTagTbHeaderCell(undefined, 'continue', colspan)
                            } else if (cell.tagName === 'TD') {
                                listRow[iRow + i][nullCel] = createTagTbBodyCell(undefined, 'continue', colspan)
                            }
                        } else {
                            deleteCellFromRow[i].push(nullCel)
                            listRow[iRow + i][nullCel] = undefined
                        }
                    })
                }
            }

            if (cell.tagName === 'TH') {
                listRow[iRow][indexCellOnObj] = createTagTbHeaderCell(content, rowspan > 1 ? 'restart' : undefined, colspan > 1 ? colspan : undefined)
            } else if (cell.tagName === 'TD') {
                listRow[iRow][indexCellOnObj] = createTagTbBodyCell(content, rowspan > 1 ? 'restart' : undefined, colspan > 1 ? colspan : undefined)
            }

            countEditCel += colspan
        })
    })

    Object.entries(deleteCellFromRow).map(([key, value]) => {
        value.map(opt => {
            delete listRow[+key][opt]
        })
    })

    const render: string[] = []
    Object.values(listRow).forEach((opt) => {
        render.push(createTagTbRow(Object.values(opt).join('')))
    })

    return render.join('')
}