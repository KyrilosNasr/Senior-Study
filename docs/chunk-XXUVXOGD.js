import{a as w,b as T}from"./chunk-NHPJG2FY.js";import{a as _}from"./chunk-SLAVUPA2.js";import{a as S,b as D}from"./chunk-MV4IHHYR.js";import"./chunk-3DC6BNIH.js";import{d as v,e as M}from"./chunk-JXT2X624.js";import"./chunk-FCYNDV26.js";import"./chunk-WEH2CWNU.js";import"./chunk-NGL2KP4B.js";import{a as g,b}from"./chunk-DTTSOEG2.js";import"./chunk-QVFIZX54.js";import"./chunk-4O3FVBGX.js";import"./chunk-CX3Q4OJ4.js";import{r as C}from"./chunk-M52WRTAU.js";import"./chunk-FPPZ4BUR.js";import{Db as f,Eb as h,Jb as r,Kb as i,Lb as t,Mb as s,Xb as l,Za as m,Zb as y,ha as p,lc as d,nb as u}from"./chunk-3ITXA53T.js";import"./chunk-6HR7AMTL.js";function E(a,e){if(a&1&&s(0,"app-result-display",10),a&2){let o=y();r("result",o.lastResult)}}var k=class a{modalService=p(S);lastResult="";showInfoModal(){this.modalService.info("Information","This is an informational message. Click OK to close.").then(e=>{this.lastResult=`Info modal closed with action: ${e.action||"cancelled"}`})}showConfirmModal(){this.modalService.confirm("Confirm Action","Are you sure you want to proceed with this action? This cannot be undone.","Yes, Proceed","Cancel").then(e=>{e.action==="confirm"?this.lastResult="Action confirmed!":this.lastResult="Action cancelled."})}showCustomModal(){let e={title:"Custom Modal",message:"This is a custom modal with multiple actions.",type:"custom",width:"600px",actions:[{label:"Cancel",severity:"secondary",handler:()=>{this.modalService.close({cancelled:!0})}},{label:"Save Draft",severity:"info",handler:()=>{this.modalService.closeWithAction("save-draft"),this.lastResult="Draft saved!"}},{label:"Submit",severity:"primary",handler:()=>{this.modalService.closeWithAction("submit"),this.lastResult="Form submitted!"}}]};this.modalService.open(e).then(o=>{o.action&&(this.lastResult=`Modal closed with action: ${o.action}`)})}showLoadingModal(){let e={title:"Processing",message:"Please wait while we process your request...",type:"info",actions:[{label:"Processing...",severity:"primary",loading:!0,disabled:!0,handler:()=>{setTimeout(()=>{this.modalService.closeWithAction("completed"),this.lastResult="Processing completed!"},2e3)}}]};this.modalService.open(e),setTimeout(()=>{let o=e.actions;o&&o[0]&&o[0].handler()},100)}showFullScreenModal(){let e={title:"Full Screen Modal",message:"This modal is full screen on mobile devices and centered on desktop.",type:"custom",fullScreen:!0,actions:[{label:"Close",severity:"secondary",handler:()=>{this.modalService.close()}}]};this.modalService.open(e).then(()=>{this.lastResult="Full screen modal closed."})}serviceExampleCode=`// Inject service
private modalService = inject(DynamicModalService);

// Show info modal
this.modalService.info('Title', 'Message')
  .then(result => {
    console.log(result);
  });

// Show confirmation
this.modalService.confirm('Title', 'Message')
  .then(result => {
    if (result.action === 'confirm') {
      // User confirmed
    }
  });

// Custom modal
const config: DynamicModalConfig = {
  title: 'Custom Modal',
  message: 'Custom content',
  actions: [
    { label: 'Cancel', severity: 'secondary', handler: () => modalService.close() },
    { label: 'Save', severity: 'primary', handler: () => modalService.closeWithAction('save') }
  ]
};
this.modalService.open(config);`;componentExampleCode=`<app-dynamic-modal></app-dynamic-modal>

// Component automatically connects to service
// Use service methods to open modals`;static \u0275fac=function(o){return new(o||a)};static \u0275cmp=u({type:a,selectors:[["app-dynamic-modal-demo"]],decls:20,vars:3,consts:[[1,"space-y-6"],["title","Dynamic Modal Component","description","A flexible modal component built with PrimeNG Dialog. Supports dynamic content, custom actions, loading states, and responsive design. Can be used programmatically via service or declaratively."],[1,"space-y-4"],[1,"text-xl","font-semibold","text-gray-900","dark:text-gray-100"],[1,"grid","grid-cols-1","sm:grid-cols-2","lg:grid-cols-3","gap-4"],["label","Info Modal","icon","pi pi-info-circle",1,"w-full",3,"onClick"],["label","Confirm Modal","icon","pi pi-question-circle","severity","warn",1,"w-full",3,"onClick"],["label","Custom Modal","icon","pi pi-cog","severity","secondary",1,"w-full",3,"onClick"],["label","Loading Modal","icon","pi pi-spin pi-spinner","severity","info",1,"w-full",3,"onClick"],["label","Full Screen Modal","icon","pi pi-window-maximize","severity","success",1,"w-full",3,"onClick"],["label","Last Result",3,"result"],["title","Using Modal Service",3,"code"],["title","Using Component Directly",3,"code"]],template:function(o,n){o&1&&(i(0,"div",0),s(1,"app-demo-header",1),i(2,"p-card")(3,"div",2)(4,"h2",3),d(5," Modal Examples "),t(),i(6,"div",4)(7,"p-button",5),l("onClick",function(){return n.showInfoModal()}),t(),i(8,"p-button",6),l("onClick",function(){return n.showConfirmModal()}),t(),i(9,"p-button",7),l("onClick",function(){return n.showCustomModal()}),t(),i(10,"p-button",8),l("onClick",function(){return n.showLoadingModal()}),t(),i(11,"p-button",9),l("onClick",function(){return n.showFullScreenModal()}),t()(),f(12,E,1,1,"app-result-display",10),t()(),i(13,"p-card")(14,"div",0)(15,"h2",3),d(16," Code Examples "),t(),s(17,"app-code-example",11)(18,"app-code-example",12),t()(),s(19,"app-dynamic-modal"),t()),o&2&&(m(12),h(n.lastResult?12:-1),m(5),r("code",n.serviceExampleCode),m(),r("code",n.componentExampleCode))},dependencies:[C,b,g,M,v,D,_,w,T],encapsulation:2,changeDetection:0})};export{k as DynamicModalDemoComponent};
