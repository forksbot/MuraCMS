/*! mobile-drag-drop 2.3.0-rc.0 | Copyright (c) 2018 Tim Ruffles | MIT License */
!function(t,i){"object"==typeof exports&&"undefined"!=typeof module?i(exports):"function"==typeof define&&define.amd?define(["exports"],i):i(t.MobileDragDrop=t.MobileDragDrop||{})}(this,function(t){"use strict";var i="dnd-poly-",s=i+"snapback",n=["none","copy","copyLink","copyMove","link","linkMove","move","all"],h=["none","copy","move","link"];var e=function(){var t=!1;try{var i=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("test",null,i)}catch(t){}return t}();function r(t){return t&&t.tagName}function o(t,i,s){void 0===s&&(s=!0),document.addEventListener(t,i,!!e&&{passive:s})}function u(t,i){document.removeEventListener(t,i)}function a(t,i,s,n){void 0===n&&(n=!1);var h=e?{passive:!0,capture:n}:n;return t.addEventListener(i,s,h),{off:function(){t.removeEventListener(i,s,h)}}}function c(t){return 0===t.length?0:t.reduce(function(t,i){return i+t},0)/t.length}function f(t,i){for(var s=0;s<t.changedTouches.length;s++){if(t.changedTouches[s].identifier===i)return!0}return!1}function d(t,i,s){for(var n=[],h=[],e=0;e<i.touches.length;e++){var r=i.touches[e];n.push(r[t+"X"]),h.push(r[t+"Y"])}s.x=c(n),s.y=c(h)}var l=["","-webkit-"];function v(t,i,s,n,h){void 0===h&&(h=!0);var e=i.x,r=i.y;n&&(e+=n.x,r+=n.y),h&&(e-=parseInt(t.offsetWidth,10)/2,r-=parseInt(t.offsetHeight,10)/2);for(var o="translate3d("+e+"px,"+r+"px, 0)",u=0;u<l.length;u++){var a=l[u]+"transform";t.style[a]=o+" "+s[u]}}var p=function(){function t(t,i){this.t=t,this.i=i,this.s=h[0]}return Object.defineProperty(t.prototype,"dropEffect",{get:function(){return this.s},set:function(t){0!==this.t.mode&&n.indexOf(t)>-1&&(this.s=t)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"types",{get:function(){if(0!==this.t.mode)return Object.freeze(this.t.types)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"effectAllowed",{get:function(){return this.t.effectAllowed},set:function(t){2===this.t.mode&&n.indexOf(t)>-1&&(this.t.effectAllowed=t)},enumerable:!0,configurable:!0}),t.prototype.setData=function(t,i){if(2===this.t.mode){if(t.indexOf(" ")>-1)throw new Error("illegal arg: type contains space");this.t.data[t]=i,-1===this.t.types.indexOf(t)&&this.t.types.push(t)}},t.prototype.getData=function(t){if(1===this.t.mode||2===this.t.mode)return this.t.data[t]||""},t.prototype.clearData=function(t){if(2===this.t.mode){if(t&&this.t.data[t]){delete this.t.data[t];var i=this.t.types.indexOf(t);return void(i>-1&&this.t.types.splice(i,1))}this.t.data={},this.t.types=[]}},t.prototype.setDragImage=function(t,i,s){2===this.t.mode&&this.i(t,i,s)},t}();function g(t,i){return t?t===n[0]?h[0]:0===t.indexOf(n[1])||t===n[7]?h[1]:0===t.indexOf(n[4])?h[3]:t===n[6]?h[2]:h[1]:3===i.nodeType&&"A"===i.tagName?h[3]:h[1]}function m(t,i,s,n,h,e,r){void 0===e&&(e=!0),void 0===r&&(r=null);var o=function(t,i,s,n,h,e,r){void 0===r&&(r=null);var o=i.changedTouches[0],u=new Event(s,{bubbles:!0,cancelable:n});u.dataTransfer=e,u.relatedTarget=r,u.screenX=o.screenX,u.screenY=o.screenY,u.clientX=o.clientX,u.clientY=o.clientY,u.pageX=o.pageX,u.pageY=o.pageY;var a=t.getBoundingClientRect();return u.offsetX=u.clientX-a.left,u.offsetY=u.clientY-a.top,u}(i,s,t,e,document.defaultView,h,r),u=!i.dispatchEvent(o);return n.mode=0,u}function y(t,i){if(!t||t===n[7])return i;if(i===h[1]){if(0===t.indexOf(h[1]))return h[1]}else if(i===h[3]){if(0===t.indexOf(h[3])||t.indexOf("Link")>-1)return h[3]}else if(i===h[2]&&(0===t.indexOf(h[2])||t.indexOf("Move")>-1))return h[2];return h[0]}var b,w=function(){function t(t,i,s,n){this.h=t,this.o=i,this.u=s,this.l=n,this.v=0,this.p=null,this.g=null,this.m=t,this.I=t.changedTouches[0],this.j=this.S.bind(this),this.k=this.A.bind(this),o("touchmove",this.j,!1),o("touchend",this.k,!1),o("touchcancel",this.k,!1)}return t.prototype.O=function(){var t=this;this.v=1,this.C=h[0],this.D={data:{},effectAllowed:void 0,mode:3,types:[]},this.M={x:null,y:null},this.F={x:null,y:null};var i=this.u;if(this.N=new p(this.D,function(s,n,h){i=s,"number"!=typeof n&&"number"!=typeof h||(t.P={x:n||0,y:h||0})}),this.D.mode=2,this.N.dropEffect=h[0],m("dragstart",this.u,this.m,this.D,this.N))return this.v=3,this.T(),!1;d("page",this.m,this.F);var s,n=this.o.dragImageSetup(i);if(this.L=(s=n,l.map(function(t){var i=s.style[t+"transform"];return i&&"none"!==i?i.replace(/translate\(\D*\d+[^,]*,\D*\d+[^,]*\)\s*/g,""):""})),n.style.position="absolute",n.style.left="0px",n.style.top="0px",n.style.zIndex="999999",n.classList.add("dnd-poly-drag-image"),n.classList.add("dnd-poly-icon"),this._=n,!this.P)if(this.o.dragImageOffset)this.P={x:this.o.dragImageOffset.x,y:this.o.dragImageOffset.y};else if(this.o.dragImageCenterOnTouch){var e=getComputedStyle(i);this.P={x:0-parseInt(e.marginLeft,10),y:0-parseInt(e.marginTop,10)}}else{var r=i.getBoundingClientRect();e=getComputedStyle(i);this.P={x:r.left-this.I.clientX-parseInt(e.marginLeft,10)+r.width/2,y:r.top-this.I.clientY-parseInt(e.marginTop,10)+r.height/2}}return v(this._,this.F,this.L,this.P,this.o.dragImageCenterOnTouch),document.body.appendChild(this._),this.V=window.setInterval(function(){t.X||(t.X=!0,t.Y(),t.X=!1)},this.o.iterationInterval),!0},t.prototype.T=function(){this.V&&(clearInterval(this.V),this.V=null),u("touchmove",this.j),u("touchend",this.k),u("touchcancel",this.k),this._&&(this._.parentNode.removeChild(this._),this._=null),this.l(this.o,this.m,this.v)},t.prototype.S=function(t){var i=this;if(!1!==f(t,this.I.identifier)){if(this.m=t,0===this.v){var s=void 0;if(this.o.dragStartConditionOverride)try{s=this.o.dragStartConditionOverride(t)}catch(t){s=!1}else s=1===t.touches.length;return s?void(!0===this.O()&&(this.h.preventDefault(),t.preventDefault())):void this.T()}if(t.preventDefault(),d("client",t,this.M),d("page",t,this.F),this.o.dragImageTranslateOverride)try{var n=!1;if(this.o.dragImageTranslateOverride(t,{x:this.M.x,y:this.M.y},this.p,function(t,s){i._&&(n=!0,i.M.x+=t,i.M.y+=s,i.F.x+=t,i.F.y+=s,v(i._,i.F,i.L,i.P,i.o.dragImageCenterOnTouch))}),n)return}catch(t){}v(this._,this.F,this.L,this.P,this.o.dragImageCenterOnTouch)}},t.prototype.A=function(t){if(!1!==f(t,this.I.identifier)){if(this.o.dragImageTranslateOverride)try{this.o.dragImageTranslateOverride(void 0,void 0,void 0,function(){})}catch(t){}0!==this.v?(t.preventDefault(),this.v="touchcancel"===t.type?3:2):this.T()}},t.prototype.Y=function(){var t=this,n=this.C;this.D.mode=3,this.N.dropEffect=h[0];var e=m("drag",this.u,this.m,this.D,this.N);if(e&&(this.C=h[0]),e||2===this.v||3===this.v)return this.q(this.v)?void function(t,i,n,h){var e=getComputedStyle(t);if("hidden"!==e.visibility&&"none"!==e.display){i.classList.add(s);var r=getComputedStyle(i),o=parseFloat(r.transitionDuration);if(isNaN(o)||0===o)h();else{var u=t.getBoundingClientRect(),a={x:u.left,y:u.top};a.x+=document.body.scrollLeft||document.documentElement.scrollLeft,a.y+=document.body.scrollTop||document.documentElement.scrollTop,a.x-=parseInt(e.marginLeft,10),a.y-=parseInt(e.marginTop,10);var c=parseFloat(r.transitionDelay),f=Math.round(1e3*(o+c));v(i,a,n,void 0,!1),setTimeout(h,f)}}else h()}(this.u,this._,this.L,function(){t.B()}):void this.B();var o=this.o.elementFromPoint(this.M.x,this.M.y),u=this.g;o!==this.p&&o!==this.g&&(this.p=o,null!==this.g&&(this.D.mode=3,this.N.dropEffect=h[0],m("dragexit",this.g,this.m,this.D,this.N,!1)),null===this.p?this.g=this.p:(this.D.mode=3,this.N.dropEffect=g(this.D.effectAllowed,this.u),m("dragenter",this.p,this.m,this.D,this.N)?(this.g=this.p,this.C=y(this.N.effectAllowed,this.N.dropEffect)):this.p!==document.body&&(this.g=document.body))),u!==this.g&&r(u)&&(this.D.mode=3,this.N.dropEffect=h[0],m("dragleave",u,this.m,this.D,this.N,!1,this.g)),r(this.g)&&(this.D.mode=3,this.N.dropEffect=g(this.D.effectAllowed,this.u),!1===m("dragover",this.g,this.m,this.D,this.N)?this.C=h[0]:this.C=y(this.N.effectAllowed,this.N.dropEffect)),n!==this.C&&this._.classList.remove(i+n);var a=i+this.C;this._.classList.add(a)},t.prototype.q=function(t){var i=this.C===h[0]||null===this.g||3===t;return i?r(this.g)&&(this.D.mode=3,this.N.dropEffect=h[0],m("dragleave",this.g,this.m,this.D,this.N,!1)):r(this.g)&&(this.D.mode=1,this.N.dropEffect=this.C,!0===m("drop",this.g,this.m,this.D,this.N)?this.C=this.N.dropEffect:this.C=h[0]),i},t.prototype.B=function(){this.D.mode=3,this.N.dropEffect=this.C,m("dragend",this.u,this.m,this.D,this.N,!1),this.v=2,this.T()},t}(),x={iterationInterval:150,tryFindDraggableTarget:function(t){var i=t.target;do{if(!1!==i.draggable&&i.getAttribute&&"true"===i.getAttribute("draggable"))return i}while((i=i.parentNode)&&i!==document.body)},dragImageSetup:function(t){var i=t.cloneNode(!0);return function t(i,s){if(1===i.nodeType){for(var n=getComputedStyle(i),h=0;h<n.length;h++){var e=n[h];s.style.setProperty(e,n.getPropertyValue(e),n.getPropertyPriority(e))}if(s.style.pointerEvents="none",s.removeAttribute("id"),s.removeAttribute("class"),s.removeAttribute("draggable"),"CANVAS"===s.nodeName){var r=i,o=s,u=r.getContext("2d").getImageData(0,0,r.width,r.height);o.getContext("2d").putImageData(u,0,0)}}if(i.hasChildNodes())for(h=0;h<i.childNodes.length;h++)t(i.childNodes[h],s.childNodes[h])}(t,i),i},elementFromPoint:function(t,i){return document.elementFromPoint(t,i)}};function I(t){if(!b){var i=x.tryFindDraggableTarget(t);if(i)try{b=new w(t,x,i,S)}catch(i){throw S(x,t,3),i}}}function j(t){var i=t.target,s=function(t){h.off(),e.off(),r.off(),clearTimeout(n)},n=window.setTimeout(function(){h.off(),e.off(),r.off(),I(t)},x.holdToDrag),h=a(i,"touchend",s),e=a(i,"touchcancel",s),r=a(window,"scroll",s,!0)}function S(t,i,s){if(0===s&&t.defaultActionOverride)try{t.defaultActionOverride(i),i.defaultPrevented}catch(t){}b=null}t.polyfill=function(t){if(t&&Object.keys(t).forEach(function(i){x[i]=t[i]}),!x.forceApply){var i=(s={dragEvents:"ondragstart"in document.documentElement,draggable:"draggable"in document.documentElement,userAgentSupportingNativeDnD:void 0},n=!!window.chrome||/chrome/i.test(navigator.userAgent),s.userAgentSupportingNativeDnD=!(/iPad|iPhone|iPod|Android/.test(navigator.userAgent)||n&&"ontouchstart"in document.documentElement),s);if(i.userAgentSupportingNativeDnD&&i.draggable&&i.dragEvents)return!1}var s,n;return x.holdToDrag?o("touchstart",j,!1):o("touchstart",I,!1),!0},Object.defineProperty(t,"__esModule",{value:!0})});
//# sourceMappingURL=index.min.js.map