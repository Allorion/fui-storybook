import {
    createEndSpan,
    createStartSpan,
    createTagBr,
    createTagH1,
    createTagH1ToH6,
    createTagP,
    createTagSpan
} from "../createXmlTags";
import {convertHtmlTbToXml} from "./convertHtmlTbToXml";

export const convertJsxElementToXml = () => {

    let listXmlStr: string[] = []

    const el = document.querySelector('#test')

    if (el !== null) {
        const arr = el.querySelectorAll('h1, h2, h3, h4, h5, h6, p, span, br, table')
        let span = ''
        arr.forEach((opt, index) => {
            if (opt.textContent !== null) {
                if (opt.tagName === 'H1') {
                    if (span !== '') {
                        listXmlStr.push(span += createEndSpan())
                        span = ''
                        listXmlStr.push(createTagH1(opt.textContent))
                    } else {
                        listXmlStr.push(createTagH1(opt.textContent))
                    }
                } else if (opt.tagName === 'H2' || opt.tagName === 'H3' || opt.tagName === 'H4' || opt.tagName === 'H5' || opt.tagName === 'H6') {
                    if (span !== '') {
                        listXmlStr.push(span += createEndSpan())
                        span = ''
                        listXmlStr.push(createTagH1ToH6(opt.textContent))
                    } else {
                        listXmlStr.push(createTagH1ToH6(opt.textContent))
                    }
                } else if (opt.tagName === 'P') {
                    if (span !== '') {
                        listXmlStr.push(span += createEndSpan())
                        span = ''
                        listXmlStr.push(createTagP(opt.textContent))
                    } else {
                        listXmlStr.push(createTagP(opt.textContent))
                    }
                } else if (opt.tagName === 'SPAN') {
                    if (span === '') {
                        span = createStartSpan()
                        span += createTagSpan(opt.textContent)
                    } else {
                        span += createTagSpan(opt.textContent)
                    }
                } else if (opt.tagName === 'BR') {
                    if (span !== '') {
                        listXmlStr.push(span += createEndSpan())
                        span = ''
                        listXmlStr.push(createTagBr())
                    } else {
                        listXmlStr.push(createTagBr())
                    }
                } else if (opt.tagName === "TABLE") {
                    if (span !== '') {
                        listXmlStr.push(span += createEndSpan())
                        span = ''
                        listXmlStr.push(convertHtmlTbToXml(opt))
                    } else {
                        listXmlStr.push(convertHtmlTbToXml(opt))
                    }
                }
            }
        })
    }

    return listXmlStr.join('')
}