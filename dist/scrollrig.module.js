import{jsxs as e,Fragment as r,jsx as t}from"react/jsx-runtime";import{useThree as n,invalidate as o,useFrame as i,Canvas as a,createPortal as c,useLoader as u,addEffect as l}from"@react-three/fiber";import{ResizeObserver as s}from"@juggle/resize-observer";import{parse as f}from"query-string";import p,{useLayoutEffect as d,useEffect as v,forwardRef as m,useMemo as y,useRef as g,Fragment as b,cloneElement as w,useState as S,useCallback as O,useImperativeHandle as C}from"react";import R from"zustand";import E from"react-merge-refs";import{Vector2 as x,Color as T,Scene as P,MathUtils as j,DefaultLoadingManager as I,TextureLoader as M,ImageBitmapLoader as k,Texture as _,CanvasTexture as A}from"three";import{useInView as $}from"react-intersection-observer";import{useWindowSize as V}from"react-use";import{vec3 as D}from"vecn";import{suspend as L}from"suspend-react";import N from"supports-webp";import F from"fast-deep-equal";import{debounce as U}from"debounce";import z from"@studio-freight/lenis";function q(){return q=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},q.apply(this,arguments)}function Y(e,r){return Y=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,r){return e.__proto__=r,e},Y(e,r)}function W(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r.indexOf(t=i[n])>=0||(o[t]=e[t]);return o}function Q(e){var r=function(e,r){if("object"!=typeof e||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,"string");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==typeof r?r:String(r)}var B="undefined"!=typeof window?d:v,G={PRIORITY_PRELOAD:0,PRIORITY_SCISSORS:1,PRIORITY_VIEWPORTS:1,PRIORITY_GLOBAL:1e3,DEFAULT_SCALE_MULTIPLIER:1,preloadQueue:[]},H=R(function(e){return{debug:!1,scaleMultiplier:G.DEFAULT_SCALE_MULTIPLIER,globalRender:!0,globalPriority:G.PRIORITY_GLOBAL,globalAutoClear:!1,globalClearDepth:!0,globalRenderQueue:!1,clearGlobalRenderQueue:function(){return e(function(){return{globalRenderQueue:!1}})},isCanvasAvailable:!0,hasSmoothScrollbar:!1,canvasChildren:{},renderToCanvas:function(r,t,n){return void 0===n&&(n={}),e(function(e){var o,i=e.canvasChildren;return Object.getOwnPropertyDescriptor(i,r)?(i[r].instances+=1,i[r].props.inactive=!1,{canvasChildren:i}):{canvasChildren:q({},i,((o={})[r]={mesh:t,props:n,instances:1},o))}})},updateCanvas:function(r,t){return e(function(e){var n,o=e.canvasChildren;if(o[r]){var i=o[r],a=i.instances;return{canvasChildren:q({},o,((n={})[r]={mesh:i.mesh,props:q({},i.props,t),instances:a},n))}}})},removeFromCanvas:function(r,t){return void 0===t&&(t=!0),e(function(e){var n,o=e.canvasChildren;return(null==(n=o[r])?void 0:n.instances)>1?(o[r].instances-=1,{canvasChildren:o}):t?{canvasChildren:W(o,[r].map(Q))}:(o[r].instances=0,o[r].props.inactive=!0,{canvasChildren:q({},o)})})},pageReflow:0,requestReflow:function(){e(function(e){return{pageReflow:e.pageReflow+1}})},scroll:{y:0,x:0,limit:0,velocity:0,progress:0,direction:""},scrollTo:function(e){return window.scrollTo(0,e)},onScroll:function(){return function(){}}}}),X=function(){var e=H(function(e){return e.requestReflow});return v(function(){"fonts"in document&&document.fonts.ready.then(function(){var r,t;r=e,t={}.timeout,"requestIdleCallback"in window?window.requestIdleCallback(r,{timeout:void 0===t?100:t}):setTimeout(r,0)})},[]),null};function J(e){var r={exports:{}};return e(r,r.exports),r.exports}var K="function"==typeof Symbol&&Symbol.for,Z=K?Symbol.for("react.element"):60103,ee=K?Symbol.for("react.portal"):60106,re=K?Symbol.for("react.fragment"):60107,te=K?Symbol.for("react.strict_mode"):60108,ne=K?Symbol.for("react.profiler"):60114,oe=K?Symbol.for("react.provider"):60109,ie=K?Symbol.for("react.context"):60110,ae=K?Symbol.for("react.async_mode"):60111,ce=K?Symbol.for("react.concurrent_mode"):60111,ue=K?Symbol.for("react.forward_ref"):60112,le=K?Symbol.for("react.suspense"):60113,se=K?Symbol.for("react.suspense_list"):60120,fe=K?Symbol.for("react.memo"):60115,pe=K?Symbol.for("react.lazy"):60116,de=K?Symbol.for("react.block"):60121,ve=K?Symbol.for("react.fundamental"):60117,he=K?Symbol.for("react.responder"):60118,me=K?Symbol.for("react.scope"):60119;function ye(e){if("object"==typeof e&&null!==e){var r=e.$$typeof;switch(r){case Z:switch(e=e.type){case ae:case ce:case re:case ne:case te:case le:return e;default:switch(e=e&&e.$$typeof){case ie:case ue:case pe:case fe:case oe:return e;default:return r}}case ee:return r}}}function ge(e){return ye(e)===ce}var be={AsyncMode:ae,ConcurrentMode:ce,ContextConsumer:ie,ContextProvider:oe,Element:Z,ForwardRef:ue,Fragment:re,Lazy:pe,Memo:fe,Portal:ee,Profiler:ne,StrictMode:te,Suspense:le,isAsyncMode:function(e){return ge(e)||ye(e)===ae},isConcurrentMode:ge,isContextConsumer:function(e){return ye(e)===ie},isContextProvider:function(e){return ye(e)===oe},isElement:function(e){return"object"==typeof e&&null!==e&&e.$$typeof===Z},isForwardRef:function(e){return ye(e)===ue},isFragment:function(e){return ye(e)===re},isLazy:function(e){return ye(e)===pe},isMemo:function(e){return ye(e)===fe},isPortal:function(e){return ye(e)===ee},isProfiler:function(e){return ye(e)===ne},isStrictMode:function(e){return ye(e)===te},isSuspense:function(e){return ye(e)===le},isValidElementType:function(e){return"string"==typeof e||"function"==typeof e||e===re||e===ce||e===ne||e===te||e===le||e===se||"object"==typeof e&&null!==e&&(e.$$typeof===pe||e.$$typeof===fe||e.$$typeof===oe||e.$$typeof===ie||e.$$typeof===ue||e.$$typeof===ve||e.$$typeof===he||e.$$typeof===me||e.$$typeof===de)},typeOf:ye},we=J(function(e,r){"production"!==process.env.NODE_ENV&&function(){var e="function"==typeof Symbol&&Symbol.for,t=e?Symbol.for("react.element"):60103,n=e?Symbol.for("react.portal"):60106,o=e?Symbol.for("react.fragment"):60107,i=e?Symbol.for("react.strict_mode"):60108,a=e?Symbol.for("react.profiler"):60114,c=e?Symbol.for("react.provider"):60109,u=e?Symbol.for("react.context"):60110,l=e?Symbol.for("react.async_mode"):60111,s=e?Symbol.for("react.concurrent_mode"):60111,f=e?Symbol.for("react.forward_ref"):60112,p=e?Symbol.for("react.suspense"):60113,d=e?Symbol.for("react.suspense_list"):60120,v=e?Symbol.for("react.memo"):60115,h=e?Symbol.for("react.lazy"):60116,m=e?Symbol.for("react.block"):60121,y=e?Symbol.for("react.fundamental"):60117,g=e?Symbol.for("react.responder"):60118,b=e?Symbol.for("react.scope"):60119;function w(e){if("object"==typeof e&&null!==e){var r=e.$$typeof;switch(r){case t:var d=e.type;switch(d){case l:case s:case o:case a:case i:case p:return d;default:var m=d&&d.$$typeof;switch(m){case u:case f:case h:case v:case c:return m;default:return r}}case n:return r}}}var S=s,O=u,C=c,R=t,E=f,x=o,T=h,P=v,j=n,I=a,M=i,k=p,_=!1;function A(e){return w(e)===s}r.AsyncMode=l,r.ConcurrentMode=S,r.ContextConsumer=O,r.ContextProvider=C,r.Element=R,r.ForwardRef=E,r.Fragment=x,r.Lazy=T,r.Memo=P,r.Portal=j,r.Profiler=I,r.StrictMode=M,r.Suspense=k,r.isAsyncMode=function(e){return _||(_=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),A(e)||w(e)===l},r.isConcurrentMode=A,r.isContextConsumer=function(e){return w(e)===u},r.isContextProvider=function(e){return w(e)===c},r.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===t},r.isForwardRef=function(e){return w(e)===f},r.isFragment=function(e){return w(e)===o},r.isLazy=function(e){return w(e)===h},r.isMemo=function(e){return w(e)===v},r.isPortal=function(e){return w(e)===n},r.isProfiler=function(e){return w(e)===a},r.isStrictMode=function(e){return w(e)===i},r.isSuspense=function(e){return w(e)===p},r.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===o||e===s||e===a||e===i||e===p||e===d||"object"==typeof e&&null!==e&&(e.$$typeof===h||e.$$typeof===v||e.$$typeof===c||e.$$typeof===u||e.$$typeof===f||e.$$typeof===y||e.$$typeof===g||e.$$typeof===b||e.$$typeof===m)},r.typeOf=w}()}),Se=J(function(e){e.exports="production"===process.env.NODE_ENV?be:we}),Oe=Object.getOwnPropertySymbols,Ce=Object.prototype.hasOwnProperty,Re=Object.prototype.propertyIsEnumerable;function Ee(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}var xe=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;var n=Object.getOwnPropertyNames(r).map(function(e){return r[e]});if("0123456789"!==n.join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(e){o[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(e){return!1}}()?Object.assign:function(e,r){for(var t,n,o=Ee(e),i=1;i<arguments.length;i++){for(var a in t=Object(arguments[i]))Ce.call(t,a)&&(o[a]=t[a]);if(Oe){n=Oe(t);for(var c=0;c<n.length;c++)Re.call(t,n[c])&&(o[n[c]]=t[n[c]])}}return o},Te=Function.call.bind(Object.prototype.hasOwnProperty),Pe="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",je=Te,Ie=function(){};if("production"!==process.env.NODE_ENV){var Me=Pe,ke={},_e=je;Ie=function(e){var r="Warning: "+e;"undefined"!=typeof console&&console.error(r);try{throw new Error(r)}catch(e){}}}function Ae(e,r,t,n,o){if("production"!==process.env.NODE_ENV)for(var i in e)if(_e(e,i)){var a;try{if("function"!=typeof e[i]){var c=Error((n||"React class")+": "+t+" type `"+i+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[i]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw c.name="Invariant Violation",c}a=e[i](r,i,n,t,null,Me)}catch(e){a=e}if(!a||a instanceof Error||Ie((n||"React class")+": type specification of "+t+" `"+i+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof a+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),a instanceof Error&&!(a.message in ke)){ke[a.message]=!0;var u=o?o():"";Ie("Failed "+t+" type: "+a.message+(null!=u?u:""))}}}Ae.resetWarningCache=function(){"production"!==process.env.NODE_ENV&&(ke={})};var $e=Ae,Ve=function(){};function De(){return null}function Le(){}function Ne(){}"production"!==process.env.NODE_ENV&&(Ve=function(e){var r="Warning: "+e;"undefined"!=typeof console&&console.error(r);try{throw new Error(r)}catch(e){}}),Ne.resetWarningCache=Le;var Fe=J(function(e){e.exports="production"!==process.env.NODE_ENV?function(e,r){var t="function"==typeof Symbol&&Symbol.iterator,n="<<anonymous>>",o={array:u("array"),bigint:u("bigint"),bool:u("boolean"),func:u("function"),number:u("number"),object:u("object"),string:u("string"),symbol:u("symbol"),any:c(De),arrayOf:function(e){return c(function(r,t,n,o,i){if("function"!=typeof e)return new a("Property `"+i+"` of component `"+n+"` has invalid PropType notation inside arrayOf.");var c=r[t];if(!Array.isArray(c))return new a("Invalid "+o+" `"+i+"` of type `"+f(c)+"` supplied to `"+n+"`, expected an array.");for(var u=0;u<c.length;u++){var l=e(c,u,n,o,i+"["+u+"]",Pe);if(l instanceof Error)return l}return null})},element:c(function(r,t,n,o,i){var c=r[t];return e(c)?null:new a("Invalid "+o+" `"+i+"` of type `"+f(c)+"` supplied to `"+n+"`, expected a single ReactElement.")}),elementType:c(function(e,r,t,n,o){var i=e[r];return Se.isValidElementType(i)?null:new a("Invalid "+n+" `"+o+"` of type `"+f(i)+"` supplied to `"+t+"`, expected a single ReactElement type.")}),instanceOf:function(e){return c(function(r,t,o,i,c){return r[t]instanceof e?null:new a("Invalid "+i+" `"+c+"` of type `"+((u=r[t]).constructor&&u.constructor.name?u.constructor.name:n)+"` supplied to `"+o+"`, expected instance of `"+(e.name||n)+"`.");var u})},node:c(function(e,r,t,n,o){return s(e[r])?null:new a("Invalid "+n+" `"+o+"` supplied to `"+t+"`, expected a ReactNode.")}),objectOf:function(e){return c(function(r,t,n,o,i){if("function"!=typeof e)return new a("Property `"+i+"` of component `"+n+"` has invalid PropType notation inside objectOf.");var c=r[t],u=f(c);if("object"!==u)return new a("Invalid "+o+" `"+i+"` of type `"+u+"` supplied to `"+n+"`, expected an object.");for(var l in c)if(je(c,l)){var s=e(c,l,n,o,i+"."+l,Pe);if(s instanceof Error)return s}return null})},oneOf:function(e){if(!Array.isArray(e))return"production"!==process.env.NODE_ENV&&Ve(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),De;function r(r,t,n,o,c){for(var u=r[t],l=0;l<e.length;l++)if(i(u,e[l]))return null;var s=JSON.stringify(e,function(e,r){return"symbol"===p(r)?String(r):r});return new a("Invalid "+o+" `"+c+"` of value `"+String(u)+"` supplied to `"+n+"`, expected one of "+s+".")}return c(r)},oneOfType:function(e){if(!Array.isArray(e))return"production"!==process.env.NODE_ENV&&Ve("Invalid argument supplied to oneOfType, expected an instance of array."),De;for(var r=0;r<e.length;r++){var t=e[r];if("function"!=typeof t)return Ve("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+d(t)+" at index "+r+"."),De}return c(function(r,t,n,o,i){for(var c=[],u=0;u<e.length;u++){var l=(0,e[u])(r,t,n,o,i,Pe);if(null==l)return null;l.data&&je(l.data,"expectedType")&&c.push(l.data.expectedType)}return new a("Invalid "+o+" `"+i+"` supplied to `"+n+"`"+(c.length>0?", expected one of type ["+c.join(", ")+"]":"")+".")})},shape:function(e){return c(function(r,t,n,o,i){var c=r[t],u=f(c);if("object"!==u)return new a("Invalid "+o+" `"+i+"` of type `"+u+"` supplied to `"+n+"`, expected `object`.");for(var s in e){var d=e[s];if("function"!=typeof d)return l(n,o,i,s,p(d));var v=d(c,s,n,o,i+"."+s,Pe);if(v)return v}return null})},exact:function(e){return c(function(r,t,n,o,i){var c=r[t],u=f(c);if("object"!==u)return new a("Invalid "+o+" `"+i+"` of type `"+u+"` supplied to `"+n+"`, expected `object`.");var s=xe({},r[t],e);for(var d in s){var v=e[d];if(je(e,d)&&"function"!=typeof v)return l(n,o,i,d,p(v));if(!v)return new a("Invalid "+o+" `"+i+"` key `"+d+"` supplied to `"+n+"`.\nBad object: "+JSON.stringify(r[t],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var h=v(c,d,n,o,i+"."+d,Pe);if(h)return h}return null})}};function i(e,r){return e===r?0!==e||1/e==1/r:e!=e&&r!=r}function a(e,r){this.message=e,this.data=r&&"object"==typeof r?r:{},this.stack=""}function c(e){function r(r,t,o,i,c,u,l){if(i=i||n,u=u||o,l!==Pe){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}return null==t[o]?r?new a(null===t[o]?"The "+c+" `"+u+"` is marked as required in `"+i+"`, but its value is `null`.":"The "+c+" `"+u+"` is marked as required in `"+i+"`, but its value is `undefined`."):null:e(t,o,i,c,u)}process;var t=r.bind(null,!1);return t.isRequired=r.bind(null,!0),t}function u(e){return c(function(r,t,n,o,i,c){var u=r[t];return f(u)!==e?new a("Invalid "+o+" `"+i+"` of type `"+p(u)+"` supplied to `"+n+"`, expected `"+e+"`.",{expectedType:e}):null})}function l(e,r,t,n,o){return new a((e||"React class")+": "+r+" type `"+t+"."+n+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+o+"`.")}function s(r){switch(typeof r){case"number":case"string":case"undefined":return!0;case"boolean":return!r;case"object":if(Array.isArray(r))return r.every(s);if(null===r||e(r))return!0;var n=function(e){var r=e&&(t&&e[t]||e["@@iterator"]);if("function"==typeof r)return r}(r);if(!n)return!1;var o,i=n.call(r);if(n!==r.entries){for(;!(o=i.next()).done;)if(!s(o.value))return!1}else for(;!(o=i.next()).done;){var a=o.value;if(a&&!s(a[1]))return!1}return!0;default:return!1}}function f(e){var r=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,r){return"symbol"===e||!!r&&("Symbol"===r["@@toStringTag"]||"function"==typeof Symbol&&r instanceof Symbol)}(r,e)?"symbol":r}function p(e){if(null==e)return""+e;var r=f(e);if("object"===r){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return r}function d(e){var r=p(e);switch(r){case"array":case"object":return"an "+r;case"boolean":case"date":case"regexp":return"a "+r;default:return r}}return a.prototype=Error.prototype,o.checkPropTypes=$e,o.resetWarningCache=$e.resetWarningCache,o.PropTypes=o,o}(Se.isElement):function(){function e(e,r,t,n,o,i){if(i!==Pe){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function r(){return e}e.isRequired=e;var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:r,element:e,elementType:e,instanceOf:r,node:e,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:Ne,resetWarningCache:Le};return t.PropTypes=t,t}()}),Ue=["makeDefault"],ze=m(function(e,r){var t=e.makeDefault,o=void 0!==t&&t,i=W(e,Ue),a=n(function(e){return e.set}),c=n(function(e){return e.camera}),u=n(function(e){return e.size}),l=H(function(e){return e.pageReflow}),s=H(function(e){return e.scaleMultiplier}),f=y(function(){return Math.max(u.width*s,u.height*s)},[u,l,s]),p=g();return B(function(){var e=u.height*s;p.current.aspect=u.width*s/e,p.current.fov=180/Math.PI*2*Math.atan(e/(2*p.current.position.z)),p.current.lookAt(0,0,0),p.current.updateProjectionMatrix(),p.current.updateMatrixWorld()},[f,u,s]),B(function(){if(o&&p.current){var e=c;return a({camera:p.current}),function(){return a({camera:e})}}},[c,p,o,a]),h("perspectiveCamera",q({ref:E([p,r]),position:[0,0,f],onUpdate:function(e){return e.updateProjectionMatrix()},near:.1,far:2*f},i))});ze.propTypes={makeDefault:Fe.bool,scaleMultiplier:Fe.number},ze.displayName="PerspectiveCamera";var qe=["makeDefault"],Ye=m(function(e,r){var t=e.makeDefault,o=void 0!==t&&t,i=W(e,qe),a=n(function(e){return e.set}),c=n(function(e){return e.camera}),u=n(function(e){return e.size}),l=H(function(e){return e.pageReflow}),s=H(function(e){return e.scaleMultiplier}),f=y(function(){return Math.max(u.width*s,u.height*s)},[u,l,s]),p=g();return B(function(){p.current.lookAt(0,0,0),p.current.updateProjectionMatrix(),p.current.updateMatrixWorld()},[f,u]),B(function(){if(o&&p.current){var e=c;return a({camera:p.current}),function(){return a({camera:e})}}},[c,p,o,a]),h("orthographicCamera",q({left:u.width*s/-2,right:u.width*s/2,top:u.height*s/2,bottom:u.height*s/-2,far:2*f,position:[0,0,f],near:.001,ref:E([p,r]),onUpdate:function(e){return e.updateProjectionMatrix()}},i))});function We(e,r){e&&(!1===r?(e.wasFrustumCulled=e.frustumCulled,e.wasVisible=e.visible,e.visible=!0,e.frustumCulled=!1):(e.visible=e.wasVisible,e.frustumCulled=e.wasFrustumCulled),e.children.forEach(function(e){return We(e,r)}))}Ye.propTypes={makeDefault:Fe.bool,scaleMultiplier:Fe.number},Ye.displayName="OrthographicCamera";var Qe=new x,Be=function(e){void 0===e&&(e=[0]),H.getState().globalRenderQueue=H.getState().globalRenderQueue||[0],H.getState().globalRenderQueue=[].concat(H.getState().globalRenderQueue,e)},Ge=function(e){var r=e.gl,t=e.scene,n=e.camera,o=e.left,i=e.top,a=e.width,c=e.height,u=e.layer,l=void 0===u?0:u,s=e.autoClear,f=e.clearDepth,p=void 0===f||f;if(t&&n){var d=r.autoClear;r.autoClear=void 0!==s&&s,r.setScissor(o,i,a,c),r.setScissorTest(!0),n.layers.set(l),p&&r.clearDepth(),r.render(t,n),r.setScissorTest(!1),r.autoClear=d}},He=function(e){var r=e.gl,t=e.scene,n=e.camera,o=e.left,i=e.top,a=e.width,c=e.height,u=e.layer,l=void 0===u?0:u,s=e.scissor,f=void 0===s||s,p=e.autoClear,d=void 0!==p&&p,v=e.clearDepth,h=void 0===v||v;if(t&&n){var m=r.autoClear;r.getSize(Qe),r.autoClear=d,r.setViewport(o,i,a,c),r.setScissor(o,i,a,c),r.setScissorTest(f),n.layers.set(l),h&&r.clearDepth(),r.render(t,n),r.setScissorTest(!1),r.setViewport(0,0,Qe.x,Qe.y),r.autoClear=m}},Xe=function(e,r,t,n){void 0===t&&(t=0),e&&r&&(G.preloadQueue.push(function(o){o.setScissorTest(!1),We(e,!1),r.layers.set(t),o.render(e,r),We(e,!0),n&&n()}),o())},Je=function(){var e=H(function(e){return e.isCanvasAvailable}),r=H(function(e){return e.hasSmoothScrollbar}),t=H(function(e){return e.requestReflow}),n=H(function(e){return e.debug}),o=H(function(e){return e.scaleMultiplier});return v(function(){n&&(window._scrollRig=window._scrollRig||{},window._scrollRig.reflow=t)},[]),{debug:n,isCanvasAvailable:e,hasSmoothScrollbar:r,scaleMultiplier:o,preloadScene:Xe,requestRender:Be,renderScissor:Ge,renderViewport:He,reflow:t}},Ke=function(n){var i=n.children,a=H(function(e){return e.canvasChildren}),c=Je();return v(function(){Object.keys(a).length||(c.debug&&console.log("GlobalRenderer","auto render empty canvas"),c.requestRender(),o())},[a]),c.debug&&console.log("GlobalChildren",Object.keys(a).length),e(r,{children:[i,Object.keys(a).map(function(e){var r=a[e],n=r.mesh,o=r.props;return"function"==typeof n?t(b,{children:n(q({key:e},c,o))},e):w(n,q({key:e},o))})]})},Ze=function(){var e=n(function(e){return e.gl}),r=n(function(e){return e.frameloop}),t=H(function(e){return e.globalClearDepth}),a=H(function(e){return e.globalAutoClear}),c=H(function(e){return e.globalPriority}),u=Je();return B(function(){e.debug.checkShaderErrors=u.debug},[u.debug]),i(function(){G.preloadQueue.length&&(e.autoClear=!1,G.preloadQueue.forEach(function(r){return r(e)}),e.clear(),G.preloadQueue=[],e.autoClear=!0,u.debug&&console.log("GlobalRenderer","preload complete. trigger global render"),u.requestRender(),o())},G.PRIORITY_PRELOAD),i(function(n){var o=n.camera,i=n.scene,c=H.getState().globalRenderQueue;("always"===r||c)&&(e.autoClear=a,o.layers.disableAll(),c?c.forEach(function(e){o.layers.enable(e)}):o.layers.enable(0),t&&e.clearDepth(),e.render(i,o),e.autoClear=!0),H.getState().clearGlobalRenderQueue()},c),null},er=/*#__PURE__*/function(e){var r,t;function n(r){var t;return(t=e.call(this,r)||this).state={error:!1},t.props=r,t}return t=e,(r=n).prototype=Object.create(t.prototype),r.prototype.constructor=r,Y(r,t),n.getDerivedStateFromError=function(e){return{error:e}},n.prototype.render=function(){return this.state.error?(this.props.onError&&this.props.onError(this.state.error),null):this.props.children},n}(p.Component);er.propTypes={onError:Fe.func};var rr=["as","children","gl","style","orthographic","camera","debug","scaleMultiplier","globalRender","globalPriority","globalAutoClear","globalClearDepth"],tr=["children","onError"],nr=function(r){var n=r.as,o=void 0===n?a:n,i=r.children,c=r.gl,u=r.style,l=r.orthographic,p=r.camera,d=r.debug,v=r.scaleMultiplier,h=void 0===v?G.DEFAULT_SCALE_MULTIPLIER:v,m=r.globalRender,y=void 0===m||m,g=r.globalPriority,b=void 0===g?G.PRIORITY_GLOBAL:g,w=r.globalAutoClear,S=void 0!==w&&w,O=r.globalClearDepth,C=void 0===O||O,R=W(r,rr),E=H(function(e){return e.globalRender});return B(function(){var e=f(window.location.search);(d||void 0!==e.debug)&&H.setState({debug:!0})},[d]),B(function(){H.setState({scaleMultiplier:h,globalRender:y,globalPriority:b,globalAutoClear:S,globalClearDepth:C})},[h,b,y,S,C]),e(o,q({id:"ScrollRig-canvas",camera:null,gl:q({failIfMajorPerformanceCaveat:!0},c),resize:{scroll:!1,debounce:0,polyfill:s},style:q({position:"fixed",top:0,left:0,right:0,height:"100vh"},u)},R,{children:["function"==typeof i?i(t(Ke,{})):t(Ke,{children:i}),E&&t(Ze,{}),!l&&t(ze,q({makeDefault:!0},p)),l&&t(Ye,q({makeDefault:!0},p)),t(X,{})]}))},or=function(r){var n=r.children,o=r.onError,i=W(r,tr);return B(function(){document.documentElement.classList.add("js-has-global-canvas")},[]),e(er,{onError:function(e){o&&o(e),H.setState({isCanvasAvailable:!1}),document.documentElement.classList.remove("js-has-global-canvas"),document.documentElement.classList.add("js-global-canvas-error")},children:[t(nr,q({},i,{children:n})),t("noscript",{children:t("style",{children:"\n          .ScrollRig-visibilityHidden,\n          .ScrollRig-transparentColor {\n            visibility: unset;\n            color: unset;\n          }\n          "})})]})},ir=function(e){return h("mesh",{scale:e.scale},h("planeGeometry",null),h("shaderMaterial",{args:[{uniforms:{color:{value:new T("hotpink")}},vertexShader:"\n            void main() {\n              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n            }\n          ",fragmentShader:"\n            uniform vec3 color;\n            uniform float opacity;\n            void main() {\n              gl_FragColor.rgba = vec4(color, .5);\n            }\n          "}],transparent:!0}))};function ar(e,r,t,n,o){return n+(e-r)*(o-n)/(t-r)}ir.propTypes={scale:Fe.shape({width:Fe.number,height:Fe.number})};var cr=function(){return{enabled:H(function(e){return e.hasSmoothScrollbar}),scroll:H(function(e){return e.scroll}),scrollTo:H(function(e){return e.scrollTo}),onScroll:H(function(e){return e.onScroll})}},ur={rootMargin:"50%",threshold:0,autoUpdate:!0};function lr(e,r){var t=V(),n=cr(),o=n.scroll,i=n.onScroll,a=H(function(e){return e.scaleMultiplier}),c=H(function(e){return e.pageReflow}),u=q({},ur,r),l=u.autoUpdate,s=$({rootMargin:u.rootMargin,threshold:u.threshold}),f=s.ref,p=s.inView;B(function(){f(e.current)},[e]);var d=S(),h=d[0],m=d[1],y=g({inViewport:!1,progress:-1,visibility:-1,viewport:-1}).current,b=g({top:0,bottom:0,left:0,right:0,width:0,height:0,x:0,y:0}).current,w=S(b),C=w[0],R=w[1],E=g({top:0,bottom:0,left:0,right:0,width:0,height:0,x:0,y:0,positiveYUpBottom:0}).current,x=g(D(0,0,0)).current;B(function(){var r,t=null==(r=e.current)?void 0:r.getBoundingClientRect();b.top=t.top+window.scrollY,b.bottom=t.bottom+window.scrollY,b.left=t.left+window.scrollX,b.right=t.right+window.scrollX,b.width=t.width,b.height=t.height,b.x=b.left+.5*t.width,b.y=b.top+.5*t.height,R(q({},b)),m(D((null==b?void 0:b.width)*a,(null==b?void 0:b.height)*a,1))},[e,t,c,a]);var T=O(function(r){var n=(void 0===r?{}:r).onlyUpdateInViewport;if(e.current&&(void 0!==n&&!n||y.inViewport)){!function(e,r,t,n){e.top=r.top-t.y,e.bottom=r.bottom-t.y,e.left=r.left-t.x,e.right=r.right-t.x,e.width=r.width,e.height=r.height,e.x=e.left+.5*r.width-.5*n.width,e.y=e.top+.5*r.height-.5*n.height,e.positiveYUpBottom=n.height-e.bottom}(E,b,o,t),function(e,r,t){e.x=r.x*t,e.y=-1*r.y*t}(x,E,a);var i="horizontal"===o.direction,c=i?"width":"height",u=t[c]-E[i?"left":"top"];y.progress=ar(u,0,t[c]+E[c],0,1),y.visibility=ar(u,0,E[c],0,1),y.viewport=ar(u,0,t[c],0,1)}},[e,t,a,o]);return B(function(){y.inViewport=p,T({onlyUpdateInViewport:!1})},[p]),B(function(){T({onlyUpdateInViewport:!1})},[T]),v(function(){if(l)return i(function(e){return T()})},[l,T,i]),{rect:C,bounds:E,scale:h,position:x,scrollState:y,inViewport:p,update:function(){return T({onlyUpdateInViewport:!1})}}}var sr=["track","children","margin","inViewportMargin","inViewportThreshold","visible","hideOffscreen","scissor","debug","as","renderOrder","priority"],fr=function(e){var r=e.track,t=e.children,n=e.margin,o=void 0===n?0:n,a=e.inViewportMargin,u=e.inViewportThreshold,l=e.visible,s=void 0===l||l,f=e.hideOffscreen,p=void 0===f||f,d=e.scissor,v=void 0!==d&&d,m=e.debug,y=void 0!==m&&m,g=e.as,b=void 0===g?"scene":g,w=e.renderOrder,C=void 0===w?1:w,R=e.priority,E=void 0===R?G.PRIORITY_SCISSORS:R,x=W(e,sr),T=O(function(e){null!==e&&M(e)},[]),j=S(v?new P:null),I=j[0],M=j[1],k=Je(),_=k.requestRender,A=k.renderScissor,$=H(function(e){return e.globalRender}),V=lr(r,{rootMargin:a,threshold:u}),D=V.bounds,L=V.scale,N=V.position,F=V.scrollState,U=V.inViewport;B(function(){I&&(I.visible=p?U&&s:s)},[I,U,p,s]),i(function(e){var r=e.gl,t=e.camera;I&&L&&I.visible&&(I.position.y=N.y,I.position.x=N.x,v?A({gl:r,scene:I,camera:t,left:D.left-o,top:D.positiveYUpBottom-o,width:D.width+2*o,height:D.height+2*o}):_())},$?E:void 0);var z=h("group",{renderOrder:C},(!t||y)&&L&&h(ir,{scale:L}),t&&I&&L&&t(q({track:r,margin:o,renderOrder:C,scale:L,scrollState:F,inViewport:U,scene:I,priority:E+C},x))),Y=b;return v?c(z,I):h(Y,{ref:T},z)};fr=p.memo(fr);var pr=["track","children","margin","inViewportMargin","inViewportThreshold","visible","hideOffscreen","debug","orthographic","renderOrder","priority"],dr=function(e){var r=e.track,t=e.children,n=e.margin,a=void 0===n?0:n,u=e.inViewportMargin,l=e.inViewportThreshold,s=e.visible,f=void 0===s||s,d=e.hideOffscreen,v=void 0===d||d,m=e.debug,y=void 0!==m&&m,b=e.orthographic,w=void 0!==b&&b,O=e.renderOrder,C=void 0===O?1:O,R=e.priority,E=void 0===R?G.PRIORITY_VIEWPORTS:R,x=W(e,pr),T=g(),j=S(function(){return new P})[0],I=Je().renderViewport,M=H(function(e){return e.pageReflow}),k=H(function(e){return e.scaleMultiplier}),_=lr(r,{rootMargin:u,threshold:l}),A=_.rect,$=_.bounds,V=_.scale,D=_.position,L=_.scrollState,N=_.inViewport;B(function(){j.visible=v?N&&f:f},[N,v,f]);var F=S(0),U=F[0],z=F[1];B(function(){var e=A.width*k,r=A.height*k,t=Math.max(e,r);z(t),T.current&&!w&&(T.current.aspect=(e+2*a*k)/(r+2*a*k),T.current.fov=180/Math.PI*2*Math.atan((r+2*a*k)/(2*t)),T.current.updateProjectionMatrix(),T.current.updateMatrixWorld()),o()},[r,M,A,k]);var Y=p.useCallback(function(e,t){r.current&&e.target===r.current&&(t.pointer.set((e.clientX-$.left+a)/($.width+2*a)*2-1,-(e.clientY-$.top+a)/($.height+2*a)*2+1),t.raycaster.setFromCamera(t.pointer,T.current))},[$,D]);return i(function(e){j&&V&&j.visible&&I({gl:e.gl,scene:j,camera:T.current,left:$.left-a,top:$.positiveYUpBottom-a,width:$.width+2*a,height:$.height+2*a})},E),$&&c(h(Fragment,null,!w&&h("perspectiveCamera",{ref:T,position:[0,0,U],onUpdate:function(e){return e.updateProjectionMatrix()}}),w&&h("orthographicCamera",{ref:T,position:[0,0,U],onUpdate:function(e){return e.updateProjectionMatrix()},left:V[0]/-2,right:V[0]/2,top:V[1]/2,bottom:V[1]/-2,far:2*U,near:.001}),h("group",{renderOrder:C},(!t||y)&&V&&h(ir,{scale:V}),t&&j&&V&&t(q({track:r,margin:a,renderOrder:C,scale:V,scrollState:L,inViewport:N,scene:j,camera:T.current,priority:E+C},x)))),j,{events:{compute:Y,priority:E},size:{width:A.width,height:A.height}})};function vr(e,r,t){void 0===r&&(r={});var n=void 0===t?{}:t,o=n.key,i=n.dispose,a=void 0===i||i,c=H(function(e){return e.updateCanvas}),u=H(function(e){return e.renderToCanvas}),l=H(function(e){return e.removeFromCanvas}),s=y(function(){return o||j.generateUUID()},[]);B(function(){u(s,e,{inactive:!1})},[s]),v(function(){return function(){l(s,a)}},[s]);var f=O(function(e){c(s,e)},[c,s]);return v(function(){f(r)},[].concat(Object.values(r))),f}dr=p.memo(dr);var hr=["children","id"],mr=m(function(e,r){var t=e.id;return vr(e.children,q({},W(e,hr),{ref:r}),{key:t}),null}),yr=!1;function gr(e,r){var t,o,i,a=void 0===r?{}:r,c=a.initTexture,l=void 0===c||c,s=a.premultiplyAlpha,f=void 0===s?"default":s,p=n(function(e){return e.gl}),d=n(function(e){return e.size}),h=H(function(e){return e.debug}),m=L(function(){return I.itemStart("waiting for DOM image"),new Promise(function(r){var t=e.current;function n(){r(null==t?void 0:t.currentSrc)}null==t||t.addEventListener("load",n,{once:!0}),null!=t&&t.complete&&(null==t||t.removeEventListener("load",n),n())})},[e,d],{equal:F}),g=(t=!0===/^((?!chrome|android).)*safari/i.test(navigator.userAgent),i=(o=navigator.userAgent.indexOf("Firefox")>-1)?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1,"undefined"==typeof createImageBitmap||t||o&&i<98?M:k),b=u(g,m,function(e){e instanceof k&&(e.setOptions({colorSpaceConversion:"none",premultiplyAlpha:f,imageOrientation:"flipY"}),e.setRequestHeader({Accept:(yr?"image/webp,":"")+"*/*"}))}),w=y(function(){return b instanceof _?b:b instanceof ImageBitmap?new A(b):void 0},[b]);return v(function(){l&&p.initTexture(w),I.itemEnd("waiting for DOM image"),h&&console.log("useImageAsTexture","initTexture()")},[p,w,l]),w}N.then(function(e){yr=e});var br=["children","duration","easing","smooth","direction","config"],wr=function(e){return 1===e?1:1-Math.pow(2,-10*e)},Sr=m(function(e,r){var t=e.children,n=e.duration,o=void 0===n?1:n,i=e.easing,a=void 0===i?wr:i,c=e.smooth,u=void 0===c||c,l=e.direction,s=void 0===l?"vertical":l,f=e.config,p=W(e,br),d=g();return C(r,function(){return{start:function(){var e;return null==(e=d.current)?void 0:e.start()},stop:function(){var e;return null==(e=d.current)?void 0:e.stop()},on:function(e,r){var t;return null==(t=d.current)?void 0:t.on(e,r)},once:function(e,r){var t;return null==(t=d.current)?void 0:t.once(e,r)},off:function(e,r){var t;return null==(t=d.current)?void 0:t.off(e,r)},scrollTo:function(e,r){var t;return null==(t=d.current)?void 0:t.scrollTo(e,r)},raf:function(e){var r;return null==(r=d.current)?void 0:r.raf(e)}}}),v(function(){var e=d.current=new z(q({duration:o,easing:a,smooth:u,direction:s},f));return function(){e.destroy()}},[o,a,u,s]),t&&t(p)}),Or=function(e){var r=e.children,n=e.enabled,i=void 0===n||n,a=e.locked,c=void 0!==a&&a,u=e.scrollRestoration,s=void 0===u?"auto":u,f=e.disablePointerOnScroll,p=void 0===f||f,d=e.horizontal,h=void 0!==d&&d,m=e.config,y=g(),b=g(),w=g(!1),S=H(function(e){return e.scroll});S.direction=h?"horizontal":"vertical";var C=function(e){p&&y.current&&w.current!==e&&(w.current=e,y.current.style.pointerEvents=e?"none":"auto")},R=O(function(){C(!1)},[]),E=O(function(e){var r;return null==(r=b.current)||r.on("scroll",e),function(){var r;return null==(r=b.current)?void 0:r.off("scroll",e)}},[]);return B(function(){"scrollRestoration"in window.history&&(window.history.scrollRestoration=s)},[]),v(function(){var e,r,t=l(function(e){var r;return null==(r=b.current)?void 0:r.raf(e)});null==(e=b.current)||e.on("scroll",function(e){var r=e.scroll,t=e.limit,n=e.velocity,i=e.direction,a=e.progress;S.y="vertical"===i?r:0,S.x="horizontal"===i?r:0,S.limit=t,S.velocity=n,S.direction=i,S.progress=a;var c=U(function(){return C(!0)},100,!0);Math.abs(n)>1.4?c():C(!1),o()}),H.setState({scrollTo:null==(r=b.current)?void 0:r.scrollTo}),H.setState({onScroll:E}),H.getState().scroll.y=window.scrollY,H.getState().scroll.x=window.scrollX,document.documentElement.classList.toggle("js-smooth-scrollbar-enabled",i),document.documentElement.classList.toggle("js-smooth-scrollbar-disabled",!i),H.setState({hasSmoothScrollbar:i});var n=function(){return o()};return window.addEventListener("pointermove",R),window.addEventListener("wheel",n),function(){t(),window.removeEventListener("pointermove",R),window.removeEventListener("wheel",n)}},[i]),v(function(){var e,r;c?null==(e=b.current)||e.stop():null==(r=b.current)||r.start()},[c]),t(Sr,{ref:b,smooth:i,direction:h?"horizontal":"vertical",config:m,children:function(e){return r(q({},e,{ref:y}))}})},Cr={hidden:"ScrollRig-visibilityHidden",hiddenWhenSmooth:"ScrollRig-visibilityHidden ScrollRig-hiddenIfSmooth",transparentColor:"ScrollRig-transparentColor",transparentColorWhenSmooth:"ScrollRig-transparentColor ScrollRig-hiddenIfSmooth"};export{or as GlobalCanvas,fr as ScrollScene,Or as SmoothScrollbar,mr as UseCanvas,dr as ViewportScrollScene,Cr as styles,vr as useCanvas,H as useCanvasStore,gr as useImageAsTexture,Je as useScrollRig,cr as useScrollbar,lr as useTracker};
//# sourceMappingURL=scrollrig.module.js.map
