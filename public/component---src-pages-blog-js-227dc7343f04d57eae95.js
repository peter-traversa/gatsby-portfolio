(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{265:function(e,t,a){"use strict";a.r(t);var n=a(10),l=a.n(n),r=a(0),o=a.n(r),c=(a(279),a(129),a(130),a(82)),s=a(281),i=a.n(s),u=a(285),m=a.n(u),g=a(287),b=a.n(g);var d=Object(c.withStyles)({card:{width:"auto",height:"auto",textAlign:"center"},cardButton:{align:"center"}})(function(e){var t=e.classes;return o.a.createElement(i.a,{className:t.card},o.a.createElement(m.a,null,o.a.createElement("h4",null,e.blog.title),e.blog.thumbnail.includes("referrerSource")?null:o.a.createElement("img",{src:e.blog.thumbnail,alt:"Blog Thumbnail",width:"100%"}),o.a.createElement("h6",null,"Published","  ",e.blog.pubDate),o.a.createElement(b.a,{variant:"contained",href:e.blog.link,target:"_blank",rel:"noopener noreferrer",className:t.button},"Medium Link")))}),h=a(271),p=a(275),f=function(e){function t(){var t;return(t=e.call(this)||this).state={blogs:[]},t}l()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this;fetch("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@peter.traversa").then(function(e){return e.json()}).then(function(t){return e.setState({blogs:t.items})})},a.render=function(){return o.a.createElement(h.a,null,o.a.createElement(p.Helmet,{title:"Peter Traversa's Blog Page"}),o.a.createElement("div",{className:"blog-page-background"},o.a.createElement("div",{id:"blog-title"},o.a.createElement("h1",null,"Recent Blogs")),o.a.createElement("div",{id:"blog-page",className:"grid-wrapper"},this.state.blogs?this.state.blogs.map(function(e,t){return o.a.createElement("div",{className:"col-3 blog-card",key:t},o.a.createElement(d,{key:t,blog:e}))}):o.a.createElement("h1",null,"Cannot display recent blogs"))))},t}(o.a.Component);t.default=f}}]);
//# sourceMappingURL=component---src-pages-blog-js-227dc7343f04d57eae95.js.map