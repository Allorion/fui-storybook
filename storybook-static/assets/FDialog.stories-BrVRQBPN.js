import{j as o}from"./jsx-runtime-CkxqCPlQ.js";import{r as m}from"./index-DJO9vBfz.js";/* empty css                  */import{F as e}from"./FButton-CFnu8VPD.js";import"./FButtonFile-CHKnFrKb.js";import"./FTextField-DWvp23El.js";import{F as c}from"./FStack-DvJS5si1.js";import"./FGrid-CY0nb_Dr.js";import"./FContainer-Du0Di049.js";import"./FPaper-D6Oo0WgV.js";import{F as d,a as u,b as g}from"./FAlert-CefPhZQR.js";import{F as l}from"./FOpenImgFull-BCfLM3yy.js";import"./FProgress-C0i2V36s.js";import"./FCheckbox-D5toGIZf.js";import"./FRadioButton-DGCmVmG5.js";import"./FPagination-DPUVS4zR.js";import"./FTimelineCard-iMEw_La2.js";import"./FInputFileForm-Dh3UBGxg.js";import"./FFile-Cct2s-rO.js";import"./FSelectItem-C7ZDPLu7.js";import"./FFullDateField-Cszra0xD.js";import"./FSelectSearchDb-rImFaTjC.js";import"./FTextArea-DNeFs9G0.js";import"./FNative-D_ve21w6.js";import"./FTab-DIAeKHIc.js";import"./FDropdownItem-BzWoduQa.js";import"./FSearchBox-r2FvCsLg.js";import"./FCarouselItem-Diq-YX18.js";import"./FSkeleton-DuR3f4nd.js";/* empty css               *//* empty css                   */import"./FLoadIcon-8HypuZKP.js";import"./FCloseIcon-DM6S50X-.js";import"./FArrowIcon-lNeI-if7.js";import"./index-DLC2J04D.js";const Y={title:"Components/FEEDBACK/FDialog",tags:["autodocs"],component:l},F=i=>{const[p,t]=m.useState(!1);return i.openAndClose=p,o.jsxs(o.Fragment,{children:[o.jsx(e,{color:"primary",size:"btn-lg",onClick:()=>t(!0),children:"Открыть модальное окно"}),o.jsxs(l,{...i,closeButtonBackPage:t,children:[o.jsx(d,{title:"Это диалоговое окно",handleClose:()=>t(!1)}),o.jsx(u,{scroll:!0,children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate dolor eveniet explicabo laboriosam maxime minus non placeat porro vel veritatis."}),o.jsx(g,{children:o.jsxs(c,{direction:"row",spacing:2,children:[o.jsx(e,{color:"primary",children:"Сохранить"}),o.jsx(e,{color:"danger",onClick:()=>t(!1),children:"Закрыть"})]})})]})]})},r=F.bind({});r.args={id:"dialog-id",className:"dialog-className",st:{},width:"lg",openAndClose:!0};var a,n,s;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState<boolean>(false);
  args.openAndClose = open;
  return <>\r
            <FButton color={'primary'} size={'btn-lg'} onClick={() => setOpen(true)}>\r
                Открыть модальное окно\r
            </FButton>\r
            <FDialog {...args} closeButtonBackPage={setOpen}>\r
                <FDialogHeader title={'Это диалоговое окно'} handleClose={() => setOpen(false)} />\r
                <FDialogBody scroll={true}>\r
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate dolor eveniet explicabo laboriosam maxime minus non placeat porro vel veritatis.\r
                </FDialogBody>\r
                <FDialogFooter>\r
                    <FStack direction={'row'} spacing={2}>\r
                        <FButton color={'primary'}>Сохранить</FButton>\r
                        <FButton color={'danger'} onClick={() => setOpen(false)}>\r
                            Закрыть\r
                        </FButton>\r
                    </FStack>\r
                </FDialogFooter>\r
            </FDialog>\r
        </>;
}`,...(s=(n=r.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const Z=["Default"];export{r as Default,Z as __namedExportsOrder,Y as default};
