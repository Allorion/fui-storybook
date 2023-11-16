import {contentTypes} from "../xml-confs/contentTypes";
import {rels} from "../xml-confs/_rels/rels";
import {app} from "../xml-confs/docProps/app";
import {documentXmlRels} from "../xml-confs/word/_rels/documentXmlRels";
import {fontTable} from "../xml-confs/word/fontTable";
import {settings} from "../xml-confs/word/settings";
import {document as createDocumentFile} from "../xml-confs/word/document";
import {styles} from "../xml-confs/word/styles";
import {theme1} from "../xml-confs/word/theme/theme1";
import {webSettings} from "../xml-confs/word/webSettings";
import JSZip from "jszip";


interface IProps {
    data: string,
    format?: 'A4' | 'A3' | 'A2' | 'A1',
    orientation?: 'landscape' | 'vertical',
    fileName: string
}

export async function generateDocx({data, format, orientation, fileName}: IProps) {

    const zip = new JSZip();

    // [Content_Types].xml
    zip.file('[Content_Types].xml', contentTypes());

    // _rels/.rels
    zip.file('_rels/.rels', rels());

    // docProps/app.xml
    zip.file('docProps/app.xml', app());

    // word/_rels/document.xml.rels
    zip.file('word/_rels/document.xml.rels', documentXmlRels());

    // word/document.xml
    zip.file('word/document.xml', createDocumentFile(data, format, orientation))

    // word/fontTable.xml
    zip.file('word/fontTable.xml', fontTable())

    // word/settings.xml
    zip.file('word/settings.xml', settings());

    // word/styles.xml
    zip.file('word/styles.xml', styles());

    // word/theme/theme1.xml
    zip.file('word/theme/theme1.xml', theme1());

    // word/webSettings.xml
    zip.file('word/webSettings.xml', webSettings());

    // Создаем архив
    const content = await zip.generateAsync({type: 'blob'});

    const downloadUrl = window.URL.createObjectURL(new Blob([content]));
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.setAttribute('download', fileName + '.docx'); // Установка имени файла

    // Эмуляция клика на ссылку
    document.body.appendChild(link);
    link.click();

    // Удаление ссылки после скачивания файла
    document.body.removeChild(link);
}