(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{262:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(271);t.default=function(){return r.a.createElement(o.a,null,r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},267:function(e,t,n){"use strict";var a=n(2);t.__esModule=!0,t.withPrefix=f,t.navigateTo=t.replace=t.push=t.navigate=t.default=void 0;var r=a(n(127)),o=a(n(9)),i=a(n(10)),s=a(n(52)),u=a(n(12)),l=a(n(1)),d=a(n(0)),p=n(31),c=n(269);function f(e){return function(e){return e.replace(/\/+/g,"/")}("/"+e)}var h={activeClassName:l.default.string,activeStyle:l.default.object},v=function(e){function t(t){var n;n=e.call(this,t)||this,(0,u.default)((0,s.default)((0,s.default)(n)),"defaultGetProps",function(e){return e.isCurrent?{className:[n.props.className,n.props.activeClassName].filter(Boolean).join(" "),style:(0,o.default)({},n.props.style,n.props.activeStyle)}:null});var a=!1;return"undefined"!=typeof window&&window.IntersectionObserver&&(a=!0),n.state={IOSupported:a},n.handleRef=n.handleRef.bind((0,s.default)((0,s.default)(n))),n}(0,i.default)(t,e);var n=t.prototype;return n.componentDidUpdate=function(e,t){this.props.to===e.to||this.state.IOSupported||___loader.enqueue((0,c.parsePath)(this.props.to).pathname)},n.componentDidMount=function(){this.state.IOSupported||___loader.enqueue((0,c.parsePath)(this.props.to).pathname)},n.handleRef=function(e){var t,n,a,r=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&(t=e,n=function(){___loader.enqueue((0,c.parsePath)(r.props.to).pathname)},(a=new window.IntersectionObserver(function(e){e.forEach(function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(t),a.disconnect(),n())})})).observe(t))},n.render=function(){var e=this,t=this.props,n=t.to,a=t.getProps,i=void 0===a?this.defaultGetProps:a,s=t.onClick,u=t.onMouseEnter,l=(t.activeClassName,t.activeStyle,t.innerRef,t.state),h=t.replace,v=(0,r.default)(t,["to","getProps","onClick","onMouseEnter","activeClassName","activeStyle","innerRef","state","replace"]);var w=f(n);return d.default.createElement(p.Link,(0,o.default)({to:w,state:l,getProps:i,innerRef:this.handleRef,onMouseEnter:function(e){u&&u(e),___loader.hovering((0,c.parsePath)(n).pathname)},onClick:function(t){return s&&s(t),0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||(t.preventDefault(),m(n,{state:l,replace:h})),!0}},v))},t}(d.default.Component);v.propTypes=(0,o.default)({},h,{innerRef:l.default.func,onClick:l.default.func,to:l.default.string.isRequired,replace:l.default.bool});var w=d.default.forwardRef(function(e,t){return d.default.createElement(v,(0,o.default)({innerRef:t},e))});t.default=w;var m=function(e,t){window.___navigate(f(e),t)};t.navigate=m;var _=function(e){console.warn('The "push" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___push(f(e))};t.push=_;t.replace=function(e){console.warn('The "replace" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___replace(f(e))};t.navigateTo=function(e){return console.warn('The "navigateTo" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),_(e)}}}]);
//# sourceMappingURL=component---src-pages-404-js-b0a7e7ab7abef70331c3.js.map