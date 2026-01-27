import{a as U}from"./chunk-D27LCWUD.js";import{a as q}from"./chunk-RMJAI7RZ.js";import{d as G}from"./chunk-IZU7C3FN.js";import{Ea as V,Fa as h,Na as $,o as Q,r as j}from"./chunk-BO564T5E.js";import{$b as b,Aa as m,Ab as d,Cb as u,Db as s,Ib as _,Jb as y,Kb as T,Lb as R,Qc as N,Rb as C,Wb as S,Xc as x,Yb as c,Yc as P,Za as g,ba as L,bc as p,ca as w,cb as M,cc as f,da as B,ha as I,jc as r,kc as z,lc as A,nb as E,ob as O,rb as D,sb as F,tb as k,tc as H,vc as v}from"./chunk-6P3ZW5D6.js";var K=`
    .p-togglebutton {
        display: inline-flex;
        cursor: pointer;
        user-select: none;
        overflow: hidden;
        position: relative;
        color: dt('togglebutton.color');
        background: dt('togglebutton.background');
        border: 1px solid dt('togglebutton.border.color');
        padding: dt('togglebutton.padding');
        font-size: 1rem;
        font-family: inherit;
        font-feature-settings: inherit;
        transition:
            background dt('togglebutton.transition.duration'),
            color dt('togglebutton.transition.duration'),
            border-color dt('togglebutton.transition.duration'),
            outline-color dt('togglebutton.transition.duration'),
            box-shadow dt('togglebutton.transition.duration');
        border-radius: dt('togglebutton.border.radius');
        outline-color: transparent;
        font-weight: dt('togglebutton.font.weight');
    }

    .p-togglebutton-content {
        display: inline-flex;
        flex: 1 1 auto;
        align-items: center;
        justify-content: center;
        gap: dt('togglebutton.gap');
        padding: dt('togglebutton.content.padding');
        background: transparent;
        border-radius: dt('togglebutton.content.border.radius');
        transition:
            background dt('togglebutton.transition.duration'),
            color dt('togglebutton.transition.duration'),
            border-color dt('togglebutton.transition.duration'),
            outline-color dt('togglebutton.transition.duration'),
            box-shadow dt('togglebutton.transition.duration');
    }

    .p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover {
        background: dt('togglebutton.hover.background');
        color: dt('togglebutton.hover.color');
    }

    .p-togglebutton.p-togglebutton-checked {
        background: dt('togglebutton.checked.background');
        border-color: dt('togglebutton.checked.border.color');
        color: dt('togglebutton.checked.color');
    }

    .p-togglebutton-checked .p-togglebutton-content {
        background: dt('togglebutton.content.checked.background');
        box-shadow: dt('togglebutton.content.checked.shadow');
    }

    .p-togglebutton:focus-visible {
        box-shadow: dt('togglebutton.focus.ring.shadow');
        outline: dt('togglebutton.focus.ring.width') dt('togglebutton.focus.ring.style') dt('togglebutton.focus.ring.color');
        outline-offset: dt('togglebutton.focus.ring.offset');
    }

    .p-togglebutton.p-invalid {
        border-color: dt('togglebutton.invalid.border.color');
    }

    .p-togglebutton:disabled {
        opacity: 1;
        cursor: default;
        background: dt('togglebutton.disabled.background');
        border-color: dt('togglebutton.disabled.border.color');
        color: dt('togglebutton.disabled.color');
    }

    .p-togglebutton-label,
    .p-togglebutton-icon {
        position: relative;
        transition: none;
    }

    .p-togglebutton-icon {
        color: dt('togglebutton.icon.color');
    }

    .p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover .p-togglebutton-icon {
        color: dt('togglebutton.icon.hover.color');
    }

    .p-togglebutton.p-togglebutton-checked .p-togglebutton-icon {
        color: dt('togglebutton.icon.checked.color');
    }

    .p-togglebutton:disabled .p-togglebutton-icon {
        color: dt('togglebutton.icon.disabled.color');
    }

    .p-togglebutton-sm {
        padding: dt('togglebutton.sm.padding');
        font-size: dt('togglebutton.sm.font.size');
    }

    .p-togglebutton-sm .p-togglebutton-content {
        padding: dt('togglebutton.content.sm.padding');
    }

    .p-togglebutton-lg {
        padding: dt('togglebutton.lg.padding');
        font-size: dt('togglebutton.lg.font.size');
    }

    .p-togglebutton-lg .p-togglebutton-content {
        padding: dt('togglebutton.content.lg.padding');
    }

    .p-togglebutton-fluid {
        width: 100%;
    }
`;var X=["icon"],Z=["content"],J=n=>({$implicit:n});function tt(n,l){n&1&&C(0)}function nt(n,l){if(n&1&&R(0,"span"),n&2){let t=c(3);r(t.cn(t.cx("icon"),t.checked?t.onIcon:t.offIcon,t.iconPos==="left"?t.cx("iconLeft"):t.cx("iconRight"))),d("data-pc-section","icon")}}function ot(n,l){if(n&1&&u(0,nt,1,3,"span",1),n&2){let t=c(2);s(t.onIcon||t.offIcon?0:-1)}}function et(n,l){n&1&&C(0)}function it(n,l){if(n&1&&k(0,et,1,0,"ng-container",0),n&2){let t=c(2);_("ngTemplateOutlet",t.iconTemplate||t._iconTemplate)("ngTemplateOutletContext",v(2,J,t.checked))}}function lt(n,l){if(n&1&&(u(0,ot,1,1)(1,it,1,4,"ng-container"),y(2,"span"),z(3),T()),n&2){let t=c();s(t.iconTemplate?1:0),g(2),r(t.cx("label")),d("data-pc-section","label"),g(),A(t.checked?t.hasOnLabel?t.onLabel:"\xA0":t.hasOffLabel?t.offLabel:"\xA0")}}var at=`
    ${K}

    /* For PrimeNG (iconPos) */
    .p-togglebutton-icon-right {
        order: 1;
    }

    .p-togglebutton.ng-invalid.ng-dirty {
        border-color: dt('togglebutton.invalid.border.color');
    }
`,gt={root:({instance:n})=>["p-togglebutton p-component",{"p-togglebutton-checked":n.checked,"p-invalid":n.invalid(),"p-disabled":n.$disabled(),"p-togglebutton-sm p-inputfield-sm":n.size==="small","p-togglebutton-lg p-inputfield-lg":n.size==="large","p-togglebutton-fluid":n.fluid()}],content:"p-togglebutton-content",icon:"p-togglebutton-icon",iconLeft:"p-togglebutton-icon-left",iconRight:"p-togglebutton-icon-right",label:"p-togglebutton-label"},Y=(()=>{class n extends ${name="togglebutton";theme=at;classes=gt;static \u0275fac=(()=>{let t;return function(o){return(t||(t=m(n)))(o||n)}})();static \u0275prov=w({token:n,factory:n.\u0275fac})}return n})();var ct={provide:q,useExisting:L(()=>W),multi:!0},W=(()=>{class n extends U{onKeyDown(t){switch(t.code){case"Enter":this.toggle(t),t.preventDefault();break;case"Space":this.toggle(t),t.preventDefault();break}}toggle(t){!this.$disabled()&&!(this.allowEmpty===!1&&this.checked)&&(this.checked=!this.checked,this.writeModelValue(this.checked),this.onModelChange(this.checked),this.onModelTouched(),this.onChange.emit({originalEvent:t,checked:this.checked}),this.cd.markForCheck())}onLabel="Yes";offLabel="No";onIcon;offIcon;ariaLabel;ariaLabelledBy;styleClass;inputId;tabindex=0;iconPos="left";autofocus;size;allowEmpty;fluid=N(void 0,{transform:x});onChange=new M;iconTemplate;contentTemplate;templates;checked=!1;ngOnInit(){super.ngOnInit(),(this.checked===null||this.checked===void 0)&&(this.checked=!1)}_componentStyle=I(Y);onBlur(){this.onModelTouched()}get hasOnLabel(){return this.onLabel&&this.onLabel.length>0}get hasOffLabel(){return this.offLabel&&this.offLabel.length>0}get active(){return this.checked===!0}_iconTemplate;_contentTemplate;ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"icon":this._iconTemplate=t.template;break;case"content":this._contentTemplate=t.template;break;default:this._contentTemplate=t.template;break}})}writeControlValue(t,e){this.checked=t,e(t),this.cd.markForCheck()}static \u0275fac=(()=>{let t;return function(o){return(t||(t=m(n)))(o||n)}})();static \u0275cmp=E({type:n,selectors:[["p-toggleButton"],["p-togglebutton"],["p-toggle-button"]],contentQueries:function(e,o,a){if(e&1&&(b(a,X,4),b(a,Z,4),b(a,V,4)),e&2){let i;p(i=f())&&(o.iconTemplate=i.first),p(i=f())&&(o.contentTemplate=i.first),p(i=f())&&(o.templates=i)}},hostVars:7,hostBindings:function(e,o){e&1&&S("keydown",function(i){return o.onKeyDown(i)})("click",function(i){return o.toggle(i)}),e&2&&(d("aria-labelledby",o.ariaLabelledBy)("aria-label",o.ariaLabel)("aria-pressed",o.checked?"true":"false")("role","button")("tabindex",o.tabindex!==void 0?o.tabindex:o.$disabled()?-1:0),r(o.cn(o.cx("root"),o.styleClass)))},inputs:{onLabel:"onLabel",offLabel:"offLabel",onIcon:"onIcon",offIcon:"offIcon",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",styleClass:"styleClass",inputId:"inputId",tabindex:[2,"tabindex","tabindex",P],iconPos:"iconPos",autofocus:[2,"autofocus","autofocus",x],size:"size",allowEmpty:"allowEmpty",fluid:[1,"fluid"]},outputs:{onChange:"onChange"},features:[H([ct,Y]),F([G]),D],decls:3,vars:7,consts:[[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"class"]],template:function(e,o){e&1&&(y(0,"span"),k(1,tt,1,0,"ng-container",0),u(2,lt,4,5),T()),e&2&&(r(o.cx("content")),g(),_("ngTemplateOutlet",o.contentTemplate||o._contentTemplate)("ngTemplateOutletContext",v(5,J,o.checked)),g(),s(o.contentTemplate?-1:2))},dependencies:[j,Q,h],encapsulation:2,changeDetection:0})}return n})(),Mt=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=O({type:n});static \u0275inj=B({imports:[W,h,h]})}return n})();export{W as a,Mt as b};
