(this["webpackJsonpck-state-app"]=this["webpackJsonpck-state-app"]||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var o=n(1),c=n.n(o),s=n(7),a=n.n(s),i=(n(12),n(2)),r=n(3),h=n(5),u=n(4),l=(n(13),n(0)),j=function(t){Object(h.a)(n,t);var e=Object(u.a)(n);function n(){var t;return Object(i.a)(this,n),(t=e.call(this)).Increment=function(){t.setState({count:t.state.count+1})},t.Decrement=function(){t.setState({count:t.state.count-1})},t.state={count:0},console.log("constructor"),t}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var t=this,e=setInterval((function(){t.setState({count:t.state.count+1})}),1e3);console.log("componentDidMount",e)}},{key:"componentDidUpdate",value:function(){console.log("componentDidUpdate")}},{key:"componentWillUnmount",value:function(){this.state.count<10&&clearInterval(this.interval)}},{key:"render",value:function(){var t=this;return Object(l.jsxs)("div",{children:[Object(l.jsx)("button",{onClick:function(){return t.Increment()},children:"+"}),"COUNT:  ",this.state.count,Object(l.jsx)("button",{onClick:function(){return t.Decrement()},children:"-"})]})}}]),n}(c.a.Component),d=function(t){Object(h.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(i.a)(this,n);for(var o=arguments.length,c=new Array(o),s=0;s<o;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={fullName:"GoMyCode CheckPoint",bio:"My name is Bouyahi zakaria . I am web development student at GoMyCode",imgSrc:"https://www.mojomedia.pro/wp-content/uploads/1_9npnpvh7inj64koq7ecw5a.jpeg",profession:"Stand Out program scholarship holder ",show:!1},t.handleShow=function(){t.setState({show:!t.state.show})},t}return Object(r.a)(n,[{key:"render",value:function(){return Object(l.jsxs)("div",{className:"App",children:[this.state.show?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h1",{children:this.state.fullName}),Object(l.jsx)("h1",{children:this.state.bio}),Object(l.jsx)("img",{src:this.state.imgSrc,alt:"failed"}),Object(l.jsx)("h1",{children:this.state.profession})]}):Object(l.jsx)("h1",{children:"Show the profile"}),Object(l.jsx)("button",{onClick:this.handleShow,children:this.state.show?"hide":"show"}),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h1",{children:"Show the count"}),Object(l.jsx)(j,{})]})]})}}]),n}(c.a.Component),p=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(e){var n=e.getCLS,o=e.getFID,c=e.getFCP,s=e.getLCP,a=e.getTTFB;n(t),o(t),c(t),s(t),a(t)}))};a.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(d,{})}),document.getElementById("root")),p()}},[[15,1,2]]]);
//# sourceMappingURL=main.e3bcda6e.chunk.js.map