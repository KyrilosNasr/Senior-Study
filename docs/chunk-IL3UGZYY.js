import{a as ke}from"./chunk-LXN4WS7M.js";import"./chunk-DKUAOVGB.js";import"./chunk-HZJ5AC74.js";import"./chunk-JX3V5ZT5.js";import{a as me,c as ce,d as ue,g as fe}from"./chunk-XLEJIGYJ.js";import"./chunk-ARO7SQ5Z.js";import"./chunk-MA6FGDBM.js";import{b as ve,c as Se}from"./chunk-2USCA55J.js";import"./chunk-QDOOO3RU.js";import"./chunk-3DC6BNIH.js";import"./chunk-AWYD6WCW.js";import"./chunk-XTBDY7WG.js";import"./chunk-42MSCVNE.js";import"./chunk-4UXUI4FZ.js";import{e as he}from"./chunk-PYCTJV3C.js";import"./chunk-MXBZIN3S.js";import"./chunk-SYS6JVAO.js";import"./chunk-IAGI55XL.js";import"./chunk-AI3VJOCX.js";import"./chunk-4XAVTQOD.js";import{a as _e,b as ye}from"./chunk-QNFUOYYO.js";import"./chunk-Z44BU5J4.js";import"./chunk-4O3FVBGX.js";import"./chunk-7F3YVZD6.js";import{b as be}from"./chunk-54PGZSHQ.js";import{Fa as M,Ma as ge,P as q,Q as xe,k as le,n as pe,q as de,r as D}from"./chunk-4KSQBOQ2.js";import"./chunk-FPPZ4BUR.js";import{Aa as L,Bb as h,Db as U,Eb as K,Ec as ae,Fc as oe,Hb as W,Hc as E,Ib as Q,Jb as c,Kb as r,Lb as s,Mb as f,Mc as k,Tb as N,Va as P,Wa as O,Xb as S,Xc as $,Yc as se,Za as m,Zb as p,bc as Z,ca as j,cb as z,cc as G,da as R,dc as J,gc as F,ha as I,kc as u,lc as d,ma as _,mc as x,na as y,nb as w,nc as A,ob as B,oc as X,pc as Y,qc as ee,rb as H,rc as te,tb as v,tc as ne,uc as ie,va as C,wc as re}from"./chunk-IOSF2A54.js";import{a as T}from"./chunk-6HR7AMTL.js";var Ie=`
    .p-steps {
        position: relative;
    }

    .p-steps-list {
        padding: 0;
        margin: 0;
        list-style-type: none;
        display: flex;
    }

    .p-steps-item {
        position: relative;
        display: flex;
        justify-content: center;
        flex: 1 1 auto;
    }

    .p-steps-item.p-disabled,
    .p-steps-item.p-disabled * {
        opacity: 1;
        pointer-events: auto;
        user-select: auto;
        cursor: auto;
    }

    .p-steps-item:before {
        content: ' ';
        border-top: 2px solid dt('steps.separator.background');
        width: 100%;
        top: 50%;
        left: 0;
        display: block;
        position: absolute;
        margin-top: calc(-1rem + 1px);
    }

    .p-steps-item:first-child::before {
        width: calc(50% + 1rem);
        transform: translateX(100%);
    }

    .p-steps-item:last-child::before {
        width: 50%;
    }

    .p-steps-item-link {
        display: inline-flex;
        flex-direction: column;
        align-items: center;
        overflow: hidden;
        text-decoration: none;
        transition:
            outline-color dt('steps.transition.duration'),
            box-shadow dt('steps.transition.duration');
        border-radius: dt('steps.item.link.border.radius');
        outline-color: transparent;
        gap: dt('steps.item.link.gap');
    }

    .p-steps-item-link:not(.p-disabled):focus-visible {
        box-shadow: dt('steps.item.link.focus.ring.shadow');
        outline: dt('steps.item.link.focus.ring.width') dt('steps.item.link.focus.ring.style') dt('steps.item.link.focus.ring.color');
        outline-offset: dt('steps.item.link.focus.ring.offset');
    }

    .p-steps-item-label {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 100%;
        color: dt('steps.item.label.color');
        display: block;
        font-weight: dt('steps.item.label.font.weight');
    }

    .p-steps-item-number {
        display: flex;
        align-items: center;
        justify-content: center;
        color: dt('steps.item.number.color');
        border: 2px solid dt('steps.item.number.border.color');
        background: dt('steps.item.number.background');
        min-width: dt('steps.item.number.size');
        height: dt('steps.item.number.size');
        line-height: dt('steps.item.number.size');
        font-size: dt('steps.item.number.font.size');
        z-index: 1;
        border-radius: dt('steps.item.number.border.radius');
        position: relative;
        font-weight: dt('steps.item.number.font.weight');
    }

    .p-steps-item-number::after {
        content: ' ';
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: dt('steps.item.number.border.radius');
        box-shadow: dt('steps.item.number.shadow');
    }

    .p-steps:not(.p-readonly) .p-steps-item {
        cursor: pointer;
    }

    .p-steps-item-active .p-steps-item-number {
        background: dt('steps.item.number.active.background');
        border-color: dt('steps.item.number.active.border.color');
        color: dt('steps.item.number.active.color');
    }

    .p-steps-item-active .p-steps-item-label {
        color: dt('steps.item.label.active.color');
    }
`;var Me=["list"],Te=(i,o)=>({item:i,index:o}),Le=()=>({exact:!1}),Pe=(i,o)=>o.label;function Ne(i,o){if(i&1&&(r(0,"span"),d(1),s()),i&2){let e=p(3).$implicit,t=p();u(t.cx("itemLabel")),m(),x(e.label)}}function Ae(i,o){if(i&1&&f(0,"span",12),i&2){let e=p(3).$implicit,t=p();u(t.cx("itemLabel")),c("innerHTML",e.label,P)}}function $e(i,o){if(i&1){let e=N();r(0,"a",10),S("click",function(n){_(e);let a=p(2),l=a.$implicit,g=a.$index,b=p();return y(b.onItemClick(n,l,g))})("keydown",function(n){_(e);let a=p(2),l=a.$implicit,g=a.$index,b=p();return y(b.onItemKeydown(n,l,g))}),r(1,"span"),d(2),s(),v(3,Ne,2,3,"span",11)(4,Ae,1,3,"ng-template",null,3,E),s()}if(i&2){let e=F(5),t=p(2),n=t.$implicit,a=t.$index,l=p();u(l.cx("itemLink")),c("routerLink",n.routerLink)("queryParams",n.queryParams)("routerLinkActiveOptions",n.routerLinkActiveOptions||ie(21,Le))("target",n.target)("fragment",n.fragment)("queryParamsHandling",n.queryParamsHandling)("preserveFragment",n.preserveFragment)("skipLocationChange",n.skipLocationChange)("replaceUrl",n.replaceUrl)("state",n.state),h("tabindex",l.getItemTabIndex(n,a))("aria-expanded",a===l.activeIndex)("aria-disabled",n.disabled||l.readonly&&a!==l.activeIndex)("ariaCurrentWhenActive",l.exact?"step":void 0),m(),u(l.cx("itemNumber")),m(),x(a+1),m(),c("ngIf",n.escape!==!1)("ngIfElse",e)}}function qe(i,o){if(i&1&&(r(0,"span"),d(1),s()),i&2){let e=p(3).$implicit,t=p();u(t.cx("itemLabel")),m(),x(e.label)}}function Ve(i,o){if(i&1&&f(0,"span",12),i&2){let e=p(3).$implicit,t=p();u(t.cx("itemLabel")),c("innerHTML",e.label,P)}}function je(i,o){if(i&1){let e=N();r(0,"a",13),S("click",function(n){_(e);let a=p(2),l=a.$implicit,g=a.$index,b=p();return y(b.onItemClick(n,l,g))})("keydown",function(n){_(e);let a=p(2),l=a.$implicit,g=a.$index,b=p();return y(b.onItemKeydown(n,l,g))}),r(1,"span"),d(2),s(),v(3,qe,2,3,"span",11)(4,Ve,1,3,"ng-template",null,4,E),s()}if(i&2){let e=F(5),t=p(2),n=t.$implicit,a=t.$index,l=p();u(l.cx("itemLink")),c("target",n.target),h("href",n.url,O)("tabindex",l.getItemTabIndex(n,a))("aria-expanded",a===l.activeIndex)("aria-disabled",n.disabled||l.readonly&&a!==l.activeIndex)("ariaCurrentWhenActive",l.exact&&(!n.disabled||l.readonly)?"step":void 0),m(),u(l.cx("itemNumber")),m(),x(a+1),m(),c("ngIf",n.escape!==!1)("ngIfElse",e)}}function Re(i,o){if(i&1&&(r(0,"li",8,1),v(2,$e,6,22,"a",9)(3,je,6,13,"ng-template",null,2,E),s()),i&2){let e=F(4),t=p(),n=t.$implicit,a=t.$index,l=p();u(l.cx("item",re(9,Te,n,a))),c("ngStyle",n.style)("tooltipOptions",n.tooltipOptions),h("aria-current",l.isActive(n,a)?"step":void 0)("id",n.id)("data-pc-section","menuitem"),m(2),c("ngIf",l.isClickableRouterLink(n))("ngIfElse",e)}}function Oe(i,o){if(i&1&&v(0,Re,5,12,"li",7),i&2){let e=o.$implicit;c("ngIf",e.visible!==!1)}}var ze={root:({instance:i})=>["p-steps p-component",{"p-readonly":i.readonly}],list:"p-steps-list",item:({instance:i,item:o,index:e})=>["p-steps-item",{"p-steps-item-active":i.isActive(o,e),"p-disabled":i.isItemDisabled(o,e)}],itemLink:"p-steps-item-link",itemNumber:"p-steps-item-number",itemLabel:"p-steps-item-label"},Ce=(()=>{class i extends ge{name="steps";theme=Ie;classes=ze;static \u0275fac=(()=>{let e;return function(n){return(e||(e=L(i)))(n||i)}})();static \u0275prov=j({token:i,factory:i.\u0275fac})}return i})();var V=(()=>{class i extends be{activeIndex=0;model;readonly=!0;style;styleClass;exact=!0;activeIndexChange=new z;listViewChild;router=I(ce);route=I(me);_componentStyle=I(Ce);subscription;ngOnInit(){super.ngOnInit(),this.subscription=this.router.events.subscribe(()=>this.cd.markForCheck())}onItemClick(e,t,n){if(this.readonly||t.disabled){e.preventDefault();return}this.activeIndexChange.emit(n),!t.url&&!t.routerLink&&e.preventDefault(),t.command&&t.command({originalEvent:e,item:t,index:n})}onItemKeydown(e,t,n){switch(e.code){case"ArrowRight":{this.navigateToNextItem(e.target),e.preventDefault();break}case"ArrowLeft":{this.navigateToPrevItem(e.target),e.preventDefault();break}case"Home":{this.navigateToFirstItem(e.target),e.preventDefault();break}case"End":{this.navigateToLastItem(e.target),e.preventDefault();break}case"Tab":if(n!==(this.activeIndex??-1)){let a=q(this.listViewChild?.nativeElement,'[data-pc-section="menuitem"]');a[n].children[0].tabIndex="-1",a[this.activeIndex??0].children[0].tabIndex="0"}break;case"Enter":case"Space":{this.onItemClick(e,t,n),e.preventDefault();break}default:break}}navigateToNextItem(e){let t=this.findNextItem(e);t&&this.setFocusToMenuitem(e,t)}navigateToPrevItem(e){let t=this.findPrevItem(e);t&&this.setFocusToMenuitem(e,t)}navigateToFirstItem(e){let t=this.findFirstItem();t&&this.setFocusToMenuitem(e,t)}navigateToLastItem(e){let t=this.findLastItem();t&&this.setFocusToMenuitem(e,t)}findNextItem(e){let t=e.parentElement.nextElementSibling;return t?t.children[0]:null}findPrevItem(e){let t=e.parentElement.previousElementSibling;return t?t.children[0]:null}findFirstItem(){let e=xe(this.listViewChild?.nativeElement,'[data-pc-section="menuitem"]');return e?e.children[0]:null}findLastItem(){let e=q(this.listViewChild?.nativeElement,'[data-pc-section="menuitem"]');return e?e[e.length-1].children[0]:null}setFocusToMenuitem(e,t){e.tabIndex="-1",t.tabIndex="0",t.focus()}isClickableRouterLink(e){return e.routerLink&&!this.readonly&&!e.disabled}isItemDisabled(e,t){return e.disabled||this.readonly&&!this.isActive(e,t)}isActive(e,t){if(e.routerLink){let n=Array.isArray(e.routerLink)?e.routerLink:[e.routerLink];return this.router.isActive(this.router.createUrlTree(n,{relativeTo:this.route}).toString(),!1)}return t===this.activeIndex}getItemTabIndex(e,t){return e.disabled?"-1":!e.disabled&&this.activeIndex===t?e.tabindex||"0":e.tabindex??"-1"}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe(),super.ngOnDestroy()}static \u0275fac=(()=>{let e;return function(n){return(e||(e=L(i)))(n||i)}})();static \u0275cmp=w({type:i,selectors:[["p-steps"]],viewQuery:function(t,n){if(t&1&&Z(Me,5),t&2){let a;G(a=J())&&(n.listViewChild=a.first)}},inputs:{activeIndex:[2,"activeIndex","activeIndex",se],model:"model",readonly:[2,"readonly","readonly",$],style:"style",styleClass:"styleClass",exact:[2,"exact","exact",$]},outputs:{activeIndexChange:"activeIndexChange"},features:[ne([Ce]),H],decls:5,vars:7,consts:[["list",""],["menuitem",""],["elseBlock",""],["htmlLabel",""],["htmlRouteLabel",""],[3,"ngStyle"],["pTooltip","",3,"class","ngStyle","tooltipOptions"],["pTooltip","",3,"class","ngStyle","tooltipOptions",4,"ngIf"],["pTooltip","",3,"ngStyle","tooltipOptions"],["role","link",3,"routerLink","queryParams","routerLinkActiveOptions","class","target","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state","click","keydown",4,"ngIf","ngIfElse"],["role","link",3,"click","keydown","routerLink","queryParams","routerLinkActiveOptions","target","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state"],[3,"class",4,"ngIf","ngIfElse"],[3,"innerHTML"],["role","link",3,"click","keydown","target"]],template:function(t,n){t&1&&(r(0,"nav",5)(1,"ul",null,0),W(3,Oe,1,1,"li",6,Pe),s()()),t&2&&(u(n.cn(n.cx("root"),n.styleClass)),c("ngStyle",n.style),h("data-pc-name","steps"),m(),u(n.cx("list")),h("data-pc-section","menu"),m(2),Q(n.model))},dependencies:[D,le,pe,fe,ue,Se,ve,M],encapsulation:2,changeDetection:0})}return i})(),we=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=B({type:i});static \u0275inj=R({imports:[V,M,M]})}return i})();function He(i,o){if(i&1&&(r(0,"div",29)(1,"div",4),f(2,"i",44),r(3,"h3",37),d(4," Collected Data Preview "),s()(),r(5,"div",38)(6,"pre",45)(7,"code"),d(8),ae(9,"json"),s()()()()),i&2){let e=p();m(8),x(oe(9,1,e.formData()))}}var Fe=class i{Math=Math;currentStep=C(0);formData=C({});loading=C(!1);steps=[{label:"Personal Information",fields:[{key:"firstName",type:"text",label:"First Name",required:!0,placeholder:"Enter your first name"},{key:"lastName",type:"text",label:"Last Name",required:!0,placeholder:"Enter your last name"},{key:"email",type:"email",label:"Email",required:!0,placeholder:"Enter your email"},{key:"phone",type:"text",label:"Phone Number",placeholder:"Enter your phone number"}]},{label:"Address Information",fields:[{key:"street",type:"text",label:"Street Address",required:!0,placeholder:"Enter street address"},{key:"city",type:"text",label:"City",required:!0,placeholder:"Enter city"},{key:"state",type:"text",label:"State/Province",required:!0,placeholder:"Enter state or province"},{key:"zipCode",type:"text",label:"ZIP/Postal Code",required:!0,placeholder:"Enter ZIP or postal code"},{key:"country",type:"select",label:"Country",required:!0,options:[{label:"United States",value:"US"},{label:"Canada",value:"CA"},{label:"United Kingdom",value:"UK"},{label:"Germany",value:"DE"},{label:"France",value:"FR"}]}]},{label:"Additional Details",fields:[{key:"bio",type:"textarea",label:"Biography",placeholder:"Tell us about yourself",rows:4},{key:"newsletter",type:"checkbox",label:"Subscribe to Newsletter",placeholder:"I want to receive newsletter updates"},{key:"terms",type:"checkbox",label:"Terms and Conditions",required:!0,placeholder:"I agree to the terms and conditions"}]}];stepItems=k(()=>this.steps.map((o,e)=>({label:o.label,command:()=>{e<=this.currentStep()&&this.currentStep.set(e)}})));get activeIndex(){return this.currentStep()}set activeIndex(o){this.currentStep.set(o)}currentFormConfig=k(()=>({fields:this.steps[this.currentStep()].fields,submitLabel:this.isLastStep()?"Submit":"Next",showCancel:this.currentStep()>0,cancelLabel:"Previous"}));isLastStep=k(()=>this.currentStep()===this.steps.length-1);isFirstStep=k(()=>this.currentStep()===0);onStepSubmit(o){let e=o;this.formData.update(t=>T(T({},t),e)),this.isLastStep()?(console.log("Final form data:",this.formData()),alert("Form submitted successfully!"),this.resetForm()):this.currentStep.update(t=>t+1)}onStepCancel(){this.isFirstStep()||this.currentStep.update(o=>o-1)}goToStep(o){o>=0&&o<this.steps.length&&this.currentStep.set(o)}resetForm(){this.currentStep.set(0),this.formData.set({})}isStepComplete(o){return o<this.currentStep()}hasFormData(){let o=this.formData();return Object.keys(o).length>0}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=w({type:i,selectors:[["app-multi-step-form-demo"]],decls:73,vars:11,consts:[[1,"container-responsive","space-y-responsive"],[1,"card-modern","padding-responsive","hover-lift","slide-in-up"],[1,"flex","flex-col","lg:flex-row","lg:items-center","lg:justify-between","gap-6"],[1,"flex-1"],[1,"flex","items-center","gap-3","mb-4"],[1,"w-12","h-12","sm:w-14","sm:h-14","rounded-xl","bg-gradient-to-br","from-orange-500","to-red-600","flex","items-center","justify-center","shadow-lg"],[1,"fas","fa-list-ol","text-white","text-xl","sm:text-2xl"],[1,"badge-modern","text-xs","sm:text-sm"],[1,"heading-responsive","text-gradient","mb-4"],[1,"text-responsive","text-gray-700","dark:text-gray-300"],[1,"hidden","lg:block"],[1,"w-32","h-32","rounded-2xl","bg-gradient-to-br","from-orange-500/20","to-red-600/20","flex","items-center","justify-center"],[1,"fas","fa-tasks","text-6xl","text-orange-500"],[1,"card-modern","hover-lift","slide-in-up"],[1,"padding-responsive","space-y-6"],[1,"glass","rounded-xl","p-6","border-l-4","border-orange-500"],[1,"flex","items-center","gap-3","mb-6"],[1,"fas","fa-route","text-orange-500","text-xl"],[1,"text-lg","sm:text-xl","font-semibold","text-gray-900","dark:text-gray-100"],[1,"w-full"],[3,"activeIndexChange","model","activeIndex","readonly"],[1,"glass","rounded-xl","p-6","border-l-4","border-blue-500"],[1,"flex","items-center","justify-between","mb-6"],[1,"flex","items-center","gap-3"],[1,"w-10","h-10","rounded-lg","bg-gradient-to-br","from-blue-500","to-purple-600","flex","items-center","justify-center"],[1,"text-white","font-bold"],[1,"text-sm","text-gray-500","dark:text-gray-400"],[1,"badge-modern"],[3,"formSubmit","formCancel","config","loading"],[1,"glass","rounded-xl","p-6","border-l-4","border-green-500","fade-in"],[1,"padding-responsive"],[1,"w-10","h-10","rounded-lg","bg-gradient-to-br","from-green-500","to-teal-600","flex","items-center","justify-center"],[1,"fas","fa-code","text-white"],[1,"subheading-responsive","text-gray-900","dark:text-gray-100"],[1,"glass","rounded-xl","p-6","border-l-4","border-purple-500"],[1,"flex","items-center","gap-2","mb-4"],[1,"fas","fa-file-code","text-purple-500"],[1,"text-lg","font-semibold","text-gray-900","dark:text-gray-100"],[1,"code-block-modern"],[1,"overflow-x-auto","text-sm"],[1,"w-10","h-10","rounded-lg","bg-gradient-to-br","from-teal-500","to-cyan-600","flex","items-center","justify-center"],[1,"fas","fa-graduation-cap","text-white"],[1,"list-modern"],[1,"text-sm","sm:text-base","text-gray-800","dark:text-gray-200"],[1,"fas","fa-database","text-green-500","text-xl"],[1,"text-sm","overflow-x-auto"]],template:function(e,t){e&1&&(r(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5),f(6,"i",6),s(),r(7,"div")(8,"span",7),d(9,"Angular Topics"),s()()(),r(10,"h1",8),d(11," Multi-Step Form "),s(),r(12,"p",9),d(13," A wizard-style multi-step form built with the dynamic form component. Demonstrates step-by-step form completion with progress tracking and data persistence across steps. "),s()(),r(14,"div",10)(15,"div",11),f(16,"i",12),s()()()(),r(17,"p-card",13)(18,"div",14)(19,"div",15)(20,"div",16),f(21,"i",17),r(22,"h3",18),d(23,"Progress"),s()(),r(24,"div",19)(25,"p-steps",20),te("activeIndexChange",function(a){return ee(t.activeIndex,a)||(t.activeIndex=a),a}),s()()(),r(26,"div",21)(27,"div",22)(28,"div",23)(29,"div",24)(30,"span",25),d(31),s()(),r(32,"div")(33,"h3",18),d(34),s(),r(35,"p",26),d(36),s()()(),r(37,"span",27),d(38),s()(),r(39,"app-dynamic-form",28),S("formSubmit",function(a){return t.onStepSubmit(a)})("formCancel",function(){return t.onStepCancel()}),s()(),U(40,He,10,3,"div",29),s()(),r(41,"p-card",13)(42,"div",30)(43,"div",16)(44,"div",31),f(45,"i",32),s(),r(46,"h2",33),d(47,"Code Examples"),s()(),r(48,"div",34)(49,"div",35),f(50,"i",36),r(51,"h4",37),d(52,"Multi-Step Form Implementation"),s()(),r(53,"div",38)(54,"pre",39)(55,"code"),d(56,`// Define steps
steps: StepConfig[] = [
  {
    label: 'Personal Information',
    fields: [/* form fields */]
  },
  {
    label: 'Address Information',
    fields: [/* form fields */]
  }
];

// Track current step
currentStep = signal(0);

// Handle step submission
onStepSubmit(result: unknown): void {
  this.formData.update(data => ({ ...data, ...result }));
  if (this.isLastStep()) {
    // Final submission
  } else {
    this.currentStep.update(step => step + 1);
  }
}`),s()()()()()(),r(57,"p-card",13)(58,"div",30)(59,"div",16)(60,"div",40),f(61,"i",41),s(),r(62,"h2",33),d(63,"Key Takeaways"),s()(),r(64,"ul",42)(65,"li",43),d(66," Break complex forms into manageable steps "),s(),r(67,"li",43),d(68," Use signals to track current step and form data "),s(),r(69,"li",43),d(70," Validate each step before proceeding "),s(),r(71,"li",43),d(72," Persist data across steps for final submission "),s()()()()()),e&2&&(m(25),c("model",t.stepItems()),Y("activeIndex",t.activeIndex),c("readonly",!1),m(6),x(t.currentStep()+1),m(3),A(" ",t.steps[t.currentStep()].label," "),m(2),X(" Step ",t.currentStep()+1," of ",t.steps.length," "),m(2),A(" ",t.Math.round((t.currentStep()+1)/t.steps.length*100),"% Complete "),m(),c("config",t.currentFormConfig())("loading",t.loading),m(),K(t.hasFormData()?40:-1))},dependencies:[D,ye,_e,he,we,V,ke,de],encapsulation:2,changeDetection:0})};export{Fe as MultiStepFormDemoComponent};
