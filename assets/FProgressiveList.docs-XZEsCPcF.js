import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as r}from"./index-BoUPaUI-.js";import"./index-tm4cHrPU.js";import{M as s}from"./index-3YZEuhq-.js";import"./index-B3j06Xw8.js";import"./preview-DEsThM2N.js";import"./iframe-DOweOJlE.js";import"./DocsRenderer-CFRXHY34-cxcr1Qxi.js";import"./client-DOawrHdJ.js";import"./index-DW0t0JKo.js";import"./index-D_ywfbVi.js";import"./index-DgH-xKnr.js";import"./index-Bhqu_tAV.js";function i(n){const d={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Material/FProgressiveList"}),`
`,e.jsx(d.h1,{id:"-fprogressivelist--прогрессивный-порционный-рендеринг",children:"⚡ FProgressiveList — прогрессивный порционный рендеринг"}),`
`,e.jsxs(d.blockquote,{children:[`
`,e.jsxs(d.p,{children:[e.jsx(d.strong,{children:"Высокопроизводительный компонент порционного рендеринга больших массивов данных"})," (100+ таблиц, тысячи карточек). Объединяет Time-Slicing через ",e.jsx(d.code,{children:"requestAnimationFrame"})," с аппаратной CSS-изоляцией ",e.jsx(d.code,{children:"content-visibility: auto"}),", исключая блокировку главного потока браузера (Long Tasks) и падение FPS при монтировании."]}),`
`]}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"-решаемая-проблема",children:"🚀 Решаемая проблема"}),`
`,e.jsx(d.p,{children:"При отображении больших списков или тяжелых сущностей (например, 100 финансовых таблиц по 10–20 строк каждая) в DOM единовременно создается 5 000–10 000 узлов."}),`
`,e.jsx(d.p,{children:"В стандартном React-рендеринге это приводит к:"}),`
`,e.jsxs(d.ul,{children:[`
`,e.jsxs(d.li,{children:[e.jsx(d.strong,{children:"Long Task (блокировка UI на 500–1500 мс):"})," браузер не реагирует на клики, скролл и ввод текста."]}),`
`,e.jsxs(d.li,{children:[e.jsx(d.strong,{children:"Резкое ухудшение метрик Web Vitals:"})," рост TBT (Total Blocking Time) и ухудшение INP (Interaction to Next Paint)."]}),`
`,e.jsxs(d.li,{children:[e.jsx(d.strong,{children:"Скачки скролла:"})," резкое изменение высоты страницы в процессе достройки DOM-дерева."]}),`
`]}),`
`,e.jsxs(d.h3,{id:"архитектурное-решение-в-fprogressivelist",children:["Архитектурное решение в ",e.jsx(d.code,{children:"FProgressiveList"})]}),`
`,e.jsx(d.pre,{children:e.jsx(d.code,{children:`[Исходные данные: 100 элементов]
       │
       ▼
 [Кадр 1: rAF] ──► Монтирование порции 1..6 ──► Браузер свободен для кликов/инпута
       │
       ▼
 [Кадр 2: rAF] ──► Монтирование порции 7..12 ──► Браузер свободен для анимаций
       │
       ▼
 [Кадр N: rAF] ──► Монтирование порции N..(N+6)
       │
       ▼
 [CSS Containment] ──► content-visibility: auto изолирует невидимые блоки вне вьюпорта
`})}),`
`,e.jsxs(d.ol,{children:[`
`,e.jsxs(d.li,{children:[e.jsx(d.strong,{children:"Time-Slicing (порционное монтирование):"})," Компонент рендерит элементы порциями размером ",e.jsx(d.code,{children:"chunkSize"})," (по умолчанию ",e.jsx(d.code,{children:"6"}),"). Следующая порция запрашивается через ",e.jsx(d.code,{children:"requestAnimationFrame"}),", отдавая управление браузеру между кадрами. Интерфейс остается отзывчивым (60 FPS)."]}),`
`,e.jsxs(d.li,{children:[e.jsxs(d.strong,{children:["CSS Containment (",e.jsx(d.code,{children:"content-visibility: auto"}),"):"]})," Для каждого элемента списка применяется стиль ",e.jsx(d.code,{children:"content-visibility: auto"})," и ",e.jsx(d.code,{children:"contain-intrinsic-size: 0 ${estimatedItemHeight}px"}),". Браузер полностью пропускает layout и painting элементов, находящихся вне экрана, сохраняя при этом точные размеры полосы прокрутки."]}),`
`]}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"-примеры-использования",children:"💡 Примеры использования"}),`
`,e.jsx(d.h3,{id:"базовый-пример-со-списком-карточек",children:"Базовый пример со списком карточек"}),`
`,e.jsx(d.pre,{children:e.jsx(d.code,{className:"language-tsx",children:`import React from 'react';
import { FProgressiveList, FPaper } from 'fui-material';

interface ICardItem {
  id: string;
  title: string;
  description: string;
}

export const CardList: React.FC<{ items: ICardItem[] }> = ({ items }) => {
  return (
    <FProgressiveList
      items={items}
      chunkSize={6}
      estimatedItemHeight={120}
      keyExtractor={(item) => item.id}
    >
      {(item, index) => (
        <FPaper st={{ padding: 16 }}>
          <h4>{item.title}</h4>
          <p>{item.description}</p>
        </FPaper>
      )}
    </FProgressiveList>
  );
};
`})}),`
`,e.jsx(d.hr,{}),`
`,e.jsxs(d.h3,{id:"комплексный-пример-100-тяжелых-таблиц-с-usefmanualpagination",children:["Комплексный пример: 100 тяжелых таблиц с ",e.jsx(d.code,{children:"useFManualPagination"})]}),`
`,e.jsx(d.pre,{children:e.jsx(d.code,{className:"language-tsx",children:`import React from 'react';
import {
  FButton,
  FPagination,
  FPaper,
  FTable,
  FTableHead,
  FTableBody,
  FTableRow,
  FTableHeaderCell,
  FTableDataCell,
  FProgressiveList,
  useFManualPagination,
} from 'fui-material';

interface ITableItem {
  id: string;
  title: string;
  rows: Array<{ code: string; name: string; val: number }>;
}

export const MassiveReportsBlock: React.FC = () => {
  const {
    result: tables,
    isLoading,
    isFetching,
    submitFilters,
    paginationProps,
  } = useFManualPagination<{ uid_form: number }, ITableItem[]>({
    queryKey: 'financial-reports',
    url: '/api/v1/reports/build',
    defaultPageSize: 20,
  });

  return (
    <div>
      <FButton
        onClick={() => submitFilters({ payload: { uid_form: 8 }, resetPage: true })}
        disabled={isLoading || isFetching}
      >
        {isFetching ? 'Загрузка...' : 'Сформировать отчет'}
      </FButton>

      {tables && tables.length > 0 && (
        <div style={{ marginTop: 16 }}>
          <FProgressiveList
            items={tables}
            chunkSize={4}
            estimatedItemHeight={260}
            keyExtractor={(table) => table.id}
          >
            {(table) => (
              <FPaper st={{ padding: 16 }}>
                <h4>{table.title}</h4>
                <FTable layout="fixed">
                  <FTableHead>
                    <FTableRow>
                      <FTableHeaderCell>Код</FTableHeaderCell>
                      <FTableHeaderCell>Показатель</FTableHeaderCell>
                      <FTableHeaderCell>Значение</FTableHeaderCell>
                    </FTableRow>
                  </FTableHead>
                  <FTableBody>
                    {table.rows.map((row) => (
                      <FTableRow key={row.code}>
                        <FTableDataCell>{row.code}</FTableDataCell>
                        <FTableDataCell>{row.name}</FTableDataCell>
                        <FTableDataCell>{row.val.toLocaleString('ru-RU')}</FTableDataCell>
                      </FTableRow>
                    ))}
                  </FTableBody>
                </FTable>
              </FPaper>
            )}
          </FProgressiveList>

          <div style={{ display: 'flex', justifyContent: 'center', marginTop: 24 }}>
            <FPagination {...paginationProps} />
          </div>
        </div>
      )}
    </div>
  );
};
`})}),`
`,e.jsx(d.hr,{}),`
`,e.jsxs(d.h2,{id:"-пропсы-ifprogressivelistpropst",children:["📋 Пропсы (",e.jsx(d.code,{children:"IFProgressiveListProps<T>"}),")"]}),`
`,e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"15px"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{background:"#f5f5f5"},children:[e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Проп"}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Тип"}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"По умолчанию"}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Описание"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"items"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"T[]"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"-"}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Массив исходных данных любой структуры"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"children"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"(item: T, index: number) => React.ReactNode"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"-"}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Функция рендера каждого элемента (Function as Child)"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"keyExtractor"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"(item: T, index: number) => string | number"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"-"}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Функция генерации стабильного уникального ключа"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"chunkSize"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"number"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"6"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Количество элементов, монтируемых за один кадр анимации"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"estimatedItemHeight"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"number"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"280"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Примерная высота блока в px для плейсхолдера скролла"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"onLoadMore"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"() => void"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"undefined"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Коллбэк автоматической подгрузки следующей страницы при скролле вниз (IntersectionObserver)"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"hasMore"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"false"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Флаг наличия следующих страниц на бекенде для бесконечного скролла"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"isLoadingMore"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"false"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Флаг активной загрузки следующей страницы (показывает лоадер снизу)"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"loader"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"React.ReactNode"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"<FProgress />"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Кастомный элемент-лоадер внизу списка при подгрузке следующей порции"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"threshold"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"number"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"250"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Упреждающий отступ в пикселях до конца списка для срабатывания подгрузки"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"renderProgress"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"(rendered: number, total: number) => React.ReactNode"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"undefined"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Кастомный рендер индикатора прогресса (по умолчанию выключен)"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"className"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"string"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"undefined"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Дополнительный CSS-класс контейнера"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"st"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"React.CSSProperties"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"undefined"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Инлайновые стили внешнего контейнера"})]})]})]}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"️-советы-по-производительности",children:"🛠️ Советы по производительности"}),`
`,e.jsxs(d.ol,{children:[`
`,e.jsxs(d.li,{children:[e.jsx(d.strong,{children:"Бесконечный скролл (Infinite Scroll):"})," Передайте ",e.jsx(d.code,{children:"onLoadMore={loadMore}"})," и ",e.jsx(d.code,{children:"hasMore={hasMore}"}),". ",e.jsx(d.code,{children:"FProgressiveList"})," автоматически разместит маркер и будет подгружать данные по скроллу. При этом компонент защищен: запрос следующей страницы не отправится, пока текущая пачка монтируется."]}),`
`,e.jsxs(d.li,{children:[e.jsxs(d.strong,{children:["Значение ",e.jsx(d.code,{children:"estimatedItemHeight"}),":"]})," Указывайте среднюю реальную высоту блока (включая margin-bottom: 16px). Это предотвращает скачки скроллбара, когда браузер вычисляет геометрические размеры страницы для элементов вне зоны видимости."]}),`
`,e.jsxs(d.li,{children:[e.jsxs(d.strong,{children:["Размер порции ",e.jsx(d.code,{children:"chunkSize"}),":"]})," Для очень тяжелых таблиц (от 30 строк) рекомендуемое значение ",e.jsx(d.code,{children:"chunkSize = 3..4"}),". Для небольших карточек или строк списка оптимально ",e.jsx(d.code,{children:"chunkSize = 8..12"}),"."]}),`
`,e.jsxs(d.li,{children:[e.jsxs(d.strong,{children:["Стабильный ",e.jsx(d.code,{children:"keyExtractor"}),":"]})," Всегда возвращайте уникальный ID сущности (",e.jsx(d.code,{children:"item.id"}),"), избегая передачи простого ",e.jsx(d.code,{children:"index"}),", чтобы React не пересоздавал DOM-узлы при обновлении данных."]}),`
`]})]})}function u(n={}){const{wrapper:d}={...r(),...n.components};return d?e.jsx(d,{...n,children:e.jsx(i,{...n})}):i(n)}export{u as default};
