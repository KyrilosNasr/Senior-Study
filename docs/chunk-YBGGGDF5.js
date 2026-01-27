import{a as ne}from"./chunk-ZTV3NQ2K.js";import{a as te}from"./chunk-D27LCWUD.js";import{a as X,e as Y,i as Z,s as ee}from"./chunk-RMJAI7RZ.js";import{Ea as J,Fa as p,Na as W,na as c,o as G,oa as d,r as H}from"./chunk-BO564T5E.js";import{$b as y,Aa as m,Ab as D,Cb as F,Db as A,Gb as I,Hb as $,Hc as P,Ib as g,Jb as k,Kb as N,Qc as x,Rb as z,Sb as K,Wb as q,Xc as r,Yb as u,Yc as U,Za as B,ba as C,bc as _,ca as E,cb as b,cc as v,da as T,ha as w,jc as Q,ma as O,na as S,nb as L,ob as V,rb as M,tb as h,tc as R,wc as j}from"./chunk-6P3ZW5D6.js";var ie=`
    .p-selectbutton {
        display: inline-flex;
        user-select: none;
        vertical-align: bottom;
        outline-color: transparent;
        border-radius: dt('selectbutton.border.radius');
    }

    .p-selectbutton .p-togglebutton {
        border-radius: 0;
        border-width: 1px 1px 1px 0;
    }

    .p-selectbutton .p-togglebutton:focus-visible {
        position: relative;
        z-index: 1;
    }

    .p-selectbutton .p-togglebutton:first-child {
        border-inline-start-width: 1px;
        border-start-start-radius: dt('selectbutton.border.radius');
        border-end-start-radius: dt('selectbutton.border.radius');
    }

    .p-selectbutton .p-togglebutton:last-child {
        border-start-end-radius: dt('selectbutton.border.radius');
        border-end-end-radius: dt('selectbutton.border.radius');
    }

    .p-selectbutton.p-invalid {
        outline: 1px solid dt('selectbutton.invalid.border.color');
        outline-offset: 0;
    }

    .p-selectbutton-fluid {
        width: 100%;
    }
    
    .p-selectbutton-fluid .p-togglebutton {
        flex: 1 1 0;
    }
`;var ae=["item"],se=(n,a)=>({$implicit:n,index:a});function re(n,a){return this.getOptionLabel(a)}function ue(n,a){n&1&&z(0)}function de(n,a){if(n&1&&h(0,ue,1,0,"ng-container",3),n&2){let e=u(2),t=e.$implicit,i=e.$index,l=u();g("ngTemplateOutlet",l.itemTemplate||l._itemTemplate)("ngTemplateOutletContext",j(2,se,t,i))}}function ce(n,a){n&1&&h(0,de,1,5,"ng-template",null,0,P)}function pe(n,a){if(n&1){let e=K();k(0,"p-togglebutton",2),q("onChange",function(i){let l=O(e),o=l.$implicit,s=l.$index,f=u();return S(f.onOptionSelect(i,o,s))}),F(1,ce,2,0),N()}if(n&2){let e=a.$implicit,t=u();g("autofocus",t.autofocus)("styleClass",t.styleClass)("ngModel",t.isSelected(e))("onLabel",t.getOptionLabel(e))("offLabel",t.getOptionLabel(e))("disabled",t.$disabled()||t.isOptionDisabled(e))("allowEmpty",t.getAllowEmpty())("size",t.size())("fluid",t.fluid()),B(),A(t.itemTemplate||t._itemTemplate?1:-1)}}var fe=`
    ${ie}

    /* For PrimeNG */
    .p-selectbutton.ng-invalid.ng-dirty {
        outline: 1px solid dt('selectbutton.invalid.border.color');
        outline-offset: 0;
    }
`,me={root:({instance:n})=>["p-selectbutton p-component",{"p-invalid":n.invalid(),"p-selectbutton-fluid":n.fluid()}]},le=(()=>{class n extends W{name="selectbutton";theme=fe;classes=me;static \u0275fac=(()=>{let e;return function(i){return(e||(e=m(n)))(i||n)}})();static \u0275prov=E({token:n,factory:n.\u0275fac})}return n})();var be={provide:X,useExisting:C(()=>oe),multi:!0},oe=(()=>{class n extends te{options;optionLabel;optionValue;optionDisabled;get unselectable(){return this._unselectable}_unselectable=!1;set unselectable(e){this._unselectable=e,this.allowEmpty=!e}tabindex=0;multiple;allowEmpty=!0;styleClass;ariaLabelledBy;dataKey;autofocus;size=x();fluid=x(void 0,{transform:r});onOptionClick=new b;onChange=new b;itemTemplate;_itemTemplate;get equalityKey(){return this.optionValue?null:this.dataKey}value;focusedIndex=0;_componentStyle=w(le);getAllowEmpty(){return this.multiple?this.allowEmpty||this.value?.length!==1:this.allowEmpty}getOptionLabel(e){return this.optionLabel?c(e,this.optionLabel):e.label!=null?e.label:e}getOptionValue(e){return this.optionValue?c(e,this.optionValue):this.optionLabel||e.value===void 0?e:e.value}isOptionDisabled(e){return this.optionDisabled?c(e,this.optionDisabled):e.disabled!==void 0?e.disabled:!1}onOptionSelect(e,t,i){if(this.$disabled()||this.isOptionDisabled(t))return;let l=this.isSelected(t);if(l&&this.unselectable)return;let o=this.getOptionValue(t),s;if(this.multiple)l?s=this.value.filter(f=>!d(f,o,this.equalityKey||void 0)):s=this.value?[...this.value,o]:[o];else{if(l&&!this.allowEmpty)return;s=l?null:o}this.focusedIndex=i,this.value=s,this.writeModelValue(this.value),this.onModelChange(this.value),this.onChange.emit({originalEvent:e,value:this.value}),this.onOptionClick.emit({originalEvent:e,option:t,index:i})}changeTabIndexes(e,t){let i,l;for(let o=0;o<=this.el.nativeElement.children.length-1;o++)this.el.nativeElement.children[o].getAttribute("tabindex")==="0"&&(i={elem:this.el.nativeElement.children[o],index:o});t==="prev"?i.index===0?l=this.el.nativeElement.children.length-1:l=i.index-1:i.index===this.el.nativeElement.children.length-1?l=0:l=i.index+1,this.focusedIndex=l,this.el.nativeElement.children[l].focus()}onFocus(e,t){this.focusedIndex=t}onBlur(){this.onModelTouched()}removeOption(e){this.value=this.value.filter(t=>!d(t,this.getOptionValue(e),this.dataKey))}isSelected(e){let t=!1,i=this.getOptionValue(e);if(this.multiple){if(this.value&&Array.isArray(this.value)){for(let l of this.value)if(d(l,i,this.dataKey)){t=!0;break}}}else t=d(this.getOptionValue(e),this.value,this.equalityKey||void 0);return t}templates;ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"item":this._itemTemplate=e.template;break}})}writeControlValue(e,t){this.value=e,t(this.value),this.cd.markForCheck()}static \u0275fac=(()=>{let e;return function(i){return(e||(e=m(n)))(i||n)}})();static \u0275cmp=L({type:n,selectors:[["p-selectButton"],["p-selectbutton"],["p-select-button"]],contentQueries:function(t,i,l){if(t&1&&(y(l,ae,4),y(l,J,4)),t&2){let o;_(o=v())&&(i.itemTemplate=o.first),_(o=v())&&(i.templates=o)}},hostVars:6,hostBindings:function(t,i){t&2&&(D("role","group")("aria-labelledby",i.ariaLabelledBy)("data-pc-section","root")("data-pc-name","selectbutton"),Q(i.cx("root")))},inputs:{options:"options",optionLabel:"optionLabel",optionValue:"optionValue",optionDisabled:"optionDisabled",unselectable:[2,"unselectable","unselectable",r],tabindex:[2,"tabindex","tabindex",U],multiple:[2,"multiple","multiple",r],allowEmpty:[2,"allowEmpty","allowEmpty",r],styleClass:"styleClass",ariaLabelledBy:"ariaLabelledBy",dataKey:"dataKey",autofocus:[2,"autofocus","autofocus",r],size:[1,"size"],fluid:[1,"fluid"]},outputs:{onOptionClick:"onOptionClick",onChange:"onChange"},features:[R([be,le]),M],decls:2,vars:0,consts:[["content",""],[3,"autofocus","styleClass","ngModel","onLabel","offLabel","disabled","allowEmpty","size","fluid"],[3,"onChange","autofocus","styleClass","ngModel","onLabel","offLabel","disabled","allowEmpty","size","fluid"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(t,i){t&1&&I(0,pe,2,10,"p-togglebutton",1,re,!0),t&2&&$(i.options)},dependencies:[ne,ee,Y,Z,H,G,p],encapsulation:2,changeDetection:0})}return n})(),Ne=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=V({type:n});static \u0275inj=T({imports:[oe,p,p]})}return n})();export{oe as a,Ne as b};
