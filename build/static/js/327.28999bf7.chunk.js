"use strict";(self.webpackChunkfam_mining=self.webpackChunkfam_mining||[]).push([[327],{849:function(s,e,i){i.d(e,{Z:function(){return t}});i(7313);var l=i(8303),a=i(6966),n=i(6417);var t=function(){var s="/about";return(0,n.jsx)("div",{className:"foot",children:(0,n.jsxs)("section",{class:"footer",children:[(0,n.jsxs)("div",{class:"first-footer",children:[(0,n.jsxs)("div",{class:"footer1",children:[(0,n.jsx)("img",{src:a,alt:"LOGO",width:"35%"}),(0,n.jsx)("p",{children:"Our platform offers the best benefits"}),(0,n.jsx)("p",{children:(0,n.jsxs)("a",{href:s,children:["Read More ",(0,n.jsx)("i",{class:"fas fa-arrow-right"})]})})]}),(0,n.jsxs)("div",{class:"footer2",children:[(0,n.jsx)("h3",{children:"Company"}),(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:s,children:"About Us"})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"",children:"Service"})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"/how-to-mine",children:"How to Mine"})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"/terms-and-conditions",children:"Terms and Conditions"})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"",children:"Contact Us"})})]})]}),(0,n.jsxs)("div",{class:"footer3",children:[(0,n.jsx)("h3",{children:"Get In Touch"}),(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"",children:"contact@fammining.com"})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"",children:"+(44) 79 501 837 73"})})]})]})]}),(0,n.jsx)("hr",{}),(0,n.jsxs)("div",{class:"second-footer",children:[(0,n.jsxs)("div",{class:"footer-start-btn",children:[(0,n.jsx)("a",{href:"/signup",class:"reg1",children:(0,n.jsxs)("div",{class:"",children:[(0,n.jsx)("i",{class:"fas fa-mobile-android-alt"}),"Register"]})}),(0,n.jsxs)("a",{href:"/mines",class:"reg",children:[" ",(0,n.jsxs)("div",{class:"",children:[(0,n.jsx)("i",{class:"fas fa-dice-d6"}),"Start Mining"]})]})]}),(0,n.jsxs)("div",{class:"footer-par",children:["Copyright \xa9 2022 Fam Mining. All rights reserved",(0,n.jsx)("div",{children:(0,n.jsx)(l.rU,{to:"/privacy-policy",children:"Privacy Policy"})})]})]})]})})}},9809:function(s,e,i){i.d(e,{Z:function(){return d}});var l=i(9439),a=i(7313),n=i(3827),t=i(620),c=i.p+"static/media/eth.983878ab4e7fc0214f55.png",r=i(6417);function d(){var s=(0,n.a)().currentUser,e=(0,a.useState)([]),i=(0,l.Z)(e,2),d=i[0],h=i[1],x=(0,a.useState)(!1),o=(0,l.Z)(x,2),j=o[0],f=o[1],p=(0,a.useState)(!0),m=(0,l.Z)(p,2),v=m[0],u=m[1];return(0,a.useEffect)((function(){f(!1),u(!1),t.db.collection("mine").doc(s.uid).onSnapshot((function(s){s.exists?(h(s.data()),f(!0),u(!1)):(f(!1),u(!0))}))}),[s]),(0,r.jsxs)("div",{children:[j&&(0,r.jsx)("p",{children:(0,r.jsx)("strong",{children:(0,r.jsxs)("span",{children:[(0,r.jsx)("img",{src:c,height:"20",width:"20",alt:"eth"}),d.earnings]})})}),v&&(0,r.jsx)("p",{children:(0,r.jsxs)("strong",{children:[(0,r.jsx)("img",{src:c,height:"20",width:"20",alt:"eth"}),(0,r.jsx)("span",{children:"0"})]})})]})}},9815:function(s,e,i){i.d(e,{Z:function(){return r}});var l=i(9439),a=i(7313),n=i(3827),t=i(620),c=i(6417);function r(){var s=(0,n.a)().currentUser,e=(0,a.useState)([]),i=(0,l.Z)(e,2),r=i[0],d=i[1],h=(0,a.useState)(!1),x=(0,l.Z)(h,2),o=x[0],j=x[1],f=(0,a.useState)(!0),p=(0,l.Z)(f,2),m=p[0],v=p[1];return(0,a.useEffect)((function(){j(!1),v(!1),t.db.collection("mine").doc(s.uid).onSnapshot((function(s){s.exists?(d(s.data()),j(!0),v(!1)):(j(!1),v(!0))}))}),[s]),(0,c.jsxs)("div",{children:[o&&(0,c.jsx)("p",{children:(0,c.jsx)("strong",{children:(0,c.jsx)("span",{children:r.time})})}),m&&(0,c.jsx)("p",{children:(0,c.jsx)("strong",{children:(0,c.jsx)("span",{children:"0"})})})]})}},193:function(s,e,i){i.d(e,{Z:function(){return a}});i(7313);var l=i(6417);var a=function(){var s="/mines",e="/profile",i="/e-wallet",a="/withdraw";return(0,l.jsx)("div",{children:(0,l.jsxs)("div",{class:"main-box d-flex menu",children:[(0,l.jsx)("input",{type:"checkbox",id:"check"}),(0,l.jsxs)("div",{class:"btn_one",children:[(0,l.jsx)("label",{for:"check",children:(0,l.jsx)("i",{class:"fas fa-bars"})}),(0,l.jsxs)("div",{class:"nav flex-column nav-pills me-3 main-box-icon",id:"v-pills-home-tab",children:[(0,l.jsx)("a",{href:e,class:"nav-link active",id:"v-pills-home-tab","data-bs-toggle":"","data-bs-target":"#v-pills-home",children:(0,l.jsx)("i",{class:"l1 fas fa-qrcode",children:(0,l.jsx)("p",{children:"Dashboard"})})}),(0,l.jsx)("a",{href:s,class:"nav-link",id:"v-pills-analytics-tab","data-bs-toggle":"","data-bs-target":"#v-pills-analytics",children:(0,l.jsxs)("i",{class:"l fas fa-link",children:[(0,l.jsx)("p",{children:"Mines"})," "]})}),(0,l.jsx)("a",{href:e,class:"nav-link","data-bs-toggle":"","data-bs-target":"#v-pills-details",children:(0,l.jsx)("i",{class:"l fas fa-stream",children:(0,l.jsx)("p",{children:"Profile"})})}),(0,l.jsx)("a",{href:i,class:"nav-link",id:"v-pills-wallet-tab","data-bs-toggle":"","data-bs-target":"#v-pills-wallet",children:(0,l.jsx)("i",{class:"l fas fa-calendar-week",children:(0,l.jsx)("p",{children:"E_Wallet"})})}),(0,l.jsx)("a",{href:a,class:"nav-link",id:"v-pills-payment-tab","data-bs-toggle":"","data-bs-target":"#v-pills-payment",children:(0,l.jsx)("i",{class:"l fas fa-sliders-h",children:(0,l.jsx)("p",{children:"Withdraw"})})})]})]}),(0,l.jsxs)("div",{class:"sidebar_menu",children:[(0,l.jsx)("div",{class:"logo",children:(0,l.jsx)("a",{href:"/",children:(0,l.jsx)("img",{src:"/logo.png",alt:"",width:"100%"})})}),(0,l.jsx)("div",{class:"btn_two",children:(0,l.jsx)("label",{for:"check",children:(0,l.jsx)("i",{class:"fas fa-times"})})}),(0,l.jsx)("div",{class:"d-flex menu",children:(0,l.jsxs)("ul",{class:"nav flex-column nav-pills me-3",id:"v-pills-home-tab",children:[(0,l.jsxs)("li",{class:"nav-link active",id:"v-pills-home-tab","data-bs-toggle":"pill","data-bs-target":"#v-pills-home",children:[(0,l.jsx)("i",{class:"fas fa-qrcode"}),(0,l.jsx)("a",{href:e,children:"Dashboard"})]}),(0,l.jsxs)("li",{class:"nav-link",id:"v-pills-analytics-tab","data-bs-toggle":"pill","data-bs-target":"#v-pills-analytics",children:[(0,l.jsx)("i",{class:"fas fa-link"}),(0,l.jsx)("a",{href:s,children:"Mines Field"})]}),(0,l.jsxs)("li",{class:"nav-link",id:"v-pills-details-tab","data-bs-toggle":"pill","data-bs-target":"#v-pills-details",children:[(0,l.jsx)("i",{class:"fas fa-stream"}),(0,l.jsx)("a",{href:e,children:"Profile"})]}),(0,l.jsxs)("li",{class:"nav-link",id:"v-pills-wallet-tab","data-bs-toggle":"pill","data-bs-target":"#v-pills-wallet",children:[(0,l.jsx)("i",{class:"fas fa-calendar-week"}),(0,l.jsx)("a",{href:i,children:"E-Wallet"})]}),(0,l.jsxs)("li",{class:"nav-link",id:"v-pills-payment-tab","data-bs-toggle":"pill","data-bs-target":"#v-pills-payment",children:[(0,l.jsx)("i",{class:"fas fa-sliders-h"}),(0,l.jsx)("a",{href:a,children:"Withdraw"})]})]})}),(0,l.jsx)("div",{class:"social_media",children:(0,l.jsxs)("ul",{children:[(0,l.jsx)("a",{href:"/",children:(0,l.jsx)("i",{class:"fab fa-facebook-f"})}),(0,l.jsx)("a",{href:"https://mailto:support@fammining.com",children:(0,l.jsx)("i",{class:"fab fa-twitter"})}),(0,l.jsx)("a",{href:"https://www.instagram.com/fammining",children:(0,l.jsx)("i",{class:"fab fa-instagram"})}),(0,l.jsx)("a",{href:"https://wa.me/447950183773",children:(0,l.jsx)("i",{class:"fab fa-whatsapp"})})]})})]})]})})}},3043:function(s,e,i){i.r(e);var l=i(4165),a=i(5861),n=i(9439),t=i(7313),c=i(193),r=(i(607),i(849)),d=i(3827),h=i(7030),x=i(620),o=i(9809),j=i(9815),f=i(6417);e.default=function(){var s=(0,d.a)(),e=s.currentUser,i=s.logout,p=(0,h.k6)(),m=(0,t.useState)(""),v=(0,n.Z)(m,2),u=v[0],b=v[1],g=(0,t.useState)([]),w=(0,n.Z)(g,2),k=w[0],y=w[1],Z=(0,t.useState)(!0),S=(0,n.Z)(Z,2),N=S[0],P=S[1];function C(){return(C=(0,a.Z)((0,l.Z)().mark((function s(){return(0,l.Z)().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return setTimeout((function(){b("")}),5e3),s.prev=1,s.next=4,i();case 4:p.pushState("/login"),s.next=10;break;case 7:s.prev=7,s.t0=s.catch(1),b("Failed to log Out");case 10:case"end":return s.stop()}}),s,null,[[1,7]])})))).apply(this,arguments)}return(0,t.useEffect)((function(){P(!0),x.db.collection("contact").doc(e.uid).onSnapshot("value",(function(s){s.exists?(y(s.data()),P(!0)):(y("Please Wait"),P(!0))}))}),[]),(0,f.jsxs)("div",{className:"body-profile",children:[(0,f.jsx)(c.Z,{}),(0,f.jsxs)("div",{class:"profile",children:[(0,f.jsxs)("div",{class:"head",children:[N&&(0,f.jsx)("p",{children:(0,f.jsxs)("h1",{children:[(0,f.jsx)("i",{children:"Hi"})," ",k.firstName]})}),(0,f.jsx)("div",{className:"text-danger",children:(0,f.jsx)("h5",{children:u})}),(0,f.jsx)("h5",{children:"Welcome to your Profile!"})]}),(0,f.jsx)("div",{class:"head1",children:(0,f.jsx)("p",{children:"Profile"})}),(0,f.jsx)("div",{class:"",children:(0,f.jsx)("div",{class:"",children:(0,f.jsx)("div",{class:"card bg-primary",children:(0,f.jsx)("div",{class:"card-body profile-user-box",children:(0,f.jsxs)("div",{class:"row",children:[(0,f.jsx)("div",{class:"col-sm-8",children:(0,f.jsxs)("div",{class:"row align-items-center",children:[(0,f.jsx)("div",{class:"col-auto",children:(0,f.jsx)("div",{class:"avatar-lg"})}),(0,f.jsx)("div",{class:"col",children:(0,f.jsxs)("div",{children:[N&&(0,f.jsxs)("p",{children:[" ",(0,f.jsxs)("h4",{class:"mt-1 mb-1 text-white",children:[k.firstName," "," "," ",k.lastName]})]}),(0,f.jsx)("p",{class:"font-13 text-white-50",children:"Authorised Fam-Miner"}),(0,f.jsxs)("ul",{class:"mb-0 list-inline text-light",children:[(0,f.jsxs)("li",{class:"list-inline-item me-3",children:[N&&(0,f.jsx)("p",{children:(0,f.jsx)("h5",{class:"mb-1 text-white",children:(0,f.jsx)(o.Z,{})})}),(0,f.jsx)("p",{class:"mb-0 font-13 text-white-50",children:"Total Ethereum"})]}),(0,f.jsxs)("li",{class:"list-inline-item",children:[N&&(0,f.jsx)("p",{children:(0,f.jsx)("h5",{class:"mb-1 text-white",children:(0,f.jsx)(j.Z,{})})}),(0,f.jsx)("p",{class:"mb-0 font-13 text-white-50",children:"Number of Mining Times Remaining"})]})]}),(0,f.jsx)("div",{className:"P-deposit-word",children:(0,f.jsx)("h5",{children:"To buy more Time Click:"})}),(0,f.jsx)("div",{className:"P-deposit",children:(0,f.jsx)("button",{className:"P-deposit-btn btn btn-danger",onClick:function(){p.push("./deposit")},children:"Deposit"})})]})})]})}),(0,f.jsx)("div",{class:"col-sm-4",children:(0,f.jsx)("div",{class:"text-center mt-sm-0 mt-3 text-sm-end"})})]})})})})}),(0,f.jsx)("div",{class:"",children:(0,f.jsx)("div",{class:"",children:(0,f.jsx)("div",{class:"card",children:(0,f.jsxs)("div",{class:"card-body",children:[(0,f.jsx)("p",{class:"text-muted font-13"}),(0,f.jsx)("hr",{}),(0,f.jsxs)("div",{class:"text-start",children:[(0,f.jsxs)("p",{class:"text-muted",children:[(0,f.jsx)("strong",{}),(0,f.jsx)("span",{class:"ms-2"})]}),(0,f.jsxs)("p",{class:"text-muted",children:[(0,f.jsx)("strong",{}),(0,f.jsx)("span",{class:"ms-2"})]}),(0,f.jsxs)("p",{class:"text-muted",children:[(0,f.jsx)("strong",{}),(0,f.jsx)("span",{class:"ms-2"})]}),(0,f.jsxs)("p",{class:"text-muted",children:[(0,f.jsx)("strong",{})," ",(0,f.jsx)("span",{class:"ms-2"})]}),(0,f.jsx)("div",{className:"P-deposit",children:(0,f.jsx)("button",{onClick:function(){return C.apply(this,arguments)},className:"P-deposit-btn1 btn btn-secondary",children:"Log out"})})]}),(0,f.jsx)("div",{className:"profile-footer",children:(0,f.jsx)(r.Z,{})})]})})})})]})]})}},607:function(){},6966:function(s,e,i){s.exports=i.p+"static/media/logo.f0c684d15eee01c2e866.png"}}]);