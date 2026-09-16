import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{F as T,a as m,b as o,c as i,d as p,e as a,f as S,g as v}from"./FTableActions-QvNqcSYP.js";import{within as h,userEvent as r,waitFor as u,expect as l}from"./index-DH-M5T-F.js";import"./index-B3j06Xw8.js";import"./index-D_ywfbVi.js";import"./index-DW0t0JKo.js";const W={title:"Material/FTableComponents",component:T,parameters:{controls:{expanded:!0}}},x={render:()=>e.jsxs(T,{children:[e.jsx(m,{children:e.jsxs(o,{children:[e.jsx(i,{sortKey:"name",children:"Название"}),e.jsx(i,{sortKey:"quantity",children:"Количество"}),e.jsx(i,{sortKey:"price",children:"Цена"})]})}),e.jsxs(p,{children:[e.jsxs(o,{children:[e.jsx(a,{sortKey:"name",children:"Товар 1"}),e.jsx(a,{sortKey:"quantity",sortValue:10,children:"10"}),e.jsx(a,{sortKey:"price",sortValue:100,children:"100 ₽"})]}),e.jsxs(o,{children:[e.jsx(a,{sortKey:"name",children:"Товар 2"}),e.jsx(a,{sortKey:"quantity",sortValue:5,children:"5"}),e.jsx(a,{sortKey:"price",sortValue:200,children:"200 ₽"})]})]}),e.jsx(S,{children:e.jsxs(o,{children:[e.jsx(a,{children:"Итого"}),e.jsx(a,{children:"15"}),e.jsx(a,{children:"2000 ₽"})]})})]}),play:async({canvasElement:n})=>{const t=h(n),s=()=>{var b;return(b=n.querySelector("tbody tr td"))==null?void 0:b.textContent};await r.click(t.getByRole("button",{name:"Количество"})),await u(()=>l(s()).toBe("Товар 2")),await l(t.getByRole("columnheader",{name:"Количество"})).toHaveAttribute("aria-sort","ascending"),await r.click(t.getByRole("button",{name:"Количество"})),await u(()=>l(s()).toBe("Товар 1")),await r.click(t.getByRole("button",{name:"Количество"})),await l(t.getByRole("columnheader",{name:"Количество"})).toHaveAttribute("aria-sort","none"),await r.click(t.getByRole("button",{name:"Цена"})),await l(t.getByRole("columnheader",{name:"Цена"})).toHaveAttribute("aria-sort","ascending"),await l(t.getByRole("columnheader",{name:"Количество"})).toHaveAttribute("aria-sort","none")}},c="Свияжка от истока до города Свияж, включая водоохранную зону и прилегающие участки Ульяновской области.",F={render:()=>e.jsxs(T,{layout:"fixed",st:{minWidth:700},children:[e.jsxs(m,{children:[e.jsxs(o,{children:[e.jsx(i,{row:2,width:38,children:"№"}),e.jsx(i,{row:2,"aria-label":"Действия",width:38}),e.jsx(i,{col:2,textAlignment:"center",children:"Документ"}),e.jsx(i,{row:2,children:"Водный объект"})]}),e.jsxs(o,{children:[e.jsx(i,{children:"Рег. номер"}),e.jsx(i,{children:"Статус"})]})]}),e.jsxs(p,{truncateAt:28,children:[e.jsxs(o,{children:[e.jsx(a,{children:"1"}),e.jsx(a,{children:e.jsxs(v,{children:[e.jsx("button",{type:"button",onClick:n=>{n.currentTarget.textContent="Сохранено"},children:"Редактировать"}),e.jsx("button",{type:"button",children:"Копировать"}),e.jsx("hr",{}),e.jsx("button",{type:"button","data-danger":!0,children:"Удалить"})]})}),e.jsx(a,{truncate:!1,children:"73-11.01.00.013-П-РЮБЬ-С-2025-12345/00"}),e.jsx(a,{children:"Проект"}),e.jsx(a,{children:c})]}),e.jsxs(o,{children:[e.jsx(a,{children:"2"}),e.jsx(a,{children:e.jsxs(v,{children:[e.jsx("button",{type:"button",onClick:n=>{n.currentTarget.textContent="Сохранено"},children:"Редактировать"}),e.jsx("button",{type:"button",children:"Копировать"}),e.jsx("hr",{}),e.jsx("button",{type:"button","data-danger":!0,children:"Удалить"})]})}),e.jsx(a,{truncate:!1,children:"73-11.01.00.013-П-РЮБЬ-С-2025-12345/00"}),e.jsx(a,{children:"Проект"}),e.jsx(a,{children:c})]})]}),e.jsx(S,{children:e.jsx(o,{children:e.jsx(a,{col:5,children:"Всего: 2 участка"})})})]}),play:async({canvasElement:n})=>{const t=h(n);for(const d of n.querySelectorAll("[popover]"))await l(d.matches(":popover-open")).toBe(!1),await l(d).not.toBeVisible();for(const d of n.querySelectorAll("tbody > tr"))await l(d.children).toHaveLength(5),await l(d.querySelector('[rowspan="2"]')).toBeNull();const s=t.getAllByRole("button",{name:c})[0];await l(s).toHaveAttribute("aria-expanded","false"),await r.hover(s);const b=h(n.ownerDocument.body);await l(await b.findByRole("tooltip")).toHaveTextContent(c),await r.keyboard("{Escape}"),await u(()=>l(b.queryByRole("tooltip")).toBeNull()),await r.unhover(s),await r.click(s),await l(s).toHaveAttribute("aria-expanded","true"),await r.keyboard("{Enter}"),await l(s).toHaveAttribute("aria-expanded","false"),await l(t.getAllByText("73-11.01.00.013-П-РЮБЬ-С-2025-12345/00")[0].tagName).toBe("TD");const C=t.getAllByRole("button",{name:"Действия"})[0];await r.click(C),await l(t.getByRole("button",{name:"Редактировать"})).toBeVisible(),await r.click(t.getByRole("button",{name:"Редактировать"})),await u(()=>l(C).toHaveAttribute("aria-expanded","false"));const j=t.getAllByRole("button",{name:"Действия"})[1];await r.click(j),await l(t.getByRole("button",{name:"Редактировать"})).toBeVisible(),await r.keyboard("{Escape}"),await u(()=>l(j).toHaveAttribute("aria-expanded","false"))}},w={render:()=>e.jsx(T,{layout:"fixed",children:e.jsx(p,{children:e.jsxs(o,{children:[e.jsx(a,{truncate:!0,children:c}),e.jsx(a,{children:c}),e.jsx(a,{truncate:!0,children:e.jsx("a",{href:"#example",children:"Ссылка остаётся интерактивной"})})]})})})},y={render:()=>e.jsxs(T,{searchable:!0,layout:"fixed",children:[e.jsx(m,{children:e.jsxs(o,{children:[e.jsx(i,{width:60,sortKey:"number",children:"№"}),e.jsx(i,{children:"Описание"})]})}),e.jsx(p,{children:Array.from({length:1e4},(n,t)=>e.jsxs(o,{children:[e.jsx(a,{sortKey:"number",sortValue:t+1,children:t+1}),e.jsx(a,{children:`${c} Запись ${t+1}`})]},t))})]})};var g,B,R;x.parameters={...x.parameters,docs:{...(g=x.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(R=(B=x.parameters)==null?void 0:B.docs)==null?void 0:R.source}}};var D,H,A;F.parameters={...F.parameters,docs:{...(D=F.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(A=(H=F.parameters)==null?void 0:H.docs)==null?void 0:A.source}}};var f,k,E;w.parameters={...w.parameters,docs:{...(f=w.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <FTable layout="fixed"><FTableBody><FTableRow>\r
        <FTableDataCell truncate>{longText}</FTableDataCell>\r
        <FTableDataCell>{longText}</FTableDataCell>\r
        <FTableDataCell truncate><a href="#example">Ссылка остаётся интерактивной</a></FTableDataCell>\r
    </FTableRow></FTableBody></FTable>
}`,...(E=(k=w.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};var K,V,q;y.parameters={...y.parameters,docs:{...(K=y.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(q=(V=y.parameters)==null?void 0:V.docs)==null?void 0:q.source}}};const M=["BasicTable","CompactGrid","CellTruncation","VirtualizedGrid"];export{x as BasicTable,w as CellTruncation,F as CompactGrid,y as VirtualizedGrid,M as __namedExportsOrder,W as default};
