import{j as e,y as l,O as v,x as B,r as f,S as O}from"./index-4e201d1a.js";import{s as h,e as _,x as A,u as T,M as E,p as F,P as C,t as I,w as D}from"./Layout-7b360987.js";import{L}from"./Loading-225242fc.js";import{u as R}from"./useFilter-1663f56c.js";import"./iconBase-c8e09bc7.js";import"./AdminServices-04341510.js";import"./InputArea-1751f9c9.js";import"./dayjs.min-8238a389.js";import"./xlsx-04f2268f.js";const V=({variants:i,variantTitle:r,lang:g,currency:a})=>e.jsx(e.Fragment,{children:e.jsx(l.TableBody,{children:i==null?void 0:i.map((t,m)=>{var o;return e.jsxs(l.TableRow,{children:[e.jsx(l.TableCell,{className:"font-semibold uppercase text-xs",children:m+1}),e.jsx(l.TableCell,{children:e.jsx("div",{className:"flex items-center",children:t.image?e.jsx(l.Avatar,{className:"hidden p-1 mr-2 md:block bg-gray-50 shadow-none",src:t.image,alt:"product"}):e.jsx(l.Avatar,{src:"https://res.cloudinary.com/ahossain/image/upload/v1655097002/placeholder_kvepfp.png",alt:"product",className:"hidden p-1 mr-2 md:block bg-gray-50 shadow-none"})})}),e.jsx(l.TableCell,{children:e.jsxs("div",{className:"flex flex-col text-sm",children:[e.jsx("span",{children:(o=r==null?void 0:r.map(s=>{var x,p;const n=(x=s==null?void 0:s.variants)==null?void 0:x.filter(d=>(d==null?void 0:d.name)!=="All"),c=(p=n==null?void 0:n.find(d=>d._id===t[s==null?void 0:s._id]))==null?void 0:p.name;return c===void 0?c==null?void 0:c.en:h(c,g)}))==null?void 0:o.filter(Boolean).join(" ")}),t.productId&&e.jsxs("span",{className:"text-xs text-gray-500",children:["(",t.productId,")"]})]})}),e.jsx(l.TableCell,{className:"font-semibold uppercase text-xs",children:t.sku}),e.jsx(l.TableCell,{className:"font-semibold uppercase text-xs",children:t.barcode}),e.jsxs(l.TableCell,{className:"font-semibold uppercase text-xs",children:[a,t.originalPrice]}),e.jsxs(l.TableCell,{className:"font-semibold uppercase text-xs",children:[a,t.price]}),e.jsxs(l.TableCell,{className:"font-semibold uppercase text-xs",children:[a,t.quantity]})]},m+1)})})}),K=()=>{var b,y,N,k;const{id:i}=v(),{t:r}=B(),{handleUpdate:g}=_(),{attribue:a}=A(i),[t,m]=f.useState([]),{lang:o}=f.useContext(O),{data:s,loading:n}=T(()=>I.getProductById(i)),{data:c}=T(D.getGlobalSetting),x=(c==null?void 0:c.default_currency)||"₹",{handleChangePage:p,totalResults:d,resultsPerPage:P,dataTable:w}=R(s==null?void 0:s.variants);return f.useEffect(()=>{if(!n){const u=Object.keys(Object.assign({},...s==null?void 0:s.variants)),j=a==null?void 0:a.filter(S=>u.includes(S._id));m(j)}},[a,s==null?void 0:s.variants,n,o]),e.jsxs(e.Fragment,{children:[e.jsx(E,{product:!0,children:e.jsx(F,{id:i})}),e.jsx(C,{children:r("ProductDetails")}),n?e.jsx(L,{loading:n}):e.jsx("div",{className:"inline-block overflow-y-auto h-full align-middle transition-all transform",children:e.jsxs("div",{className:"flex flex-col lg:flex-row md:flex-row w-full overflow-hidden",children:[e.jsx("div",{className:"flex-shrink-0 flex items-center justify-center h-auto",children:s!=null&&s.image&&s.image[0]?e.jsx("img",{src:`http://3.225.218.18:5055/api/static/${s.image[0]}`,alt:"product",className:"h-64 w-64"}):e.jsx("img",{src:"https://res.cloudinary.com/ahossain/image/upload/v1655097002/placeholder_kvepfp.png",alt:"product"})}),e.jsxs("div",{className:"w-full flex flex-col p-5 md:p-8 text-left",children:[e.jsxs("div",{className:"mb-5 block ",children:[e.jsx("div",{className:"font-serif font-semibold py-1 text-sm",children:e.jsxs("p",{className:"text-sm text-gray-500 pr-4",children:[r("Status"),":"," ",s.status==="show"?e.jsx("span",{className:"text-green-400",children:r("ThisProductShowing")}):e.jsx("span",{className:"text-red-400",children:r("ThisProductHidden")})]})}),e.jsx("h2",{className:"text-heading text-lg md:text-xl lg:text-2xl font-semibold font-serif dark:text-gray-400",children:h(s==null?void 0:s.title,o)}),e.jsxs("p",{className:"uppercase font-serif font-medium text-gray-500 dark:text-gray-400 text-sm",children:[r("Sku")," :"," ",e.jsx("span",{className:"font-bold text-gray-500 dark:text-gray-500",children:s==null?void 0:s.sku})]})]}),e.jsx("div",{className:"font-serif product-price font-bold dark:text-gray-400",children:e.jsxs("span",{className:"inline-block text-2xl",children:[x,(b=s==null?void 0:s.prices)==null?void 0:b.price,((y=s==null?void 0:s.prices)==null?void 0:y.discount)>=1&&e.jsxs("del",{className:"text-gray-400 dark:text-gray-500 text-lg pl-2",children:[x,(N=s==null?void 0:s.prices)==null?void 0:N.originalPrice]})]})}),e.jsxs("div",{className:"mb-3",children:[(s==null?void 0:s.stock)<=0?e.jsxs(l.Badge,{type:"danger",children:[e.jsx("span",{className:"font-bold",children:r("StockOut")})," "]}):e.jsxs(l.Badge,{type:"success",children:[" ",e.jsx("span",{className:"font-bold",children:r("InStock")})]}),e.jsxs("span",{className:"text-sm text-gray-500 dark:text-gray-400 font-medium pl-4",children:[r("Quantity"),": ",s==null?void 0:s.stock]})]}),e.jsx("p",{className:"text-sm leading-6 text-gray-500 dark:text-gray-400 md:leading-7",children:h(s==null?void 0:s.description,o)}),e.jsxs("div",{className:"flex flex-col mt-4",children:[e.jsxs("p",{className:"font-serif font-semibold py-1 text-gray-500 text-sm",children:[e.jsxs("span",{className:"text-gray-700 dark:text-gray-400",children:[r("Category"),":"," "]})," ",h((k=s==null?void 0:s.category)==null?void 0:k.name,o)]}),e.jsx("div",{className:"flex flex-row",children:JSON.parse(s==null?void 0:s.tag).map((u,j)=>e.jsx("span",{className:"bg-gray-200 mr-2 border-0 text-gray-500 rounded-full inline-flex items-center justify-center px-2 py-1 text-xs font-semibold font-serif mt-2 dark:bg-gray-700 dark:text-gray-300",children:u},j+1))})]}),e.jsx("div",{className:"mt-6",children:e.jsx("button",{onClick:()=>g(i),className:"cursor-pointer leading-5 transition-colors duration-150 font-medium text-sm focus:outline-none px-5 py-2 rounded-md text-white bg-green-500 border border-transparent active:bg-green-600 hover:bg-green-600 focus:ring focus:ring-purple-300",children:r("EditProduct")})})]})]})}),(s==null?void 0:s.isCombination)&&(t==null?void 0:t.length)>0&&!n&&e.jsxs(e.Fragment,{children:[e.jsx(C,{children:r("ProductVariantList")}),e.jsxs(l.TableContainer,{className:"mb-8 rounded-b-lg",children:[e.jsxs(l.Table,{children:[e.jsx(l.TableHeader,{children:e.jsxs("tr",{children:[e.jsx(l.TableCell,{children:r("SR")}),e.jsx(l.TableCell,{children:r("Image")}),e.jsx(l.TableCell,{children:r("Combination")}),e.jsx(l.TableCell,{children:r("Sku")}),e.jsx(l.TableCell,{children:r("Barcode")}),e.jsx(l.TableCell,{children:r("OrginalPrice")}),e.jsx(l.TableCell,{children:r("SalePrice")}),e.jsx(l.TableCell,{children:r("Quantity")})]})}),e.jsx(V,{lang:o,variants:w,currency:x,variantTitle:t})]}),e.jsx(l.TableFooter,{children:e.jsx(l.Pagination,{totalResults:d,resultsPerPage:P,onChange:p,label:"Product Page Navigation"})})]})]})]})};export{K as default};