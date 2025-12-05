import{a as V}from"./chunk-3PM7X52N.js";import{b as j}from"./chunk-WMH24HSC.js";import"./chunk-BNU3XHMI.js";import"./chunk-ZNZEMCYO.js";import"./chunk-5TVMUKYR.js";import{b as P}from"./chunk-VHQBVC6O.js";import{a as w,b as F,c as M,d as I,e as $,f as N,g as W}from"./chunk-AH7MQ5KM.js";import"./chunk-K33OWSJ3.js";import"./chunk-UB7WHAP5.js";import{p as U,q as O}from"./chunk-47HPTYDK.js";import{p as R}from"./chunk-FHCI6K3X.js";import"./chunk-FPPZ4BUR.js";import{B as x,D as k,Hb as u,I as v,Jb as p,K as y,Ma as r,X as S,Xb as t,Y as C,Yb as c,Zb as g,ab as D,g as h,ha as E,n as f,nb as d,ob as m,ra as _,tb as T,ub as i,va as s,vb as e}from"./chunk-S2MQBBOY.js";import"./chunk-6HR7AMTL.js";function L(a,l){if(a&1&&(i(0,"div",20)(1,"p",35),t(2,"Filtered Values:"),e(),i(3,"p",36),t(4),e()()),a&2){let n=p();r(4),c(n.filterResult().join(", "))}}function q(a,l){if(a&1&&(i(0,"div",20)(1,"p",35),t(2,"First 5 Values:"),e(),i(3,"p",36),t(4),e()()),a&2){let n=p();r(4),c(n.takeResult().join(", "))}}function B(a,l){if(a&1&&(i(0,"div",25)(1,"p",37),t(2),e(),i(3,"p",38),t(4,"Will auto-stop after 3 seconds"),e()()),a&2){let n=p();r(2),g("Streaming... Count: ",n.streamCount())}}function K(a,l){if(a&1&&(i(0,"div",20)(1,"p",35),t(2,"Streamed Values (stopped):"),e(),i(3,"p",36),t(4),e()()),a&2){let n=p();r(4),g("",n.takeUntilResult().slice(-10).join(", "),"...")}}function z(a,l){if(a&1&&(i(0,"div",20)(1,"p",35),t(2,"Values (stopped at 10):"),e(),i(3,"p",36),t(4),e()()),a&2){let n=p();r(4),c(n.takeWhileResult().join(", "))}}function G(a,l){if(a&1&&(i(0,"div",30)(1,"p",35),t(2,"Distinct Values:"),e(),i(3,"p",36),t(4,"Input: a, a, b, b, b, c, a, a"),e(),i(5,"p",36),t(6),e()()),a&2){let n=p();r(6),g("Output: ",n.distinctResult().join(", "))}}var A=class a{destroyRef=E(_);destroy$=new h;filterResult=s([]);takeResult=s([]);takeUntilResult=s([]);takeWhileResult=s([]);distinctResult=s([]);isStreaming=s(!1);streamCount=s(0);violationCode=`
// \u274C VIOLATION: Memory Leaks & Inefficient Patterns
// No filtering, no cleanup, duplicate emissions

export class DashboardComponent implements OnInit {
  ngOnInit() {
    // Memory leak - never unsubscribes!
    interval(1000).subscribe(count => {
      this.updateData(count);
    });
    
    // No filtering - processes all values
    this.formControl.valueChanges.subscribe(value => {
      this.search(value); // Called on every keystroke, even duplicates!
    });
    
    // No limit - stream never completes
    this.dataStream$.subscribe(data => {
      this.processData(data); // Processes infinite stream
    });
  }
  
  // No ngOnDestroy - subscriptions continue after component destruction
}
`;solutionCode=`
// \u2705 SOLUTION: Filtering Operators
// Memory leak prevention, efficient processing, cleanup

export class DashboardComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  private refreshTrigger$ = new Subject<void>();
  
  data$ = combineLatest([
    this.route.params,
    this.refreshTrigger$.pipe(startWith(null))
  ]).pipe(
    debounceTime(100),
    switchMap(([params]) => this.loadData(params)),
    shareReplay({ bufferSize: 1, refCount: true }),
    takeUntil(this.destroy$) // Cleanup strategy
  );
  
  // filter() - Conditional emission
  numbers$ = interval(1000).pipe(
    filter(n => n > 5), // Only emit numbers > 5
    takeUntil(this.destroy$)
  );
  
  // take(n) - First n values then complete
  firstValue$ = this.data$.pipe(
    take(1) // Equivalent to first() but safer
  );
  
  // takeUntil() - Complete when notifier emits
  stream$ = interval(1000).pipe(
    takeUntil(this.destroy$) // Automatic unsubscription
  );
  
  // takeWhile() - Complete when condition fails
  countUp$ = interval(100).pipe(
    takeWhile(value => value < 100)
  );
  
  // distinctUntilChanged() - Only emit when value changes
  search$ = this.formControl.valueChanges.pipe(
    distinctUntilChanged(), // Prevent duplicate API calls
    debounceTime(300),
    switchMap(query => this.search(query))
  );
  
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
`;testFilter(){this.filterResult.set([]),x(200).pipe(k(l=>l>5&&l%2===0),v(5),V(this.destroyRef)).subscribe(l=>{this.filterResult.update(n=>[...n,l])})}testTake(){this.takeResult.set([]),x(300).pipe(v(5)).subscribe(l=>{this.takeResult.update(n=>[...n,l])})}testTakeUntil(){this.takeUntilResult.set([]),this.isStreaming.set(!0),x(200).pipe(S(this.destroy$)).subscribe({next:l=>{this.takeUntilResult.update(n=>[...n,l]),this.streamCount.set(l)},complete:()=>{this.isStreaming.set(!1)}}),setTimeout(()=>{this.destroy$.next(),this.destroy$.complete(),this.destroy$=new h},3e3)}testTakeWhile(){this.takeWhileResult.set([]),x(200).pipe(C(l=>l<10)).subscribe(l=>{this.takeWhileResult.update(n=>[...n,l])})}testDistinctUntilChanged(){this.distinctResult.set([]),f("a","a","b","b","b","c","a","a").pipe(y()).subscribe(l=>{this.distinctResult.update(n=>[...n,l])})}static \u0275fac=function(n){return new(n||a)};static \u0275cmp=D({type:a,selectors:[["app-filtering-operators-demo"]],decls:150,vars:9,consts:[[1,"max-w-7xl","mx-auto","space-y-8"],[1,"bg-white","dark:bg-gray-800","rounded-lg","shadow-lg","p-8"],[1,"text-4xl","font-bold","text-gray-900","dark:text-gray-100","mb-3"],[1,"text-lg","text-gray-700","dark:text-gray-300","leading-relaxed"],[1,"shadow-lg"],[1,"space-y-4"],[1,"text-3xl","font-semibold","text-gray-900","dark:text-gray-100","mb-3"],[1,"text-base","text-gray-700","dark:text-gray-300","leading-relaxed"],[1,"bg-blue-50","dark:bg-blue-900/30","p-5","rounded-lg","border","border-blue-200","dark:border-blue-800"],[1,"text-lg","font-semibold","text-blue-900","dark:text-blue-100","mb-3"],[1,"list-disc","list-inside","space-y-2","text-base","text-blue-800","dark:text-blue-200"],["value","0"],["value","1"],[1,"overflow-x-auto"],[1,"text-3xl","font-semibold","text-gray-900","dark:text-gray-100","mb-3","mb-4"],[1,"space-y-8"],[1,"border-2","border-gray-200","dark:border-gray-700","rounded-lg","p-5"],[1,"text-lg","font-semibold","text-gray-800","dark:text-gray-200","mb-4"],[1,"text-sm","text-lg","text-gray-700","dark:text-gray-300","leading-relaxed","mb-2"],["label","Test filter()","icon","pi pi-filter",1,"mb-4",3,"click"],[1,"bg-gray-100","dark:bg-gray-700","p-5","rounded"],["label","Test take(5)","icon","pi pi-list",1,"mb-4",3,"click"],[1,"border-2","border-green-200","dark:border-green-800","rounded-lg","p-5"],[1,"text-lg","font-semibold","text-green-800","dark:text-green-200","mb-4"],["label","Test takeUntil()","icon","pi pi-shield","severity","success",1,"mb-4",3,"click","disabled"],[1,"bg-green-50","dark:bg-green-900/20","p-5","rounded","mb-2"],["label","Test takeWhile()","icon","pi pi-check-circle",1,"mb-4",3,"click"],[1,"border-2","border-blue-200","dark:border-blue-800","rounded-lg","p-5"],[1,"text-lg","font-semibold","text-blue-800","dark:text-blue-200","mb-4"],["label","Test distinctUntilChanged()","icon","pi pi-ban",1,"mb-4",3,"click"],[1,"bg-blue-50","dark:bg-blue-900/20","p-5","rounded"],[1,"space-y-2","text-base","text-gray-700","dark:text-gray-300","leading-relaxed"],[1,"flex","items-start"],[1,"text-green-500","mr-2"],[1,"text-red-500","mr-2"],[1,"text-sm","font-semibold","mb-2"],[1,"text-sm"],[1,"text-sm","font-semibold"],[1,"text-xs","text-lg","text-gray-700","dark:text-gray-300","leading-relaxed"]],template:function(n,o){n&1&&(i(0,"div",0)(1,"div",1)(2,"h1",2),t(3,"Part 3: Filtering Operators"),e(),i(4,"p",3),t(5," Controlling emissions: "),i(6,"code"),t(7,"filter()"),e(),t(8,", "),i(9,"code"),t(10,"take()"),e(),t(11,", "),i(12,"code"),t(13,"takeUntil()"),e(),t(14,", "),i(15,"code"),t(16,"takeWhile()"),e(),t(17,", "),i(18,"code"),t(19,"distinctUntilChanged()"),e()()(),i(20,"p-card",4)(21,"div",5)(22,"h2",6),t(23,"Filtering Operators"),e(),i(24,"p",7),t(25," Filtering operators control which values are emitted and when observables complete. They're essential for memory leak prevention and efficient data processing. "),e(),i(26,"div",8)(27,"h3",9),t(28,"Key Operators:"),e(),i(29,"ul",10)(30,"li")(31,"strong"),t(32,"filter():"),e(),t(33," Conditional emission based on predicate"),e(),i(34,"li")(35,"strong"),t(36,"take(n):"),e(),t(37," First n values then complete"),e(),i(38,"li")(39,"strong"),t(40,"takeUntil():"),e(),t(41," Complete when notifier emits (memory leak prevention)"),e(),i(42,"li")(43,"strong"),t(44,"takeWhile():"),e(),t(45," Complete when condition fails"),e(),i(46,"li")(47,"strong"),t(48,"distinctUntilChanged():"),e(),t(49," Only emit when value changes"),e()()()()(),i(50,"p-card",4)(51,"p-tabs",11)(52,"p-tablist")(53,"p-tab",11),t(54,"\u274C Violation"),e(),i(55,"p-tab",12),t(56,"\u2705 Solution"),e()(),i(57,"p-tabpanels")(58,"p-tabpanel",11)(59,"pre",13)(60,"code"),t(61),e()()(),i(62,"p-tabpanel",12)(63,"pre",13)(64,"code"),t(65),e()()()()()(),i(66,"p-card",4)(67,"h2",14),t(68,"Live Demo"),e(),i(69,"div",15)(70,"div",16)(71,"h3",17),t(72,"filter() - Conditional Emission"),e(),i(73,"p",18),t(74," Emits only even numbers greater than 5. "),e(),i(75,"p-button",19),u("click",function(){return o.testFilter()}),e(),d(76,L,5,1,"div",20),e(),i(77,"div",16)(78,"h3",17),t(79,"take(n) - First N Values"),e(),i(80,"p",18),t(81," Takes only the first 5 values, then completes. "),e(),i(82,"p-button",21),u("click",function(){return o.testTake()}),e(),d(83,q,5,1,"div",20),e(),i(84,"div",22)(85,"h3",23),t(86,"takeUntil() - Memory Leak Prevention"),e(),i(87,"p",18),t(88," Streams values until destroyed. Auto-stops after 3 seconds (simulating component destroy). "),e(),i(89,"p-button",24),u("click",function(){return o.testTakeUntil()}),e(),d(90,B,5,1,"div",25),d(91,K,5,1,"div",20),e(),i(92,"div",16)(93,"h3",17),t(94,"takeWhile() - Conditional Completion"),e(),i(95,"p",18),t(96," Emits values while condition is true (stops when value >= 10). "),e(),i(97,"p-button",26),u("click",function(){return o.testTakeWhile()}),e(),d(98,z,5,1,"div",20),e(),i(99,"div",27)(100,"h3",28),t(101,"distinctUntilChanged() - Remove Duplicates"),e(),i(102,"p",18),t(103," Emits only when value changes. Prevents duplicate API calls. "),e(),i(104,"p-button",29),u("click",function(){return o.testDistinctUntilChanged()}),e(),d(105,G,7,1,"div",30),e()()(),i(106,"p-card",4)(107,"h2",14),t(108,"Key Takeaways"),e(),i(109,"ul",31)(110,"li",32)(111,"span",33),t(112,"\u2713"),e(),i(113,"span"),t(114,"Always use "),i(115,"code"),t(116,"takeUntil()"),e(),t(117," or "),i(118,"code"),t(119,"takeUntilDestroyed()"),e(),t(120," to prevent memory leaks"),e()(),i(121,"li",32)(122,"span",33),t(123,"\u2713"),e(),i(124,"span"),t(125,"Use "),i(126,"code"),t(127,"distinctUntilChanged()"),e(),t(128," with form valueChanges to prevent duplicate API calls"),e()(),i(129,"li",32)(130,"span",33),t(131,"\u2713"),e(),i(132,"span"),t(133,"Use "),i(134,"code"),t(135,"take(n)"),e(),t(136," to limit emissions and ensure completion"),e()(),i(137,"li",32)(138,"span",33),t(139,"\u2713"),e(),i(140,"span"),t(141,"Use "),i(142,"code"),t(143,"filter()"),e(),t(144," to conditionally process values"),e()(),i(145,"li",32)(146,"span",34),t(147,"\u2717"),e(),i(148,"span"),t(149,"Never forget cleanup - unsubscribed observables cause memory leaks!"),e()()()()()),n&2&&(r(61),c(o.violationCode),r(4),c(o.solutionCode),r(11),m(o.filterResult().length>0?76:-1),r(7),m(o.takeResult().length>0?83:-1),r(6),T("disabled",o.isStreaming()),r(),m(o.isStreaming()?90:-1),r(),m(o.takeUntilResult().length>0&&!o.isStreaming()?91:-1),r(7),m(o.takeWhileResult().length>0?98:-1),r(7),m(o.distinctResult().length>0?105:-1))},dependencies:[R,F,w,W,I,M,$,N,O,U,j,P],styles:["[_nghost-%COMP%]{display:block;width:100%}"]})};export{A as FilteringOperatorsDemoComponent};
