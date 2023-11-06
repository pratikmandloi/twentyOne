import{j as e,y as t,A as I,L as W,x as E,r as u,S as L}from"./index-4e201d1a.js";import{e as V,f as H,M as $,p as q,s as J,h as X,q as Y,g as ee,u as U,C as se,r as te,t as _,v as ae,P as le,i as ie,j as re,k as ne,T as oe,w as de}from"./Layout-7b360987.js";import{U as ce}from"./UploadManyTwo-dcece95f.js";import{N as xe}from"./NotFound-40b6c8ae.js";import{C as G,B as ge}from"./BulkActionDrawer-7e43914e.js";import{E as me}from"./EditDeleteButton-4abd9477.js";import{r as he,u as be}from"./xlsx-04f2268f.js";import{n as F,b as R}from"./AdminServices-04341510.js";import"./iconBase-c8e09bc7.js";import"./InputArea-1751f9c9.js";const je=({products:h,isCheck:o,setIsCheck:m,currency:b,lang:c})=>{const{title:l,serviceId:j,handleModalOpen:N,handleUpdate:p}=V(),A=s=>{const{id:y,checked:w}=s.target;m([...o,y]),w||m(o.filter(S=>S!==y))};return e.jsxs(e.Fragment,{children:[(o==null?void 0:o.length)<1&&e.jsx(H,{id:j,title:l}),(o==null?void 0:o.length)<2&&e.jsx($,{children:e.jsx(q,{currency:b,id:j})}),e.jsx(t.TableBody,{children:h==null?void 0:h.map((s,y)=>{var w,S,T,k,O,x,a;return e.jsxs(t.TableRow,{children:[e.jsx(t.TableCell,{children:e.jsx(G,{type:"checkbox",name:(w=s==null?void 0:s.title)==null?void 0:w.en,id:s._id,handleClick:A,isChecked:o==null?void 0:o.includes(s._id)})}),e.jsx(t.TableCell,{children:e.jsxs("div",{className:"flex items-center",children:[s!=null&&s.image[0]?e.jsx(t.Avatar,{className:"hidden p-1 mr-2 md:block bg-gray-50 shadow-none",src:`http://3.225.218.18:5055/api/static/${s==null?void 0:s.image}`,alt:"product"}):e.jsx(t.Avatar,{src:"https://res.cloudinary.com/ahossain/image/upload/v1655097002/placeholder_kvepfp.png",alt:"product"}),e.jsx("div",{children:e.jsx("h2",{className:"text-sm font-medium",children:(S=J(s==null?void 0:s.title,c))==null?void 0:S.substring(0,28)})})]})}),e.jsx(t.TableCell,{children:e.jsx("span",{className:"text-sm",children:J((T=s==null?void 0:s.category)==null?void 0:T.name,c)})}),e.jsx(t.TableCell,{children:e.jsxs("span",{className:"text-sm font-semibold",children:[b,s!=null&&s.isCombination?(k=s==null?void 0:s.variants[0])==null?void 0:k.originalPrice:(O=s==null?void 0:s.prices)==null?void 0:O.originalPrice]})}),e.jsx(t.TableCell,{children:e.jsxs("span",{className:"text-sm font-semibold",children:[b,s!=null&&s.isCombination?(x=s==null?void 0:s.variants[0])==null?void 0:x.price:(a=s==null?void 0:s.prices)==null?void 0:a.price]})}),e.jsx(t.TableCell,{children:e.jsx("span",{className:"text-sm",children:s.stock})}),e.jsx(t.TableCell,{children:s.stock>0?e.jsx(t.Badge,{type:"success",children:I("Selling")}):e.jsx(t.Badge,{type:"danger",children:I("SoldOut")})}),e.jsx(t.TableCell,{children:e.jsx(W,{to:`/product/${s._id}`,className:"flex justify-center text-gray-400 hover:text-green-600",children:e.jsx(X,{id:"view",Icon:Y,title:I("DetailsTbl"),bgColor:"#10B981"})})}),e.jsx(t.TableCell,{className:"text-center",children:e.jsx(ee,{id:s._id,status:s.status})}),e.jsx(t.TableCell,{children:e.jsx(me,{id:s._id,product:s,isCheck:o,handleUpdate:p,handleModalOpen:N,title:J(s==null?void 0:s.title,c)})})]},y+1)})})]})},pe=({setCategory:h,lang:o})=>{const{data:m}=U(se.getAllCategories),{t:b}=E();return e.jsx(e.Fragment,{children:e.jsxs(t.Select,{onChange:c=>h(c.target.value),className:"border h-12 text-sm focus:outline-none block w-full bg-gray-100 border-transparent focus:bg-white",children:[e.jsx("option",{value:"All",defaultValue:!0,hidden:!0,children:b("Category")}),m==null?void 0:m.map(c=>e.jsx("option",{value:c._id,children:J(c==null?void 0:c.name,o)},c._id))]})})},fe={type:"object",properties:{categories:{type:"array"},image:{type:"array"},tag:{type:"array"},variants:{type:"array"},show:{type:"array"},status:{type:"string"},prices:{type:"object"},isCombination:{type:"boolean"},title:{type:"object"},productId:{type:"string"},slug:{type:"string"},category:{type:"object"},stock:{type:"number"},description:{type:"object"}},required:["categories","category","prices","title"]},ue=h=>{const o=new te({allErrors:!0}),{setLoading:m,setIsUpdate:b}=u.useContext(L),[c]=u.useState([]),[l,j]=u.useState([]),[N,p]=u.useState(""),[A,s]=u.useState(!1);return{data:h,filename:N,isDisabled:A,handleSelectFile:async x=>{var C;x.preventDefault();const a=new FileReader,n=(C=x.target)==null?void 0:C.files[0];if(n&&n.type==="application/json")p(n==null?void 0:n.name),s(!0),a.readAsText(n,"UTF-8"),a.onload=d=>{const f=JSON.parse(d.target.result).map(r=>({categories:r.categories,image:r.image,barcode:r.barcode,tag:r.tag,variants:r.variants,status:r.status,prices:r.prices,isCombination:r.isCombination,title:r.title,productId:r.productId,slug:r.slug,sku:r.sku,category:r.category,stock:r.stock,description:r.description}));j(f)};else if(n&&n.type==="text/csv")p(n==null?void 0:n.name),s(!0),a.onload=async d=>{const P=d.target.result,r=(await ae().fromString(P)).map(i=>({categories:JSON.parse(i.categories),image:JSON.parse(i.image),barcode:i.barcode,tag:JSON.parse(i.tag),variants:JSON.parse(i.variants),status:i.status,prices:JSON.parse(i.prices),isCombination:JSON.parse(i.isCombination),title:JSON.parse(i.title),productId:i.productId,slug:i.slug,sku:i.sku,category:JSON.parse(i.category),stock:JSON.parse(i.stock),description:JSON.parse(i.description)}));j(r)},a.readAsText(n);else{p(n==null?void 0:n.name),s(!0);const d=!!a.readAsBinaryString;a.onload=function(P){const f=P.target.result,r=he(f,{type:d?"binary":"array",bookVBA:!0}),i=r.SheetNames[0],D=r.Sheets[i],v=be.sheet_to_json(D).map(g=>({categories:JSON.parse(g.categories),image:JSON.parse(g.image),barcode:g.barcode,tag:JSON.parse(g.tag),variants:JSON.parse(g.variants),status:g.status,prices:JSON.parse(g.prices),isCombination:JSON.parse(g.isCombination),title:JSON.parse(g.title),productId:g.productId,slug:g.slug,sku:g.sku,category:JSON.parse(g.category),stock:JSON.parse(g.stock),description:JSON.parse(g.description)}));j(v)},d?a.readAsBinaryString(n):a.readAsArrayBuffer(n)}},serviceData:h,handleOnDrop:x=>{for(let a=0;a<x.length;a++)c.push(x[a].data)},handleUploadProducts:()=>{c.length<1?F("Please upload/select csv file first!"):_.addAllProducts(c).then(x=>{R(x.message)}).catch(x=>F(x.message))},handleRemoveSelectFile:x=>{p(""),j([]),setTimeout(()=>s(!1),1e3)},handleUploadMultiple:x=>{if(l.length>1){m(!0);let a=l.map(d=>o.validate(fe,d));const n=d=>d===!0;a.every(n)?_.addAllProducts(l).then(d=>{b(!0),m(!1),R(d.message)}).catch(d=>{m(!1),F(d.message)}):(m(!1),F("Please enter valid data!"))}else m(!1),F("Please select a valid json, csv & xls file first!")}}},Oe=()=>{const{title:h,allId:o,serviceId:m,handleDeleteMany:b,handleUpdateMany:c}=V(),{t:l}=E(),{toggleDrawer:j,lang:N,currentPage:p,handleChangePage:A,searchText:s,category:y,setCategory:w,searchRef:S,handleSubmitForAll:T,sortedField:k,setSortedField:O,limitData:x}=u.useContext(L),{data:a,loading:n,error:C}=U(()=>_.getAllProducts({page:p,limit:x,category:y,title:s,price:k})),{data:d}=U(de.getGlobalSetting),P=(d==null?void 0:d.default_currency)||"₹",[f,r]=u.useState(!1),[i,D]=u.useState([]),M=()=>{r(!f),D(a==null?void 0:a.products.map(B=>B._id)),f&&D([])},{serviceData:v,filename:g,isDisabled:Z,handleSelectFile:z,handleUploadMultiple:K,handleRemoveSelectFile:Q}=ue(a==null?void 0:a.products);return e.jsxs(e.Fragment,{children:[e.jsx(le,{children:l("ProductsPage")}),e.jsx(H,{ids:o,setIsCheck:D,title:h}),e.jsx(ge,{ids:o,title:"Products"}),e.jsx($,{children:e.jsx(q,{id:m})}),e.jsx(t.Card,{className:"min-w-0 shadow-xs overflow-hidden bg-white dark:bg-gray-800 mb-5",children:e.jsx(t.CardBody,{className:"",children:e.jsxs("form",{onSubmit:T,className:"py-3 md:pb-0 grid gap-4 lg:gap-6 xl:gap-6  xl:flex",children:[e.jsx("div",{className:"flex justify-start xl:w-1/2  md:w-full",children:e.jsx(ce,{title:"Products",filename:g,isDisabled:Z,totalDoc:a==null?void 0:a.totalDoc,handleSelectFile:z,handleUploadMultiple:K,handleRemoveSelectFile:Q})}),e.jsxs("div",{className:"lg:flex  md:flex xl:justify-end xl:w-1/2  md:w-full md:justify-start flex-grow-0",children:[e.jsx("div",{className:"w-full md:w-40 lg:w-40 xl:w-40 mr-3 mb-3 lg:mb-0",children:e.jsxs(t.Button,{disabled:i.length<1,onClick:()=>c(i),className:"w-full rounded-md h-12 btn-gray text-gray-600 sm:mb-3",children:[e.jsx("span",{className:"mr-2",children:e.jsx(ie,{})}),l("BulkAction")]})}),e.jsx("div",{className:"w-full md:w-32 lg:w-32 xl:w-32 mr-3 mb-3 lg:mb-0",children:e.jsxs(t.Button,{disabled:(i==null?void 0:i.length)<1,onClick:()=>b(i,a.products),className:"w-full rounded-md h-12 bg-red-300 disabled btn-red",children:[e.jsx("span",{className:"mr-2",children:e.jsx(re,{})}),l("Delete")]})}),e.jsx("div",{className:"w-full md:w-48 lg:w-48 xl:w-48",children:e.jsxs(t.Button,{onClick:j,className:"w-full rounded-md h-12",children:[e.jsx("span",{className:"mr-2",children:e.jsx(ne,{})}),l("AddProduct")]})})]})]})})}),e.jsx(t.Card,{className:"min-w-0 shadow-xs overflow-hidden bg-white dark:bg-gray-800 rounded-t-lg rounded-0 mb-4",children:e.jsx(t.CardBody,{children:e.jsxs("form",{onSubmit:T,className:"py-3 grid gap-4 lg:gap-6 xl:gap-6 md:flex xl:flex",children:[e.jsxs("div",{className:"flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow",children:[e.jsx(t.Input,{ref:S,className:"border h-12 text-sm focus:outline-none block w-full bg-gray-100 border-transparent focus:bg-white",type:"search",name:"search",placeholder:"Search Product"}),e.jsx("button",{type:"submit",className:"absolute right-0 top-0 mt-5 mr-1"})]}),e.jsx("div",{className:"flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow",children:e.jsx(pe,{setCategory:w,lang:N})}),e.jsx("div",{className:"flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow",children:e.jsxs(t.Select,{onChange:B=>O(B.target.value),className:"border h-12 text-sm focus:outline-none block w-full bg-gray-100 border-transparent focus:bg-white",children:[e.jsx("option",{value:"All",defaultValue:!0,hidden:!0,children:l("Price")}),e.jsx("option",{value:"low",children:l("LowtoHigh")}),e.jsx("option",{value:"high",children:l("HightoLow")}),e.jsx("option",{value:"published",children:l("Published")}),e.jsx("option",{value:"unPublished",children:l("Unpublished")}),e.jsx("option",{value:"status-selling",children:l("StatusSelling")}),e.jsx("option",{value:"status-out-of-stock",children:l("StatusStock")}),e.jsx("option",{value:"date-added-asc",children:l("DateAddedAsc")}),e.jsx("option",{value:"date-added-desc",children:l("DateAddedDesc")}),e.jsx("option",{value:"date-updated-asc",children:l("DateUpdatedAsc")}),e.jsx("option",{value:"date-updated-desc",children:l("DateUpdatedDesc")})]})})]})})}),n?e.jsx(oe,{row:12,col:7,width:160,height:20}):C?e.jsx("span",{className:"text-center mx-auto text-red-500",children:C}):(v==null?void 0:v.length)!==0?e.jsxs(t.TableContainer,{className:"mb-8 rounded-b-lg",children:[e.jsxs(t.Table,{children:[e.jsx(t.TableHeader,{children:e.jsxs("tr",{children:[e.jsx(t.TableCell,{children:e.jsx(G,{type:"checkbox",name:"selectAll",id:"selectAll",isChecked:f,handleClick:M})}),e.jsx(t.TableCell,{children:l("ProductNameTbl")}),e.jsx(t.TableCell,{children:l("CategoryTbl")}),e.jsx(t.TableCell,{children:l("PriceTbl")}),e.jsx(t.TableCell,{children:"Sale Price"}),e.jsx(t.TableCell,{children:l("StockTbl")}),e.jsx(t.TableCell,{children:l("StatusTbl")}),e.jsx(t.TableCell,{className:"text-center",children:l("DetailsTbl")}),e.jsx(t.TableCell,{className:"text-center",children:l("PublishedTbl")}),e.jsx(t.TableCell,{className:"text-right",children:l("ActionsTbl")})]})}),e.jsx(je,{lang:N,isCheck:i,products:a==null?void 0:a.products,setIsCheck:D,currency:P})]}),e.jsx(t.TableFooter,{children:e.jsx(t.Pagination,{totalResults:a==null?void 0:a.totalDoc,resultsPerPage:x,onChange:A,label:"Product Page Navigation"})})]}):e.jsx(xe,{title:"Product"})]})};export{Oe as default};
