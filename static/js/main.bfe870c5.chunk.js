(this["webpackJsonppwa-poc"]=this["webpackJsonppwa-poc"]||[]).push([[0],{51:function(e,t,n){e.exports=n(67)},56:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(17),o=n.n(c),s=(n(56),n(19)),l=(n(57),n(6)),i=n(5),u=n.n(i),m=n(10),p=n(14),d=n(69),f=n(70),h=n(71);var b,v=n(50);function E(){return(E=Object(m.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(v.a)("pwa-poc-db",1,{upgrade:function(e){e.createObjectStore("posts"),e.createObjectStore("delete-post"),e.createObjectStore("new-post")}});case 2:b=e.sent;case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(){return(y=Object(m.a)(u.a.mark((function e(t,n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b;case 2:return e.abrupt("return",e.sent.put("new-post",n,t));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(){return(g=Object(m.a)(u.a.mark((function e(t,n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b;case 2:return e.abrupt("return",e.sent.put("delete-post",n,t));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(){return(j=Object(m.a)(u.a.mark((function e(t,n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b;case 2:return e.abrupt("return",e.sent.put("posts",n,t));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(e){return O.apply(this,arguments)}function O(){return(O=Object(m.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b;case 2:return e.abrupt("return",e.sent.get("posts",t));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(){return(k=Object(m.a)(u.a.mark((function e(t,n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b;case 2:return e.abrupt("return",e.sent.put("posts",n,t));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(e){return N.apply(this,arguments)}function N(){return(N=Object(m.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b;case 2:return e.abrupt("return",e.sent.get("posts",t));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var S=Object(l.g)((function(e){var t=Object(l.f)(),n=Object(a.useState)([]),c=Object(p.a)(n,2),o=c[0],s=c[1];return Object(a.useEffect)((function(){var e;t&&(e=t.id,fetch("https://jsonplaceholder.typicode.com/posts/".concat(e,"/comments")).then((function(e){return e.json()})).then((function(e){return e}))).then((function(e){s(e),function(e,t){k.apply(this,arguments)}("comment",e)})).catch(Object(m.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x("comment");case 2:t=e.sent,s(t);case 4:case"end":return e.stop()}}),e)}))))}),[]),r.a.createElement("div",null,r.a.createElement("div",{className:"d-flex justify-content-end p-3"},r.a.createElement(d.a,{variant:"secondary",onClick:function(){return e.history.goBack()}},"Back")),r.a.createElement(f.a,{fluid:!0},r.a.createElement(h.a,null,r.a.createElement("h1",{className:"mb-3"},"Post comments:",t.id),o.map((function(e){return r.a.createElement("div",{className:"mt-2 mb-2 text-left bg-white rounded p-3",key:e.id},r.a.createElement("h3",null,e.name),r.a.createElement("h6",null,e.email),r.a.createElement("p",null,e.body))})))))})),C=n(49),B=n(26),L=n(18),I=n(77),P=n(72),H=n(76),T=n(73),W=n(74),A=n(75);var _=function(e){var t=e.onchangeHandler,n=e.form,a=e.addPostBtnHandler,c=e.showLoader,o=e.backToListBtnHandler;return r.a.createElement("div",{className:"form-container"},r.a.createElement(A.a,{className:"w-100 d-flex flex-wrap"},r.a.createElement(A.a.Group,{controlId:"formBasicTitle",className:"w-100 justify-content-start"},r.a.createElement(A.a.Label,null,"Title"),r.a.createElement(A.a.Control,{onChange:t,type:"email",value:n.title,name:"title",placeholder:"Enter title"})),r.a.createElement(A.a.Group,{controlId:"formBasicBody",className:"w-100 justify-content-start"},r.a.createElement(A.a.Label,null,"Body"),r.a.createElement(A.a.Control,{onChange:t,type:"text",value:n.body,name:"body",placeholder:"body"})),r.a.createElement(A.a.Group,{controlId:"formBasicUserId",className:"w-100 justify-content-start"},r.a.createElement(A.a.Label,null,"User Id"),r.a.createElement(A.a.Control,{onChange:t,type:"number",placeholder:"User id",value:n.userId,name:"userId"}),r.a.createElement(A.a.Text,{className:"text-muted"},"We'll never share your user id with anyone else.")),r.a.createElement("div",{className:"d-flex justify-content-between align-item-end"},r.a.createElement(d.a,{variant:"primary",type:"button",onClick:a,disabled:c},"Post"),r.a.createElement(d.a,{className:"ml-2",variant:"secondary",type:"default",onClick:o},"Back"))),c&&r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Posting post"),r.a.createElement(P.a,{animation:"grow"})))},F=n(78);var D=Object(l.g)((function(e){var t=e.postList,n=e.deleteBtnHandler,a=e.history;return r.a.createElement(F.a,{className:"w-75 d-inline-flex"},r.a.createElement(F.a.Item,null,"Your Posts\xa0",r.a.createElement("b",null,t.length)),t&&t.map((function(e){return r.a.createElement(r.a.Fragment,{key:e.id},r.a.createElement(F.a.Item,{variant:"info",className:"d-flex justify-content-center align-items-center flex-wrap"},r.a.createElement("p",{className:"mr-2"},e.id),e.body,r.a.createElement("div",null,r.a.createElement(d.a,{variant:"outline-danger m-2 m-2",onClick:function(){return n(e.id)}},"Delete"),r.a.createElement(d.a,{variant:"outline-info m-2 m-2",onClick:function(){return a.push("post/".concat(e.id,"/comments"))}},"Comments"))))})))}));var J=function(){var e=Object(a.useState)([]),t=Object(p.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(!1),s=Object(p.a)(o,2),l=s[0],i=s[1],f=Object(a.useState)(!1),b=Object(p.a)(f,2),v=b[0],E=b[1],O=Object(a.useState)({title:"vivek",body:"rajoriya",userId:777}),k=Object(p.a)(O,2),x=k[0],N=k[1],S=Object(a.useState)(!1),A=Object(p.a)(S,2),F=A[0],J=A[1],G=Object(a.useState)("about"),K=Object(p.a)(G,2),R=K[0],U=K[1];Object(a.useEffect)((function(){"list"===R&&Y()}),[R]);var Y=function(){fetch("https://jsonplaceholder.typicode.com/posts").then((function(e){return e.json()})).then((function(e){return e})).then((function(e){E(!1);var t=e.slice(0,20);c(t),function(e,t){j.apply(this,arguments)}("posts",e)})).catch(Object(m.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w("posts");case 2:t=e.sent,E(!0),c(t);case 5:case"end":return e.stop()}}),e)}))))};return r.a.createElement("div",null,v&&r.a.createElement(I.a,{key:"warn-id",variant:"warning"},"Your are under offline mode!"),r.a.createElement("div",{className:"d-flex justify-content-center align-items-center p-3"},F&&!l?r.a.createElement("span",null,r.a.createElement("span",{className:"pr-2"},"Deleting post..."),r.a.createElement(P.a,{animation:"grow"})):r.a.createElement("div",null),r.a.createElement("h1",{className:"mt-4 mb-4"},"React-Pwa-Poc",r.a.createElement("div",{style:{fontSize:14}},"Hope, You liked it"))),r.a.createElement(h.a,{fluid:!0},r.a.createElement(H.a,{id:"controlled-tab-example",activeKey:R,onSelect:function(e){return U(e)}},r.a.createElement(T.a,{eventKey:"about",title:"About"},r.a.createElement("p",{className:"w-75 m-auto pt-3 pb-4 text-center"},"A progressive web application is a type of application software delivered through the web, built using common web technologies including HTML, CSS and JavaScript. It is intended to work on any platform that uses a standards-compliant browser, including both desktop and mobile devices"),r.a.createElement(W.a,{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Progressive_Web_Apps_Logo.svg/400px-Progressive_Web_Apps_Logo.svg.png",fluid:!0})),r.a.createElement(T.a,{eventKey:"list",title:"list",className:"d-flex justify-content-around align-items-start mt-3 mb-2 flex-wrap"},l?r.a.createElement(_,{addPostBtnHandler:function(){var e;J(!0),navigator.onLine?(e=x,fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){return e}))).then((function(e){var t=Object(C.a)(n);t.unshift(e),c(t),J(!1),i(!1)})):(!function(e,t){y.apply(this,arguments)}("adding-postItem",x),navigator.serviceWorker.ready.then((function(e){e.sync.register("add-post")})),J(!1),i(!1))},onchangeHandler:function(e){var t=e.target,n=t.name,a=t.value;N((function(e){return Object(L.a)(Object(L.a)({},e),{},Object(B.a)({},n,a))}))},form:x,showLoader:F,backToListBtnHandler:function(){J(!1),Y(),i(!l)}}):n&&0!==n.length?r.a.createElement(r.a.Fragment,null,r.a.createElement(D,{postList:n,deleteBtnHandler:function(e){J(!0),navigator.onLine?function(e){return fetch("https://jsonplaceholder.typicode.com/posts/".concat(e),{method:"DELETE"})}(e).then((function(){var t=n.filter((function(t){return t.id!==e}));c(t),J(!1)})):(!function(e,t){g.apply(this,arguments)}("postId",e),navigator.serviceWorker.ready.then((function(e){e.sync.register("delete-post")})))}}),r.a.createElement(d.a,{className:"mt-3",variant:"success",onClick:function(){return i(!l)}},"Add post")):r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Fetching posts..."),r.a.createElement(P.a,{animation:"grow"}))))))};var G=function(){return r.a.createElement(s.a,null,r.a.createElement(l.c,null,r.a.createElement(l.a,{path:"/",exact:!0,strict:!0},r.a.createElement(J,null)),r.a.createElement(l.a,{path:"/post/:id/comments"},r.a.createElement(S,null))))};n(66);var K=function(){return Object(a.useEffect)((function(){!function(){E.apply(this,arguments)}()}),[]),r.a.createElement(s.b,{basename:"/"},r.a.createElement("div",{className:"App"},r.a.createElement(G,null),r.a.createElement("footer",null,r.a.createElement("u",null,r.a.createElement("b",null,"Developed by Vivek Rajoriya, 2020")))))};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(K,null)),document.getElementById("root")),function(){if("serviceWorker"in navigator){var e="".concat("/REACT-PWA-POC","/sw.js");navigator.serviceWorker.register(e).then((function(e){console.log(e,"service worker is registered")}))}else console.log("serviceWorked not supported")}()}},[[51,1,2]]]);
//# sourceMappingURL=main.bfe870c5.chunk.js.map