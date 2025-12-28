import{$ as K,I as z,Ia as D,Ka as m,La as h,Ma as r,Na as Y,V as k,_ as W,ba as C,ga as U,sa as X,t as R,u as H,x as G,z as g}from"./chunk-RWFPYU6R.js";import{Aa as c,Ca as T,Ga as _,Pc as V,Vc as $,Zb as j,Zc as P,_b as B,ca as p,da as w,db as x,ha as o,hb as F,jc as A,nb as M,ob as E,pa as L,pb as S,qa as O,rb as v,vc as d,za as N}from"./chunk-LNAK4PJ4.js";import{a as s}from"./chunk-6HR7AMTL.js";var b={};function Z(n="pui_id_"){return Object.hasOwn(b,n)||(b[n]=0),b[n]++,`${n}${b[n]}`}function f(...n){if(n){let u=[];for(let e=0;e<n.length;e++){let t=n[e];if(!t)continue;let i=typeof t;if(i==="string"||i==="number")u.push(t);else if(i==="object"){let a=Array.isArray(t)?[f(...t)]:Object.entries(t).map(([y,l])=>l?y:void 0);u=a.length?u.concat(a.filter(y=>!!y)):u}}return u.join(" ").trim()}}var q=(()=>{class n extends r{name="common";static \u0275fac=(()=>{let e;return function(i){return(e||(e=c(n)))(i||n)}})();static \u0275prov=p({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),I=(()=>{class n{document=o(O);platformId=o(_);el=o(T);injector=o(L);cd=o($);renderer=o(F);config=o(Y);baseComponentStyle=o(q);baseStyle=o(r);scopedStyleEl;rootEl;dt;get styleOptions(){return{nonce:this.config?.csp().nonce}}get _name(){return this.constructor.name.replace(/^_/,"").toLowerCase()}get componentStyle(){return this._componentStyle}attrSelector=Z("pc");themeChangeListeners=[];_getHostInstance(e){if(e)return e?this.hostName?e.name===this.hostName?e:this._getHostInstance(e.parentInstance):e.parentInstance:void 0}_getOptionValue(e,t="",i={}){return X(e,t,i)}ngOnInit(){this.document&&(this._loadCoreStyles(),this._loadStyles())}ngAfterViewInit(){this.rootEl=this.el?.nativeElement,this.rootEl&&this.rootEl?.setAttribute(this.attrSelector,"")}ngOnChanges(e){if(this.document&&!H(this.platformId)){let{dt:t}=e;t&&t.currentValue&&(this._loadScopedThemeStyles(t.currentValue),this._themeChangeListener(()=>this._loadScopedThemeStyles(t.currentValue)))}}ngOnDestroy(){this._unloadScopedThemeStyles(),this.themeChangeListeners.forEach(e=>D.off("theme:change",e))}_loadStyles(){let e=()=>{h.isStyleNameLoaded("base")||(this.baseStyle.loadGlobalCSS(this.styleOptions),h.setLoadedStyleName("base")),this._loadThemeStyles()};e(),this._themeChangeListener(()=>e())}_loadCoreStyles(){!h.isStyleNameLoaded("base")&&this.componentStyle?.name&&(this.baseComponentStyle.loadCSS(this.styleOptions),this.componentStyle&&this.componentStyle?.loadCSS(this.styleOptions),h.setLoadedStyleName(this.componentStyle?.name))}_loadThemeStyles(){if(!m.isStyleNameLoaded("common")){let{primitive:e,semantic:t,global:i,style:a}=this.componentStyle?.getCommonTheme?.()||{};this.baseStyle.load(e?.css,s({name:"primitive-variables"},this.styleOptions)),this.baseStyle.load(t?.css,s({name:"semantic-variables"},this.styleOptions)),this.baseStyle.load(i?.css,s({name:"global-variables"},this.styleOptions)),this.baseStyle.loadGlobalTheme(s({name:"global-style"},this.styleOptions),a),m.setLoadedStyleName("common")}if(!m.isStyleNameLoaded(this.componentStyle?.name)&&this.componentStyle?.name){let{css:e,style:t}=this.componentStyle?.getComponentTheme?.()||{};this.componentStyle?.load(e,s({name:`${this.componentStyle?.name}-variables`},this.styleOptions)),this.componentStyle?.loadTheme(s({name:`${this.componentStyle?.name}-style`},this.styleOptions),t),m.setLoadedStyleName(this.componentStyle?.name)}if(!m.isStyleNameLoaded("layer-order")){let e=this.componentStyle?.getLayerOrderThemeCSS?.();this.baseStyle.load(e,s({name:"layer-order",first:!0},this.styleOptions)),m.setLoadedStyleName("layer-order")}this.dt&&(this._loadScopedThemeStyles(this.dt),this._themeChangeListener(()=>this._loadScopedThemeStyles(this.dt)))}_loadScopedThemeStyles(e){let{css:t}=this.componentStyle?.getPresetTheme?.(e,`[${this.attrSelector}]`)||{},i=this.componentStyle?.load(t,s({name:`${this.attrSelector}-${this.componentStyle?.name}`},this.styleOptions));this.scopedStyleEl=i?.el}_unloadScopedThemeStyles(){this.scopedStyleEl?.remove()}_themeChangeListener(e=()=>{}){h.clearLoadedStyleNames(),D.on("theme:change",e),this.themeChangeListeners.push(e)}cx(e,t={}){return f(this._getOptionValue(this.$style?.classes,e,s({instance:this},t)))}sx(e="",t=!0,i={}){if(t)return this._getOptionValue(this.$style?.inlineStyles,e,s({instance:this},i))}get parent(){return this.parentInstance}get $style(){return this.parent?this.parent.componentStyle:this.componentStyle}cn=f;static \u0275fac=function(t){return new(t||n)};static \u0275dir=S({type:n,inputs:{dt:"dt"},features:[d([q,r]),N]})}return n})();var Q=`
    .p-ink {
        display: block;
        position: absolute;
        background: dt('ripple.background');
        border-radius: 100%;
        transform: scale(0);
        pointer-events: none;
    }

    .p-ink-active {
        animation: ripple 0.4s linear;
    }

    @keyframes ripple {
        100% {
            opacity: 0;
            transform: scale(2.5);
        }
    }
`;var ne=`
    ${Q}
    /* For PrimeNG */
    .p-ripple {
        overflow: hidden;
        position: relative;
    }

    .p-ripple-disabled .p-ink {
        display: none !important;
    }

    @keyframes ripple {
        100% {
            opacity: 0;
            transform: scale(2.5);
        }
    }
`,ie={root:"p-ink"},ee=(()=>{class n extends r{name="ripple";theme=ne;classes=ie;static \u0275fac=(()=>{let e;return function(i){return(e||(e=c(n)))(i||n)}})();static \u0275prov=p({token:n,factory:n.\u0275fac})}return n})();var Te=(()=>{class n extends I{zone=o(x);_componentStyle=o(ee);animationListener;mouseDownListener;timeout;constructor(){super(),V(()=>{R(this.platformId)&&(this.config.ripple()?this.zone.runOutsideAngular(()=>{this.create(),this.mouseDownListener=this.renderer.listen(this.el.nativeElement,"mousedown",this.onMouseDown.bind(this))}):this.remove())})}ngAfterViewInit(){super.ngAfterViewInit()}onMouseDown(e){let t=this.getInk();if(!t||this.document.defaultView?.getComputedStyle(t,null).display==="none")return;if(g(t,"p-ink-active"),!k(t)&&!C(t)){let l=Math.max(z(this.el.nativeElement),K(this.el.nativeElement));t.style.height=l+"px",t.style.width=l+"px"}let i=W(this.el.nativeElement),a=e.pageX-i.left+this.document.body.scrollTop-C(t)/2,y=e.pageY-i.top+this.document.body.scrollLeft-k(t)/2;this.renderer.setStyle(t,"top",y+"px"),this.renderer.setStyle(t,"left",a+"px"),G(t,"p-ink-active"),this.timeout=setTimeout(()=>{let l=this.getInk();l&&g(l,"p-ink-active")},401)}getInk(){let e=this.el.nativeElement.children;for(let t=0;t<e.length;t++)if(typeof e[t].className=="string"&&e[t].className.indexOf("p-ink")!==-1)return e[t];return null}resetInk(){let e=this.getInk();e&&g(e,"p-ink-active")}onAnimationEnd(e){this.timeout&&clearTimeout(this.timeout),g(e.currentTarget,"p-ink-active")}create(){let e=this.renderer.createElement("span");this.renderer.addClass(e,"p-ink"),this.renderer.appendChild(this.el.nativeElement,e),this.renderer.setAttribute(e,"aria-hidden","true"),this.renderer.setAttribute(e,"role","presentation"),this.animationListener||(this.animationListener=this.renderer.listen(e,"animationend",this.onAnimationEnd.bind(this)))}remove(){let e=this.getInk();e&&(this.mouseDownListener&&this.mouseDownListener(),this.animationListener&&this.animationListener(),this.mouseDownListener=null,this.animationListener=null,U(e))}ngOnDestroy(){this.config&&this.config.ripple()&&this.remove(),super.ngOnDestroy()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=S({type:n,selectors:[["","pRipple",""]],hostAttrs:[1,"p-ripple"],features:[d([ee]),v]})}return n})(),_e=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=E({type:n});static \u0275inj=w({})}return n})();var oe=["*"],se=`
.p-icon {
    display: inline-block;
    vertical-align: baseline;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,te=(()=>{class n extends r{name="baseicon";css=se;static \u0275fac=(()=>{let e;return function(i){return(e||(e=c(n)))(i||n)}})();static \u0275prov=p({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Re=(()=>{class n extends I{spin=!1;_componentStyle=o(te);getClassNames(){return f("p-icon",{"p-icon-spin":this.spin})}static \u0275fac=(()=>{let e;return function(i){return(e||(e=c(n)))(i||n)}})();static \u0275cmp=M({type:n,selectors:[["ng-component"]],hostAttrs:["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],hostVars:2,hostBindings:function(t,i){t&2&&A(i.getClassNames())},inputs:{spin:[2,"spin","spin",P]},features:[d([te]),v],ngContentSelectors:oe,decls:1,vars:0,template:function(t,i){t&1&&(j(),B(0))},encapsulation:2,changeDetection:0})}return n})();export{Z as a,I as b,Re as c,Te as d,_e as e};
