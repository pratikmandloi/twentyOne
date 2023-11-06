import{r as t}from"./AdminServices-04341510.js";const m={getAllOrders:async({body:e,headers:r,customerName:s,status:a,page:c=1,limit:u=8,day:n,startDate:d,endDate:o})=>{const l=s!==null?s:"",g=a!==null?a:"",$=n!==null?n:"",h=d!==null?d:"",y=o!==null?o:"";return t.get(`/orders?customerName=${l}&status=${g}&day=${$}&page=${c}&limit=${u}&startDate=${h}&endDate=${y}`,e,r)},getAllOrdersTwo:async({invoice:e,body:r,headers:s})=>{const a=e!==null?e:"";return t.get(`/orders/all?invoice=${a}`,r,s)},getRecentOrders:async({page:e=1,limit:r=8,startDate:s="1:00",endDate:a="23:59"})=>t.get(`/orders/recent?page=${e}&limit=${r}&startDate=${s}&endDate=${a}`),getOrderCustomer:async(e,r)=>t.get(`/orders/customer/${e}`,r),getOrderById:async(e,r)=>t.get(`/orders/${e}`,r),updateOrder:async(e,r,s)=>t.put(`/orders/${e}`,r,s),deleteOrder:async e=>t.delete(`/orders/${e}`),getDashboardOrdersData:async({page:e=1,limit:r=8,endDate:s="23:59"})=>t.get(`/orders/dashboard?page=${e}&limit=${r}&endDate=${s}`),getDashboardAmount:async()=>t.get("/orders/dashboard-amount"),getDashboardCount:async()=>t.get("/orders/dashboard-count"),getDashboardRecentOrder:async({page:e=1,limit:r=8})=>t.get(`/orders/dashboard-recent-order?page=${e}&limit=${r}`),getBestSellerProductChart:async()=>t.get("/orders/best-seller/chart")};export{m as O};
