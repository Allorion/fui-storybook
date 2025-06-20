import{j as o}from"./jsx-runtime-Cf8x2fCZ.js";import{r as _,e as w}from"./index-DY-snNUy.js";import{F as v,a as r}from"./FCarouselItem-BzHKgllY.js";import"./index-yBjzXJbu.js";const V={title:"Material/FCarousel",component:r,subcomponents:{FCarouselItem:v},argTypes:{visibleCount:{control:{type:"number",min:1,max:7},defaultValue:1},showArrows:{control:{type:"boolean"},defaultValue:!0},loop:{control:{type:"boolean"},defaultValue:!1},autoplay:{control:{type:"boolean"},defaultValue:!1},autoplayInterval:{control:{type:"number",min:1e3,max:1e4,step:500},defaultValue:3e3},className:{control:{type:"text"}}}},n=Array.from({length:7},(i,l)=>o.jsx(v,{children:o.jsx("div",{style:{height:120,display:"flex",alignItems:"center",justifyContent:"center",fontSize:32,fontWeight:600},children:l+1})},l)),e=i=>{const[l,A]=_.useState(0);return o.jsx(r,{...i,children:n.map((x,F)=>w.cloneElement(x,{key:F}))})};e.args={visibleCount:1,showArrows:!0,loop:!1,autoplay:!1,autoplayInterval:3e3};const t=()=>o.jsx(r,{visibleCount:3,children:n}),s=()=>o.jsx(r,{visibleCount:2,loop:!0,children:n}),a=()=>o.jsx(r,{visibleCount:1,autoplay:!0,autoplayInterval:1500,showArrows:!1,children:n});e.__docgenInfo={description:"",methods:[],displayName:"Playground",props:{children:{required:!0,tsType:{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"},description:"Массив дочерних элементов (обычно слайды в виде JSX)."},visibleCount:{required:!1,tsType:{name:"number"},description:`Количество одновременно отображаемых элементов.
@default 1`},showArrows:{required:!1,tsType:{name:"boolean"},description:`Отображение стрелок навигации (вкл/выкл).
@default true`},loop:{required:!1,tsType:{name:"boolean"},description:`Включает цикличную прокрутку (зацикливание).
@default false`},autoplay:{required:!1,tsType:{name:"boolean"},description:`Автоматическое переключение слайдов.
@default false`},autoplayInterval:{required:!1,tsType:{name:"number"},description:`Задержка автопрокрутки в миллисекундах.
@default 3000`},className:{required:!1,tsType:{name:"string"},description:"Пользовательский CSS класс для контейнера карусели."}}};t.__docgenInfo={description:"",methods:[],displayName:"MultipleVisible"};s.__docgenInfo={description:"",methods:[],displayName:"Looping"};a.__docgenInfo={description:"",methods:[],displayName:"Autoplay"};var u,p,c;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`(props: IFCarousel) => {
  const [count, setCount] = useState(0);
  return <FCarousel {...props}>
      {demoItems.map((item, i) => React.cloneElement(item, {
      key: i
    }))}
    </FCarousel>;
}`,...(c=(p=e.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var d,m,y;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`() => <FCarousel visibleCount={3}>
    {demoItems}
  </FCarousel>`,...(y=(m=t.parameters)==null?void 0:m.docs)==null?void 0:y.source}}};var f,C,b;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`() => <FCarousel visibleCount={2} loop>
    {demoItems}
  </FCarousel>`,...(b=(C=s.parameters)==null?void 0:C.docs)==null?void 0:b.source}}};var g,h,I;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`() => <FCarousel visibleCount={1} autoplay autoplayInterval={1500} showArrows={false}>
    {demoItems}
  </FCarousel>`,...(I=(h=a.parameters)==null?void 0:h.docs)==null?void 0:I.source}}};const q=["Playground","MultipleVisible","Looping","Autoplay"];export{a as Autoplay,s as Looping,t as MultipleVisible,e as Playground,q as __namedExportsOrder,V as default};
