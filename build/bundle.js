var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function u(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(e,n,o){e.$$.on_destroy.push(function(e,...n){if(null==e)return t;const o=e.subscribe(...n);return o.unsubscribe?()=>o.unsubscribe():o}(n,o))}function s(t,e){t.appendChild(e)}function i(t,e,n){t.insertBefore(e,n||null)}function l(t){t.parentNode.removeChild(t)}function a(t){return document.createElement(t)}function f(t){return document.createTextNode(t)}function d(){return f(" ")}function p(){return f("")}function m(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function h(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function $(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}let g;function b(t){g=t}function y(){if(!g)throw new Error("Function called outside component initialization");return g}function x(){const t=y();return(e,n)=>{const o=t.$$.callbacks[e];if(o){const r=function(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(e,n);o.slice().forEach((e=>{e.call(t,r)}))}}}const v=[],w=[],Q=[],_=[],E=Promise.resolve();let A=!1;function N(t){Q.push(t)}let C=!1;const M=new Set;function k(){if(!C){C=!0;do{for(let t=0;t<v.length;t+=1){const e=v[t];b(e),j(e.$$)}for(b(null),v.length=0;w.length;)w.pop()();for(let t=0;t<Q.length;t+=1){const e=Q[t];M.has(e)||(M.add(e),e())}Q.length=0}while(v.length);for(;_.length;)_.pop()();A=!1,C=!1,M.clear()}}function j(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(N)}}const q=new Set;let G;function O(t,e){t&&t.i&&(q.delete(t),t.i(e))}function S(t,e,n,o){if(t&&t.o){if(q.has(t))return;q.add(t),G.c.push((()=>{q.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}function T(t){t&&t.c()}function P(t,n,u){const{fragment:c,on_mount:s,on_destroy:i,after_update:l}=t.$$;c&&c.m(n,u),N((()=>{const n=s.map(e).filter(r);i?i.push(...n):o(n),t.$$.on_mount=[]})),l.forEach(N)}function I(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function R(t,e){-1===t.$$.dirty[0]&&(v.push(t),A||(A=!0,E.then(k)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function L(e,r,u,c,s,i,a=[-1]){const f=g;b(e);const d=r.props||{},p=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:s,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:n(),dirty:a,skip_bound:!1};let m=!1;if(p.ctx=u?u(e,d,((t,n,...o)=>{const r=o.length?o[0]:n;return p.ctx&&s(p.ctx[t],p.ctx[t]=r)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](r),m&&R(e,t)),n})):[],p.update(),m=!0,o(p.before_update),p.fragment=!!c&&c(p.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);p.fragment&&p.fragment.l(t),t.forEach(l)}else p.fragment&&p.fragment.c();r.intro&&O(e.$$.fragment),P(e,r.target,r.anchor),k()}b(f)}class X{$destroy(){I(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Y=[];const z=function(e,n=t){let o;const r=[];function c(t){if(u(e,t)&&(e=t,o)){const t=!Y.length;for(let t=0;t<r.length;t+=1){const n=r[t];n[1](),Y.push(n,e)}if(t){for(let t=0;t<Y.length;t+=2)Y[t][0](Y[t+1]);Y.length=0}}}return{set:c,update:function(t){c(t(e))},subscribe:function(u,s=t){const i=[u,s];return r.push(i),1===r.length&&(o=n(c)||t),u(e),()=>{const t=r.indexOf(i);-1!==t&&r.splice(t,1),0===r.length&&(o(),o=null)}}}}(null);function B(e){let n;return{c(){n=a("pre"),n.textContent="Loading questions..."},m(t,e){i(t,n,e)},p:t,d(t){t&&l(n)}}}function F(e){let n,o,r;return{c(){n=a("button"),n.textContent="Играть"},m(t,u){i(t,n,u),o||(r=m(n,"click",e[1]),o=!0)},p:t,d(t){t&&l(n),o=!1,r()}}}function K(e){let n;function o(t,e){return t[0]?F:B}let r=o(e),u=r(e);return{c(){u.c(),n=p()},m(t,e){u.m(t,e),i(t,n,e)},p(t,[e]){r===(r=o(t))&&u?u.p(t,e):(u.d(1),u=r(t),u&&(u.c(),u.m(n.parentNode,n)))},i:t,o:t,d(t){u.d(t),t&&l(n)}}}function U(t,e,n){let o;c(t,z,(t=>n(2,o=t)));const r=x();let u;return t.$$.update=()=>{4&t.$$.dirty&&n(0,u=Boolean(o?.default))},[u,()=>r("startGame",{selectedQuestionSet:"default"})]}class J extends X{constructor(t){super(),L(this,t,U,K,u,{})}}function W(t,e,n){const o=t.slice();return o[5]=e[n],o}function D(t){let e,n,o,r,u,c=t[5].value+"";return{c(){e=a("button"),n=f(c),h(e,"id",o="choice-"+t[5].id)},m(o,c){i(o,e,c),s(e,n),r||(u=m(e,"click",t[2]),r=!0)},p(t,r){2&r&&c!==(c=t[5].value+"")&&$(n,c),2&r&&o!==(o="choice-"+t[5].id)&&h(e,"id",o)},d(t){t&&l(e),r=!1,u()}}}function H(e){let n,o,r,u,c,p,m,g,b=e[1].questionText+"",y=e[1].answerChoices,x=[];for(let t=0;t<y.length;t+=1)x[t]=D(W(e,y,t));return{c(){n=a("div"),o=a("pre"),r=f("Вопрос #"),u=f(e[0]),c=d(),p=a("pre"),m=f(b),g=d();for(let t=0;t<x.length;t+=1)x[t].c();h(o,"class","svelte-1uua47g"),h(p,"class","svelte-1uua47g")},m(t,e){i(t,n,e),s(n,o),s(o,r),s(o,u),s(n,c),s(n,p),s(p,m),s(n,g);for(let t=0;t<x.length;t+=1)x[t].m(n,null)},p(t,[e]){if(1&e&&$(u,t[0]),2&e&&b!==(b=t[1].questionText+"")&&$(m,b),6&e){let o;for(y=t[1].answerChoices,o=0;o<y.length;o+=1){const r=W(t,y,o);x[o]?x[o].p(r,e):(x[o]=D(r),x[o].c(),x[o].m(n,null))}for(;o<x.length;o+=1)x[o].d(1);x.length=y.length}},i:t,o:t,d(t){t&&l(n),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(x,t)}}}function V(t,e,n){const o=x();let{selectedQuestions:r}=e,u=1,c=r[0];console.log(r);return t.$$set=t=>{"selectedQuestions"in t&&n(3,r=t.selectedQuestions)},[u,c,t=>{"choice-"+c.correctAnswerId===t.target.id?u!==r.length?(n(1,c=r[u]),n(0,u+=1)):o("endGame",{win:!0}):o("endGame",{win:!1,failedQuestion:c,questionNumber:u})},r]}class Z extends X{constructor(t){super(),L(this,t,V,H,u,{selectedQuestions:3})}}function tt(t){let e,n,o,r,u,c,m,h,g,b,y=t[0].questionNumber+"",x=t[0].failedQuestion.questionText+"",v=t[0].failedQuestion.comment&&nt(t);return{c(){e=a("pre"),e.textContent="Поражение...",n=d(),o=a("pre"),r=f("Вы ошиблись на вопросе #"),u=f(y),c=f(': "'),m=f(x),h=f('"'),g=d(),v&&v.c(),b=p()},m(t,l){i(t,e,l),i(t,n,l),i(t,o,l),s(o,r),s(o,u),s(o,c),s(o,m),s(o,h),i(t,g,l),v&&v.m(t,l),i(t,b,l)},p(t,e){1&e&&y!==(y=t[0].questionNumber+"")&&$(u,y),1&e&&x!==(x=t[0].failedQuestion.questionText+"")&&$(m,x),t[0].failedQuestion.comment?v?v.p(t,e):(v=nt(t),v.c(),v.m(b.parentNode,b)):v&&(v.d(1),v=null)},d(t){t&&l(e),t&&l(n),t&&l(o),t&&l(g),v&&v.d(t),t&&l(b)}}}function et(e){let n;return{c(){n=a("pre"),n.textContent="Джай, победа!"},m(t,e){i(t,n,e)},p:t,d(t){t&&l(n)}}}function nt(t){let e,n,o,r,u=t[0].failedQuestion.comment+"";return{c(){e=a("pre"),n=f('Комментарий к вопросу: "'),o=f(u),r=f('"')},m(t,u){i(t,e,u),s(e,n),s(e,o),s(e,r)},p(t,e){1&e&&u!==(u=t[0].failedQuestion.comment+"")&&$(o,u)},d(t){t&&l(e)}}}function ot(e){let n;function o(t,e){return t[0].win?et:tt}let r=o(e),u=r(e);return{c(){u.c(),n=p()},m(t,e){u.m(t,e),i(t,n,e)},p(t,[e]){r===(r=o(t))&&u?u.p(t,e):(u.d(1),u=r(t),u&&(u.c(),u.m(n.parentNode,n)))},i:t,o:t,d(t){u.d(t),t&&l(n)}}}function rt(t,e,n){let{gameResult:o}=e;x();return t.$$set=t=>{"gameResult"in t&&n(0,o=t.gameResult)},[o]}class ut extends X{constructor(t){super(),L(this,t,rt,ot,u,{gameResult:0})}}const ct={difficulty:0,questionText:1,answerChoices:[2,3,4,5],correctAnswerId:6,comment:7},st="ABCDEFGHIJKLMNOPQRSTUVWXYZ",it=st[Math.min(...Object.values(ct).flat())],lt=st[Math.max(...Object.values(ct).flat())],at=async(t,e=999)=>{const n=await fetch(((t,e="1bKQJpX9-sXuFIKyquUp30cLYGhPtmvnQPQn9jzWidEY")=>`https://sheets.googleapis.com/v4/spreadsheets/${e}/values/${t}?key=AIzaSyArSjo348Lbj37Njn-o8baYQ_p4CsAQXSA`)(((t,e,n=2)=>`${t}!${it}${n}:${lt}${n+e}`)(t,e)));return(await n.json()).values.map(((t,e)=>Object.entries(ct).reduce(((e,[n,o])=>(e[n]="number"==typeof o?t[o]:o.map(((e,n)=>({id:n+1,value:t[e]}))),e)),{id:e})))},ft=(t,e,n=[])=>{const o=t.sort(((t,e)=>t.difficulty-e.difficulty)).reduce(((t,e)=>(t[n.includes(e.id)?"played":"notPlayed"].push(e),t)),{notPlayed:[],played:[]});let r=dt(o.notPlayed,e);return r.length<e&&(r=r.concat(dt(o.played,e-r.length)).sort(((t,e)=>t.difficulty-e.difficulty))),r},dt=(t,e)=>{if(t.length<=e)return t;const n=Math.floor(t.length/e);let o=t.length%e;const r=[];let u=0,c=n;for(;e--;)o-- >0&&(c+=1),r.push(pt(t.slice(u,c))),u=c,c+=n;return r},pt=t=>t[Math.floor(Math.random()*t.length)];function mt(e){let n,o;return n=new J({}),n.$on("startGame",e[3]),{c(){T(n.$$.fragment)},m(t,e){P(n,t,e),o=!0},p:t,i(t){o||(O(n.$$.fragment,t),o=!0)},o(t){S(n.$$.fragment,t),o=!1},d(t){I(n,t)}}}function ht(t){let e,n;return e=new ut({props:{gameResult:t[2]}}),e.$on("playAgain",t[3]),{c(){T(e.$$.fragment)},m(t,o){P(e,t,o),n=!0},p(t,n){const o={};4&n&&(o.gameResult=t[2]),e.$set(o)},i(t){n||(O(e.$$.fragment,t),n=!0)},o(t){S(e.$$.fragment,t),n=!1},d(t){I(e,t)}}}function $t(t){let e,n;return e=new Z({props:{selectedQuestions:t[1]}}),e.$on("endGame",t[4]),{c(){T(e.$$.fragment)},m(t,o){P(e,t,o),n=!0},p(t,n){const o={};2&n&&(o.selectedQuestions=t[1]),e.$set(o)},i(t){n||(O(e.$$.fragment,t),n=!0)},o(t){S(e.$$.fragment,t),n=!1},d(t){I(e,t)}}}function gt(t){let e,n,r,u;const c=[$t,ht,mt],s=[];function f(t,e){return"IN-GAME"===t[0]?0:"POST-GAME"===t[0]?1:2}return n=f(t),r=s[n]=c[n](t),{c(){e=a("main"),r.c(),h(e,"class","svelte-1e9puaw")},m(t,o){i(t,e,o),s[n].m(e,null),u=!0},p(t,[u]){let i=n;n=f(t),n===i?s[n].p(t,u):(G={r:0,c:[],p:G},S(s[i],1,1,(()=>{s[i]=null})),G.r||o(G.c),G=G.p,r=s[n],r||(r=s[n]=c[n](t),r.c()),O(r,1),r.m(e,null))},i(t){u||(O(r),u=!0)},o(t){S(r),u=!1},d(t){t&&l(e),s[n].d()}}}function bt(t,e,n){let o;var r;c(t,z,(t=>n(5,o=t))),r=async()=>{!function(t,e,n=e){t.set(n)}(z,o={default:ft(await at("БГ 1-6"),8,[])},o)},y().$$.on_mount.push(r);let u,s,i="MAIN-MENU";return[i,u,s,({detail:t})=>{n(1,u=o[t?.selectedQuestionSet||"default"]),n(0,i="IN-GAME")},({detail:t})=>{n(2,s=t),n(0,i="POST-GAME")}]}return new class extends X{constructor(t){super(),L(this,t,bt,gt,u,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
