import{a as P}from"./chunk-GZQUSTHA.js";import{a as M}from"./chunk-I2ZT4LK6.js";import{b as D}from"./chunk-PKLQWDLD.js";import{a as C,b as E,c as _,d as L,e as w}from"./chunk-3ZW5MUH5.js";import"./chunk-SHEHAVXT.js";import{a as k,b as h}from"./chunk-ST7OVFPO.js";import"./chunk-3N3GZBUB.js";import"./chunk-4O3FVBGX.js";import"./chunk-QCJRPF2F.js";import"./chunk-IZU7C3FN.js";import{b as S}from"./chunk-JBIPGRVB.js";import{r as y}from"./chunk-BO564T5E.js";import"./chunk-FPPZ4BUR.js";import{B as u,Ib as s,Jb as e,Kb as t,Lb as r,Wb as d,Za as a,g as f,ha as v,kc as n,lc as m,nb as g,ra as x,va as l}from"./chunk-6P3ZW5D6.js";import"./chunk-6HR7AMTL.js";var A=class b{destroyRef=v(x);destroy$=new f;leakyCount=l(0);safeCount=l(0);isLeakyActive=l(!1);isSafeActive=l(!1);leakySubscription;safeSubscription;violationCode=`
// \u274C VIOLATION: Memory Leak
// Subscription never unsubscribes

export class LeakyComponent implements OnInit {
  ngOnInit() {
    // This subscription never unsubscribes!
    interval(1000).subscribe(count => {
      this.count = count;
    });
  }
  
  // No ngOnDestroy - subscription continues after component destruction
}
`;solutionCode=`
// \u2705 SOLUTION: Proper Cleanup
// Multiple patterns for subscription cleanup

// Pattern 1: takeUntilDestroyed (Angular 17+)
export class SafeComponent implements OnInit {
  private destroyRef = inject(DestroyRef);
  
  ngOnInit() {
    interval(1000).pipe(
      takeUntilDestroyed(this.destroyRef)
    ).subscribe(count => {
      this.count = count;
    });
  }
}

// Pattern 2: takeUntil with Subject
export class SafeComponent2 implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  
  ngOnInit() {
    interval(1000).pipe(
      takeUntil(this.destroy$)
    ).subscribe(count => {
      this.count = count;
    });
  }
  
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
`;startLeaky(){this.isLeakyActive.set(!0),this.leakyCount.set(0),this.leakySubscription=u(1e3).subscribe(o=>{this.leakyCount.set(o)})}startSafe(){this.isSafeActive.set(!0),this.safeCount.set(0),this.safeSubscription=u(1e3).pipe(P(this.destroyRef)).subscribe(o=>{this.safeCount.set(o)})}stopLeaky(){this.leakySubscription&&(this.leakySubscription.unsubscribe(),this.leakySubscription=null),this.isLeakyActive.set(!1)}stopSafe(){this.safeSubscription&&(this.safeSubscription.unsubscribe(),this.safeSubscription=null),this.isSafeActive.set(!1)}static \u0275fac=function(p){return new(p||b)};static \u0275cmp=g({type:b,selectors:[["app-memory-leak-prevention-demo"]],decls:116,vars:8,consts:[[1,"container-responsive","space-y-responsive"],[1,"card-modern","padding-responsive","hover-lift","slide-in-up"],[1,"flex","flex-col","lg:flex-row","lg:items-center","lg:justify-between","gap-6"],[1,"flex-1"],[1,"flex","items-center","gap-3","mb-4"],[1,"w-12","h-12","sm:w-14","sm:h-14","rounded-xl","bg-gradient-to-br","from-purple-500","to-pink-600","flex","items-center","justify-center","shadow-lg"],["name","faSolidShieldHalved",1,"text-white","text-xl","sm:text-2xl"],[1,"badge-modern","text-xs","sm:text-sm"],[1,"heading-responsive","text-gradient","mb-4"],[1,"text-responsive","text-gray-700","dark:text-gray-300"],[1,"hidden","lg:block"],[1,"w-32","h-32","rounded-2xl","bg-gradient-to-br","from-purple-500/20","to-pink-600/20","flex","items-center","justify-center"],["name","faSolidShieldHalved",1,"text-6xl","text-purple-500"],[1,"card-modern","hover-lift","slide-in-up"],[1,"padding-responsive","space-y-6"],[1,"w-10","h-10","rounded-lg","bg-gradient-to-br","from-blue-500","to-purple-600","flex","items-center","justify-center"],["name","faSolidLightbulb",1,"text-white"],[1,"subheading-responsive","text-gray-900","dark:text-gray-100"],[1,"text-responsive","text-gray-700","dark:text-gray-300","leading-relaxed"],[1,"glass","rounded-xl","p-6","border-l-4","border-red-500"],["name","faSolidTriangleExclamation",1,"text-red-500","text-xl"],[1,"text-lg","sm:text-xl","font-semibold","text-gray-900","dark:text-gray-100"],[1,"list-modern"],[1,"text-sm","sm:text-base","text-gray-800","dark:text-gray-200"],[1,"padding-responsive"],[1,"flex","items-center","gap-3","mb-6"],[1,"w-10","h-10","rounded-lg","bg-gradient-to-br","from-green-500","to-teal-600","flex","items-center","justify-center"],["name","faSolidCode",1,"text-white"],["value","0"],[1,"flex","flex-wrap","gap-2","mb-6"],["value","0",1,"flex","items-center","gap-2"],["name","faSolidCircleXmark",1,"text-red-500"],[1,"text-sm","sm:text-base","font-semibold"],["value","1",1,"flex","items-center","gap-2"],["name","faSolidCircleCheck",1,"text-green-500"],[1,"code-block-modern"],[1,"overflow-x-auto","text-sm","sm:text-base"],["value","1"],[1,"w-10","h-10","rounded-lg","bg-gradient-to-br","from-purple-500","to-pink-600","flex","items-center","justify-center"],["name","faSolidCirclePlay",1,"text-white"],[1,"text-responsive","text-gray-700","dark:text-gray-300","mb-8"],[1,"grid","grid-cols-1","md:grid-cols-2","gap-8"],[1,"border-2","border-red-200","dark:border-red-800","rounded-lg","p-5"],[1,"text-lg","font-semibold","text-red-800","dark:text-red-200","mb-4"],[1,"mb-4"],["label","Start (Leaky)","icon","faSolidPlay",1,"mr-2",3,"buttonClick","disabled"],["label","Stop","icon","faSolidStop",3,"buttonClick","disabled"],[1,"bg-red-50","dark:bg-red-900/20","p-5","rounded"],[1,"text-2xl","font-bold"],[1,"text-sm","text-red-700","dark:text-red-300"],[1,"border-2","border-green-200","dark:border-green-800","rounded-lg","p-5"],[1,"text-lg","font-semibold","text-green-800","dark:text-green-200","mb-4"],["label","Start (Safe)","icon","faSolidPlay",1,"mr-2",3,"buttonClick","disabled"],[1,"bg-green-50","dark:bg-green-900/20","p-5","rounded"],[1,"text-sm","text-green-700","dark:text-green-300"],[1,"w-10","h-10","rounded-lg","bg-gradient-to-br","from-teal-500","to-cyan-600","flex","items-center","justify-center"],["name","faSolidGraduationCap",1,"text-white"]],template:function(p,i){p&1&&(e(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5),r(6,"ng-icon",6),t(),e(7,"div")(8,"span",7),n(9,"RxJS Patterns"),t()()(),e(10,"h1",8),n(11," Memory Leak Prevention "),t(),e(12,"p",9),n(13," Properly managing subscriptions to prevent memory leaks in Angular applications. "),t()(),e(14,"div",10)(15,"div",11),r(16,"ng-icon",12),t()()()(),e(17,"p-card",13)(18,"div",14)(19,"div",4)(20,"div",15),r(21,"ng-icon",16),t(),e(22,"h2",17),n(23,"Why Memory Leaks Matter"),t()(),e(24,"p",18),n(25," Subscriptions that aren't cleaned up continue to run after components are destroyed, causing memory leaks, performance issues, and unexpected behavior. "),t(),e(26,"div",19)(27,"div",4),r(28,"ng-icon",20),e(29,"h3",21),n(30,"Common Causes"),t()(),e(31,"ul",22)(32,"li",23),n(33," Subscriptions without cleanup "),t(),e(34,"li",23),n(35," Event listeners not removed "),t(),e(36,"li",23),n(37," Intervals/timeouts not cleared "),t(),e(38,"li",23),n(39," WebSocket connections not closed "),t()()()()(),e(40,"p-card",13)(41,"div",24)(42,"div",25)(43,"div",26),r(44,"ng-icon",27),t(),e(45,"h2",17),n(46,"Code Examples"),t()(),e(47,"p-tabs",28)(48,"p-tablist",29)(49,"p-tab",30),r(50,"ng-icon",31),e(51,"span",32),n(52,"Violation"),t()(),e(53,"p-tab",33),r(54,"ng-icon",34),e(55,"span",32),n(56,"Solution"),t()()(),e(57,"p-tabpanels")(58,"p-tabpanel",28)(59,"div",35)(60,"pre",36)(61,"code"),n(62),t()()()(),e(63,"p-tabpanel",37)(64,"div",35)(65,"pre",36)(66,"code"),n(67),t()()()()()()()(),e(68,"p-card",13)(69,"div",24)(70,"div",4)(71,"div",38),r(72,"ng-icon",39),t(),e(73,"h2",17),n(74,"Interactive Demo"),t()(),e(75,"p",40),n(76," Compare leaky vs safe subscriptions. The leaky one continues even after component destruction simulation. "),t(),e(77,"div",41)(78,"div",42)(79,"h3",43),n(80,"\u274C Leaky Subscription"),t(),e(81,"div",44)(82,"app-enhanced-button",45),d("buttonClick",function(){return i.startLeaky()}),t(),e(83,"app-enhanced-button",46),d("buttonClick",function(){return i.stopLeaky()}),t()(),e(84,"div",47)(85,"p",48),n(86),t(),e(87,"p",49),n(88,"Continues after destruction!"),t()()(),e(89,"div",50)(90,"h3",51),n(91,"\u2705 Safe Subscription"),t(),e(92,"div",44)(93,"app-enhanced-button",52),d("buttonClick",function(){return i.startSafe()}),t(),e(94,"app-enhanced-button",46),d("buttonClick",function(){return i.stopSafe()}),t()(),e(95,"div",53)(96,"p",48),n(97),t(),e(98,"p",54),n(99,"Auto-cleanup on destroy"),t()()()()()(),e(100,"p-card",13)(101,"div",24)(102,"div",25)(103,"div",55),r(104,"ng-icon",56),t(),e(105,"h2",17),n(106,"Key Takeaways"),t()(),e(107,"ul",22)(108,"li",23),n(109," Always unsubscribe or use takeUntilDestroyed/takeUntil "),t(),e(110,"li",23),n(111," Use takeUntilDestroyed in Angular 17+ (preferred) "),t(),e(112,"li",23),n(113," Use takeUntil with Subject for older Angular versions "),t(),e(114,"li",23),n(115," Clean up intervals, timeouts, and event listeners "),t()()()()()),p&2&&(a(62),m(i.violationCode),a(5),m(i.solutionCode),a(15),s("disabled",i.isLeakyActive()),a(),s("disabled",!i.isLeakyActive()),a(3),m(i.leakyCount()),a(7),s("disabled",i.isSafeActive()),a(),s("disabled",!i.isSafeActive()),a(3),m(i.safeCount()))},dependencies:[S,y,h,k,w,E,C,_,L,M,D],styles:["[_nghost-%COMP%]{display:block;width:100%}"]})};export{A as MemoryLeakPreventionDemoComponent};
