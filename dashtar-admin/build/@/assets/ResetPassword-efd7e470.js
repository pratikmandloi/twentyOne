import{x as g,O as p,r as c,j as s,y as o,L as b}from"./index-4e201d1a.js";import{u as j,L as m,E as i,A as y,b as N,n as k}from"./AdminServices-04341510.js";import{I as v,a as P}from"./forgot-password-office-dark-8bc730dc.js";const A=()=>{const{t:a}=g(),{token:u}=p(),l=c.useRef(""),[f,r]=c.useState(!1),{register:d,handleSubmit:w,watch:h,formState:{errors:n}}=j();l.current=h("newPassword");const x=({newPassword:t})=>{r(!0),y.resetPassword({newPassword:t,token:u}).then(e=>{r(!1),N(e.message)}).catch(e=>{r(!1),k(e?e.response.data.message:e.message)})};return s.jsx("div",{className:"flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900",children:s.jsx("div",{className:"flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800",children:s.jsxs("div",{className:"flex flex-col overflow-y-auto md:flex-row",children:[s.jsxs("div",{className:"h-32 md:h-auto md:w-1/2",children:[s.jsx("img",{"aria-hidden":"true",className:"object-cover w-full h-full dark:hidden",src:v,alt:"Office"}),s.jsx("img",{"aria-hidden":"true",className:"hidden object-cover w-full h-full dark:block",src:P,alt:"Office"})]}),s.jsx("main",{className:"flex items-center justify-center p-6 sm:p-12 md:w-1/2",children:s.jsxs("div",{className:"w-full",children:[s.jsx("h1",{className:"mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200",children:a("ResetPassword")}),s.jsxs("form",{onSubmit:w(x),children:[s.jsx(m,{label:"Password"}),s.jsx(o.Input,{label:"Password",name:"newPassword",type:"password",autocomplete:"current-password",placeholder:"Password",...d("newPassword",{required:"You must specify a password",minLength:{value:10,message:"Password must have at least 10 characters"}}),className:"border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white"}),s.jsx(i,{errorName:n.newPassword}),s.jsx("div",{className:"mt-6"}),s.jsx(m,{label:"Confirm Password"}),s.jsx(o.Input,{label:"Confirm Password",name:"confirm_password",type:"password",autocomplete:"current-password",placeholder:a("ConfirmPassword"),...d("confirm_password",{validate:t=>t===l.current||"The passwords do not match"}),className:"border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white"}),s.jsx(i,{errorName:n.confirm_password}),s.jsx(o.Button,{disabled:f,type:"submit",block:!0,className:"mt-4 h-12",children:a("Reset")})]}),s.jsx("p",{className:"mt-4",children:s.jsx(b,{className:"text-sm font-medium text-green-500 dark:text-green-400 hover:underline",to:"/login",children:a("AlreadyAccount")})})]})})]})})})};export{A as default};