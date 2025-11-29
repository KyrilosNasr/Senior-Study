import{a as Ft,b as I,k as nt,m as pt,n as Nt}from"./chunk-H3I524XT.js";import{D as ct,F as Dt,L as Mt,M as Bt,N as j,S as dt,V as q,ea as H,k as wt,ka as kt,la as It,m as P,ma as et,na as O,p as L,r as tt,ta as k}from"./chunk-EFMPFDS6.js";import{$b as l,Ab as _,Ac as Y,Bb as C,Cb as Z,Fb as J,Fc as E,Gb as ot,Gc as xt,Hb as rt,Ib as x,Jb as X,Kb as mt,Nb as A,Ob as b,Pb as M,Qb as w,Rb as h,Sa as r,Sb as V,Tb as c,Ub as d,Vb as vt,Wb as ht,X as z,Xb as gt,Y as D,Z as $,_b as yt,ac as st,ba as v,bc as lt,ga as W,gb as g,ha as G,hb as U,hc as B,ia as N,kb as y,lb as ft,mb as f,pa as S,qc as _t,sb as T,tb as R,ua as p,ub as Q,vc as m,wa as bt,wc as Tt,yc as F,zb as u,zc as Ct}from"./chunk-ANFRTOHF.js";var Et=`
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
`;var Kt=["header"],$t=["title"],Wt=["subtitle"],Gt=["content"],Ut=["footer"],Zt=["*",[["p-header"]],[["p-footer"]]],Jt=["*","p-header","p-footer"];function Xt(e,s){e&1&&x(0)}function Yt(e,s){if(e&1&&(_(0,"div"),w(1,1),f(2,Xt,1,0,"ng-container",1),C()),e&2){let t=b();l(t.cx("header")),r(2),u("ngTemplateOutlet",t.headerTemplate||t._headerTemplate)}}function te(e,s){if(e&1&&(ot(0),st(1),rt()),e&2){let t=b(2);r(),lt(t.header)}}function ee(e,s){e&1&&x(0)}function ne(e,s){if(e&1&&(_(0,"div"),f(1,te,2,1,"ng-container",2)(2,ee,1,0,"ng-container",1),C()),e&2){let t=b();l(t.cx("title")),r(),u("ngIf",t.header&&!t._titleTemplate&&!t.titleTemplate),r(),u("ngTemplateOutlet",t.titleTemplate||t._titleTemplate)}}function ae(e,s){if(e&1&&(ot(0),st(1),rt()),e&2){let t=b(2);r(),lt(t.subheader)}}function ie(e,s){e&1&&x(0)}function oe(e,s){if(e&1&&(_(0,"div"),f(1,ae,2,1,"ng-container",2)(2,ie,1,0,"ng-container",1),C()),e&2){let t=b();l(t.cx("subtitle")),r(),u("ngIf",t.subheader&&!t._subtitleTemplate&&!t.subtitleTemplate),r(),u("ngTemplateOutlet",t.subtitleTemplate||t._subtitleTemplate)}}function re(e,s){e&1&&x(0)}function se(e,s){e&1&&x(0)}function le(e,s){if(e&1&&(_(0,"div"),w(1,2),f(2,se,1,0,"ng-container",1),C()),e&2){let t=b();l(t.cx("footer")),r(2),u("ngTemplateOutlet",t.footerTemplate||t._footerTemplate)}}var ce=`
    ${Et}

    .p-card {
        display: block;
    }
`,de={root:"p-card p-component",header:"p-card-header",body:"p-card-body",caption:"p-card-caption",title:"p-card-title",subtitle:"p-card-subtitle",content:"p-card-content",footer:"p-card-footer"},Lt=(()=>{class e extends k{name="card";theme=ce;classes=de;static \u0275fac=(()=>{let t;return function(n){return(t||(t=p(e)))(n||e)}})();static \u0275prov=D({token:e,factory:e.\u0275fac})}return e})();var pe=(()=>{class e extends I{header;subheader;set style(t){H(this._style(),t)||this._style.set(t)}styleClass;headerFacet;footerFacet;headerTemplate;titleTemplate;subtitleTemplate;contentTemplate;footerTemplate;_headerTemplate;_titleTemplate;_subtitleTemplate;_contentTemplate;_footerTemplate;_style=S(null);_componentStyle=v(Lt);getBlockableElement(){return this.el.nativeElement.children[0]}templates;ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"header":this._headerTemplate=t.template;break;case"title":this._titleTemplate=t.template;break;case"subtitle":this._subtitleTemplate=t.template;break;case"content":this._contentTemplate=t.template;break;case"footer":this._footerTemplate=t.template;break;default:this._contentTemplate=t.template;break}})}static \u0275fac=(()=>{let t;return function(n){return(t||(t=p(e)))(n||e)}})();static \u0275cmp=g({type:e,selectors:[["p-card"]],contentQueries:function(a,n,i){if(a&1&&(h(i,kt,5),h(i,It,5),h(i,Kt,4),h(i,$t,4),h(i,Wt,4),h(i,Gt,4),h(i,Ut,4),h(i,et,4)),a&2){let o;c(o=d())&&(n.headerFacet=o.first),c(o=d())&&(n.footerFacet=o.first),c(o=d())&&(n.headerTemplate=o.first),c(o=d())&&(n.titleTemplate=o.first),c(o=d())&&(n.subtitleTemplate=o.first),c(o=d())&&(n.contentTemplate=o.first),c(o=d())&&(n.footerTemplate=o.first),c(o=d())&&(n.templates=o)}},hostVars:5,hostBindings:function(a,n){a&2&&(T("data-pc-name","card"),yt(n._style()),l(n.cn(n.cx("root"),n.styleClass)))},inputs:{header:"header",subheader:"subheader",style:"style",styleClass:"styleClass"},features:[B([Lt]),y],ngContentSelectors:Jt,decls:8,vars:9,consts:[[3,"class",4,"ngIf"],[4,"ngTemplateOutlet"],[4,"ngIf"]],template:function(a,n){a&1&&(M(Zt),f(0,Yt,3,3,"div",0),_(1,"div"),f(2,ne,3,4,"div",0)(3,oe,3,4,"div",0),_(4,"div"),w(5),f(6,re,1,0,"ng-container",1),C(),f(7,le,3,3,"div",0),C()),a&2&&(u("ngIf",n.headerFacet||n.headerTemplate||n._headerTemplate),r(),l(n.cx("body")),r(),u("ngIf",n.header||n.titleTemplate||n._titleTemplate),r(),u("ngIf",n.subheader||n.subtitleTemplate||n._subtitleTemplate),r(),l(n.cx("content")),r(2),u("ngTemplateOutlet",n.contentTemplate||n._contentTemplate),r(),u("ngIf",n.footerFacet||n.footerTemplate||n._footerTemplate))},dependencies:[L,wt,P,O],encapsulation:2,changeDetection:0})}return e})(),tn=(()=>{class e{static \u0275fac=function(a){return new(a||e)};static \u0275mod=U({type:e});static \u0275inj=$({imports:[pe,O,O]})}return e})();var Ot=`
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
`;var ue=["data-p-icon","chevron-left"],St=(()=>{class e extends nt{static \u0275fac=(()=>{let t;return function(n){return(t||(t=p(e)))(n||e)}})();static \u0275cmp=g({type:e,selectors:[["","data-p-icon","chevron-left"]],features:[y],attrs:ue,decls:1,vars:0,consts:[["d","M9.61296 13C9.50997 13.0005 9.40792 12.9804 9.3128 12.9409C9.21767 12.9014 9.13139 12.8433 9.05902 12.7701L3.83313 7.54416C3.68634 7.39718 3.60388 7.19795 3.60388 6.99022C3.60388 6.78249 3.68634 6.58325 3.83313 6.43628L9.05902 1.21039C9.20762 1.07192 9.40416 0.996539 9.60724 1.00012C9.81032 1.00371 10.0041 1.08597 10.1477 1.22959C10.2913 1.37322 10.3736 1.56698 10.3772 1.77005C10.3808 1.97313 10.3054 2.16968 10.1669 2.31827L5.49496 6.99022L10.1669 11.6622C10.3137 11.8091 10.3962 12.0084 10.3962 12.2161C10.3962 12.4238 10.3137 12.6231 10.1669 12.7701C10.0945 12.8433 10.0083 12.9014 9.91313 12.9409C9.81801 12.9804 9.71596 13.0005 9.61296 13Z","fill","currentColor"]],template:function(a,n){a&1&&(N(),J(0,"path",0))},encapsulation:2})}return e})();var be=["data-p-icon","chevron-right"],Rt=(()=>{class e extends nt{static \u0275fac=(()=>{let t;return function(n){return(t||(t=p(e)))(n||e)}})();static \u0275cmp=g({type:e,selectors:[["","data-p-icon","chevron-right"]],features:[y],attrs:be,decls:1,vars:0,consts:[["d","M4.38708 13C4.28408 13.0005 4.18203 12.9804 4.08691 12.9409C3.99178 12.9014 3.9055 12.8433 3.83313 12.7701C3.68634 12.6231 3.60388 12.4238 3.60388 12.2161C3.60388 12.0084 3.68634 11.8091 3.83313 11.6622L8.50507 6.99022L3.83313 2.31827C3.69467 2.16968 3.61928 1.97313 3.62287 1.77005C3.62645 1.56698 3.70872 1.37322 3.85234 1.22959C3.99596 1.08597 4.18972 1.00371 4.3928 1.00012C4.59588 0.996539 4.79242 1.07192 4.94102 1.21039L10.1669 6.43628C10.3137 6.58325 10.3962 6.78249 10.3962 6.99022C10.3962 7.19795 10.3137 7.39718 10.1669 7.54416L4.94102 12.7701C4.86865 12.8433 4.78237 12.9014 4.68724 12.9409C4.59212 12.9804 4.49007 13.0005 4.38708 13Z","fill","currentColor"]],template:function(a,n){a&1&&(N(),J(0,"path",0))},encapsulation:2})}return e})();var fe=["previcon"],me=["nexticon"],jt=["content"],ve=["prevButton"],he=["nextButton"],ge=["inkbar"],ye=["tabs"],K=["*"];function _e(e,s){e&1&&x(0)}function Te(e,s){if(e&1&&f(0,_e,1,0,"ng-container",11),e&2){let t=b(2);u("ngTemplateOutlet",t.prevIconTemplate||t._prevIconTemplate)}}function Ce(e,s){e&1&&(N(),Z(0,"svg",10))}function xe(e,s){if(e&1){let t=X();_(0,"button",9,3),A("click",function(){W(t);let n=b();return G(n.onPrevButtonClick())}),R(2,Te,1,1,"ng-container")(3,Ce,1,0,":svg:svg",10),C()}if(e&2){let t=b();l(t.cx("prevButton")),T("aria-label",t.prevButtonAriaLabel)("tabindex",t.tabindex())("data-pc-group-section","navigator"),r(2),Q(t.prevIconTemplate||t._prevIconTemplate?2:3)}}function we(e,s){e&1&&x(0)}function De(e,s){if(e&1&&f(0,we,1,0,"ng-container",11),e&2){let t=b(2);u("ngTemplateOutlet",t.nextIconTemplate||t._nextIconTemplate)}}function Me(e,s){e&1&&(N(),Z(0,"svg",12))}function Be(e,s){if(e&1){let t=X();_(0,"button",9,4),A("click",function(){W(t);let n=b();return G(n.onNextButtonClick())}),R(2,De,1,1,"ng-container")(3,Me,1,0,":svg:svg",12),C()}if(e&2){let t=b();l(t.cx("nextButton")),T("aria-label",t.nextButtonAriaLabel)("tabindex",t.tabindex())("data-pc-group-section","navigator"),r(2),Q(t.nextIconTemplate||t._nextIconTemplate?2:3)}}function Fe(e,s){e&1&&w(0)}function ke(e,s){e&1&&x(0)}function Ie(e,s){if(e&1&&f(0,ke,1,0,"ng-container",1),e&2){let t=b(),a=gt(1);u("ngTemplateOutlet",t.content()?t.content():a)}}var Ne={root:({instance:e})=>["p-tabs p-component",{"p-tabs-scrollable":e.scrollable()}]},Qt=(()=>{class e extends k{name="tabs";theme=Ot;classes=Ne;static \u0275fac=(()=>{let t;return function(n){return(t||(t=p(e)))(n||e)}})();static \u0275prov=D({token:e,factory:e.\u0275fac})}return e})();var Ee={root:"p-tablist",content:"p-tablist-content p-tablist-viewport",tabList:"p-tablist-tab-list",activeBar:"p-tablist-active-bar",prevButton:"p-tablist-prev-button p-tablist-nav-button",nextButton:"p-tablist-next-button p-tablist-nav-button"},Vt=(()=>{class e extends k{name="tablist";classes=Ee;static \u0275fac=(()=>{let t;return function(n){return(t||(t=p(e)))(n||e)}})();static \u0275prov=D({token:e,factory:e.\u0275fac})}return e})();var qt=(()=>{class e extends I{prevIconTemplate;nextIconTemplate;templates;content;prevButton;nextButton;inkbar;tabs;pcTabs=v(z(()=>at));isPrevButtonEnabled=S(!1);isNextButtonEnabled=S(!1);resizeObserver;showNavigators=m(()=>this.pcTabs.showNavigators());tabindex=m(()=>this.pcTabs.tabindex());scrollable=m(()=>this.pcTabs.scrollable());_componentStyle=v(Vt);constructor(){super(),Tt(()=>{this.pcTabs.value(),tt(this.platformId)&&setTimeout(()=>{this.updateInkBar()})})}get prevButtonAriaLabel(){return this.config?.translation?.aria?.previous}get nextButtonAriaLabel(){return this.config?.translation?.aria?.next}ngAfterViewInit(){super.ngAfterViewInit(),this.showNavigators()&&tt(this.platformId)&&(this.updateButtonState(),this.bindResizeObserver())}_prevIconTemplate;_nextIconTemplate;ngAfterContentInit(){this.templates?.forEach(t=>{switch(t.getType()){case"previcon":this._prevIconTemplate=t.template;break;case"nexticon":this._nextIconTemplate=t.template;break}})}ngOnDestroy(){this.unbindResizeObserver(),super.ngOnDestroy()}onScroll(t){this.showNavigators()&&this.updateButtonState(),t.preventDefault()}onPrevButtonClick(){let t=this.content.nativeElement,a=q(t),n=Math.abs(t.scrollLeft)-a,i=n<=0?0:n;t.scrollLeft=ct(t)?-1*i:i}onNextButtonClick(){let t=this.content.nativeElement,a=q(t)-this.getVisibleButtonWidths(),n=t.scrollLeft+a,i=t.scrollWidth-a,o=n>=i?i:n;t.scrollLeft=ct(t)?-1*o:o}updateButtonState(){let t=this.content?.nativeElement,a=this.el?.nativeElement,{scrollWidth:n,offsetWidth:i}=t,o=Math.abs(t.scrollLeft),it=q(t);this.isPrevButtonEnabled.set(o!==0),this.isNextButtonEnabled.set(a.offsetWidth>=i&&Math.abs(o-n+it)>1)}updateInkBar(){let t=this.content?.nativeElement,a=this.inkbar?.nativeElement,n=this.tabs?.nativeElement,i=Mt(t,'[data-pc-name="tab"][data-p-active="true"]');a&&(a.style.width=Dt(i)+"px",a.style.left=dt(i).left-dt(n).left+"px")}getVisibleButtonWidths(){let t=this.prevButton?.nativeElement,a=this.nextButton?.nativeElement;return[t,a].reduce((n,i)=>i?n+q(i):n,0)}bindResizeObserver(){this.resizeObserver=new ResizeObserver(()=>this.updateButtonState()),this.resizeObserver.observe(this.el.nativeElement)}unbindResizeObserver(){this.resizeObserver&&(this.resizeObserver.unobserve(this.el.nativeElement),this.resizeObserver=null)}static \u0275fac=function(a){return new(a||e)};static \u0275cmp=g({type:e,selectors:[["p-tablist"]],contentQueries:function(a,n,i){if(a&1&&(h(i,fe,4),h(i,me,4),h(i,et,4)),a&2){let o;c(o=d())&&(n.prevIconTemplate=o.first),c(o=d())&&(n.nextIconTemplate=o.first),c(o=d())&&(n.templates=o)}},viewQuery:function(a,n){if(a&1&&(V(jt,5),V(ve,5),V(he,5),V(ge,5),V(ye,5)),a&2){let i;c(i=d())&&(n.content=i.first),c(i=d())&&(n.prevButton=i.first),c(i=d())&&(n.nextButton=i.first),c(i=d())&&(n.inkbar=i.first),c(i=d())&&(n.tabs=i.first)}},hostVars:3,hostBindings:function(a,n){a&2&&(T("data-pc-name","tablist"),l(n.cx("root")))},features:[B([Vt]),y],ngContentSelectors:K,decls:9,vars:9,consts:[["content",""],["tabs",""],["inkbar",""],["prevButton",""],["nextButton",""],["type","button","pRipple","",3,"class"],[3,"scroll"],["role","tablist"],["role","presentation"],["type","button","pRipple","",3,"click"],["data-p-icon","chevron-left"],[4,"ngTemplateOutlet"],["data-p-icon","chevron-right"]],template:function(a,n){if(a&1){let i=X();M(),R(0,xe,4,6,"button",5),_(1,"div",6,0),A("scroll",function(it){return W(i),G(n.onScroll(it))}),_(3,"div",7,1),w(5),Z(6,"span",8,2),C()(),R(8,Be,4,6,"button",5)}a&2&&(Q(n.showNavigators()&&n.isPrevButtonEnabled()?0:-1),r(),l(n.cx("content")),r(2),l(n.cx("tabList")),r(3),l(n.cx("activeBar")),T("data-pc-section","inkbar"),r(2),Q(n.showNavigators()&&n.isNextButtonEnabled()?8:-1))},dependencies:[L,P,St,Rt,Nt,pt,O],encapsulation:2,changeDetection:0})}return e})(),Le={root:({instance:e})=>["p-tab",{"p-tab-active":e.active(),"p-disabled":e.disabled()}]},Pt=(()=>{class e extends k{name="tab";classes=Le;static \u0275fac=(()=>{let t;return function(n){return(t||(t=p(e)))(n||e)}})();static \u0275prov=D({token:e,factory:e.\u0275fac})}return e})();var Oe=(()=>{class e extends I{value=Y();disabled=F(!1,{transform:E});pcTabs=v(z(()=>at));pcTabList=v(z(()=>qt));el=v(bt);_componentStyle=v(Pt);ripple=m(()=>this.config.ripple());id=m(()=>`${this.pcTabs.id()}_tab_${this.value()}`);ariaControls=m(()=>`${this.pcTabs.id()}_tabpanel_${this.value()}`);active=m(()=>H(this.pcTabs.value(),this.value()));tabindex=m(()=>this.disabled()?-1:this.active()?this.pcTabs.tabindex():-1);mutationObserver;onFocus(t){this.disabled()||this.pcTabs.selectOnFocus()&&this.changeActiveValue()}onClick(t){this.disabled()||this.changeActiveValue()}onKeyDown(t){switch(t.code){case"ArrowRight":this.onArrowRightKey(t);break;case"ArrowLeft":this.onArrowLeftKey(t);break;case"Home":this.onHomeKey(t);break;case"End":this.onEndKey(t);break;case"PageDown":this.onPageDownKey(t);break;case"PageUp":this.onPageUpKey(t);break;case"Enter":case"NumpadEnter":case"Space":this.onEnterKey(t);break;default:break}t.stopPropagation()}ngAfterViewInit(){super.ngAfterViewInit(),this.bindMutationObserver()}onArrowRightKey(t){let a=this.findNextTab(t.currentTarget);a?this.changeFocusedTab(t,a):this.onHomeKey(t),t.preventDefault()}onArrowLeftKey(t){let a=this.findPrevTab(t.currentTarget);a?this.changeFocusedTab(t,a):this.onEndKey(t),t.preventDefault()}onHomeKey(t){let a=this.findFirstTab();this.changeFocusedTab(t,a),t.preventDefault()}onEndKey(t){let a=this.findLastTab();this.changeFocusedTab(t,a),t.preventDefault()}onPageDownKey(t){this.scrollInView(this.findLastTab()),t.preventDefault()}onPageUpKey(t){this.scrollInView(this.findFirstTab()),t.preventDefault()}onEnterKey(t){this.disabled()||this.changeActiveValue(),t.preventDefault()}findNextTab(t,a=!1){let n=a?t:t.nextElementSibling;return n?j(n,"data-p-disabled")||j(n,"data-pc-section")==="inkbar"?this.findNextTab(n):n:null}findPrevTab(t,a=!1){let n=a?t:t.previousElementSibling;return n?j(n,"data-p-disabled")||j(n,"data-pc-section")==="inkbar"?this.findPrevTab(n):n:null}findFirstTab(){return this.findNextTab(this.pcTabList?.tabs?.nativeElement?.firstElementChild,!0)}findLastTab(){return this.findPrevTab(this.pcTabList?.tabs?.nativeElement?.lastElementChild,!0)}changeActiveValue(){this.pcTabs.updateValue(this.value())}changeFocusedTab(t,a){Bt(a),this.scrollInView(a)}scrollInView(t){t?.scrollIntoView?.({block:"nearest"})}bindMutationObserver(){tt(this.platformId)&&(this.mutationObserver=new MutationObserver(t=>{t.forEach(()=>{this.active()&&this.pcTabList?.updateInkBar()})}),this.mutationObserver.observe(this.el.nativeElement,{childList:!0,characterData:!0,subtree:!0}))}unbindMutationObserver(){this.mutationObserver?.disconnect()}ngOnDestroy(){this.mutationObserver&&this.unbindMutationObserver(),super.ngOnDestroy()}static \u0275fac=(()=>{let t;return function(n){return(t||(t=p(e)))(n||e)}})();static \u0275cmp=g({type:e,selectors:[["p-tab"]],hostVars:11,hostBindings:function(a,n){a&1&&A("focus",function(o){return n.onFocus(o)})("click",function(o){return n.onClick(o)})("keydown",function(o){return n.onKeyDown(o)}),a&2&&(T("data-pc-name","tab")("id",n.id())("aria-controls",n.ariaControls())("role","tab")("aria-selected",n.active())("aria-disabled",n.disabled())("data-p-disabled",n.disabled())("data-p-active",n.active())("tabindex",n.tabindex()),l(n.cx("root")))},inputs:{value:[1,"value"],disabled:[1,"disabled"]},outputs:{value:"valueChange"},features:[B([Pt]),ft([pt]),y],ngContentSelectors:K,decls:1,vars:0,template:function(a,n){a&1&&(M(),w(0))},dependencies:[L,O],encapsulation:2,changeDetection:0})}return e})(),Se={root:({instance:e})=>["p-tabpanel",{"p-tabpanel-active":e.active()}]},zt=(()=>{class e extends k{name="tabpanel";classes=Se;static \u0275fac=(()=>{let t;return function(n){return(t||(t=p(e)))(n||e)}})();static \u0275prov=D({token:e,factory:e.\u0275fac})}return e})();var Fn=(()=>{class e extends I{pcTabs=v(z(()=>at));lazy=F(!1,{transform:E});value=Y(void 0);content=Ct("content");id=m(()=>`${this.pcTabs.id()}_tabpanel_${this.value()}`);ariaLabelledby=m(()=>`${this.pcTabs.id()}_tab_${this.value()}`);active=m(()=>H(this.pcTabs.value(),this.value()));isLazyEnabled=m(()=>this.pcTabs.lazy()||this.lazy());hasBeenRendered=!1;shouldRender=m(()=>!this.isLazyEnabled()||this.hasBeenRendered?!0:this.active()?(this.hasBeenRendered=!0,!0):!1);_componentStyle=v(zt);static \u0275fac=(()=>{let t;return function(n){return(t||(t=p(e)))(n||e)}})();static \u0275cmp=g({type:e,selectors:[["p-tabpanel"]],contentQueries:function(a,n,i){a&1&&vt(i,n.content,jt,5),a&2&&ht()},hostVars:8,hostBindings:function(a,n){a&2&&(mt("hidden",!n.active()),T("data-pc-name","tabpanel")("id",n.id())("role","tabpanel")("aria-labelledby",n.ariaLabelledby())("data-p-active",n.active()),l(n.cx("root")))},inputs:{lazy:[1,"lazy"],value:[1,"value"]},outputs:{value:"valueChange"},features:[B([zt]),y],ngContentSelectors:K,decls:3,vars:1,consts:[["defaultContent",""],[4,"ngTemplateOutlet"]],template:function(a,n){a&1&&(M(),f(0,Fe,1,0,"ng-template",null,0,_t),R(2,Ie,1,1,"ng-container")),a&2&&(r(2),Q(n.shouldRender()?2:-1))},dependencies:[P],encapsulation:2,changeDetection:0})}return e})(),Re={root:"p-tabpanels"},At=(()=>{class e extends k{name="tabpanels";classes=Re;static \u0275fac=(()=>{let t;return function(n){return(t||(t=p(e)))(n||e)}})();static \u0275prov=D({token:e,factory:e.\u0275fac})}return e})();var Qe=(()=>{class e extends I{_componentStyle=v(At);static \u0275fac=(()=>{let t;return function(n){return(t||(t=p(e)))(n||e)}})();static \u0275cmp=g({type:e,selectors:[["p-tabpanels"]],hostVars:4,hostBindings:function(a,n){a&2&&(T("data-pc-name","tabpanels")("role","presentation"),l(n.cx("root")))},features:[B([At]),y],ngContentSelectors:K,decls:1,vars:0,template:function(a,n){a&1&&(M(),w(0))},dependencies:[L],encapsulation:2,changeDetection:0})}return e})(),at=(()=>{class e extends I{value=Y(void 0);scrollable=F(!1,{transform:E});lazy=F(!1,{transform:E});selectOnFocus=F(!1,{transform:E});showNavigators=F(!0,{transform:E});tabindex=F(0,{transform:xt});id=S(Ft("pn_id_"));_componentStyle=v(Qt);updateValue(t){this.value.update(()=>t)}static \u0275fac=(()=>{let t;return function(n){return(t||(t=p(e)))(n||e)}})();static \u0275cmp=g({type:e,selectors:[["p-tabs"]],hostVars:4,hostBindings:function(a,n){a&2&&(T("data-pc-name","tabs")("id",n.id()),l(n.cx("root")))},inputs:{value:[1,"value"],scrollable:[1,"scrollable"],lazy:[1,"lazy"],selectOnFocus:[1,"selectOnFocus"],showNavigators:[1,"showNavigators"],tabindex:[1,"tabindex"]},outputs:{value:"valueChange"},features:[B([Qt]),y],ngContentSelectors:K,decls:1,vars:0,template:function(a,n){a&1&&(M(),w(0))},dependencies:[L],encapsulation:2,changeDetection:0})}return e})(),kn=(()=>{class e{static \u0275fac=function(a){return new(a||e)};static \u0275mod=U({type:e});static \u0275inj=$({imports:[at,Qe,qt,Oe]})}return e})();export{pe as a,tn as b,qt as c,Oe as d,Fn as e,Qe as f,at as g,kn as h};
