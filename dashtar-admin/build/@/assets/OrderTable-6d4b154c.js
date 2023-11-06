import{x as Y,j as s,y as t,r as u,L}from"./index-4e201d1a.js";import{u as q,w as E,h as R,K as $,q as G}from"./Layout-7b360987.js";import{a as V}from"./dateFormate-5f63f880.js";import{l as H}from"./index-6013083c.js";import{n as Q}from"./AdminServices-04341510.js";import{O as K}from"./OrderServices-ecb322c7.js";import{d as I}from"./dayjs.min-8238a389.js";import{S as Z}from"./SelectStatus-e33ac50f.js";import{S as J}from"./Status-2365e4dc.js";const U=({data:e,printRef:r,globalSetting:i})=>{var p,a,m,y,h,d,l,o,b,C,T;const{t:x}=Y(),c=(i==null?void 0:i.default_currency)||"$";return s.jsx("div",{ref:r,className:"p-4",children:Array.isArray(e)?e==null?void 0:e.map((n,f)=>{var j,F,w,v,_,D,O,P,k,M,z;return s.jsxs("div",{className:"mb-8",children:[(i==null?void 0:i.logo)&&s.jsx("img",{className:"flex mx-auto",size:"large",src:i==null?void 0:i.logo,alt:"",width:50}),s.jsxs("div",{className:"my-1",children:[s.jsx("div",{className:"flex justify-center",children:s.jsx("h1",{className:"font-bold text-xl",children:i==null?void 0:i.company_name})}),s.jsxs(t.ModalBody,{className:"flex flex-col justify-center text-center",children:[s.jsx("span",{className:"flex-row",children:i==null?void 0:i.address}),s.jsx("span",{className:"flex justify-center",children:i==null?void 0:i.contact}),i==null?void 0:i.web_site,s.jsx("br",{}),i==null?void 0:i.email]})]}),s.jsx(t.TableContainer,{className:"my-4 rounded-b-lg",children:s.jsxs(t.Table,{children:[s.jsx(t.TableHeader,{children:s.jsxs("tr",{children:[s.jsx(t.TableCell,{className:"bg-white",children:s.jsx("span",{className:"text-xs capitalize text-gray-700",children:x("Item")})}),s.jsx(t.TableCell,{className:"text-xs bg-white capitalize text-center text-gray-700",children:x("QTY")}),s.jsx(t.TableCell,{className:"text-xs bg-white capitalize text-right text-gray-700",children:x("Amount")})]})}),s.jsx(t.TableBody,{className:"bg-white dark:bg-gray-800 divide-y divide-gray-100 text-serif text-sm",children:(j=n==null?void 0:n.cart)==null?void 0:j.map((N,B)=>{var A;return s.jsxs(t.TableRow,{className:"dark:border-gray-700 dark:text-gray-400 bill",children:[s.jsx(t.TableCell,{className:"py-1",children:s.jsxs("span",{className:"font-normal text-gray-600 bill",children:[" ",(A=N.title)==null?void 0:A.substring(0,15)]})}),s.jsx(t.TableCell,{className:"text-center py-1",children:s.jsxs("span",{className:"font-bold text-center bill",children:[" ",N.quantity," "]})}),s.jsx(t.TableCell,{className:"text-right py-1",children:s.jsxs("span",{className:"text-right font-bold text-gray-700 bill",children:[" ",c,(N.price*N.quantity).toFixed(2)]})})]},B)})})]})}),s.jsx(t.ModalBody,{children:s.jsxs("div",{className:"flex justify-between -mt-3 mr-1 mb-4",children:[s.jsxs("div",{className:"mt-2",children:[(n==null?void 0:n.paymentMethod)==="Combined"?s.jsxs("p",{className:"bill",children:[s.jsxs("span",{className:"mb-1 font-semibold bill font-serif text-xs text-gray-700 dark:text-gray-500 block",children:[x("Paymentmethod")," :"," ",s.jsx("span",{className:"text-gray-600 bill",children:n.paymentMethod})]}),((F=n==null?void 0:n.paymentDetails)==null?void 0:F.selectPaymentOption_Card)!==void 0&&s.jsxs("span",{className:"text-xs bill",children:[(w=n==null?void 0:n.paymentDetails)==null?void 0:w.selectPaymentOption_Card,":"," ",s.jsxs("span",{className:"font-semibold text-gray-900",children:[" ",c,parseFloat((v=n==null?void 0:n.paymentDetails)==null?void 0:v.paymentAmount_Card).toFixed(2)]})]}),s.jsx("br",{}),((_=n==null?void 0:n.paymentDetails)==null?void 0:_.selectPaymentOption_Cash)!==void 0&&s.jsxs("span",{className:"text-xs bill",children:[(D=n==null?void 0:n.paymentDetails)==null?void 0:D.selectPaymentOption_Cash,":"," ",s.jsxs("span",{className:"font-semibold text-gray-900",children:[c,parseFloat((O=n==null?void 0:n.paymentDetails)==null?void 0:O.paymentAmount_Cash).toFixed(2)]})]}),s.jsx("br",{}),((P=n==null?void 0:n.paymentDetails)==null?void 0:P.selectPaymentOption_Credit)!==void 0&&s.jsxs("span",{className:"text-xs bill",children:[(k=n==null?void 0:n.paymentDetails)==null?void 0:k.selectPaymentOption_Credit,":"," ",s.jsxs("span",{className:"font-semibold text-gray-900",children:[c,parseFloat((M=n==null?void 0:n.paymentDetails)==null?void 0:M.paymentAmount_Credit).toFixed(2)]})]})]}):s.jsx("p",{className:"bill",children:s.jsxs("span",{className:"font-semibold bill font-serif text-xs text-gray-600 dark:text-gray-500 block",children:[x("Paymentmethod")," :"," ",s.jsx("span",{className:"text-gray-700 bill",children:n.paymentMethod})]})}),s.jsxs("div",{className:"text-xs bill",children:[(n==null?void 0:n.shippingOption)&&s.jsxs(s.Fragment,{children:[s.jsxs("span",{className:"text-gray-600",children:[x("ShippingMethodLower")," :",s.jsx("span",{className:"font-semibold text-gray-900",children:n==null?void 0:n.shippingOption})]}),s.jsx("br",{})]}),s.jsxs("span",{className:"text-gray-600",children:[x("NoofItems")," :"," ",s.jsx("span",{className:"font-semibold text-gray-900",children:(z=n==null?void 0:n.cart)==null?void 0:z.length})," "]})," ",s.jsx("br",{}),s.jsxs("span",{className:"text-gray-600",children:[x("BillNo")," :"," ",s.jsxs("span",{className:"font-semibold text-gray-900",children:[" ",n==null?void 0:n.invoice]})," "]})," ",s.jsx("br",{}),s.jsx("br",{}),(i==null?void 0:i.vat_number)&&s.jsxs(s.Fragment,{children:[s.jsxs("span",{className:"text-gray-600",children:[x("VATNumber"),":"," ",s.jsxs("span",{className:"font-semibold text-gray-900",children:[" ",i==null?void 0:i.vat_number]})," "]}),s.jsx("br",{})]}),s.jsxs("span",{className:"text-gray-600",children:[x("Date")," :"," ",s.jsxs("span",{className:"font-semibold text-gray-700",children:[" ",I(new Date).format("MM/D/YYYY")]})," "]})]})]}),s.jsxs("div",{className:"mt-2",children:[s.jsxs("h5",{className:"flex justify-between font-medium text-xs ",children:[s.jsxs("span",{children:[x("GrossTotal")," :"]})," ",s.jsxs("span",{className:"font-semibold ",children:[c,parseFloat(n==null?void 0:n.subTotal).toFixed(2)]})]}),(n==null?void 0:n.shippingCost)>0&&s.jsxs("h5",{className:"flex justify-between font-medium text-xs",children:[s.jsxs("span",{children:[" ",x("ShippingCostLower")," :"]})," ",s.jsxs("span",{className:"font-semibold ",children:[c,parseFloat(n==null?void 0:n.shippingCost).toFixed(2)]})]}),(n==null?void 0:n.discount)>0&&s.jsxs("h5",{className:"flex justify-between font-medium text-xs",children:[s.jsxs("span",{children:[" ",x("DiscountLower")," :"]})," ",s.jsxs("span",{className:"font-semibold",children:[c,parseFloat(n==null?void 0:n.discount).toFixed(2)]})]}),s.jsxs("h3",{className:"flex justify-between font-medium text-xs border-t border-black mt-2",children:[s.jsxs("span",{children:[" ",x("Total")," : "]}),s.jsxs("span",{className:"font-semibold ",children:[c,parseFloat(n==null?void 0:n.total).toFixed(2)]})]})]})]})}),s.jsx("h2",{className:"mb-2 text-center font-medium text-sm",children:x("ThankYouMsg")})]},f+1)}):s.jsxs(u.Fragment,{children:[(i==null?void 0:i.logo)&&s.jsx("img",{className:"flex mx-auto",size:"large",src:i==null?void 0:i.logo,alt:"",width:50}),s.jsxs("div",{className:"my-1",children:[s.jsx("div",{className:"flex justify-center",children:s.jsx("h1",{className:"font-bold text-xl",children:i==null?void 0:i.company_name})}),s.jsxs(t.ModalBody,{className:"flex flex-col justify-center text-center",children:[s.jsx("span",{className:"flex-row",children:i==null?void 0:i.address}),s.jsx("span",{className:"flex justify-center",children:i==null?void 0:i.contact}),i==null?void 0:i.web_site,s.jsx("br",{}),i==null?void 0:i.email]})]}),s.jsx(t.TableContainer,{className:"my-4 rounded-b-lg",children:s.jsxs(t.Table,{children:[s.jsx(t.TableHeader,{children:s.jsxs("tr",{children:[s.jsx(t.TableCell,{className:"bg-white",children:s.jsx("span",{className:"text-xs capitalize text-gray-700",children:x("Item")})}),s.jsx(t.TableCell,{className:"text-xs bg-white capitalize text-center text-gray-700",children:x("QTY")}),s.jsx(t.TableCell,{className:"text-xs bg-white capitalize text-right text-gray-700",children:x("Amount")})]})}),s.jsx(t.TableBody,{className:"bg-white dark:bg-gray-800 divide-y divide-gray-100 text-serif text-sm",children:(p=e==null?void 0:e.cart)==null?void 0:p.map((n,f)=>{var j;return s.jsxs(t.TableRow,{className:"dark:border-gray-700 dark:text-gray-400 bill",children:[s.jsx(t.TableCell,{className:"py-1",children:s.jsxs("span",{className:"font-normal text-gray-600 bill",children:[" ",(j=n.title)==null?void 0:j.substring(0,15)]})}),s.jsx(t.TableCell,{className:"text-center py-1",children:s.jsxs("span",{className:"font-bold text-center bill",children:[" ",n.quantity," "]})}),s.jsx(t.TableCell,{className:"text-right py-1",children:s.jsxs("span",{className:"text-right font-bold text-gray-700 bill",children:[" ",c,(n.price*n.quantity).toFixed(2)]})})]},f)})})]})}),s.jsx(t.ModalBody,{children:s.jsxs("div",{className:"flex justify-between -mt-3 mr-1 mb-4",children:[s.jsxs("div",{className:"mt-2",children:[(e==null?void 0:e.paymentMethod)==="Combined"?s.jsxs("p",{className:"bill",children:[s.jsxs("span",{className:"mb-1 font-semibold bill font-serif text-xs text-gray-700 dark:text-gray-500 block",children:[x("Paymentmethod")," :"," ",s.jsx("span",{className:"text-gray-600 bill",children:e.paymentMethod})]}),((a=e==null?void 0:e.paymentDetails)==null?void 0:a.selectPaymentOption_Card)!==void 0&&s.jsxs("span",{className:"text-xs bill",children:[(m=e==null?void 0:e.paymentDetails)==null?void 0:m.selectPaymentOption_Card,":"," ",s.jsxs("span",{className:"font-semibold text-gray-900",children:[" ",c,parseFloat((y=e==null?void 0:e.paymentDetails)==null?void 0:y.paymentAmount_Card).toFixed(2)]})]}),s.jsx("br",{}),((h=e==null?void 0:e.paymentDetails)==null?void 0:h.selectPaymentOption_Cash)!==void 0&&s.jsxs("span",{className:"text-xs bill",children:[(d=e==null?void 0:e.paymentDetails)==null?void 0:d.selectPaymentOption_Cash,":"," ",s.jsxs("span",{className:"font-semibold text-gray-900",children:[c,parseFloat((l=e==null?void 0:e.paymentDetails)==null?void 0:l.paymentAmount_Cash).toFixed(2)]})]}),s.jsx("br",{}),((o=e==null?void 0:e.paymentDetails)==null?void 0:o.selectPaymentOption_Credit)!==void 0&&s.jsxs("span",{className:"text-xs bill",children:[(b=e==null?void 0:e.paymentDetails)==null?void 0:b.selectPaymentOption_Credit,":"," ",s.jsxs("span",{className:"font-semibold text-gray-900",children:[c,parseFloat((C=e==null?void 0:e.paymentDetails)==null?void 0:C.paymentAmount_Credit).toFixed(2)]})]})]}):s.jsx("p",{className:"bill",children:s.jsxs("span",{className:"font-semibold bill font-serif text-xs text-gray-600 dark:text-gray-500 block",children:[x("Paymentmethod")," :"," ",s.jsx("span",{className:"text-gray-700 bill",children:e.paymentMethod})]})}),s.jsxs("div",{className:"text-xs bill",children:[(e==null?void 0:e.shippingOption)&&s.jsxs(s.Fragment,{children:[s.jsxs("span",{className:"text-gray-600",children:[x("ShippingMethodLower")," :",s.jsx("span",{className:"font-semibold text-gray-900",children:e==null?void 0:e.shippingOption})]}),s.jsx("br",{})]}),s.jsxs("span",{className:"text-gray-600",children:[x("NoofItems")," :"," ",s.jsx("span",{className:"font-semibold text-gray-900",children:(T=e==null?void 0:e.cart)==null?void 0:T.length})," "]})," ",s.jsx("br",{}),s.jsxs("span",{className:"text-gray-600",children:[x("BillNo")," :"," ",s.jsxs("span",{className:"font-semibold text-gray-900",children:[" ",e==null?void 0:e.invoice]})," "]})," ",s.jsx("br",{}),s.jsx("br",{}),(i==null?void 0:i.vat_number)&&s.jsxs(s.Fragment,{children:[s.jsxs("span",{className:"text-gray-600",children:[x("VATNumber"),":"," ",s.jsxs("span",{className:"font-semibold text-gray-900",children:[" ",i==null?void 0:i.vat_number]})," "]}),s.jsx("br",{})]}),s.jsxs("span",{className:"text-gray-600",children:[x("Date")," :"," ",s.jsxs("span",{className:"font-semibold text-gray-700",children:[" ",I(new Date).format("MM/D/YYYY")]})," "]})]})]}),s.jsxs("div",{className:"mt-2",children:[s.jsxs("h5",{className:"flex justify-between font-medium text-xs ",children:[s.jsxs("span",{children:[x("GrossTotal")," :"]})," ",s.jsxs("span",{className:"font-semibold ",children:[c,parseFloat(e==null?void 0:e.subTotal).toFixed(2)]})]}),(e==null?void 0:e.shippingCost)>0&&s.jsxs("h5",{className:"flex justify-between font-medium text-xs",children:[s.jsxs("span",{children:[" ",x("ShippingCostLower")," :"]})," ",s.jsxs("span",{className:"font-semibold ",children:[c,parseFloat(e==null?void 0:e.shippingCost).toFixed(2)]})]}),(e==null?void 0:e.discount)>0&&s.jsxs("h5",{className:"flex justify-between font-medium text-xs",children:[s.jsxs("span",{children:[" ",x("DiscountLower")," :"]})," ",s.jsxs("span",{className:"font-semibold",children:[c,parseFloat(e==null?void 0:e.discount).toFixed(2)]})]}),s.jsxs("h3",{className:"flex justify-between font-medium text-xs border-t border-black mt-2",children:[s.jsxs("span",{children:[" ",x("Total")," : "]}),s.jsxs("span",{className:"font-semibold ",children:[c,parseFloat(e==null?void 0:e.total).toFixed(2)]})]})]})]})}),s.jsx("h2",{className:"mb-2 text-center font-medium text-sm",children:x("ThankYouMsg")})]})})},W=({orderId:e})=>{const r=u.useRef(),[i,x]=u.useState({}),{data:c}=q(E.getGlobalSetting),p=`
    @media print {
      @page {
        size: ${(c==null?void 0:c.receipt_size)==="A4"?"8.5in 14in":(c==null?void 0:c.receipt_size)==="3-1/8"?"9.8in 13.8in":(c==null?void 0:c.receipt_size)==="2-1/4"?"3in 8in":"3.5in 8.5in"};
        margin: 0;
        padding: 0;
        font-size: 10px !important;
      }
    
      @page: first {
        size: ${(c==null?void 0:c.receipt_size)==="A4"?"8.5in 14in":(c==null?void 0:c.receipt_size)==="3-1/8"?"9.8in 13.8in":(c==null?void 0:c.receipt_size)==="2-1/4"?"3in 8in":"3.5in 8.5in"};
        margin: 0;
        font-size: 10px !important;
      }
    }
`,a=H.useReactToPrint({content:()=>r.current,pageStyle:p,documentTitle:"Invoice"}),m=async y=>{var h,d;try{const l=await K.getOrderById(y);x(l),a()}catch(l){Q(l?(d=(h=l==null?void 0:l.response)==null?void 0:h.data)==null?void 0:d.message:l==null?void 0:l.message)}};return s.jsxs(s.Fragment,{children:[s.jsx("div",{style:{display:"none"},children:Object.keys(i).length>0&&s.jsx(U,{data:i,printRef:r,globalSetting:c})}),s.jsx("button",{onClick:()=>m(e),type:"button",className:"ml-2 p-2 cursor-pointer text-gray-500 hover:text-green-600 focus:outline-none",children:s.jsx(R,{id:"receipt",Icon:$,title:"Print Receipt",bgColor:"#f59e0b"})})]})},xs=({orders:e,currency:r,globalSetting:i})=>{const{t:x}=Y();return s.jsx(s.Fragment,{children:s.jsx(t.TableBody,{className:"dark:bg-gray-900",children:e==null?void 0:e.map((c,p)=>{var a,m;return s.jsxs(t.TableRow,{children:[s.jsx(t.TableCell,{children:s.jsx("span",{className:"font-semibold uppercase text-xs",children:c==null?void 0:c.invoice})}),s.jsx(t.TableCell,{children:s.jsx("span",{className:"text-sm",children:V(c==null?void 0:c.updatedDate,i==null?void 0:i.default_date_format,"h:mm A")})}),s.jsxs(t.TableCell,{className:"text-xs",children:[s.jsx("span",{className:"text-sm",children:(a=c==null?void 0:c.user_info)==null?void 0:a.name})," "]}),s.jsx(t.TableCell,{children:s.jsx("span",{className:"text-sm font-semibold",children:c==null?void 0:c.paymentMethod})}),s.jsx(t.TableCell,{children:s.jsxs("span",{className:"text-sm font-semibold",children:[r,(m=parseFloat(c==null?void 0:c.total))==null?void 0:m.toFixed(2)]})}),s.jsx(t.TableCell,{className:"text-xs",children:s.jsx(J,{status:c==null?void 0:c.status})}),s.jsx(t.TableCell,{className:"text-center",children:s.jsx(Z,{id:c._id,order:c})}),s.jsx(t.TableCell,{className:"text-right flex justify-end",children:s.jsxs("div",{className:"flex justify-between items-center",children:[s.jsx(W,{orderId:c._id}),s.jsx("span",{className:"p-2 cursor-pointer text-gray-400 hover:text-green-600",children:s.jsx(L,{to:`/order/${c._id}`,children:s.jsx(R,{id:"view",Icon:G,title:x("ViewInvoice"),bgColor:"#059669"})})})]})})]},p+1)})})})};export{xs as O};
