import{j as r,F as m,a as o}from"./jsx-runtime-03b4ddbf.js";import{r as d}from"./index-76fb7be0.js";/* empty css                  */import{E as c,G as g,H as u,I as F}from"./FSearchBox-152125fe.js";import{F as a}from"./FButton-23548114.js";import{F as D}from"./FStack-e49fc9aa.js";import"./FGrid-bad13094.js";import"./FContainer-040ae8b7.js";import"./FPaper-d5aa57d5.js";import"./FProgress-06696b81.js";import"./FCheckbox-a1e223c2.js";import"./FRadioButton-a987e6ee.js";import"./FPagination-90c139ef.js";import"./FInputFileForm-02e963c4.js";import"./FNative-c4016f0a.js";import"./FTab-d7a1be1e.js";import"./_commonjsHelpers-de833af9.js";import"./FCloseIcon-47d91238.js";const N={title:"Components/FEEDBACK/FDialog",tags:["autodocs"],component:c},B=i=>{const[p,t]=d.useState(!1);return i.openAndClose=p,r(m,{children:[o(a,{color:"primary",size:"btn-lg",onClick:()=>t(!0),children:"Открыть модальное окно"}),r(c,{...i,closeButtonBackPage:t,children:[o(g,{title:"Это диалоговое окно",handleClose:()=>t(!1)}),o(u,{scroll:!0,children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate dolor eveniet explicabo laboriosam maxime minus non placeat porro vel veritatis."}),o(F,{children:r(D,{direction:"row",spacing:2,children:[o(a,{color:"primary",children:"Сохранить"}),o(a,{color:"danger",onClick:()=>t(!1),children:"Закрыть"})]})})]})]})},e=B.bind({});e.args={id:"dialog-id",className:"dialog-className",st:{},width:"lg",openAndClose:!0};var n,s,l;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`args => {
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
}`,...(l=(s=e.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};const P=["Default"];export{e as Default,P as __namedExportsOrder,N as default};
//# sourceMappingURL=FDialog.stories-8c51020c.js.map
