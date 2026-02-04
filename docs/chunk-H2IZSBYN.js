import{a as z,b as B}from"./chunk-QB6ZO67J.js";import{b as D,e as O,i as $,s as N}from"./chunk-RMJAI7RZ.js";import{d as M,e as P}from"./chunk-26I6QKGV.js";import"./chunk-DS4DKGB5.js";import"./chunk-YPUDPSQH.js";import"./chunk-DEGWJE5E.js";import{a as U,b as W,c as L,d as F,e as G}from"./chunk-3ZW5MUH5.js";import"./chunk-SHEHAVXT.js";import{a as A,b as R}from"./chunk-ST7OVFPO.js";import"./chunk-QCJRPF2F.js";import"./chunk-IZU7C3FN.js";import{b as I}from"./chunk-JBIPGRVB.js";import{r as T}from"./chunk-BO564T5E.js";import"./chunk-FPPZ4BUR.js";import{Cb as w,Db as C,Eb as E,Gb as j,Hb as _,Ib as V,Jb as t,Kb as e,Lb as o,Wb as u,Yb as k,Za as l,i as v,j as x,k as f,kc as i,lc as p,mc as b,nb as y,pc as g,qc as S,rc as h,va as m}from"./chunk-6P3ZW5D6.js";import"./chunk-6HR7AMTL.js";function K(s,a){if(s&1&&(t(0,"li"),i(1),e()),s&2){let r=a.$implicit;l(),p(r)}}function X(s,a){if(s&1&&(t(0,"div",46)(1,"p")(2,"strong"),i(3,"Initialized:"),e(),i(4),e()()),s&2){let r=k();l(4),b(" ",r.initValue())}}var J=class s{state$=new v("Initial State");state=this.state$.asObservable();currentState=m("Initial State");cache$=new x(3);cache=this.cache$.asObservable();cachedValues=m([]);init$=new f;init=this.init$.asObservable();initialized=m(!1);initValue=m("");newStateValue=m("");newCacheValue=m("");violationCode=`
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
`;updateState(){this.newStateValue().trim()&&(this.state$.next(this.newStateValue()),this.currentState.set(this.newStateValue()),this.newStateValue.set(""))}addToCache(){this.newCacheValue().trim()&&(this.cache$.next(this.newCacheValue()),this.cachedValues.update(a=>[...a,this.newCacheValue()]),this.newCacheValue.set(""))}initialize(){this.init$.next("Initialization Complete"),this.init$.complete(),this.initialized.set(!0)}ngOnInit(){this.state.subscribe(a=>{this.currentState.set(a)}),this.cache.subscribe(a=>{this.cachedValues.update(r=>[...r,a])}),this.init.subscribe(a=>{this.initValue.set(a)})}static \u0275fac=function(r){return new(r||s)};static \u0275cmp=y({type:s,selectors:[["app-subject-patterns-demo"]],decls:124,vars:7,consts:[[1,"container-responsive","space-y-responsive"],[1,"card-modern","padding-responsive","hover-lift","slide-in-up"],[1,"flex","flex-col","lg:flex-row","lg:items-center","lg:justify-between","gap-6"],[1,"flex-1"],[1,"flex","items-center","gap-3","mb-4"],[1,"w-12","h-12","sm:w-14","sm:h-14","rounded-xl","bg-gradient-to-br","from-purple-500","to-pink-600","flex","items-center","justify-center","shadow-lg"],["name","faSolidTowerBroadcast",1,"text-white","text-xl","sm:text-2xl"],[1,"badge-modern","text-xs","sm:text-sm"],[1,"heading-responsive","text-gradient","mb-4"],[1,"text-responsive","text-gray-700","dark:text-gray-300"],[1,"hidden","lg:block"],[1,"w-32","h-32","rounded-2xl","bg-gradient-to-br","from-purple-500/20","to-pink-600/20","flex","items-center","justify-center"],["name","faSolidTowerBroadcast",1,"text-6xl","text-purple-500"],[1,"card-modern","hover-lift","slide-in-up"],[1,"padding-responsive","space-y-6"],[1,"w-10","h-10","rounded-lg","bg-gradient-to-br","from-blue-500","to-purple-600","flex","items-center","justify-center"],["name","faSolidLightbulb",1,"text-white"],[1,"subheading-responsive","text-gray-900","dark:text-gray-100"],[1,"text-responsive","text-gray-700","dark:text-gray-300","leading-relaxed"],[1,"glass","rounded-xl","p-6","border-l-4","border-accent"],["name","faSolidStar",1,"text-accent","text-xl"],[1,"text-lg","sm:text-xl","font-semibold","text-gray-900","dark:text-gray-100"],[1,"list-modern"],[1,"text-sm","sm:text-base","text-gray-800","dark:text-gray-200"],[1,"padding-responsive"],[1,"flex","items-center","gap-3","mb-6"],[1,"w-10","h-10","rounded-lg","bg-gradient-to-br","from-green-500","to-teal-600","flex","items-center","justify-center"],["name","faSolidCode",1,"text-white"],["value","0"],[1,"flex","flex-wrap","gap-2","mb-6"],["value","0",1,"flex","items-center","gap-2"],["name","faSolidCircleXmark",1,"text-red-500"],[1,"text-sm","sm:text-base","font-semibold"],["value","1",1,"flex","items-center","gap-2"],["name","faSolidCircleCheck",1,"text-green-500"],[1,"code-block-modern"],[1,"overflow-x-auto","text-sm","sm:text-base"],["value","1"],[1,"w-10","h-10","rounded-lg","bg-gradient-to-br","from-purple-500","to-pink-600","flex","items-center","justify-center"],["name","faSolidCirclePlay",1,"text-white"],[1,"space-y-8"],[1,"border-2","border-gray-200","dark:border-gray-700","rounded-lg","p-5"],[1,"text-lg","font-semibold","text-gray-800","dark:text-gray-200","mb-4"],[1,"mb-4"],["pInputText","","type","text","placeholder","Enter new state",1,"w-full","mb-2",3,"ngModelChange","ngModel"],["label","Update State","icon","faSolidCheck",3,"click"],[1,"bg-gray-100","dark:bg-gray-700","p-5","rounded"],["pInputText","","type","text","placeholder","Enter cache value",1,"w-full","mb-2",3,"ngModelChange","ngModel"],["label","Add to Cache","icon","faSolidPlus",3,"click"],[1,"font-semibold","mb-2"],[1,"list-disc","list-inside"],["label","Initialize","icon","faSolidPlay",1,"mb-4",3,"click","disabled"],[1,"w-10","h-10","rounded-lg","bg-gradient-to-br","from-teal-500","to-cyan-600","flex","items-center","justify-center"],["name","faSolidGraduationCap",1,"text-white"]],template:function(r,n){r&1&&(t(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5),o(6,"ng-icon",6),e(),t(7,"div")(8,"span",7),i(9,"RxJS Patterns"),e()()(),t(10,"h1",8),i(11," Subject Patterns "),e(),t(12,"p",9),i(13," Using BehaviorSubject, ReplaySubject, and AsyncSubject for state management and caching. "),e()(),t(14,"div",10)(15,"div",11),o(16,"ng-icon",12),e()()()(),t(17,"p-card",13)(18,"div",14)(19,"div",4)(20,"div",15),o(21,"ng-icon",16),e(),t(22,"h2",17),i(23,"What are Subject Types?"),e()(),t(24,"p",18),i(25," Subjects are special observables that can both emit values and be subscribed to. Different types serve different purposes. "),e(),t(26,"div",19)(27,"div",4),o(28,"ng-icon",20),t(29,"h3",21),i(30,"Subject Types"),e()(),t(31,"ul",22)(32,"li",23)(33,"strong"),i(34,"BehaviorSubject:"),e(),i(35," Emits current value to new subscribers "),e(),t(36,"li",23)(37,"strong"),i(38,"ReplaySubject:"),e(),i(39," Replays last N values to new subscribers "),e(),t(40,"li",23)(41,"strong"),i(42,"AsyncSubject:"),e(),i(43," Emits only last value when completed "),e()()()()(),t(44,"p-card",13)(45,"div",24)(46,"div",25)(47,"div",26),o(48,"ng-icon",27),e(),t(49,"h2",17),i(50,"Code Examples"),e()(),t(51,"p-tabs",28)(52,"p-tablist",29)(53,"p-tab",30),o(54,"ng-icon",31),t(55,"span",32),i(56,"Violation"),e()(),t(57,"p-tab",33),o(58,"ng-icon",34),t(59,"span",32),i(60,"Solution"),e()()(),t(61,"p-tabpanels")(62,"p-tabpanel",28)(63,"div",35)(64,"pre",36)(65,"code"),i(66),e()()()(),t(67,"p-tabpanel",37)(68,"div",35)(69,"pre",36)(70,"code"),i(71),e()()()()()()()(),t(72,"p-card",13)(73,"div",24)(74,"div",4)(75,"div",38),o(76,"ng-icon",39),e(),t(77,"h2",17),i(78,"Interactive Demo"),e()(),t(79,"div",40)(80,"div",41)(81,"h3",42),i(82,"BehaviorSubject (State)"),e(),t(83,"div",43)(84,"input",44),h("ngModelChange",function(d){return S(n.newStateValue,d)||(n.newStateValue=d),d}),e(),t(85,"p-button",45),u("click",function(){return n.updateState()}),e()(),t(86,"div",46)(87,"p")(88,"strong"),i(89,"Current State:"),e(),i(90),e()()(),t(91,"div",41)(92,"h3",42),i(93,"ReplaySubject (Cache)"),e(),t(94,"div",43)(95,"input",47),h("ngModelChange",function(d){return S(n.newCacheValue,d)||(n.newCacheValue=d),d}),e(),t(96,"p-button",48),u("click",function(){return n.addToCache()}),e()(),t(97,"div",46)(98,"p",49),i(99,"Cached Values (last 3):"),e(),t(100,"ul",50),j(101,K,2,1,"li",null,E),e()()(),t(103,"div",41)(104,"h3",42),i(105,"AsyncSubject (Initialization)"),e(),t(106,"p-button",51),u("click",function(){return n.initialize()}),e(),w(107,X,5,1,"div",46),e()()()(),t(108,"p-card",13)(109,"div",24)(110,"div",25)(111,"div",52),o(112,"ng-icon",53),e(),t(113,"h2",17),i(114,"Key Takeaways"),e()(),t(115,"ul",22)(116,"li",23),i(117," Use BehaviorSubject for current state that new subscribers need "),e(),t(118,"li",23),i(119," Use ReplaySubject to cache and replay recent values "),e(),t(120,"li",23),i(121," Use AsyncSubject for one-time async operations "),e(),t(122,"li",23),i(123," Expose observables, not subjects, to prevent external mutation "),e()()()()()),r&2&&(l(66),p(n.violationCode),l(5),p(n.solutionCode),l(13),g("ngModel",n.newStateValue),l(6),b(" ",n.currentState()),l(5),g("ngModel",n.newCacheValue),l(6),_(n.cachedValues().slice(-3)),l(5),V("disabled",n.initialized()),l(),C(n.initialized()?107:-1))},dependencies:[I,T,R,A,G,W,U,L,F,P,M,B,z,N,D,O,$],styles:["[_nghost-%COMP%]{display:block;width:100%}"]})};export{J as SubjectPatternsDemoComponent};
