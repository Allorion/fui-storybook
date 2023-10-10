import{j as a,F as d,a as o}from"./jsx-runtime-03b4ddbf.js";import{r as m}from"./index-76fb7be0.js";/* empty css                  */import{I as c,E as n,J as g,K as u,L as F,p as D}from"./FSearchBox-000af52b.js";import"./_commonjsHelpers-de833af9.js";import"./FFilterIcon-5df5168f.js";const y={title:"Components/FEEDBACK/FDialog",tags:["autodocs"],component:c},B=r=>{const[p,t]=m.useState(!1);return r.openAndClose=p,a(d,{children:[o(n,{color:"primary",size:"btn-lg",onClick:()=>t(!0),children:"Открыть модальное окно"}),a(c,{...r,closeButtonBackPage:t,children:[o(g,{title:"Это диалоговое окно",handleClose:()=>t(!1)}),o(u,{scroll:!0,children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate dolor eveniet explicabo laboriosam maxime minus non placeat porro vel veritatis."}),o(F,{children:a(D,{direction:"row",spacing:2,children:[o(n,{color:"primary",children:"Сохранить"}),o(n,{color:"danger",onClick:()=>t(!1),children:"Закрыть"})]})})]})]})},e=B.bind({});e.args={id:"dialog-id",className:"dialog-className",st:{},width:"lg",openAndClose:!0};var i,s,l;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState<boolean>(false);
  args.openAndClose = open;
  return <>
            <FButton color={'primary'} size={'btn-lg'} onClick={() => setOpen(true)}>
                Открыть модальное окно
            </FButton>
            <FDialog {...args} closeButtonBackPage={setOpen}>
                <FDialogHeader title={'Это диалоговое окно'} handleClose={() => setOpen(false)} />
                <FDialogBody scroll={true}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate dolor eveniet explicabo laboriosam maxime minus non placeat porro vel veritatis.
                </FDialogBody>
                <FDialogFooter>
                    <FStack direction={'row'} spacing={2}>
                        <FButton color={'primary'}>Сохранить</FButton>
                        <FButton color={'danger'} onClick={() => setOpen(false)}>
                            Закрыть
                        </FButton>
                    </FStack>
                </FDialogFooter>
            </FDialog>
        </>;
}`,...(l=(s=e.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};const O=["Default"];export{e as Default,O as __namedExportsOrder,y as default};
//# sourceMappingURL=FDialog.stories-85dd8366.js.map
