import{r as c,S as g,j as e,y as o}from"./index-4e201d1a.js";import{O as x}from"./OrderServices-ecb322c7.js";import{b as h,n as p}from"./AdminServices-04341510.js";const v=({id:n,order:t})=>{const{setIsUpdate:u}=c.useContext(g),l=(s,i)=>{x.updateOrder(s,{status:i}).then(a=>{h(a.message),u(!0)}).catch(a=>p(a.message))};return e.jsx(e.Fragment,{children:e.jsxs(o.Select,{onChange:s=>l(n,s.target.value),className:"border border-gray-50 bg-gray-50 dark:border-gray-700 h-8 rounded-md text-xs focus:border-gray-400 focus:outline-none",children:[e.jsx("option",{value:"status",defaultValue:!0,hidden:!0,children:t==null?void 0:t.status}),e.jsx("option",{defaultValue:(t==null?void 0:t.status)==="Delivered",value:"Delivered",children:"Delivered"}),e.jsx("option",{defaultValue:(t==null?void 0:t.status)==="Pending",value:"Pending",children:"Pending"}),e.jsx("option",{defaultValue:(t==null?void 0:t.status)==="Processing",value:"Processing",children:"Processing"}),e.jsx("option",{defaultValue:(t==null?void 0:t.status)==="Cancel",value:"Cancel",children:"Cancel"})]})})};export{v as S};