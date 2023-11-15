// Функция для получения значений и атрибутов ячеек
export function getCellData(cell: HTMLElement): { content: string, rowspan: number, colspan: number } {
    const content = cell.innerText.trim();
    const rowspan = cell.hasAttribute('rowspan') ? parseInt(cell.getAttribute('rowspan') || '1') : 1;
    const colspan = cell.hasAttribute('colspan') ? parseInt(cell.getAttribute('colspan') || '1') : 1;
    return {content, rowspan, colspan};
}