import{a as be}from"./chunk-PNPM5T7V.js";import{a as ct,b as pt,c as ut,e as ce,f as kt,g as Tt,h as St}from"./chunk-ZCBYKFSK.js";import{a as yt}from"./chunk-ZNZEMCYO.js";import{a as bt,d as xt,e as vt,i as Ct,p as Ae,s as wt}from"./chunk-5TVMUKYR.js";import{a as gt}from"./chunk-K33OWSJ3.js";import{c as _t,d as Oe,f as Ve,g as Fe,h as Pe,i as Le}from"./chunk-UB7WHAP5.js";import{b as de,d as rt,e as at,g as lt,h as st,j as dt,k as ht,l as De,m as mt,p as ft}from"./chunk-47HPTYDK.js";import{E as We,G as Ze,I as Ie,J as Ye,K as Xe,R as Je,Z as Me,ba as et,ca as tt,da as nt,ha as Ee,i as ie,j as Se,k as J,l as Ge,m as ee,ma as oe,na as W,oa as it,p as Q,pa as ot,u as _e,ua as re,v as Ne,x as Ke}from"./chunk-FHCI6K3X.js";import{Aa as L,Ab as E,Ac as R,Ba as Be,Bb as D,Cb as z,Db as I,Eb as ye,Hb as T,Ib as se,Jb as s,Kb as Ue,La as Re,Lb as je,Ma as l,Mb as k,Nb as $,Ob as b,Pb as x,Ra as y,Tb as ke,Ub as qe,Vb as B,Wb as u,Xa as Qe,Xb as M,Yb as K,Zb as fe,ab as F,ba as he,bb as me,ca as te,cc as Y,da as ue,dc as Te,eb as G,ec as Z,fc as ne,gb as c,gc as $e,ha as O,lc as X,ma as m,mb as _,na as f,nb as w,oa as V,ob as S,qb as He,qc as P,rb as ae,sb as le,sc as we,tb as d,ub as p,va as U,vb as h,wb as C,xb as j,yb as q,za as ge,zb as A,zc as v}from"./chunk-S2MQBBOY.js";import{a as Ce}from"./chunk-6HR7AMTL.js";var $t=["data-p-icon","minus"],Nt=(()=>{class t extends dt{static \u0275fac=(()=>{let e;return function(i){return(e||(e=L(t)))(i||t)}})();static \u0275cmp=F({type:t,selectors:[["","data-p-icon","minus"]],features:[G],attrs:$t,decls:1,vars:0,consts:[["d","M13.2222 7.77778H0.777778C0.571498 7.77778 0.373667 7.69584 0.227806 7.54998C0.0819442 7.40412 0 7.20629 0 7.00001C0 6.79373 0.0819442 6.5959 0.227806 6.45003C0.373667 6.30417 0.571498 6.22223 0.777778 6.22223H13.2222C13.4285 6.22223 13.6263 6.30417 13.7722 6.45003C13.9181 6.5959 14 6.79373 14 7.00001C14 7.20629 13.9181 7.40412 13.7722 7.54998C13.6263 7.69584 13.4285 7.77778 13.2222 7.77778Z","fill","currentColor"]],template:function(n,i){n&1&&(V(),A(0,"path",0))},encapsulation:2})}return t})();var It=`
    .p-drawer {
        display: flex;
        flex-direction: column;
        transform: translate3d(0px, 0px, 0px);
        position: relative;
        transition: transform 0.3s;
        background: dt('drawer.background');
        color: dt('drawer.color');
        border: 1px solid dt('drawer.border.color');
        box-shadow: dt('drawer.shadow');
    }

    .p-drawer-content {
        overflow-y: auto;
        flex-grow: 1;
        padding: dt('drawer.content.padding');
    }

    .p-drawer-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-shrink: 0;
        padding: dt('drawer.header.padding');
    }

    .p-drawer-footer {
        padding: dt('drawer.footer.padding');
    }

    .p-drawer-title {
        font-weight: dt('drawer.title.font.weight');
        font-size: dt('drawer.title.font.size');
    }

    .p-drawer-full .p-drawer {
        transition: none;
        transform: none;
        width: 100vw !important;
        height: 100vh !important;
        max-height: 100%;
        top: 0px !important;
        left: 0px !important;
        border-width: 1px;
    }

    .p-drawer-left .p-drawer-enter-from,
    .p-drawer-left .p-drawer-leave-to {
        transform: translateX(-100%);
    }

    .p-drawer-right .p-drawer-enter-from,
    .p-drawer-right .p-drawer-leave-to {
        transform: translateX(100%);
    }

    .p-drawer-top .p-drawer-enter-from,
    .p-drawer-top .p-drawer-leave-to {
        transform: translateY(-100%);
    }

    .p-drawer-bottom .p-drawer-enter-from,
    .p-drawer-bottom .p-drawer-leave-to {
        transform: translateY(100%);
    }

    .p-drawer-full .p-drawer-enter-from,
    .p-drawer-full .p-drawer-leave-to {
        opacity: 0;
    }

    .p-drawer-full .p-drawer-enter-active,
    .p-drawer-full .p-drawer-leave-active {
        transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
    }

    .p-drawer-left .p-drawer {
        width: 20rem;
        height: 100%;
        border-inline-end-width: 1px;
    }

    .p-drawer-right .p-drawer {
        width: 20rem;
        height: 100%;
        border-inline-start-width: 1px;
    }

    .p-drawer-top .p-drawer {
        height: 10rem;
        width: 100%;
        border-block-end-width: 1px;
    }

    .p-drawer-bottom .p-drawer {
        height: 10rem;
        width: 100%;
        border-block-start-width: 1px;
    }

    .p-drawer-left .p-drawer-content,
    .p-drawer-right .p-drawer-content,
    .p-drawer-top .p-drawer-content,
    .p-drawer-bottom .p-drawer-content {
        width: 100%;
        height: 100%;
    }

    .p-drawer-open {
        display: flex;
    }

    .p-drawer-mask:dir(rtl) {
        flex-direction: row-reverse;
    }
`;var Gt=["header"],Kt=["footer"],Wt=["content"],Zt=["closeicon"],Yt=["headless"],Xt=["container"],Jt=["closeButton"],en=["*"],tn=(t,r)=>({transform:t,transition:r}),nn=t=>({value:"visible",params:t});function on(t,r){t&1&&z(0)}function rn(t,r){if(t&1&&c(0,on,1,0,"ng-container",4),t&2){let e=s(2);d("ngTemplateOutlet",e.headlessTemplate||e._headlessTemplate)}}function an(t,r){t&1&&z(0)}function ln(t,r){if(t&1&&(p(0,"div"),M(1),h()),t&2){let e=s(3);u(e.cx("title")),l(),K(e.header)}}function sn(t,r){t&1&&(V(),C(0,"svg",11)),t&2&&_("data-pc-section","closeicon")}function dn(t,r){}function cn(t,r){t&1&&c(0,dn,0,0,"ng-template")}function pn(t,r){if(t&1&&c(0,sn,1,1,"svg",10)(1,cn,1,0,null,4),t&2){let e=s(4);d("ngIf",!e.closeIconTemplate&&!e._closeIconTemplate),l(),d("ngTemplateOutlet",e.closeIconTemplate||e._closeIconTemplate)}}function hn(t,r){if(t&1){let e=I();p(0,"p-button",9),T("onClick",function(i){m(e);let o=s(3);return f(o.close(i))})("keydown.enter",function(i){m(e);let o=s(3);return f(o.close(i))}),c(1,pn,2,2,"ng-template",null,1,X),h()}if(t&2){let e=s(3);d("ngClass",e.cx("pcCloseButton"))("buttonProps",e.closeButtonProps)("ariaLabel",e.ariaCloseLabel),_("data-pc-section","closebutton")("data-pc-group-section","iconcontainer")}}function un(t,r){t&1&&z(0)}function gn(t,r){t&1&&z(0)}function mn(t,r){if(t&1&&(E(0),p(1,"div",5),c(2,gn,1,0,"ng-container",4),h(),D()),t&2){let e=s(3);l(),d("ngClass",e.cx("footer")),_("data-pc-section","footer"),l(),d("ngTemplateOutlet",e.footerTemplate||e._footerTemplate)}}function fn(t,r){if(t&1&&(p(0,"div",5),c(1,an,1,0,"ng-container",4)(2,ln,2,3,"div",6)(3,hn,3,5,"p-button",7),h(),p(4,"div",5),je(5),c(6,un,1,0,"ng-container",4),h(),c(7,mn,3,3,"ng-container",8)),t&2){let e=s(2);d("ngClass",e.cx("header")),_("data-pc-section","header"),l(),d("ngTemplateOutlet",e.headerTemplate||e._headerTemplate),l(),d("ngIf",e.header),l(),d("ngIf",e.showCloseIcon&&e.closable),l(),d("ngClass",e.cx("content")),_("data-pc-section","content"),l(2),d("ngTemplateOutlet",e.contentTemplate||e._contentTemplate),l(),d("ngIf",e.footerTemplate||e._footerTemplate)}}function _n(t,r){if(t&1){let e=I();p(0,"div",3,0),T("@panelState.start",function(i){m(e);let o=s();return f(o.onAnimationStart(i))})("@panelState.done",function(i){m(e);let o=s();return f(o.onAnimationEnd(i))})("keydown",function(i){m(e);let o=s();return f(o.onKeyDown(i))}),w(2,rn,1,1,"ng-container")(3,fn,8,9),h()}if(t&2){let e=s();B(e.style),u(e.cn(e.cx("root"),e.styleClass)),d("@panelState",Z(11,nn,ne(8,tn,e.transformOptions,e.transitionOptions))),_("data-pc-name","sidebar")("data-pc-section","root"),l(2),S(e.headlessTemplate||e._headlessTemplate?2:3)}}var bn=`
    ${It}

    /** For PrimeNG **/
    .p-drawer {
        position: fixed;
        display: flex;
        flex-direction: column;
    }

    .p-drawer-left {
        top: 0;
        left: 0;
        width: 20rem;
        height: 100%;
    }

    .p-drawer-right {
        top: 0;
        right: 0;
        width: 20rem;
        height: 100%;
    }

    .p-drawer-top {
        top: 0;
        left: 0;
        width: 100%;
        height: 10rem;
    }

    .p-drawer-bottom {
        bottom: 0;
        left: 0;
        width: 100%;
        height: 10rem;
    }

    .p-drawer-full {
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        -webkit-transition: none;
        transition: none;
    }

    .p-overlay-mask-enter {
        animation: p-overlay-mask-enter-animation 150ms forwards;
    }

    .p-overlay-mask-leave {
        animation: p-overlay-mask-leave-animation 150ms forwards;
    }

    @keyframes p-overlay-mask-enter-animation {
        from {
            background-color: transparent;
        }
        to {
            background-color: rgba(0, 0, 0, 0.4);
        }
    }
    @keyframes p-overlay-mask-leave-animation {
        from {
            background-color: rgba(0, 0, 0, 0.4);
        }
        to {
            background-color: transparent;
        }
    }
`,xn={mask:({instance:t})=>["p-drawer-mask",{"p-overlay-mask p-overlay-mask-enter":t.modal},{"p-drawer-full":t.fullScreen}],root:({instance:t})=>["p-drawer p-component",{"p-drawer-full":t.fullScreen,"p-drawer-open":t.visible},`p-drawer-${t.position}`],header:"p-drawer-header",title:"p-drawer-title",pcCloseButton:"p-drawer-close-button",content:"p-drawer-content",footer:"p-drawer-footer"},Mt=(()=>{class t extends re{name="drawer";theme=bn;classes=xn;static \u0275fac=(()=>{let e;return function(i){return(e||(e=L(t)))(i||t)}})();static \u0275prov=te({token:t,factory:t.\u0275fac})}return t})();var vn=Pe([Ve({transform:"{{transform}}",opacity:0}),Oe("{{transition}}")]),Cn=Pe([Oe("{{transition}}",Ve({transform:"{{transform}}",opacity:0}))]),Et="translate3d(-100%, 0px, 0px)",Ot=(()=>{class t extends de{appendTo="body";blockScroll=!1;style;styleClass;ariaCloseLabel;autoZIndex=!0;baseZIndex=0;modal=!0;closeButtonProps={severity:"secondary",text:!0,rounded:!0};dismissible=!0;showCloseIcon=!0;closeOnEscape=!0;transitionOptions="150ms cubic-bezier(0, 0, 0.2, 1)";get visible(){return this._visible??!1}set visible(e){this._visible=e}get position(){return this._position}set position(e){if(this._position=e,e==="full"){this.transformOptions="none";return}switch(e){case"left":this.transformOptions="translate3d(-100%, 0px, 0px)";break;case"right":this.transformOptions="translate3d(100%, 0px, 0px)";break;case"bottom":this.transformOptions="translate3d(0px, 100%, 0px)";break;case"top":this.transformOptions="translate3d(0px, -100%, 0px)";break}}get fullScreen(){return this._fullScreen}set fullScreen(e){this._fullScreen=e,e===!0?this.transformOptions="none":this.transformOptions=Et}header;maskStyle;closable=!0;onShow=new y;onHide=new y;visibleChange=new y;containerViewChild;closeButtonViewChild;initialized;_visible;_position="left";_fullScreen=!1;container;transformOptions=Et;mask;maskClickListener;documentEscapeListener;animationEndListener;_componentStyle=O(Mt);ngAfterViewInit(){super.ngAfterViewInit(),this.initialized=!0}headerTemplate;footerTemplate;contentTemplate;closeIconTemplate;headlessTemplate;_headerTemplate;_footerTemplate;_contentTemplate;_closeIconTemplate;_headlessTemplate;templates;ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"content":this._contentTemplate=e.template;break;case"header":this._headerTemplate=e.template;break;case"footer":this._footerTemplate=e.template;break;case"closeicon":this._closeIconTemplate=e.template;break;case"headless":this._headlessTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}onKeyDown(e){e.code==="Escape"&&this.hide(!1)}show(){this.container?.setAttribute(this.attrSelector,""),this.autoZIndex&&ce.set("modal",this.container,this.baseZIndex||this.config.zIndex.modal),this.modal&&this.enableModality(),this.onShow.emit({}),this.visibleChange.emit(!0)}hide(e=!0){e&&this.onHide.emit({}),this.modal&&this.disableModality()}close(e){this.hide(),this.visibleChange.emit(!1),e.preventDefault()}enableModality(){let e=this.document.querySelectorAll(".p-drawer-open"),n=e.length,i=n==1?String(parseInt(this.container.style.zIndex)-1):String(parseInt(e[n-1].style.zIndex)-1);this.mask||(this.mask=this.renderer.createElement("div"),this.mask&&(Me(this.mask,"style",this.getMaskStyle()),Me(this.mask,"style",`z-index: ${i}`),Ne(this.mask,this.cx("mask"))),this.dismissible&&(this.maskClickListener=this.renderer.listen(this.mask,"click",o=>{this.dismissible&&this.close(o)})),this.renderer.appendChild(this.document.body,this.mask),this.blockScroll&&rt())}getMaskStyle(){return this.maskStyle?Object.entries(this.maskStyle).map(([e,n])=>`${e}: ${n}`).join("; "):""}disableModality(){this.mask&&(Ke(this.mask,"p-overlay-mask-enter"),Ne(this.mask,"p-overlay-mask-leave"),this.animationEndListener=this.renderer.listen(this.mask,"animationend",this.destroyModal.bind(this)))}destroyModal(){this.unbindMaskClickListener(),this.mask&&this.renderer.removeChild(this.document.body,this.mask),this.blockScroll&&at(),this.unbindAnimationEndListener(),this.mask=null}onAnimationStart(e){switch(e.toState){case"visible":this.container=e.element,this.appendContainer(),this.show(),this.closeOnEscape&&this.bindDocumentEscapeListener();break}}onAnimationEnd(e){switch(e.toState){case"void":this.hide(!1),ce.clear(this.container),this.unbindGlobalListeners();break}}appendContainer(){this.appendTo&&(this.appendTo==="body"&&this.container?this.renderer.appendChild(this.document.body,this.container):this.container&&Ze(this.appendTo,this.container))}bindDocumentEscapeListener(){let e=this.el?this.el.nativeElement.ownerDocument:this.document;this.documentEscapeListener=this.renderer.listen(e,"keydown",n=>{n.which==27&&parseInt(this.container.style.zIndex)===ce.get(this.container)&&this.close(n)})}unbindDocumentEscapeListener(){this.documentEscapeListener&&(this.documentEscapeListener(),this.documentEscapeListener=null)}unbindMaskClickListener(){this.maskClickListener&&(this.maskClickListener(),this.maskClickListener=null)}unbindGlobalListeners(){this.unbindMaskClickListener(),this.unbindDocumentEscapeListener()}unbindAnimationEndListener(){this.animationEndListener&&this.mask&&(this.animationEndListener(),this.animationEndListener=null)}ngOnDestroy(){this.initialized=!1,this.visible&&this.modal&&this.destroyModal(),this.appendTo&&this.container&&this.renderer.appendChild(this.el.nativeElement,this.container),this.container&&this.autoZIndex&&ce.clear(this.container),this.container=null,this.unbindGlobalListeners(),this.unbindAnimationEndListener()}static \u0275fac=(()=>{let e;return function(i){return(e||(e=L(t)))(i||t)}})();static \u0275cmp=F({type:t,selectors:[["p-drawer"]],contentQueries:function(n,i,o){if(n&1&&(k(o,Gt,4),k(o,Kt,4),k(o,Wt,4),k(o,Zt,4),k(o,Yt,4),k(o,oe,4)),n&2){let a;b(a=x())&&(i.headerTemplate=a.first),b(a=x())&&(i.footerTemplate=a.first),b(a=x())&&(i.contentTemplate=a.first),b(a=x())&&(i.closeIconTemplate=a.first),b(a=x())&&(i.headlessTemplate=a.first),b(a=x())&&(i.templates=a)}},viewQuery:function(n,i){if(n&1&&($(Xt,5),$(Jt,5)),n&2){let o;b(o=x())&&(i.containerViewChild=o.first),b(o=x())&&(i.closeButtonViewChild=o.first)}},inputs:{appendTo:"appendTo",blockScroll:[2,"blockScroll","blockScroll",v],style:"style",styleClass:"styleClass",ariaCloseLabel:"ariaCloseLabel",autoZIndex:[2,"autoZIndex","autoZIndex",v],baseZIndex:[2,"baseZIndex","baseZIndex",R],modal:[2,"modal","modal",v],closeButtonProps:"closeButtonProps",dismissible:[2,"dismissible","dismissible",v],showCloseIcon:[2,"showCloseIcon","showCloseIcon",v],closeOnEscape:[2,"closeOnEscape","closeOnEscape",v],transitionOptions:"transitionOptions",visible:"visible",position:"position",fullScreen:"fullScreen",header:"header",maskStyle:"maskStyle",closable:[2,"closable","closable",v]},outputs:{onShow:"onShow",onHide:"onHide",visibleChange:"visibleChange"},features:[Y([Mt]),G],ngContentSelectors:en,decls:1,vars:1,consts:[["container",""],["icon",""],["role","complementary",3,"class","style","keydown",4,"ngIf"],["role","complementary",3,"keydown"],[4,"ngTemplateOutlet"],[3,"ngClass"],[3,"class",4,"ngIf"],[3,"ngClass","buttonProps","ariaLabel","onClick","keydown.enter",4,"ngIf"],[4,"ngIf"],[3,"onClick","keydown.enter","ngClass","buttonProps","ariaLabel"],["data-p-icon","times",4,"ngIf"],["data-p-icon","times"]],template:function(n,i){n&1&&(Ue(),c(0,_n,4,13,"div",2)),n&2&&d("ngIf",i.visible)},dependencies:[Q,ie,J,ee,ft,gt,W],encapsulation:2,data:{animation:[_t("panelState",[Fe("void => visible",[Le(vn)]),Fe("visible => void",[Le(Cn)])])]},changeDetection:0})}return t})();var Vt=`
    .p-checkbox {
        position: relative;
        display: inline-flex;
        user-select: none;
        vertical-align: bottom;
        width: dt('checkbox.width');
        height: dt('checkbox.height');
    }

    .p-checkbox-input {
        cursor: pointer;
        appearance: none;
        position: absolute;
        inset-block-start: 0;
        inset-inline-start: 0;
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
        opacity: 0;
        z-index: 1;
        outline: 0 none;
        border: 1px solid transparent;
        border-radius: dt('checkbox.border.radius');
    }

    .p-checkbox-box {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: dt('checkbox.border.radius');
        border: 1px solid dt('checkbox.border.color');
        background: dt('checkbox.background');
        width: dt('checkbox.width');
        height: dt('checkbox.height');
        transition:
            background dt('checkbox.transition.duration'),
            color dt('checkbox.transition.duration'),
            border-color dt('checkbox.transition.duration'),
            box-shadow dt('checkbox.transition.duration'),
            outline-color dt('checkbox.transition.duration');
        outline-color: transparent;
        box-shadow: dt('checkbox.shadow');
    }

    .p-checkbox-icon {
        transition-duration: dt('checkbox.transition.duration');
        color: dt('checkbox.icon.color');
        font-size: dt('checkbox.icon.size');
        width: dt('checkbox.icon.size');
        height: dt('checkbox.icon.size');
    }

    .p-checkbox:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
        border-color: dt('checkbox.hover.border.color');
    }

    .p-checkbox-checked .p-checkbox-box {
        border-color: dt('checkbox.checked.border.color');
        background: dt('checkbox.checked.background');
    }

    .p-checkbox-checked .p-checkbox-icon {
        color: dt('checkbox.icon.checked.color');
    }

    .p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
        background: dt('checkbox.checked.hover.background');
        border-color: dt('checkbox.checked.hover.border.color');
    }

    .p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-icon {
        color: dt('checkbox.icon.checked.hover.color');
    }

    .p-checkbox:not(.p-disabled):has(.p-checkbox-input:focus-visible) .p-checkbox-box {
        border-color: dt('checkbox.focus.border.color');
        box-shadow: dt('checkbox.focus.ring.shadow');
        outline: dt('checkbox.focus.ring.width') dt('checkbox.focus.ring.style') dt('checkbox.focus.ring.color');
        outline-offset: dt('checkbox.focus.ring.offset');
    }

    .p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:focus-visible) .p-checkbox-box {
        border-color: dt('checkbox.checked.focus.border.color');
    }

    .p-checkbox.p-invalid > .p-checkbox-box {
        border-color: dt('checkbox.invalid.border.color');
    }

    .p-checkbox.p-variant-filled .p-checkbox-box {
        background: dt('checkbox.filled.background');
    }

    .p-checkbox-checked.p-variant-filled .p-checkbox-box {
        background: dt('checkbox.checked.background');
    }

    .p-checkbox-checked.p-variant-filled:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
        background: dt('checkbox.checked.hover.background');
    }

    .p-checkbox.p-disabled {
        opacity: 1;
    }

    .p-checkbox.p-disabled .p-checkbox-box {
        background: dt('checkbox.disabled.background');
        border-color: dt('checkbox.checked.disabled.border.color');
    }

    .p-checkbox.p-disabled .p-checkbox-box .p-checkbox-icon {
        color: dt('checkbox.icon.disabled.color');
    }

    .p-checkbox-sm,
    .p-checkbox-sm .p-checkbox-box {
        width: dt('checkbox.sm.width');
        height: dt('checkbox.sm.height');
    }

    .p-checkbox-sm .p-checkbox-icon {
        font-size: dt('checkbox.icon.sm.size');
        width: dt('checkbox.icon.sm.size');
        height: dt('checkbox.icon.sm.size');
    }

    .p-checkbox-lg,
    .p-checkbox-lg .p-checkbox-box {
        width: dt('checkbox.lg.width');
        height: dt('checkbox.lg.height');
    }

    .p-checkbox-lg .p-checkbox-icon {
        font-size: dt('checkbox.icon.lg.size');
        width: dt('checkbox.icon.lg.size');
        height: dt('checkbox.icon.lg.size');
    }
`;var yn=["icon"],kn=["input"],Tn=(t,r)=>({checked:t,class:r});function wn(t,r){if(t&1&&C(0,"span",7),t&2){let e=s(3);u(e.cx("icon")),d("ngClass",e.checkboxIcon),_("data-pc-section","icon")}}function Sn(t,r){if(t&1&&(V(),C(0,"svg",8)),t&2){let e=s(3);u(e.cx("icon")),_("data-pc-section","icon")}}function Nn(t,r){if(t&1&&(E(0),c(1,wn,1,4,"span",5)(2,Sn,1,3,"svg",6),D()),t&2){let e=s(2);l(),d("ngIf",e.checkboxIcon),l(),d("ngIf",!e.checkboxIcon)}}function In(t,r){if(t&1&&(V(),C(0,"svg",9)),t&2){let e=s(2);u(e.cx("icon")),_("data-pc-section","icon")}}function Mn(t,r){if(t&1&&(E(0),c(1,Nn,3,2,"ng-container",2)(2,In,1,3,"svg",4),D()),t&2){let e=s();l(),d("ngIf",e.checked),l(),d("ngIf",e._indeterminate())}}function En(t,r){}function Dn(t,r){t&1&&c(0,En,0,0,"ng-template")}var On=`
    ${Vt}

    /* For PrimeNG */
    p-checkBox.ng-invalid.ng-dirty .p-checkbox-box,
    p-check-box.ng-invalid.ng-dirty .p-checkbox-box,
    p-checkbox.ng-invalid.ng-dirty .p-checkbox-box {
        border-color: dt('checkbox.invalid.border.color');
    }
`,Vn={root:({instance:t})=>["p-checkbox p-component",{"p-checkbox-checked p-highlight":t.checked,"p-disabled":t.$disabled(),"p-invalid":t.invalid(),"p-variant-filled":t.$variant()==="filled","p-checkbox-sm p-inputfield-sm":t.size()==="small","p-checkbox-lg p-inputfield-lg":t.size()==="large"}],box:"p-checkbox-box",input:"p-checkbox-input",icon:"p-checkbox-icon"},Ft=(()=>{class t extends re{name="checkbox";theme=On;classes=Vn;static \u0275fac=(()=>{let e;return function(i){return(e||(e=L(t)))(i||t)}})();static \u0275prov=te({token:t,factory:t.\u0275fac})}return t})();var Fn={provide:bt,useExisting:he(()=>ze),multi:!0},ze=(()=>{class t extends yt{value;binary;ariaLabelledBy;ariaLabel;tabindex;inputId;inputStyle;styleClass;inputClass;indeterminate=!1;formControl;checkboxIcon;readonly;autofocus;trueValue=!0;falseValue=!1;variant=we();size=we();onChange=new y;onFocus=new y;onBlur=new y;inputViewChild;get checked(){return this._indeterminate()?!1:this.binary?this.modelValue()===this.trueValue:nt(this.value,this.modelValue())}_indeterminate=U(void 0);checkboxIconTemplate;templates;_checkboxIconTemplate;focused=!1;_componentStyle=O(Ft);$variant=P(()=>this.variant()||this.config.inputStyle()||this.config.inputVariant());ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"icon":this._checkboxIconTemplate=e.template;break;case"checkboxicon":this._checkboxIconTemplate=e.template;break}})}ngOnChanges(e){super.ngOnChanges(e),e.indeterminate&&this._indeterminate.set(e.indeterminate.currentValue)}updateModel(e){let n,i=this.injector.get(xt,null,{optional:!0,self:!0}),o=i&&!this.formControl?i.value:this.modelValue();this.binary?(n=this._indeterminate()?this.trueValue:this.checked?this.falseValue:this.trueValue,this.writeModelValue(n),this.onModelChange(n)):(this.checked||this._indeterminate()?n=o.filter(a=>!tt(a,this.value)):n=o?[...o,this.value]:[this.value],this.onModelChange(n),this.writeModelValue(n),this.formControl&&this.formControl.setValue(n)),this._indeterminate()&&this._indeterminate.set(!1),this.onChange.emit({checked:n,originalEvent:e})}handleChange(e){this.readonly||this.updateModel(e)}onInputFocus(e){this.focused=!0,this.onFocus.emit(e)}onInputBlur(e){this.focused=!1,this.onBlur.emit(e),this.onModelTouched()}focus(){this.inputViewChild?.nativeElement.focus()}writeControlValue(e,n){n(e),this.cd.markForCheck()}static \u0275fac=(()=>{let e;return function(i){return(e||(e=L(t)))(i||t)}})();static \u0275cmp=F({type:t,selectors:[["p-checkbox"],["p-checkBox"],["p-check-box"]],contentQueries:function(n,i,o){if(n&1&&(k(o,yn,4),k(o,oe,4)),n&2){let a;b(a=x())&&(i.checkboxIconTemplate=a.first),b(a=x())&&(i.templates=a)}},viewQuery:function(n,i){if(n&1&&$(kn,5),n&2){let o;b(o=x())&&(i.inputViewChild=o.first)}},hostVars:6,hostBindings:function(n,i){n&2&&(_("data-pc-name","checkbox")("data-p-highlight",i.checked)("data-p-checked",i.checked)("data-p-disabled",i.$disabled()),u(i.cn(i.cx("root"),i.styleClass)))},inputs:{value:"value",binary:[2,"binary","binary",v],ariaLabelledBy:"ariaLabelledBy",ariaLabel:"ariaLabel",tabindex:[2,"tabindex","tabindex",R],inputId:"inputId",inputStyle:"inputStyle",styleClass:"styleClass",inputClass:"inputClass",indeterminate:[2,"indeterminate","indeterminate",v],formControl:"formControl",checkboxIcon:"checkboxIcon",readonly:[2,"readonly","readonly",v],autofocus:[2,"autofocus","autofocus",v],trueValue:"trueValue",falseValue:"falseValue",variant:[1,"variant"],size:[1,"size"]},outputs:{onChange:"onChange",onFocus:"onFocus",onBlur:"onBlur"},features:[Y([Fn,Ft]),G,ge],decls:5,vars:22,consts:[["input",""],["type","checkbox",3,"focus","blur","change","checked"],[4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["data-p-icon","minus",3,"class",4,"ngIf"],[3,"class","ngClass",4,"ngIf"],["data-p-icon","check",3,"class",4,"ngIf"],[3,"ngClass"],["data-p-icon","check"],["data-p-icon","minus"]],template:function(n,i){if(n&1){let o=I();p(0,"input",1,0),T("focus",function(g){return m(o),f(i.onInputFocus(g))})("blur",function(g){return m(o),f(i.onInputBlur(g))})("change",function(g){return m(o),f(i.handleChange(g))}),h(),p(2,"div"),c(3,Mn,3,2,"ng-container",2)(4,Dn,1,0,null,3),h()}n&2&&(B(i.inputStyle),u(i.cn(i.cx("input"),i.inputClass)),d("checked",i.checked),_("id",i.inputId)("value",i.value)("name",i.name())("tabindex",i.tabindex)("required",i.required()?"":void 0)("readonly",i.readonly?"":void 0)("disabled",i.$disabled()?"":void 0)("aria-labelledby",i.ariaLabelledBy)("aria-label",i.ariaLabel),l(2),u(i.cx("box")),l(),d("ngIf",!i.checkboxIconTemplate&&!i._checkboxIconTemplate),l(),d("ngTemplateOutlet",i.checkboxIconTemplate||i._checkboxIconTemplate)("ngTemplateOutletContext",ne(19,Tn,i.checked,i.cx("icon"))))},dependencies:[Q,ie,J,ee,W,ct,Nt],encapsulation:2,changeDetection:0})}return t})();var Pt=`
    .p-tree {
        display: block;
        background: dt('tree.background');
        color: dt('tree.color');
        padding: dt('tree.padding');
    }

    .p-tree-root-children,
    .p-tree-node-children {
        display: flex;
        list-style-type: none;
        flex-direction: column;
        margin: 0;
        gap: dt('tree.gap');
    }

    .p-tree-root-children {
        padding: 0;
        padding-block-start: dt('tree.gap');
    }

    .p-tree-node-children {
        padding: 0;
        padding-block-start: dt('tree.gap');
        padding-inline-start: dt('tree.indent');
    }

    .p-tree-node {
        padding: 0;
        outline: 0 none;
    }

    .p-tree-node-content {
        border-radius: dt('tree.node.border.radius');
        padding: dt('tree.node.padding');
        display: flex;
        align-items: center;
        outline-color: transparent;
        color: dt('tree.node.color');
        gap: dt('tree.node.gap');
        transition:
            background dt('tree.transition.duration'),
            color dt('tree.transition.duration'),
            outline-color dt('tree.transition.duration'),
            box-shadow dt('tree.transition.duration');
    }

    .p-tree-node-content[data-p-dragging] {
        outline: 1px dashed dt('primary.color');
        outline-offset: -1px;
    }

    .p-tree-node-content[data-pc-section="drag-image"] {
        background: dt('tree.background');
    }

    .p-tree-node:focus-visible > .p-tree-node-content {
        box-shadow: dt('tree.node.focus.ring.shadow');
        outline: dt('tree.node.focus.ring.width') dt('tree.node.focus.ring.style') dt('tree.node.focus.ring.color');
        outline-offset: dt('tree.node.focus.ring.offset');
    }

    .p-tree-node-content.p-tree-node-selectable:not(.p-tree-node-selected):hover {
        background: dt('tree.node.hover.background');
        color: dt('tree.node.hover.color');
    }

    .p-tree-node-content.p-tree-node-selectable:not(.p-tree-node-selected):hover .p-tree-node-icon {
        color: dt('tree.node.icon.hover.color');
    }

    .p-tree-node-content.p-tree-node-selected {
        background: dt('tree.node.selected.background');
        color: dt('tree.node.selected.color');
    }

    .p-tree-node-content.p-tree-node-selected .p-tree-node-toggle-button {
        color: inherit;
    }

    .p-tree-node-content.p-tree-node-dragover {
        background: dt('tree.node.hover.background');
        color: dt('tree.node.hover.color');
    }

    .p-tree-node-drop-point {
		outline: 1px solid dt('primary.color');
	}

    .p-tree-node-toggle-button {
        cursor: pointer;
        user-select: none;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
        flex-shrink: 0;
        width: dt('tree.node.toggle.button.size');
        height: dt('tree.node.toggle.button.size');
        color: dt('tree.node.toggle.button.color');
        border: 0 none;
        background: transparent;
        border-radius: dt('tree.node.toggle.button.border.radius');
        transition:
            background dt('tree.transition.duration'),
            color dt('tree.transition.duration'),
            border-color dt('tree.transition.duration'),
            outline-color dt('tree.transition.duration'),
            box-shadow dt('tree.transition.duration');
        outline-color: transparent;
        padding: 0;
    }

    .p-tree-node-toggle-button:enabled:hover {
        background: dt('tree.node.toggle.button.hover.background');
        color: dt('tree.node.toggle.button.hover.color');
    }

    .p-tree-node-content.p-tree-node-selected .p-tree-node-toggle-button:hover {
        background: dt('tree.node.toggle.button.selected.hover.background');
        color: dt('tree.node.toggle.button.selected.hover.color');
    }

    .p-tree-root {
        overflow: auto;
    }

    .p-tree-node-selectable {
        cursor: pointer;
        user-select: none;
    }

    .p-tree-node-leaf > .p-tree-node-content .p-tree-node-toggle-button {
        visibility: hidden;
    }

    .p-tree-node-icon {
        color: dt('tree.node.icon.color');
        transition: color dt('tree.transition.duration');
    }

    .p-tree-node-content.p-tree-node-selected .p-tree-node-icon {
        color: dt('tree.node.icon.selected.color');
    }

    .p-tree-filter {
        margin: dt('tree.filter.margin');
    }

    .p-tree-filter-input {
        width: 100%;
    }

    .p-tree-loading {
        position: relative;
        height: 100%;
    }

    .p-tree-loading-icon {
        font-size: dt('tree.loading.icon.size');
        width: dt('tree.loading.icon.size');
        height: dt('tree.loading.icon.size');
    }

    .p-tree .p-tree-mask {
        position: absolute;
        z-index: 1;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .p-tree-flex-scrollable {
        display: flex;
        flex: 1;
        height: 100%;
        flex-direction: column;
    }

    .p-tree-flex-scrollable .p-tree-root {
        flex: 1;
    }
`;var At=t=>({height:t}),Pn=(t,r)=>({$implicit:t,loading:r}),Ln=(t,r,e)=>({$implicit:t,partialSelected:r,class:e}),zt=t=>({$implicit:t});function An(t,r){if(t&1&&C(0,"div"),t&2){let e=s(2);u(e.cx("dropPoint")),_("aria-hidden",!0)}}function zn(t,r){if(t&1&&(V(),C(0,"svg",12)),t&2){let e=s(4);u(e.cx("nodeToggleIcon"))}}function Bn(t,r){if(t&1&&(V(),C(0,"svg",13)),t&2){let e=s(4);u(e.cx("nodeToggleIcon"))}}function Rn(t,r){if(t&1&&(E(0),c(1,zn,1,2,"svg",10)(2,Bn,1,2,"svg",11),D()),t&2){let e=s(3);l(),d("ngIf",!e.node.expanded),l(),d("ngIf",e.node.expanded)}}function Qn(t,r){if(t&1&&(E(0),V(),C(1,"svg",14),D()),t&2){let e=s(3);l(),u(e.cx("nodeToggleIcon"))}}function Hn(t,r){if(t&1&&(E(0),c(1,Rn,3,2,"ng-container",6)(2,Qn,2,2,"ng-container",6),D()),t&2){let e=s(2);l(),d("ngIf",!e.node.loading),l(),d("ngIf",e.loadingMode==="icon"&&e.node.loading)}}function Un(t,r){}function jn(t,r){t&1&&c(0,Un,0,0,"ng-template")}function qn(t,r){if(t&1&&(p(0,"span"),c(1,jn,1,0,null,15),h()),t&2){let e=s(2);u(e.cx("nodeToggleIcon")),l(),d("ngTemplateOutlet",e.tree.togglerIconTemplate||e.tree._togglerIconTemplate)("ngTemplateOutletContext",ne(4,Pn,e.node.expanded,e.node.loading))}}function $n(t,r){}function Gn(t,r){t&1&&c(0,$n,0,0,"ng-template")}function Kn(t,r){if(t&1&&c(0,Gn,1,0,null,15),t&2){let e=s(4);d("ngTemplateOutlet",e.tree.checkboxIconTemplate||e.tree._checkboxIconTemplate)("ngTemplateOutletContext",$e(2,Ln,e.isSelected(),e.node.partialSelected,e.cx("nodeCheckbox")))}}function Wn(t,r){t&1&&(E(0),c(1,Kn,1,6,"ng-template",null,0,X),D())}function Zn(t,r){if(t&1){let e=I();p(0,"p-checkbox",16),T("click",function(i){return m(e),f(i.preventDefault())}),c(1,Wn,3,0,"ng-container",6),h()}if(t&2){let e=s(2);d("ngModel",e.isSelected())("styleClass",e.cx("nodeCheckbox"))("binary",!0)("indeterminate",e.node.partialSelected)("disabled",e.node.selectable===!1)("variant",(e.tree==null?null:e.tree.config.inputStyle())==="filled"||(e.tree==null?null:e.tree.config.inputVariant())==="filled"?"filled":"outlined")("tabindex",-1),_("data-p-partialchecked",e.node.partialSelected),l(),d("ngIf",e.tree.checkboxIconTemplate||e.tree._checkboxIconTemplate)}}function Yn(t,r){if(t&1&&C(0,"span"),t&2){let e=s(2);u(e.getIcon())}}function Xn(t,r){if(t&1&&(p(0,"span"),M(1),h()),t&2){let e=s(2);l(),K(e.node.label)}}function Jn(t,r){t&1&&z(0)}function ei(t,r){if(t&1&&(p(0,"span"),c(1,Jn,1,0,"ng-container",15),h()),t&2){let e=s(2);l(),d("ngTemplateOutlet",e.tree.getTemplateForNode(e.node))("ngTemplateOutletContext",Z(2,zt,e.node))}}function ti(t,r){if(t&1&&C(0,"div"),t&2){let e=s(2);u(e.cx("dropPoint")),_("aria-hidden",!0)}}function ni(t,r){if(t&1&&C(0,"p-treeNode",19),t&2){let e=r.$implicit,n=r.first,i=r.last,o=r.index,a=s(3);d("node",e)("parentNode",a.node)("firstChild",n)("lastChild",i)("index",o)("itemSize",a.itemSize)("level",a.level+1)("loadingMode",a.loadingMode)}}function ii(t,r){if(t&1&&(p(0,"ul",17),c(1,ni,1,8,"p-treeNode",18),h()),t&2){let e=s(2);u(e.cx("nodeChildren")),l(),d("ngForOf",e.node.children)("ngForTrackBy",e.tree.trackBy.bind(e))}}function oi(t,r){if(t&1){let e=I();p(0,"li",2),T("keydown",function(i){m(e);let o=s();return f(o.onKeyDown(i))}),w(1,An,1,3,"div",3),p(2,"div",4),T("click",function(i){m(e);let o=s();return f(o.onNodeClick(i))})("contextmenu",function(i){m(e);let o=s();return f(o.onNodeRightClick(i))})("dblclick",function(i){m(e);let o=s();return f(o.onNodeDblClick(i))})("touchend",function(){m(e);let i=s();return f(i.onNodeTouchEnd())})("drop",function(i){m(e);let o=s();return f(o.onNodeDrop(i))})("dragstart",function(i){m(e);let o=s();return f(o.onNodeDragStart(i))})("dragover",function(i){m(e);let o=s();return f(o.onNodeDragOver(i))})("dragleave",function(i){m(e);let o=s();return f(o.onNodeDragLeave(i))})("dragend",function(i){m(e);let o=s();return f(o.onNodeDragEnd(i))}),p(3,"button",5),T("click",function(i){m(e);let o=s();return f(o.toggle(i))}),c(4,Hn,3,2,"ng-container",6)(5,qn,2,7,"span",7),h(),c(6,Zn,2,9,"p-checkbox",8)(7,Yn,1,2,"span",7),p(8,"span"),c(9,Xn,2,1,"span",6)(10,ei,2,4,"span",6),h()(),w(11,ti,1,3,"div",3),c(12,ii,2,4,"ul",9),h()}if(t&2){let e=s();B(e.node.style),u(e.cn(e.cx("node"),e.node.styleClass)),d("ngStyle",Z(33,At,e.itemSize+"px")),_("aria-label",e.node.label)("aria-checked",e.checked)("aria-setsize",e.node.children?e.node.children.length:0)("aria-selected",e.selected)("aria-expanded",e.node.expanded)("aria-posinset",e.index+1)("aria-level",e.level+1)("tabindex",e.index===0?0:-1)("data-id",e.node.key),l(),S(e.isPrevDropPointActive()?1:-1),l(),u(e.cx("nodeContent")),ke("padding-left",e.level*e.indentation+"rem"),d("draggable",e.tree.draggableNodes),l(),u(e.cx("nodeToggleButton")),_("data-pc-section","toggler"),l(),d("ngIf",!e.tree.togglerIconTemplate&&!e.tree._togglerIconTemplate),l(),d("ngIf",e.tree.togglerIconTemplate||e.tree._togglerIconTemplate),l(),d("ngIf",e.tree.selectionMode=="checkbox"),l(),d("ngIf",e.node.icon||e.node.expandedIcon||e.node.collapsedIcon),l(),u(e.cx("nodeLabel")),l(),d("ngIf",!e.tree.getTemplateForNode(e.node)),l(),d("ngIf",e.tree.getTemplateForNode(e.node)),l(),S(e.isNextDropPointActive()?11:-1),l(),d("ngIf",!e.tree.virtualScroll&&e.node.children&&e.node.expanded)}}var Lt=["filter"],ri=["node"],ai=["header"],li=["footer"],si=["loader"],di=["empty"],ci=["togglericon"],pi=["checkboxicon"],hi=["loadingicon"],ui=["filtericon"],gi=["scroller"],mi=["wrapper"],fi=["content"],_i=t=>({options:t});function bi(t,r){if(t&1&&C(0,"i"),t&2){let e=s(2);u(e.cn(e.cx("loadingIcon"),"pi-spin"+e.loadingIcon))}}function xi(t,r){if(t&1&&(V(),C(0,"svg",12)),t&2){let e=s(3);u(e.cx("loadingIcon"))}}function vi(t,r){}function Ci(t,r){t&1&&c(0,vi,0,0,"ng-template")}function yi(t,r){if(t&1&&(p(0,"span"),c(1,Ci,1,0,null,8),h()),t&2){let e=s(3);u(e.cx("loadingIcon")),l(),d("ngTemplateOutlet",e.loadingIconTemplate||e._loadingIconTemplate)}}function ki(t,r){if(t&1&&(E(0),c(1,xi,1,2,"svg",11)(2,yi,2,3,"span",7),D()),t&2){let e=s(2);l(),d("ngIf",!e.loadingIconTemplate&&!e._loadingIconTemplate),l(),d("ngIf",e.loadingIconTemplate||e._loadingIconTemplate)}}function Ti(t,r){if(t&1&&(p(0,"div"),c(1,bi,1,2,"i",7)(2,ki,3,2,"ng-container",10),h()),t&2){let e=s();u(e.cx("mask")),l(),d("ngIf",e.loadingIcon),l(),d("ngIf",!e.loadingIcon)}}function wi(t,r){t&1&&z(0)}function Si(t,r){t&1&&z(0)}function Ni(t,r){if(t&1&&c(0,Si,1,0,"ng-container",13),t&2){let e=s();d("ngTemplateOutlet",e.filterTemplate||e._filterTemplate)("ngTemplateOutletContext",Z(2,zt,e.filterOptions))}}function Ii(t,r){if(t&1&&(V(),C(0,"svg",16)),t&2){let e=s(3);u(e.cx("filterIcon"))}}function Mi(t,r){}function Ei(t,r){t&1&&c(0,Mi,0,0,"ng-template")}function Di(t,r){if(t&1&&(p(0,"span"),c(1,Ei,1,0,null,8),h()),t&2){let e=s(3);u(e.cx("filterIcon")),l(),d("ngTemplateOutlet",e.filterIconTemplate||e._filterIconTemplate)}}function Oi(t,r){if(t&1){let e=I();p(0,"p-iconfield")(1,"input",14,0),T("keydown.enter",function(i){return m(e),f(i.preventDefault())})("input",function(i){m(e);let o=s(2);return f(o._filter(i.target==null?null:i.target.value))}),h(),p(3,"p-inputicon"),c(4,Ii,1,2,"svg",15)(5,Di,2,3,"span",7),h()()}if(t&2){let e=s(2);u(e.cx("pcFilterContainer")),l(),u(e.cx("pcFilterInput")),d("pAutoFocus",e.filterInputAutoFocus),_("placeholder",e.filterPlaceholder),l(3),d("ngIf",!e.filterIconTemplate&&!e._filterIconTemplate),l(),d("ngIf",e.filterIconTemplate||e._filterIconTemplate)}}function Vi(t,r){if(t&1&&c(0,Oi,6,8,"p-iconfield",7),t&2){let e=s();d("ngIf",e.filter)}}function Fi(t,r){if(t&1&&C(0,"p-treeNode",22,3),t&2){let e=r.$implicit,n=r.first,i=r.last,o=r.index,a=s(2).options,g=s(3);d("level",e.level)("rowNode",e)("node",e.node)("parentNode",e.parent)("firstChild",n)("lastChild",i)("index",g.getIndex(a,o))("itemSize",a.itemSize)("indentation",g.indentation)("loadingMode",g.loadingMode)}}function Pi(t,r){if(t&1&&(p(0,"ul",20,2),c(2,Fi,2,10,"p-treeNode",21),h()),t&2){let e=s(),n=e.$implicit,i=e.options,o=s(3);B(i.contentStyle),u(o.cx("rootChildren")),d("ngClass",i.contentStyleClass),_("aria-label",o.ariaLabel)("aria-labelledby",o.ariaLabelledBy),l(2),d("ngForOf",n)("ngForTrackBy",o.trackBy)}}function Li(t,r){if(t&1&&c(0,Pi,3,9,"ul",19),t&2){let e=r.$implicit;d("ngIf",e)}}function Ai(t,r){t&1&&z(0)}function zi(t,r){if(t&1&&c(0,Ai,1,0,"ng-container",13),t&2){let e=r.options,n=s(4);d("ngTemplateOutlet",n.loaderTemplate||n._loaderTemplate)("ngTemplateOutletContext",Z(2,_i,e))}}function Bi(t,r){t&1&&(E(0),c(1,zi,1,4,"ng-template",null,4,X),D())}function Ri(t,r){if(t&1){let e=I();p(0,"p-scroller",18,1),T("onScroll",function(i){m(e);let o=s(2);return f(o.onScroll.emit(i))})("onScrollIndexChange",function(i){m(e);let o=s(2);return f(o.onScrollIndexChange.emit(i))})("onLazyLoad",function(i){m(e);let o=s(2);return f(o.onLazyLoad.emit(i))}),c(2,Li,1,1,"ng-template",null,2,X)(4,Bi,3,0,"ng-container",10),h()}if(t&2){let e=s(2);B(Z(10,At,e.scrollHeight!=="flex"?e.scrollHeight:void 0)),d("items",e.serializedValue)("tabindex",-1)("styleClass",e.cx("wrapper"))("scrollHeight",e.scrollHeight!=="flex"?void 0:"100%")("itemSize",e.virtualScrollItemSize)("lazy",e.lazy)("options",e.virtualScrollOptions),l(4),d("ngIf",e.loaderTemplate||e._loaderTemplate)}}function Qi(t,r){if(t&1&&C(0,"p-treeNode",26),t&2){let e=r.$implicit,n=r.first,i=r.last,o=r.index,a=s(4);d("node",e)("firstChild",n)("lastChild",i)("index",o)("level",0)("loadingMode",a.loadingMode)}}function Hi(t,r){if(t&1&&(p(0,"ul",24,2),c(2,Qi,1,6,"p-treeNode",25),h()),t&2){let e=s(3);u(e.cx("rootChildren")),_("aria-label",e.ariaLabel)("aria-labelledby",e.ariaLabelledBy),l(2),d("ngForOf",e.getRootNode())("ngForTrackBy",e.trackBy.bind(e))}}function Ui(t,r){if(t&1&&(E(0),p(1,"div",null,5),c(3,Hi,3,6,"ul",23),h(),D()),t&2){let e=s(2);l(),u(e.cx("wrapper")),ke("max-height",e.scrollHeight),l(2),d("ngIf",e.getRootNode())}}function ji(t,r){if(t&1&&(E(0),c(1,Ri,5,12,"p-scroller",17)(2,Ui,4,5,"ng-container",10),D()),t&2){let e=s();l(),d("ngIf",e.virtualScroll),l(),d("ngIf",!e.virtualScroll)}}function qi(t,r){if(t&1&&(E(0),M(1),D()),t&2){let e=s(2);l(),fe(" ",e.emptyMessageLabel," ")}}function $i(t,r){}function Gi(t,r){t&1&&c(0,$i,0,0,"ng-template",null,6,X)}function Ki(t,r){if(t&1&&(p(0,"div"),c(1,qi,2,1,"ng-container",27)(2,Gi,2,0,null,8),h()),t&2){let e=s();u(e.cx("emptyMessage")),l(),d("ngIf",!e.emptyMessageTemplate&&!e._emptyMessageTemplate)("ngIfElse",e.emptyFilter),l(),d("ngTemplateOutlet",e.emptyMessageTemplate||e._emptyMessageTemplate)}}function Wi(t,r){t&1&&z(0)}var Zi={root:({instance:t})=>["p-tree p-component",{"p-tree-selectable":t.selectionMode!=null,"p-tree-loading":t.loading,"p-tree-flex-scrollable":t.scrollHeight==="flex","p-tree-node-dragover":t.dragHover}],mask:"p-tree-mask p-overlay-mask",loadingIcon:"p-tree-loading-icon",pcFilterInput:"p-tree-filter-input",wrapper:"p-tree-root",rootChildren:"p-tree-root-children",node:({instance:t})=>({"p-tree-node":!0,"p-tree-node-leaf":t.isLeaf()}),nodeContent:({instance:t})=>({"p-tree-node-content":!0,"p-tree-node-selectable":t.selectable,"p-tree-node-dragover":t.isNodeDropActive(),"p-tree-node-selected":t.selectionMode==="checkbox"&&t.tree.highlightOnSelect?t.checked:t.selected}),nodeToggleButton:"p-tree-node-toggle-button",nodeToggleIcon:"p-tree-node-toggle-icon",nodeCheckbox:"p-tree-node-checkbox",nodeIcon:"p-tree-node-icon",nodeLabel:"p-tree-node-label",nodeChildren:"p-tree-node-children",emptyMessage:"p-tree-empty-message",dropPoint:"p-tree-node-drop-point"},xe=(()=>{class t extends re{name="tree";theme=Pt;classes=Zi;static \u0275fac=(()=>{let e;return function(i){return(e||(e=L(t)))(i||t)}})();static \u0275prov=te({token:t,factory:t.\u0275fac})}return t})();var Yi=(()=>{class t extends de{static ICON_CLASS="p-tree-node-icon ";rowNode;node;parentNode;root;index;firstChild;lastChild;level;indentation;itemSize;loadingMode;tree=O(he(()=>ve));timeout;isPrevDropPointHovered=U(!1);isNextDropPointHovered=U(!1);isNodeDropHovered=U(!1);isPrevDropPointActive=P(()=>this.isPrevDropPointHovered()&&this.isDroppable());isNextDropPointActive=P(()=>this.isNextDropPointHovered()&&this.isDroppable());isNodeDropActive=P(()=>this.isNodeDropHovered()&&this.isNodeDroppable());dropPosition=P(()=>this.isPrevDropPointActive()?-1:this.isNextDropPointActive()?1:0);_componentStyle=O(xe);get selected(){return this.tree.selectionMode==="single"||this.tree.selectionMode==="multiple"?this.isSelected():void 0}get checked(){return this.tree.selectionMode==="checkbox"?this.isSelected():void 0}get nodeClass(){return this.tree._componentStyle.classes.node({instance:this})}get selectable(){return this.node?.selectable===!1?!1:this.tree?.selectionMode!=null}get subNodes(){return this.node?.parent?this.node.parent.children:this.tree.value}ngOnInit(){super.ngOnInit(),this.node.parent=this.parentNode;let n=this.tree.el.nativeElement.closest("p-dialog");this.parentNode&&!n&&(this.setAllNodesTabIndexes(),this.tree.syncNodeOption(this.node,this.tree.value,"parent",this.tree.getNodeWithKey(this.parentNode.key,this.tree.value)))}getIcon(){let e;return this.node.icon?e=this.node.icon:e=this.node.expanded&&this.node.children&&this.node.children?.length?this.node.expandedIcon:this.node.collapsedIcon,t.ICON_CLASS+" "+e+" p-tree-node-icon"}isLeaf(){return this.tree.isNodeLeaf(this.node)}isSelected(){return this.tree.isSelected(this.node)}isSameNode(e){return e.currentTarget&&(e.currentTarget.isSameNode(e.target)||e.currentTarget.isSameNode(e.target.closest('[role="treeitem"]')))}isDraggable(){return this.tree.draggableNodes}isDroppable(){return this.tree.droppableNodes&&this.tree.allowDrop(this.tree.dragNode,this.node,this.tree.dragNodeScope)}isNodeDroppable(){return this.node?.droppable!==!1&&this.isDroppable()}isNodeDraggable(){return this.node?.draggable!==!1&&this.isDraggable()}toggle(e){this.node.expanded?this.collapse(e):this.expand(e),e.stopPropagation()}expand(e){this.node.expanded=!0,this.tree.virtualScroll&&(this.tree.updateSerializedValue(),this.focusVirtualNode()),this.tree.onNodeExpand.emit({originalEvent:e,node:this.node})}collapse(e){this.node.expanded=!1,this.tree.virtualScroll&&(this.tree.updateSerializedValue(),this.focusVirtualNode()),this.tree.onNodeCollapse.emit({originalEvent:e,node:this.node})}onNodeClick(e){this.tree.onNodeClick(e,this.node)}onNodeKeydown(e){e.key==="Enter"&&this.tree.onNodeClick(e,this.node)}onNodeTouchEnd(){this.tree.onNodeTouchEnd()}onNodeRightClick(e){this.tree.onNodeRightClick(e,this.node)}onNodeDblClick(e){this.tree.onNodeDblClick(e,this.node)}insertNodeOnDrop(){let{dragNode:e,dragNodeIndex:n,dragNodeSubNodes:i}=this.tree;if(!this.node||n==null||!e||!i)return;let o=this.dropPosition(),a=this.subNodes||[];if(i.splice(n,1),o<0){let g=this.index||0,N=i===a?n>g?g:g-1:g;a.splice(N,0,e)}else o>0?a.push(e):(this.node.children=this.node.children||[],this.node.children.push(e));this.tree.dragDropService.stopDrag({node:e,subNodes:a,index:n})}onNodeDrop(e){if(e.preventDefault(),e.stopPropagation(),this.isDroppable()){let{dragNode:n}=this.tree,i=this.dropPosition();(i!==0||i===0&&this.isNodeDroppable())&&(this.tree.validateDrop?this.tree.onNodeDrop.emit({originalEvent:e,dragNode:n,dropNode:this.node,index:this.index,accept:()=>{this.insertNodeOnDrop()}}):(this.insertNodeOnDrop(),this.tree.onNodeDrop.emit({originalEvent:e,dragNode:n,dropNode:this.node,index:this.index})))}this.isPrevDropPointHovered.set(!1),this.isNextDropPointHovered.set(!1),this.isNodeDropHovered.set(!1)}onNodeDragStart(e){if(this.isNodeDraggable()){e.dataTransfer?.setData("text","data");let n=e.currentTarget,i=n.cloneNode(!0),o=i.querySelector('[data-pc-section="toggler"]'),a=i.querySelector('[data-pc-name="checkbox"]');n.setAttribute("data-p-dragging","true"),i.style.width=We(n)+"px",i.style.height=Je(n)+"px",i.setAttribute("data-pc-section","drag-image"),o.style.visibility="hidden",a?.remove(),document.body.appendChild(i),e.dataTransfer?.setDragImage(i,0,0),setTimeout(()=>document.body.removeChild(i),0),this.tree.dragDropService.startDrag({tree:this,node:this.node,subNodes:this.subNodes,index:this.index,scope:this.tree.draggableScope})}else e.preventDefault()}onNodeDragOver(e){if(e.dataTransfer.dropEffect="move",this.isDroppable()){let i=e.currentTarget.getBoundingClientRect(),o=e.clientY-i.top;this.isPrevDropPointHovered.set(!1),this.isNextDropPointHovered.set(!1),this.isNodeDropHovered.set(!1),o<i.height*.25?this.isPrevDropPointHovered.set(!0):o>i.height*.75?this.isNextDropPointHovered.set(!0):this.isNodeDroppable()&&this.isNodeDropHovered.set(!0)}this.tree.droppableNodes&&(e.preventDefault(),e.stopPropagation())}onNodeDragLeave(){this.isPrevDropPointHovered.set(!1),this.isNextDropPointHovered.set(!1),this.isNodeDropHovered.set(!1)}onNodeDragEnd(e){e.currentTarget?.removeAttribute("data-p-dragging"),this.tree.dragDropService.stopDrag({node:this.node,subNodes:this.subNodes,index:this.index})}onKeyDown(e){if(!(!this.isSameNode(e)||this.tree.contextMenu&&this.tree.contextMenu.containerViewChild?.nativeElement.style.display==="block"))switch(e.code){case"ArrowDown":this.onArrowDown(e);break;case"ArrowUp":this.onArrowUp(e);break;case"ArrowRight":this.onArrowRight(e);break;case"ArrowLeft":this.onArrowLeft(e);break;case"Enter":case"Space":case"NumpadEnter":this.onEnter(e);break;case"Tab":this.setAllNodesTabIndexes();break;default:break}}onArrowUp(e){let n=e.target.getAttribute("data-pc-section")==="toggler"?e.target.closest('[role="treeitem"]'):e.target.parentElement;if(n?.previousElementSibling)this.focusRowChange(n,n.previousElementSibling,this.findLastVisibleDescendant(n.previousElementSibling));else{let i=this.getParentNodeElement(n);i&&this.focusRowChange(n,i)}e.preventDefault()}onArrowDown(e){let n=e.target.getAttribute("data-pc-section")==="toggler"?e.target.closest('[role="treeitem"]'):e.target,i=n?.children[1];if(i&&i.children.length>0)this.focusRowChange(n,i.children[0]);else if(n?.parentElement?.nextElementSibling)this.focusRowChange(n,n.parentElement.nextElementSibling);else{let o=this.findNextSiblingOfAncestor(n?.parentElement);o&&this.focusRowChange(n,o)}e.preventDefault()}onArrowRight(e){!this.node?.expanded&&!this.tree.isNodeLeaf(this.node)&&(this.expand(e),e.currentTarget.tabIndex=-1,setTimeout(()=>{this.onArrowDown(e)},1)),e.preventDefault()}onArrowLeft(e){let n=e.target.getAttribute("data-pc-section")==="toggler"?e.target.closest('[role="treeitem"]'):e.target;if(this.level===0&&!this.node?.expanded)return!1;if(this.node?.expanded){this.collapse(e);return}let i=this.getParentNodeElement(n?.parentElement);i&&this.focusRowChange(e.currentTarget,i),e.preventDefault()}onEnter(e){this.tree.onNodeClick(e,this.node),this.setTabIndexForSelectionMode(e,this.tree.nodeTouched),e.preventDefault()}setAllNodesTabIndexes(){let e=Ie(this.tree.el.nativeElement,".p-tree-node"),n=[...e].some(i=>i.getAttribute("aria-selected")==="true"||i.getAttribute("aria-checked")==="true");if([...e].forEach(i=>{i.tabIndex=-1}),n){let i=[...e].filter(o=>o.getAttribute("aria-selected")==="true"||o.getAttribute("aria-checked")==="true");i[0].tabIndex=0;return}e.length&&([...e][0].tabIndex=0)}setTabIndexForSelectionMode(e,n){if(this.tree.selectionMode!==null){let i=[...Ie(this.tree.el.nativeElement,'[role="treeitem"]')];e.currentTarget.tabIndex=n===!1?-1:0,i.every(o=>o.tabIndex===-1)&&(i[0].tabIndex=0)}}findNextSiblingOfAncestor(e){let n=this.getParentNodeElement(e);return n?n.nextElementSibling?n.nextElementSibling:this.findNextSiblingOfAncestor(n):null}findLastVisibleDescendant(e){let i=Array.from(e.children).find(o=>_e(o,"p-tree-node"))?.children[1];if(i&&i.children.length>0){let o=i.children[i.children.length-1];return this.findLastVisibleDescendant(o)}else return e}getParentNodeElement(e){let n=e.parentElement?.parentElement?.parentElement;return n?.tagName==="P-TREENODE"?n:null}focusNode(e){this.tree.droppableNodes?e.children[1].focus():e.children[0].focus()}focusRowChange(e,n,i){e.tabIndex="-1",n.children[0].tabIndex="0",this.focusNode(i||n)}focusVirtualNode(){this.timeout=setTimeout(()=>{let e=Ye(this.tree?.contentViewChild?.nativeElement,`[data-id="${this.node?.key??this.node?.data}"]`);Xe(e)},1)}static \u0275fac=(()=>{let e;return function(i){return(e||(e=L(t)))(i||t)}})();static \u0275cmp=F({type:t,selectors:[["p-treeNode"]],inputs:{rowNode:"rowNode",node:"node",parentNode:"parentNode",root:[2,"root","root",v],index:[2,"index","index",R],firstChild:[2,"firstChild","firstChild",v],lastChild:[2,"lastChild","lastChild",v],level:[2,"level","level",R],indentation:[2,"indentation","indentation",R],itemSize:[2,"itemSize","itemSize",R],loadingMode:"loadingMode"},features:[Y([xe]),G],decls:1,vars:1,consts:[["icon",""],["role","treeitem",3,"class","ngStyle","style"],["role","treeitem",3,"keydown","ngStyle"],[3,"class"],[3,"click","contextmenu","dblclick","touchend","drop","dragstart","dragover","dragleave","dragend","draggable"],["type","button","pRipple","","tabindex","-1",3,"click"],[4,"ngIf"],[3,"class",4,"ngIf"],[3,"ngModel","styleClass","binary","indeterminate","disabled","variant","tabindex","click",4,"ngIf"],["role","group",3,"class",4,"ngIf"],["data-p-icon","chevron-right",3,"class",4,"ngIf"],["data-p-icon","chevron-down",3,"class",4,"ngIf"],["data-p-icon","chevron-right"],["data-p-icon","chevron-down"],["data-p-icon","spinner","spin",""],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"click","ngModel","styleClass","binary","indeterminate","disabled","variant","tabindex"],["role","group"],[3,"node","parentNode","firstChild","lastChild","index","itemSize","level","loadingMode",4,"ngFor","ngForOf","ngForTrackBy"],[3,"node","parentNode","firstChild","lastChild","index","itemSize","level","loadingMode"]],template:function(n,i){n&1&&w(0,oi,13,35,"li",1),n&2&&S(i.node?0:-1)},dependencies:[t,Q,Se,J,ee,Ge,mt,ze,Ae,vt,Ct,ht,pt,De,W],encapsulation:2})}return t})(),ve=(()=>{class t extends de{dragDropService;value;selectionMode;loadingMode="mask";selection;styleClass;contextMenu;draggableScope;droppableScope;draggableNodes;droppableNodes;metaKeySelection=!1;propagateSelectionUp=!0;propagateSelectionDown=!0;loading;loadingIcon;emptyMessage="";ariaLabel;togglerAriaLabel;ariaLabelledBy;validateDrop;filter;filterInputAutoFocus=!1;filterBy="label";filterMode="lenient";filterOptions;filterPlaceholder;filteredNodes;filterLocale;scrollHeight;lazy=!1;virtualScroll;virtualScrollItemSize;virtualScrollOptions;indentation=1.5;_templateMap;trackBy=(e,n)=>n;highlightOnSelect=!1;selectionChange=new y;onNodeSelect=new y;onNodeUnselect=new y;onNodeExpand=new y;onNodeCollapse=new y;onNodeContextMenuSelect=new y;onNodeDoubleClick=new y;onNodeDrop=new y;onLazyLoad=new y;onScroll=new y;onScrollIndexChange=new y;onFilter=new y;filterTemplate;nodeTemplate;headerTemplate;footerTemplate;loaderTemplate;emptyMessageTemplate;togglerIconTemplate;checkboxIconTemplate;loadingIconTemplate;filterIconTemplate;filterViewChild;scroller;wrapperViewChild;contentViewChild;templates;_headerTemplate;_emptyMessageTemplate;_footerTemplate;_loaderTemplate;_togglerIconTemplate;_checkboxIconTemplate;_loadingIconTemplate;_filterIconTemplate;_filterTemplate;ngAfterContentInit(){this.templates.length&&(this._templateMap={}),this.templates.forEach(e=>{switch(e.getType()){case"header":this._headerTemplate=e.template;break;case"empty":this._emptyMessageTemplate=e.template;break;case"footer":this._footerTemplate=e.template;break;case"loader":this._loaderTemplate=e.template;break;case"togglericon":this._togglerIconTemplate=e.template;break;case"checkboxicon":this._checkboxIconTemplate=e.template;break;case"loadingicon":this._loadingIconTemplate=e.template;break;case"filtericon":this._filterIconTemplate=e.template;break;case"filter":this._filterTemplate=e.template;break;default:this._templateMap[e.name]=e.template;break}})}serializedValue;nodeTouched;dragNodeTree;dragNode;dragNodeSubNodes;dragNodeIndex;dragNodeScope;dragHover;dragStartSubscription;dragStopSubscription;_componentStyle=O(xe);handleDropEvent(e){this.onDrop(e)}handleDragOverEvent(e){this.onDragOver(e)}handleDragEnterEvent(){this.onDragEnter()}handleDragLeaveEvent(e){this.onDragLeave(e)}constructor(e){super(),this.dragDropService=e}ngOnInit(){super.ngOnInit(),this.filterBy&&(this.filterOptions={filter:e=>this._filter(e),reset:()=>this.resetFilter()}),this.droppableNodes&&(this.dragStartSubscription=this.dragDropService.dragStart$.subscribe(e=>{this.dragNodeTree=e.tree,this.dragNode=e.node,this.dragNodeSubNodes=e.subNodes,this.dragNodeIndex=e.index,this.dragNodeScope=e.scope}),this.dragStopSubscription=this.dragDropService.dragStop$.subscribe(e=>{this.dragNodeTree=null,this.dragNode=null,this.dragNodeSubNodes=null,this.dragNodeIndex=null,this.dragNodeScope=null,this.dragHover=!1}))}ngOnChanges(e){super.ngOnChanges(e),e.value&&(this.updateSerializedValue(),this.hasFilterActive()&&this._filter(this.filterViewChild?.nativeElement?.value))}get emptyMessageLabel(){return this.emptyMessage||this.config.getTranslation(it.EMPTY_MESSAGE)}updateSerializedValue(){this.serializedValue=[],this.serializeNodes(null,this.getRootNode(),0,!0)}serializeNodes(e,n,i,o){if(n&&n.length)for(let a of n){a.parent=e;let g={node:a,parent:e,level:i,visible:o&&(e?e.expanded:!0)};this.serializedValue.push(g),g.visible&&a.expanded&&this.serializeNodes(a,a.children,i+1,g.visible)}}onNodeClick(e,n){let i=e.target;if(!(_e(i,"p-tree-toggler")||_e(i,"p-tree-toggler-icon"))){if(this.selectionMode){if(n.selectable===!1){n.style="--p-focus-ring-color: none;";return}else n.style?.includes("--p-focus-ring-color")||(n.style=n.style?`${n.style}--p-focus-ring-color: var(--primary-color)`:"--p-focus-ring-color: var(--primary-color)");if(this.hasFilteredNodes()&&(n=this.getNodeWithKey(n.key,this.filteredNodes),!n))return;let o=this.findIndexInSelection(n),a=o>=0;if(this.isCheckboxSelectionMode())a?(this.propagateSelectionDown?this.propagateDown(n,!1):this.selection=this.selection.filter((g,N)=>N!=o),this.propagateSelectionUp&&n.parent&&this.propagateUp(n.parent,!1),this.selectionChange.emit(this.selection),this.onNodeUnselect.emit({originalEvent:e,node:n})):(this.propagateSelectionDown?this.propagateDown(n,!0):this.selection=[...this.selection||[],n],this.propagateSelectionUp&&n.parent&&this.propagateUp(n.parent,!0),this.selectionChange.emit(this.selection),this.onNodeSelect.emit({originalEvent:e,node:n}));else if(this.nodeTouched?!1:this.metaKeySelection){let N=e.metaKey||e.ctrlKey;a&&N?(this.isSingleSelectionMode()?this.selectionChange.emit(null):(this.selection=this.selection.filter((H,qt)=>qt!=o),this.selectionChange.emit(this.selection)),this.onNodeUnselect.emit({originalEvent:e,node:n})):(this.isSingleSelectionMode()?this.selectionChange.emit(n):this.isMultipleSelectionMode()&&(this.selection=N?this.selection||[]:[],this.selection=[...this.selection,n],this.selectionChange.emit(this.selection)),this.onNodeSelect.emit({originalEvent:e,node:n}))}else this.isSingleSelectionMode()?a?(this.selection=null,this.onNodeUnselect.emit({originalEvent:e,node:n})):(this.selection=n,setTimeout(()=>{this.onNodeSelect.emit({originalEvent:e,node:n})})):a?(this.selection=this.selection.filter((N,H)=>H!=o),this.onNodeUnselect.emit({originalEvent:e,node:n})):(this.selection=[...this.selection||[],n],setTimeout(()=>{this.onNodeSelect.emit({originalEvent:e,node:n})})),this.selectionChange.emit(this.selection)}this.nodeTouched=!1}}onNodeTouchEnd(){this.nodeTouched=!0}onNodeRightClick(e,n){if(this.contextMenu){let i=e.target;if(i.className&&i.className.indexOf("p-tree-toggler")===0)return;this.findIndexInSelection(n)>=0||(this.isSingleSelectionMode()?this.selectionChange.emit(n):this.selectionChange.emit([n])),this.contextMenu.show(e),this.onNodeContextMenuSelect.emit({originalEvent:e,node:n})}}onNodeDblClick(e,n){this.onNodeDoubleClick.emit({originalEvent:e,node:n})}findIndexInSelection(e){let n=-1;if(this.selectionMode&&this.selection)if(this.isSingleSelectionMode())n=this.selection.key&&this.selection.key===e.key||this.selection==e?0:-1;else for(let i=0;i<this.selection.length;i++){let o=this.selection[i];if(o.key&&o.key===e.key||o==e){n=i;break}}return n}syncNodeOption(e,n,i,o){let a=this.hasFilteredNodes()?this.getNodeWithKey(e.key,n):null;a&&(a[i]=o||e[i])}hasFilteredNodes(){return this.filter&&this.filteredNodes&&this.filteredNodes.length}hasFilterActive(){return this.filter&&this.filterViewChild?.nativeElement?.value.length>0}getNodeWithKey(e,n){for(let i of n){if(i.key===e)return i;if(i.children){let o=this.getNodeWithKey(e,i.children);if(o)return o}}}propagateUp(e,n){if(e.children&&e.children.length){let o=0,a=!1;for(let g of e.children)this.isSelected(g)?o++:g.partialSelected&&(a=!0);if(n&&o==e.children.length)this.selection=[...this.selection||[],e],e.partialSelected=!1;else{if(!n){let g=this.findIndexInSelection(e);g>=0&&(this.selection=this.selection.filter((N,H)=>H!=g))}a||o>0&&o!=e.children.length?e.partialSelected=!0:e.partialSelected=!1}this.syncNodeOption(e,this.filteredNodes,"partialSelected")}let i=e.parent;i&&this.propagateUp(i,n)}propagateDown(e,n){let i=this.findIndexInSelection(e);if(n&&i==-1?this.selection=[...this.selection||[],e]:!n&&i>-1&&(this.selection=this.selection.filter((o,a)=>a!=i)),e.partialSelected=!1,this.syncNodeOption(e,this.filteredNodes,"partialSelected"),e.children&&e.children.length)for(let o of e.children)this.propagateDown(o,n)}isSelected(e){return this.findIndexInSelection(e)!=-1}isSingleSelectionMode(){return this.selectionMode&&this.selectionMode=="single"}isMultipleSelectionMode(){return this.selectionMode&&this.selectionMode=="multiple"}isCheckboxSelectionMode(){return this.selectionMode&&this.selectionMode=="checkbox"}isNodeLeaf(e){return e.leaf==!1?!1:!(e.children&&e.children.length)}getRootNode(){return this.filteredNodes?this.filteredNodes:this.value}getTemplateForNode(e){return this._templateMap?e.type?this._templateMap[e.type]:this._templateMap.default:null}onDragOver(e){this.droppableNodes&&(!this.value||this.value.length===0)&&(e.dataTransfer.dropEffect="move",e.preventDefault())}onDrop(e){if(this.droppableNodes&&(!this.value||this.value.length===0)){e.preventDefault();let n=this.dragNode;if(this.allowDrop(n,null,this.dragNodeScope)){let i=this.dragNodeIndex;this.value=this.value||[],this.validateDrop?this.onNodeDrop.emit({originalEvent:e,dragNode:n,dropNode:null,index:i,accept:()=>{this.processTreeDrop(n,i)}}):(this.onNodeDrop.emit({originalEvent:e,dragNode:n,dropNode:null,index:i}),this.processTreeDrop(n,i))}}}processTreeDrop(e,n){this.dragNodeSubNodes.splice(n,1),this.value.push(e),this.dragDropService.stopDrag({node:e})}onDragEnter(){this.droppableNodes&&this.allowDrop(this.dragNode,null,this.dragNodeScope)&&(this.dragHover=!0)}onDragLeave(e){if(this.droppableNodes){let n=e.currentTarget.getBoundingClientRect();(e.x>n.left+n.width||e.x<n.left||e.y>n.top+n.height||e.y<n.top)&&(this.dragHover=!1)}}allowDrop(e,n,i){if(e)if(this.isValidDragScope(i)){let o=!0;if(n)if(e===n)o=!1;else{let a=n.parent;for(;a!=null;){if(a===e){o=!1;break}a=a.parent}}return o}else return!1;else return!1}isValidDragScope(e){let n=this.droppableScope;if(n){if(typeof n=="string"){if(typeof e=="string")return n===e;if(Array.isArray(e))return e.indexOf(n)!=-1}else if(Array.isArray(n)){if(typeof e=="string")return n.indexOf(e)!=-1;if(Array.isArray(e)){for(let i of n)for(let o of e)if(i===o)return!0}}return!1}else return!0}_filter(e){let n=e;if(n==="")this.filteredNodes=null;else{this.filteredNodes=[];let i=this.filterBy.split(","),o=Ee(n).toLocaleLowerCase(this.filterLocale),a=this.filterMode==="strict";for(let g of this.value){let N=Ce({},g),H={searchFields:i,filterText:o,isStrictMode:a};(a&&(this.findFilteredNodes(N,H)||this.isFilterMatched(N,H))||!a&&(this.isFilterMatched(N,H)||this.findFilteredNodes(N,H)))&&this.filteredNodes.push(N)}}this.updateSerializedValue(),this.onFilter.emit({filter:n,filteredValue:this.filteredNodes})}resetFilter(){this.filteredNodes=null,this.filterViewChild&&this.filterViewChild.nativeElement&&(this.filterViewChild.nativeElement.value="")}scrollToVirtualIndex(e){this.virtualScroll&&this.scroller?.scrollToIndex(e)}scrollTo(e){this.virtualScroll?this.scroller?.scrollTo(e):this.wrapperViewChild&&this.wrapperViewChild.nativeElement&&(this.wrapperViewChild.nativeElement.scrollTo?this.wrapperViewChild.nativeElement.scrollTo(e):(this.wrapperViewChild.nativeElement.scrollLeft=e.left,this.wrapperViewChild.nativeElement.scrollTop=e.top))}findFilteredNodes(e,n){if(e){let i=!1;if(e.children){let o=[...e.children];e.children=[];for(let a of o){let g=Ce({},a);this.isFilterMatched(g,n)&&(i=!0,e.children.push(g))}}if(i)return e.expanded=!0,!0}}isFilterMatched(e,n){let{searchFields:i,filterText:o,isStrictMode:a}=n,g=!1;for(let N of i)Ee(String(et(e,N))).toLocaleLowerCase(this.filterLocale).indexOf(o)>-1&&(g=!0);return(!g||a&&!this.isNodeLeaf(e))&&(g=this.findFilteredNodes(e,{searchFields:i,filterText:o,isStrictMode:a})||g),g}getIndex(e,n){let i=e.getItemOptions;return i?i(n).index:n}getBlockableElement(){return this.el.nativeElement.children[0]}ngOnDestroy(){this.dragStartSubscription&&this.dragStartSubscription.unsubscribe(),this.dragStopSubscription&&this.dragStopSubscription.unsubscribe(),super.ngOnDestroy()}static \u0275fac=function(n){return new(n||t)(Qe(ot,8))};static \u0275cmp=F({type:t,selectors:[["p-tree"]],contentQueries:function(n,i,o){if(n&1&&(k(o,Lt,4),k(o,ri,4),k(o,ai,4),k(o,li,4),k(o,si,4),k(o,di,4),k(o,ci,4),k(o,pi,4),k(o,hi,4),k(o,ui,4),k(o,oe,4)),n&2){let a;b(a=x())&&(i.filterTemplate=a.first),b(a=x())&&(i.nodeTemplate=a.first),b(a=x())&&(i.headerTemplate=a.first),b(a=x())&&(i.footerTemplate=a.first),b(a=x())&&(i.loaderTemplate=a.first),b(a=x())&&(i.emptyMessageTemplate=a.first),b(a=x())&&(i.togglerIconTemplate=a.first),b(a=x())&&(i.checkboxIconTemplate=a.first),b(a=x())&&(i.loadingIconTemplate=a.first),b(a=x())&&(i.filterIconTemplate=a.first),b(a=x())&&(i.templates=a)}},viewQuery:function(n,i){if(n&1&&($(Lt,5),$(gi,5),$(mi,5),$(fi,5)),n&2){let o;b(o=x())&&(i.filterViewChild=o.first),b(o=x())&&(i.scroller=o.first),b(o=x())&&(i.wrapperViewChild=o.first),b(o=x())&&(i.contentViewChild=o.first)}},hostVars:2,hostBindings:function(n,i){n&1&&T("drop",function(a){return i.handleDropEvent(a)})("dragover",function(a){return i.handleDragOverEvent(a)})("dragenter",function(){return i.handleDragEnterEvent()})("dragleave",function(a){return i.handleDragLeaveEvent(a)}),n&2&&u(i.cn(i.cx("root"),i.styleClass))},inputs:{value:"value",selectionMode:"selectionMode",loadingMode:"loadingMode",selection:"selection",styleClass:"styleClass",contextMenu:"contextMenu",draggableScope:"draggableScope",droppableScope:"droppableScope",draggableNodes:[2,"draggableNodes","draggableNodes",v],droppableNodes:[2,"droppableNodes","droppableNodes",v],metaKeySelection:[2,"metaKeySelection","metaKeySelection",v],propagateSelectionUp:[2,"propagateSelectionUp","propagateSelectionUp",v],propagateSelectionDown:[2,"propagateSelectionDown","propagateSelectionDown",v],loading:[2,"loading","loading",v],loadingIcon:"loadingIcon",emptyMessage:"emptyMessage",ariaLabel:"ariaLabel",togglerAriaLabel:"togglerAriaLabel",ariaLabelledBy:"ariaLabelledBy",validateDrop:[2,"validateDrop","validateDrop",v],filter:[2,"filter","filter",v],filterInputAutoFocus:[2,"filterInputAutoFocus","filterInputAutoFocus",v],filterBy:"filterBy",filterMode:"filterMode",filterOptions:"filterOptions",filterPlaceholder:"filterPlaceholder",filteredNodes:"filteredNodes",filterLocale:"filterLocale",scrollHeight:"scrollHeight",lazy:[2,"lazy","lazy",v],virtualScroll:[2,"virtualScroll","virtualScroll",v],virtualScrollItemSize:[2,"virtualScrollItemSize","virtualScrollItemSize",R],virtualScrollOptions:"virtualScrollOptions",indentation:[2,"indentation","indentation",R],_templateMap:"_templateMap",trackBy:"trackBy",highlightOnSelect:[2,"highlightOnSelect","highlightOnSelect",v]},outputs:{selectionChange:"selectionChange",onNodeSelect:"onNodeSelect",onNodeUnselect:"onNodeUnselect",onNodeExpand:"onNodeExpand",onNodeCollapse:"onNodeCollapse",onNodeContextMenuSelect:"onNodeContextMenuSelect",onNodeDoubleClick:"onNodeDoubleClick",onNodeDrop:"onNodeDrop",onLazyLoad:"onLazyLoad",onScroll:"onScroll",onScrollIndexChange:"onScrollIndexChange",onFilter:"onFilter"},features:[Y([xe]),G,ge],decls:7,vars:6,consts:[["filter",""],["scroller",""],["content",""],["treeNode",""],["loader",""],["wrapper",""],["emptyFilter",""],[3,"class",4,"ngIf"],[4,"ngTemplateOutlet"],[3,"class"],[4,"ngIf"],["data-p-icon","spinner","spin","",3,"class",4,"ngIf"],["data-p-icon","spinner","spin",""],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["pInputText","","type","search","autocomplete","off",3,"keydown.enter","input","pAutoFocus"],["data-p-icon","search",3,"class",4,"ngIf"],["data-p-icon","search"],[3,"items","tabindex","styleClass","style","scrollHeight","itemSize","lazy","options","onScroll","onScrollIndexChange","onLazyLoad",4,"ngIf"],[3,"onScroll","onScrollIndexChange","onLazyLoad","items","tabindex","styleClass","scrollHeight","itemSize","lazy","options"],["role","tree",3,"class","ngClass","style",4,"ngIf"],["role","tree",3,"ngClass"],[3,"level","rowNode","node","parentNode","firstChild","lastChild","index","itemSize","indentation","loadingMode",4,"ngFor","ngForOf","ngForTrackBy"],[3,"level","rowNode","node","parentNode","firstChild","lastChild","index","itemSize","indentation","loadingMode"],["role","tree",3,"class",4,"ngIf"],["role","tree"],[3,"node","firstChild","lastChild","index","level","loadingMode",4,"ngFor","ngForOf","ngForTrackBy"],[3,"node","firstChild","lastChild","index","level","loadingMode"],[4,"ngIf","ngIfElse"]],template:function(n,i){if(n&1&&(c(0,Ti,3,4,"div",7)(1,wi,1,0,"ng-container",8),w(2,Ni,1,4,"ng-container")(3,Vi,1,1,"p-iconfield",9),c(4,ji,3,2,"ng-container",10)(5,Ki,3,5,"div",7)(6,Wi,1,0,"ng-container",8)),n&2){let o;d("ngIf",i.loading&&i.loadingMode==="mask"),l(),d("ngTemplateOutlet",i.headerTemplate||i._headerTemplate),l(),S(i.filterTemplate||i._filterTemplate?2:3),l(2),d("ngIf",(o=i.getRootNode())==null?null:o.length),l(),d("ngIf",!i.loading&&(i.getRootNode()==null||i.getRootNode().length===0)),l(),d("ngTemplateOutlet",i.footerTemplate||i._footerTemplate)}},dependencies:[Q,ie,Se,J,ee,St,W,ut,De,wt,Ae,kt,Tt,Yi,st,lt],encapsulation:2})}return t})(),Bt=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=me({type:t});static \u0275inj=ue({imports:[ve,W,W]})}return t})();var Qt=()=>({width:"100%",border:"none"}),Ht=(t,r)=>r.label;function eo(t,r){if(t&1&&(p(0,"div",7)(1,"div",15),C(2,"i",16),h(),p(3,"div",17)(4,"h1",18),M(5),h(),p(6,"p",19),M(7),h()()()),t&2){let e=s();l(4),u("text-xl font-bold truncate "+e.titleGradient()),l(),K(e.config.title),l(2),K(e.config.subtitle)}}function to(t,r){t&1&&(p(0,"div",8)(1,"div",20),C(2,"i",16),h()())}function no(t,r){if(t&1){let e=I();p(0,"p-tree",2),T("onNodeSelect",function(i){m(e);let o=s();return f(o.onNodeSelect(i))}),h()}if(t&2){let e=s();B(Te(4,Qt)),d("value",e.treeNodes)("ariaLabel","Navigation tree for "+e.config.title+" topics")}}function io(t,r){if(t&1){let e=I();p(0,"div",22)(1,"button",23),T("click",function(){m(e);let i=s().$implicit,o=s(4);return f(o.onCollapsedNodeClick(i))}),C(2,"i",24),h(),p(3,"div",25),M(4),h()()}if(t&2){let e=s().$implicit,n=s(4);l(),d("title",e.label),_("aria-label","Navigate to "+e.label),l(),u(n.getIconClass(e)),l(),_("aria-hidden",!0),l(),fe(" ",e.label," ")}}function oo(t,r){if(t&1&&w(0,io,5,6,"div",22),t&2){let e=r.$implicit;S(e.data?0:-1)}}function ro(t,r){if(t&1&&(p(0,"div",21),ae(1,oo,1,1,null,null,Ht),h()),t&2){let e=s().$implicit;_("aria-label",e.label+" topics"),l(),le(e.children)}}function ao(t,r){if(t&1&&w(0,ro,3,1,"div",21),t&2){let e=r.$implicit;S(e.children&&e.children.length>0?0:-1)}}function lo(t,r){if(t&1&&(p(0,"div",11),ae(1,ao,1,1,null,null,Ht),h()),t&2){let e=s();_("aria-label","Quick navigation icons for "+e.config.title),l(),le(e.treeNodes)}}function so(t,r){t&1&&(p(0,"div",13)(1,"p",26),M(2,"Angular Study"),h(),p(3,"p",27),M(4,"v1.0.0"),h()())}function co(t,r){t&1&&(p(0,"div",14)(1,"div",28),M(2," A "),h()())}var Rt=class t{themeService=O(be);config;treeNodes;sidebarVisible;nodeSelect=new y;isExpanded=U(!0);sidebarGradient=P(()=>this.themeService.getGradientClasses("to-br","strong"));titleGradient=P(()=>this.themeService.getTextGradientClasses());sidebarWidth=P(()=>this.isExpanded()?256:64);sidebarWidthClass=P(()=>this.isExpanded()?"w-64":"w-16");mainContentMarginClass=P(()=>this.isExpanded()?"lg:ml-64":"lg:ml-16");onNodeSelect(r){this.nodeSelect.emit(r)}onCollapsedNodeClick(r){this.nodeSelect.emit({node:r})}getIconClass(r){return r.icon?r.icon:"fas fa-circle"}toggleSidebar(){this.isExpanded.update(r=>!r)}getSidebarWidthPx(){return this.sidebarWidth()}getMainContentMarginClass(){return this.mainContentMarginClass()}getResponsiveMargin(r="lg"){return r==="sm"||r==="md"?0:this.sidebarWidth()}shouldShowDesktopSidebar(r){return r>=1024}getResponsiveMarginClasses(){let r="transition-all duration-300",e=this.mainContentMarginClass();return`${r} ${e}`}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=F({type:t,selectors:[["app-sidebar"]],inputs:{config:"config",treeNodes:"treeNodes",sidebarVisible:"sidebarVisible"},outputs:{nodeSelect:"nodeSelect"},decls:15,vars:26,consts:[["position","left","styleClass","w-72 lg:hidden",3,"visibleChange","visible","header","closeOnEscape","ariaLabel"],[1,"p-4","overflow-y-auto","max-h-[calc(100vh-4rem)]","scrollbar-thin"],["selectionMode","single","styleClass","w-full border-none modern-tree",3,"onNodeSelect","value","ariaLabel"],["role","navigation"],["type","button","aria-controls","sidebar-navigation",1,"absolute","-right-3","top-6","w-6","h-6","rounded-full","bg-white","dark:bg-gray-800","border-2","border-gray-300","dark:border-gray-600","shadow-lg","hover:shadow-xl","transition-all","duration-200","flex","items-center","justify-center","z-50","hover:scale-110","focus:outline-none","focus:ring-2","focus:ring-accent-light","focus:ring-offset-2","dark:focus:ring-accent-dark","dark:focus:ring-offset-gray-900",3,"click","title"],["aria-hidden","true"],["role","banner",1,"p-4","flex-shrink-0","border-b","border-gray-200/30","dark:border-gray-700/30","backdrop-blur-sm","overflow-hidden"],[1,"flex","items-center","gap-3","animate-fade-in"],[1,"flex","justify-center","animate-fade-in"],["id","sidebar-navigation",1,"flex-1","overflow-y-auto","overflow-x-hidden","py-4","scrollbar-thin","min-h-0"],["selectionMode","single","styleClass","w-full border-none modern-tree",3,"value","style","ariaLabel"],["role","list",1,"space-y-1"],["role","contentinfo",1,"p-3","flex-shrink-0","border-t","border-gray-200/30","dark:border-gray-700/30","backdrop-blur-sm","overflow-hidden"],[1,"text-xs","text-gray-500","dark:text-gray-400","text-center","animate-fade-in"],["aria-label","Angular Study application",1,"flex","justify-center","animate-fade-in"],["aria-hidden","true",1,"w-10","h-10","rounded-lg","bg-gradient-to-br","from-accent-light","to-accent-dark","flex","items-center","justify-center","shadow-lg","flex-shrink-0"],[1,"fas","fa-book","text-white","text-lg"],[1,"min-w-0","flex-1"],["id","sidebar-title"],["id","sidebar-subtitle",1,"text-xs","text-gray-600","dark:text-gray-400","font-medium","truncate"],["aria-hidden","true",1,"w-10","h-10","rounded-lg","bg-gradient-to-br","from-accent-light","to-accent-dark","flex","items-center","justify-center","shadow-lg"],["role","group",1,"space-y-1"],["role","listitem",1,"relative","group"],["type","button","tabindex","0",1,"w-full","p-2","rounded-lg","hover:bg-white/10","dark:hover:bg-gray-700/50","transition-all","duration-200","flex","items-center","justify-center","focus:outline-none","focus:ring-2","focus:ring-accent-light","focus:ring-offset-2","focus:ring-offset-transparent","dark:focus:ring-accent-dark",3,"click","title"],["aria-hidden","true",1,"text-gray-600","dark:text-gray-300","text-sm"],["role","tooltip",1,"absolute","left-full","ml-2","top-1/2","-translate-y-1/2","px-3","py-2","bg-gray-900","dark:bg-gray-700","text-white","text-xs","rounded-lg","shadow-lg","opacity-0","group-hover:opacity-100","pointer-events-none","transition-opacity","duration-200","whitespace-nowrap","z-50"],[1,"font-medium"],[1,"mt-1","opacity-75"],["aria-hidden","true",1,"w-8","h-8","rounded-full","bg-gradient-to-br","from-accent-light","to-accent-dark","flex","items-center","justify-center","text-white","text-xs","font-bold"]],template:function(e,n){e&1&&(p(0,"p-drawer",0),T("visibleChange",function(o){return n.sidebarVisible.set(o)}),p(1,"div",1)(2,"p-tree",2),T("onNodeSelect",function(o){return n.onNodeSelect(o)}),h()()(),p(3,"aside",3)(4,"button",4),T("click",function(){return n.toggleSidebar()}),C(5,"i",5),h(),p(6,"div",6),w(7,eo,8,4,"div",7)(8,to,3,0,"div",8),h(),p(9,"nav",9),w(10,no,1,5,"p-tree",10)(11,lo,3,1,"div",11),h(),p(12,"div",12),w(13,so,5,0,"div",13)(14,co,3,0,"div",14),h()()),e&2&&(d("visible",n.sidebarVisible())("header",n.config.headerText)("closeOnEscape",!0)("ariaLabel","Mobile navigation menu for "+n.config.title),l(2),B(Te(25,Qt)),d("value",n.treeNodes)("ariaLabel","Navigation tree for "+n.config.title+" topics"),l(),u("hidden lg:flex flex-col fixed left-0 top-0 h-screen z-40 shadow-2xl border-r border-gray-200/50 dark:border-gray-700/50 transition-all duration-300 "+n.sidebarGradient()+" "+n.sidebarWidthClass()),_("aria-label","Main navigation sidebar for "+n.config.title)("aria-expanded",n.isExpanded()),l(),d("title",n.isExpanded()?"Collapse sidebar":"Expand sidebar"),_("aria-label",n.isExpanded()?"Collapse sidebar to show only icons":"Expand sidebar to show full navigation")("aria-expanded",n.isExpanded()),l(),u("fas text-xs text-gray-600 dark:text-gray-300 transition-transform duration-300 "+(n.isExpanded()?"fa-chevron-left":"fa-chevron-right")),l(2),S(n.isExpanded()?7:8),l(2),qe("px-2",!n.isExpanded())("px-3",n.isExpanded()),_("aria-label",n.isExpanded()?"Full navigation menu":"Icon navigation menu"),l(),S(n.isExpanded()?10:11),l(3),S(n.isExpanded()?13:14))},dependencies:[Q,Ot,Bt,ve],styles:["[_nghost-%COMP%]{display:block}[_nghost-%COMP%]     .p-tree{border:none!important;background:transparent!important}[_nghost-%COMP%]     .p-tree .p-tree-container .p-treenode{padding:.25rem 0}[_nghost-%COMP%]     .p-tree .p-tree-container .p-treenode .p-treenode-content{padding:.5rem;border-radius:.375rem;transition:background-color .2s;cursor:pointer}[_nghost-%COMP%]     .p-tree .p-tree-container .p-treenode .p-treenode-content:hover{background-color:#f3f4f6}[_nghost-%COMP%]     .p-tree .p-tree-container .p-treenode .p-treenode-content .p-treenode-label{font-size:.875rem;color:#1f2937;font-weight:500}[_nghost-%COMP%]     .p-tree .p-tree-container .p-treenode .p-treenode-content .p-treenode-icon{margin-right:.5rem;color:#6b7280}[_nghost-%COMP%]     .p-tree .p-tree-container .p-treenode.p-highlight .p-treenode-content{background-color:#dbeafe}[_nghost-%COMP%]     .p-tree .p-tree-container .p-treenode.p-highlight .p-treenode-content .p-treenode-label{color:#2563eb;font-weight:600}.dark[_nghost-%COMP%]     .p-tree .p-tree-container .p-treenode .p-treenode-content:hover, .dark   [_nghost-%COMP%]     .p-tree .p-tree-container .p-treenode .p-treenode-content:hover, [data-theme=dark][_nghost-%COMP%]     .p-tree .p-tree-container .p-treenode .p-treenode-content:hover, [data-theme=dark]   [_nghost-%COMP%]     .p-tree .p-tree-container .p-treenode .p-treenode-content:hover{background-color:#374151}.dark[_nghost-%COMP%]     .p-tree .p-tree-container .p-treenode .p-treenode-content .p-treenode-label, .dark   [_nghost-%COMP%]     .p-tree .p-tree-container .p-treenode .p-treenode-content .p-treenode-label, [data-theme=dark][_nghost-%COMP%]     .p-tree .p-tree-container .p-treenode .p-treenode-content .p-treenode-label, [data-theme=dark]   [_nghost-%COMP%]     .p-tree .p-tree-container .p-treenode .p-treenode-content .p-treenode-label{color:#e5e7eb}.dark[_nghost-%COMP%]     .p-tree .p-tree-container .p-treenode .p-treenode-content .p-treenode-icon, .dark   [_nghost-%COMP%]     .p-tree .p-tree-container .p-treenode .p-treenode-content .p-treenode-icon, [data-theme=dark][_nghost-%COMP%]     .p-tree .p-tree-container .p-treenode .p-treenode-content .p-treenode-icon, [data-theme=dark]   [_nghost-%COMP%]     .p-tree .p-tree-container .p-treenode .p-treenode-content .p-treenode-icon{color:#9ca3af}.dark[_nghost-%COMP%]     .p-tree .p-tree-container .p-treenode.p-highlight .p-treenode-content, .dark   [_nghost-%COMP%]     .p-tree .p-tree-container .p-treenode.p-highlight .p-treenode-content, [data-theme=dark][_nghost-%COMP%]     .p-tree .p-tree-container .p-treenode.p-highlight .p-treenode-content, [data-theme=dark]   [_nghost-%COMP%]     .p-tree .p-tree-container .p-treenode.p-highlight .p-treenode-content{background-color:#1e3a8a}.dark[_nghost-%COMP%]     .p-tree .p-tree-container .p-treenode.p-highlight .p-treenode-content .p-treenode-label, .dark   [_nghost-%COMP%]     .p-tree .p-tree-container .p-treenode.p-highlight .p-treenode-content .p-treenode-label, [data-theme=dark][_nghost-%COMP%]     .p-tree .p-tree-container .p-treenode.p-highlight .p-treenode-content .p-treenode-label, [data-theme=dark]   [_nghost-%COMP%]     .p-tree .p-tree-container .p-treenode.p-highlight .p-treenode-content .p-treenode-label{color:#93c5fd}"],changeDetection:0})};function po(t,r){t&1&&A(0,"i",2)}function ho(t,r){t&1&&A(0,"i",3)}function uo(t,r){t&1&&A(0,"span",6)}function go(t,r){t&1&&(j(0,"span",19),A(1,"i",20),q(),A(2,"span",21))}function mo(t,r){if(t&1){let e=I();j(0,"button",18),se("click",function(){let i=m(e).$implicit,o=s(2);return f(o.selectAccentColor(i))}),w(1,go,3,0),q()}if(t&2){let e=r.$implicit,n=s(2);u("relative w-12 h-12 rounded-xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 shadow-md hover:shadow-lg "+n.getColorClasses(e)),ye("title",n.getColorName(e)),_("aria-label","Select "+n.getColorName(e)+" accent color"),l(),S(n.isSelected(e)?1:-1)}}function fo(t,r){if(t&1){let e=I();j(0,"div",7)(1,"div",8)(2,"h3",9),A(3,"i",10),M(4," Accent Color "),q(),j(5,"button",11),se("click",function(){m(e);let i=s();return f(i.toggleColorPicker())}),A(6,"i",12),q()(),j(7,"div",13),ae(8,mo,2,5,"button",14,He),q(),j(10,"div",15)(11,"p",16),M(12," Selected: "),j(13,"span",17),M(14),q()()()()}if(t&2){let e=s();l(8),le(e.accentColors),l(6),K(e.getColorName(e.accentColor()))}}var Ut=class t{themeService=O(be);elementRef=O(Be);themeMode=this.themeService.themeMode;accentColor=this.themeService.accentColor;accentColors=this.themeService.accentColors;colorPickerOpen=U(!1);toggleMode(){this.themeService.toggleTheme()}selectAccentColor(r){this.themeService.setAccentColor(r),this.colorPickerOpen.set(!1)}toggleColorPicker(){this.colorPickerOpen.update(r=>!r)}getColorName(r){return r.charAt(0).toUpperCase()+r.slice(1)}getColorClasses(r){return{blue:"bg-blue-500",green:"bg-green-500",purple:"bg-purple-500",orange:"bg-orange-500",teal:"bg-teal-500",pink:"bg-pink-500",red:"bg-red-500",indigo:"bg-indigo-500",cyan:"bg-cyan-500",amber:"bg-amber-500"}[r]||"bg-blue-500"}isSelected(r){return this.accentColor()===r}onDocumentClick(r){this.colorPickerOpen()&&!this.elementRef.nativeElement.contains(r.target)&&this.colorPickerOpen.set(!1)}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=F({type:t,selectors:[["app-theme-toggle"]],hostBindings:function(e,n){e&1&&T("click",function(o){return n.onDocumentClick(o)},Re)},decls:8,vars:6,consts:[[1,"flex","items-center","gap-2","sm:gap-3","relative"],["type","button",1,"p-2.5","sm:p-3","rounded-xl","hover:bg-gray-200","dark:hover:bg-gray-700","transition-all","duration-300","focus:outline-none","focus:ring-2","focus:ring-accent","shadow-sm","hover:shadow-md","hover:-translate-y-0.5","group",3,"click","title"],[1,"fas","fa-sun","text-yellow-500","text-lg","sm:text-xl","group-hover:rotate-45","transition-transform","duration-300"],[1,"fas","fa-moon","text-gray-700","dark:text-gray-300","text-lg","sm:text-xl","group-hover:-rotate-12","transition-transform","duration-300"],["type","button","title","Change Accent Color","aria-label","Change Accent Color",1,"p-2.5","sm:p-3","rounded-xl","hover:bg-gray-200","dark:hover:bg-gray-700","transition-all","duration-300","focus:outline-none","focus:ring-2","focus:ring-accent","shadow-sm","hover:shadow-md","hover:-translate-y-0.5","group","relative",3,"click"],[1,"fas","fa-palette","text-gray-700","dark:text-gray-300","text-lg","sm:text-xl","group-hover:scale-110","transition-transform","duration-300"],[1,"absolute","-top-1","-right-1","w-3","h-3","bg-accent","rounded-full","animate-pulse"],[1,"absolute","right-0","top-full","mt-3","glass","rounded-2xl","shadow-modern-lg","border","border-gray-200/50","dark:border-gray-700/50","p-5","min-w-[280px]","z-50","fade-in"],[1,"flex","items-center","justify-between","mb-4"],[1,"text-sm","sm:text-base","font-bold","text-gray-900","dark:text-gray-100","flex","items-center","gap-2"],[1,"fas","fa-swatchbook","text-accent"],["type","button","aria-label","Close color picker",1,"p-1.5","rounded-lg","hover:bg-gray-200","dark:hover:bg-gray-700","transition-colors",3,"click"],[1,"fas","fa-times","text-gray-500","dark:text-gray-400"],[1,"grid","grid-cols-5","gap-3"],["type","button",3,"class","title"],[1,"mt-4","pt-4","border-t","border-gray-200","dark:border-gray-700"],[1,"text-xs","text-gray-600","dark:text-gray-400","text-center"],[1,"font-semibold","text-accent"],["type","button",3,"click","title"],[1,"absolute","inset-0","flex","items-center","justify-center"],[1,"fas","fa-check","text-white","text-lg","drop-shadow-lg"],[1,"absolute","-inset-1","border-2","border-gray-900","dark:border-gray-100","rounded-xl"]],template:function(e,n){e&1&&(j(0,"div",0)(1,"button",1),se("click",function(){return n.toggleMode()}),w(2,po,1,0,"i",2)(3,ho,1,0,"i",3),q(),j(4,"button",4),se("click",function(){return n.toggleColorPicker()}),A(5,"i",5),w(6,uo,1,0,"span",6),q(),w(7,fo,15,1,"div",7),q()),e&2&&(l(),ye("title",n.themeMode()==="dark"?"Switch to Light Mode":"Switch to Dark Mode"),_("aria-label",n.themeMode()==="dark"?"Switch to Light Mode":"Switch to Dark Mode"),l(),S(n.themeMode()==="dark"?2:3),l(2),_("aria-expanded",n.colorPickerOpen()),l(2),S(n.colorPickerOpen()?6:-1),l(),S(n.colorPickerOpen()?7:-1))},dependencies:[Q],styles:["[_nghost-%COMP%]{display:block}"],changeDetection:0})};var jt={"Single Responsibility":"fas fa-cube","Open/Closed":"fas fa-door-open","Liskov Substitution":"fas fa-exchange-alt","Interface Segregation":"fas fa-layer-group","Dependency Inversion":"fas fa-arrows-alt-v",Encapsulation:"fas fa-lock",Inheritance:"fas fa-sitemap",Polymorphism:"fas fa-shapes",Abstraction:"fas fa-eye-slash","Part 1: Creation Operators":"fas fa-plus-circle","Part 2: Transformation Operators":"fas fa-random","Part 3: Filtering Operators":"fas fa-filter","Part 4: Combination Operators":"fas fa-code-branch","Part 5: Error Handling":"fas fa-exclamation-triangle","Part 6: Utility Operators":"fas fa-tools","Part 7: Multicasting Operators":"fas fa-broadcast-tower","Custom Operators":"fas fa-puzzle-piece","Higher-Order Observables":"fas fa-layer-group","Subject Patterns":"fas fa-share-alt","Memory Leak Prevention":"fas fa-shield-alt",Backpressure:"fas fa-compress-arrows-alt","Route Guards":"fas fa-lock","Reactive Forms":"fas fa-edit",WebSockets:"fas fa-plug","Advanced Caching":"fas fa-database","Race Conditions":"fas fa-flag-checkered","Advanced Types":"fas fa-code","Type Guards":"fas fa-shield-alt",Generics:"fas fa-cog","Utility Types":"fas fa-wrench",Decorators:"fas fa-star","TypeScript 5.x":"fas fa-bolt","Function Types":"fas fa-function","Module Augmentation":"fas fa-puzzle-piece","SOLID Principles":"fas fa-cube","OOP Concepts":"fas fa-object-group","RxJS Patterns":"fas fa-stream","Advanced TypeScript":"fas fa-code",default:"fas fa-circle"};function da(t){return jt[t]||jt.default}export{Rt as a,Ut as b,da as c};
