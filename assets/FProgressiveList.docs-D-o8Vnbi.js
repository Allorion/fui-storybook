import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as i}from"./index-BoUPaUI-.js";import"./index-C4mtzm2w.js";import{M as n}from"./index-br71zC3k.js";import"./index-B3j06Xw8.js";import"./preview-DbypPfl0.js";import"./iframe-BkKXG2Kh.js";import"./DocsRenderer-CFRXHY34-DB7y8ihN.js";import"./client-DOawrHdJ.js";import"./index-DW0t0JKo.js";import"./index-D_ywfbVi.js";import"./index-DgH-xKnr.js";import"./index-Bhqu_tAV.js";function s(r){const d={blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(n,{title:"Material/FProgressiveList"}),`
`,e.jsx(d.h1,{id:"-fprogressivelist--прогрессивный-рендеринг-и-virtual-windowing",children:"⚡ FProgressiveList — Прогрессивный рендеринг и Virtual Windowing"}),`
`,e.jsxs(d.blockquote,{children:[`
`,e.jsxs(d.p,{children:[e.jsx(d.strong,{children:"Высокопроизводительный компонент для рендеринга тяжелых списков и больших массивов данных"})," (сотни и тысячи финансовых/гидрологических таблиц, сложные карточки).",e.jsx(d.br,{}),`
`,"Поддерживает два мощных режима работы: ",e.jsxs(d.strong,{children:["порционный Time-Slicing с сохранением нативного поиска ",e.jsx(d.code,{children:"Ctrl + F"})]})," и ",e.jsx(d.strong,{children:"полноценное виртуальное окно (Virtual Windowing)"})," без сторонних библиотек."]}),`
`]}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"-два-режима-работы-какой-выбрать",children:"🚀 Два режима работы: какой выбрать?"}),`
`,e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"14px",marginBottom:"24px"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{background:"#f5f5f5"},children:[e.jsx("th",{style:{padding:"10px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Параметр"}),e.jsxs("th",{style:{padding:"10px",border:"1px solid #e0e0e0",textAlign:"left"},children:["Режим 1: Time-Slicing (",e.jsx("code",{children:"virtualize={false}"}),")"]}),e.jsxs("th",{style:{padding:"10px",border:"1px solid #e0e0e0",textAlign:"left"},children:["Режим 2: Virtual Windowing (",e.jsx("code",{children:"virtualize={true}"}),")"]})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("strong",{children:"Как работает"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsxs(d.p,{children:["Монтирует элементы порциями по ",e.jsx("code",{children:"chunkSize"})," через ",e.jsx("code",{children:"requestAnimationFrame"}),". Для невидимых блоков применяется стиль ",e.jsx("code",{children:"content-visibility: auto"}),"."]})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsxs(d.p,{children:["Физически размонтирует и удаляет из DOM блоки, ушедшие за экран. В DOM всегда живут ",e.jsx("strong",{children:"только 6–10 видимых блоков"}),". Сверху и снизу стоят пустые спейсеры-распорки."]})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("strong",{children:"Узлы в DOM"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Все загруженные элементы присутствуют в DOM-дереве"}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Всегда фиксированно ~6–10 элементов (~1 500 узлов)"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsxs("strong",{children:["Поиск ",e.jsx("code",{children:"Ctrl + F"})]})}),e.jsxs("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:["✅ ",e.jsx("strong",{children:"Работает на 100%!"})," Браузер находит текст по всей странице и разворачивает блок."]}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Только по видимым на экране блокам (невидимые выгружены из DOM)."})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("strong",{children:"Рекомендуемый объем"})}),e.jsxs("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:[e.jsx("strong",{children:"До 200–300 тяжелых таблиц"})," или тысячи легких карточек"]}),e.jsxs("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:[e.jsx("strong",{children:"От 300 до 10 000+ тяжелых таблиц"})," (совершенно без тормозов)"]})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("strong",{children:"Потребление RAM"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Растет пропорционально количеству элементов в DOM"}),e.jsxs("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:[e.jsx("strong",{children:"Минимальное и стабильное"}),": память не утекает"]})]})]})]}),`
`,e.jsx(d.hr,{}),`
`,e.jsxs(d.h2,{id:"️-рецепт-1-2-000-тяжелых-таблиц-с-virtualizetrue-и-скроллом",children:["🛠️ Рецепт 1: 2 000 тяжелых таблиц с ",e.jsx(d.code,{children:"virtualize={true}"})," и скроллом"]}),`
`,e.jsx(d.p,{children:"Этот пример демонстрирует подключение отчета к бесконечному скроллу с гарантией 60 FPS на любых объемах данных."}),`
`,e.jsx(d.pre,{children:e.jsx(d.code,{className:"language-tsx",children:`import React from 'react';
import { FProgressiveList, FStack, FProgress } from 'fui-material';

interface IPostItem {
  kod_hp: string;
  name_hp: string;
  altitude: number;
  years: Array<{ year: number; avg_level: number }>;
}

interface IReportProps {
  posts: IPostItem[];
  loadMore?: () => void;
  hasMore?: boolean;
  isFetchingMore?: boolean;
}

export const HeavyTablesReport: React.FC<IReportProps> = ({
  posts,
  loadMore,
  hasMore,
  isFetchingMore,
}) => {
  return (
    <FProgressiveList
      items={posts}
      virtualize={true}             // <-- Активируем Virtual Windowing
      overscan={2}                  // Рендерим по 2 таблицы с запасом сверху и снизу
      estimatedItemHeight={360}     // Примерная высота таблицы для стабильного скроллбара
      keyExtractor={(item) => item.kod_hp}
      onLoadMore={loadMore}         // Коллбэк подгрузки при приближении к низу
      hasMore={hasMore}             // Флаг наличия следующих страниц
      isLoadingMore={isFetchingMore}// Покажет аккуратный спиннер снизу во время подгрузки
      loader={
        <div style={{ padding: 16, textAlign: 'center' }}>
          <FProgress />
        </div>
      }
    >
      {(post, index) => (
        <div style={{ background: '#fff', border: '1px solid #e0e0e0', padding: 16 }}>
          <h4>Пост: {post.kod_hp} — {post.name_hp} (Отметка: {post.altitude})</h4>
          {/* Любая сложная таблица с десятками строк и 14 колонками */}
        </div>
      )}
    </FProgressiveList>
  );
};
`})}),`
`,e.jsx(d.hr,{}),`
`,e.jsxs(d.h2,{id:"️-рецепт-2-базовый-time-slicing-без-виртуализации-virtualizefalse",children:["🛠️ Рецепт 2: Базовый Time-Slicing без виртуализации (",e.jsx(d.code,{children:"virtualize={false}"}),")"]}),`
`,e.jsxs(d.p,{children:["Идеально подходит для списков до 200–300 элементов, где критически важна работа поиска по странице через ",e.jsx(d.code,{children:"Ctrl + F"})," или печать страницы через ",e.jsx(d.code,{children:"Ctrl + P"}),"."]}),`
`,e.jsx(d.pre,{children:e.jsx(d.code,{className:"language-tsx",children:`<FProgressiveList
  items={items}
  virtualize={false}          // <-- По умолчанию: все элементы сохраняются в DOM
  chunkSize={6}               // Монтируем по 6 карточек за один кадр анимации (16.6 мс)
  estimatedItemHeight={120}   // Аппаратная CSS-изоляция content-visibility
  keyExtractor={(item) => item.id}
>
  {(item) => (
    <div style={{ padding: 16, marginBottom: 12, border: '1px solid #ddd' }}>
      <strong>{item.title}</strong>
      <p>{item.description}</p>
    </div>
  )}
</FProgressiveList>
`})}),`
`,e.jsx(d.hr,{}),`
`,e.jsxs(d.h2,{id:"️-важно-экспорт-в-wordexcel-exportdocxandxlsx-и-htmlstring",children:["⚠️ ВАЖНО: Экспорт в Word/Excel (",e.jsx(d.code,{children:"ExportDocxAndXlsx"})," и ",e.jsx(d.code,{children:"htmlString"}),")"]}),`
`,e.jsxs(d.p,{children:["Если ваш компонент экспортируется в форматы Word / Excel через функцию ",e.jsx(d.code,{children:"htmlString"})," (использующую ",e.jsx(d.code,{children:"ReactDOMServer.renderToStaticMarkup"}),"):"]}),`
`,e.jsxs(d.blockquote,{children:[`
`,e.jsxs(d.p,{children:[e.jsx(d.strong,{children:"Внимание:"})," В статическом SSR-рендеринге браузерные хуки (",e.jsx(d.code,{children:"useEffect"}),", ",e.jsx(d.code,{children:"requestAnimationFrame"}),") не запускаются!",e.jsx(d.br,{}),`
`,"Если передать ",e.jsx(d.code,{children:"FProgressiveList"})," внутрь ",e.jsx(d.code,{children:"htmlString"}),", экспортируется только начальная порция элементов (",e.jsx(d.code,{children:"chunkSize"}),")."]}),`
`]}),`
`,e.jsx(d.h3,{id:"правильный-паттерн-для-экспорта",children:"Правильный паттерн для экспорта:"}),`
`,e.jsxs(d.p,{children:["Принимайте в компоненте флаг ",e.jsx(d.code,{children:"isExport?: boolean"}),". Если он равен ",e.jsx(d.code,{children:"true"}),", выполняйте синхронный рендер всех элементов через обычный ",e.jsx(d.code,{children:".map()"}),":"]}),`
`,e.jsx(d.pre,{children:e.jsx(d.code,{className:"language-tsx",children:`export const TableComponent: React.FC<{
  posts: IPostItem[];
  isExport?: boolean;
  loadMore?: () => void;
  hasMore?: boolean;
  isFetchingMore?: boolean;
}> = ({ posts, isExport, loadMore, hasMore, isFetchingMore }) => {
  return (
    <div>
      {/* Если идет выгрузка в Word/Excel — рендерим все посты синхронно */}
      {isExport ? (
        posts.map((post, index) => renderSingleTable(post, index))
      ) : (
        /* На экране пользователя работает виртуализированный бесконечный скролл */
        <FProgressiveList
          items={posts}
          virtualize={true}
          estimatedItemHeight={360}
          keyExtractor={(item) => item.kod_hp}
          onLoadMore={loadMore}
          hasMore={hasMore}
          isLoadingMore={isFetchingMore}
        >
          {(post, index) => renderSingleTable(post, index)}
        </FProgressiveList>
      )}
    </div>
  );
};

// Вызов генерации документа для кнопки экспорта:
const exportJsx = useMemo(() => {
  return htmlString(<TableComponent posts={posts} isExport={true} />);
}, [posts]);
`})}),`
`,e.jsx(d.hr,{}),`
`,e.jsxs(d.h2,{id:"-полная-таблица-пропсов-ifprogressivelistpropst",children:["📋 Полная таблица пропсов (",e.jsx(d.code,{children:"IFProgressiveListProps<T>"}),")"]}),`
`,e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"14px"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{background:"#f5f5f5"},children:[e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Проп"}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Тип"}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"По умолчанию"}),e.jsx("th",{style:{padding:"8px",border:"1px solid #e0e0e0",textAlign:"left"},children:"Описание"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"items"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"T[]"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"-"}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Массив исходных данных (таблицы, карточки, строки)"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"children"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"(item, index) => ReactNode"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"-"}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Функция рендера каждого элемента списка (Function as Child)"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"keyExtractor"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"(item, index) => string | number"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"-"}),e.jsxs("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:["Генерация стабильного уникального ключа элемента (например, ",e.jsx("code",{children:"item.id"}),")"]})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"virtualize"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"false"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Включить режим виртуального окна (держит в DOM только 6–10 активных блоков)"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"overscan"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"number"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"2"})}),e.jsxs("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:["Количество элементов буфера выше и ниже экрана при ",e.jsx("code",{children:"virtualize={true}"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"estimatedItemHeight"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"number"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"280"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Примерная высота блока в px. Используется для расчета спейсеров скролла"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"chunkSize"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"number"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"6"})}),e.jsxs("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:["Размер порции, монтируемой за один кадр анимации (в режиме ",e.jsx("code",{children:"virtualize={false}"}),")"]})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"onLoadMore"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"() => void"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"undefined"})}),e.jsxs("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:["Коллбэк подгрузки следующей страницы при доскролле вниз (передавайте ",e.jsx("code",{children:"loadMore"}),")"]})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"hasMore"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"false"})}),e.jsxs("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:["Флаг наличия следующих страниц на сервере (передавайте ",e.jsx("code",{children:"hasMore"}),")"]})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"isLoadingMore"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"false"})}),e.jsxs("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:["Флаг активного запроса за следующей страницей (передавайте ",e.jsx("code",{children:"isFetchingMore"}),")"]})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"loader"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"ReactNode"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"<FProgress />"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Кастомный спиннер в самом низу списка во время подгрузки данных"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"threshold"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"number"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:e.jsx("code",{children:"250"})}),e.jsx("td",{style:{padding:"8px",border:"1px solid #e0e0e0"},children:"Упреждающий отступ в пикселях до конца списка для раннего срабатывания подгрузки"})]})]})]}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"-полезные-советы-разработчикам",children:"💡 Полезные советы разработчикам"}),`
`,e.jsxs(d.ol,{children:[`
`,e.jsxs(d.li,{children:[e.jsx(d.strong,{children:"Что делать, если у таблиц разная высота?"}),e.jsx(d.br,{}),`
`,"Ничего не нужно настраивать! В компонент встроен нативный ",e.jsx(d.code,{children:"ResizeObserver"}),", который автоматически замеряет точную высоту каждого смонтированного элемента и корректирует спейсеры на лету. В ",e.jsx(d.code,{children:"estimatedItemHeight"})," достаточно указать среднее приблизительное значение (например, 360px)."]}),`
`,e.jsxs(d.li,{children:[e.jsx(d.strong,{children:"Как избежать скачков скролла?"}),e.jsx(d.br,{}),`
`,"Всегда передавайте стабильный ",e.jsx(d.code,{children:"keyExtractor"})," (например, ",e.jsx(d.code,{children:"(item) => item.kod_hp"}),"), а не индекс массива. Это предотвращает повторное создание DOM-элементов при обновлении списка."]}),`
`,e.jsxs(d.li,{children:[e.jsxs(d.strong,{children:["Когда включать ",e.jsx(d.code,{children:"virtualize={true}"}),"?"]}),e.jsx(d.br,{}),`
`,"Если в вашем отчете отображается более 100 тяжелых таблиц, включайте ",e.jsx(d.code,{children:"virtualize={true}"}),". Браузер будет работать плавно, как будто на странице открыта всего одна таблица."]}),`
`]})]})}function u(r={}){const{wrapper:d}={...i(),...r.components};return d?e.jsx(d,{...r,children:e.jsx(s,{...r})}):s(r)}export{u as default};
