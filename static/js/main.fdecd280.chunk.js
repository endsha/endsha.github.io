(this["webpackJsonppersonal-website"]=this["webpackJsonppersonal-website"]||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(21)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(7),c=a.n(i),l=(a(13),a(1)),o=a(2),s=a(3),m=a(4),u=(a(14),function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).scroll=function(e,t){var a=document.querySelector(e).getBoundingClientRect().top,n=window.pageYOffset,r=a,i=null;console.log(r);Math.abs(r)>20&&window.requestAnimationFrame((function e(a){i||(i=a);var c,l,o,s=a-i,m=(c=s,l=n,o=r,(c/=t/2)<1?o/2*Math.pow(2,10*(c-1))+l:(c--,o/2*(2-Math.pow(2,-10*c))+l));window.scrollTo(0,m),s<t&&window.requestAnimationFrame(e)}))},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("nav",{className:"navbar navbar-expand-sm header"},r.a.createElement("div",{className:"container"},r.a.createElement("a",{className:"navbar-brand headerItem",onClick:function(){return e.scroll("#greetingSection",1200)}},"ALVIN"),r.a.createElement("ul",{className:"navbar-nav col-sm-7 offset-sm-5 nav-list"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("span",{className:"nav-link headerItem",onClick:function(){return e.scroll("#aboutSection",1200)}},"About")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("span",{className:"nav-link headerItem"},"My Projects")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("span",{className:"nav-link headerItem"},"Skills")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("span",{className:"nav-link headerItem"},"My Blogs")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("span",{className:"nav-link headerItem"},"Contact")))))}}]),a}(n.Component)),p=(a(15),function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={greeting:["JavaScript","ReactJS","React Native","NodeJS"],selected:0},e.intervalFunc=function(){var t=e.state,a=t.greeting,n=t.selected;2===e.timer?(e.timer=1,n<a.length-1?e.setState((function(e){return{selected:e.selected+1}})):e.setState({selected:0})):e.timer+=1},e.componentDidMount=function(){e.timer=1,e.typingTimer=setInterval(e.intervalFunc,1e3)},e.componentWillUnmount=function(){clearInterval(e.typingTimer)},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.state,t=e.greeting,a=e.selected;return r.a.createElement("div",{className:"container greeting"},r.a.createElement("div",{className:"titleContainer"},r.a.createElement("span",{className:"helloTitle"},"HELLO!"),r.a.createElement("span",{className:"greetingTitle"},"I AM",r.a.createElement("span",{className:"d-flex justify-content-center"},"{",t.map((function(e,t){return t===a&&r.a.createElement("p",{key:t,className:"typingText",style:{animation:"typing 2s steps(".concat(e.length,") infinite")}},e)})),"}"),"DEVELOPER",r.a.createElement("span",{className:"sloganTitle"},"INTERACTION IS STRENGTH"))))}}]),a}(n.Component)),d=a(5),v=a.n(d),f=(a(18),function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).PropTypes={text:v.a.string,style:v.a.object},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props,t=e.text,a=e.style;return r.a.createElement("span",{className:"btn",style:a},t)}}]),a}(n.Component)),E=(a(19),function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"about"},r.a.createElement("div",{className:"container profileContainer"},r.a.createElement("span",{className:"profilePicture"}),r.a.createElement("div",{className:"infoContainer"},r.a.createElement("h1",{className:"aboutTitle"},"About Me"),r.a.createElement("span",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidiei dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exeracita aation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."),r.a.createElement("span",null,"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam."),r.a.createElement("div",{className:"buttonContainer"},r.a.createElement(f,{text:"HIRE ME"}),r.a.createElement(f,{text:"DOWNLOAD CV",style:{marginLeft:"3vw"}})))))}}]),a}(n.Component)),b=(a(20),function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("section",{id:"greetingSection",className:"greetingSection"},r.a.createElement(u,null),r.a.createElement(p,null)),r.a.createElement("section",{id:"aboutSection"},r.a.createElement(E,null)),r.a.createElement("section",{id:"section2",style:{backgroundColor:"blue",height:"100vh"}}))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.fdecd280.chunk.js.map