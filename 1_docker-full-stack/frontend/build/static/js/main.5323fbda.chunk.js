(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{16:function(e,t,n){e.exports=n(42)},21:function(e,t,n){},23:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},24:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),c=n(14),r=n.n(c),i=(n(21),n(3)),u=n.n(i),l=n(15),s=n(4),d=(n(23),n(24),n(2)),m=n.n(d),h=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).BACKEND_URI||"http://127.0.0.1:3000/todo",f=function(e){var t=e._id,n=e.content,o=e.done,c=(e.timestamp,e.handleDone),r=e.handleDelete;return a.a.createElement("div",{className:"todo-item-container"},a.a.createElement("label",{htmlFor:t,className:"todo-item-label"},a.a.createElement("input",{type:"checkbox",onChange:c,id:t,checked:o}),n),a.a.createElement("button",{onClick:r,id:t},"Delete"))};var p=function(){var e=Object(o.useState)(""),t=Object(s.a)(e,2),n=t[0],c=t[1],r=Object(o.useState)([]),i=Object(s.a)(r,2),d=i[0],p=i[1],g=function(){var e=Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("http://127.0.0.1:3000/todo").then((function(e){p(e.data)})).catch((function(e){return console.log(e.message)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(o.useEffect)((function(){g()}),[]);var v=function(e){e.target.id&&m.a.put("".concat(h,"/").concat(e.target.id),{done:e.target.checked}).then((function(){return g()})).then().catch((function(e){return console.error(e.message)}))},E=function(e){e.target.id&&m.a.delete("".concat(h,"/").concat(e.target.id)).then((function(){return g()})).then().catch((function(e){return console.error(e.message)}))};return a.a.createElement("div",{className:"App"},a.a.createElement("h1",null,"My First Todo-App Ever"),a.a.createElement("div",{className:"todo-container"},a.a.createElement("form",{action:"submit",method:"post",onSubmit:function(e){e.preventDefault(),null!==n&&0!==n.trim().length?(m.a.post(h,{content:n}).then((function(e){return c(""),g()})).then((function(){console.log("refreshed")})).catch((function(e){return console.error(e)})),g()):alert("Input field cannot be empty")}},a.a.createElement("input",{type:"text",name:"todo",value:n,placeholder:"to do",onChange:function(e){c(e.target.value)}}),a.a.createElement("input",{type:"submit",value:"add"})),d.map((function(e){return a.a.createElement(f,Object.assign({key:e._id},e,{handleDone:v,handleDelete:E}))}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[16,1,2]]]);
//# sourceMappingURL=main.5323fbda.chunk.js.map