"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[156],{6083:function(n,t,e){e.d(t,{Hx:function(){return f},Mc:function(){return d},SU:function(){return s},Y5:function(){return v},uV:function(){return p}});var r=e(5861),a=e(7757),c=e.n(a),u=e(4569),o=e.n(u);o().defaults.baseURL="https://api.themoviedb.org/3";var i="0d3c19a06e728eab3e881b744ba766c6",s=function(){var n=(0,r.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().get("trending/movie/day?api_key=".concat(i));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().get("movie/".concat(t,"/reviews?api_key=").concat(i));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().get("movie/".concat(t,"/credits?api_key=").concat(i));case 2:return e=n.sent,n.abrupt("return",e.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),v=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().get("search/movie?api_key=".concat(i,"&language=en-US&query=").concat(t,"&page=1"));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().get("movie/".concat(t,"?api_key=").concat(i));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},156:function(n,t,e){e.r(t),e.d(t,{HomePage:function(){return v},default:function(){return d}});var r,a=e(885),c=e(2791),u=e(168),o=e(82),i=e(501),s=(0,o.ZP)(i.OL)(r||(r=(0,u.Z)(["\n    color: #000;\n    font-size: 1.2rem;\n    text-decoration: none;\n    &:hover {\n        color: orangered;\n    }\n"]))),f=e(6083),p=e(184),v=function(){var n=(0,c.useState)([]),t=(0,a.Z)(n,2),e=t[0],r=t[1];if((0,c.useEffect)((function(){f.SU().then((function(n){return r(n)}))}),[]),e)return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("h1",{children:"Trending now"}),(0,p.jsx)("ul",{children:e.map((function(n){var t=n.id,e=n.title;return(0,p.jsx)("li",{children:(0,p.jsx)(s,{to:"/movies/".concat(t),children:e})},t)}))})]})},d=v}}]);
//# sourceMappingURL=156.9f1bdbc6.chunk.js.map