"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[759],{6083:function(n,r,e){e.d(r,{Hx:function(){return p},Mc:function(){return l},SU:function(){return s},Y5:function(){return d},uV:function(){return f}});var t=e(5861),a=e(7757),u=e.n(a),c=e(4569),o=e.n(c);o().defaults.baseURL="https://api.themoviedb.org/3";var i="0d3c19a06e728eab3e881b744ba766c6",s=function(){var n=(0,t.Z)(u().mark((function n(){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().get("trending/movie/day?api_key=".concat(i));case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,t.Z)(u().mark((function n(r){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().get("movie/".concat(r,"/reviews?api_key=").concat(i));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),f=function(){var n=(0,t.Z)(u().mark((function n(r){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().get("movie/".concat(r,"/credits?api_key=").concat(i));case 2:return e=n.sent,n.abrupt("return",e.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),d=function(){var n=(0,t.Z)(u().mark((function n(r){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().get("search/movie?api_key=".concat(i,"&language=en-US&query=").concat(r,"&page=1"));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),l=function(){var n=(0,t.Z)(u().mark((function n(r){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().get("movie/".concat(r,"?api_key=").concat(i));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}()},7759:function(n,r,e){e.r(r),e.d(r,{MoviesPage:function(){return g},default:function(){return k}});var t,a,u,c,o=e(885),i=e(2791),s=e(501),p=e(6871),f=e(6083),d=e(168),l=e(82),v=l.ZP.button(t||(t=(0,d.Z)(["\n    font-size: 18px;\n    padding: 7px 12px;\n    margin-left: 10px;\n    background-color: orangered;\n    border: 0;\n    border-radius: 4px;\n    color: white;\n    cursor: pointer;\n    transition: background-color linear 250ms;\n    &:hover {\n        background-color: #c20a4e;\n    }\n"]))),h=e(184),x=function(n){var r=n.onSearch,e=(0,i.useState)(""),t=(0,o.Z)(e,2),a=t[0],u=t[1];return(0,h.jsx)(h.Fragment,{children:(0,h.jsxs)("form",{onSubmit:function(n){n.preventDefault();var e=a.trim();e&&(r(e),u(""))},children:[(0,h.jsx)("input",{type:"text",value:a,onChange:function(n){return u(n.target.value)}}),(0,h.jsx)(v,{type:"submit",children:"Search"})]})})},b=(l.ZP.input(a||(a=(0,d.Z)(["\n    padding: 5px 10px;\n    font-size: 16px;\n    outline: 0px solid #e30b5c;\n    border-radius: 4px;\n    transition: border-color linear 250ms;\n     &:focus {\n        outline: 0;\n        border-color: #e30b5c;\n    }\n"]))),(0,l.ZP)(s.OL)(u||(u=(0,d.Z)(["\n    color: #000;\n    font-size: 1.2rem;\n    text-decoration: none;\n    &:hover {\n        color: orangered;\n    }\n"])))),m=l.ZP.div(c||(c=(0,d.Z)(["\n    display: block;\n"]))),g=function(){var n=(0,i.useState)([]),r=(0,o.Z)(n,2),e=r[0],t=r[1],a=(0,s.lr)(),u=(0,o.Z)(a,2),c=u[0],d=u[1],l=(0,p.TH)();return(0,i.useEffect)((function(){var n,r=null!==(n=c.get("query"))&&void 0!==n?n:"";r&&f.Y5(r).then((function(n){return t(n)}))}),[c]),(0,h.jsxs)(m,{children:[(0,h.jsx)(x,{onSearch:function(n){d({query:n})}}),e.length>0&&(0,h.jsx)("ul",{children:e.map((function(n){var r=n.id,e=n.title;return(0,h.jsx)("li",{children:(0,h.jsx)(b,{to:"".concat(r),state:{from:l},children:e})},r)}))})]})},k=g}}]);
//# sourceMappingURL=759.8e79f86c.chunk.js.map