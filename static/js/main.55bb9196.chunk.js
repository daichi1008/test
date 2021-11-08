(this["webpackJsonphooks-snake-game"]=this["webpackJsonphooks-snake-game"]||[]).push([[0],{17:function(t,e,n){},24:function(t,e,n){"use strict";n.r(e);var c=n(2),i=n.n(c),a=n(12),s=n.n(a),r=(n(17),n(11)),o=n(3),u=n(0),l=function(t){var e=t.length,n=t.difficulty,c=void 0===n?3:n,i=t.onChangeDifficulty,a=c<5?"":"is-hidden",s=c>1?"":"is-hidden";return Object(u.jsxs)("div",{className:"navigation",children:[Object(u.jsxs)("div",{className:"navigation-item",children:[Object(u.jsx)("span",{className:"navigation-label",children:"Length:"}),Object(u.jsx)("div",{className:"navigation-item-number-cotainer",children:Object(u.jsx)("div",{className:"num-board",children:e})})]}),Object(u.jsxs)("div",{className:"navigation-item",children:[Object(u.jsx)("span",{className:"navigation-lable",children:"Difficulty:"}),Object(u.jsxs)("div",{className:"navigation-item-number-container",children:[Object(u.jsx)("span",{className:"num-board",children:c}),Object(u.jsxs)("div",{className:"difficulty-button-container",children:[Object(u.jsx)("div",{className:"difficulty-button difficulty-up".concat(a),onClick:function(){return i(c+1)}}),Object(u.jsx)("div",{className:"difficulty-button difficulty-down".concat(s),onClick:function(){return i(c-1)}})]})]})]})]})},b=function(t){var e=t.fields;return Object(u.jsx)("div",{className:"field",children:e.map((function(t){return t.map((function(t){return Object(u.jsx)("div",{className:"dots ".concat(t)})}))}))})},j=function(t){var e=t.status,n=t.onStart,c=t.onStop,i=t.onRestart;return Object(u.jsxs)("div",{className:"button",children:["gameover"===e&&Object(u.jsx)("button",{className:"btn btn-gameover",onClick:i,children:"gameover"}),"init"===e&&Object(u.jsx)("button",{className:"btn btn-init",onClick:n,children:"start"}),"suspended"===e&&Object(u.jsx)("button",{className:"btn btn-suspended",onClick:n,children:"start"}),"playing"===e&&Object(u.jsx)("button",{className:"btn btn-playing",onClick:c,children:"stop"})]})},d=n(5),f=n(7),h=function(t){var e=t.onChange;return Object(u.jsxs)("div",{className:"manipulation-panel",children:[Object(u.jsx)("button",{className:"manipulation-btn btn btn-left",onClick:function(){return e("left")},children:Object(u.jsx)(d.a,{icon:f.b})}),Object(u.jsxs)("div",{children:[Object(u.jsx)("button",{className:"manipulation-btn btn btn-up",onClick:function(){return e("up")},children:Object(u.jsx)(d.a,{icon:f.d})}),Object(u.jsx)("button",{className:"manipulation-btn btn btn-down",onClick:function(){return e("down")},children:Object(u.jsx)(d.a,{icon:f.a})})]}),Object(u.jsx)("button",{className:"manipulation-btn btn btn-rifht",onClick:function(){return e("right")},children:Object(u.jsx)(d.a,{icon:f.c})})]})},O=function(t,e){for(var n=function(){var n=Math.floor(Math.random()*(t-1-1))+1,c=Math.floor(Math.random()*(t-1-1))+1;if(!e.some((function(t){return t.x===n&&t.y===c})))return{v:{x:n,y:c}}};;){var c=n();if("object"===typeof c)return c.v}},m=function(t,e){for(var n=[],c=0;c<t;c++){var i=new Array(t).fill("");n.push(i)}n[e.y][e.x]="snake";var a=O(t,[e]);return n[a.y][a.x]="food",n},v={x:17,y:17},x=m(35,v),p=[1e3,500,100,50,10],g=Object.freeze({init:"init",playing:"playing",suspended:"suspended",gameover:"gameover"}),y=Object.freeze({up:"up",right:"right",left:"left",down:"down"}),N=Object.freeze({37:y.left,38:y.up,39:y.right,40:y.down}),k=Object.freeze({up:"down",right:"left",left:"right",down:"up"}),C=Object.freeze({up:{x:0,y:-1},right:{x:1,y:0},left:{x:-1,y:0},down:{x:0,y:1}}),w=void 0,S=function(){w&&clearInterval(w)};var E=function(){var t=Object(c.useState)(x),e=Object(o.a)(t,2),n=e[0],i=e[1],a=Object(c.useState)([]),s=Object(o.a)(a,2),d=s[0],f=s[1],E=Object(c.useState)(g.init),z=Object(o.a)(E,2),I=z[0],L=z[1],M=Object(c.useState)(y.up),D=Object(o.a)(M,2),F=D[0],A=D[1],B=Object(c.useState)(3),J=Object(o.a)(B,2),P=J[0],R=J[1],T=Object(c.useState)(0),G=Object(o.a)(T,2),q=G[0],H=G[1];Object(c.useEffect)((function(){return f([v]),w=setInterval((function(){H((function(t){return t+1}))}),p[P-1]),S}),[P]),Object(c.useEffect)((function(){0!==d.length&&I===g.playing&&(U()||(S(),L(g.gameover)))}),[q]);var K=Object(c.useCallback)((function(t){if(I!==g.playing)return F;k[F]!==t&&A(t)}),[F,I]),Q=Object(c.useCallback)((function(t){I===g.init&&(t<1||t>t.length||R(t))}),[I,P]);Object(c.useEffect)((function(){var t=function(t){var e=N[t.keyCode];e&&K(e)};return document.addEventListener("keydown",t),function(){return document.removeEventListener("keydown",t)}}),[K]);var U=function(){var t,e,c=d[0],a=c.x,s=c.y,o=C[F],u={x:a+o.x,y:s+o.y};if(t=n.length,(e=u).y<0||e.x<0||e.y>t-1||e.x>t-1||function(t,e){return"snake"===t[e.y][e.x]}(n,u))return S(),!1;var l=Object(r.a)(d);if("food"!==n[u.y][u.x]){var b=l.pop();n[b.y][b.x]=""}else{var j=O(n.length,[].concat(Object(r.a)(l),[u]));n[j.y][j.x]="food"}return n[u.y][u.x]="snake",l.unshift(u),f(l),i(n),!0};return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsxs)("header",{className:"header",children:[Object(u.jsx)("div",{className:"title-container",children:Object(u.jsx)("h1",{className:"title",children:"Snake Game"})}),Object(u.jsx)(l,{length:d.length,difficulty:P,onChangeDifficulty:Q})]}),Object(u.jsx)("main",{className:"main",children:Object(u.jsx)(b,{fields:n})}),Object(u.jsxs)("footer",{className:"footer",children:[Object(u.jsx)(j,{status:I,onStop:function(){return L(g.suspended)},onStart:function(){return L(g.playing)},onRestart:function(){w=setInterval((function(){H((function(t){return t+1}))}),100),A(y.up),L(g.init),f([v]),i(m(35,v))}}),Object(u.jsx)(h,{onChange:K})]})]})},z=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,25)).then((function(e){var n=e.getCLS,c=e.getFID,i=e.getFCP,a=e.getLCP,s=e.getTTFB;n(t),c(t),i(t),a(t),s(t)}))};s.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(E,{})}),document.getElementById("root")),z()}},[[24,1,2]]]);
//# sourceMappingURL=main.55bb9196.chunk.js.map