import{b as I,e as D,i as P,p as O,s as L,t as W}from"./chunk-A7WYH36G.js";import{a as $,b as z,c as N,d as B,e as A,f as R,g as U}from"./chunk-6IHYB2AV.js";import{p as T,q as M}from"./chunk-H3I524XT.js";import{p as k}from"./chunk-EFMPFDS6.js";import"./chunk-4IVXAVEU.js";import{Ab as t,Bb as e,Nb as m,Ob as V,Sa as l,ac as i,bc as u,cc as p,ec as b,fc as S,gb as y,gc as h,i as g,j as v,k as x,pa as d,tb as f,ub as C,vb as w,xb as E,yb as j,zb as _}from"./chunk-ANFRTOHF.js";import"./chunk-6HR7AMTL.js";function K(s,a){if(s&1&&(t(0,"li"),i(1),e()),s&2){let r=a.$implicit;l(),u(r)}}function q(s,a){if(s&1&&(t(0,"div",21)(1,"p")(2,"strong"),i(3,"Initialized:"),e(),i(4),e()()),s&2){let r=V();l(4),p(" ",r.initValue())}}var F=class s{state$=new g("Initial State");state=this.state$.asObservable();currentState=d("Initial State");cache$=new v(3);cache=this.cache$.asObservable();cachedValues=d([]);init$=new x;init=this.init$.asObservable();initialized=d(!1);initValue=d("");newStateValue=d("");newCacheValue=d("");violationCode=`
// \u274C VIOLATION: Using Observable.create everywhere
// No state management, no caching, no initialization control

class StateService {
  private state = 'initial';
  
  getState(): Observable<string> {
    return Observable.create(observer => {
      observer.next(this.state);
    });
  }
  
  setState(newState: string) {
    this.state = newState;
    // Subscribers don't get notified!
  }
}
`;solutionCode=`
// \u2705 SOLUTION: Subject Patterns
// Proper state management with different Subject types

// BehaviorSubject: Current state
class StateService {
  private state$ = new BehaviorSubject<string>('initial');
  readonly state = this.state$.asObservable();
  
  setState(newState: string) {
    this.state$.next(newState);
  }
}

// ReplaySubject: Cache last N values
class CacheService {
  private cache$ = new ReplaySubject<string>(5);
  readonly cache = this.cache$.asObservable();
  
  addToCache(value: string) {
    this.cache$.next(value);
  }
}

// AsyncSubject: One-time initialization
class InitService {
  private init$ = new AsyncSubject<void>();
  readonly init = this.init$.asObservable();
  
  initialize() {
    // Perform initialization
    this.init$.next();
    this.init$.complete();
  }
}
`;updateState(){this.newStateValue().trim()&&(this.state$.next(this.newStateValue()),this.currentState.set(this.newStateValue()),this.newStateValue.set(""))}addToCache(){this.newCacheValue().trim()&&(this.cache$.next(this.newCacheValue()),this.cachedValues.update(a=>[...a,this.newCacheValue()]),this.newCacheValue.set(""))}initialize(){this.init$.next("Initialization Complete"),this.init$.complete(),this.initialized.set(!0)}ngOnInit(){this.state.subscribe(a=>{this.currentState.set(a)}),this.cache.subscribe(a=>{this.cachedValues.update(r=>[...r,a])}),this.init.subscribe(a=>{this.initValue.set(a)})}static \u0275fac=function(r){return new(r||s)};static \u0275cmp=y({type:s,selectors:[["app-subject-patterns-demo"]],decls:100,vars:7,consts:[[1,"max-w-7xl","mx-auto","space-y-6"],[1,"bg-white","dark:bg-gray-800","rounded-lg","shadow-md","p-6"],[1,"text-3xl","font-bold","text-gray-800","dark:text-gray-200","mb-2"],[1,"text-gray-600","dark:text-gray-400"],[1,"shadow-md"],[1,"space-y-4"],[1,"text-2xl","font-semibold","text-gray-800","dark:text-gray-200"],[1,"text-gray-700","dark:text-gray-300"],[1,"bg-blue-50","dark:bg-blue-900/20","p-4","rounded-lg"],[1,"font-semibold","text-blue-900","dark:text-blue-200","mb-2"],[1,"list-disc","list-inside","space-y-1","text-blue-800","dark:text-blue-300"],["value","0"],["value","1"],[1,"bg-gray-900","text-gray-100","p-4","rounded-lg","overflow-x-auto","text-sm"],[1,"text-2xl","font-semibold","text-gray-800","dark:text-gray-200","mb-4"],[1,"space-y-6"],[1,"border-2","border-gray-200","dark:border-gray-700","rounded-lg","p-4"],[1,"text-lg","font-semibold","text-gray-800","dark:text-gray-200","mb-4"],[1,"mb-4"],["pInputText","","type","text","placeholder","Enter new state",1,"w-full","mb-2",3,"ngModelChange","ngModel"],["label","Update State","icon","pi pi-check",3,"click"],[1,"bg-gray-100","dark:bg-gray-700","p-4","rounded"],["pInputText","","type","text","placeholder","Enter cache value",1,"w-full","mb-2",3,"ngModelChange","ngModel"],["label","Add to Cache","icon","pi pi-plus",3,"click"],[1,"font-semibold","mb-2"],[1,"list-disc","list-inside"],["label","Initialize","icon","pi pi-play",1,"mb-4",3,"click","disabled"],[1,"space-y-2","text-gray-700","dark:text-gray-300"],[1,"flex","items-start"],[1,"text-green-500","mr-2"]],template:function(r,n){r&1&&(t(0,"div",0)(1,"div",1)(2,"h1",2),i(3,"Subject Patterns"),e(),t(4,"p",3),i(5," Using BehaviorSubject, ReplaySubject, and AsyncSubject for state management and caching. "),e()(),t(6,"p-card",4)(7,"div",5)(8,"h2",6),i(9,"Subject Types"),e(),t(10,"p",7),i(11," Subjects are special observables that can both emit values and be subscribed to. Different types serve different purposes. "),e(),t(12,"div",8)(13,"h3",9),i(14,"Subject Types:"),e(),t(15,"ul",10)(16,"li")(17,"strong"),i(18,"BehaviorSubject:"),e(),i(19," Emits current value to new subscribers"),e(),t(20,"li")(21,"strong"),i(22,"ReplaySubject:"),e(),i(23," Replays last N values to new subscribers"),e(),t(24,"li")(25,"strong"),i(26,"AsyncSubject:"),e(),i(27," Emits only last value when completed"),e()()()()(),t(28,"p-card",4)(29,"p-tabs",11)(30,"p-tablist")(31,"p-tab",11),i(32,"\u274C Violation"),e(),t(33,"p-tab",12),i(34,"\u2705 Solution"),e()(),t(35,"p-tabpanels")(36,"p-tabpanel",11)(37,"pre",13)(38,"code"),i(39),e()()(),t(40,"p-tabpanel",12)(41,"pre",13)(42,"code"),i(43),e()()()()()(),t(44,"p-card",4)(45,"h2",14),i(46,"Live Demo"),e(),t(47,"div",15)(48,"div",16)(49,"h3",17),i(50,"BehaviorSubject (State)"),e(),t(51,"div",18)(52,"input",19),h("ngModelChange",function(o){return S(n.newStateValue,o)||(n.newStateValue=o),o}),e(),t(53,"p-button",20),m("click",function(){return n.updateState()}),e()(),t(54,"div",21)(55,"p")(56,"strong"),i(57,"Current State:"),e(),i(58),e()()(),t(59,"div",16)(60,"h3",17),i(61,"ReplaySubject (Cache)"),e(),t(62,"div",18)(63,"input",22),h("ngModelChange",function(o){return S(n.newCacheValue,o)||(n.newCacheValue=o),o}),e(),t(64,"p-button",23),m("click",function(){return n.addToCache()}),e()(),t(65,"div",21)(66,"p",24),i(67,"Cached Values (last 3):"),e(),t(68,"ul",25),E(69,K,2,1,"li",null,w),e()()(),t(71,"div",16)(72,"h3",17),i(73,"AsyncSubject (Initialization)"),e(),t(74,"p-button",26),m("click",function(){return n.initialize()}),e(),f(75,q,5,1,"div",21),e()()(),t(76,"p-card",4)(77,"h2",14),i(78,"Key Takeaways"),e(),t(79,"ul",27)(80,"li",28)(81,"span",29),i(82,"\u2713"),e(),t(83,"span"),i(84,"Use BehaviorSubject for current state that new subscribers need"),e()(),t(85,"li",28)(86,"span",29),i(87,"\u2713"),e(),t(88,"span"),i(89,"Use ReplaySubject to cache and replay recent values"),e()(),t(90,"li",28)(91,"span",29),i(92,"\u2713"),e(),t(93,"span"),i(94,"Use AsyncSubject for one-time async operations"),e()(),t(95,"li",28)(96,"span",29),i(97,"\u2713"),e(),t(98,"span"),i(99,"Expose observables, not subjects, to prevent external mutation"),e()()()()()),r&2&&(l(39),u(n.violationCode),l(4),u(n.solutionCode),l(9),b("ngModel",n.newStateValue),l(6),p(" ",n.currentState()),l(5),b("ngModel",n.newCacheValue),l(6),j(n.cachedValues().slice(-3)),l(5),_("disabled",n.initialized()),l(),C(n.initialized()?75:-1))},dependencies:[k,z,$,U,B,N,A,R,M,T,W,L,O,I,D,P],styles:["[_nghost-%COMP%]{display:block;width:100%}"]})};export{F as SubjectPatternsDemoComponent};
