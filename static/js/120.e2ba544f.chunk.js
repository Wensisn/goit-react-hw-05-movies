"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[120],{759:function(n,e,t){t.d(e,{CB:function(){return p},Tg:function(){return s},V5:function(){return f},q5:function(){return d},yo:function(){return l}});var r=t(861),c=t(757),a=t.n(c),i=t(44),o="https://api.themoviedb.org/3/",u="ecb4ebe4446fc4aea8082bc07d38b413",s=function(){var n=(0,r.Z)(a().mark((function n(){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.ZP.get("".concat(o,"trending/movie/day?api_key=").concat(u));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.ZP.get("".concat(o,"search/movie?api_key=").concat(u,"&language=en-US&query=").concat(e,"&page=1&include_adult=false"));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.ZP.get("".concat(o,"movie/").concat(e,"?api_key=").concat(u,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.ZP.get("".concat(o,"movie/").concat(e,"/credits?api_key=").concat(u,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.ZP.get("".concat(o,"movie/").concat(e,"/reviews?api_key=").concat(u,"&language=en-US&page=1"));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},947:function(n,e,t){t.r(e),t.d(e,{default:function(){return z}});var r,c,a,i,o,u,s,f,p,l=t(885),d=t(759),x=t(791),h=t(689),v=t(168),g=t(444),m=t(731),Z=g.ZP.div(r||(r=(0,v.Z)(["\n  width: 1280px;\n  margin-left: auto;\n  margin-right: auto;\n"]))),y=g.ZP.h1(c||(c=(0,v.Z)(["\n  color: firebrick;\n  display: flex;\n  justify-content: center;\n  text-transform: uppercase;\n  line-height: 1.17;\n"]))),k=g.ZP.h2(a||(a=(0,v.Z)(["\n  color: firebrick;\n  display: flex;\n  justify-content: center;\n  text-transform: uppercase;\n  line-height: 1.17;\n"]))),j=g.ZP.p(i||(i=(0,v.Z)(["\n  display: flex;\n  justify-content: center;\n  text-decoration: none;\n  color: inherit;\n  font-size: 24px;\n  color: firebrick;\n"]))),b=g.ZP.img(o||(o=(0,v.Z)([""]))),w=g.ZP.div(u||(u=(0,v.Z)(["\n  flex-direction: column;\n  display: flex;\n  justify-content: center;\n"]))),P=(0,g.ZP)(m.OL)(s||(s=(0,v.Z)(["\n  color: firebrick;\n  font-size: 30px;\n  padding: 20px;\n  margin: 50px;\n  text-decoration: none;\n"]))),_=g.ZP.div(f||(f=(0,v.Z)(["\n  display: flex;\n  justify-content: center;\n"]))),S=(0,g.ZP)(m.rU)(p||(p=(0,v.Z)(["\n  display: flex;\n  align-items: center;\n  color: firebrick;\n  font-size: 30px;\n  padding: 20px;\n  text-decoration: none;\n"]))),U=t(820),C=t(184),z=function(){var n,e,t=(0,h.UO)().movieId,r=(0,x.useState)(null),c=(0,l.Z)(r,2),a=c[0],i=c[1],o=null!==(n=null===(e=(0,h.TH)().state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/movies";if((0,x.useEffect)((function(){(0,d.CB)(Number(t)).then(i)}),[t]),!a)return null;var u=a.title,s=a.overview,f=a.popularity,p=a.backdrop_path;return(0,C.jsx)(C.Fragment,{children:(0,C.jsxs)(Z,{children:[(0,C.jsxs)(S,{to:o,children:[(0,C.jsx)(U.kyg,{}),"Back"]}),(0,C.jsx)(y,{children:"Movie Information"}),(0,C.jsx)(k,{children:u}),(0,C.jsxs)(w,{children:[(0,C.jsx)(j,{children:s}),(0,C.jsxs)(j,{children:["Popularity:",f]}),(0,C.jsx)(b,{src:"".concat("https://image.tmdb.org/t/p/w500").concat(p),alt:u})]}),(0,C.jsxs)(_,{children:[(0,C.jsx)(P,{to:"cast",state:{from:o},children:"Cast"}),(0,C.jsx)(P,{to:"reviews",state:{from:o},children:"Reviews"})]}),(0,C.jsx)(x.Suspense,{children:(0,C.jsx)(h.j3,{})})]})})}}}]);
//# sourceMappingURL=120.e2ba544f.chunk.js.map