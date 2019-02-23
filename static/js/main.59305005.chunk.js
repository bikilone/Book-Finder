(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(46)},16:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){},19:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(4),i=n.n(o),c=(n(16),n(1)),s=n(5),l=n(8),u=n(6),m=n(9);n(17);function h(e){var t=e.inputText,n=e.onInputChange,r=e.onSubmit,o=e.clearInput,i=e.onClick;return a.a.createElement("div",null,a.a.createElement("h1",null,"Book | Finder"),a.a.createElement("form",{action:"",onSubmit:r},a.a.createElement("input",{className:"input",type:"text",placeholder:"Search by book or author...",onChange:n,value:t}),a.a.createElement("span",{onClick:o},"X"),a.a.createElement("button",{onClick:i,className:"search-button",type:"submit"},"Search")))}n(18);function p(e){var t=e.card,n=t.title,r=t.author,o=t.publisher,i=t.link,c=t.image;return a.a.createElement("div",{className:"card"},a.a.createElement("img",{src:c,alt:""}),a.a.createElement("div",{className:"card-right"},a.a.createElement("h1",null,n),a.a.createElement("p",null,"By: ",r),a.a.createElement("p",null,"Puublished By: ",o),a.a.createElement("a",{href:i},a.a.createElement("button",{className:"button"},"See this Book"))))}n(19);function d(e){return a.a.createElement("div",{className:"card-list"},e.cards.map(function(e,t){return a.a.createElement(p,{card:e,key:t})}))}var g=function e(t){Object(c.a)(this,e),this.title=t.title.length>110?t.title.slice(0,110):t.title,this.author=t.authors?t.authors:"Unknown author",this.publisher=t.publisher?t.publisher:"Unknown publisher",this.image=t.imageLinks?t.imageLinks.thumbnail:"https://image.freepik.com/free-vector/books-stack-realistic_1284-4735.jpg",this.link=t.previewLink},f=n(7),w=n.n(f);n(43);function v(e){switch(e.error){case"empty input":return a.a.createElement("div",{className:"error"},"You must enter something in input");case"empty response":return a.a.createElement("div",{className:"error"},"There is no such book");case"something went wrong":return a.a.createElement("div",{className:"error"},"Something went wrong");default:return""}}n(44);function b(){return a.a.createElement("div",{className:"landing"},"Nothing yet :D")}n(45);var E=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).onInputChange=function(t){e.setState({input:t.target.value})},e.onSubmit=function(t){t.preventDefault();e.setState({loading:!0,error:!1,errorType:""}),0===e.state.input.length?e.setState({error:!0,errorType:"empty input"}):fetch("".concat("https://www.googleapis.com/books/v1/volumes?q="+e.state.input,"&key=").concat("AIzaSyAOaVBnu7fgtzZVvuSjWw9MaGmDE3P73sA","&maxResults=40&orderBy=relevance")).then(function(e){if(e.ok)return e.json();throw new v("Something went wrong")}).then(function(t){var n=[];0===t.totalItems?e.setState({error:!0,errorType:"empty response"}):(e.setState({error:!1,errorType:""}),t.items.forEach(function(e,t){n.push(new g(e.volumeInfo))})),e.setState({cards:n,loading:!1})}).catch(function(t){e.setState({error:!0,errorType:"something went wrong"})})},e.onClick=function(){e.setState({error:!1,errorType:""})},e.clearInput=function(){e.setState({input:""})},e.state={input:"",cards:[],loading:!1,error:!1,errorType:""},e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement(h,{clearInput:this.clearInput,inputText:this.state.input,onInputChange:this.onInputChange,onSubmit:this.onSubmit,onClick:this.onClick}),this.state.error?a.a.createElement(v,{error:this.state.errorType}):this.state.loading?a.a.createElement(w.a,{type:"Circles",color:"green",height:200,width:200,className:"loader"}):this.state.cards.length>0?a.a.createElement(d,{cards:this.state.cards,loading:this.state.loading}):a.a.createElement(b,null))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,1,2]]]);
//# sourceMappingURL=main.59305005.chunk.js.map