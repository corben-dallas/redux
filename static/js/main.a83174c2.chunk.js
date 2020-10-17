(this.webpackJsonprdx=this.webpackJsonprdx||[]).push([[0],{28:function(e,t,a){e.exports=a(40)},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(14),c=a.n(i),l=a(19),o=a(2),s=a(16),d=a(7),u=a(20),m=a(9),p=function(e){var t=e.onAdd,a=e.value,n=e.onInputChange,i=e.isEdit,c=e.filter,l=e.onFilterChange;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("input",{type:"text",name:"description",value:a.description,onChange:n,placeholder:"Add a description"}),r.a.createElement("input",{type:"text",name:"price",value:a.price,onChange:n,placeholder:"add price"}),r.a.createElement("button",{className:"",disabled:!a.description||!a.price,onClick:function(){t(a)}},i?"Edit":"Add"),r.a.createElement("input",{type:"text",value:c,name:"filter",onChange:l,placeholder:"Filter by description and price",style:{marginLeft:"25px",width:"200px"}})))},E=a(10),f=a(18),v=function(e){var t=e.itemsList,a=e.onEdit,n=e.onRemove,i=e.filterSearchValue,c=Object(E.a)(t);return i.length>0&&(c=t.filter((function(e){if(!e)return!1;var t=!!e.description&&e.description.toLowerCase().includes(i.trim().toLowerCase()),a=!!e.price&&e.price.toLowerCase().includes(i.trim().toLowerCase());return t||a}))),r.a.createElement("div",{className:"list"},0===t.length&&0===i.length&&r.a.createElement("p",null,"No items added"),0!==i.length&&0===c.length&&r.a.createElement("p",null,"No result"),c.map((function(e){return r.a.createElement("div",{key:Object(f.a)(),className:"list__item"},r.a.createElement("div",{className:"list__description"},e.description),r.a.createElement("div",{className:"list__price"},e.price),r.a.createElement("div",{className:"list__action"},r.a.createElement("div",{onClick:function(){return a(Object(d.a)({},e))},className:"list__action--edit"},r.a.createElement("i",{className:"material-icons"},"edit")),r.a.createElement("div",{onClick:function(){return n(e.id)},className:"list__action--remove"},r.a.createElement("i",{className:"material-icons"},"close"))))})))},b={description:"",price:""},h=function(){var e=Object(n.useState)(b),t=Object(u.a)(e,2),a=t[0],i=t[1],c=Object(n.useState)({state:!1,id:""}),l=Object(u.a)(c,2),o=l[0],E=l[1],f=Object(m.c)((function(e){return e.editReducer})),h=Object(m.c)((function(e){return e.filterReducer})).searchString,O=Object(m.b)(),_=Object(n.useState)(h),g=Object(u.a)(_,2),j=g[0],N=g[1];return r.a.createElement(n.Fragment,null,r.a.createElement(p,{onAdd:function(e){o.state?O({type:"EDIT_ITEM",payload:Object(d.a)(Object(d.a)({},e),{},{id:o.id})}):O(function(e){return{type:"ADD_ITEM",payload:e}}(e)),i(b),E({state:!1,id:""})},onInputChange:function(e){if(e){var t=e.target,a=t.name,n=t.value;i((function(e){return Object(d.a)(Object(d.a)({},e),{},Object(s.a)({},a,n))}))}},value:a,isEdit:o.state,filter:j,onFilterChange:function(e){var t=e.target.value;N(t),O({type:"SEARCH_STRING",payload:t})}}),r.a.createElement(v,{itemsList:f,onEdit:function(e){var t=e.description,a=e.price,n=e.id;i({description:t,price:a}),E({state:!0,id:n})},onRemove:function(e){O(function(e){return{type:"DELETE_ITEM",payload:{id:e}}}(e)),i(b),E({state:!1,id:""})},filterSearchValue:h}))},O=function(){return r.a.createElement("div",null,"to check items and filter state are save")};var _=function(){return r.a.createElement(n.Fragment,null,r.a.createElement(l.a,null,r.a.createElement("nav",{className:"nav"},r.a.createElement(l.b,{to:"/redux/first",className:"nav-link",activeClassName:"nav-link--selected"},"Task 1"),r.a.createElement(l.b,{to:"/redux/second",className:"nav-link",activeClassName:"nav-link--selected"},"Other page")),r.a.createElement(o.d,null,r.a.createElement(o.a,{exact:!0,from:"/redux",to:"/redux/first"}),r.a.createElement(o.b,{path:"/redux/first",component:h}),r.a.createElement(o.b,{path:"/redux/second",component:O}))))},g=(a(38),a(39),a(13)),j={searchString:""},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEARCH_STRING":return Object(d.a)(Object(d.a)({},e),{},{searchString:t.payload});default:return e}},y=[],C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_ITEM":var a=t.payload,n=a.description,r=a.price;return[].concat(Object(E.a)(e),[{id:Object(f.a)(),description:n,price:r}]);case"EDIT_ITEM":console.log(t.payload);var i=t.payload,c=i.id,l=i.description,o=i.price;return[].concat(Object(E.a)(e.filter((function(e){return e.id!==c}))),[{description:l,price:o,id:c}]);case"DELETE_ITEM":var s=t.payload.id;return Object(E.a)(e.filter((function(e){return e.id!==s})));default:return e}},S=Object(g.b)({editReducer:C,filterReducer:N}),T=Object(g.c)(S,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(m.a,{store:T},r.a.createElement(_,null))),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.a83174c2.chunk.js.map