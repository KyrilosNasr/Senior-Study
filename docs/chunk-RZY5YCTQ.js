import{a as ke}from"./chunk-2IROAEZX.js";import"./chunk-Z7XGQMEX.js";import"./chunk-75YUDZ7Q.js";import"./chunk-GJB2LYQR.js";import{a as me,c as ce,d as de,g as ue}from"./chunk-VOTI2NVL.js";import"./chunk-4XII4GPH.js";import"./chunk-JYXC555M.js";import{b as he,c as ve}from"./chunk-3TTLRSV5.js";import"./chunk-OI7BAXIY.js";import"./chunk-3DC6BNIH.js";import"./chunk-WZVHLRL7.js";import"./chunk-MURGDBDS.js";import"./chunk-PWADZLDW.js";import"./chunk-RKNTYQG7.js";import{e as ge}from"./chunk-TZQAO3FF.js";import"./chunk-IZO5M3UY.js";import"./chunk-ZY4775QE.js";import"./chunk-ZNXKPSJD.js";import"./chunk-62D4PAY4.js";import"./chunk-M7M6PVNH.js";import{a as _e,b as ye}from"./chunk-6YR6DT4F.js";import"./chunk-7NSTPXRT.js";import"./chunk-4O3FVBGX.js";import"./chunk-XIG2QSYL.js";import{b as xe}from"./chunk-4W5EU4G4.js";import{Fa as T,Ma as be,P as q,Q as fe,k as se,n as le,q as pe,r as D}from"./chunk-W43CSKKG.js";import"./chunk-FPPZ4BUR.js";import{Aa as M,Bb as g,Db as U,Eb as K,Ec as re,Fc as oe,Hb as W,Hc as F,Ib as Q,Jb as c,Kb as p,Lb as l,Mb as N,Mc as k,Tb as P,Va as E,Wa as z,Xb as v,Xc as A,Yc as ae,Za as m,Zb as s,bc as Z,ca as R,cb as H,cc as G,da as O,dc as J,gc as w,ha as S,kc as u,lc as d,ma as _,mc as x,na as y,nb as C,ob as j,oc as $,pc as X,qc as Y,rb as B,rc as ee,tb as h,tc as te,uc as ne,va as I,wc as ie}from"./chunk-2VW4HCOQ.js";import{a as L}from"./chunk-6HR7AMTL.js";var Se=`
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
`;var Te=["list"],Le=(i,o)=>({item:i,index:o}),Me=()=>({exact:!1}),Ee=(i,o)=>o.label;function Ne(i,o){if(i&1&&(p(0,"span"),d(1),l()),i&2){let e=s(3).$implicit,t=s();u(t.cx("itemLabel")),m(),x(e.label)}}function Pe(i,o){if(i&1&&N(0,"span",12),i&2){let e=s(3).$implicit,t=s();u(t.cx("itemLabel")),c("innerHTML",e.label,E)}}function $e(i,o){if(i&1){let e=P();p(0,"a",10),v("click",function(n){_(e);let r=s(2),a=r.$implicit,f=r.$index,b=s();return y(b.onItemClick(n,a,f))})("keydown",function(n){_(e);let r=s(2),a=r.$implicit,f=r.$index,b=s();return y(b.onItemKeydown(n,a,f))}),p(1,"span"),d(2),l(),h(3,Ne,2,3,"span",11)(4,Pe,1,3,"ng-template",null,3,F),l()}if(i&2){let e=w(5),t=s(2),n=t.$implicit,r=t.$index,a=s();u(a.cx("itemLink")),c("routerLink",n.routerLink)("queryParams",n.queryParams)("routerLinkActiveOptions",n.routerLinkActiveOptions||ne(21,Me))("target",n.target)("fragment",n.fragment)("queryParamsHandling",n.queryParamsHandling)("preserveFragment",n.preserveFragment)("skipLocationChange",n.skipLocationChange)("replaceUrl",n.replaceUrl)("state",n.state),g("tabindex",a.getItemTabIndex(n,r))("aria-expanded",r===a.activeIndex)("aria-disabled",n.disabled||a.readonly&&r!==a.activeIndex)("ariaCurrentWhenActive",a.exact?"step":void 0),m(),u(a.cx("itemNumber")),m(),x(r+1),m(),c("ngIf",n.escape!==!1)("ngIfElse",e)}}function Ae(i,o){if(i&1&&(p(0,"span"),d(1),l()),i&2){let e=s(3).$implicit,t=s();u(t.cx("itemLabel")),m(),x(e.label)}}function qe(i,o){if(i&1&&N(0,"span",12),i&2){let e=s(3).$implicit,t=s();u(t.cx("itemLabel")),c("innerHTML",e.label,E)}}function Ve(i,o){if(i&1){let e=P();p(0,"a",13),v("click",function(n){_(e);let r=s(2),a=r.$implicit,f=r.$index,b=s();return y(b.onItemClick(n,a,f))})("keydown",function(n){_(e);let r=s(2),a=r.$implicit,f=r.$index,b=s();return y(b.onItemKeydown(n,a,f))}),p(1,"span"),d(2),l(),h(3,Ae,2,3,"span",11)(4,qe,1,3,"ng-template",null,4,F),l()}if(i&2){let e=w(5),t=s(2),n=t.$implicit,r=t.$index,a=s();u(a.cx("itemLink")),c("target",n.target),g("href",n.url,z)("tabindex",a.getItemTabIndex(n,r))("aria-expanded",r===a.activeIndex)("aria-disabled",n.disabled||a.readonly&&r!==a.activeIndex)("ariaCurrentWhenActive",a.exact&&(!n.disabled||a.readonly)?"step":void 0),m(),u(a.cx("itemNumber")),m(),x(r+1),m(),c("ngIf",n.escape!==!1)("ngIfElse",e)}}function Re(i,o){if(i&1&&(p(0,"li",8,1),h(2,$e,6,22,"a",9)(3,Ve,6,13,"ng-template",null,2,F),l()),i&2){let e=w(4),t=s(),n=t.$implicit,r=t.$index,a=s();u(a.cx("item",ie(9,Le,n,r))),c("ngStyle",n.style)("tooltipOptions",n.tooltipOptions),g("aria-current",a.isActive(n,r)?"step":void 0)("id",n.id)("data-pc-section","menuitem"),m(2),c("ngIf",a.isClickableRouterLink(n))("ngIfElse",e)}}function Oe(i,o){if(i&1&&h(0,Re,5,12,"li",7),i&2){let e=o.$implicit;c("ngIf",e.visible!==!1)}}var ze={root:({instance:i})=>["p-steps p-component",{"p-readonly":i.readonly}],list:"p-steps-list",item:({instance:i,item:o,index:e})=>["p-steps-item",{"p-steps-item-active":i.isActive(o,e),"p-disabled":i.isItemDisabled(o,e)}],itemLink:"p-steps-item-link",itemNumber:"p-steps-item-number",itemLabel:"p-steps-item-label"},Ie=(()=>{class i extends be{name="steps";theme=Se;classes=ze;static \u0275fac=(()=>{let e;return function(n){return(e||(e=M(i)))(n||i)}})();static \u0275prov=R({token:i,factory:i.\u0275fac})}return i})();var V=(()=>{class i extends xe{activeIndex=0;model;readonly=!0;style;styleClass;exact=!0;activeIndexChange=new H;listViewChild;router=S(ce);route=S(me);_componentStyle=S(Ie);subscription;ngOnInit(){super.ngOnInit(),this.subscription=this.router.events.subscribe(()=>this.cd.markForCheck())}onItemClick(e,t,n){if(this.readonly||t.disabled){e.preventDefault();return}this.activeIndexChange.emit(n),!t.url&&!t.routerLink&&e.preventDefault(),t.command&&t.command({originalEvent:e,item:t,index:n})}onItemKeydown(e,t,n){switch(e.code){case"ArrowRight":{this.navigateToNextItem(e.target),e.preventDefault();break}case"ArrowLeft":{this.navigateToPrevItem(e.target),e.preventDefault();break}case"Home":{this.navigateToFirstItem(e.target),e.preventDefault();break}case"End":{this.navigateToLastItem(e.target),e.preventDefault();break}case"Tab":if(n!==(this.activeIndex??-1)){let r=q(this.listViewChild?.nativeElement,'[data-pc-section="menuitem"]');r[n].children[0].tabIndex="-1",r[this.activeIndex??0].children[0].tabIndex="0"}break;case"Enter":case"Space":{this.onItemClick(e,t,n),e.preventDefault();break}default:break}}navigateToNextItem(e){let t=this.findNextItem(e);t&&this.setFocusToMenuitem(e,t)}navigateToPrevItem(e){let t=this.findPrevItem(e);t&&this.setFocusToMenuitem(e,t)}navigateToFirstItem(e){let t=this.findFirstItem();t&&this.setFocusToMenuitem(e,t)}navigateToLastItem(e){let t=this.findLastItem();t&&this.setFocusToMenuitem(e,t)}findNextItem(e){let t=e.parentElement.nextElementSibling;return t?t.children[0]:null}findPrevItem(e){let t=e.parentElement.previousElementSibling;return t?t.children[0]:null}findFirstItem(){let e=fe(this.listViewChild?.nativeElement,'[data-pc-section="menuitem"]');return e?e.children[0]:null}findLastItem(){let e=q(this.listViewChild?.nativeElement,'[data-pc-section="menuitem"]');return e?e[e.length-1].children[0]:null}setFocusToMenuitem(e,t){e.tabIndex="-1",t.tabIndex="0",t.focus()}isClickableRouterLink(e){return e.routerLink&&!this.readonly&&!e.disabled}isItemDisabled(e,t){return e.disabled||this.readonly&&!this.isActive(e,t)}isActive(e,t){if(e.routerLink){let n=Array.isArray(e.routerLink)?e.routerLink:[e.routerLink];return this.router.isActive(this.router.createUrlTree(n,{relativeTo:this.route}).toString(),!1)}return t===this.activeIndex}getItemTabIndex(e,t){return e.disabled?"-1":!e.disabled&&this.activeIndex===t?e.tabindex||"0":e.tabindex??"-1"}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe(),super.ngOnDestroy()}static \u0275fac=(()=>{let e;return function(n){return(e||(e=M(i)))(n||i)}})();static \u0275cmp=C({type:i,selectors:[["p-steps"]],viewQuery:function(t,n){if(t&1&&Z(Te,5),t&2){let r;G(r=J())&&(n.listViewChild=r.first)}},inputs:{activeIndex:[2,"activeIndex","activeIndex",ae],model:"model",readonly:[2,"readonly","readonly",A],style:"style",styleClass:"styleClass",exact:[2,"exact","exact",A]},outputs:{activeIndexChange:"activeIndexChange"},features:[te([Ie]),B],decls:5,vars:7,consts:[["list",""],["menuitem",""],["elseBlock",""],["htmlLabel",""],["htmlRouteLabel",""],[3,"ngStyle"],["pTooltip","",3,"class","ngStyle","tooltipOptions"],["pTooltip","",3,"class","ngStyle","tooltipOptions",4,"ngIf"],["pTooltip","",3,"ngStyle","tooltipOptions"],["role","link",3,"routerLink","queryParams","routerLinkActiveOptions","class","target","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state","click","keydown",4,"ngIf","ngIfElse"],["role","link",3,"click","keydown","routerLink","queryParams","routerLinkActiveOptions","target","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state"],[3,"class",4,"ngIf","ngIfElse"],[3,"innerHTML"],["role","link",3,"click","keydown","target"]],template:function(t,n){t&1&&(p(0,"nav",5)(1,"ul",null,0),W(3,Oe,1,1,"li",6,Ee),l()()),t&2&&(u(n.cn(n.cx("root"),n.styleClass)),c("ngStyle",n.style),g("data-pc-name","steps"),m(),u(n.cx("list")),g("data-pc-section","menu"),m(2),Q(n.model))},dependencies:[D,se,le,ue,de,ve,he,T],encapsulation:2,changeDetection:0})}return i})(),Ce=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=j({type:i});static \u0275inj=O({imports:[V,T,T]})}return i})();function je(i,o){if(i&1&&(p(0,"div",11)(1,"h3",14),d(2," Collected Data Preview "),l(),p(3,"pre",15),d(4),re(5,"json"),l()()),i&2){let e=s();m(4),x(oe(5,1,e.formData()))}}var we=class i{currentStep=I(0);formData=I({});loading=I(!1);steps=[{label:"Personal Information",fields:[{key:"firstName",type:"text",label:"First Name",required:!0,placeholder:"Enter your first name"},{key:"lastName",type:"text",label:"Last Name",required:!0,placeholder:"Enter your last name"},{key:"email",type:"email",label:"Email",required:!0,placeholder:"Enter your email"},{key:"phone",type:"text",label:"Phone Number",placeholder:"Enter your phone number"}]},{label:"Address Information",fields:[{key:"street",type:"text",label:"Street Address",required:!0,placeholder:"Enter street address"},{key:"city",type:"text",label:"City",required:!0,placeholder:"Enter city"},{key:"state",type:"text",label:"State/Province",required:!0,placeholder:"Enter state or province"},{key:"zipCode",type:"text",label:"ZIP/Postal Code",required:!0,placeholder:"Enter ZIP or postal code"},{key:"country",type:"select",label:"Country",required:!0,options:[{label:"United States",value:"US"},{label:"Canada",value:"CA"},{label:"United Kingdom",value:"UK"},{label:"Germany",value:"DE"},{label:"France",value:"FR"}]}]},{label:"Additional Details",fields:[{key:"bio",type:"textarea",label:"Biography",placeholder:"Tell us about yourself",rows:4},{key:"newsletter",type:"checkbox",label:"Subscribe to Newsletter",placeholder:"I want to receive newsletter updates"},{key:"terms",type:"checkbox",label:"Terms and Conditions",required:!0,placeholder:"I agree to the terms and conditions"}]}];stepItems=k(()=>this.steps.map((o,e)=>({label:o.label,command:()=>{e<=this.currentStep()&&this.currentStep.set(e)}})));get activeIndex(){return this.currentStep()}set activeIndex(o){this.currentStep.set(o)}currentFormConfig=k(()=>({fields:this.steps[this.currentStep()].fields,submitLabel:this.isLastStep()?"Submit":"Next",showCancel:this.currentStep()>0,cancelLabel:"Previous"}));isLastStep=k(()=>this.currentStep()===this.steps.length-1);isFirstStep=k(()=>this.currentStep()===0);onStepSubmit(o){let e=o;this.formData.update(t=>L(L({},t),e)),this.isLastStep()?(console.log("Final form data:",this.formData()),alert("Form submitted successfully!"),this.resetForm()):this.currentStep.update(t=>t+1)}onStepCancel(){this.isFirstStep()||this.currentStep.update(o=>o-1)}goToStep(o){o>=0&&o<this.steps.length&&this.currentStep.set(o)}resetForm(){this.currentStep.set(0),this.formData.set({})}isStepComplete(o){return o<this.currentStep()}hasFormData(){let o=this.formData();return Object.keys(o).length>0}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=C({type:i,selectors:[["app-multi-step-form-demo"]],decls:29,vars:10,consts:[[1,"space-y-6"],[1,"space-y-4"],[1,"text-2xl","sm:text-3xl","font-bold","text-gray-900","dark:text-gray-100"],[1,"text-gray-600","dark:text-gray-400"],[1,"w-full"],[3,"activeIndexChange","model","activeIndex","readonly"],[1,"border-t","border-gray-200","dark:border-gray-700","pt-6"],[1,"mb-4"],[1,"text-xl","font-semibold","text-gray-900","dark:text-gray-100"],[1,"text-sm","text-gray-500","dark:text-gray-400","mt-1"],[3,"formSubmit","formCancel","config","loading"],[1,"mt-6","p-4","bg-gray-50","dark:bg-gray-800/50","rounded-lg","border","border-gray-200","dark:border-gray-700"],[1,"text-lg","font-semibold","mb-2","text-gray-900","dark:text-gray-100"],[1,"bg-gray-900","text-gray-100","p-4","rounded-lg","overflow-x-auto","text-sm"],[1,"text-sm","font-semibold","text-gray-900","dark:text-gray-100","mb-2"],[1,"text-xs","text-gray-600","dark:text-gray-400","overflow-x-auto"]],template:function(e,t){e&1&&(p(0,"div",0)(1,"p-card")(2,"div",1)(3,"h1",2),d(4," Multi-Step Form Demo "),l(),p(5,"p",3),d(6," A wizard-style multi-step form built with the dynamic form component. Demonstrates step-by-step form completion with progress tracking and data persistence across steps. "),l()()(),p(7,"p-card")(8,"div",0)(9,"div",4)(10,"p-steps",5),ee("activeIndexChange",function(r){return Y(t.activeIndex,r)||(t.activeIndex=r),r}),l()(),p(11,"div",6)(12,"div",7)(13,"h2",8),d(14),l(),p(15,"p",9),d(16),l()(),p(17,"app-dynamic-form",10),v("formSubmit",function(r){return t.onStepSubmit(r)})("formCancel",function(){return t.onStepCancel()}),l()(),U(18,je,6,3,"div",11),l()(),p(19,"p-card")(20,"div",0)(21,"h2",8),d(22," Code Examples "),l(),p(23,"div")(24,"h3",12),d(25," Multi-Step Form Implementation "),l(),p(26,"pre",13)(27,"code"),d(28,`// Define steps
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
}`),l()()()()()()),e&2&&(m(10),c("model",t.stepItems()),X("activeIndex",t.activeIndex),c("readonly",!1),m(4),$(" Step ",t.currentStep()+1,": ",t.steps[t.currentStep()].label," "),m(2),$(" ",t.currentStep()+1," of ",t.steps.length," "),m(),c("config",t.currentFormConfig())("loading",t.loading),m(),K(t.hasFormData()?18:-1))},dependencies:[D,ye,_e,ge,Ce,V,ke,pe],encapsulation:2,changeDetection:0})};export{we as MultiStepFormDemoComponent};
