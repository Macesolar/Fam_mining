"use strict";(self.webpackChunkfam_mining=self.webpackChunkfam_mining||[]).push([[98],{9815:function(e,n,t){t.d(n,{Z:function(){return o}});var i=t(9439),s=t(7313),a=t(3827),c=t(620),r=t(6417);function o(){var e=(0,a.a)().currentUser,n=(0,s.useState)([]),t=(0,i.Z)(n,2),o=t[0],u=t[1],d=(0,s.useState)(!1),l=(0,i.Z)(d,2),f=l[0],h=l[1],x=(0,s.useState)(!0),m=(0,i.Z)(x,2),j=m[0],v=m[1];return(0,s.useEffect)((function(){h(!1),v(!1),c.db.collection("mine").doc(e.uid).onSnapshot((function(e){e.exists?(u(e.data()),h(!0),v(!1)):(h(!1),v(!0))}))}),[e]),(0,r.jsxs)("div",{children:[f&&(0,r.jsx)("p",{children:(0,r.jsx)("strong",{children:(0,r.jsx)("span",{children:o.time})})}),j&&(0,r.jsx)("p",{children:(0,r.jsx)("strong",{children:(0,r.jsx)("span",{children:"0"})})})]})}},2098:function(e,n,t){t.r(n);var i=t(4165),s=t(5861),a=t(9439),c=t(7313),r=t(620),o=t(3827),u=t(193),d=(t(6158),t(9815)),l=t(6417);n.default=function(){var e=(0,c.useState)(!0),n=(0,a.Z)(e,2),t=n[0],f=n[1],h=(0,o.a)().currentUser,x=(0,c.useState)(""),m=(0,a.Z)(x,2),j=m[0],v=m[1],p=(0,c.useState)(""),b=(0,a.Z)(p,2),N=b[0],S=b[1],Z=(0,c.useState)("1 time to Mine Here"),g=(0,a.Z)(Z,2),k=g[0],E=g[1],T=(0,c.useState)("load1"),M=(0,a.Z)(T,2),O=M[0],w=M[1],C=(0,c.useState)("load2"),U=(0,a.Z)(C,2),H=U[0],D=U[1],I=(0,c.useState)("load3"),Y=(0,a.Z)(I,2),y=Y[0],A=Y[1],G=(0,c.useState)(""),R=(0,a.Z)(G,2),W=R[0],_=R[1];function F(){w("load3-outer"),D("load3-inner"),A("load-inner")}function L(){w("load1"),D("load2"),A("load3")}var P=r.db.collection("mine");(0,c.useEffect)((function(){_(""),P.doc(h.uid).onSnapshot((function(e){e.exists?v(e.data()):(v("Please Wait"),_("Check Network connection!"))}))}),[]),(0,c.useEffect)((function(){j.time<=0&&window.location.reload()}),[j]);var q=r.a.ref("coin3");(0,c.useEffect)((function(){q.on("value",(function(e){e.exists?S(e.val()):console.error()}))}),[]),(0,c.useEffect)((function(){N.coin>=2001&&r.db.ref("coin3").set({coin:0})}),[N]);var z=N.coin,B=0,J=j.earnings,K=j.time,Q=0,V=0;function X(){return(X=(0,s.Z)((0,i.Z)().mark((function e(){var n;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=z,e.next=200===e.t0?3:500===e.t0?11:1e3===e.t0?19:1500===e.t0?27:2e3===e.t0?35:43;break;case 3:case 11:return V-=1,F(),B+=1,E("Mining..."),f(!1),Q+=.002,setTimeout((function(){E("CONGRATS! YOU MINED ETH 0.0020!!!"),L(),f(!0)}),1e4),e.abrupt("break",51);case 19:return V-=1,F(),B+=1,E("Mining..."),f(!1),Q+=.0045,setTimeout((function(){E("CONGRATS! YOU MINED ETH 0.0045!!!"),f(!0),L()}),1e4),e.abrupt("break",51);case 27:return V-=1,F(),B+=1,E("Mining..."),f(!1),Q+=.023,setTimeout((function(){E("CONGRATS! YOU MINED ETH 0.023!!!"),f(!0),L()}),1e4),e.abrupt("break",51);case 35:return V-=1,F(),B+=1,E("Mining..."),f(!1),Q+=.23,setTimeout((function(){E("CONGRATS! YOU MINED ETH 0.23!!!"),f(!0),L()}),1e4),e.abrupt("break",51);case 43:return V-=1,F(),B+=1,E("Mining..."),f(!1),Q+=2e-5,setTimeout((function(){E("YOU MINED ETH 0.00002!!!"),f(!0),L()}),1e4),e.abrupt("break",51);case 51:return K+=V,z+=B,n=(J+=Q).toFixed(5),e.prev=55,e.next=58,q.update({coin:z});case 58:P.doc(h.uid).update({time:K,earnings:Number(n)}),e.next=64;break;case 61:e.prev=61,e.t1=e.catch(55),console.log("error");case 64:case"end":return e.stop()}}),e,null,[[55,61]])})))).apply(this,arguments)}return(0,l.jsxs)("div",{children:[(0,l.jsx)(u.Z,{}),(0,l.jsxs)("div",{className:"body-min",children:[(0,l.jsx)("div",{className:"welcome",children:(0,l.jsx)("h2",{children:"Welcome,"})}),(0,l.jsx)("div",{className:"earnings1",children:(0,l.jsxs)("h4",{children:["Time Left:  ",(0,l.jsx)(d.Z,{})]})}),(0,l.jsx)("div",{className:"text-danger",children:(0,l.jsx)("h5",{children:W})}),(0,l.jsx)("div",{className:"message-field",children:(0,l.jsx)("h3",{children:k})}),(0,l.jsx)("div",{children:(0,l.jsx)("div",{className:"body",children:(0,l.jsx)("div",{class:O,children:(0,l.jsx)("div",{class:H,children:(0,l.jsx)("div",{className:y})})})})}),t&&(0,l.jsxs)("p",{children:[" ",(0,l.jsx)("div",{className:"button-div",children:(0,l.jsx)("button",{className:"btn6 ",onClick:function(){return X.apply(this,arguments)},children:(0,l.jsx)("h4",{children:"Start Mine"})})})]})]})]})}}}]);