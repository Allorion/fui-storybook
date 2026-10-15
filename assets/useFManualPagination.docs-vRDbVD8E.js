import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as s}from"./index-BoUPaUI-.js";import"./index-tm4cHrPU.js";import{M as l}from"./index-3YZEuhq-.js";import"./index-B3j06Xw8.js";import"./preview-DEsThM2N.js";import"./iframe-DOweOJlE.js";import"./DocsRenderer-CFRXHY34-cxcr1Qxi.js";import"./client-DOawrHdJ.js";import"./index-DW0t0JKo.js";import"./index-D_ywfbVi.js";import"./index-DgH-xKnr.js";import"./index-Bhqu_tAV.js";function i(n){const d={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Hooks/useFManualPagination"}),`
`,e.jsx(d.h1,{id:"usefmanualpagination",children:"useFManualPagination"}),`
`,e.jsxs(d.blockquote,{children:[`
`,e.jsxs(d.p,{children:[e.jsx(d.strong,{children:"Хук-контроллер серверной пагинации"})," для ручного запуска тяжелых POST-отчетов со сложными фильтрами, поддержкой стандартизированного ответа бекенда (",e.jsx(d.code,{children:"meta"}),", ",e.jsx(d.code,{children:"page"}),", ",e.jsx(d.code,{children:"result"}),"), защитой от Race Condition через ",e.jsx(d.code,{children:"AbortController"})," и готовым сопряжением с компонентом ",e.jsx(d.code,{children:"FPagination"}),"."]}),`
`]}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"-основные-возможности",children:"🚀 Основные возможности"}),`
`,e.jsxs(d.ul,{children:[`
`,e.jsxs(d.li,{children:["📮 ",e.jsx(d.strong,{children:"Строго POST-запросы:"})," Параметры и фильтры передаются в теле POST-запроса, что исключает ограничения длины GET URL."]}),`
`,e.jsxs(d.li,{children:["⚡ ",e.jsxs(d.strong,{children:["Императивный запуск (",e.jsx(d.code,{children:"submitFilters"}),"):"]})," Запрос не запускается автоматически при монтировании компонента, а инициируется пользователем (например, по клику «Сформировать отчет»)."]}),`
`,e.jsxs(d.li,{children:["🔄 ",e.jsx(d.strong,{children:"Автоматический сброс страницы:"})," При вызове ",e.jsx(d.code,{children:"submitFilters"})," с новыми фильтрами номер страницы автоматически сбрасывается на 1 (настраивается флагом ",e.jsx(d.code,{children:"resetPage: false"}),")."]}),`
`,e.jsxs(d.li,{children:["🧩 ",e.jsxs(d.strong,{children:["Сохранение фильтров при смене страниц (",e.jsx(d.code,{children:"changePage"}),"):"]})," При переключении страниц отправляется ",e.jsx(d.code,{children:"{ ...filters, page: newPage, size: pageSize }"})," с флагом ",e.jsx(d.code,{children:"mergeParams: true"}),", гарантируя сохранение текущих фильтров без необходимости хранить их копию вручную."]}),`
`,e.jsxs(d.li,{children:["🛡️ ",e.jsx(d.strong,{children:"Race Condition Guard:"})," Быстрое переключение страниц (",e.jsx(d.code,{children:"page 2 -> page 3"}),") отменяет предыдущий незавершенный запрос через ",e.jsx(d.code,{children:"AbortController"}),", исключая мерцание и рассинхронизацию интерфейса."]}),`
`,e.jsxs(d.li,{children:["🔗 ",e.jsxs(d.strong,{children:["Готовая интеграция с ",e.jsx(d.code,{children:"<FPagination />"}),":"]})," Возвращает объект ",e.jsx(d.code,{children:"paginationProps"}),", готовый для прямой распаковки ",e.jsx(d.code,{children:"<FPagination {...paginationProps} />"}),"."]}),`
`]}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"-когда-использовать",children:"💡 Когда использовать"}),`
`,e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"15px",marginBottom:"20px"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{background:"#f5f5f5"},children:[e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:e.jsx(d.p,{children:"Подходит для ✅"})}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:e.jsx(d.p,{children:"Не подходит для ❌"})})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx(d.p,{children:"Формирования сложных финансовых и аналитических отчетов по кнопке"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsxs(d.p,{children:["Простых GET-запросов с автозагрузкой при монтировании (используйте ",e.jsx("code",{children:"useFApiQuery"}),")"]})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsxs(d.p,{children:["POST-пагинации со стандартизированным форматом ",e.jsx("code",{children:"page: { totalItems, size, totalPages, number }"})]})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx(d.p,{children:"Бесконечного скролла (Infinite Scroll) без постраничной навигации"})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsxs(d.p,{children:["Интеграции с ",e.jsx("code",{children:"FPagination"})," и порционным рендерингом ",e.jsx("code",{children:"FProgressiveList"})]})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsxs(d.p,{children:["Операций изменения данных без кэширования (используйте ",e.jsx("code",{children:"useFApiMutation"}),")"]})})]})]})]}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"-формат-ответа-сервера",children:"📦 Формат ответа сервера"}),`
`,e.jsx(d.p,{children:"Бекенд возвращает стандартизированный JSON-ответ (1-based пагинация):"}),`
`,e.jsx(d.pre,{children:e.jsx(d.code,{className:"language-json",children:`{
  "meta": {
    "reportTitle": "Бухгалтерский баланс",
    "generatedAt": "2026-10-15T10:00:00Z"
  },
  "page": {
    "totalItems": 331,
    "size": 20,
    "totalPages": 17,
    "number": 1
  },
  "result": [ ... ]
}
`})}),`
`,e.jsx(d.p,{children:"При смене страницы хук отправляет обновленные параметры:"}),`
`,e.jsx(d.pre,{children:e.jsx(d.code,{className:"language-json",children:`{
  "uid_form": 8,
  "years": ["2025", "2026"],
  "page": 2,
  "size": 20
}
`})}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"️-пример-использования",children:"🛠️ Пример использования"}),`
`,e.jsx(d.pre,{children:e.jsx(d.code,{className:"language-tsx",children:`import React, { useState } from 'react';
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
  useFManualPagination,
} from 'fui-material';

interface ITableItem {
  id: string;
  title: string;
  rows: Array<{ code: string; name: string; val: number }>;
}

interface IFilterPayload {
  uid_form: number;
  years: string[];
}

export const ReportPage: React.FC = () => {
  const [selectedForm] = useState(8);
  const [selectedYears] = useState(['2025', '2026']);

  const {
    result: tables,
    meta,
    pageMeta,
    isLoading,
    isFetching,
    submitFilters,
    paginationProps,
  } = useFManualPagination<IFilterPayload, ITableItem[]>({
    queryKey: 'financial-report',
    url: '/api/v1/reports/build',
    defaultPageSize: 20,
  });

  const handleGenerate = () => {
    submitFilters({
      payload: {
        uid_form: selectedForm,
        years: selectedYears,
      },
      resetPage: true,
    });
  };

  return (
    <div style={{ padding: 24 }}>
      <FButton onClick={handleGenerate} disabled={isLoading || isFetching}>
        {isFetching ? 'Загрузка...' : 'Сформировать отчет'}
      </FButton>

      {tables && (
        <div style={{ marginTop: 16 }}>
          {tables.map((table) => (
            <FPaper key={table.id} st={{ padding: 16, marginBottom: 16 }}>
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
                      <FTableDataCell>{row.val}</FTableDataCell>
                    </FTableRow>
                  ))}
                </FTableBody>
              </FTable>
            </FPaper>
          ))}

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
`,e.jsxs(d.h2,{id:"-опции-хука-iusefmanualpaginationoptions",children:["📋 Опции хука (",e.jsx(d.code,{children:"IUseFManualPaginationOptions"}),")"]}),`
`,e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"15px"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{background:"#f5f5f5"},children:[e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Опция"}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Тип"}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"По умолчанию"}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Описание"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"queryKey"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"string"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"-"}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Базовый ключ TanStack Query для кэширования"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"url"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"string"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"-"}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"URL POST-эндпоинта бекенда"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"defaultPageSize"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"number"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"20"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Размер страницы по умолчанию"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"initialFilters"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"TFilters"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"undefined"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Начальные значения фильтров"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"mode"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"'pagination' | 'infinite'"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"'pagination'"})}),e.jsxs("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:["Режим работы: ",e.jsx("code",{children:"pagination"})," (замена страницы) или ",e.jsx("code",{children:"infinite"})," (накопление для скролла)"]})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"select"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"(data: TQueryFnData) => TData"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"-"}),e.jsxs("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:["Селектор пути к массиву данных (например: ",e.jsx("code",{children:"(d) => d._embedded.activities"}),")"]})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"selectPage"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"(data: TQueryFnData) => IBackendPageMeta"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"-"}),e.jsxs("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:["Селектор метаданных пагинации (нормализует ",e.jsx("code",{children:"totalItems"})," / ",e.jsx("code",{children:"totalElements"}),")"]})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"onErrorNotification"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"true"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Показывать ли всплывающее уведомление об ошибке через fNotification"})]})]})]}),`
`,e.jsx(d.hr,{}),`
`,e.jsxs(d.h2,{id:"-возвращаемые-значения-iusefmanualpaginationresult",children:["📊 Возвращаемые значения (",e.jsx(d.code,{children:"IUseFManualPaginationResult"}),")"]}),`
`,e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"15px"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{background:"#f5f5f5"},children:[e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Свойство"}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Тип"}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Описание"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsxs("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:[e.jsx("code",{children:"data"})," (алиас: ",e.jsx("code",{children:"result"}),")"]}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"TData | undefined"})}),e.jsxs("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:["Типизированные данные после применения ",e.jsx("code",{children:"select"})," (в режиме infinite — накопленный массив)"]})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"pageMeta"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"IBackendPageMeta | undefined"})}),e.jsxs("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:["Нормализованные метаданные пагинации: ",e.jsx("code",{children:"totalItems, size, totalPages, number"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"hasMore"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Флаг наличия следующих страниц для бесконечного скролла"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"isLoading"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Идет ли первичная загрузка данных"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"isFetching"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Флаг активности сетевого запроса"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"isFetchingMore"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Идет ли подгрузка следующей страницы для Infinite Scroll"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"submitFilters"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"(opts: ISubmitFiltersOptions) => Promise"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Запуск запроса с новыми фильтрами (сбрасывает страницу на 1)"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"changePage"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"(newPage: number) => Promise"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Переход на указанную страницу со слиянием текущих фильтров"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"loadMore"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"() => Promise"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Подгрузка следующей страницы для бесконечного скролла"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"paginationProps"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"IFPagination"})}),e.jsxs("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:["Готовый набор пропсов для компонента ",e.jsx("code",{children:"<FPagination />"})]})]})]})]})]})}function m(n={}){const{wrapper:d}={...s(),...n.components};return d?e.jsx(d,{...n,children:e.jsx(i,{...n})}):i(n)}export{m as default};
