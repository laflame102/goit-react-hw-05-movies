"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[788],{788:function(e,r,n){n.r(r),n.d(r,{default:function(){return m}});var t=n(861),c=n(439),u=n(757),a=n.n(u),o=n(966),i=n(87),s=n(689),f=n(184),p=function(e){var r=e.films,n=(0,s.TH)();return(0,f.jsx)("div",{children:(0,f.jsx)("ul",{children:r.map((function(e){var r=e.id,t=e.original_title;return(0,f.jsx)("li",{children:(0,f.jsx)(i.rU,{to:"/movies/".concat(r),state:{from:n},children:t})},r)}))})})},h=n(791),v=n(221),m=function(){var e=(0,h.useState)([]),r=(0,c.Z)(e,2),n=r[0],u=r[1],i=(0,h.useState)(!1),m=(0,c.Z)(i,2),d=m[0],x=m[1];return(0,h.useEffect)((function(){var e=function(){var e=(0,t.Z)(a().mark((function e(){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,x(!0),e.next=4,(0,v.Hg)();case 4:r=e.sent,u(r.results),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:return e.prev=11,x(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,f.jsxs)("div",{children:[(0,f.jsx)("h1",{children:"Trending today"}),d&&(0,f.jsx)(o.Z,{}),(0,f.jsx)(p,{films:n}),(0,f.jsx)(s.j3,{})]})}},221:function(e,r,n){n.d(r,{Hg:function(){return i},IQ:function(){return f},Jh:function(){return p},TP:function(){return s},XT:function(){return h}});var t=n(861),c=n(757),u=n.n(c),a="https://api.themoviedb.org/3",o="46524a805b39690e1dbf4f8ffae20232",i=function(){var e=(0,t.Z)(u().mark((function e(){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(a,"/trending/movie/day?api_key=").concat(o));case 2:if(!(r=e.sent).ok){e.next=7;break}return e.next=6,r.json();case 6:return e.abrupt("return",e.sent);case 7:return e.abrupt("return",Promise.reject(new Error("There is no trending films")));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=(0,t.Z)(u().mark((function e(r){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(a,"/movie/").concat(r,"?api_key=").concat(o));case 2:if(!(n=e.sent).ok){e.next=7;break}return e.next=6,n.json();case 6:return e.abrupt("return",e.sent);case 7:return e.abrupt("return",Promise.reject(new Error("There is no movie with such id ".concat(r))));case 8:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),f=function(){var e=(0,t.Z)(u().mark((function e(r){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(a,"/movie/").concat(r,"/credits?api_key=").concat(o));case 2:if(!(n=e.sent).ok){e.next=7;break}return e.next=6,n.json();case 6:return e.abrupt("return",e.sent);case 7:return e.abrupt("return",Promise.reject(new Error("There is no movie with such id ".concat(r))));case 8:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,t.Z)(u().mark((function e(r){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(a,"/movie/").concat(r,"/reviews?api_key=").concat(o));case 2:if(!(n=e.sent).ok){e.next=7;break}return e.next=6,n.json();case 6:return e.abrupt("return",e.sent);case 7:return e.abrupt("return",Promise.reject(new Error("There is no movie with such id ".concat(r))));case 8:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),h=function(){var e=(0,t.Z)(u().mark((function e(r){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(a,"/search/movie?api_key=").concat(o,"&query=").concat(r));case 2:if(!(n=e.sent).ok){e.next=7;break}return e.next=6,n.json();case 6:return e.abrupt("return",e.sent);case 7:return e.abrupt("return",Promise.reject(new Error("There is no movie with such name ".concat(r))));case 8:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()},861:function(e,r,n){function t(e,r,n,t,c,u,a){try{var o=e[u](a),i=o.value}catch(s){return void n(s)}o.done?r(i):Promise.resolve(i).then(t,c)}function c(e){return function(){var r=this,n=arguments;return new Promise((function(c,u){var a=e.apply(r,n);function o(e){t(a,c,u,o,i,"next",e)}function i(e){t(a,c,u,o,i,"throw",e)}o(void 0)}))}}n.d(r,{Z:function(){return c}})}}]);
//# sourceMappingURL=788.36a270ab.chunk.js.map