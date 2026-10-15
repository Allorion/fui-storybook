import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as r}from"./index-BoUPaUI-.js";import"./index-C4mtzm2w.js";import{M as i}from"./index-br71zC3k.js";import"./index-B3j06Xw8.js";import"./preview-DbypPfl0.js";import"./iframe-BkKXG2Kh.js";import"./DocsRenderer-CFRXHY34-DB7y8ihN.js";import"./client-DOawrHdJ.js";import"./index-DW0t0JKo.js";import"./index-D_ywfbVi.js";import"./index-DgH-xKnr.js";import"./index-Bhqu_tAV.js";function s(n){const d={blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Hooks/useFManualPagination"}),`
`,e.jsx(d.h1,{id:"usefmanualpagination--универсальный-контроллер-серверной-пагинации",children:"useFManualPagination — Универсальный контроллер серверной пагинации"}),`
`,e.jsxs(d.blockquote,{children:[`
`,e.jsxs(d.p,{children:[e.jsx(d.strong,{children:"Хук корпоративного уровня для ручного запуска тяжелых аналитических POST-отчетов и списков."}),e.jsx(d.br,{}),`
`,"Поддерживает как ",e.jsx(d.strong,{children:"классическую постраничную пагинацию"})," (",e.jsx(d.code,{children:"FPagination"}),"), так и ",e.jsx(d.strong,{children:"бесконечный скролл"})," (",e.jsx(d.code,{children:"Infinite Scroll"})," в связке с ",e.jsx(d.code,{children:"FProgressiveList"}),"), автоматическое слияние вложенных структур данных, защиту от Race Condition через ",e.jsx(d.code,{children:"AbortController"})," и одновременную доставку параметров ",e.jsx(d.code,{children:"page"})," и ",e.jsx(d.code,{children:"size"})," в тело запроса и строку URL."]}),`
`]}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"-главные-фишки-и-возможности",children:"⚡ Главные фишки и возможности"}),`
`,e.jsxs(d.ul,{children:[`
`,e.jsxs(d.li,{children:["🎯 ",e.jsxs(d.strong,{children:["Императивный запуск (",e.jsx(d.code,{children:"submitFilters"}),"):"]})," Запрос не запускается автоматически при открытии страницы, а ожидает клика пользователя (кнопка «Сформировать отчет», «Применить фильтры»)."]}),`
`,e.jsxs(d.li,{children:["🔄 ",e.jsx(d.strong,{children:"Авто-сброс страницы на 1:"})," При нажатии «Сформировать» с новыми фильтрами страница автоматически сбрасывается на первую (",e.jsx(d.code,{children:"resetPage: true"}),")."]}),`
`,e.jsxs(d.li,{children:["🧠 ",e.jsx(d.strong,{children:"Автоматическое сохранение фильтров при пагинации:"})," При переходе на страницу 2, 3... хук автоматически склеивает ранее отправленные фильтры с новым номером страницы (",e.jsx(d.code,{children:"mergeParams: true"}),"). Вам больше не нужно дублировать фильтры вручную в локальном ",e.jsx(d.code,{children:"useState"}),"."]}),`
`,e.jsxs(d.li,{children:["🪄 ",e.jsxs(d.strong,{children:["Умное слияние данных в режиме ",e.jsx(d.code,{children:"infinite"})," (больше не нужно писать ",e.jsx(d.code,{children:"appendData"}),"!):"]}),e.jsx(d.br,{}),`
`,"Хук сам анализирует ответ сервера:",`
`,e.jsxs(d.ul,{children:[`
`,e.jsxs(d.li,{children:["Если данные — массив: склеивает ",e.jsx(d.code,{children:"[...prev, ...next]"}),"."]}),`
`,e.jsxs(d.li,{children:["Если объект с полем-массивом (",e.jsx(d.code,{children:"result"}),", ",e.jsx(d.code,{children:"items"}),", ",e.jsx(d.code,{children:"content"}),", ",e.jsx(d.code,{children:"data"}),", ",e.jsx(d.code,{children:"posts"}),", ",e.jsx(d.code,{children:"rows"}),"): конкатенирует этот массив."]}),`
`,e.jsxs(d.li,{children:["Если сложный объект с вложенным массивом (например, ",e.jsx(d.code,{children:"{ result: { posts: [...] }, meta, page }"})," как в GMVO): автоматически находит массив внутри ",e.jsx(d.code,{children:"result"})," и конкатенирует его, обновляя ",e.jsx(d.code,{children:"page"})," и ",e.jsx(d.code,{children:"meta"}),"."]}),`
`]}),`
`]}),`
`,e.jsxs(d.li,{children:["🛡️ ",e.jsxs(d.strong,{children:["Защита от мерцания и размонтирования UI (",e.jsx(d.code,{children:"isLoading"})," vs ",e.jsx(d.code,{children:"isFetchingMore"}),"):"]}),e.jsx(d.br,{}),`
`,"Флаг ",e.jsx(d.code,{children:"isLoading"})," равен ",e.jsx(d.code,{children:"true"})," ",e.jsx(d.strong,{children:"только при первичном запросе"}),", когда данных в памяти ещё нет. При скролле и догрузке следующих страниц ",e.jsx(d.code,{children:"isLoading"})," остаётся ",e.jsx(d.code,{children:"false"}),", а взводится ",e.jsx(d.code,{children:"isFetchingMore: true"}),". Список на экране не пропадает и не заменяется центральным лоадером!"]}),`
`,e.jsxs(d.li,{children:["🌐 ",e.jsxs(d.strong,{children:["Универсальная доставка ",e.jsx(d.code,{children:"page"})," и ",e.jsx(d.code,{children:"size"})," (Body + URL Query):"]}),e.jsx(d.br,{}),`
`,"Хук отправляет ",e.jsx(d.code,{children:"page"})," и ",e.jsx(d.code,{children:"size"})," одновременно:",`
`,e.jsxs(d.ol,{children:[`
`,e.jsxs(d.li,{children:["В теле POST-запроса (",e.jsx(d.code,{children:"data"}),"): ",e.jsx(d.code,{children:"{ ...filters, page: 1, size: 20 }"})," (для PHP ",e.jsx(d.code,{children:"php://input"}),", Express, ASP.NET)."]}),`
`,e.jsxs(d.li,{children:["В URL-параметрах (",e.jsx(d.code,{children:"params"}),"): ",e.jsx(d.code,{children:"?page=1&size=20"})," (для Spring Boot ",e.jsx(d.code,{children:"@RequestParam"})," и ",e.jsx(d.code,{children:"Pageable pageable"}),")."]}),`
`]}),`
`]}),`
`,e.jsxs(d.li,{children:["🛑 ",e.jsx(d.strong,{children:"Защита от Race Condition:"})," При быстром переключении страниц или быстром скролле предыдущий незавершенный запрос отменяется через ",e.jsx(d.code,{children:"AbortController"}),"."]}),`
`,e.jsxs(d.li,{children:["🔗 ",e.jsxs(d.strong,{children:["Готовое сопряжение с ",e.jsx(d.code,{children:"<FPagination />"}),":"]})," Возвращает готовый объект ",e.jsx(d.code,{children:"paginationProps"})," для прямой распаковки ",e.jsx(d.code,{children:"<FPagination {...paginationProps} />"}),"."]}),`
`]}),`
`,e.jsx(d.hr,{}),`
`,e.jsxs(d.h2,{id:"-выбор-режима-mode-pagination-vs-mode-infinite",children:["💡 Выбор режима: ",e.jsx(d.code,{children:"mode: 'pagination'"})," vs ",e.jsx(d.code,{children:"mode: 'infinite'"})]}),`
`,e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"14px",marginBottom:"24px"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{background:"#f5f5f5"},children:[e.jsx("th",{style:{padding:"10px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Параметр"}),e.jsxs("th",{style:{padding:"10px",border:"1px solid #e0e0e0",textAlign:"left"},children:[e.jsx("code",{children:"mode: 'pagination'"})," (по умолчанию)"]}),e.jsx("th",{style:{padding:"10px",border:"1px solid #e0e0e0",textAlign:"left"},children:e.jsx("code",{children:"mode: 'infinite'"})})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("strong",{children:"Концепция"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Классические страницы 1, 2, 3..."}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Бесконечный скролл (Infinite Scroll)"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsxs("strong",{children:["Поведение ",e.jsx("code",{children:"data"})]})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Заменяется на порцию текущей страницы"}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Накапливается (добавляется в конец списка)"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("strong",{children:"Навигация"})}),e.jsxs("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:["Компонент ",e.jsx("code",{children:"<FPagination {...paginationProps} />"})]}),e.jsxs("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:["Функция ",e.jsx("code",{children:"loadMore()"})," при скролле вниз"]})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("strong",{children:"С каким компонентом использовать"})}),e.jsxs("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:["Обычный ",e.jsx("code",{children:"FTable"}),", карточки"]}),e.jsxs("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:[e.jsx("code",{children:"FProgressiveList"})," (с ",e.jsx("code",{children:"virtualize={true}"}),")"]})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("strong",{children:"Подходящий объем данных"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Любой (100–100 000 строк)"}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Отчеты с естественным чтением сверху вниз"})]})]})]}),`
`,e.jsx(d.hr,{}),`
`,e.jsxs(d.h2,{id:"️-рецепт-1-бесконечный-скролл-с-fprogressivelist-gmvo--тяжелые-отчеты",children:["🛠️ Рецепт 1: Бесконечный скролл с ",e.jsx(d.code,{children:"FProgressiveList"})," (GMVO / тяжелые отчеты)"]}),`
`,e.jsx(d.p,{children:"Этот паттерн используется, когда отчет состоит из множества таблиц или карточек и пользователь скроллит страницу вниз."}),`
`,e.jsx(d.pre,{children:e.jsx(d.code,{className:"language-tsx",children:`import React from 'react';
import {
  FButton,
  FProgress,
  FStack,
  FProgressiveList,
  useFManualPagination,
  fNotification,
} from 'fui-material';

// 1. Описываем типы
interface IReportItem {
  kod_hp: string;
  name_hp: string;
  years: Array<{ year: number; avg_level: number }>;
}

interface IServerResponse {
  data: {
    result: {
      posts: IReportItem[];
    };
    meta: {
      reportTitle: string;
    };
    page: {
      totalItems: number;
      size: number;
      totalPages: number;
      number: number;
    };
  };
}

interface IFilterPayload {
  years: string[];
  basin_id?: string;
}

export const InfiniteReportPage: React.FC = () => {
  // 2. Инициализируем хук
  const {
    data: reportData,       // Накопленный объект отчета после select
    isLoading,              // Первичная загрузка (true только пока данных нет)
    isFetchingMore,         // Идет ли догрузка следующей страницы по скроллу
    hasMore,                // Есть ли еще страницы на сервере
    loadMore,               // Функция подгрузки следующей страницы
    submitFilters,          // Запуск отчета по кнопке
  } = useFManualPagination<IServerResponse, IServerResponse['data'], IFilterPayload>({
    queryKey: 'hydrology-report',
    url: '/api/v1/reports/hydrology',
    defaultPageSize: 20,
    mode: 'infinite',       // <-- Включаем режим накопления для скролла
    select: (res) => res.data,          // Извлекаем объект данных
    selectPage: (res) => res.data.page, // Извлекаем пагинацию
    // appendData писать НЕ нужно: хук сам найдет массив posts внутри result и склеит его!
  });

  const handleGenerate = () => {
    submitFilters({
      payload: {
        years: ['2024', '2025', '2026'],
        basin_id: '01',
      },
      resetPage: true, // Сбрасываем скролл и страницу на 1
    });
  };

  const posts = reportData?.result?.posts ?? [];

  return (
    <FStack direction="column" spacing={2} st={{ padding: 20 }}>
      <FButton color="primary" onClick={handleGenerate} disabled={isLoading}>
        Сформировать отчет
      </FButton>

      {/* 
        ВАЖНО: проверяем (isLoading && !reportData). 
        Если данные уже есть, центральный лоадер НЕ должен перекрывать экран!
      */}
      {isLoading && !reportData ? (
        <FStack justifyContent="center" st={{ padding: 40 }}>
          <FProgress />
        </FStack>
      ) : reportData && (
        <FProgressiveList
          items={posts}
          virtualize={true}             // <-- Включаем виртуальное окно (держит в DOM всего 6-8 таблиц)
          overscan={2}                  // Буфер из 2 таблиц выше и ниже экрана
          estimatedItemHeight={360}     // Примерная высота таблицы для стабильного скролла
          keyExtractor={(item) => item.kod_hp}
          onLoadMore={loadMore}         // Вызов при доскролле
          hasMore={hasMore}             // Флаг наличия страниц
          isLoadingMore={isFetchingMore}// Покажет спиннер внизу списка при догрузке
        >
          {(item, index) => (
            <div style={{ border: '1px solid #ccc', padding: 16 }}>
              <h3>Пост #{item.kod_hp} — {item.name_hp}</h3>
              {/* Рендер таблицы поста */}
            </div>
          )}
        </FProgressiveList>
      )}
    </FStack>
  );
};
`})}),`
`,e.jsx(d.hr,{}),`
`,e.jsxs(d.h2,{id:"️-рецепт-2-классическая-пагинация-по-страницам-с-fpagination-",children:["🛠️ Рецепт 2: Классическая пагинация по страницам с ",e.jsx(d.code,{children:"<FPagination />"})]}),`
`,e.jsx(d.p,{children:"Подходит для обычных реестров, справочников и таблиц с фиксированным переключением страниц внизу."}),`
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

interface IUserItem {
  id: number;
  name: string;
  email: string;
}

interface IUsersResponse {
  result: IUserItem[];
  page: {
    totalItems: number;
    size: number;
    totalPages: number;
    number: number;
  };
}

export const UsersTablePage: React.FC = () => {
  const [searchName, setSearchName] = useState('');

  const {
    data: users,
    isLoading,
    isFetching,
    submitFilters,
    paginationProps, // Готовые пропсы для <FPagination />
  } = useFManualPagination<IUsersResponse, IUserItem[], { name?: string }>({
    queryKey: 'users-registry',
    url: '/api/v1/users/search',
    defaultPageSize: 10,
    mode: 'pagination', // По умолчанию: смена страницы заменяет данные
    select: (res) => res.result,
  });

  return (
    <FPaper st={{ padding: 20 }}>
      <div style={{ display: 'flex', gap: 12, marginBottom: 16 }}>
        <input
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
          placeholder="Поиск по имени..."
        />
        <FButton onClick={() => submitFilters({ payload: { name: searchName }, resetPage: true })}>
          Найти
        </FButton>
      </div>

      <FTable>
        <FTableHead>
          <FTableRow>
            <FTableHeaderCell>ID</FTableHeaderCell>
            <FTableHeaderCell>Имя</FTableHeaderCell>
            <FTableHeaderCell>Email</FTableHeaderCell>
          </FTableRow>
        </FTableHead>
        <FTableBody>
          {users?.map((u) => (
            <FTableRow key={u.id}>
              <FTableDataCell>{u.id}</FTableDataCell>
              <FTableDataCell>{u.name}</FTableDataCell>
              <FTableDataCell>{u.email}</FTableDataCell>
            </FTableRow>
          ))}
        </FTableBody>
      </FTable>

      {/* Готовое переключение страниц в одну строчку: */}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 16 }}>
        <FPagination {...paginationProps} />
      </div>
    </FPaper>
  );
};
`})}),`
`,e.jsx(d.hr,{}),`
`,e.jsxs(d.h2,{id:"️-рецепт-3-spring-data-rest-_embedded-и-totalelements",children:["🛠️ Рецепт 3: Spring Data REST (",e.jsx(d.code,{children:"_embedded"})," и ",e.jsx(d.code,{children:"totalElements"}),")"]}),`
`,e.jsxs(d.p,{children:["Если ваш бекенд написан на Spring Data REST, формат ответа отличается (",e.jsx(d.code,{children:"_embedded.items"})," вместо ",e.jsx(d.code,{children:"result"}),", ",e.jsx(d.code,{children:"totalElements"})," вместо ",e.jsx(d.code,{children:"totalItems"}),"). Хук легко адаптируется через селекторы:"]}),`
`,e.jsx(d.pre,{children:e.jsx(d.code,{className:"language-tsx",children:`const { data, paginationProps, submitFilters } = useFManualPagination({
  queryKey: 'spring-activities',
  url: '/data/asvActivities',
  defaultPageSize: 20,
  // 1. Маршрут до массива данных:
  select: (res) => res._embedded.asvActivities,
  // 2. Адаптация метаданных пагинации:
  selectPage: (res) => ({
    totalItems: res.page.totalElements, // маппинг totalElements -> totalItems
    size: res.page.size,
    totalPages: res.page.totalPages,
    number: res.page.number,
  }),
});
`})}),`
`,e.jsx(d.hr,{}),`
`,e.jsxs(d.h2,{id:"-опции-хука-iusefmanualpaginationoptions",children:["📋 Опции хука (",e.jsx(d.code,{children:"IUseFManualPaginationOptions"}),")"]}),`
`,e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"14px"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{background:"#f5f5f5"},children:[e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Опция"}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Тип"}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"По умолчанию"}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Описание"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"queryKey"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"string"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"-"}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Уникальный ключ TanStack Query для кэширования запроса"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"url"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"string"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"-"}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"URL эндпоинта (относительно базового API URL)"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"mode"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"'pagination' | 'infinite'"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"'pagination'"})}),e.jsxs("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:["Режим работы: замена страницы (",e.jsx("code",{children:"pagination"}),") или накопление для скролла (",e.jsx("code",{children:"infinite"}),")"]})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"defaultPageSize"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"number"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"20"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Количество элементов на странице"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"method"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"'POST' | 'GET'"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"'POST'"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"HTTP метод запроса"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"select"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"(res) => TData"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"-"}),e.jsxs("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:["Функция распаковки полезной нагрузки из ответа сервера (например, ",e.jsx("code",{children:"(res) => res.data"}),")"]})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"selectPage"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"(res) => IBackendPageMeta"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"-"}),e.jsxs("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:["Функция извлечения объекта пагинации. По умолчанию ищет ",e.jsx("code",{children:"page"})," или ",e.jsx("code",{children:"pagination"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"appendData"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"(prev, next) => TData"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"авто-слияние"}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Кастомное объединение данных для infinite режима. Если не задана — хук объединяет автоматически"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"onErrorNotification"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"true"})}),e.jsxs("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:["Показывать ли всплывающее уведомление об ошибке через ",e.jsx("code",{children:"fNotification"})]})]})]})]}),`
`,e.jsx(d.hr,{}),`
`,e.jsxs(d.h2,{id:"-возвращаемые-значения-iusefmanualpaginationresult",children:["📊 Возвращаемые значения (",e.jsx(d.code,{children:"IUseFManualPaginationResult"}),")"]}),`
`,e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"14px"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{background:"#f5f5f5"},children:[e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Свойство"}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Тип"}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Когда использовать"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsxs("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:[e.jsx("code",{children:"data"})," (алиас: ",e.jsx("code",{children:"result"}),")"]}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"TData | undefined"})}),e.jsxs("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:["Итоговые данные после селектора ",e.jsx("code",{children:"select"})," (в режиме ",e.jsx("code",{children:"infinite"})," — накопленные данные)"]})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"isLoading"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"boolean"})}),e.jsxs("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:[e.jsx("code",{children:"true"})," ",e.jsx("strong",{children:"только при первой загрузке"}),", пока данных ещё нет в памяти. Используйте для центрального спиннера"]})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"isFetching"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"boolean"})}),e.jsxs("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:[e.jsx("code",{children:"true"})," во время ",e.jsx("strong",{children:"любого"})," сетевого запроса к серверу (включая смену страниц и скролл)"]})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"isFetchingMore"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"boolean"})}),e.jsxs("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:[e.jsx("code",{children:"true"})," ",e.jsx("strong",{children:"только во время догрузки следующей страницы"})," по скроллу. Передавайте в ",e.jsx("code",{children:"isLoadingMore"})," списка"]})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"hasMore"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"boolean"})}),e.jsxs("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:["Есть ли ещё доступные страницы на сервере (",e.jsx("code",{children:"number < totalPages"}),")"]})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"submitFilters"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"(options) => Promise"})}),e.jsxs("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:["Запуск запроса с новыми фильтрами. Принимает ",e.jsx("code",{children:"{ payload, resetPage: true }"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"loadMore"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"() => Promise"})}),e.jsxs("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:["Запрос следующей страницы для бесконечного скролла. Передавайте в ",e.jsx("code",{children:"onLoadMore"})," списка"]})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"changePage"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"(newPage: number) => Promise"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Ручной переход на конкретную страницу со склейкой текущих фильтров"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"paginationProps"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"IFPagination"})}),e.jsxs("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:["Готовый объект пропсов для компонента ",e.jsx("code",{children:"<FPagination {...paginationProps} />"})]})]})]})]}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"-часто-задаваемые-вопросы-faq",children:"❓ Часто задаваемые вопросы (FAQ)"}),`
`,e.jsx(d.h3,{id:"1-почему-при-скролле-пропадал-список-и-показывался-центральный-спиннер",children:"1. Почему при скролле пропадал список и показывался центральный спиннер?"}),`
`,e.jsxs(d.p,{children:["Потому что в разметке компонента проверялось просто ",e.jsx(d.code,{children:"loading ? <FProgress /> : <List />"}),".",e.jsx(d.br,{}),`
`,"При скролле отправляется запрос за следующей страницей. Если проверять только ",e.jsx(d.code,{children:"isLoading"}),", экран будет мигать.",e.jsx(d.br,{}),`
`,e.jsx(d.strong,{children:"Правильное условие:"})]}),`
`,e.jsx(d.pre,{children:e.jsx(d.code,{className:"language-tsx",children:`{isLoading && !data ? (
    <FProgress /> // Показываем центральный лоадер ТОЛЬКО пока данных вообще нет в памяти
) : data && (
    <FProgressiveList ... /> // Список смонтирован и НЕ размонтируется при подгрузке!
)}
`})}),`
`,e.jsxs(d.h3,{id:"2-нужно-ли-мне-вручную-писать-функцию-appenddata",children:["2. Нужно ли мне вручную писать функцию ",e.jsx(d.code,{children:"appendData"}),"?"]}),`
`,e.jsxs(d.p,{children:[e.jsx(d.strong,{children:"Нет!"})," В 99% случаев встроенный авто-мерджер сам определит структуру ответа и объединит массивы (включая вложенные ",e.jsx(d.code,{children:"res.data.result.posts"}),"). Функция ",e.jsx(d.code,{children:"appendData"})," нужна только для экзотических ответов бекенда с нестандартной структурой."]}),`
`,e.jsxs(d.h3,{id:"3-где-передаются-page-и-size",children:["3. Где передаются ",e.jsx(d.code,{children:"page"})," и ",e.jsx(d.code,{children:"size"}),"?"]}),`
`,e.jsx(d.p,{children:"Хук отправляет их одновременно:"}),`
`,e.jsxs(d.ul,{children:[`
`,e.jsxs(d.li,{children:["В теле запроса: ",e.jsx(d.code,{children:'{"years": [...], "page": 1, "size": 20}'})]}),`
`,e.jsxs(d.li,{children:["В адресе URL: ",e.jsx(d.code,{children:"/endpoint?page=1&size=20"}),e.jsx(d.br,{}),`
`,"Поэтому запросы без проблем обрабатываются и PHP (",e.jsx(d.code,{children:"php://input"}),"), и Spring Boot (",e.jsx(d.code,{children:"@RequestParam"})," / ",e.jsx(d.code,{children:"Pageable"}),")."]}),`
`]})]})}function m(n={}){const{wrapper:d}={...r(),...n.components};return d?e.jsx(d,{...n,children:e.jsx(s,{...n})}):s(n)}export{m as default};
