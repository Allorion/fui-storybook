import{j as a,F as d,a as o}from"./jsx-runtime-03b4ddbf.js";import{r as m}from"./index-76fb7be0.js";/* empty css                  */import{F as c,a as g,b as u,c as F}from"./FDialogFooter-46a2ddb5.js";import{F as r}from"./FButton-e5c79c89.js";import{F as D}from"./FStack-e49fc9aa.js";import"./_commonjsHelpers-de833af9.js";import"./FFilterIcon-27e807f4.js";/* empty css               */const S={title:"Components/FEEDBACK/FDialog",tags:["autodocs"],component:c},B=n=>{const[p,t]=m.useState(!1);return n.openAndClose=p,a(d,{children:[o(r,{color:"primary",size:"btn-lg",onClick:()=>t(!0),children:"Открыть модальное окно"}),a(c,{...n,closeButtonBackPage:t,children:[o(g,{title:"Это диалоговое окно",handleClose:()=>t(!1)}),o(u,{scroll:!0,children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate dolor eveniet explicabo laboriosam maxime minus non placeat porro vel veritatis."}),o(F,{children:a(D,{direction:"row",spacing:2,children:[o(r,{color:"primary",children:"Сохранить"}),o(r,{color:"danger",onClick:()=>t(!1),children:"Закрыть"})]})})]})]})},e=B.bind({});e.args={id:"dialog-id",className:"dialog-className",st:{},width:"lg",openAndClose:!0};var i,s,l;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`args => {
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
}`,...(l=(s=e.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};const A=["Default"];export{e as Default,A as __namedExportsOrder,S as default};
//# sourceMappingURL=FDialog.stories-eb614c92.js.map
