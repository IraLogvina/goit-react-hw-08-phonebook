(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[0],{109:function(t,e,n){},110:function(t,e,n){"use strict";n.r(e);var r,c,a,u=n(0),i=n.n(u),o=n(23),s=n.n(o),b=n(10),j=n(52),l=n(17),d=n(35),f=n(4),O=n(21),h=n(53),p=n.n(h),v=n(2),g=n(8),x=n(9),m=Object(f.c)([],(r={},Object(v.a)(r,x.i,(function(t,e){return e.payload})),Object(v.a)(r,x.c,(function(t,e){var n=e.payload;if(!t.find((function(t){return t.name===n.name})))return[n].concat(Object(d.a)(t));alert("".concat(n.name," is already in contacts"))})),Object(v.a)(r,x.f,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),r)),k=Object(f.c)("",Object(v.a)({},x.j,(function(t,e){return e.payload}))),_=Object(f.c)(!1,(c={},Object(v.a)(c,x.h,(function(){return!0})),Object(v.a)(c,x.i,(function(){return!1})),Object(v.a)(c,x.g,(function(){return!1})),Object(v.a)(c,x.b,(function(){return!0})),Object(v.a)(c,x.c,(function(){return!1})),Object(v.a)(c,x.a,(function(){return!1})),Object(v.a)(c,x.e,(function(){return!0})),Object(v.a)(c,x.f,(function(){return!1})),Object(v.a)(c,x.d,(function(){return!1})),c)),y=Object(f.c)(null,(a={},Object(v.a)(a,x.g,(function(t,e){return e.payload})),Object(v.a)(a,x.a,(function(t,e){return e.payload})),Object(v.a)(a,x.d,(function(t,e){return e.payload})),a)),C=Object(g.b)({items:m,filter:k,isLoading:_,error:y}),N=n(34),w=Object(d.a)(Object(f.d)({serializableCheck:{ignoredActions:[O.a,O.f,O.b,O.c,O.d,O.e]}})),L={key:"auth",storage:p.a,whitelist:["token"]},A=Object(f.a)({reducer:{auth:Object(O.g)(L,N.a),contacts:C},middleware:w,devTools:!1}),S=Object(O.h)(A),U=n(7),E=n(24),T=n(36),I=n(14),R=n(1),q=["isAuthenticated","redirectTo","children"];function z(t){t.isAuthenticated;var e=t.redirectTo,n=t.children,r=Object(T.a)(t,q),c=Object(b.c)(I.b.getIsAuthenticated);return Object(R.jsx)(U.b,Object(E.a)(Object(E.a)({},r),{},{children:c?n:Object(R.jsx)(U.a,{to:e})}))}var B=["isAuthenticated","redirectTo","children"];function P(t){t.isAuthenticated;var e=t.redirectTo,n=t.children,r=Object(T.a)(t,B),c=Object(b.c)(I.b.getIsAuthenticated);return Object(R.jsx)(U.b,Object(E.a)(Object(E.a)({},r),{},{children:c&&r.restricted?Object(R.jsx)(U.a,{to:e}):n}))}var M=n(55),J=n.n(M);var W=function(t){var e=t.children;return Object(R.jsx)("div",{className:J.a.container,children:e})},K=n(25),Q=n.n(K);function Y(){var t=Object(b.c)(I.b.getIsAuthenticated);return Object(R.jsxs)("nav",{className:Q.a.nav,children:[Object(R.jsx)(l.b,{to:"/",exact:!0,className:Q.a.link,activeClassName:Q.a.activeLink,children:"Home"}),t&&Object(R.jsx)(l.b,{to:"/contacts",exact:!0,className:Q.a.link,activeClassName:Q.a.activeLink,children:"Contacts"})]})}var F=n(37),H=n.n(F);function V(){var t=Object(b.b)(),e=Object(b.c)(I.b.getUserName);return Object(R.jsxs)("div",{className:H.a.menu,children:[Object(R.jsxs)("span",{className:H.a.name,children:["Welcome, ",e]}),Object(R.jsx)("button",{className:H.a.button,type:"button",onClick:function(){return t(I.a.logOut())},children:"Log out"})]})}var Z=n(26),D=n.n(Z);function G(){return Object(R.jsxs)("div",{className:D.a.nav,children:[Object(R.jsx)(l.b,{to:"/register",exact:!0,className:D.a.link,activeClassName:D.a.activeLink,children:"Sign up"}),Object(R.jsx)(l.b,{to:"/login",exact:!0,className:D.a.link,activeClassName:D.a.activeLink,children:"Log in"})]})}var X=n(56),$=n.n(X);function tt(){var t=Object(b.c)(I.b.getIsAuthenticated);return Object(R.jsxs)("header",{className:$.a.header,children:[Object(R.jsx)(Y,{}),t?Object(R.jsx)(V,{}):Object(R.jsx)(G,{})]})}var et=n(43),nt=n(18),rt=(n(108),Object(u.lazy)((function(){return n.e(7).then(n.bind(null,138))}))),ct=Object(u.lazy)((function(){return n.e(6).then(n.bind(null,139))})),at=Object(u.lazy)((function(){return n.e(5).then(n.bind(null,140))})),ut=Object(u.lazy)((function(){return Promise.all([n.e(3),n.e(4)]).then(n.bind(null,137))}));function it(){var t=Object(b.b)();return Object(u.useEffect)((function(){t(I.a.getCurrentUser())}),[t]),Object(R.jsxs)(W,{children:[Object(R.jsx)(tt,{}),Object(R.jsx)(u.Suspense,{fallback:Object(R.jsx)(et.a,{}),children:Object(R.jsxs)(U.d,{children:[Object(R.jsx)(P,{path:"/",exact:!0,children:Object(R.jsx)(rt,{})}),Object(R.jsx)(P,{path:"/register",restricted:!0,redirectTo:"/contacts",children:Object(R.jsx)(ct,{})}),Object(R.jsx)(P,{path:"/login",restricted:!0,redirectTo:"/contacts",children:Object(R.jsx)(at,{})}),Object(R.jsx)(z,{path:"/contacts",redirectTo:"/login",children:Object(R.jsx)(ut,{})})]})}),Object(R.jsx)(nt.a,{autoClose:3500})]})}n(109);s.a.render(Object(R.jsx)(i.a.StrictMode,{children:Object(R.jsx)(b.a,{store:A,children:Object(R.jsx)(j.a,{loading:null,persistor:S,children:Object(R.jsx)(l.a,{children:Object(R.jsx)(it,{})})})})}),document.getElementById("root"))},14:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return c}));var r={};n.r(r),n.d(r,"register",(function(){return f})),n.d(r,"logIn",(function(){return O})),n.d(r,"logOut",(function(){return h})),n.d(r,"getCurrentUser",(function(){return p}));var c={};n.r(c),n.d(c,"getIsAuthenticated",(function(){return v})),n.d(c,"getUserName",(function(){return g})),n.d(c,"getLoading",(function(){return x})),n.d(c,"getError",(function(){return m}));var a=n(3),u=(n(34),n(20)),i=n.n(u),o=n(29),s=n(22),b=n.n(s),j=n(18);b.a.defaults.baseURL="https://connections-api.herokuapp.com";var l=function(t){b.a.defaults.headers.common.Authorization="Bearer ".concat(t)},d=function(){b.a.defaults.headers.common.Authorization=""},f=function(t){return function(){var e=Object(o.a)(i.a.mark((function e(n){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(Object(a.k)()),e.prev=1,e.next=4,b.a.post("/users/signup",t);case 4:r=e.sent,l(r.data.token),n(Object(a.l)(r.data)),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),n(Object(a.j)(e.t0)),400===e.t0.response.status?j.b.error("This user is already exist!"):500===e.t0.response.status?j.b.error("Server error! Please try again later!"):j.b.error("Oops, something is wrong!");case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()},O=function(t){return function(){var e=Object(o.a)(i.a.mark((function e(n){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(Object(a.e)()),e.prev=1,e.next=4,b.a.post("/users/login",t);case 4:r=e.sent,l(r.data.token),n(Object(a.f)(r.data)),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),n(Object(a.d)(e.t0)),j.b.error("Invalid email or password!");case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()},h=function(){return function(){var t=Object(o.a)(i.a.mark((function t(e){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(Object(a.h)()),t.prev=1,t.next=4,b.a.post("/users/logout");case 4:d(),e(Object(a.i)()),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(1),e(Object(a.g)(t.t0)),500===t.t0.response.status?j.b.error("Server error! Please try again later!"):j.b.error("Opps, something is wrong! Please reload the page!");case 12:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()},p=function(){return function(){var t=Object(o.a)(i.a.mark((function t(e,n){var r,c,u;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=n(),c=r.auth.token){t.next=3;break}return t.abrupt("return");case 3:return l(c),e(Object(a.b)()),t.prev=5,t.next=8,b.a.get("/users/current");case 8:u=t.sent,e(Object(a.c)(u.data)),t.next=17;break;case 12:t.prev=12,t.t0=t.catch(5),e(Object(a.a)(t.t0)),d(),j.b.info("Your session is over. Please login again!");case 17:case"end":return t.stop()}}),t,null,[[5,12]])})));return function(e,n){return t.apply(this,arguments)}}()},v=function(t){return t.auth.isAuthenticated},g=function(t){return t.auth.user.name},x=function(t){return t.auth.isLoading},m=function(t){return t.auth.error}},25:function(t,e,n){t.exports={nav:"Navigation_nav__INfuO",link:"Navigation_link__12o2K",activeLink:"Navigation_activeLink__2rUFB"}},26:function(t,e,n){t.exports={nav:"AuthNav_nav__2hyWw",link:"AuthNav_link__2ejsg",activeLink:"AuthNav_activeLink__3huQJ"}},3:function(t,e,n){"use strict";n.d(e,"k",(function(){return c})),n.d(e,"l",(function(){return a})),n.d(e,"j",(function(){return u})),n.d(e,"e",(function(){return i})),n.d(e,"f",(function(){return o})),n.d(e,"d",(function(){return s})),n.d(e,"h",(function(){return b})),n.d(e,"i",(function(){return j})),n.d(e,"g",(function(){return l})),n.d(e,"b",(function(){return d})),n.d(e,"c",(function(){return f})),n.d(e,"a",(function(){return O}));var r=n(4),c=Object(r.b)("auth/registerRequest"),a=Object(r.b)("auth/registerSuccess"),u=Object(r.b)("auth/registerError"),i=Object(r.b)("auth/loginRequest"),o=Object(r.b)("auth/loginSuccess"),s=Object(r.b)("auth/loginError"),b=Object(r.b)("auth/logoutRequest"),j=Object(r.b)("auth/logoutSuccess"),l=Object(r.b)("auth/logoutError"),d=Object(r.b)("auth/getCurrentUserRequest"),f=Object(r.b)("auth/getCurrentUserSuccess"),O=Object(r.b)("auth/getCurrentUserError")},34:function(t,e,n){"use strict";var r,c,a,u,i,o=n(2),s=n(4),b=n(8),j=n(3),l={name:null,email:null},d=Object(s.c)(l,(r={},Object(o.a)(r,j.l,(function(t,e){return e.payload.user})),Object(o.a)(r,j.f,(function(t,e){return e.payload.user})),Object(o.a)(r,j.i,(function(){return l})),Object(o.a)(r,j.c,(function(t,e){return e.payload})),r)),f=Object(s.c)(null,(c={},Object(o.a)(c,j.l,(function(t,e){return e.payload.token})),Object(o.a)(c,j.f,(function(t,e){return e.payload.token})),Object(o.a)(c,j.i,(function(){return null})),c)),O=function(t,e){return e.payload},h=Object(s.c)(null,(a={},Object(o.a)(a,j.j,O),Object(o.a)(a,j.d,O),Object(o.a)(a,j.g,O),Object(o.a)(a,j.a,O),Object(o.a)(a,j.k,(function(){return null})),Object(o.a)(a,j.e,(function(){return null})),Object(o.a)(a,j.h,(function(){return null})),Object(o.a)(a,j.b,(function(){return null})),a)),p=Object(s.c)(!1,(u={},Object(o.a)(u,j.l,(function(){return!0})),Object(o.a)(u,j.f,(function(){return!0})),Object(o.a)(u,j.c,(function(){return!0})),Object(o.a)(u,j.j,(function(){return!1})),Object(o.a)(u,j.d,(function(){return!1})),Object(o.a)(u,j.a,(function(){return!1})),Object(o.a)(u,j.i,(function(){return!1})),u)),v=Object(s.c)(!1,(i={},Object(o.a)(i,j.k,(function(){return!0})),Object(o.a)(i,j.l,(function(){return!1})),Object(o.a)(i,j.j,(function(){return!1})),Object(o.a)(i,j.e,(function(){return!0})),Object(o.a)(i,j.f,(function(){return!1})),Object(o.a)(i,j.d,(function(){return!1})),Object(o.a)(i,j.h,(function(){return!0})),Object(o.a)(i,j.i,(function(){return!1})),Object(o.a)(i,j.g,(function(){return!1})),Object(o.a)(i,j.b,(function(){return!0})),Object(o.a)(i,j.c,(function(){return!1})),Object(o.a)(i,j.a,(function(){return!1})),i));e.a=Object(b.b)({user:d,isAuthenticated:p,token:f,error:h,isLoading:v})},37:function(t,e,n){t.exports={menu:"UserMenu_menu__1yCWo",name:"UserMenu_name__3e8KV",button:"UserMenu_button__3mTE-"}},43:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));n(0);var r=n(57),c=n.n(r),a=n(58),u=n.n(a),i=n(1);function o(){return Object(i.jsx)("div",{className:u.a.Loader,children:Object(i.jsx)(c.a,{type:"BallTriangle",color:"white",height:120,width:120,timeout:2e3})})}},55:function(t,e,n){t.exports={container:"Container_container__3RIox"}},56:function(t,e,n){t.exports={header:"AppBar_header__1Yk8v"}},58:function(t,e,n){t.exports={Loader:"Loader_Loader__17sQZ"}},9:function(t,e,n){"use strict";n.d(e,"h",(function(){return c})),n.d(e,"i",(function(){return a})),n.d(e,"g",(function(){return u})),n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return s})),n.d(e,"e",(function(){return b})),n.d(e,"f",(function(){return j})),n.d(e,"d",(function(){return l})),n.d(e,"j",(function(){return d}));var r=n(4),c=Object(r.b)("contacts/fetchContactRequest"),a=Object(r.b)("contacts/fetchContactSuccess"),u=Object(r.b)("contacts/fetchContactError"),i=Object(r.b)("contacts/addContactRequest"),o=Object(r.b)("contacts/addContactSuccess"),s=Object(r.b)("contacts/addContactError"),b=Object(r.b)("contacts/deleteContactRequest"),j=Object(r.b)("contacts/deleteContactSuccess"),l=Object(r.b)("contacts/deleteContactError"),d=Object(r.b)("contacts/filterContacts")}},[[110,1,2]]]);
//# sourceMappingURL=main.934c157e.chunk.js.map