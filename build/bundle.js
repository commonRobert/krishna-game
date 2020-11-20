var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function i(e,n,o){e.$$.on_destroy.push(function(e,...n){if(null==e)return t;const o=e.subscribe(...n);return o.unsubscribe?()=>o.unsubscribe():o}(n,o))}function l(t){return null==t?"":t}function u(t,e){t.appendChild(e)}function s(t,e,n){t.insertBefore(e,n||null)}function a(t){t.parentNode.removeChild(t)}function f(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function d(t){return document.createElement(t)}function p(t){return document.createTextNode(t)}function m(){return p(" ")}function h(){return p("")}function $(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function g(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function b(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}let y;function E(t){y=t}function v(){if(!y)throw new Error("Function called outside component initialization");return y}function x(t){v().$$.on_mount.push(t)}function A(){const t=v();return(e,n)=>{const o=t.$$.callbacks[e];if(o){const r=function(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(e,n);o.slice().forEach((e=>{e.call(t,r)}))}}}const N=[],_=[],M=[],I=[],R=Promise.resolve();let k=!1;function w(t){M.push(t)}let C=!1;const O=new Set;function T(){if(!C){C=!0;do{for(let t=0;t<N.length;t+=1){const e=N[t];E(e),Q(e.$$)}for(E(null),N.length=0;_.length;)_.pop()();for(let t=0;t<M.length;t+=1){const e=M[t];O.has(e)||(O.add(e),e())}M.length=0}while(N.length);for(;I.length;)I.pop()();k=!1,C=!1,O.clear()}}function Q(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(w)}}const S=new Set;let P;function j(t,e){t&&t.i&&(S.delete(t),t.i(e))}function q(t,e,n,o){if(t&&t.o){if(S.has(t))return;S.add(t),P.c.push((()=>{S.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}function W(t){t&&t.c()}function G(t,n,c){const{fragment:i,on_mount:l,on_destroy:u,after_update:s}=t.$$;i&&i.m(n,c),w((()=>{const n=l.map(e).filter(r);u?u.push(...n):o(n),t.$$.on_mount=[]})),s.forEach(w)}function X(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function D(t,e){-1===t.$$.dirty[0]&&(N.push(t),k||(k=!0,R.then(T)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function L(e,r,c,i,l,u,s=[-1]){const f=y;E(e);const d=r.props||{},p=e.$$={fragment:null,ctx:null,props:u,update:t,not_equal:l,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:n(),dirty:s,skip_bound:!1};let m=!1;if(p.ctx=c?c(e,d,((t,n,...o)=>{const r=o.length?o[0]:n;return p.ctx&&l(p.ctx[t],p.ctx[t]=r)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](r),m&&D(e,t)),n})):[],p.update(),m=!0,o(p.before_update),p.fragment=!!i&&i(p.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);p.fragment&&p.fragment.l(t),t.forEach(a)}else p.fragment&&p.fragment.c();r.intro&&j(e.$$.fragment),G(e,r.target,r.anchor),T()}E(f)}class B{$destroy(){X(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const F=[];const z=function(e,n=t){let o;const r=[];function i(t){if(c(e,t)&&(e=t,o)){const t=!F.length;for(let t=0;t<r.length;t+=1){const n=r[t];n[1](),F.push(n,e)}if(t){for(let t=0;t<F.length;t+=2)F[t][0](F[t+1]);F.length=0}}}return{set:i,update:function(t){i(t(e))},subscribe:function(c,l=t){const u=[c,l];return r.push(u),1===r.length&&(o=n(i)||t),c(e),()=>{const t=r.indexOf(u);-1!==t&&r.splice(t,1),0===r.length&&(o(),o=null)}}}}(null);function U(e){let n;return{c(){n=d("pre"),n.textContent="Loading questions..."},m(t,e){s(t,n,e)},p:t,d(t){t&&a(n)}}}function V(e){let n,o,r;return{c(){n=d("button"),n.textContent="Играть"},m(t,c){s(t,n,c),o||(r=$(n,"click",e[1]),o=!0)},p:t,d(t){t&&a(n),o=!1,r()}}}function K(e){let n;function o(t,e){return t[0]?V:U}let r=o(e),c=r(e);return{c(){c.c(),n=h()},m(t,e){c.m(t,e),s(t,n,e)},p(t,[e]){r===(r=o(t))&&c?c.p(t,e):(c.d(1),c=r(t),c&&(c.c(),c.m(n.parentNode,n)))},i:t,o:t,d(t){c.d(t),t&&a(n)}}}function Y(t,e,n){let o;i(t,z,(t=>n(2,o=t)));const r=A();let c;return t.$$.update=()=>{4&t.$$.dirty&&n(0,c=Boolean(o?.default))},[c,()=>r("startGame",{})]}class Z extends B{constructor(t){super(),L(this,t,Y,K,c,{})}}function H(e){let n,o,r;return{c(){n=d("h3"),o=p(e[0]),g(n,"class",r=l(e[0]>e[1]?"":"blinking")+" svelte-14bllve")},m(t,e){s(t,n,e),u(n,o)},p(t,[e]){1&e&&b(o,t[0]),3&e&&r!==(r=l(t[0]>t[1]?"":"blinking")+" svelte-14bllve")&&g(n,"class",r)},i:t,o:t,d(t){t&&a(n)}}}function J(t,e,n){const o=A();let{value:r}=e,{tickMillis:c=1e3}=e,{blinkAt:i=5}=e,{stopAt:l=1}=e;const u=()=>{if(r===l)return o("expire");n(0,r-=1)};let s;return x((()=>(s=setInterval(u,c),()=>clearInterval(s)))),t.$$set=t=>{"value"in t&&n(0,r=t.value),"tickMillis"in t&&n(2,c=t.tickMillis),"blinkAt"in t&&n(1,i=t.blinkAt),"stopAt"in t&&n(3,l=t.stopAt)},[r,i,c,l,t=>{clearInterval(s),n(0,r=t),s=setInterval(u,c)}]}class tt extends B{constructor(t){super(),L(this,t,J,H,c,{value:0,tickMillis:2,blinkAt:1,stopAt:3,reset:4})}get reset(){return this.$$.ctx[4]}}const et=t=>t[Math.floor(Math.random()*t.length)];function nt(t,e,n){const o=t.slice();return o[12]=e[n][0],o[13]=e[n][1].available,o[14]=e[n][1].handler,o[15]=e[n][1].displayName,o}function ot(t,e,n){const o=t.slice();return o[18]=e[n],o}function rt(t){let e,n,o,r,c=t[18]+"";return{c(){e=d("button"),n=p(c)},m(c,i){s(c,e,i),u(e,n),o||(r=$(e,"click",t[6]),o=!0)},p(t,e){8&e&&c!==(c=t[18]+"")&&b(n,c)},d(t){t&&a(e),o=!1,r()}}}function ct(t){let e,n,o,c,i,l,f=t[15]+"";return{c(){e=d("button"),n=p(f),e.disabled=o=!t[13],g(e,"id",c=t[12])},m(o,c){s(o,e,c),u(e,n),i||(l=$(e,"click",(function(){r(t[14])&&t[14].apply(this,arguments)})),i=!0)},p(r,i){t=r,16&i&&f!==(f=t[15]+"")&&b(n,f),16&i&&o!==(o=!t[13])&&(e.disabled=o),16&i&&c!==(c=t[12])&&g(e,"id",c)},d(t){t&&a(e),i=!1,l()}}}function it(t){let e,n,o,r,c,i,l,h,$,y,E,v,x,A,N=t[2].questionText+"",_=t[3],M=[];for(let e=0;e<_.length;e+=1)M[e]=rt(ot(t,_,e));y=new tt({props:{value:15}}),t[9](y),y.$on("expire",t[10]);let I=Object.entries(t[4]),R=[];for(let e=0;e<I.length;e+=1)R[e]=ct(nt(t,I,e));return{c(){e=d("div"),n=d("pre"),o=p("Вопрос #"),r=p(t[0]),c=m(),i=d("pre"),l=p(N),h=m();for(let t=0;t<M.length;t+=1)M[t].c();$=m(),W(y.$$.fragment),E=m(),v=d("hr"),x=m();for(let t=0;t<R.length;t+=1)R[t].c();g(n,"class","svelte-1uua47g"),g(i,"class","svelte-1uua47g")},m(t,a){s(t,e,a),u(e,n),u(n,o),u(n,r),u(e,c),u(e,i),u(i,l),u(e,h);for(let t=0;t<M.length;t+=1)M[t].m(e,null);u(e,$),G(y,e,null),u(e,E),u(e,v),u(e,x);for(let t=0;t<R.length;t+=1)R[t].m(e,null);A=!0},p(t,[n]){if((!A||1&n)&&b(r,t[0]),(!A||4&n)&&N!==(N=t[2].questionText+"")&&b(l,N),72&n){let o;for(_=t[3],o=0;o<_.length;o+=1){const r=ot(t,_,o);M[o]?M[o].p(r,n):(M[o]=rt(r),M[o].c(),M[o].m(e,$))}for(;o<M.length;o+=1)M[o].d(1);M.length=_.length}if(y.$set({}),16&n){let o;for(I=Object.entries(t[4]),o=0;o<I.length;o+=1){const r=nt(t,I,o);R[o]?R[o].p(r,n):(R[o]=ct(r),R[o].c(),R[o].m(e,null))}for(;o<R.length;o+=1)R[o].d(1);R.length=I.length}},i(t){A||(j(y.$$.fragment,t),A=!0)},o(t){q(y.$$.fragment,t),A=!1},d(n){n&&a(e),f(M,n),t[9](null),X(y),f(R,n)}}}function lt(t,e,n){const o=A();let r,c,i,{selectedQuestions:l}=e,u=1;const s={fiftyFifty:{displayName:"50/50",handler(){n(2,c.incorrectOptions=[et(c.incorrectOptions)],c),n(4,s.fiftyFifty.available=!1,s)},available:!0}};var a;!function(t){t[t.WIN=0]="WIN",t[t.INCORRECT_ANSWER=1]="INCORRECT_ANSWER",t[t.TIME_EXPIRED=2]="TIME_EXPIRED"}(a||(a={}));const f=t=>{let e;switch(t){case a.WIN:e={win:!0};break;case a.INCORRECT_ANSWER:case a.TIME_EXPIRED:e={win:!1,failedQuestion:c,questionNumber:u}}o("endGame",e)};return t.$$set=t=>{"selectedQuestions"in t&&n(8,l=t.selectedQuestions)},t.$$.update=()=>{257&t.$$.dirty&&n(2,c=l[u-1]),4&t.$$.dirty&&n(3,i=(t=>{for(let e=t.length-1;e>0;e-=1){const n=Math.floor(Math.random()*(e+1));[t[e],t[n]]=[t[n],t[e]]}return t})([...c.incorrectOptions,c.correctAnswer]))},[u,r,c,i,s,a,t=>c.correctAnswer!==t.target.textContent?f(a.INCORRECT_ANSWER):u===l.length?f(a.WIN):(n(0,u+=1),void r.reset(15)),f,l,function(t){_[t?"unshift":"push"]((()=>{r=t,n(1,r)}))},()=>f(a.TIME_EXPIRED)]}class ut extends B{constructor(t){super(),L(this,t,lt,it,c,{selectedQuestions:8})}}function st(t){let e,n,o,r,c,i,l,f,$,g,y=t[0].questionNumber+"",E=t[0].failedQuestion.questionText+"",v=t[0].failedQuestion.comment&&ft(t);return{c(){e=d("pre"),e.textContent="Поражение...",n=m(),o=d("pre"),r=p("Вы ошиблись на вопросе #"),c=p(y),i=p(': "'),l=p(E),f=p('"'),$=m(),v&&v.c(),g=h()},m(t,a){s(t,e,a),s(t,n,a),s(t,o,a),u(o,r),u(o,c),u(o,i),u(o,l),u(o,f),s(t,$,a),v&&v.m(t,a),s(t,g,a)},p(t,e){1&e&&y!==(y=t[0].questionNumber+"")&&b(c,y),1&e&&E!==(E=t[0].failedQuestion.questionText+"")&&b(l,E),t[0].failedQuestion.comment?v?v.p(t,e):(v=ft(t),v.c(),v.m(g.parentNode,g)):v&&(v.d(1),v=null)},d(t){t&&a(e),t&&a(n),t&&a(o),t&&a($),v&&v.d(t),t&&a(g)}}}function at(e){let n;return{c(){n=d("pre"),n.textContent="Джай, победа!"},m(t,e){s(t,n,e)},p:t,d(t){t&&a(n)}}}function ft(t){let e,n,o,r,c=t[0].failedQuestion.comment+"";return{c(){e=d("pre"),n=p('Комментарий к вопросу: "'),o=p(c),r=p('"')},m(t,c){s(t,e,c),u(e,n),u(e,o),u(e,r)},p(t,e){1&e&&c!==(c=t[0].failedQuestion.comment+"")&&b(o,c)},d(t){t&&a(e)}}}function dt(e){let n;function o(t,e){return t[0].win?at:st}let r=o(e),c=r(e);return{c(){c.c(),n=h()},m(t,e){c.m(t,e),s(t,n,e)},p(t,[e]){r===(r=o(t))&&c?c.p(t,e):(c.d(1),c=r(t),c&&(c.c(),c.m(n.parentNode,n)))},i:t,o:t,d(t){c.d(t),t&&a(n)}}}function pt(t,e,n){let{gameResult:o}=e;A();return t.$$set=t=>{"gameResult"in t&&n(0,o=t.gameResult)},[o]}class mt extends B{constructor(t){super(),L(this,t,pt,dt,c,{gameResult:0})}}const ht=(t,e,n=[])=>{const o=t.sort(((t,e)=>t.difficulty-e.difficulty)).reduce(((t,e)=>(t[n.includes(e.id)?"played":"notPlayed"].push(e),t)),{notPlayed:[],played:[]});let r=$t(o.notPlayed,e);return r.length<e&&(r=r.concat($t(o.played,e-r.length)).sort(((t,e)=>t.difficulty-e.difficulty))),r},$t=(t,e)=>{if(t.length<=e)return t;const n=Math.floor(t.length/e);let o=t.length%e;const r=[];let c=0,i=n;for(;e--;)o-- >0&&(i+=1),r.push(et(t.slice(c,i))),c=i,i+=n;return r},gt="1sbUus9VPcg22SZucx3bzmWsXBERRguiwsh168MgfKVM",bt={difficulty:0,questionText:1,correctAnswer:2,incorrectOptions:[3,4,5],comment:6},yt=Object.values(bt).flat(),Et="ABCDEFGHIJKLMNOPQRSTUVWXYZ",vt=Et[Math.min(...yt)],xt=Et[Math.max(...yt)],At=async(t,e=999)=>{const n=await fetch(((t,e=gt)=>`https://sheets.googleapis.com/v4/spreadsheets/${e}/values/${t}?key=AIzaSyArSjo348Lbj37Njn-o8baYQ_p4CsAQXSA`)(((t,e,n=2)=>`${t}!${vt}${n}:${xt}${n+e}`)(t,e)));return(await n.json()).values.filter((t=>t.length>=Math.max(...yt))).map(((t,e)=>Object.entries(bt).reduce(((e,[n,o])=>(e[n]="number"==typeof o?t[o]:o.map((e=>t[e])),e)),{id:e+1})))};function Nt(e){let n,o;return n=new Z({}),n.$on("startGame",e[3]),{c(){W(n.$$.fragment)},m(t,e){G(n,t,e),o=!0},p:t,i(t){o||(j(n.$$.fragment,t),o=!0)},o(t){q(n.$$.fragment,t),o=!1},d(t){X(n,t)}}}function _t(t){let e,n;return e=new mt({props:{gameResult:t[2]}}),e.$on("playAgain",t[3]),{c(){W(e.$$.fragment)},m(t,o){G(e,t,o),n=!0},p(t,n){const o={};4&n&&(o.gameResult=t[2]),e.$set(o)},i(t){n||(j(e.$$.fragment,t),n=!0)},o(t){q(e.$$.fragment,t),n=!1},d(t){X(e,t)}}}function Mt(t){let e,n;return e=new ut({props:{selectedQuestions:t[1]}}),e.$on("endGame",t[4]),{c(){W(e.$$.fragment)},m(t,o){G(e,t,o),n=!0},p(t,n){const o={};2&n&&(o.selectedQuestions=t[1]),e.$set(o)},i(t){n||(j(e.$$.fragment,t),n=!0)},o(t){q(e.$$.fragment,t),n=!1},d(t){X(e,t)}}}function It(t){let e,n,r,c;const i=[Mt,_t,Nt],l=[];function u(t,e){return"IN-GAME"===t[0]?0:"POST-GAME"===t[0]?1:2}return n=u(t),r=l[n]=i[n](t),{c(){e=d("main"),r.c(),g(e,"class","svelte-1e9puaw")},m(t,o){s(t,e,o),l[n].m(e,null),c=!0},p(t,[c]){let s=n;n=u(t),n===s?l[n].p(t,c):(P={r:0,c:[],p:P},q(l[s],1,1,(()=>{l[s]=null})),P.r||o(P.c),P=P.p,r=l[n],r||(r=l[n]=i[n](t),r.c()),j(r,1),r.m(e,null))},i(t){c||(j(r),c=!0)},o(t){q(r),c=!1},d(t){t&&a(e),l[n].d()}}}function Rt(t,e,n){let o;i(t,z,(t=>n(5,o=t))),x((async()=>{!function(t,e,n=e){t.set(n)}(z,o={default:ht(await At("Бхагавад-гита 1-6"),8,[])},o)}));let r,c,l="MAIN-MENU";return[l,r,c,({detail:t})=>{n(1,r=o.default),n(0,l="IN-GAME")},({detail:t})=>{n(2,c=t),n(0,l="POST-GAME")}]}return new class extends B{constructor(t){super(),L(this,t,Rt,It,c,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map