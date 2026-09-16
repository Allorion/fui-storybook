import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{F as b,a as y,b as n,c as r,d as F,e as a,f as _,g as D}from"./FTableActions-BFXkna1l.js";import{within as p,userEvent as o,waitFor as x,expect as l}from"./index-DH-M5T-F.js";import"./index-B3j06Xw8.js";import"./index-D_ywfbVi.js";import"./index-DW0t0JKo.js";const J={title:"Material/FTableComponents",component:b,parameters:{controls:{expanded:!0}}},u={render:()=>e.jsxs(b,{children:[e.jsx(y,{children:e.jsxs(n,{children:[e.jsx(r,{sortKey:"name",children:"Название"}),e.jsx(r,{sortKey:"quantity",children:"Количество"}),e.jsx(r,{sortKey:"price",children:"Цена"})]})}),e.jsxs(F,{children:[e.jsxs(n,{children:[e.jsx(a,{sortKey:"name",children:"Товар 1"}),e.jsx(a,{sortKey:"quantity",sortValue:10,children:"10"}),e.jsx(a,{sortKey:"price",sortValue:100,children:"100 ₽"})]}),e.jsxs(n,{children:[e.jsx(a,{sortKey:"name",children:"Товар 2"}),e.jsx(a,{sortKey:"quantity",sortValue:5,children:"5"}),e.jsx(a,{sortKey:"price",sortValue:200,children:"200 ₽"})]})]}),e.jsx(_,{children:e.jsxs(n,{children:[e.jsx(a,{children:"Итого"}),e.jsx(a,{children:"15"}),e.jsx(a,{children:"2000 ₽"})]})})]}),play:async({canvasElement:i})=>{const t=p(i),s=()=>{var d;return(d=i.querySelector("tbody tr td"))==null?void 0:d.textContent};await o.click(t.getByRole("button",{name:"Количество"})),await x(()=>l(s()).toBe("Товар 2")),await l(t.getByRole("columnheader",{name:"Количество"})).toHaveAttribute("aria-sort","ascending"),await o.click(t.getByRole("button",{name:"Количество"})),await x(()=>l(s()).toBe("Товар 1")),await o.click(t.getByRole("button",{name:"Количество"})),await l(t.getByRole("columnheader",{name:"Количество"})).toHaveAttribute("aria-sort","none"),await o.click(t.getByRole("button",{name:"Цена"})),await l(t.getByRole("columnheader",{name:"Цена"})).toHaveAttribute("aria-sort","ascending"),await l(t.getByRole("columnheader",{name:"Количество"})).toHaveAttribute("aria-sort","none")}},c="Свияжка от истока до города Свияж, включая водоохранную зону и прилегающие участки Ульяновской области.",w={render:()=>e.jsxs(b,{layout:"fixed",st:{minWidth:700},children:[e.jsxs(y,{children:[e.jsxs(n,{children:[e.jsx(r,{row:2,width:38,children:"№"}),e.jsx(r,{row:2,"aria-label":"Действия",width:38}),e.jsx(r,{col:2,textAlignment:"center",children:"Документ"}),e.jsx(r,{row:2,children:"Водный объект"})]}),e.jsxs(n,{children:[e.jsx(r,{children:"Рег. номер"}),e.jsx(r,{children:"Статус"})]})]}),e.jsxs(F,{truncateAt:28,children:[e.jsxs(n,{children:[e.jsx(a,{children:"1"}),e.jsx(a,{children:e.jsxs(D,{children:[e.jsx("button",{type:"button",onClick:i=>{i.currentTarget.textContent="Сохранено"},children:"Редактировать"}),e.jsx("button",{type:"button",children:"Копировать"}),e.jsx("hr",{}),e.jsx("button",{type:"button","data-danger":!0,children:"Удалить"})]})}),e.jsx(a,{truncate:!1,children:"73-11.01.00.013-П-РЮБЬ-С-2025-12345/00"}),e.jsx(a,{children:"Проект"}),e.jsx(a,{children:c})]}),e.jsxs(n,{children:[e.jsx(a,{children:"2"}),e.jsx(a,{children:e.jsxs(D,{children:[e.jsx("button",{type:"button",onClick:i=>{i.currentTarget.textContent="Сохранено"},children:"Редактировать"}),e.jsx("button",{type:"button",children:"Копировать"}),e.jsx("hr",{}),e.jsx("button",{type:"button","data-danger":!0,children:"Удалить"})]})}),e.jsx(a,{truncate:!1,children:"73-11.01.00.013-П-РЮБЬ-С-2025-12345/00"}),e.jsx(a,{children:"Проект"}),e.jsx(a,{children:c})]})]}),e.jsx(_,{children:e.jsx(n,{children:e.jsx(a,{col:5,children:"Всего: 2 участка"})})})]}),play:async({canvasElement:i})=>{const t=p(i);for(const T of i.querySelectorAll("[popover]"))await l(T.matches(":popover-open")).toBe(!1),await l(T).not.toBeVisible();for(const T of i.querySelectorAll("tbody > tr"))await l(T.children).toHaveLength(5),await l(T.querySelector('[rowspan="2"]')).toBeNull();const s=t.getAllByRole("button",{name:c})[0];await l(s).toHaveAttribute("aria-expanded","false"),await o.hover(s);const d=p(i.ownerDocument.body);await l(await d.findByRole("tooltip")).toHaveTextContent(c),await o.keyboard("{Escape}"),await x(()=>l(d.queryByRole("tooltip")).toBeNull()),await o.unhover(s),await o.click(s),await l(s).toHaveAttribute("aria-expanded","true"),await o.keyboard("{Enter}"),await l(s).toHaveAttribute("aria-expanded","false"),await l(t.getAllByText("73-11.01.00.013-П-РЮБЬ-С-2025-12345/00")[0].tagName).toBe("TD");const j=t.getAllByRole("button",{name:"Действия"})[0];await o.click(j),await l(t.getByRole("button",{name:"Редактировать"})).toBeVisible(),await o.click(t.getByRole("button",{name:"Редактировать"})),await x(()=>l(j).toHaveAttribute("aria-expanded","false"));const g=t.getAllByRole("button",{name:"Действия"})[1];await o.click(g),await l(t.getByRole("button",{name:"Редактировать"})).toBeVisible(),await o.keyboard("{Escape}"),await x(()=>l(g).toHaveAttribute("aria-expanded","false"))}},h={render:()=>e.jsx(b,{layout:"fixed",children:e.jsx(F,{children:e.jsxs(n,{children:[e.jsx(a,{truncate:!0,children:c}),e.jsx(a,{children:c}),e.jsx(a,{truncate:!0,children:e.jsx("a",{href:"#example",children:"Ссылка остаётся интерактивной"})})]})})})},m={render:()=>e.jsxs(b,{searchable:!0,layout:"fixed",children:[e.jsx(y,{children:e.jsxs(n,{children:[e.jsx(r,{width:60,sortKey:"number",children:"№"}),e.jsx(r,{children:"Описание"})]})}),e.jsx(F,{children:Array.from({length:1e4},(i,t)=>e.jsxs(n,{children:[e.jsx(a,{sortKey:"number",sortValue:t+1,children:t+1}),e.jsx(a,{children:`${c} Запись ${t+1}`})]},t))})]})},C={render:()=>e.jsxs(b,{style:{maxWidth:700},children:[e.jsxs(y,{children:[e.jsxs(n,{children:[e.jsx(r,{row:2,width:50,textAlignment:"center",children:"№"}),e.jsx(r,{col:3,textAlignment:"center",children:"Параметры водопользования"}),e.jsx(r,{row:2,width:220,children:"Организация"}),e.jsx(r,{row:2,width:260,children:"Водный объект"})]}),e.jsxs(n,{children:[e.jsx(r,{width:150,textAlignment:"center",children:"т.м³"}),e.jsx(r,{width:150,textAlignment:"center",children:"т. кВт.ч"}),e.jsx(r,{width:150,textAlignment:"center",children:"км²"})]})]}),e.jsxs(F,{children:[e.jsxs(n,{children:[e.jsx(a,{textAlignment:"center",children:"1"}),e.jsx(a,{textAlignment:"center",children:"1 245.50"}),e.jsx(a,{textAlignment:"center",children:"340.20"}),e.jsx(a,{textAlignment:"center",children:"12.4"}),e.jsx(a,{children:"ПАО «РусГидро»"}),e.jsx(a,{children:"Куйбышевское водохранилище"})]}),e.jsxs(n,{children:[e.jsx(a,{textAlignment:"center",children:"2"}),e.jsx(a,{textAlignment:"center",children:"890.10"}),e.jsx(a,{textAlignment:"center",children:"210.00"}),e.jsx(a,{textAlignment:"center",children:"8.1"}),e.jsx(a,{children:"ГУП «Водоканал»"}),e.jsx(a,{children:"Река Свияга"})]})]})]})};var v,A,H;u.parameters={...u.parameters,docs:{...(v=u.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <FTable>\r
            <FTableHead>\r
                <FTableRow>\r
                    <FTableHeaderCell sortKey="name">Название</FTableHeaderCell>\r
                    <FTableHeaderCell sortKey="quantity">Количество</FTableHeaderCell>\r
                    <FTableHeaderCell sortKey="price">Цена</FTableHeaderCell>\r
                </FTableRow>\r
            </FTableHead>\r
            <FTableBody>\r
                <FTableRow>\r
                    <FTableDataCell sortKey="name">Товар 1</FTableDataCell>\r
                    <FTableDataCell sortKey="quantity" sortValue={10}>10</FTableDataCell>\r
                    <FTableDataCell sortKey="price" sortValue={100}>100 ₽</FTableDataCell>\r
                </FTableRow>\r
                <FTableRow>\r
                    <FTableDataCell sortKey="name">Товар 2</FTableDataCell>\r
                    <FTableDataCell sortKey="quantity" sortValue={5}>5</FTableDataCell>\r
                    <FTableDataCell sortKey="price" sortValue={200}>200 ₽</FTableDataCell>\r
                </FTableRow>\r
            </FTableBody>\r
            <FTableFooter>\r
                <FTableRow>\r
                    <FTableDataCell>Итого</FTableDataCell>\r
                    <FTableDataCell>15</FTableDataCell>\r
                    <FTableDataCell>2000 ₽</FTableDataCell>\r
                </FTableRow>\r
            </FTableFooter>\r
        </FTable>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const firstName = () => canvasElement.querySelector('tbody tr td')?.textContent;
    await userEvent.click(canvas.getByRole('button', {
      name: 'Количество'
    }));
    await waitFor(() => expect(firstName()).toBe('Товар 2'));
    await expect(canvas.getByRole('columnheader', {
      name: 'Количество'
    })).toHaveAttribute('aria-sort', 'ascending');
    await userEvent.click(canvas.getByRole('button', {
      name: 'Количество'
    }));
    await waitFor(() => expect(firstName()).toBe('Товар 1'));
    await userEvent.click(canvas.getByRole('button', {
      name: 'Количество'
    }));
    await expect(canvas.getByRole('columnheader', {
      name: 'Количество'
    })).toHaveAttribute('aria-sort', 'none');
    await userEvent.click(canvas.getByRole('button', {
      name: 'Цена'
    }));
    await expect(canvas.getByRole('columnheader', {
      name: 'Цена'
    })).toHaveAttribute('aria-sort', 'ascending');
    await expect(canvas.getByRole('columnheader', {
      name: 'Количество'
    })).toHaveAttribute('aria-sort', 'none');
  }
}`,...(H=(A=u.parameters)==null?void 0:A.docs)==null?void 0:H.source}}};var R,B,f;w.parameters={...w.parameters,docs:{...(R=w.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <FTable layout="fixed" st={{
    minWidth: 700
  }}>\r
        <FTableHead>\r
            <FTableRow>\r
                <FTableHeaderCell row={2} width={38}>№</FTableHeaderCell>\r
                <FTableHeaderCell row={2} aria-label="Действия" width={38} />\r
                <FTableHeaderCell col={2} textAlignment="center">Документ</FTableHeaderCell>\r
                <FTableHeaderCell row={2}>Водный объект</FTableHeaderCell>\r
            </FTableRow>\r
            <FTableRow>\r
                <FTableHeaderCell>Рег. номер</FTableHeaderCell>\r
                <FTableHeaderCell>Статус</FTableHeaderCell>\r
            </FTableRow>\r
        </FTableHead>\r
        <FTableBody truncateAt={28}>\r
            <FTableRow>\r
                <FTableDataCell>1</FTableDataCell>\r
                <FTableDataCell><FTableActions>\r
                    <button type="button" onClick={event => {
              event.currentTarget.textContent = 'Сохранено';
            }}>Редактировать</button>\r
                    <button type="button">Копировать</button><hr />\r
                    <button type="button" data-danger>Удалить</button>\r
                </FTableActions></FTableDataCell>\r
                <FTableDataCell truncate={false}>73-11.01.00.013-П-РЮБЬ-С-2025-12345/00</FTableDataCell>\r
                <FTableDataCell>Проект</FTableDataCell>\r
                <FTableDataCell>{longText}</FTableDataCell>\r
            </FTableRow>\r
            <FTableRow>\r
                <FTableDataCell>2</FTableDataCell>\r
                <FTableDataCell><FTableActions>\r
                    <button type="button" onClick={event => {
              event.currentTarget.textContent = 'Сохранено';
            }}>Редактировать</button>\r
                    <button type="button">Копировать</button><hr />\r
                    <button type="button" data-danger>Удалить</button>\r
                </FTableActions></FTableDataCell>\r
                <FTableDataCell truncate={false}>73-11.01.00.013-П-РЮБЬ-С-2025-12345/00</FTableDataCell>\r
                <FTableDataCell>Проект</FTableDataCell>\r
                <FTableDataCell>{longText}</FTableDataCell>\r
            </FTableRow>\r
        </FTableBody>\r
        <FTableFooter><FTableRow><FTableDataCell col={5}>Всего: 2 участка</FTableDataCell></FTableRow></FTableFooter>\r
    </FTable>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    for (const panel of canvasElement.querySelectorAll('[popover]')) {
      await expect(panel.matches(':popover-open')).toBe(false);
      await expect(panel).not.toBeVisible();
    }
    for (const row of canvasElement.querySelectorAll('tbody > tr')) {
      await expect(row.children).toHaveLength(5);
      await expect(row.querySelector('[rowspan="2"]')).toBeNull();
    }
    const text = canvas.getAllByRole('button', {
      name: longText
    })[0];
    await expect(text).toHaveAttribute('aria-expanded', 'false');
    await userEvent.hover(text);
    const page = within(canvasElement.ownerDocument.body);
    await expect(await page.findByRole('tooltip')).toHaveTextContent(longText);
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(page.queryByRole('tooltip')).toBeNull());
    await userEvent.unhover(text);
    await userEvent.click(text);
    await expect(text).toHaveAttribute('aria-expanded', 'true');
    await userEvent.keyboard('{Enter}');
    await expect(text).toHaveAttribute('aria-expanded', 'false');
    await expect(canvas.getAllByText('73-11.01.00.013-П-РЮБЬ-С-2025-12345/00')[0].tagName).toBe('TD');
    const actions = canvas.getAllByRole('button', {
      name: 'Действия'
    })[0];
    await userEvent.click(actions);
    await expect(canvas.getByRole('button', {
      name: 'Редактировать'
    })).toBeVisible();
    await userEvent.click(canvas.getByRole('button', {
      name: 'Редактировать'
    }));
    await waitFor(() => expect(actions).toHaveAttribute('aria-expanded', 'false'));
    const secondActions = canvas.getAllByRole('button', {
      name: 'Действия'
    })[1];
    await userEvent.click(secondActions);
    await expect(canvas.getByRole('button', {
      name: 'Редактировать'
    })).toBeVisible();
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(secondActions).toHaveAttribute('aria-expanded', 'false'));
  }
}`,...(f=(B=w.parameters)==null?void 0:B.docs)==null?void 0:f.source}}};var k,E,K;h.parameters={...h.parameters,docs:{...(k=h.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <FTable layout="fixed"><FTableBody><FTableRow>\r
        <FTableDataCell truncate>{longText}</FTableDataCell>\r
        <FTableDataCell>{longText}</FTableDataCell>\r
        <FTableDataCell truncate><a href="#example">Ссылка остаётся интерактивной</a></FTableDataCell>\r
    </FTableRow></FTableBody></FTable>
}`,...(K=(E=h.parameters)==null?void 0:E.docs)==null?void 0:K.source}}};var V,q,S;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <FTable searchable layout="fixed">\r
        <FTableHead>\r
            <FTableRow>\r
                <FTableHeaderCell width={60} sortKey="number">№</FTableHeaderCell>\r
                <FTableHeaderCell>Описание</FTableHeaderCell>\r
            </FTableRow></FTableHead>\r
        <FTableBody>\r
            {Array.from({
        length: 10000
      }, (_, index) => <FTableRow key={index}>\r
                <FTableDataCell sortKey="number" sortValue={index + 1}>{index + 1}</FTableDataCell><FTableDataCell>{\`\${longText} Запись \${index + 1}\`}</FTableDataCell>\r
            </FTableRow>)}\r
        </FTableBody>\r
    </FTable>
}`,...(S=(q=m.parameters)==null?void 0:q.docs)==null?void 0:S.source}}};var N,W,G;C.parameters={...C.parameters,docs:{...(N=C.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <FTable style={{
    maxWidth: 700
  }}>\r
            <FTableHead>\r
                <FTableRow>\r
                    <FTableHeaderCell row={2} width={50} textAlignment="center">№</FTableHeaderCell>\r
                    <FTableHeaderCell col={3} textAlignment="center">Параметры водопользования</FTableHeaderCell>\r
                    <FTableHeaderCell row={2} width={220}>Организация</FTableHeaderCell>\r
                    <FTableHeaderCell row={2} width={260}>Водный объект</FTableHeaderCell>\r
                </FTableRow>\r
                <FTableRow>\r
                    <FTableHeaderCell width={150} textAlignment="center">т.м³</FTableHeaderCell>\r
                    <FTableHeaderCell width={150} textAlignment="center">т. кВт.ч</FTableHeaderCell>\r
                    <FTableHeaderCell width={150} textAlignment="center">км²</FTableHeaderCell>\r
                </FTableRow>\r
            </FTableHead>\r
            <FTableBody>\r
                <FTableRow>\r
                    <FTableDataCell textAlignment="center">1</FTableDataCell>\r
                    <FTableDataCell textAlignment="center">1 245.50</FTableDataCell>\r
                    <FTableDataCell textAlignment="center">340.20</FTableDataCell>\r
                    <FTableDataCell textAlignment="center">12.4</FTableDataCell>\r
                    <FTableDataCell>ПАО «РусГидро»</FTableDataCell>\r
                    <FTableDataCell>Куйбышевское водохранилище</FTableDataCell>\r
                </FTableRow>\r
                <FTableRow>\r
                    <FTableDataCell textAlignment="center">2</FTableDataCell>\r
                    <FTableDataCell textAlignment="center">890.10</FTableDataCell>\r
                    <FTableDataCell textAlignment="center">210.00</FTableDataCell>\r
                    <FTableDataCell textAlignment="center">8.1</FTableDataCell>\r
                    <FTableDataCell>ГУП «Водоканал»</FTableDataCell>\r
                    <FTableDataCell>Река Свияга</FTableDataCell>\r
                </FTableRow>\r
            </FTableBody>\r
        </FTable>
}`,...(G=(W=C.parameters)==null?void 0:W.docs)==null?void 0:G.source}}};const P=["BasicTable","CompactGrid","CellTruncation","VirtualizedGrid","MultiRowHeaderWideTable"];export{u as BasicTable,h as CellTruncation,w as CompactGrid,C as MultiRowHeaderWideTable,m as VirtualizedGrid,P as __namedExportsOrder,J as default};
