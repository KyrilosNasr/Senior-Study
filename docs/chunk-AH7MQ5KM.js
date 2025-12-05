import{a as Mt,b as I,j as Ft,k as It,m as ct,n as Nt}from"./chunk-47HPTYDK.js";import{D as st,E as Ct,J as wt,K as Dt,L as j,Q as lt,T as q,ca as H,k as xt,ka as Bt,la as kt,m as P,ma as tt,na as L,p as E,r as Y,ua as F}from"./chunk-FHCI6K3X.js";import{Aa as u,Ab as at,Ac as Tt,Ba as dt,Bb as it,Cb as C,Db as J,Eb as bt,Hb as A,Jb as b,Kb as M,Lb as w,Ma as r,Mb as h,Nb as R,Ob as c,Pb as d,Qb as ft,Rb as mt,Sb as vt,Vb as ht,Wb as l,Xb as ot,Yb as rt,ab as T,ba as V,bb as U,ca as D,cc as B,da as $,eb as x,fb as pt,gb as f,ha as v,lc as gt,ma as W,mb as y,na as G,nb as S,oa as z,ob as Q,qc as m,rc as yt,sc as k,tb as p,tc as _t,ub as g,uc as X,va as O,vb as _,wb as Z,zb as ut,zc as N}from"./chunk-S2MQBBOY.js";var Et=`
    .p-card {
        background: dt('card.background');
        color: dt('card.color');
        box-shadow: dt('card.shadow');
        border-radius: dt('card.border.radius');
        display: flex;
        flex-direction: column;
    }

    .p-card-caption {
        display: flex;
        flex-direction: column;
        gap: dt('card.caption.gap');
    }

    .p-card-body {
        padding: dt('card.body.padding');
        display: flex;
        flex-direction: column;
        gap: dt('card.body.gap');
    }

    .p-card-title {
        font-size: dt('card.title.font.size');
        font-weight: dt('card.title.font.weight');
    }

    .p-card-subtitle {
        color: dt('card.subtitle.color');
    }
`;var Kt=["header"],$t=["title"],Wt=["subtitle"],Gt=["content"],Ut=["footer"],Zt=["*",[["p-header"]],[["p-footer"]]],Jt=["*","p-header","p-footer"];function Xt(e,s){e&1&&C(0)}function Yt(e,s){if(e&1&&(g(0,"div"),w(1,1),f(2,Xt,1,0,"ng-container",1),_()),e&2){let t=b();l(t.cx("header")),r(2),p("ngTemplateOutlet",t.headerTemplate||t._headerTemplate)}}function te(e,s){if(e&1&&(at(0),ot(1),it()),e&2){let t=b(2);r(),rt(t.header)}}function ee(e,s){e&1&&C(0)}function ne(e,s){if(e&1&&(g(0,"div"),f(1,te,2,1,"ng-container",2)(2,ee,1,0,"ng-container",1),_()),e&2){let t=b();l(t.cx("title")),r(),p("ngIf",t.header&&!t._titleTemplate&&!t.titleTemplate),r(),p("ngTemplateOutlet",t.titleTemplate||t._titleTemplate)}}function ae(e,s){if(e&1&&(at(0),ot(1),it()),e&2){let t=b(2);r(),rt(t.subheader)}}function ie(e,s){e&1&&C(0)}function oe(e,s){if(e&1&&(g(0,"div"),f(1,ae,2,1,"ng-container",2)(2,ie,1,0,"ng-container",1),_()),e&2){let t=b();l(t.cx("subtitle")),r(),p("ngIf",t.subheader&&!t._subtitleTemplate&&!t.subtitleTemplate),r(),p("ngTemplateOutlet",t.subtitleTemplate||t._subtitleTemplate)}}function re(e,s){e&1&&C(0)}function se(e,s){e&1&&C(0)}function le(e,s){if(e&1&&(g(0,"div"),w(1,2),f(2,se,1,0,"ng-container",1),_()),e&2){let t=b();l(t.cx("footer")),r(2),p("ngTemplateOutlet",t.footerTemplate||t._footerTemplate)}}var ce=`
    ${Et}

    .p-card {
        display: block;
    }
`,de={root:"p-card p-component",header:"p-card-header",body:"p-card-body",caption:"p-card-caption",title:"p-card-title",subtitle:"p-card-subtitle",content:"p-card-content",footer:"p-card-footer"},Lt=(()=>{class e extends F{name="card";theme=ce;classes=de;static \u0275fac=(()=>{let t;return function(n){return(t||(t=u(e)))(n||e)}})();static \u0275prov=D({token:e,factory:e.\u0275fac})}return e})();var pe=(()=>{class e extends I{header;subheader;set style(t){H(this._style(),t)||this._style.set(t)}styleClass;headerFacet;footerFacet;headerTemplate;titleTemplate;subtitleTemplate;contentTemplate;footerTemplate;_headerTemplate;_titleTemplate;_subtitleTemplate;_contentTemplate;_footerTemplate;_style=O(null);_componentStyle=v(Lt);getBlockableElement(){return this.el.nativeElement.children[0]}templates;ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"header":this._headerTemplate=t.template;break;case"title":this._titleTemplate=t.template;break;case"subtitle":this._subtitleTemplate=t.template;break;case"content":this._contentTemplate=t.template;break;case"footer":this._footerTemplate=t.template;break;default:this._contentTemplate=t.template;break}})}static \u0275fac=(()=>{let t;return function(n){return(t||(t=u(e)))(n||e)}})();static \u0275cmp=T({type:e,selectors:[["p-card"]],contentQueries:function(a,n,i){if(a&1&&(h(i,Bt,5),h(i,kt,5),h(i,Kt,4),h(i,$t,4),h(i,Wt,4),h(i,Gt,4),h(i,Ut,4),h(i,tt,4)),a&2){let o;c(o=d())&&(n.headerFacet=o.first),c(o=d())&&(n.footerFacet=o.first),c(o=d())&&(n.headerTemplate=o.first),c(o=d())&&(n.titleTemplate=o.first),c(o=d())&&(n.subtitleTemplate=o.first),c(o=d())&&(n.contentTemplate=o.first),c(o=d())&&(n.footerTemplate=o.first),c(o=d())&&(n.templates=o)}},hostVars:5,hostBindings:function(a,n){a&2&&(y("data-pc-name","card"),ht(n._style()),l(n.cn(n.cx("root"),n.styleClass)))},inputs:{header:"header",subheader:"subheader",style:"style",styleClass:"styleClass"},features:[B([Lt]),x],ngContentSelectors:Jt,decls:8,vars:9,consts:[[3,"class",4,"ngIf"],[4,"ngTemplateOutlet"],[4,"ngIf"]],template:function(a,n){a&1&&(M(Zt),f(0,Yt,3,3,"div",0),g(1,"div"),f(2,ne,3,4,"div",0)(3,oe,3,4,"div",0),g(4,"div"),w(5),f(6,re,1,0,"ng-container",1),_(),f(7,le,3,3,"div",0),_()),a&2&&(p("ngIf",n.headerFacet||n.headerTemplate||n._headerTemplate),r(),l(n.cx("body")),r(),p("ngIf",n.header||n.titleTemplate||n._titleTemplate),r(),p("ngIf",n.subheader||n.subtitleTemplate||n._subtitleTemplate),r(),l(n.cx("content")),r(2),p("ngTemplateOutlet",n.contentTemplate||n._contentTemplate),r(),p("ngIf",n.footerFacet||n.footerTemplate||n._footerTemplate))},dependencies:[E,xt,P,L],encapsulation:2,changeDetection:0})}return e})(),Ye=(()=>{class e{static \u0275fac=function(a){return new(a||e)};static \u0275mod=U({type:e});static \u0275inj=$({imports:[pe,L,L]})}return e})();var St=`
    .p-tabs {
        display: flex;
        flex-direction: column;
    }

    .p-tablist {
        display: flex;
        position: relative;
        overflow: hidden;
        background: dt('tabs.tablist.background');
    }

    .p-tablist-viewport {
        overflow-x: auto;
        overflow-y: hidden;
        scroll-behavior: smooth;
        scrollbar-width: none;
        overscroll-behavior: contain auto;
    }

    .p-tablist-viewport::-webkit-scrollbar {
        display: none;
    }

    .p-tablist-tab-list {
        position: relative;
        display: flex;
        border-style: solid;
        border-color: dt('tabs.tablist.border.color');
        border-width: dt('tabs.tablist.border.width');
    }

    .p-tablist-content {
        flex-grow: 1;
    }

    .p-tablist-nav-button {
        all: unset;
        position: absolute !important;
        flex-shrink: 0;
        inset-block-start: 0;
        z-index: 2;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: dt('tabs.nav.button.background');
        color: dt('tabs.nav.button.color');
        width: dt('tabs.nav.button.width');
        transition:
            color dt('tabs.transition.duration'),
            outline-color dt('tabs.transition.duration'),
            box-shadow dt('tabs.transition.duration');
        box-shadow: dt('tabs.nav.button.shadow');
        outline-color: transparent;
        cursor: pointer;
    }

    .p-tablist-nav-button:focus-visible {
        z-index: 1;
        box-shadow: dt('tabs.nav.button.focus.ring.shadow');
        outline: dt('tabs.nav.button.focus.ring.width') dt('tabs.nav.button.focus.ring.style') dt('tabs.nav.button.focus.ring.color');
        outline-offset: dt('tabs.nav.button.focus.ring.offset');
    }

    .p-tablist-nav-button:hover {
        color: dt('tabs.nav.button.hover.color');
    }

    .p-tablist-prev-button {
        inset-inline-start: 0;
    }

    .p-tablist-next-button {
        inset-inline-end: 0;
    }

    .p-tablist-prev-button:dir(rtl),
    .p-tablist-next-button:dir(rtl) {
        transform: rotate(180deg);
    }

    .p-tab {
        flex-shrink: 0;
        cursor: pointer;
        user-select: none;
        position: relative;
        border-style: solid;
        white-space: nowrap;
        gap: dt('tabs.tab.gap');
        background: dt('tabs.tab.background');
        border-width: dt('tabs.tab.border.width');
        border-color: dt('tabs.tab.border.color');
        color: dt('tabs.tab.color');
        padding: dt('tabs.tab.padding');
        font-weight: dt('tabs.tab.font.weight');
        transition:
            background dt('tabs.transition.duration'),
            border-color dt('tabs.transition.duration'),
            color dt('tabs.transition.duration'),
            outline-color dt('tabs.transition.duration'),
            box-shadow dt('tabs.transition.duration');
        margin: dt('tabs.tab.margin');
        outline-color: transparent;
    }

    .p-tab:not(.p-disabled):focus-visible {
        z-index: 1;
        box-shadow: dt('tabs.tab.focus.ring.shadow');
        outline: dt('tabs.tab.focus.ring.width') dt('tabs.tab.focus.ring.style') dt('tabs.tab.focus.ring.color');
        outline-offset: dt('tabs.tab.focus.ring.offset');
    }

    .p-tab:not(.p-tab-active):not(.p-disabled):hover {
        background: dt('tabs.tab.hover.background');
        border-color: dt('tabs.tab.hover.border.color');
        color: dt('tabs.tab.hover.color');
    }

    .p-tab-active {
        background: dt('tabs.tab.active.background');
        border-color: dt('tabs.tab.active.border.color');
        color: dt('tabs.tab.active.color');
    }

    .p-tabpanels {
        background: dt('tabs.tabpanel.background');
        color: dt('tabs.tabpanel.color');
        padding: dt('tabs.tabpanel.padding');
        outline: 0 none;
    }

    .p-tabpanel:focus-visible {
        box-shadow: dt('tabs.tabpanel.focus.ring.shadow');
        outline: dt('tabs.tabpanel.focus.ring.width') dt('tabs.tabpanel.focus.ring.style') dt('tabs.tabpanel.focus.ring.color');
        outline-offset: dt('tabs.tabpanel.focus.ring.offset');
    }

    .p-tablist-active-bar {
        z-index: 1;
        display: block;
        position: absolute;
        inset-block-end: dt('tabs.active.bar.bottom');
        height: dt('tabs.active.bar.height');
        background: dt('tabs.active.bar.background');
        transition: 250ms cubic-bezier(0.35, 0, 0.25, 1);
    }
`;var ue=["data-p-icon","chevron-left"],Qt=(()=>{class e extends Ft{static \u0275fac=(()=>{let t;return function(n){return(t||(t=u(e)))(n||e)}})();static \u0275cmp=T({type:e,selectors:[["","data-p-icon","chevron-left"]],features:[x],attrs:ue,decls:1,vars:0,consts:[["d","M9.61296 13C9.50997 13.0005 9.40792 12.9804 9.3128 12.9409C9.21767 12.9014 9.13139 12.8433 9.05902 12.7701L3.83313 7.54416C3.68634 7.39718 3.60388 7.19795 3.60388 6.99022C3.60388 6.78249 3.68634 6.58325 3.83313 6.43628L9.05902 1.21039C9.20762 1.07192 9.40416 0.996539 9.60724 1.00012C9.81032 1.00371 10.0041 1.08597 10.1477 1.22959C10.2913 1.37322 10.3736 1.56698 10.3772 1.77005C10.3808 1.97313 10.3054 2.16968 10.1669 2.31827L5.49496 6.99022L10.1669 11.6622C10.3137 11.8091 10.3962 12.0084 10.3962 12.2161C10.3962 12.4238 10.3137 12.6231 10.1669 12.7701C10.0945 12.8433 10.0083 12.9014 9.91313 12.9409C9.81801 12.9804 9.71596 13.0005 9.61296 13Z","fill","currentColor"]],template:function(a,n){a&1&&(z(),ut(0,"path",0))},encapsulation:2})}return e})();var be=["previcon"],fe=["nexticon"],jt=["content"],me=["prevButton"],ve=["nextButton"],he=["inkbar"],ge=["tabs"],K=["*"];function ye(e,s){e&1&&C(0)}function _e(e,s){if(e&1&&f(0,ye,1,0,"ng-container",11),e&2){let t=b(2);p("ngTemplateOutlet",t.prevIconTemplate||t._prevIconTemplate)}}function Te(e,s){e&1&&(z(),Z(0,"svg",10))}function xe(e,s){if(e&1){let t=J();g(0,"button",9,3),A("click",function(){W(t);let n=b();return G(n.onPrevButtonClick())}),S(2,_e,1,1,"ng-container")(3,Te,1,0,":svg:svg",10),_()}if(e&2){let t=b();l(t.cx("prevButton")),y("aria-label",t.prevButtonAriaLabel)("tabindex",t.tabindex())("data-pc-group-section","navigator"),r(2),Q(t.prevIconTemplate||t._prevIconTemplate?2:3)}}function Ce(e,s){e&1&&C(0)}function we(e,s){if(e&1&&f(0,Ce,1,0,"ng-container",11),e&2){let t=b(2);p("ngTemplateOutlet",t.nextIconTemplate||t._nextIconTemplate)}}function De(e,s){e&1&&(z(),Z(0,"svg",12))}function Me(e,s){if(e&1){let t=J();g(0,"button",9,4),A("click",function(){W(t);let n=b();return G(n.onNextButtonClick())}),S(2,we,1,1,"ng-container")(3,De,1,0,":svg:svg",12),_()}if(e&2){let t=b();l(t.cx("nextButton")),y("aria-label",t.nextButtonAriaLabel)("tabindex",t.tabindex())("data-pc-group-section","navigator"),r(2),Q(t.nextIconTemplate||t._nextIconTemplate?2:3)}}function Be(e,s){e&1&&w(0)}function ke(e,s){e&1&&C(0)}function Fe(e,s){if(e&1&&f(0,ke,1,0,"ng-container",1),e&2){let t=b(),a=vt(1);p("ngTemplateOutlet",t.content()?t.content():a)}}var Ie={root:({instance:e})=>["p-tabs p-component",{"p-tabs-scrollable":e.scrollable()}]},Rt=(()=>{class e extends F{name="tabs";theme=St;classes=Ie;static \u0275fac=(()=>{let t;return function(n){return(t||(t=u(e)))(n||e)}})();static \u0275prov=D({token:e,factory:e.\u0275fac})}return e})();var Ne={root:"p-tablist",content:"p-tablist-content p-tablist-viewport",tabList:"p-tablist-tab-list",activeBar:"p-tablist-active-bar",prevButton:"p-tablist-prev-button p-tablist-nav-button",nextButton:"p-tablist-next-button p-tablist-nav-button"},Pt=(()=>{class e extends F{name="tablist";classes=Ne;static \u0275fac=(()=>{let t;return function(n){return(t||(t=u(e)))(n||e)}})();static \u0275prov=D({token:e,factory:e.\u0275fac})}return e})();var qt=(()=>{class e extends I{prevIconTemplate;nextIconTemplate;templates;content;prevButton;nextButton;inkbar;tabs;pcTabs=v(V(()=>et));isPrevButtonEnabled=O(!1);isNextButtonEnabled=O(!1);resizeObserver;showNavigators=m(()=>this.pcTabs.showNavigators());tabindex=m(()=>this.pcTabs.tabindex());scrollable=m(()=>this.pcTabs.scrollable());_componentStyle=v(Pt);constructor(){super(),yt(()=>{this.pcTabs.value(),Y(this.platformId)&&setTimeout(()=>{this.updateInkBar()})})}get prevButtonAriaLabel(){return this.config?.translation?.aria?.previous}get nextButtonAriaLabel(){return this.config?.translation?.aria?.next}ngAfterViewInit(){super.ngAfterViewInit(),this.showNavigators()&&Y(this.platformId)&&(this.updateButtonState(),this.bindResizeObserver())}_prevIconTemplate;_nextIconTemplate;ngAfterContentInit(){this.templates?.forEach(t=>{switch(t.getType()){case"previcon":this._prevIconTemplate=t.template;break;case"nexticon":this._nextIconTemplate=t.template;break}})}ngOnDestroy(){this.unbindResizeObserver(),super.ngOnDestroy()}onScroll(t){this.showNavigators()&&this.updateButtonState(),t.preventDefault()}onPrevButtonClick(){let t=this.content.nativeElement,a=q(t),n=Math.abs(t.scrollLeft)-a,i=n<=0?0:n;t.scrollLeft=st(t)?-1*i:i}onNextButtonClick(){let t=this.content.nativeElement,a=q(t)-this.getVisibleButtonWidths(),n=t.scrollLeft+a,i=t.scrollWidth-a,o=n>=i?i:n;t.scrollLeft=st(t)?-1*o:o}updateButtonState(){let t=this.content?.nativeElement,a=this.el?.nativeElement,{scrollWidth:n,offsetWidth:i}=t,o=Math.abs(t.scrollLeft),nt=q(t);this.isPrevButtonEnabled.set(o!==0),this.isNextButtonEnabled.set(a.offsetWidth>=i&&Math.abs(o-n+nt)>1)}updateInkBar(){let t=this.content?.nativeElement,a=this.inkbar?.nativeElement,n=this.tabs?.nativeElement,i=wt(t,'[data-pc-name="tab"][data-p-active="true"]');a&&(a.style.width=Ct(i)+"px",a.style.left=lt(i).left-lt(n).left+"px")}getVisibleButtonWidths(){let t=this.prevButton?.nativeElement,a=this.nextButton?.nativeElement;return[t,a].reduce((n,i)=>i?n+q(i):n,0)}bindResizeObserver(){this.resizeObserver=new ResizeObserver(()=>this.updateButtonState()),this.resizeObserver.observe(this.el.nativeElement)}unbindResizeObserver(){this.resizeObserver&&(this.resizeObserver.unobserve(this.el.nativeElement),this.resizeObserver=null)}static \u0275fac=function(a){return new(a||e)};static \u0275cmp=T({type:e,selectors:[["p-tablist"]],contentQueries:function(a,n,i){if(a&1&&(h(i,be,4),h(i,fe,4),h(i,tt,4)),a&2){let o;c(o=d())&&(n.prevIconTemplate=o.first),c(o=d())&&(n.nextIconTemplate=o.first),c(o=d())&&(n.templates=o)}},viewQuery:function(a,n){if(a&1&&(R(jt,5),R(me,5),R(ve,5),R(he,5),R(ge,5)),a&2){let i;c(i=d())&&(n.content=i.first),c(i=d())&&(n.prevButton=i.first),c(i=d())&&(n.nextButton=i.first),c(i=d())&&(n.inkbar=i.first),c(i=d())&&(n.tabs=i.first)}},hostVars:3,hostBindings:function(a,n){a&2&&(y("data-pc-name","tablist"),l(n.cx("root")))},features:[B([Pt]),x],ngContentSelectors:K,decls:9,vars:9,consts:[["content",""],["tabs",""],["inkbar",""],["prevButton",""],["nextButton",""],["type","button","pRipple","",3,"class"],[3,"scroll"],["role","tablist"],["role","presentation"],["type","button","pRipple","",3,"click"],["data-p-icon","chevron-left"],[4,"ngTemplateOutlet"],["data-p-icon","chevron-right"]],template:function(a,n){if(a&1){let i=J();M(),S(0,xe,4,6,"button",5),g(1,"div",6,0),A("scroll",function(nt){return W(i),G(n.onScroll(nt))}),g(3,"div",7,1),w(5),Z(6,"span",8,2),_()(),S(8,Me,4,6,"button",5)}a&2&&(Q(n.showNavigators()&&n.isPrevButtonEnabled()?0:-1),r(),l(n.cx("content")),r(2),l(n.cx("tabList")),r(3),l(n.cx("activeBar")),y("data-pc-section","inkbar"),r(2),Q(n.showNavigators()&&n.isNextButtonEnabled()?8:-1))},dependencies:[E,P,Qt,It,Nt,ct,L],encapsulation:2,changeDetection:0})}return e})(),Ee={root:({instance:e})=>["p-tab",{"p-tab-active":e.active(),"p-disabled":e.disabled()}]},Vt=(()=>{class e extends F{name="tab";classes=Ee;static \u0275fac=(()=>{let t;return function(n){return(t||(t=u(e)))(n||e)}})();static \u0275prov=D({token:e,factory:e.\u0275fac})}return e})();var Le=(()=>{class e extends I{value=X();disabled=k(!1,{transform:N});pcTabs=v(V(()=>et));pcTabList=v(V(()=>qt));el=v(dt);_componentStyle=v(Vt);ripple=m(()=>this.config.ripple());id=m(()=>`${this.pcTabs.id()}_tab_${this.value()}`);ariaControls=m(()=>`${this.pcTabs.id()}_tabpanel_${this.value()}`);active=m(()=>H(this.pcTabs.value(),this.value()));tabindex=m(()=>this.disabled()?-1:this.active()?this.pcTabs.tabindex():-1);mutationObserver;onFocus(t){this.disabled()||this.pcTabs.selectOnFocus()&&this.changeActiveValue()}onClick(t){this.disabled()||this.changeActiveValue()}onKeyDown(t){switch(t.code){case"ArrowRight":this.onArrowRightKey(t);break;case"ArrowLeft":this.onArrowLeftKey(t);break;case"Home":this.onHomeKey(t);break;case"End":this.onEndKey(t);break;case"PageDown":this.onPageDownKey(t);break;case"PageUp":this.onPageUpKey(t);break;case"Enter":case"NumpadEnter":case"Space":this.onEnterKey(t);break;default:break}t.stopPropagation()}ngAfterViewInit(){super.ngAfterViewInit(),this.bindMutationObserver()}onArrowRightKey(t){let a=this.findNextTab(t.currentTarget);a?this.changeFocusedTab(t,a):this.onHomeKey(t),t.preventDefault()}onArrowLeftKey(t){let a=this.findPrevTab(t.currentTarget);a?this.changeFocusedTab(t,a):this.onEndKey(t),t.preventDefault()}onHomeKey(t){let a=this.findFirstTab();this.changeFocusedTab(t,a),t.preventDefault()}onEndKey(t){let a=this.findLastTab();this.changeFocusedTab(t,a),t.preventDefault()}onPageDownKey(t){this.scrollInView(this.findLastTab()),t.preventDefault()}onPageUpKey(t){this.scrollInView(this.findFirstTab()),t.preventDefault()}onEnterKey(t){this.disabled()||this.changeActiveValue(),t.preventDefault()}findNextTab(t,a=!1){let n=a?t:t.nextElementSibling;return n?j(n,"data-p-disabled")||j(n,"data-pc-section")==="inkbar"?this.findNextTab(n):n:null}findPrevTab(t,a=!1){let n=a?t:t.previousElementSibling;return n?j(n,"data-p-disabled")||j(n,"data-pc-section")==="inkbar"?this.findPrevTab(n):n:null}findFirstTab(){return this.findNextTab(this.pcTabList?.tabs?.nativeElement?.firstElementChild,!0)}findLastTab(){return this.findPrevTab(this.pcTabList?.tabs?.nativeElement?.lastElementChild,!0)}changeActiveValue(){this.pcTabs.updateValue(this.value())}changeFocusedTab(t,a){Dt(a),this.scrollInView(a)}scrollInView(t){t?.scrollIntoView?.({block:"nearest"})}bindMutationObserver(){Y(this.platformId)&&(this.mutationObserver=new MutationObserver(t=>{t.forEach(()=>{this.active()&&this.pcTabList?.updateInkBar()})}),this.mutationObserver.observe(this.el.nativeElement,{childList:!0,characterData:!0,subtree:!0}))}unbindMutationObserver(){this.mutationObserver?.disconnect()}ngOnDestroy(){this.mutationObserver&&this.unbindMutationObserver(),super.ngOnDestroy()}static \u0275fac=(()=>{let t;return function(n){return(t||(t=u(e)))(n||e)}})();static \u0275cmp=T({type:e,selectors:[["p-tab"]],hostVars:11,hostBindings:function(a,n){a&1&&A("focus",function(o){return n.onFocus(o)})("click",function(o){return n.onClick(o)})("keydown",function(o){return n.onKeyDown(o)}),a&2&&(y("data-pc-name","tab")("id",n.id())("aria-controls",n.ariaControls())("role","tab")("aria-selected",n.active())("aria-disabled",n.disabled())("data-p-disabled",n.disabled())("data-p-active",n.active())("tabindex",n.tabindex()),l(n.cx("root")))},inputs:{value:[1,"value"],disabled:[1,"disabled"]},outputs:{value:"valueChange"},features:[B([Vt]),pt([ct]),x],ngContentSelectors:K,decls:1,vars:0,template:function(a,n){a&1&&(M(),w(0))},dependencies:[E,L],encapsulation:2,changeDetection:0})}return e})(),Oe={root:({instance:e})=>["p-tabpanel",{"p-tabpanel-active":e.active()}]},zt=(()=>{class e extends F{name="tabpanel";classes=Oe;static \u0275fac=(()=>{let t;return function(n){return(t||(t=u(e)))(n||e)}})();static \u0275prov=D({token:e,factory:e.\u0275fac})}return e})();var Dn=(()=>{class e extends I{pcTabs=v(V(()=>et));lazy=k(!1,{transform:N});value=X(void 0);content=_t("content");id=m(()=>`${this.pcTabs.id()}_tabpanel_${this.value()}`);ariaLabelledby=m(()=>`${this.pcTabs.id()}_tab_${this.value()}`);active=m(()=>H(this.pcTabs.value(),this.value()));isLazyEnabled=m(()=>this.pcTabs.lazy()||this.lazy());hasBeenRendered=!1;shouldRender=m(()=>!this.isLazyEnabled()||this.hasBeenRendered?!0:this.active()?(this.hasBeenRendered=!0,!0):!1);_componentStyle=v(zt);static \u0275fac=(()=>{let t;return function(n){return(t||(t=u(e)))(n||e)}})();static \u0275cmp=T({type:e,selectors:[["p-tabpanel"]],contentQueries:function(a,n,i){a&1&&ft(i,n.content,jt,5),a&2&&mt()},hostVars:8,hostBindings:function(a,n){a&2&&(bt("hidden",!n.active()),y("data-pc-name","tabpanel")("id",n.id())("role","tabpanel")("aria-labelledby",n.ariaLabelledby())("data-p-active",n.active()),l(n.cx("root")))},inputs:{lazy:[1,"lazy"],value:[1,"value"]},outputs:{value:"valueChange"},features:[B([zt]),x],ngContentSelectors:K,decls:3,vars:1,consts:[["defaultContent",""],[4,"ngTemplateOutlet"]],template:function(a,n){a&1&&(M(),f(0,Be,1,0,"ng-template",null,0,gt),S(2,Fe,1,1,"ng-container")),a&2&&(r(2),Q(n.shouldRender()?2:-1))},dependencies:[P],encapsulation:2,changeDetection:0})}return e})(),Se={root:"p-tabpanels"},At=(()=>{class e extends F{name="tabpanels";classes=Se;static \u0275fac=(()=>{let t;return function(n){return(t||(t=u(e)))(n||e)}})();static \u0275prov=D({token:e,factory:e.\u0275fac})}return e})();var Qe=(()=>{class e extends I{_componentStyle=v(At);static \u0275fac=(()=>{let t;return function(n){return(t||(t=u(e)))(n||e)}})();static \u0275cmp=T({type:e,selectors:[["p-tabpanels"]],hostVars:4,hostBindings:function(a,n){a&2&&(y("data-pc-name","tabpanels")("role","presentation"),l(n.cx("root")))},features:[B([At]),x],ngContentSelectors:K,decls:1,vars:0,template:function(a,n){a&1&&(M(),w(0))},dependencies:[E],encapsulation:2,changeDetection:0})}return e})(),et=(()=>{class e extends I{value=X(void 0);scrollable=k(!1,{transform:N});lazy=k(!1,{transform:N});selectOnFocus=k(!1,{transform:N});showNavigators=k(!0,{transform:N});tabindex=k(0,{transform:Tt});id=O(Mt("pn_id_"));_componentStyle=v(Rt);updateValue(t){this.value.update(()=>t)}static \u0275fac=(()=>{let t;return function(n){return(t||(t=u(e)))(n||e)}})();static \u0275cmp=T({type:e,selectors:[["p-tabs"]],hostVars:4,hostBindings:function(a,n){a&2&&(y("data-pc-name","tabs")("id",n.id()),l(n.cx("root")))},inputs:{value:[1,"value"],scrollable:[1,"scrollable"],lazy:[1,"lazy"],selectOnFocus:[1,"selectOnFocus"],showNavigators:[1,"showNavigators"],tabindex:[1,"tabindex"]},outputs:{value:"valueChange"},features:[B([Rt]),x],ngContentSelectors:K,decls:1,vars:0,template:function(a,n){a&1&&(M(),w(0))},dependencies:[E],encapsulation:2,changeDetection:0})}return e})(),Mn=(()=>{class e{static \u0275fac=function(a){return new(a||e)};static \u0275mod=U({type:e});static \u0275inj=$({imports:[et,Qe,qt,Le]})}return e})();export{pe as a,Ye as b,qt as c,Le as d,Dn as e,Qe as f,et as g,Mn as h};
