export const document = (
    data: string,
    format: 'A4' | 'A3' | 'A2' | 'A1' = 'A4',
    orientation: 'landscape' | 'vertical' = 'vertical'
) => {

    let width = 11906
    let height = 16838
    let top = 1134
    let right = 567
    let bottom = 1134
    let left = 1701
    const header = 709
    const footer = 709

    switch (format) {

        case "A4":
            width = orientation === 'landscape' ? 16838 : 11906
            height = orientation === 'landscape' ? 11906 : 16838
            top = orientation === 'landscape' ? 1134 : 1134
            right = orientation === 'landscape' ? 851 : 567
            bottom = orientation === 'landscape' ? 1418 : 1134
            left = orientation === 'landscape' ? 1701 : 1701
            break;
        case "A3":
            width = orientation === 'landscape' ? 23803 : 16817
            height = orientation === 'landscape' ? 16817 : 23803
            top = orientation === 'landscape' ? 1134 : 1134
            right = orientation === 'landscape' ? 851 : 851
            bottom = orientation === 'landscape' ? 1134 : 1134
            left = orientation === 'landscape' ? 1418 : 1418
            break;
        case "A2":
            width = orientation === 'landscape' ? 31678 : 23803
            height = orientation === 'landscape' ? 23803 : 31678
            top = orientation === 'landscape' ? 1418 : 1418
            right = orientation === 'landscape' ? 1134 : 1134
            bottom = orientation === 'landscape' ? 1418 : 1418
            left = orientation === 'landscape' ? 1701 : 1701
            break;
        case "A1":
            width = orientation === 'landscape' ? 31678 : 31678
            height = orientation === 'landscape' ? 31678 : 31678
            top = orientation === 'landscape' ? 1701 : 1701
            right = orientation === 'landscape' ? 1701 : 1701
            bottom = orientation === 'landscape' ? 1985 : 1985
            left = orientation === 'landscape' ? 2268 : 2268
            break;

    }


    return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><w:document xmlns:wpc="http://schemas.microsoft.com/office/word/2010/wordprocessingCanvas" xmlns:cx="http://schemas.microsoft.com/office/drawing/2014/chartex" xmlns:cx1="http://schemas.microsoft.com/office/drawing/2015/9/8/chartex" xmlns:cx2="http://schemas.microsoft.com/office/drawing/2015/10/21/chartex" xmlns:cx3="http://schemas.microsoft.com/office/drawing/2016/5/9/chartex" xmlns:cx4="http://schemas.microsoft.com/office/drawing/2016/5/10/chartex" xmlns:cx5="http://schemas.microsoft.com/office/drawing/2016/5/11/chartex" xmlns:cx6="http://schemas.microsoft.com/office/drawing/2016/5/12/chartex" xmlns:cx7="http://schemas.microsoft.com/office/drawing/2016/5/13/chartex" xmlns:cx8="http://schemas.microsoft.com/office/drawing/2016/5/14/chartex" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" xmlns:aink="http://schemas.microsoft.com/office/drawing/2016/ink" xmlns:am3d="http://schemas.microsoft.com/office/drawing/2017/model3d" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:oel="http://schemas.microsoft.com/office/2019/extlst" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:m="http://schemas.openxmlformats.org/officeDocument/2006/math" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:wp14="http://schemas.microsoft.com/office/word/2010/wordprocessingDrawing" xmlns:wp="http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing" xmlns:w10="urn:schemas-microsoft-com:office:word" xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main" xmlns:w14="http://schemas.microsoft.com/office/word/2010/wordml" xmlns:w15="http://schemas.microsoft.com/office/word/2012/wordml" xmlns:w16cex="http://schemas.microsoft.com/office/word/2018/wordml/cex" xmlns:w16cid="http://schemas.microsoft.com/office/word/2016/wordml/cid" xmlns:w16="http://schemas.microsoft.com/office/word/2018/wordml" xmlns:w16sdtdh="http://schemas.microsoft.com/office/word/2020/wordml/sdtdatahash" xmlns:w16se="http://schemas.microsoft.com/office/word/2015/wordml/symex" xmlns:wpg="http://schemas.microsoft.com/office/word/2010/wordprocessingGroup" xmlns:wpi="http://schemas.microsoft.com/office/word/2010/wordprocessingInk" xmlns:wne="http://schemas.microsoft.com/office/word/2006/wordml" xmlns:wps="http://schemas.microsoft.com/office/word/2010/wordprocessingShape" mc:Ignorable="w14 w15 w16se w16cid w16 w16cex w16sdtdh wp14"><w:body>${data}<w:sectPr><w:pgSz w:w="${width}" w:h="${height}" w:orient="${orientation}"/><w:pgMar w:top="${top}" w:right="${right}" w:bottom="${bottom}" w:left="${left}" w:header="${header}" w:footer="${footer}" w:gutter="0"/><w:cols w:space="708"/><w:docGrid w:linePitch="360"/></w:sectPr></w:body></w:document>`
}