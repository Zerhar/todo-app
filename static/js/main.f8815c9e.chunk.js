(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,n){e.exports=n(19)},18:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(7),o=n.n(r),c=(n(18),n(1)),s=n(2),l=n(6),u=n(4),d=n(5),m=n(3),p=n(11),f=n(8),h=n.n(f),b=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).delete=function(e){n.props.delete(e)},n.createTasks=function(e){return i.a.createElement("li",{onClick:function(){return n.delete(e.key)},key:e.key},e.text)},n.createTasks=n.createTasks.bind(Object(m.a)(n)),n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.entries.map(this.createTasks);return i.a.createElement("ul",{className:h.a.theList},i.a.createElement(p.a,{enterAnimation:"fade",leaveAnimation:"fade"},e))}}]),t}(a.Component),v=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).addItem=function(e){var t=n.state.list;""!==n._inputElement.value&&(t.unshift({text:n._inputElement.value,key:Date.now()}),n.setState({list:t}),n._inputElement.value="",e.preventDefault())},n.deleteItem=function(e){var t=n.state.list.filter(function(t){return t.key!==e});n.setState({list:t})},n.state={list:[]},n.addItem=n.addItem.bind(Object(m.a)(n)),n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:h.a.todoListMain},i.a.createElement("div",{className:h.a.header},i.a.createElement("form",{onSubmit:this.addItem},i.a.createElement("input",{ref:function(t){return e._inputElement=t},placeholder:"enter task"}),i.a.createElement("button",{type:"submit"},"Add"))),i.a.createElement("div",null,i.a.createElement(b,{entries:this.state.list,delete:this.deleteItem})))}}]),t}(a.Component),E=n(9),_=n.n(E),k=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:_.a.App},i.a.createElement("div",{className:_.a.container},i.a.createElement(v,null)))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,n){e.exports={todoListMain:"TodoList_todoListMain__2iyfB",header:"TodoList_header__3pYxK",theList:"TodoList_theList__2YYdd"}},9:function(e,t,n){e.exports={App:"App_App__3a3f9",container:"App_container__2ZD97"}}},[[12,1,2]]]);
//# sourceMappingURL=main.f8815c9e.chunk.js.map