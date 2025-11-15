import{c as Be,e as ze,f as Pe,h as be}from"./chunk-73VP5X27.js";import{b as k,c as it,d as Te}from"./chunk-ILIYAXGI.js";import{a as Ke,b as ne,c as Ge,d as Ye,e as We,f as Xe,h as Je,i as Ce,m as et,n as tt,q as nt}from"./chunk-FAB6L2O4.js";import{c as oe,d as A,f as H,g as R,h as ye,i as xe}from"./chunk-PRB5TZSC.js";import{G as qe,I as Ze,K as je,M as ee,N as ae,O as te,Z as Ne,ba as we,j as He,k as Re,l as Y,la as Ue,m as Qe,n as W,oa as re,p as X,pa as M,t as J,va as se,x as ve,z as $e}from"./chunk-FNU46F6K.js";import{$ as ke,$a as Se,$b as V,Cb as T,Db as s,Eb as Ee,Fa as ue,Fb as Ve,Ga as Me,Gb as y,Hb as D,Ia as c,Ib as f,Jb as h,Mb as j,Na as w,O as Ie,P as ie,Pb as E,Q as de,Qb as u,Rb as N,Sb as K,Ta as $,U as z,Ya as q,Yb as U,Z as g,Za as _e,Zb as Fe,_ as b,_b as I,ab as Z,cb as p,cc as fe,dc as he,fc as F,ga as me,ib as _,jb as Le,ka as P,kb as De,kc as ge,nc as Ae,ob as r,pb as d,qa as Oe,qb as m,rb as C,uc as v,vb as S,vc as G,wb as L,xb as x,yb as O}from"./chunk-AMIIRL3Q.js";var ot=`
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
`;var ut=["header"],_t=["footer"],ft=["content"],ht=["closeicon"],gt=["headless"],bt=["container"],yt=["closeButton"],xt=["*"],vt=(t,a)=>({transform:t,transition:a}),wt=t=>({value:"visible",params:t});function Ct(t,a){t&1&&x(0)}function Tt(t,a){if(t&1&&p(0,Ct,1,0,"ng-container",4),t&2){let e=s(2);r("ngTemplateOutlet",e.headlessTemplate||e._headlessTemplate)}}function It(t,a){t&1&&x(0)}function kt(t,a){if(t&1&&(d(0,"div"),N(1),m()),t&2){let e=s(3);u(e.cx("title")),c(),K(e.header)}}function Ot(t,a){t&1&&(ke(),C(0,"svg",11)),t&2&&_("data-pc-section","closeicon")}function Mt(t,a){}function St(t,a){t&1&&p(0,Mt,0,0,"ng-template")}function Lt(t,a){if(t&1&&p(0,Ot,1,1,"svg",10)(1,St,1,0,null,4),t&2){let e=s(4);r("ngIf",!e.closeIconTemplate&&!e._closeIconTemplate),c(),r("ngTemplateOutlet",e.closeIconTemplate||e._closeIconTemplate)}}function Dt(t,a){if(t&1){let e=O();d(0,"p-button",9),T("onClick",function(o){g(e);let i=s(3);return b(i.close(o))})("keydown.enter",function(o){g(e);let i=s(3);return b(i.close(o))}),p(1,Lt,2,2,"ng-template",null,1,F),m()}if(t&2){let e=s(3);r("ngClass",e.cx("pcCloseButton"))("buttonProps",e.closeButtonProps)("ariaLabel",e.ariaCloseLabel),_("data-pc-section","closebutton")("data-pc-group-section","iconcontainer")}}function Et(t,a){t&1&&x(0)}function Vt(t,a){t&1&&x(0)}function Ft(t,a){if(t&1&&(S(0),d(1,"div",5),p(2,Vt,1,0,"ng-container",4),m(),L()),t&2){let e=s(3);c(),r("ngClass",e.cx("footer")),_("data-pc-section","footer"),c(),r("ngTemplateOutlet",e.footerTemplate||e._footerTemplate)}}function At(t,a){if(t&1&&(d(0,"div",5),p(1,It,1,0,"ng-container",4)(2,kt,2,3,"div",6)(3,Dt,3,5,"p-button",7),m(),d(4,"div",5),Ve(5),p(6,Et,1,0,"ng-container",4),m(),p(7,Ft,3,3,"ng-container",8)),t&2){let e=s(2);r("ngClass",e.cx("header")),_("data-pc-section","header"),c(),r("ngTemplateOutlet",e.headerTemplate||e._headerTemplate),c(),r("ngIf",e.header),c(),r("ngIf",e.showCloseIcon&&e.closable),c(),r("ngClass",e.cx("content")),_("data-pc-section","content"),c(2),r("ngTemplateOutlet",e.contentTemplate||e._contentTemplate),c(),r("ngIf",e.footerTemplate||e._footerTemplate)}}function Ht(t,a){if(t&1){let e=O();d(0,"div",3,0),T("@panelState.start",function(o){g(e);let i=s();return b(i.onAnimationStart(o))})("@panelState.done",function(o){g(e);let i=s();return b(i.onAnimationEnd(o))})("keydown",function(o){g(e);let i=s();return b(i.onKeyDown(o))}),Le(2,Tt,1,1,"ng-container")(3,At,8,9),m()}if(t&2){let e=s();E(e.style),u(e.cn(e.cx("root"),e.styleClass)),r("@panelState",I(11,wt,V(8,vt,e.transformOptions,e.transitionOptions))),_("data-pc-name","sidebar")("data-pc-section","root"),c(2),De(e.headlessTemplate||e._headlessTemplate?2:3)}}var Rt=`
    ${ot}

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
`,Qt={mask:({instance:t})=>["p-drawer-mask",{"p-overlay-mask p-overlay-mask-enter":t.modal},{"p-drawer-full":t.fullScreen}],root:({instance:t})=>["p-drawer p-component",{"p-drawer-full":t.fullScreen,"p-drawer-open":t.visible},`p-drawer-${t.position}`],header:"p-drawer-header",title:"p-drawer-title",pcCloseButton:"p-drawer-close-button",content:"p-drawer-content",footer:"p-drawer-footer"},at=(()=>{class t extends se{name="drawer";theme=Rt;classes=Qt;static \u0275fac=(()=>{let e;return function(o){return(e||(e=P(t)))(o||t)}})();static \u0275prov=ie({token:t,factory:t.\u0275fac})}return t})();var Bt=ye([H({transform:"{{transform}}",opacity:0}),A("{{transition}}")]),zt=ye([A("{{transition}}",H({transform:"{{transform}}",opacity:0}))]),rt="translate3d(-100%, 0px, 0px)",ai=(()=>{class t extends ne{appendTo="body";blockScroll=!1;style;styleClass;ariaCloseLabel;autoZIndex=!0;baseZIndex=0;modal=!0;closeButtonProps={severity:"secondary",text:!0,rounded:!0};dismissible=!0;showCloseIcon=!0;closeOnEscape=!0;transitionOptions="150ms cubic-bezier(0, 0, 0.2, 1)";get visible(){return this._visible??!1}set visible(e){this._visible=e}get position(){return this._position}set position(e){if(this._position=e,e==="full"){this.transformOptions="none";return}switch(e){case"left":this.transformOptions="translate3d(-100%, 0px, 0px)";break;case"right":this.transformOptions="translate3d(100%, 0px, 0px)";break;case"bottom":this.transformOptions="translate3d(0px, 100%, 0px)";break;case"top":this.transformOptions="translate3d(0px, -100%, 0px)";break}}get fullScreen(){return this._fullScreen}set fullScreen(e){this._fullScreen=e,e===!0?this.transformOptions="none":this.transformOptions=rt}header;maskStyle;closable=!0;onShow=new w;onHide=new w;visibleChange=new w;containerViewChild;closeButtonViewChild;initialized;_visible;_position="left";_fullScreen=!1;container;transformOptions=rt;mask;maskClickListener;documentEscapeListener;animationEndListener;_componentStyle=z(at);ngAfterViewInit(){super.ngAfterViewInit(),this.initialized=!0}headerTemplate;footerTemplate;contentTemplate;closeIconTemplate;headlessTemplate;_headerTemplate;_footerTemplate;_contentTemplate;_closeIconTemplate;_headlessTemplate;templates;ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"content":this._contentTemplate=e.template;break;case"header":this._headerTemplate=e.template;break;case"footer":this._footerTemplate=e.template;break;case"closeicon":this._closeIconTemplate=e.template;break;case"headless":this._headlessTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}onKeyDown(e){e.code==="Escape"&&this.hide(!1)}show(){this.container?.setAttribute(this.attrSelector,""),this.autoZIndex&&k.set("modal",this.container,this.baseZIndex||this.config.zIndex.modal),this.modal&&this.enableModality(),this.onShow.emit({}),this.visibleChange.emit(!0)}hide(e=!0){e&&this.onHide.emit({}),this.modal&&this.disableModality()}close(e){this.hide(),this.visibleChange.emit(!1),e.preventDefault()}enableModality(){let e=this.document.querySelectorAll(".p-drawer-open"),n=e.length,o=n==1?String(parseInt(this.container.style.zIndex)-1):String(parseInt(e[n-1].style.zIndex)-1);this.mask||(this.mask=this.renderer.createElement("div"),this.mask&&(we(this.mask,"style",this.getMaskStyle()),we(this.mask,"style",`z-index: ${o}`),ve(this.mask,this.cx("mask"))),this.dismissible&&(this.maskClickListener=this.renderer.listen(this.mask,"click",i=>{this.dismissible&&this.close(i)})),this.renderer.appendChild(this.document.body,this.mask),this.blockScroll&&Ye())}getMaskStyle(){return this.maskStyle?Object.entries(this.maskStyle).map(([e,n])=>`${e}: ${n}`).join("; "):""}disableModality(){this.mask&&($e(this.mask,"p-overlay-mask-enter"),ve(this.mask,"p-overlay-mask-leave"),this.animationEndListener=this.renderer.listen(this.mask,"animationend",this.destroyModal.bind(this)))}destroyModal(){this.unbindMaskClickListener(),this.mask&&this.renderer.removeChild(this.document.body,this.mask),this.blockScroll&&We(),this.unbindAnimationEndListener(),this.mask=null}onAnimationStart(e){switch(e.toState){case"visible":this.container=e.element,this.appendContainer(),this.show(),this.closeOnEscape&&this.bindDocumentEscapeListener();break}}onAnimationEnd(e){switch(e.toState){case"void":this.hide(!1),k.clear(this.container),this.unbindGlobalListeners();break}}appendContainer(){this.appendTo&&(this.appendTo==="body"&&this.container?this.renderer.appendChild(this.document.body,this.container):this.container&&je(this.appendTo,this.container))}bindDocumentEscapeListener(){let e=this.el?this.el.nativeElement.ownerDocument:this.document;this.documentEscapeListener=this.renderer.listen(e,"keydown",n=>{n.which==27&&parseInt(this.container.style.zIndex)===k.get(this.container)&&this.close(n)})}unbindDocumentEscapeListener(){this.documentEscapeListener&&(this.documentEscapeListener(),this.documentEscapeListener=null)}unbindMaskClickListener(){this.maskClickListener&&(this.maskClickListener(),this.maskClickListener=null)}unbindGlobalListeners(){this.unbindMaskClickListener(),this.unbindDocumentEscapeListener()}unbindAnimationEndListener(){this.animationEndListener&&this.mask&&(this.animationEndListener(),this.animationEndListener=null)}ngOnDestroy(){this.initialized=!1,this.visible&&this.modal&&this.destroyModal(),this.appendTo&&this.container&&this.renderer.appendChild(this.el.nativeElement,this.container),this.container&&this.autoZIndex&&k.clear(this.container),this.container=null,this.unbindGlobalListeners(),this.unbindAnimationEndListener()}static \u0275fac=(()=>{let e;return function(o){return(e||(e=P(t)))(o||t)}})();static \u0275cmp=q({type:t,selectors:[["p-drawer"]],contentQueries:function(n,o,i){if(n&1&&(y(i,ut,4),y(i,_t,4),y(i,ft,4),y(i,ht,4),y(i,gt,4),y(i,re,4)),n&2){let l;f(l=h())&&(o.headerTemplate=l.first),f(l=h())&&(o.footerTemplate=l.first),f(l=h())&&(o.contentTemplate=l.first),f(l=h())&&(o.closeIconTemplate=l.first),f(l=h())&&(o.headlessTemplate=l.first),f(l=h())&&(o.templates=l)}},viewQuery:function(n,o){if(n&1&&(D(bt,5),D(yt,5)),n&2){let i;f(i=h())&&(o.containerViewChild=i.first),f(i=h())&&(o.closeButtonViewChild=i.first)}},inputs:{appendTo:"appendTo",blockScroll:[2,"blockScroll","blockScroll",v],style:"style",styleClass:"styleClass",ariaCloseLabel:"ariaCloseLabel",autoZIndex:[2,"autoZIndex","autoZIndex",v],baseZIndex:[2,"baseZIndex","baseZIndex",G],modal:[2,"modal","modal",v],closeButtonProps:"closeButtonProps",dismissible:[2,"dismissible","dismissible",v],showCloseIcon:[2,"showCloseIcon","showCloseIcon",v],closeOnEscape:[2,"closeOnEscape","closeOnEscape",v],transitionOptions:"transitionOptions",visible:"visible",position:"position",fullScreen:"fullScreen",header:"header",maskStyle:"maskStyle",closable:[2,"closable","closable",v]},outputs:{onShow:"onShow",onHide:"onHide",visibleChange:"visibleChange"},features:[U([at]),Z],ngContentSelectors:xt,decls:1,vars:1,consts:[["container",""],["icon",""],["role","complementary",3,"class","style","keydown",4,"ngIf"],["role","complementary",3,"keydown"],[4,"ngTemplateOutlet"],[3,"ngClass"],[3,"class",4,"ngIf"],[3,"ngClass","buttonProps","ariaLabel","onClick","keydown.enter",4,"ngIf"],[4,"ngIf"],[3,"onClick","keydown.enter","ngClass","buttonProps","ariaLabel"],["data-p-icon","times",4,"ngIf"],["data-p-icon","times"]],template:function(n,o){n&1&&(Ee(),p(0,Ht,4,13,"div",2)),n&2&&r("ngIf",o.visible)},dependencies:[X,He,Y,W,nt,et,M],encapsulation:2,data:{animation:[oe("panelState",[R("void => visible",[xe(Bt)]),R("visible => void",[xe(zt)])])]},changeDetection:0})}return t})();var st=`
    .p-menu {
        background: dt('menu.background');
        color: dt('menu.color');
        border: 1px solid dt('menu.border.color');
        border-radius: dt('menu.border.radius');
        min-width: 12.5rem;
    }

    .p-menu-list {
        margin: 0;
        padding: dt('menu.list.padding');
        outline: 0 none;
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: dt('menu.list.gap');
    }

    .p-menu-item-content {
        transition:
            background dt('menu.transition.duration'),
            color dt('menu.transition.duration');
        border-radius: dt('menu.item.border.radius');
        color: dt('menu.item.color');
        overflow: hidden;
    }

    .p-menu-item-link {
        cursor: pointer;
        display: flex;
        align-items: center;
        text-decoration: none;
        overflow: hidden;
        position: relative;
        color: inherit;
        padding: dt('menu.item.padding');
        gap: dt('menu.item.gap');
        user-select: none;
        outline: 0 none;
    }

    .p-menu-item-label {
        line-height: 1;
    }

    .p-menu-item-icon {
        color: dt('menu.item.icon.color');
    }

    .p-menu-item.p-focus .p-menu-item-content {
        color: dt('menu.item.focus.color');
        background: dt('menu.item.focus.background');
    }

    .p-menu-item.p-focus .p-menu-item-icon {
        color: dt('menu.item.icon.focus.color');
    }

    .p-menu-item:not(.p-disabled) .p-menu-item-content:hover {
        color: dt('menu.item.focus.color');
        background: dt('menu.item.focus.background');
    }

    .p-menu-item:not(.p-disabled) .p-menu-item-content:hover .p-menu-item-icon {
        color: dt('menu.item.icon.focus.color');
    }

    .p-menu-overlay {
        box-shadow: dt('menu.shadow');
    }

    .p-menu-submenu-label {
        background: dt('menu.submenu.label.background');
        padding: dt('menu.submenu.label.padding');
        color: dt('menu.submenu.label.color');
        font-weight: dt('menu.submenu.label.font.weight');
    }

    .p-menu-separator {
        border-block-start: 1px solid dt('menu.separator.border.color');
    }
`;var Pt=["pMenuItemContent",""],ce=t=>({$implicit:t}),$t=()=>({exact:!1}),qt=t=>({item:t});function Zt(t,a){t&1&&x(0)}function jt(t,a){if(t&1&&(d(0,"a",6),p(1,Zt,1,0,"ng-container",7),m()),t&2){let e=s(2),n=j(4);u(e.cx("itemLink")),r("target",e.item.target),_("title",e.item.title)("href",e.item.url||null,Me)("data-automationid",e.item.automationId)("tabindex",-1)("data-pc-section","action"),c(),r("ngTemplateOutlet",n)("ngTemplateOutletContext",I(10,ce,e.item))}}function Nt(t,a){t&1&&x(0)}function Kt(t,a){if(t&1&&(d(0,"a",8),p(1,Nt,1,0,"ng-container",7),m()),t&2){let e=s(2),n=j(4);u(e.cx("itemLink")),r("routerLink",e.item.routerLink)("queryParams",e.item.queryParams)("routerLinkActiveOptions",e.item.routerLinkActiveOptions||Fe(18,$t))("target",e.item.target)("fragment",e.item.fragment)("queryParamsHandling",e.item.queryParamsHandling)("preserveFragment",e.item.preserveFragment)("skipLocationChange",e.item.skipLocationChange)("replaceUrl",e.item.replaceUrl)("state",e.item.state),_("data-automationid",e.item.automationId)("tabindex",-1)("data-pc-section","action")("title",e.item.title),c(),r("ngTemplateOutlet",n)("ngTemplateOutletContext",I(19,ce,e.item))}}function Ut(t,a){if(t&1&&(S(0),p(1,jt,2,12,"a",4)(2,Kt,2,21,"a",5),L()),t&2){let e=s();c(),r("ngIf",!(e.item!=null&&e.item.routerLink)),c(),r("ngIf",e.item==null?null:e.item.routerLink)}}function Gt(t,a){}function Yt(t,a){t&1&&p(0,Gt,0,0,"ng-template")}function Wt(t,a){if(t&1&&(S(0),p(1,Yt,1,0,null,7),L()),t&2){let e=s();c(),r("ngTemplateOutlet",e.itemTemplate)("ngTemplateOutletContext",I(2,ce,e.item))}}function Xt(t,a){if(t&1&&C(0,"span"),t&2){let e=s(2);E(e.item.iconStyle),u(e.cx("itemIcon",I(4,qt,e.item)))}}function Jt(t,a){if(t&1&&(d(0,"span"),N(1),m()),t&2){let e=s(2);u(e.cx("itemLabel")),c(),K(e.item.label)}}function en(t,a){if(t&1&&(C(0,"span",12),fe(1,"safeHtml")),t&2){let e=s(2);r("innerHTML",he(1,1,e.item.label),ue)}}function tn(t,a){if(t&1&&C(0,"p-badge",13),t&2){let e=s(2);r("styleClass",e.item.badgeStyleClass)("value",e.item.badge)}}function nn(t,a){if(t&1&&p(0,Xt,1,6,"span",9)(1,Jt,2,3,"span",10)(2,en,2,3,"ng-template",null,1,F)(4,tn,1,2,"p-badge",11),t&2){let e=j(3),n=s();r("ngIf",n.item.icon),c(),r("ngIf",n.item.escape!==!1)("ngIfElse",e),c(3),r("ngIf",n.item.badge)}}var on=["start"],an=["end"],rn=["header"],sn=["item"],ln=["submenuheader"],cn=["list"],pn=["container"],dn=(t,a)=>({showTransitionParams:t,hideTransitionParams:a}),mn=t=>({value:"visible",params:t}),lt=(t,a)=>({item:t,id:a});function un(t,a){t&1&&x(0)}function _n(t,a){if(t&1&&(d(0,"div"),p(1,un,1,0,"ng-container",8),m()),t&2){let e=s(2);u(e.cx("start")),_("data-pc-section","start"),c(),r("ngTemplateOutlet",e.startTemplate??e._startTemplate)}}function fn(t,a){if(t&1&&C(0,"li",12),t&2){let e=s(4);u(e.cx("separator"))}}function hn(t,a){if(t&1&&(d(0,"span"),N(1),m()),t&2){let e=s(3).$implicit;c(),K(e.label)}}function gn(t,a){if(t&1&&(C(0,"span",16),fe(1,"safeHtml")),t&2){let e=s(3).$implicit;r("innerHTML",he(1,1,e.label),ue)}}function bn(t,a){if(t&1&&(S(0),p(1,hn,2,1,"span",15)(2,gn,2,3,"ng-template",null,2,F),L()),t&2){let e=j(3),n=s(2).$implicit;c(),r("ngIf",n.escape!==!1)("ngIfElse",e)}}function yn(t,a){t&1&&x(0)}function xn(t,a){if(t&1&&(d(0,"li",13),p(1,bn,4,2,"ng-container",7)(2,yn,1,0,"ng-container",14),m()),t&2){let e=s(),n=e.$implicit,o=e.index,i=s(3);u(i.cx("submenuLabel")),r("tooltipOptions",n.tooltipOptions),_("data-automationid",n.automationId)("id",i.menuitemId(n,i.id,o)),c(),r("ngIf",!i.submenuHeaderTemplate&&!i._submenuHeaderTemplate),c(),r("ngTemplateOutlet",i.submenuHeaderTemplate??i._submenuHeaderTemplate)("ngTemplateOutletContext",I(8,ce,n))}}function vn(t,a){if(t&1&&C(0,"li",12),t&2){let e=s(5);u(e.cx("separator"))}}function wn(t,a){if(t&1){let e=O();d(0,"li",18),T("onMenuItemClick",function(o){g(e);let i=s(),l=i.$implicit,Q=i.index,B=s().index,pe=s(3);return b(pe.itemClick(o,pe.menuitemId(l,pe.id,B,Q)))}),m()}if(t&2){let e=s(),n=e.$implicit,o=e.index,i=s().index,l=s(3);E(n.style),u(l.cn(l.cx("item",V(13,lt,n,l.menuitemId(n,l.id,i,o))),n==null?null:n.styleClass)),r("pMenuItemContent",n)("itemTemplate",l.itemTemplate??l._itemTemplate)("tooltipOptions",n.tooltipOptions),_("data-pc-section","menuitem")("aria-label",l.label(n.label))("data-p-focused",l.isItemFocused(l.menuitemId(n,l.id,i,o)))("data-p-disabled",l.disabled(n.disabled))("aria-disabled",l.disabled(n.disabled))("id",l.menuitemId(n,l.id,i,o))}}function Cn(t,a){if(t&1&&p(0,vn,1,2,"li",10)(1,wn,1,16,"li",17),t&2){let e=a.$implicit,n=s().$implicit;r("ngIf",e.separator&&(e.visible!==!1||n.visible!==!1)),c(),r("ngIf",!e.separator&&e.visible!==!1&&(e.visible!==void 0||n.visible!==!1))}}function Tn(t,a){if(t&1&&p(0,fn,1,2,"li",10)(1,xn,3,10,"li",11)(2,Cn,2,2,"ng-template",9),t&2){let e=a.$implicit;r("ngIf",e.separator&&e.visible!==!1),c(),r("ngIf",!e.separator),c(),r("ngForOf",e.items)}}function In(t,a){if(t&1&&p(0,Tn,3,3,"ng-template",9),t&2){let e=s(2);r("ngForOf",e.model)}}function kn(t,a){if(t&1&&C(0,"li",12),t&2){let e=s(4);u(e.cx("separator"))}}function On(t,a){if(t&1){let e=O();d(0,"li",20),T("onMenuItemClick",function(o){g(e);let i=s(),l=i.$implicit,Q=i.index,B=s(3);return b(B.itemClick(o,B.menuitemId(l,B.id,Q)))}),m()}if(t&2){let e=s(),n=e.$implicit,o=e.index,i=s(3);u(i.cn(i.cx("item",V(12,lt,n,i.menuitemId(n,i.id,o))),n==null?null:n.styleClass)),r("pMenuItemContent",n)("itemTemplate",i.itemTemplate??i._itemTemplate)("ngStyle",n.style)("tooltipOptions",n.tooltipOptions),_("data-pc-section","menuitem")("aria-label",i.label(n.label))("data-p-focused",i.isItemFocused(i.menuitemId(n,i.id,o)))("data-p-disabled",i.disabled(n.disabled))("aria-disabled",i.disabled(n.disabled))("id",i.menuitemId(n,i.id,o))}}function Mn(t,a){if(t&1&&p(0,kn,1,2,"li",10)(1,On,1,15,"li",19),t&2){let e=a.$implicit;r("ngIf",e.separator&&e.visible!==!1),c(),r("ngIf",!e.separator&&e.visible!==!1)}}function Sn(t,a){if(t&1&&p(0,Mn,2,2,"ng-template",9),t&2){let e=s(2);r("ngForOf",e.model)}}function Ln(t,a){t&1&&x(0)}function Dn(t,a){if(t&1&&(d(0,"div"),p(1,Ln,1,0,"ng-container",8),m()),t&2){let e=s(2);u(e.cx("end")),_("data-pc-section","end"),c(),r("ngTemplateOutlet",e.endTemplate??e._endTemplate)}}function En(t,a){if(t&1){let e=O();d(0,"div",4,0),T("click",function(o){g(e);let i=s();return b(i.onOverlayClick(o))})("@overlayAnimation.start",function(o){g(e);let i=s();return b(i.onOverlayAnimationStart(o))})("@overlayAnimation.done",function(o){g(e);let i=s();return b(i.onOverlayAnimationEnd(o))}),p(2,_n,2,4,"div",5),d(3,"ul",6,1),T("focus",function(o){g(e);let i=s();return b(i.onListFocus(o))})("blur",function(o){g(e);let i=s();return b(i.onListBlur(o))})("keydown",function(o){g(e);let i=s();return b(i.onListKeyDown(o))}),p(5,In,1,1,null,7)(6,Sn,1,1,null,7),m(),p(7,Dn,2,4,"div",5),m()}if(t&2){let e=s();E(e.sx("root")),u(e.cn(e.cx("root"),e.styleClass)),r("ngStyle",e.style)("@overlayAnimation",I(24,mn,V(21,dn,e.showTransitionOptions,e.hideTransitionOptions)))("@.disabled",e.popup!==!0),_("data-pc-name","menu")("id",e.id),c(2),r("ngIf",e.startTemplate??e._startTemplate),c(),u(e.cx("list")),_("id",e.id+"_list")("tabindex",e.getTabIndexValue())("data-pc-section","menu")("aria-activedescendant",e.activedescendant())("aria-label",e.ariaLabel)("aria-labelledBy",e.ariaLabelledBy),c(2),r("ngIf",e.hasSubMenu()),c(),r("ngIf",!e.hasSubMenu()),c(),r("ngIf",e.endTemplate??e._endTemplate)}}var Vn={root:({instance:t})=>({position:t.popup?"absolute":"relative"})},Fn={root:({instance:t})=>["p-menu p-component",{"p-menu-overlay":t.popup}],start:"p-menu-start",list:"p-menu-list",submenuLabel:"p-menu-submenu-label",separator:"p-menu-separator",end:"p-menu-end",item:({instance:t,item:a,id:e})=>["p-menu-item",{"p-focus":t.focusedOptionId()&&e===t.focusedOptionId(),"p-disabled":t.disabled(a.disabled)},a.styleClass],itemContent:"p-menu-item-content",itemLink:"p-menu-item-link",itemIcon:({item:t})=>["p-menu-item-icon",t.icon,t.iconClass],itemLabel:"p-menu-item-label"},le=(()=>{class t extends se{name="menu";theme=st;classes=Fn;inlineStyles=Vn;static \u0275fac=(()=>{let e;return function(o){return(e||(e=P(t)))(o||t)}})();static \u0275prov=ie({token:t,factory:t.\u0275fac})}return t})();var ct=(()=>{class t{platformId;sanitizer;constructor(e,n){this.platformId=e,this.sanitizer=n}transform(e){return!e||!J(this.platformId)?e:this.sanitizer.bypassSecurityTrustHtml(e)}static \u0275fac=function(n){return new(n||t)($(Oe,16),$(Be,16))};static \u0275pipe=Se({name:"safeHtml",type:t,pure:!0})}return t})(),An=(()=>{class t extends ne{item;itemTemplate;onMenuItemClick=new w;menu;_componentStyle=z(le);constructor(e){super(),this.menu=e}onItemClick(e,n){this.onMenuItemClick.emit({originalEvent:e,item:n})}static \u0275fac=function(n){return new(n||t)($(Ie(()=>pt)))};static \u0275cmp=q({type:t,selectors:[["","pMenuItemContent",""]],inputs:{item:[0,"pMenuItemContent","item"],itemTemplate:"itemTemplate"},outputs:{onMenuItemClick:"onMenuItemClick"},features:[U([le]),Z],attrs:Pt,decls:5,vars:5,consts:[["itemContent",""],["htmlLabel",""],[3,"click"],[4,"ngIf"],["pRipple","",3,"class","target",4,"ngIf"],["routerLinkActive","p-menu-item-link-active","pRipple","",3,"routerLink","queryParams","routerLinkActiveOptions","class","target","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state",4,"ngIf"],["pRipple","",3,"target"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["routerLinkActive","p-menu-item-link-active","pRipple","",3,"routerLink","queryParams","routerLinkActiveOptions","target","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state"],[3,"class","style",4,"ngIf"],[3,"class",4,"ngIf","ngIfElse"],[3,"styleClass","value",4,"ngIf"],[1,"p-menu-item-label",3,"innerHTML"],[3,"styleClass","value"]],template:function(n,o){if(n&1){let i=O();d(0,"div",2),T("click",function(Q){return g(i),b(o.onItemClick(Q,o.item))}),p(1,Ut,3,2,"ng-container",3)(2,Wt,2,4,"ng-container",3)(3,nn,5,4,"ng-template",null,0,F),m()}n&2&&(u(o.cx("itemContent")),_("data-pc-section","content"),c(),r("ngIf",!o.itemTemplate),c(),r("ngIf",o.itemTemplate))},dependencies:[X,Y,W,be,ze,Pe,tt,Te,Ce,Je,M,ct],encapsulation:2})}return t})(),pt=(()=>{class t extends ne{overlayService;model;popup;style;styleClass;autoZIndex=!0;baseZIndex=0;showTransitionOptions=".12s cubic-bezier(0, 0, 0.2, 1)";hideTransitionOptions=".1s linear";ariaLabel;ariaLabelledBy;id;tabindex=0;appendTo=Ae(void 0);onShow=new w;onHide=new w;onBlur=new w;onFocus=new w;listViewChild;containerViewChild;$appendTo=ge(()=>this.appendTo()||this.config.overlayAppendTo());container;scrollHandler;documentClickListener;documentResizeListener;preventDocumentDefault;target;visible;focusedOptionId=ge(()=>this.focusedOptionIndex()!==-1?this.focusedOptionIndex():null);focusedOptionIndex=me(-1);selectedOptionIndex=me(-1);focused=!1;overlayVisible=!1;relativeAlign;_componentStyle=z(le);constructor(e){super(),this.overlayService=e,this.id=this.id||Ke("pn_id_")}toggle(e){this.visible?this.hide():this.show(e),this.preventDocumentDefault=!0}show(e){this.target=e.currentTarget,this.relativeAlign=e.relativeAlign,this.visible=!0,this.preventDocumentDefault=!0,this.overlayVisible=!0,this.cd.markForCheck()}ngOnInit(){super.ngOnInit(),this.popup||this.bindDocumentClickListener()}startTemplate;_startTemplate;endTemplate;_endTemplate;headerTemplate;_headerTemplate;itemTemplate;_itemTemplate;submenuHeaderTemplate;_submenuHeaderTemplate;templates;ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"start":this._startTemplate=e.template;break;case"end":this._endTemplate=e.template;break;case"item":this._itemTemplate=e.template;break;case"submenuheader":this._submenuHeaderTemplate=e.template;break;default:this._itemTemplate=e.template;break}})}getTabIndexValue(){return this.tabindex!==void 0?this.tabindex.toString():null}onOverlayAnimationStart(e){switch(e.toState){case"visible":this.popup&&(this.container=e.element,this.moveOnTop(),this.onShow.emit({}),this.attrSelector&&this.container?.setAttribute(this.attrSelector,""),this.appendOverlay(),this.alignOverlay(),this.bindDocumentClickListener(),this.bindDocumentResizeListener(),this.bindScrollListener(),te(this.listViewChild?.nativeElement));break;case"void":this.onOverlayHide(),this.onHide.emit({});break}}onOverlayAnimationEnd(e){switch(e.toState){case"void":this.autoZIndex&&k.clear(e.element);break}}alignOverlay(){this.relativeAlign?Ze(this.container,this.target):qe(this.container,this.target)}appendOverlay(){Ge.appendOverlay(this.container,this.$appendTo()==="body"?this.document.body:this.$appendTo(),this.$appendTo())}restoreOverlayAppend(){this.container&&this.$appendTo()!=="self"&&this.renderer.appendChild(this.el.nativeElement,this.container)}moveOnTop(){this.autoZIndex&&k.set("menu",this.container,this.baseZIndex+this.config.zIndex.menu)}hide(){this.visible=!1,this.relativeAlign=!1,this.cd.markForCheck()}onWindowResize(){this.visible&&!Ne()&&this.hide()}menuitemId(e,n,o,i){return e?.id??`${n}_${o}${i!==void 0?"_"+i:""}`}isItemFocused(e){return this.focusedOptionId()===e}label(e){return typeof e=="function"?e():e}disabled(e){return typeof e=="function"?e():typeof e>"u"?!1:e}activedescendant(){return this.focused?this.focusedOptionId():void 0}onListFocus(e){this.focused||(this.focused=!0,!this.popup&&this.changeFocusedOptionIndex(0),this.onFocus.emit(e))}onListBlur(e){this.focused&&(this.focused=!1,this.changeFocusedOptionIndex(-1),this.selectedOptionIndex.set(-1),this.focusedOptionIndex.set(-1),this.onBlur.emit(e))}onListKeyDown(e){switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"Enter":this.onEnterKey(e);break;case"NumpadEnter":this.onEnterKey(e);break;case"Space":this.onSpaceKey(e);break;case"Escape":case"Tab":this.popup&&(te(this.target),this.hide()),this.overlayVisible&&this.hide();break;default:break}}onArrowDownKey(e){let n=this.findNextOptionIndex(this.focusedOptionIndex());this.changeFocusedOptionIndex(n),e.preventDefault()}onArrowUpKey(e){if(e.altKey&&this.popup)te(this.target),this.hide(),e.preventDefault();else{let n=this.findPrevOptionIndex(this.focusedOptionIndex());this.changeFocusedOptionIndex(n),e.preventDefault()}}onHomeKey(e){this.changeFocusedOptionIndex(0),e.preventDefault()}onEndKey(e){this.changeFocusedOptionIndex(ee(this.containerViewChild?.nativeElement,'li[data-pc-section="menuitem"][data-p-disabled="false"]').length-1),e.preventDefault()}onEnterKey(e){let n=ae(this.containerViewChild?.nativeElement,`li[id="${`${this.focusedOptionIndex()}`}"]`),o=n&&(ae(n,'[data-pc-section="action"]')||ae(n,"a,button"));this.popup&&te(this.target),o?o.click():n&&n.click(),e.preventDefault()}onSpaceKey(e){this.onEnterKey(e)}findNextOptionIndex(e){let o=[...ee(this.containerViewChild?.nativeElement,'li[data-pc-section="menuitem"][data-p-disabled="false"]')].findIndex(i=>i.id===e);return o>-1?o+1:0}findPrevOptionIndex(e){let o=[...ee(this.containerViewChild?.nativeElement,'li[data-pc-section="menuitem"][data-p-disabled="false"]')].findIndex(i=>i.id===e);return o>-1?o-1:0}changeFocusedOptionIndex(e){let n=ee(this.containerViewChild?.nativeElement,'li[data-pc-section="menuitem"][data-p-disabled="false"]');if(n.length>0){let o=e>=n.length?n.length-1:e<0?0:e;o>-1&&this.focusedOptionIndex.set(n[o].getAttribute("id"))}}itemClick(e,n){let{originalEvent:o,item:i}=e;if(this.focused||(this.focused=!0,this.onFocus.emit()),i.disabled){o.preventDefault();return}!i.url&&!i.routerLink&&o.preventDefault(),i.command&&i.command({originalEvent:o,item:i}),this.popup&&this.hide(),!this.popup&&this.focusedOptionIndex()!==n&&this.focusedOptionIndex.set(n)}onOverlayClick(e){this.popup&&this.overlayService.add({originalEvent:e,target:this.el.nativeElement}),this.preventDocumentDefault=!0}bindDocumentClickListener(){if(!this.documentClickListener&&J(this.platformId)){let e=this.el?this.el.nativeElement.ownerDocument:"document";this.documentClickListener=this.renderer.listen(e,"click",n=>{let o=this.containerViewChild?.nativeElement&&!this.containerViewChild?.nativeElement.contains(n.target),i=!(this.target&&(this.target===n.target||this.target.contains(n.target)));!this.popup&&o&&i&&this.onListBlur(n),this.preventDocumentDefault&&this.overlayVisible&&o&&i&&(this.hide(),this.preventDocumentDefault=!1)})}}unbindDocumentClickListener(){this.documentClickListener&&(this.documentClickListener(),this.documentClickListener=null)}bindDocumentResizeListener(){if(!this.documentResizeListener&&J(this.platformId)){let e=this.document.defaultView;this.documentResizeListener=this.renderer.listen(e,"resize",this.onWindowResize.bind(this))}}unbindDocumentResizeListener(){this.documentResizeListener&&(this.documentResizeListener(),this.documentResizeListener=null)}bindScrollListener(){!this.scrollHandler&&J(this.platformId)&&(this.scrollHandler=new Xe(this.target,()=>{this.visible&&this.hide()})),this.scrollHandler?.bindScrollListener()}unbindScrollListener(){this.scrollHandler&&(this.scrollHandler.unbindScrollListener(),this.scrollHandler=null)}onOverlayHide(){this.unbindDocumentClickListener(),this.unbindDocumentResizeListener(),this.unbindScrollListener(),this.preventDocumentDefault=!1,this.cd.destroyed||(this.target=null)}ngOnDestroy(){this.popup&&(this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.container&&this.autoZIndex&&k.clear(this.container),this.restoreOverlayAppend(),this.onOverlayHide()),this.popup||this.unbindDocumentClickListener(),super.ngOnDestroy()}hasSubMenu(){return this.model?.some(e=>e.items)??!1}isItemHidden(e){return e.separator?e.visible===!1||e.items&&e.items.some(n=>n.visible!==!1):e.visible===!1}static \u0275fac=function(n){return new(n||t)($(Ue))};static \u0275cmp=q({type:t,selectors:[["p-menu"]],contentQueries:function(n,o,i){if(n&1&&(y(i,on,4),y(i,an,4),y(i,rn,4),y(i,sn,4),y(i,ln,4),y(i,re,4)),n&2){let l;f(l=h())&&(o.startTemplate=l.first),f(l=h())&&(o.endTemplate=l.first),f(l=h())&&(o.headerTemplate=l.first),f(l=h())&&(o.itemTemplate=l.first),f(l=h())&&(o.submenuHeaderTemplate=l.first),f(l=h())&&(o.templates=l)}},viewQuery:function(n,o){if(n&1&&(D(cn,5),D(pn,5)),n&2){let i;f(i=h())&&(o.listViewChild=i.first),f(i=h())&&(o.containerViewChild=i.first)}},inputs:{model:"model",popup:[2,"popup","popup",v],style:"style",styleClass:"styleClass",autoZIndex:[2,"autoZIndex","autoZIndex",v],baseZIndex:[2,"baseZIndex","baseZIndex",G],showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",id:"id",tabindex:[2,"tabindex","tabindex",G],appendTo:[1,"appendTo"]},outputs:{onShow:"onShow",onHide:"onHide",onBlur:"onBlur",onFocus:"onFocus"},features:[U([le]),Z],decls:1,vars:1,consts:[["container",""],["list",""],["htmlSubmenuLabel",""],[3,"class","style","ngStyle","click",4,"ngIf"],[3,"click","ngStyle"],[3,"class",4,"ngIf"],["role","menu",3,"focus","blur","keydown"],[4,"ngIf"],[4,"ngTemplateOutlet"],["ngFor","",3,"ngForOf"],["role","separator",3,"class",4,"ngIf"],["pTooltip","","role","none",3,"class","tooltipOptions",4,"ngIf"],["role","separator"],["pTooltip","","role","none",3,"tooltipOptions"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[4,"ngIf","ngIfElse"],[3,"innerHTML"],["pTooltip","","role","menuitem",3,"class","pMenuItemContent","itemTemplate","style","tooltipOptions","onMenuItemClick",4,"ngIf"],["pTooltip","","role","menuitem",3,"onMenuItemClick","pMenuItemContent","itemTemplate","tooltipOptions"],["pTooltip","","role","menuitem",3,"class","pMenuItemContent","itemTemplate","ngStyle","tooltipOptions","onMenuItemClick",4,"ngIf"],["pTooltip","","role","menuitem",3,"onMenuItemClick","pMenuItemContent","itemTemplate","ngStyle","tooltipOptions"]],template:function(n,o){n&1&&p(0,En,8,26,"div",3),n&2&&r("ngIf",!o.popup||o.visible)},dependencies:[X,Re,Y,W,Qe,be,An,Te,it,Ce,M,ct],encapsulation:2,data:{animation:[oe("overlayAnimation",[R(":enter",[H({opacity:0,transform:"scaleY(0.8)"}),A("{{showTransitionParams}}")]),R(":leave",[A("{{hideTransitionParams}}",H({opacity:0}))])])]},changeDetection:0})}return t})(),Bi=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=_e({type:t});static \u0275inj=de({imports:[pt,M,M]})}return t})();export{ai as a,pt as b,Bi as c};
