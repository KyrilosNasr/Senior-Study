import{b as D,e as P,i as O,s as $,v as z,w as N}from"./chunk-DEDY34HR.js";import{d as I,e as M}from"./chunk-JXT2X624.js";import"./chunk-FCYNDV26.js";import"./chunk-WEH2CWNU.js";import"./chunk-NGL2KP4B.js";import{a as R,b as U,c as W,d as L,e as F}from"./chunk-QULNL4D5.js";import"./chunk-4DGHZC6K.js";import{a as B,b as A}from"./chunk-DTTSOEG2.js";import"./chunk-7XHGMHQI.js";import"./chunk-CX3Q4OJ4.js";import{r as T}from"./chunk-M52WRTAU.js";import"./chunk-FPPZ4BUR.js";import{Db as w,Eb as C,Fb as E,Hb as j,Ib as _,Jb as V,Kb as t,Lb as e,Mb as s,Xb as u,Za as r,Zb as k,i as v,j as x,k as f,lc as i,mc as p,nb as y,nc as b,pc as g,qc as h,rc as S,va as c}from"./chunk-3ITXA53T.js";import"./chunk-6HR7AMTL.js";function K(o,a){if(o&1&&(t(0,"li"),i(1),e()),o&2){let l=a.$implicit;r(),p(l)}}function q(o,a){if(o&1&&(t(0,"div",46)(1,"p")(2,"strong"),i(3,"Initialized:"),e(),i(4),e()()),o&2){let l=k();r(4),b(" ",l.initValue())}}var J=class o{state$=new v("Initial State");state=this.state$.asObservable();currentState=c("Initial State");cache$=new x(3);cache=this.cache$.asObservable();cachedValues=c([]);init$=new f;init=this.init$.asObservable();initialized=c(!1);initValue=c("");newStateValue=c("");newCacheValue=c("");violationCode=`
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
`;updateState(){this.newStateValue().trim()&&(this.state$.next(this.newStateValue()),this.currentState.set(this.newStateValue()),this.newStateValue.set(""))}addToCache(){this.newCacheValue().trim()&&(this.cache$.next(this.newCacheValue()),this.cachedValues.update(a=>[...a,this.newCacheValue()]),this.newCacheValue.set(""))}initialize(){this.init$.next("Initialization Complete"),this.init$.complete(),this.initialized.set(!0)}ngOnInit(){this.state.subscribe(a=>{this.currentState.set(a)}),this.cache.subscribe(a=>{this.cachedValues.update(l=>[...l,a])}),this.init.subscribe(a=>{this.initValue.set(a)})}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=y({type:o,selectors:[["app-subject-patterns-demo"]],decls:124,vars:7,consts:[[1,"container-responsive","space-y-responsive"],[1,"card-modern","padding-responsive","hover-lift","slide-in-up"],[1,"flex","flex-col","lg:flex-row","lg:items-center","lg:justify-between","gap-6"],[1,"flex-1"],[1,"flex","items-center","gap-3","mb-4"],[1,"w-12","h-12","sm:w-14","sm:h-14","rounded-xl","bg-gradient-to-br","from-purple-500","to-pink-600","flex","items-center","justify-center","shadow-lg"],[1,"fas","fa-broadcast-tower","text-white","text-xl","sm:text-2xl"],[1,"badge-modern","text-xs","sm:text-sm"],[1,"heading-responsive","text-gradient","mb-4"],[1,"text-responsive","text-gray-700","dark:text-gray-300"],[1,"hidden","lg:block"],[1,"w-32","h-32","rounded-2xl","bg-gradient-to-br","from-purple-500/20","to-pink-600/20","flex","items-center","justify-center"],[1,"fas","fa-broadcast-tower","text-6xl","text-purple-500"],[1,"card-modern","hover-lift","slide-in-up"],[1,"padding-responsive","space-y-6"],[1,"w-10","h-10","rounded-lg","bg-gradient-to-br","from-blue-500","to-purple-600","flex","items-center","justify-center"],[1,"fas","fa-lightbulb","text-white"],[1,"subheading-responsive","text-gray-900","dark:text-gray-100"],[1,"text-responsive","text-gray-700","dark:text-gray-300","leading-relaxed"],[1,"glass","rounded-xl","p-6","border-l-4","border-accent"],[1,"fas","fa-star","text-accent","text-xl"],[1,"text-lg","sm:text-xl","font-semibold","text-gray-900","dark:text-gray-100"],[1,"list-modern"],[1,"text-sm","sm:text-base","text-gray-800","dark:text-gray-200"],[1,"padding-responsive"],[1,"flex","items-center","gap-3","mb-6"],[1,"w-10","h-10","rounded-lg","bg-gradient-to-br","from-green-500","to-teal-600","flex","items-center","justify-center"],[1,"fas","fa-code","text-white"],["value","0"],[1,"flex","flex-wrap","gap-2","mb-6"],["value","0",1,"flex","items-center","gap-2"],[1,"fas","fa-times-circle","text-red-500"],[1,"text-sm","sm:text-base","font-semibold"],["value","1",1,"flex","items-center","gap-2"],[1,"fas","fa-check-circle","text-green-500"],[1,"code-block-modern"],[1,"overflow-x-auto","text-sm","sm:text-base"],["value","1"],[1,"w-10","h-10","rounded-lg","bg-gradient-to-br","from-purple-500","to-pink-600","flex","items-center","justify-center"],[1,"fas","fa-play-circle","text-white"],[1,"space-y-8"],[1,"border-2","border-gray-200","dark:border-gray-700","rounded-lg","p-5"],[1,"text-lg","font-semibold","text-gray-800","dark:text-gray-200","mb-4"],[1,"mb-4"],["pInputText","","type","text","placeholder","Enter new state",1,"w-full","mb-2",3,"ngModelChange","ngModel"],["label","Update State","icon","pi pi-check",3,"click"],[1,"bg-gray-100","dark:bg-gray-700","p-5","rounded"],["pInputText","","type","text","placeholder","Enter cache value",1,"w-full","mb-2",3,"ngModelChange","ngModel"],["label","Add to Cache","icon","pi pi-plus",3,"click"],[1,"font-semibold","mb-2"],[1,"list-disc","list-inside"],["label","Initialize","icon","pi pi-play",1,"mb-4",3,"click","disabled"],[1,"w-10","h-10","rounded-lg","bg-gradient-to-br","from-teal-500","to-cyan-600","flex","items-center","justify-center"],[1,"fas","fa-graduation-cap","text-white"]],template:function(l,n){l&1&&(t(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5),s(6,"i",6),e(),t(7,"div")(8,"span",7),i(9,"RxJS Patterns"),e()()(),t(10,"h1",8),i(11," Subject Patterns "),e(),t(12,"p",9),i(13," Using BehaviorSubject, ReplaySubject, and AsyncSubject for state management and caching. "),e()(),t(14,"div",10)(15,"div",11),s(16,"i",12),e()()()(),t(17,"p-card",13)(18,"div",14)(19,"div",4)(20,"div",15),s(21,"i",16),e(),t(22,"h2",17),i(23,"What are Subject Types?"),e()(),t(24,"p",18),i(25," Subjects are special observables that can both emit values and be subscribed to. Different types serve different purposes. "),e(),t(26,"div",19)(27,"div",4),s(28,"i",20),t(29,"h3",21),i(30,"Subject Types"),e()(),t(31,"ul",22)(32,"li",23)(33,"strong"),i(34,"BehaviorSubject:"),e(),i(35," Emits current value to new subscribers "),e(),t(36,"li",23)(37,"strong"),i(38,"ReplaySubject:"),e(),i(39," Replays last N values to new subscribers "),e(),t(40,"li",23)(41,"strong"),i(42,"AsyncSubject:"),e(),i(43," Emits only last value when completed "),e()()()()(),t(44,"p-card",13)(45,"div",24)(46,"div",25)(47,"div",26),s(48,"i",27),e(),t(49,"h2",17),i(50,"Code Examples"),e()(),t(51,"p-tabs",28)(52,"p-tablist",29)(53,"p-tab",30),s(54,"i",31),t(55,"span",32),i(56,"Violation"),e()(),t(57,"p-tab",33),s(58,"i",34),t(59,"span",32),i(60,"Solution"),e()()(),t(61,"p-tabpanels")(62,"p-tabpanel",28)(63,"div",35)(64,"pre",36)(65,"code"),i(66),e()()()(),t(67,"p-tabpanel",37)(68,"div",35)(69,"pre",36)(70,"code"),i(71),e()()()()()()()(),t(72,"p-card",13)(73,"div",24)(74,"div",4)(75,"div",38),s(76,"i",39),e(),t(77,"h2",17),i(78,"Interactive Demo"),e()(),t(79,"div",40)(80,"div",41)(81,"h3",42),i(82,"BehaviorSubject (State)"),e(),t(83,"div",43)(84,"input",44),S("ngModelChange",function(d){return h(n.newStateValue,d)||(n.newStateValue=d),d}),e(),t(85,"p-button",45),u("click",function(){return n.updateState()}),e()(),t(86,"div",46)(87,"p")(88,"strong"),i(89,"Current State:"),e(),i(90),e()()(),t(91,"div",41)(92,"h3",42),i(93,"ReplaySubject (Cache)"),e(),t(94,"div",43)(95,"input",47),S("ngModelChange",function(d){return h(n.newCacheValue,d)||(n.newCacheValue=d),d}),e(),t(96,"p-button",48),u("click",function(){return n.addToCache()}),e()(),t(97,"div",46)(98,"p",49),i(99,"Cached Values (last 3):"),e(),t(100,"ul",50),j(101,K,2,1,"li",null,E),e()()(),t(103,"div",41)(104,"h3",42),i(105,"AsyncSubject (Initialization)"),e(),t(106,"p-button",51),u("click",function(){return n.initialize()}),e(),w(107,q,5,1,"div",46),e()()()(),t(108,"p-card",13)(109,"div",24)(110,"div",25)(111,"div",52),s(112,"i",53),e(),t(113,"h2",17),i(114,"Key Takeaways"),e()(),t(115,"ul",22)(116,"li",23),i(117," Use BehaviorSubject for current state that new subscribers need "),e(),t(118,"li",23),i(119," Use ReplaySubject to cache and replay recent values "),e(),t(120,"li",23),i(121," Use AsyncSubject for one-time async operations "),e(),t(122,"li",23),i(123," Expose observables, not subjects, to prevent external mutation "),e()()()()()),l&2&&(r(66),p(n.violationCode),r(5),p(n.solutionCode),r(13),g("ngModel",n.newStateValue),r(6),b(" ",n.currentState()),r(5),g("ngModel",n.newCacheValue),r(6),_(n.cachedValues().slice(-3)),r(5),V("disabled",n.initialized()),r(),C(n.initialized()?107:-1))},dependencies:[T,A,B,F,U,R,W,L,M,I,N,z,$,D,P,O],styles:["[_nghost-%COMP%]{display:block;width:100%}"]})};export{J as SubjectPatternsDemoComponent};
