(self.webpackChunkMailPoet3=self.webpackChunkMailPoet3||[]).push([[370],{4877:function(e,t,r){"use strict";r.r(t),r.d(t,{useDispatch:function(){return o.Z},useSelect:function(){return n.Z}});var n=r(21241),o=r(89013)},71928:function(e,t,r){"use strict";r.r(t),r.d(t,{Listing:function(){return n.N}});var n=r(18490)},18222:function(e,t,r){var n=r(71928),o=r(51868);void 0===o.MailPoetLib&&(o.MailPoetLib={}),void 0===o.MailPoetLib.Listing&&(o.MailPoetLib.Listing=n),e.exports=n},64037:function(e,t,r){var n=r(4877),o=r(51868);void 0===o.MailPoetLib&&(o.MailPoetLib={}),o.MailPoetLib.WordPressData=n,e.exports=n},46428:function(e,t,r){var n=r(53782),o=r(51868);void 0===o.MailPoetLib&&(o.MailPoetLib={}),void 0===o.MailPoetLib.ReactRouter&&(o.MailPoetLib.ReactRouter=n),e.exports=n},9674:function(e,t,r){"use strict";function n(e){return e&&"object"==typeof e&&"default"in e?e.default:e}Object.defineProperty(t,"__esModule",{value:!0});var o=r(42676),i=n(r(25061)),u=r(40133);r(39519),r(68040);var a=n(r(34986));function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function f(e,t){e.prototype=Object.create(t.prototype),l(e.prototype.constructor=e,t)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],0<=t.indexOf(r)||(o[r]=e[r]);return o}var p=function(e){function t(){for(var t,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(t=e.call.apply(e,[this].concat(n))||this).history=u.createBrowserHistory(t.props),t}return f(t,e),t.prototype.render=function(){return i.createElement(o.Router,{history:this.history,children:this.props.children})},t}(i.Component),y=function(e){function t(){for(var t,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(t=e.call.apply(e,[this].concat(n))||this).history=u.createHashHistory(t.props),t}return f(t,e),t.prototype.render=function(){return i.createElement(o.Router,{history:this.history,children:this.props.children})},t}(i.Component),h=function(e,t){return"function"==typeof e?e(t):e},v=function(e,t){return"string"==typeof e?u.createLocation(e,null,null,t):e},b=function(e){return e},d=i.forwardRef;void 0===d&&(d=b);var m=d((function(e,t){var r=e.innerRef,n=e.navigate,o=e.onClick,u=s(e,["innerRef","navigate","onClick"]),a=u.target,f=c({},u,{onClick:function(e){try{o&&o(e)}catch(t){throw e.preventDefault(),t}e.defaultPrevented||0!==e.button||a&&"_self"!==a||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)||(e.preventDefault(),n())}});return f.ref=b!==d&&t||r,i.createElement("a",f)})),P=d((function(e,t){var r=e.component,n=void 0===r?m:r,f=e.replace,l=e.to,p=e.innerRef,y=s(e,["component","replace","to","innerRef"]);return i.createElement(o.__RouterContext.Consumer,null,(function(e){e||a(!1);var r=e.history,o=v(h(l,e.location),e.location),s=o?r.createHref(o):"",m=c({},y,{href:s,navigate:function(){var t=h(l,e.location),n=u.createPath(e.location)===u.createPath(v(t));(f||n?r.replace:r.push)(t)}});return b!==d?m.ref=t||p:m.innerRef=p,i.createElement(n,m)}))})),R=function(e){return e},g=i.forwardRef;void 0===g&&(g=R);var O=g((function(e,t){var r=e["aria-current"],n=void 0===r?"page":r,u=e.activeClassName,f=void 0===u?"active":u,l=e.activeStyle,p=e.className,y=e.exact,b=e.isActive,d=e.location,m=e.sensitive,O=e.strict,j=e.style,L=e.to,M=e.innerRef,w=s(e,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return i.createElement(o.__RouterContext.Consumer,null,(function(e){e||a(!1);var r=d||e.location,u=v(h(L,r),r),s=u.pathname,C=s&&s.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),x=C?o.matchPath(r.pathname,{path:C,exact:y,sensitive:m,strict:O}):null,_=!!(b?b(x,r):x),k="function"==typeof p?p(_):p,E="function"==typeof j?j(_):j;_&&(k=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.filter((function(e){return e})).join(" ")}(k,f),E=c({},E,l));var H=c({"aria-current":_&&n||null,className:k,style:E,to:u},w);return R!==g?H.ref=t||M:H.innerRef=M,i.createElement(P,H)}))}));Object.defineProperty(t,"MemoryRouter",{enumerable:!0,get:function(){return o.MemoryRouter}}),Object.defineProperty(t,"Prompt",{enumerable:!0,get:function(){return o.Prompt}}),Object.defineProperty(t,"Redirect",{enumerable:!0,get:function(){return o.Redirect}}),Object.defineProperty(t,"Route",{enumerable:!0,get:function(){return o.Route}}),Object.defineProperty(t,"Router",{enumerable:!0,get:function(){return o.Router}}),Object.defineProperty(t,"StaticRouter",{enumerable:!0,get:function(){return o.StaticRouter}}),Object.defineProperty(t,"Switch",{enumerable:!0,get:function(){return o.Switch}}),Object.defineProperty(t,"generatePath",{enumerable:!0,get:function(){return o.generatePath}}),Object.defineProperty(t,"matchPath",{enumerable:!0,get:function(){return o.matchPath}}),Object.defineProperty(t,"useHistory",{enumerable:!0,get:function(){return o.useHistory}}),Object.defineProperty(t,"useLocation",{enumerable:!0,get:function(){return o.useLocation}}),Object.defineProperty(t,"useParams",{enumerable:!0,get:function(){return o.useParams}}),Object.defineProperty(t,"useRouteMatch",{enumerable:!0,get:function(){return o.useRouteMatch}}),Object.defineProperty(t,"withRouter",{enumerable:!0,get:function(){return o.withRouter}}),t.BrowserRouter=p,t.HashRouter=y,t.Link=P,t.NavLink=O},53782:function(e,t,r){"use strict";e.exports=r(9674)},68040:function(e,t,r){"use strict";r.r(t),t.default=function(e,t){}},65311:function(e){"use strict";e.exports=jQuery}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[351],(function(){return t(25061),t(33571),t(46428),t(20490),t(39519),t(4286),t(61888),t(78272),t(18222),t(33926),t(78557),t(71463),t(76879),t(64037),t(52018)})),e.O()}]);