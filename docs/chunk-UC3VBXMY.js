import{a as Ie}from"./chunk-DIYDHJQV.js";import"./chunk-SILLDBSL.js";import"./chunk-ZTV3NQ2K.js";import"./chunk-GZQUSTHA.js";import"./chunk-57FOANFP.js";import{a as pe,c as ue,d as ge,g as fe}from"./chunk-LSYD7JZR.js";import"./chunk-TSJAUTS6.js";import"./chunk-CMZ4I467.js";import{b as Se,c as we}from"./chunk-2J3LZQCR.js";import"./chunk-TP7YNU2K.js";import"./chunk-3DC6BNIH.js";import"./chunk-ZJDS2JMU.js";import"./chunk-YTKLB6YK.js";import"./chunk-D27LCWUD.js";import"./chunk-QB6ZO67J.js";import"./chunk-RMJAI7RZ.js";import{e as ve}from"./chunk-26I6QKGV.js";import"./chunk-DS4DKGB5.js";import"./chunk-YPUDPSQH.js";import"./chunk-DEGWJE5E.js";import"./chunk-PKLQWDLD.js";import"./chunk-SHEHAVXT.js";import{a as _e,b as ke}from"./chunk-ST7OVFPO.js";import"./chunk-3N3GZBUB.js";import"./chunk-4O3FVBGX.js";import"./chunk-QCJRPF2F.js";import{b as he}from"./chunk-IZU7C3FN.js";import{b as xe}from"./chunk-JBIPGRVB.js";import{Fa as M,Na as ye,P as q,Q as be,k as de,n as me,q as ce,r as D}from"./chunk-BO564T5E.js";import"./chunk-FPPZ4BUR.js";import{Aa as L,Ab as y,Cb as H,Db as K,Ec as oe,Fc as se,Gb as W,Hb as Q,Hc as F,Ib as p,Jb as r,Kb as o,Lb as u,Mc as S,Sb as P,Va as N,Wa as O,Wb as k,Xc as A,Yb as d,Yc as le,Za as m,ac as G,bc as Z,ca as j,cb as z,cc as J,da as R,fc as E,gc as X,ha as w,jc as g,kc as c,lc as f,ma as h,mc as $,na as v,nb as C,nc as Y,ob as B,pc as ee,qc as te,rb as U,rc as ne,tb as _,tc as ie,uc as re,va as I,wc as ae}from"./chunk-6P3ZW5D6.js";import{a as T}from"./chunk-6HR7AMTL.js";var Ce=`
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
`;var Le=["list"],Ne=(i,s)=>({item:i,index:s}),Pe=()=>({exact:!1}),$e=(i,s)=>s.label;function Ae(i,s){if(i&1&&(r(0,"span"),c(1),o()),i&2){let e=d(3).$implicit,t=d();g(t.cx("itemLabel")),m(),f(e.label)}}function qe(i,s){if(i&1&&u(0,"span",12),i&2){let e=d(3).$implicit,t=d();g(t.cx("itemLabel")),p("innerHTML",e.label,N)}}function Ve(i,s){if(i&1){let e=P();r(0,"a",10),k("click",function(n){h(e);let a=d(2),l=a.$implicit,x=a.$index,b=d();return v(b.onItemClick(n,l,x))})("keydown",function(n){h(e);let a=d(2),l=a.$implicit,x=a.$index,b=d();return v(b.onItemKeydown(n,l,x))}),r(1,"span"),c(2),o(),_(3,Ae,2,3,"span",11)(4,qe,1,3,"ng-template",null,3,F),o()}if(i&2){let e=E(5),t=d(2),n=t.$implicit,a=t.$index,l=d();g(l.cx("itemLink")),p("routerLink",n.routerLink)("queryParams",n.queryParams)("routerLinkActiveOptions",n.routerLinkActiveOptions||re(21,Pe))("target",n.target)("fragment",n.fragment)("queryParamsHandling",n.queryParamsHandling)("preserveFragment",n.preserveFragment)("skipLocationChange",n.skipLocationChange)("replaceUrl",n.replaceUrl)("state",n.state),y("tabindex",l.getItemTabIndex(n,a))("aria-expanded",a===l.activeIndex)("aria-disabled",n.disabled||l.readonly&&a!==l.activeIndex)("ariaCurrentWhenActive",l.exact?"step":void 0),m(),g(l.cx("itemNumber")),m(),f(a+1),m(),p("ngIf",n.escape!==!1)("ngIfElse",e)}}function je(i,s){if(i&1&&(r(0,"span"),c(1),o()),i&2){let e=d(3).$implicit,t=d();g(t.cx("itemLabel")),m(),f(e.label)}}function Re(i,s){if(i&1&&u(0,"span",12),i&2){let e=d(3).$implicit,t=d();g(t.cx("itemLabel")),p("innerHTML",e.label,N)}}function Oe(i,s){if(i&1){let e=P();r(0,"a",13),k("click",function(n){h(e);let a=d(2),l=a.$implicit,x=a.$index,b=d();return v(b.onItemClick(n,l,x))})("keydown",function(n){h(e);let a=d(2),l=a.$implicit,x=a.$index,b=d();return v(b.onItemKeydown(n,l,x))}),r(1,"span"),c(2),o(),_(3,je,2,3,"span",11)(4,Re,1,3,"ng-template",null,4,F),o()}if(i&2){let e=E(5),t=d(2),n=t.$implicit,a=t.$index,l=d();g(l.cx("itemLink")),p("target",n.target),y("href",n.url,O)("tabindex",l.getItemTabIndex(n,a))("aria-expanded",a===l.activeIndex)("aria-disabled",n.disabled||l.readonly&&a!==l.activeIndex)("ariaCurrentWhenActive",l.exact&&(!n.disabled||l.readonly)?"step":void 0),m(),g(l.cx("itemNumber")),m(),f(a+1),m(),p("ngIf",n.escape!==!1)("ngIfElse",e)}}function ze(i,s){if(i&1&&(r(0,"li",8,1),_(2,Ve,6,22,"a",9)(3,Oe,6,13,"ng-template",null,2,F),o()),i&2){let e=E(4),t=d(),n=t.$implicit,a=t.$index,l=d();g(l.cx("item",ae(9,Ne,n,a))),p("ngStyle",n.style)("tooltipOptions",n.tooltipOptions),y("aria-current",l.isActive(n,a)?"step":void 0)("id",n.id)("data-pc-section","menuitem"),m(2),p("ngIf",l.isClickableRouterLink(n))("ngIfElse",e)}}function Be(i,s){if(i&1&&_(0,ze,5,12,"li",7),i&2){let e=s.$implicit;p("ngIf",e.visible!==!1)}}var Ue={root:({instance:i})=>["p-steps p-component",{"p-readonly":i.readonly}],list:"p-steps-list",item:({instance:i,item:s,index:e})=>["p-steps-item",{"p-steps-item-active":i.isActive(s,e),"p-disabled":i.isItemDisabled(s,e)}],itemLink:"p-steps-item-link",itemNumber:"p-steps-item-number",itemLabel:"p-steps-item-label"},Ee=(()=>{class i extends ye{name="steps";theme=Ce;classes=Ue;static \u0275fac=(()=>{let e;return function(n){return(e||(e=L(i)))(n||i)}})();static \u0275prov=j({token:i,factory:i.\u0275fac})}return i})();var V=(()=>{class i extends he{activeIndex=0;model;readonly=!0;style;styleClass;exact=!0;activeIndexChange=new z;listViewChild;router=w(ue);route=w(pe);_componentStyle=w(Ee);subscription;ngOnInit(){super.ngOnInit(),this.subscription=this.router.events.subscribe(()=>this.cd.markForCheck())}onItemClick(e,t,n){if(this.readonly||t.disabled){e.preventDefault();return}this.activeIndexChange.emit(n),!t.url&&!t.routerLink&&e.preventDefault(),t.command&&t.command({originalEvent:e,item:t,index:n})}onItemKeydown(e,t,n){switch(e.code){case"ArrowRight":{this.navigateToNextItem(e.target),e.preventDefault();break}case"ArrowLeft":{this.navigateToPrevItem(e.target),e.preventDefault();break}case"Home":{this.navigateToFirstItem(e.target),e.preventDefault();break}case"End":{this.navigateToLastItem(e.target),e.preventDefault();break}case"Tab":if(n!==(this.activeIndex??-1)){let a=q(this.listViewChild?.nativeElement,'[data-pc-section="menuitem"]');a[n].children[0].tabIndex="-1",a[this.activeIndex??0].children[0].tabIndex="0"}break;case"Enter":case"Space":{this.onItemClick(e,t,n),e.preventDefault();break}default:break}}navigateToNextItem(e){let t=this.findNextItem(e);t&&this.setFocusToMenuitem(e,t)}navigateToPrevItem(e){let t=this.findPrevItem(e);t&&this.setFocusToMenuitem(e,t)}navigateToFirstItem(e){let t=this.findFirstItem();t&&this.setFocusToMenuitem(e,t)}navigateToLastItem(e){let t=this.findLastItem();t&&this.setFocusToMenuitem(e,t)}findNextItem(e){let t=e.parentElement.nextElementSibling;return t?t.children[0]:null}findPrevItem(e){let t=e.parentElement.previousElementSibling;return t?t.children[0]:null}findFirstItem(){let e=be(this.listViewChild?.nativeElement,'[data-pc-section="menuitem"]');return e?e.children[0]:null}findLastItem(){let e=q(this.listViewChild?.nativeElement,'[data-pc-section="menuitem"]');return e?e[e.length-1].children[0]:null}setFocusToMenuitem(e,t){e.tabIndex="-1",t.tabIndex="0",t.focus()}isClickableRouterLink(e){return e.routerLink&&!this.readonly&&!e.disabled}isItemDisabled(e,t){return e.disabled||this.readonly&&!this.isActive(e,t)}isActive(e,t){if(e.routerLink){let n=Array.isArray(e.routerLink)?e.routerLink:[e.routerLink];return this.router.isActive(this.router.createUrlTree(n,{relativeTo:this.route}).toString(),!1)}return t===this.activeIndex}getItemTabIndex(e,t){return e.disabled?"-1":!e.disabled&&this.activeIndex===t?e.tabindex||"0":e.tabindex??"-1"}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe(),super.ngOnDestroy()}static \u0275fac=(()=>{let e;return function(n){return(e||(e=L(i)))(n||i)}})();static \u0275cmp=C({type:i,selectors:[["p-steps"]],viewQuery:function(t,n){if(t&1&&G(Le,5),t&2){let a;Z(a=J())&&(n.listViewChild=a.first)}},inputs:{activeIndex:[2,"activeIndex","activeIndex",le],model:"model",readonly:[2,"readonly","readonly",A],style:"style",styleClass:"styleClass",exact:[2,"exact","exact",A]},outputs:{activeIndexChange:"activeIndexChange"},features:[ie([Ee]),U],decls:5,vars:7,consts:[["list",""],["menuitem",""],["elseBlock",""],["htmlLabel",""],["htmlRouteLabel",""],[3,"ngStyle"],["pTooltip","",3,"class","ngStyle","tooltipOptions"],["pTooltip","",3,"class","ngStyle","tooltipOptions",4,"ngIf"],["pTooltip","",3,"ngStyle","tooltipOptions"],["role","link",3,"routerLink","queryParams","routerLinkActiveOptions","class","target","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state","click","keydown",4,"ngIf","ngIfElse"],["role","link",3,"click","keydown","routerLink","queryParams","routerLinkActiveOptions","target","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state"],[3,"class",4,"ngIf","ngIfElse"],[3,"innerHTML"],["role","link",3,"click","keydown","target"]],template:function(t,n){t&1&&(r(0,"nav",5)(1,"ul",null,0),W(3,Be,1,1,"li",6,$e),o()()),t&2&&(g(n.cn(n.cx("root"),n.styleClass)),p("ngStyle",n.style),y("data-pc-name","steps"),m(),g(n.cx("list")),y("data-pc-section","menu"),m(2),Q(n.model))},dependencies:[D,de,me,fe,ge,we,Se,M],encapsulation:2,changeDetection:0})}return i})(),Fe=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=B({type:i});static \u0275inj=R({imports:[V,M,M]})}return i})();function Ke(i,s){if(i&1&&(r(0,"div",34)(1,"div",44),u(2,"ng-icon",45),r(3,"h3",46),c(4," Collected Data Preview "),o()(),r(5,"div",47)(6,"pre")(7,"code"),c(8),oe(9,"json"),o()()()()),i&2){let e=d();m(8),f(se(9,1,e.formData()))}}var De=class i{Math=Math;currentStep=I(0);formData=I({});loading=I(!1);steps=[{label:"Personal Information",fields:[{key:"firstName",type:"text",label:"First Name",required:!0,placeholder:"Enter your first name"},{key:"lastName",type:"text",label:"Last Name",required:!0,placeholder:"Enter your last name"},{key:"email",type:"email",label:"Email",required:!0,placeholder:"Enter your email"},{key:"phone",type:"text",label:"Phone Number",placeholder:"Enter your phone number"}]},{label:"Address Information",fields:[{key:"street",type:"text",label:"Street Address",required:!0,placeholder:"Enter street address"},{key:"city",type:"text",label:"City",required:!0,placeholder:"Enter city"},{key:"state",type:"text",label:"State/Province",required:!0,placeholder:"Enter state or province"},{key:"zipCode",type:"text",label:"ZIP/Postal Code",required:!0,placeholder:"Enter ZIP or postal code"},{key:"country",type:"select",label:"Country",required:!0,options:[{label:"United States",value:"US"},{label:"Canada",value:"CA"},{label:"United Kingdom",value:"UK"},{label:"Germany",value:"DE"},{label:"France",value:"FR"}]}]},{label:"Additional Details",fields:[{key:"bio",type:"textarea",label:"Biography",placeholder:"Tell us about yourself",rows:4},{key:"newsletter",type:"checkbox",label:"Subscribe to Newsletter",placeholder:"I want to receive newsletter updates"},{key:"terms",type:"checkbox",label:"Terms and Conditions",required:!0,placeholder:"I agree to the terms and conditions"}]}];stepItems=S(()=>this.steps.map((s,e)=>({label:s.label,command:()=>{e<=this.currentStep()&&this.currentStep.set(e)}})));get activeIndex(){return this.currentStep()}set activeIndex(s){this.currentStep.set(s)}currentFormConfig=S(()=>({fields:this.steps[this.currentStep()].fields,submitLabel:this.isLastStep()?"Submit":"Next",showCancel:this.currentStep()>0,cancelLabel:"Previous"}));isLastStep=S(()=>this.currentStep()===this.steps.length-1);isFirstStep=S(()=>this.currentStep()===0);onStepSubmit(s){let e=s;this.formData.update(t=>T(T({},t),e)),this.isLastStep()?(console.log("Final form data:",this.formData()),alert("Form submitted successfully!"),this.resetForm()):this.currentStep.update(t=>t+1)}onStepCancel(){this.isFirstStep()||this.currentStep.update(s=>s-1)}goToStep(s){s>=0&&s<this.steps.length&&this.currentStep.set(s)}resetForm(){this.currentStep.set(0),this.formData.set({})}isStepComplete(s){return s<this.currentStep()}hasFormData(){let s=this.formData();return Object.keys(s).length>0}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=C({type:i,selectors:[["app-multi-step-form-demo"]],decls:72,vars:13,consts:[[1,"max-w-7xl","mx-auto","px-4","sm:px-6","lg:px-8","py-8","space-y-8"],[1,"bg-white","dark:bg-gray-900/50","backdrop-blur-sm","border","border-gray-200","dark:border-gray-800","rounded-2xl","p-6","sm:p-8","shadow-sm","transition-all","duration-300","hover:-translate-y-1","hover:shadow-md","slide-in-up"],[1,"flex","flex-col","lg:flex-row","lg:items-center","lg:justify-between","gap-6"],[1,"flex-1"],[1,"flex","items-center","gap-3","mb-4"],[1,"w-12","h-12","sm:w-14","sm:h-14","rounded-xl","bg-gradient-to-br","from-[var(--accent-gradient-from)]","to-[var(--accent-gradient-to)]","flex","items-center","justify-center","shadow-lg"],["name","faSolidListOl",1,"text-white","text-xl","sm:text-2xl"],[1,"inline-flex","items-center","px-3","py-1","rounded-full","text-xs","font-semibold","bg-[var(--accent-color)]/10","text-[var(--accent-color)]"],[1,"text-3xl","sm:text-4xl","lg:text-5xl","font-bold","bg-gradient-to-r","from-[var(--accent-gradient-from)]","to-[var(--accent-gradient-to)]","bg-clip-text","text-transparent","mb-4"],[1,"text-base","sm:text-lg","text-gray-600","dark:text-gray-400","leading-relaxed"],[1,"hidden","lg:block"],[1,"w-32","h-32","rounded-2xl","bg-[var(--accent-color)]/10","dark:bg-[var(--accent-color)]/20","flex","items-center","justify-center","backdrop-blur-sm","border","border-[var(--accent-color)]/20"],["name","faSolidListCheck",1,"text-6xl","text-accent"],["styleClass","p-0 overflow-hidden border-none bg-transparent shadow-none slide-in-up"],[1,"bg-white","dark:bg-gray-900/50","border","border-gray-200","dark:border-gray-800","rounded-2xl","p-4","sm:p-6","lg:p-8","transition-all","duration-300","shadow-sm","space-y-8"],[1,"bg-gray-50/50","dark:bg-gray-800/20","rounded-2xl","p-6","border","border-gray-200","dark:border-gray-700/50"],[1,"flex","items-center","gap-3","mb-8"],["name","faSolidRoute",1,"text-accent","text-xl"],[1,"text-lg","sm:text-xl","font-semibold","text-gray-900","dark:text-gray-100"],[1,"w-full"],[3,"activeIndexChange","model","activeIndex","readonly"],[1,"bg-gray-50/50","dark:bg-gray-800/20","rounded-2xl","p-6","border","border-gray-200","dark:border-gray-700/50","border-l-4","border-l-[var(--accent-color)]"],[1,"flex","flex-col","sm:flex-row","sm:items-center","justify-between","gap-4","mb-8"],[1,"flex","items-center","gap-4"],[1,"w-12","h-12","rounded-xl","bg-gradient-to-br","from-[var(--accent-gradient-from)]","to-[var(--accent-gradient-to)]","flex","items-center","justify-center","shadow-md"],[1,"text-white","font-bold","text-lg"],[1,"text-xl","font-bold","text-gray-900","dark:text-gray-100"],[1,"text-sm","text-gray-500","dark:text-gray-400"],[1,"flex","items-center","gap-3"],[1,"text-sm","font-semibold","text-gray-500","dark:text-gray-400"],[1,"w-24","h-2","bg-gray-200","dark:bg-gray-700","rounded-full","overflow-hidden"],[1,"h-full","bg-[var(--accent-color)]","transition-all","duration-500","shadow-[0_0_10px_var(--accent-color)]"],[1,"bg-white","dark:bg-gray-900","rounded-2xl","p-6","sm:p-8","border","border-gray-200","dark:border-gray-800","shadow-sm","transition-all"],[3,"formSubmit","formCancel","config","loading"],[1,"bg-gray-50/50","dark:bg-gray-800/20","rounded-2xl","p-6","border","border-gray-200","dark:border-gray-700/50","border-l-4","border-l-emerald-500","animate-fade-in","shadow-inner"],[1,"bg-white","dark:bg-gray-900/50","backdrop-blur-sm","border","border-gray-200","dark:border-gray-800","rounded-2xl","p-6","sm:p-8","transition-all","duration-300","shadow-sm","hover:shadow-md","slide-in-up"],[1,"w-10","h-10","rounded-lg","bg-gradient-to-br","from-[var(--accent-gradient-from)]","to-[var(--accent-gradient-to)]","flex","items-center","justify-center","shadow-md"],["name","faSolidGraduationCap",1,"text-white"],[1,"text-xl","sm:text-2xl","font-bold","text-gray-900","dark:text-gray-100"],[1,"grid","grid-cols-1","md:grid-cols-2","gap-4"],[1,"bg-gray-50","dark:bg-gray-800/50","border","border-gray-100","dark:border-gray-700/50","p-4","rounded-xl","flex","items-start","gap-4","transition-all","hover:border-[var(--accent-color)]/30","group"],[1,"w-8","h-8","rounded-full","bg-[var(--accent-color)]/10","text-[var(--accent-color)]","flex","items-center","justify-center","shrink-0","group-hover:bg-[var(--accent-color)]","group-hover:text-white","transition-colors"],["name","faSolidCheck",1,"text-sm"],[1,"text-gray-800","dark:text-gray-200","font-medium","pt-1"],[1,"flex","items-center","gap-3","mb-6","text-gray-900","dark:text-gray-100"],["name","faSolidDatabase",1,"text-emerald-500","text-xl"],[1,"text-lg","font-bold"],[1,"bg-gray-900","rounded-xl","p-6","overflow-x-auto","text-sm","text-emerald-400","font-mono","shadow-2xl","border","border-emerald-500/20"]],template:function(e,t){e&1&&(r(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5),u(6,"ng-icon",6),o(),r(7,"div")(8,"span",7),c(9,"Angular Topics"),o()()(),r(10,"h1",8),c(11," Multi-Step Form "),o(),r(12,"p",9),c(13," A wizard-style multi-step form built with the dynamic form component. Demonstrates step-by-step form completion with progress tracking and data persistence across steps. "),o()(),r(14,"div",10)(15,"div",11),u(16,"ng-icon",12),o()()()(),r(17,"p-card",13)(18,"div",14)(19,"div",15)(20,"div",16),u(21,"ng-icon",17),r(22,"h3",18),c(23,"Step Navigation"),o()(),r(24,"div",19)(25,"p-steps",20),ne("activeIndexChange",function(a){return te(t.activeIndex,a)||(t.activeIndex=a),a}),o()()(),r(26,"div",21)(27,"div",22)(28,"div",23)(29,"div",24)(30,"span",25),c(31),o()(),r(32,"div")(33,"h3",26),c(34),o(),r(35,"p",27),c(36),o()()(),r(37,"div",28)(38,"span",29),c(39),o(),r(40,"div",30),u(41,"div",31),o()()(),r(42,"div",32)(43,"app-dynamic-form",33),k("formSubmit",function(a){return t.onStepSubmit(a)})("formCancel",function(){return t.onStepCancel()}),o()()(),H(44,Ke,10,3,"div",34),o()(),r(45,"div",35)(46,"div",16)(47,"div",36),u(48,"ng-icon",37),o(),r(49,"h2",38),c(50,"Key Takeaways"),o()(),r(51,"div",39)(52,"div",40)(53,"div",41),u(54,"ng-icon",42),o(),r(55,"p",43),c(56,"Break complex forms into manageable steps"),o()(),r(57,"div",40)(58,"div",41),u(59,"ng-icon",42),o(),r(60,"p",43),c(61,"Use signals to track current step and form data"),o()(),r(62,"div",40)(63,"div",41),u(64,"ng-icon",42),o(),r(65,"p",43),c(66,"Validate each step before proceeding"),o()(),r(67,"div",40)(68,"div",41),u(69,"ng-icon",42),o(),r(70,"p",43),c(71,"Persist data across steps for final submission"),o()()()()()),e&2&&(m(25),p("model",t.stepItems()),ee("activeIndex",t.activeIndex),p("readonly",!0),m(6),f(t.currentStep()+1),m(3),$(" ",t.steps[t.currentStep()].label," "),m(2),Y(" Step ",t.currentStep()+1," of ",t.steps.length," "),m(3),$(" ",t.Math.round((t.currentStep()+1)/t.steps.length*100),"% Complete "),m(2),X("width",t.Math.round((t.currentStep()+1)/t.steps.length*100),"%"),m(2),p("config",t.currentFormConfig())("loading",t.loading),m(),K(t.hasFormData()?44:-1))},dependencies:[xe,D,ke,_e,ve,Fe,V,Ie,ce],encapsulation:2,changeDetection:0})};export{De as MultiStepFormDemoComponent};
