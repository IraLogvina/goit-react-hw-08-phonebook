(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[4],{117:function(t,e,n){t.exports={list:"ContactList_list__2T7aG",listItem:"ContactList_listItem__29Cbr",listItemName:"ContactList_listItemName__39F1_",listItemNumber:"ContactList_listItemNumber__3d8DW",button:"ContactList_button__1RuFy"}},123:function(t,e,n){t.exports={contactForm:"ContactForm_contactForm__OrlO3",label:"ContactForm_label__378f8",input:"ContactForm_input__gm87B",button:"ContactForm_button__1MLZK",title:"ContactForm_title__3MqSl"}},124:function(t,e,n){t.exports={input:"Filter_input__2DoVp",title:"Filter_title__mtLuE"}},137:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return F}));var c=n(10),a=n(0),r=n(117),s=n.n(r),i=n(30),o=function(t){return t.contacts.items},u=function(t){return t.contacts.filter},l=Object(i.a)([o,u],(function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))})),b=n(22),m=n.n(b),j=n(9);m.a.defaults.baseURL="https://connections-api.herokuapp.com";var d=n(118),O=n.n(d),f=n(1);function h(){var t=Object(c.b)();Object(a.useEffect)((function(){return t((function(t){t(Object(j.h)()),m.a.get("/contacts").then((function(e){var n=e.data;return t(Object(j.i)(n))})).catch((function(e){return t(Object(j.g)(e))}))}))}),[t]);var e=Object(c.c)(l);return Object(f.jsx)("div",{children:Object(f.jsx)("ul",{className:s.a.list,children:e.map((function(e){var n=e.id,c=e.name,a=e.number;return Object(f.jsxs)("li",{className:s.a.listItem,children:[Object(f.jsxs)("span",{className:s.a.listItemName,children:[c,":"]}),Object(f.jsx)("span",{className:s.a.listItemNumber,children:a}),Object(f.jsx)(O.a,{color:"action",onClick:function(){return t(function(t){return function(e){e(Object(j.e)()),m.a.delete("contacts/".concat(t)).then((function(){return e(Object(j.f)(t))})).catch((function(t){return e(Object(j.d)(t))}))}}(n))},cursor:"pointer",size:"large"})]},n)}))})})}var p=n(112),_=n(123),v=n.n(_);function x(){var t=Object(a.useState)(""),e=Object(p.a)(t,2),n=e[0],r=e[1],s=Object(a.useState)(""),i=Object(p.a)(s,2),o=i[0],u=i[1],l=Object(c.b)(),b=function(t){var e=t.currentTarget,n=e.name,c=e.value;switch(n){case"name":r(c);break;case"number":u(c);break;default:return}};return Object(f.jsxs)("div",{children:[Object(f.jsx)("h3",{className:v.a.title,children:"Add contact"}),Object(f.jsxs)("form",{className:v.a.contactForm,onSubmit:function(t){t.preventDefault(),l(function(t){var e=t.name,n=t.number;return function(t){var c={name:e,number:n};t(Object(j.b)()),m.a.post("/contacts",c).then((function(e){var n=e.data;return t(Object(j.c)(n))})).catch((function(e){return t(Object(j.a)(e))}))}}({name:n,number:o})),r(""),u("")},children:[Object(f.jsx)("label",{className:v.a.label,children:"Name"}),Object(f.jsx)("input",{className:v.a.input,value:n,onChange:b,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0}),Object(f.jsx)("label",{className:v.a.label,children:"Number"}),Object(f.jsx)("input",{className:v.a.input,value:o,onChange:b,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0}),Object(f.jsx)("button",{type:"submit",className:v.a.button,children:"Add contact"})]})]})}var N=n(124),C=n.n(N),g=function(){var t=Object(c.c)(u),e=Object(c.b)();return Object(f.jsxs)("div",{children:[Object(f.jsx)("h3",{className:C.a.title,children:"Find contacts by name"}),Object(f.jsx)("input",{type:"text",name:"filter",value:t,onChange:function(t){return e(Object(j.j)(t.target.value))},className:C.a.input})]})};function F(){var t=Object(c.c)(o);return Object(f.jsxs)("div",{className:"container",children:[Object(f.jsx)(x,{}),t.length>0&&Object(f.jsx)(g,{}),Object(f.jsx)(h,{})]})}}}]);
//# sourceMappingURL=4.07c03801.chunk.js.map