(this.webpackJsonpmacau=this.webpackJsonpmacau||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(6),l=n.n(c),i=n(4),s=n.n(i),o=n(7),u=n(1),d=(n(15),n(8)),m=function(e){var t="card-selection-grid__card";t+=e.isSelected?" card-selection-grid__card--selected":"",t+=e.isDisabled?" card-selection-grid__card--disabled":"",t+="H"===e.suit||"D"===e.suit?" card-selection-grid__card--red":"";return a.createElement("div",{className:t,onClick:function(){e.onClick&&e.onClick(e.id)}},a.createElement("div",{className:"card-selection-grid__card__suit-and-rank"},e.rank,function(e){switch(e){case"C":return a.createElement(a.Fragment,null,"\u2663");case"H":return a.createElement(a.Fragment,null,"\u2665");case"S":return a.createElement(a.Fragment,null,"\u2660");case"D":return a.createElement(a.Fragment,null,"\u2666")}}(e.suit)),e.isSelected&&a.createElement("div",{className:"card-selection-grid__card__selected-marker"},"\u2714"))},f=function(e){var t="suit-display-card";return t+="H"===e.suit||"D"===e.suit?" suit-display-card--red":"",a.createElement("div",{className:t},function(e){switch(e){case"C":return a.createElement(a.Fragment,null,"\u2663");case"H":return a.createElement(a.Fragment,null,"\u2665");case"S":return a.createElement(a.Fragment,null,"\u2660");case"D":return a.createElement(a.Fragment,null,"\u2666")}}(e.suit))},v=["C","D","H","S"],E=1,p={C:[],H:[],S:[],D:[]},g={};["2","3","4","5","6","7","8","9","10","J","Q","K","A"].forEach((function(e){return v.forEach((function(t){g[E]={suit:t,rank:e},p[t].push({id:E,rank:e}),E++}))}));var h=g,k=p,y=function(e){var t=a.useState([]),n=Object(u.a)(t,2),r=n[0],c=n[1],l=function(e){var t;r.includes(e)?(t=r.filter((function(t){return t!==e})),c(t)):r.length<14&&(t=[].concat(Object(d.a)(r),[e]),c(t))};return a.createElement(a.Fragment,null,a.createElement("div",{className:"card-selection-grid"},Object.keys(k).map((function(e){return a.createElement("div",{key:e,className:"card-selecton-grid__suit"},a.createElement("div",null,a.createElement(f,{suit:e}),k[e].slice(0,6).map((function(t){return a.createElement(m,{key:t.id,suit:e,id:t.id,rank:t.rank,isSelected:r.includes(t.id),isDisabled:!r.includes(t.id)&&14===r.length,onClick:l})}))),a.createElement("div",null,k[e].slice(6,13).map((function(t){return a.createElement(m,{key:t.id,id:t.id,suit:e,rank:t.rank,isSelected:r.includes(t.id),isDisabled:!r.includes(t.id)&&14===r.length,onClick:l})}))))})),e.fetchInProgress&&a.createElement("span",{className:"loading-screen"})),a.createElement("div",{className:"control-panel"},a.createElement("button",{disabled:0===r.length||e.fetchInProgress,onClick:function(){c([])}},"Clear"),a.createElement("button",{disabled:13!==r.length&&14!==r.length||e.fetchInProgress,onClick:function(){e.solve(r)}},"Solve")),e.fetchInProgress&&a.createElement("div",{className:"control-panel"},a.createElement("div",{className:"loader"})," \xa0",a.createElement("div",{style:{fontSize:"23px",fontWeight:"bold",color:"#666"}},"Solving")))},_=function(e){return e.map((function(e){var t=h[e];return a.createElement(m,{key:e,suit:t.suit,id:e,rank:t.rank,isSelected:!1,isDisabled:!1})}))},b=function(e){return a.createElement("div",{className:"solution-display"},a.createElement("div",{className:"solution-display__score"},"Score: ",e.solution.score),a.createElement("div",{className:"solution-display__pyramid"},a.createElement("div",null,_(e.solution.pyramid[2])),a.createElement("div",null,_(e.solution.pyramid[1])),a.createElement("div",null,_(e.solution.pyramid[0]))))};var S=function(){var e=r.a.useState(null),t=Object(u.a)(e,2),n=t[0],a=t[1],c=r.a.useState(null),l=Object(u.a)(c,2),i=l[0],d=l[1],m=r.a.useState(!1),f=Object(u.a)(m,2),v=f[0],E=f[1],p=function(){var e=Object(o.a)(s.a.mark((function e(t){var n,r,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={cards:t},e.prev=1,E(!0),e.next=5,fetch("https://fantasysolver.herokuapp.com/",{method:"POST",headers:new Headers({"content-type":"application/json"}),body:JSON.stringify(n)});case 5:return r=e.sent,e.next=8,r.json();case 8:c=e.sent,a(c),E(!1),d(null),e.next=19;break;case 14:e.prev=14,e.t0=e.catch(1),console.error(e.t0),d(e.t0.toString()),E(!1);case 19:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"app-container"},r.a.createElement(y,{solve:p,fetchInProgress:v}),n&&r.a.createElement(b,{solution:n}),i&&r.a.createElement("div",{className:"error-container"},i,". Please see console for full details."))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,n){e.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.fc615b80.chunk.js.map