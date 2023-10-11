import{j as r,F as m,a as o}from"./jsx-runtime-03b4ddbf.js";import{r as d}from"./index-76fb7be0.js";/* empty css                  */import{F as c,a as g,b as u,c as F}from"./FDialogFooter-003bd2f6.js";import{F as i}from"./FButton-e5c79c89.js";import{F as D}from"./FStack-e49fc9aa.js";import"./_commonjsHelpers-de833af9.js";import"./FCloseIcon-149fc16a.js";/* empty css               */import"./FArrowIcon-6e660791.js";import"./FPlusIcon-518141a8.js";import"./FTrashIcon-280d00b6.js";import"./FCheckIcon-59b53204.js";import"./FListIcon-9247e080.js";import"./FPenIcon-dca866e8.js";import"./FDownloadIcon-e64661fe.js";import"./FCopyAdd-8b38f200.js";import"./FUnlinkIcon-2b7d852c.js";import"./FFilterIcon-ac066807.js";import"./FLoadIcon-b5845266.js";const K={title:"Components/FEEDBACK/FDialog",tags:["autodocs"],component:c},B=a=>{const[p,t]=d.useState(!1);return a.openAndClose=p,r(m,{children:[o(i,{color:"primary",size:"btn-lg",onClick:()=>t(!0),children:"Открыть модальное окно"}),r(c,{...a,closeButtonBackPage:t,children:[o(g,{title:"Это диалоговое окно",handleClose:()=>t(!1)}),o(u,{scroll:!0,children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate dolor eveniet explicabo laboriosam maxime minus non placeat porro vel veritatis."}),o(F,{children:r(D,{direction:"row",spacing:2,children:[o(i,{color:"primary",children:"Сохранить"}),o(i,{color:"danger",onClick:()=>t(!1),children:"Закрыть"})]})})]})]})},e=B.bind({});e.args={id:"dialog-id",className:"dialog-className",st:{},width:"lg",openAndClose:!0};var n,s,l;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`args => {
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
}`,...(l=(s=e.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};const q=["Default"];export{e as Default,q as __namedExportsOrder,K as default};
//# sourceMappingURL=FDialog.stories-654d70c2.js.map
