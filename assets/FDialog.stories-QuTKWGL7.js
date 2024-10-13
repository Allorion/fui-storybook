import{j as o}from"./jsx-runtime-DEdD30eg.js";import{r as m}from"./index-RYns6xqu.js";import{F as e}from"./FButton-BMyxDZM2.js";import"./FButtonFile-A8ZoCR_A.js";import"./FTextField-c_bEAKdc.js";import{F as c}from"./FStack-DUahO965.js";import"./FGrid-Cf0t3TO0.js";import"./FContainer-CXdPSwYt.js";import"./FPaper-iPHHMhvA.js";import{F as d,a as u,b as g}from"./FAlert-DS38ZrBT.js";import{F as l}from"./FOpenImgFull-BkT-3Av1.js";import"./FProgress-D9nQnxt0.js";import"./FCheckbox-CxRlIa0S.js";import"./FRadioButton-DU8OSBsH.js";import"./FPagination-HBLTjFx2.js";import"./FTimelineCard-PPBHv0K9.js";import"./FInputFileForm-D_0H5T3f.js";import"./FFile-Bcn0aMAy.js";import"./FSelectItem-BZmd-Lca.js";import"./FFullDateField-CWzNzzif.js";import"./FSelectSearchDb-Clr1GNKo.js";import"./FTextArea-DW0uzDSc.js";import"./FNative-F3FG8R_5.js";import"./FTab-BIi-RzkL.js";import"./FDropdownItem-Cj8HQD5i.js";import"./FSearchBox--q_Kwtu0.js";import"./FCarouselItem-C39m6uj5.js";import"./FSkeleton-D8rY3jBa.js";/* empty css               *//* empty css                   */import"./FLoadIcon-DK9LdIdw.js";import"./FCloseIcon-Dh2aLPHG.js";import"./FArrowIcon-q9p_-0kR.js";import"./index-DAfSkmQi.js";const X={title:"Components/FEEDBACK/FDialog",tags:["autodocs"],component:l},F=i=>{const[p,r]=m.useState(!1);return i.openAndClose=p,o.jsxs(o.Fragment,{children:[o.jsx(e,{color:"primary",size:"btn-lg",onClick:()=>r(!0),children:"Открыть модальное окно"}),o.jsxs(l,{...i,closeButtonBackPage:r,children:[o.jsx(d,{title:"Это диалоговое окно",handleClose:()=>r(!1)}),o.jsx(u,{scroll:!0,children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate dolor eveniet explicabo laboriosam maxime minus non placeat porro vel veritatis."}),o.jsx(g,{children:o.jsxs(c,{direction:"row",spacing:2,children:[o.jsx(e,{color:"primary",children:"Сохранить"}),o.jsx(e,{color:"danger",onClick:()=>r(!1),children:"Закрыть"})]})})]})]})},t=F.bind({});t.args={id:"dialog-id",className:"dialog-className",st:{},width:"lg",openAndClose:!0};var a,n,s;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`args => {
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
}`,...(s=(n=t.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const Y=["Default"];export{t as Default,Y as __namedExportsOrder,X as default};
