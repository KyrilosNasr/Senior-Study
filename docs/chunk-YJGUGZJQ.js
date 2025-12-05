import{a as A}from"./chunk-3PM7X52N.js";import{b as M}from"./chunk-VHQBVC6O.js";import{a as S,b as h,c as C,d as E,e as L,f as D,g as _}from"./chunk-AH7MQ5KM.js";import"./chunk-K33OWSJ3.js";import"./chunk-UB7WHAP5.js";import{p as f,q as g}from"./chunk-47HPTYDK.js";import{p as x}from"./chunk-FHCI6K3X.js";import"./chunk-FPPZ4BUR.js";import{B as u,Hb as l,Ma as r,Xb as i,Yb as d,ab as k,g as b,ha as y,ra as v,tb as s,ub as e,va as o,vb as t}from"./chunk-S2MQBBOY.js";import"./chunk-6HR7AMTL.js";var P=class c{destroyRef=y(v);destroy$=new b;leakyCount=o(0);safeCount=o(0);isLeakyActive=o(!1);isSafeActive=o(!1);leakySubscription;safeSubscription;violationCode=`
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
`;startLeaky(){this.isLeakyActive.set(!0),this.leakyCount.set(0),this.leakySubscription=u(1e3).subscribe(a=>{this.leakyCount.set(a)})}startSafe(){this.isSafeActive.set(!0),this.safeCount.set(0),this.safeSubscription=u(1e3).pipe(A(this.destroyRef)).subscribe(a=>{this.safeCount.set(a)})}stopLeaky(){this.leakySubscription&&(this.leakySubscription.unsubscribe(),this.leakySubscription=null),this.isLeakyActive.set(!1)}stopSafe(){this.safeSubscription&&(this.safeSubscription.unsubscribe(),this.safeSubscription=null),this.isSafeActive.set(!1)}static \u0275fac=function(m){return new(m||c)};static \u0275cmp=k({type:c,selectors:[["app-memory-leak-prevention-demo"]],decls:92,vars:8,consts:[[1,"max-w-7xl","mx-auto","space-y-8"],[1,"bg-white","dark:bg-gray-800","rounded-lg","shadow-lg","p-8"],[1,"text-4xl","font-bold","text-gray-900","dark:text-gray-100","mb-3"],[1,"text-lg","text-gray-700","dark:text-gray-300","leading-relaxed"],[1,"shadow-lg"],[1,"space-y-4"],[1,"text-3xl","font-semibold","text-gray-900","dark:text-gray-100","mb-3"],[1,"text-base","text-gray-700","dark:text-gray-300","leading-relaxed"],[1,"bg-red-50","dark:bg-red-900/30","p-5","rounded-lg","border","border-red-200","dark:border-red-800"],[1,"font-semibold","text-red-900","dark:text-red-200","mb-2"],[1,"list-disc","list-inside","space-y-1","text-red-800","dark:text-red-300"],["value","0"],["value","1"],[1,"overflow-x-auto"],[1,"text-3xl","font-semibold","text-gray-900","dark:text-gray-100","mb-3","mb-4"],[1,"text-base","text-gray-700","dark:text-gray-300","leading-relaxed","mb-6"],[1,"grid","grid-cols-1","md:grid-cols-2","gap-8"],[1,"border-2","border-red-200","dark:border-red-800","rounded-lg","p-5"],[1,"text-lg","font-semibold","text-red-800","dark:text-red-200","mb-4"],[1,"mb-4"],["label","Start (Leaky)","icon","pi pi-play","severity","danger",1,"mr-2",3,"click","disabled"],["label","Stop","icon","pi pi-stop","severity","danger",3,"click","disabled"],[1,"bg-red-50","dark:bg-red-900/20","p-5","rounded"],[1,"text-2xl","font-bold"],[1,"text-sm","text-red-700","dark:text-red-300"],[1,"border-2","border-green-200","dark:border-green-800","rounded-lg","p-5"],[1,"text-lg","font-semibold","text-green-800","dark:text-green-200","mb-4"],["label","Start (Safe)","icon","pi pi-play","severity","success",1,"mr-2",3,"click","disabled"],["label","Stop","icon","pi pi-stop","severity","success",3,"click","disabled"],[1,"bg-green-50","dark:bg-green-900/20","p-5","rounded"],[1,"text-sm","text-green-700","dark:text-green-300"],[1,"space-y-2","text-base","text-gray-700","dark:text-gray-300","leading-relaxed"],[1,"flex","items-start"],[1,"text-green-500","mr-2"]],template:function(m,n){m&1&&(e(0,"div",0)(1,"div",1)(2,"h1",2),i(3,"Memory Leak Prevention"),t(),e(4,"p",3),i(5," Properly managing subscriptions to prevent memory leaks in Angular applications. "),t()(),e(6,"p-card",4)(7,"div",5)(8,"h2",6),i(9,"Why Memory Leaks Matter"),t(),e(10,"p",7),i(11," Subscriptions that aren't cleaned up continue to run after components are destroyed, causing memory leaks, performance issues, and unexpected behavior. "),t(),e(12,"div",8)(13,"h3",9),i(14,"Common Causes:"),t(),e(15,"ul",10)(16,"li"),i(17,"Subscriptions without cleanup"),t(),e(18,"li"),i(19,"Event listeners not removed"),t(),e(20,"li"),i(21,"Intervals/timeouts not cleared"),t(),e(22,"li"),i(23,"WebSocket connections not closed"),t()()()()(),e(24,"p-card",4)(25,"p-tabs",11)(26,"p-tablist")(27,"p-tab",11),i(28,"\u274C Violation"),t(),e(29,"p-tab",12),i(30,"\u2705 Solution"),t()(),e(31,"p-tabpanels")(32,"p-tabpanel",11)(33,"pre",13)(34,"code"),i(35),t()()(),e(36,"p-tabpanel",12)(37,"pre",13)(38,"code"),i(39),t()()()()()(),e(40,"p-card",4)(41,"h2",14),i(42,"Live Demo"),t(),e(43,"p",15),i(44," Compare leaky vs safe subscriptions. The leaky one continues even after component destruction simulation. "),t(),e(45,"div",16)(46,"div",17)(47,"h3",18),i(48,"\u274C Leaky Subscription"),t(),e(49,"div",19)(50,"p-button",20),l("click",function(){return n.startLeaky()}),t(),e(51,"p-button",21),l("click",function(){return n.stopLeaky()}),t()(),e(52,"div",22)(53,"p",23),i(54),t(),e(55,"p",24),i(56,"Continues after destruction!"),t()()(),e(57,"div",25)(58,"h3",26),i(59,"\u2705 Safe Subscription"),t(),e(60,"div",19)(61,"p-button",27),l("click",function(){return n.startSafe()}),t(),e(62,"p-button",28),l("click",function(){return n.stopSafe()}),t()(),e(63,"div",29)(64,"p",23),i(65),t(),e(66,"p",30),i(67,"Auto-cleanup on destroy"),t()()()()(),e(68,"p-card",4)(69,"h2",14),i(70,"Key Takeaways"),t(),e(71,"ul",31)(72,"li",32)(73,"span",33),i(74,"\u2713"),t(),e(75,"span"),i(76,"Always unsubscribe or use takeUntilDestroyed/takeUntil"),t()(),e(77,"li",32)(78,"span",33),i(79,"\u2713"),t(),e(80,"span"),i(81,"Use takeUntilDestroyed in Angular 17+ (preferred)"),t()(),e(82,"li",32)(83,"span",33),i(84,"\u2713"),t(),e(85,"span"),i(86,"Use takeUntil with Subject for older Angular versions"),t()(),e(87,"li",32)(88,"span",33),i(89,"\u2713"),t(),e(90,"span"),i(91,"Clean up intervals, timeouts, and event listeners"),t()()()()()),m&2&&(r(35),d(n.violationCode),r(4),d(n.solutionCode),r(11),s("disabled",n.isLeakyActive()),r(),s("disabled",!n.isLeakyActive()),r(3),d(n.leakyCount()),r(7),s("disabled",n.isSafeActive()),r(),s("disabled",!n.isSafeActive()),r(3),d(n.safeCount()))},dependencies:[x,h,S,_,E,C,L,D,g,f,M],styles:["[_nghost-%COMP%]{display:block;width:100%}"]})};export{P as MemoryLeakPreventionDemoComponent};
