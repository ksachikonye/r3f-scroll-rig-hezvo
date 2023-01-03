!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("zustand"),require("react"),require("@react-three/fiber"),require("debounce"),require("@studio-freight/lenis"),require("react-intersection-observer"),require("vecn")):"function"==typeof define&&define.amd?define(["exports","zustand","react","@react-three/fiber","debounce","@studio-freight/lenis","react-intersection-observer","vecn"],t):t((e||self).r3FScrollRig={},e.zustand,e.react,e["@react-three/fiber"],e.debounce,e["@studio-freight/lenis"],e.reactIntersectionObserver,e.vecn)}(this,function(e,t,n,r,o,i,l,u){function c(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var a=/*#__PURE__*/c(t),s=/*#__PURE__*/c(n),f=/*#__PURE__*/c(o),d=/*#__PURE__*/c(i),v=/*#__PURE__*/c(u);function h(){return h=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},h.apply(this,arguments)}function p(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t.indexOf(n=i[r])>=0||(o[n]=e[n]);return o}function w(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==typeof t?t:String(t)}var g=a.default(function(e){return{debug:!1,scaleMultiplier:1,globalRender:!0,globalPriority:1e3,globalAutoClear:!1,globalClearDepth:!0,globalRenderQueue:!1,clearGlobalRenderQueue:function(){return e(function(){return{globalRenderQueue:!1}})},isCanvasAvailable:!0,hasSmoothScrollbar:!1,canvasChildren:{},renderToCanvas:function(t,n,r){return void 0===r&&(r={}),e(function(e){var o,i=e.canvasChildren;return Object.getOwnPropertyDescriptor(i,t)?(i[t].instances+=1,i[t].props.inactive=!1,{canvasChildren:i}):{canvasChildren:h({},i,((o={})[t]={mesh:n,props:r,instances:1},o))}})},updateCanvas:function(t,n){return e(function(e){var r,o=e.canvasChildren;if(o[t]){var i=o[t],l=i.instances;return{canvasChildren:h({},o,((r={})[t]={mesh:i.mesh,props:h({},i.props,n),instances:l},r))}}})},removeFromCanvas:function(t,n){return void 0===n&&(n=!0),e(function(e){var r,o=e.canvasChildren;return(null==(r=o[t])?void 0:r.instances)>1?(o[t].instances-=1,{canvasChildren:o}):n?{canvasChildren:p(o,[t].map(w))}:(o[t].instances=0,o[t].props.inactive=!0,{canvasChildren:h({},o)})})},pageReflow:0,requestReflow:function(){e(function(e){return{pageReflow:e.pageReflow+1}})},scroll:{y:0,x:0,limit:0,velocity:0,progress:0,direction:0,scrollDirection:void 0},scrollTo:function(e){return window.scrollTo(0,e)},onScroll:function(){return function(){}}}}),b=function(){return{enabled:g(function(e){return e.hasSmoothScrollbar}),scroll:g(function(e){return e.scroll}),scrollTo:g(function(e){return e.scrollTo}),onScroll:g(function(e){return e.onScroll})}},m="undefined"!=typeof window?n.useLayoutEffect:n.useEffect,y=["children","duration","easing","smooth","direction","config"],S=function(e){return 1===e?1:1-Math.pow(2,-10*e)},R=n.forwardRef(function(e,t){var r=e.children,o=e.duration,i=void 0===o?1:o,l=e.easing,u=void 0===l?S:l,c=e.smooth,a=void 0===c||c,s=e.direction,f=void 0===s?"vertical":s,v=e.config,w=p(e,y),g=n.useRef();return n.useImperativeHandle(t,function(){return{start:function(){var e;return null==(e=g.current)?void 0:e.start()},stop:function(){var e;return null==(e=g.current)?void 0:e.stop()},on:function(e,t){var n;return null==(n=g.current)?void 0:n.on(e,t)},once:function(e,t){var n;return null==(n=g.current)?void 0:n.once(e,t)},off:function(e,t){var n;return null==(n=g.current)?void 0:n.off(e,t)},notify:function(){var e;return null==(e=g.current)?void 0:e.notify()},scrollTo:function(e,t){var n;return null==(n=g.current)?void 0:n.scrollTo(e,t)},raf:function(e){var t;return null==(t=g.current)?void 0:t.raf(e)},__lenis:g.current}}),n.useEffect(function(){var e=g.current=new d.default(h({duration:i,easing:u,smooth:a,direction:f},v));return function(){e.destroy()}},[i,u,a,f]),r&&r(w)}),C=n.forwardRef(function(e,t){var o=e.children,i=e.enabled,l=void 0===i||i,u=e.locked,c=void 0!==u&&u,a=e.scrollRestoration,d=void 0===a?"auto":a,v=e.disablePointerOnScroll,p=void 0===v||v,w=e.horizontal,b=void 0!==w&&w,y=e.scrollInContainer,S=void 0!==y&&y,C=e.updateGlobalState,E=void 0===C||C,T=e.onScroll,x=e.config,j=n.useRef(),I=n.useRef(),L=n.useRef(!1),O=g(function(e){return e.scroll});n.useImperativeHandle(t,function(){return{scrollTo:function(e,t){var n;return null==(n=I.current)?void 0:n.scrollTo(e,t)},__lenis:I.current}});var z=function(e){p&&j.current&&L.current!==e&&(L.current=e,j.current.style.pointerEvents=e?"none":"auto")},V=n.useCallback(function(){z(!1)},[]),M=n.useCallback(function(e){var t;return null==(t=I.current)||t.on("scroll",e),function(){var t;return null==(t=I.current)?void 0:t.off("scroll",e)}},[]);m(function(){"scrollRestoration"in window.history&&(window.history.scrollRestoration=d)},[]),n.useEffect(function(){var e,t,n,o=r.addEffect(function(e){var t;return null==(t=I.current)?void 0:t.raf(e)});null==(e=I.current)||e.on("scroll",function(e){var t=e.scroll,n=e.limit,o=e.velocity,i=e.direction,l=e.progress;E&&(O.y=b?0:t,O.x=b?t:0,O.limit=n,O.velocity=o,O.direction=i,O.progress=l);var u=f.default.debounce(function(){return z(!0)},100,!0);Math.abs(o)>1.4?u():z(!1),T&&T({scroll:t,limit:n,velocity:o,direction:i,progress:l}),r.invalidate()}),null==(t=I.current)||t.notify(),E&&(O.scrollDirection=b?"horizontal":"vertical",g.setState({scrollTo:null==(n=I.current)?void 0:n.scrollTo}),g.setState({onScroll:M}),g.getState().scroll.y=window.scrollY,g.getState().scroll.x=window.scrollX),document.documentElement.classList.toggle("js-smooth-scrollbar-enabled",l),document.documentElement.classList.toggle("js-smooth-scrollbar-disabled",!l),g.setState({hasSmoothScrollbar:l});var i=function(){return r.invalidate()};return window.addEventListener("pointermove",V),window.addEventListener("wheel",i),function(){var e;null==(e=I.current)||e.off("scroll"),o(),window.removeEventListener("pointermove",V),window.removeEventListener("wheel",i)}},[l]),n.useEffect(function(){var e,t;c?null==(e=I.current)||e.stop():null==(t=I.current)||t.start()},[c]);var q=n.useMemo(function(){if("undefined"==typeof document)return{};var e=document.documentElement,t=document.body,n=document.body.firstElementChild;return e.classList.toggle("ScrollRig-scrollHtml",S),t.classList.toggle("ScrollRig-scrollWrapper",S),{wrapper:t,content:n}},[S]);return s.default.createElement(R,{ref:I,smooth:l,direction:b?"horizontal":"vertical",config:h(S?{smoothTouch:!0,wrapper:q.wrapper,content:q.content}:{},x)},function(e){return o(h({},e,{ref:j}))})}),E="undefined"!=typeof window;function T(e,t,n,r,o){return r+(e-t)*(o-r)/(n-t)}e.SmoothScrollbar=C,e.useScrollbar=b,e.useTracker=function(e,t){var r=function(e){var t={}.debounce,r=void 0===t?0:t,o=n.useState({width:E?window.innerWidth:Infinity,height:E?window.innerHeight:Infinity}),i=o[0],l=o[1];return n.useEffect(function(){var e=document.getElementById("ScrollRig-canvas");function t(){var t=e?e.clientWidth:window.innerWidth,n=e?e.clientHeight:window.innerHeight;t===i.width&&n===i.height||l({width:t,height:n})}var n,o=f.default.debounce(t,r);return e?(n=new ResizeObserver(o)).observe(e):window.addEventListener("resize",o),t(),function(){var e;window.removeEventListener("resize",o),null==(e=n)||e.disconnect()}},[]),i}(),o=b(),i=o.scroll,u=o.onScroll,c=g(function(e){return e.scaleMultiplier}),a=g(function(e){return e.pageReflow}),s=n.useMemo(function(){var e={rootMargin:"0%",threshold:0,autoUpdate:!0},n=t||{};return Object.keys(n).map(function(t,r){void 0!==n[t]&&(e[t]=n[t])}),e},[t]),d=s.autoUpdate,p=s.wrapper,w=l.useInView({rootMargin:s.rootMargin,threshold:s.threshold}),y=w.ref,S=w.inView;m(function(){y(e.current)},[e]);var R=n.useState(),C=R[0],x=R[1],j=n.useRef({inViewport:!1,progress:-1,visibility:-1,viewport:-1}).current,I=n.useRef({top:0,bottom:0,left:0,right:0,width:0,height:0,x:0,y:0}).current,L=n.useState(I),O=L[0],z=L[1],V=n.useRef({top:0,bottom:0,left:0,right:0,width:0,height:0,x:0,y:0,positiveYUpBottom:0}).current,M=n.useRef(v.default.vec3(0,0,0)).current;m(function(){var t,n=null==(t=e.current)?void 0:t.getBoundingClientRect();if(n){var r=p?p.scrollTop:window.scrollY,o=p?p.scrollLeft:window.scrollX;I.top=n.top+r,I.bottom=n.bottom+r,I.left=n.left+o,I.right=n.right+o,I.width=n.width,I.height=n.height,I.x=I.left+.5*n.width,I.y=I.top+.5*n.height,z(h({},I)),x(v.default.vec3((null==I?void 0:I.width)*c,(null==I?void 0:I.height)*c,1))}},[e,r,a,c]);var q=n.useCallback(function(t){var n=void 0===t?{}:t,o=n.onlyUpdateInViewport,l=n.scroll,u=void 0===l?i:l;if(e.current&&(void 0!==o&&!o||j.inViewport)){!function(e,t,n,r){e.top=t.top-n.y,e.bottom=t.bottom-n.y,e.left=t.left-n.x,e.right=t.right-n.x,e.width=t.width,e.height=t.height,e.x=e.left+.5*t.width-.5*r.width,e.y=e.top+.5*t.height-.5*r.height,e.positiveYUpBottom=r.height-e.bottom}(V,I,u,r),function(e,t,n){e.x=t.x*n,e.y=-1*t.y*n}(M,V,c);var a="horizontal"===u.scrollDirection,s=a?"width":"height",f=r[s]-V[a?"left":"top"];j.progress=T(f,0,r[s]+V[s],0,1),j.visibility=T(f,0,V[s],0,1),j.viewport=T(f,0,r[s],0,1)}},[e,r,c,i]);return m(function(){j.inViewport=S,q({onlyUpdateInViewport:!1})},[S]),m(function(){q({onlyUpdateInViewport:!1})},[q]),n.useEffect(function(){if(d)return u(function(e){return q()})},[d,q,u]),{rect:O,bounds:V,scale:C,position:M,scrollState:j,inViewport:S,update:function(e){return q(h({onlyUpdateInViewport:!1},e))}}}});
//# sourceMappingURL=scrollbar.umd.js.map
