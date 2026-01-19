import{a as V}from"./chunk-HZJ5AC74.js";import{b as j}from"./chunk-AWYD6WCW.js";import"./chunk-XTBDY7WG.js";import"./chunk-42MSCVNE.js";import"./chunk-4UXUI4FZ.js";import{a as P}from"./chunk-K53LRMBI.js";import"./chunk-SYS6JVAO.js";import"./chunk-IAGI55XL.js";import{b as W}from"./chunk-AI3VJOCX.js";import{a as F,b as I,c as M,d as $,e as N}from"./chunk-WL3GUFCA.js";import"./chunk-4XAVTQOD.js";import{a as U,b as O}from"./chunk-QNFUOYYO.js";import"./chunk-Z44BU5J4.js";import"./chunk-4O3FVBGX.js";import"./chunk-7F3YVZD6.js";import"./chunk-54PGZSHQ.js";import{r as R}from"./chunk-4KSQBOQ2.js";import"./chunk-FPPZ4BUR.js";import{B as g,D as C,Db as m,Eb as p,I as v,Jb as T,K as S,Kb as t,Lb as e,Mb as s,X as y,Xb as u,Y as E,Za as r,Zb as c,g as h,ha as _,lc as i,mc as x,n as k,nb as w,nc as f,ra as D,va as d}from"./chunk-IOSF2A54.js";import"./chunk-6HR7AMTL.js";function L(a,l){if(a&1&&(t(0,"div",45)(1,"p",58),i(2,"Filtered Values:"),e(),t(3,"p",59),i(4),e()()),a&2){let n=c();r(4),x(n.filterResult().join(", "))}}function q(a,l){if(a&1&&(t(0,"div",45)(1,"p",58),i(2,"First 5 Values:"),e(),t(3,"p",59),i(4),e()()),a&2){let n=c();r(4),x(n.takeResult().join(", "))}}function K(a,l){if(a&1&&(t(0,"div",50)(1,"p",60),i(2),e(),t(3,"p",61),i(4,"Will auto-stop after 3 seconds"),e()()),a&2){let n=c();r(2),f("Streaming... Count: ",n.streamCount())}}function z(a,l){if(a&1&&(t(0,"div",45)(1,"p",58),i(2,"Streamed Values (stopped):"),e(),t(3,"p",59),i(4),e()()),a&2){let n=c();r(4),f("",n.takeUntilResult().slice(-10).join(", "),"...")}}function B(a,l){if(a&1&&(t(0,"div",45)(1,"p",58),i(2,"Values (stopped at 10):"),e(),t(3,"p",59),i(4),e()()),a&2){let n=c();r(4),x(n.takeWhileResult().join(", "))}}function J(a,l){if(a&1&&(t(0,"div",55)(1,"p",58),i(2,"Distinct Values:"),e(),t(3,"p",59),i(4,"Input: a, a, b, b, b, c, a, a"),e(),t(5,"p",59),i(6),e()()),a&2){let n=c();r(6),f("Output: ",n.distinctResult().join(", "))}}var A=class a{destroyRef=_(D);destroy$=new h;filterResult=d([]);takeResult=d([]);takeUntilResult=d([]);takeWhileResult=d([]);distinctResult=d([]);isStreaming=d(!1);streamCount=d(0);violationCode=`
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
`;testFilter(){this.filterResult.set([]),g(200).pipe(C(l=>l>5&&l%2===0),v(5),V(this.destroyRef)).subscribe(l=>{this.filterResult.update(n=>[...n,l])})}testTake(){this.takeResult.set([]),g(300).pipe(v(5)).subscribe(l=>{this.takeResult.update(n=>[...n,l])})}testTakeUntil(){this.takeUntilResult.set([]),this.isStreaming.set(!0),g(200).pipe(y(this.destroy$)).subscribe({next:l=>{this.takeUntilResult.update(n=>[...n,l]),this.streamCount.set(l)},complete:()=>{this.isStreaming.set(!1)}}),setTimeout(()=>{this.destroy$.next(),this.destroy$.complete(),this.destroy$=new h},3e3)}testTakeWhile(){this.takeWhileResult.set([]),g(200).pipe(E(l=>l<10)).subscribe(l=>{this.takeWhileResult.update(n=>[...n,l])})}testDistinctUntilChanged(){this.distinctResult.set([]),k("a","a","b","b","b","c","a","a").pipe(S()).subscribe(l=>{this.distinctResult.update(n=>[...n,l])})}static \u0275fac=function(n){return new(n||a)};static \u0275cmp=w({type:a,selectors:[["app-filtering-operators-demo"]],decls:171,vars:9,consts:[[1,"container-responsive","space-y-responsive"],[1,"card-modern","padding-responsive","hover-lift","slide-in-up"],[1,"flex","flex-col","lg:flex-row","lg:items-center","lg:justify-between","gap-6"],[1,"flex-1"],[1,"flex","items-center","gap-3","mb-4"],[1,"w-12","h-12","sm:w-14","sm:h-14","rounded-xl","bg-gradient-to-br","from-purple-500","to-pink-600","flex","items-center","justify-center","shadow-lg"],[1,"fas","fa-filter","text-white","text-xl","sm:text-2xl"],[1,"badge-modern","text-xs","sm:text-sm"],[1,"heading-responsive","text-gradient","mb-4"],[1,"text-responsive","text-gray-700","dark:text-gray-300"],[1,"hidden","lg:block"],[1,"w-32","h-32","rounded-2xl","bg-gradient-to-br","from-purple-500/20","to-pink-600/20","flex","items-center","justify-center"],[1,"fas","fa-filter","text-6xl","text-purple-500"],[1,"card-modern","hover-lift","slide-in-up"],[1,"padding-responsive","space-y-6"],[1,"w-10","h-10","rounded-lg","bg-gradient-to-br","from-blue-500","to-purple-600","flex","items-center","justify-center"],[1,"fas","fa-lightbulb","text-white"],[1,"subheading-responsive","text-gray-900","dark:text-gray-100"],[1,"text-responsive","text-gray-700","dark:text-gray-300","leading-relaxed"],[1,"glass","rounded-xl","p-6","border-l-4","border-accent"],[1,"fas","fa-star","text-accent","text-xl"],[1,"text-lg","sm:text-xl","font-semibold","text-gray-900","dark:text-gray-100"],[1,"list-modern"],[1,"text-sm","sm:text-base","text-gray-800","dark:text-gray-200"],[1,"padding-responsive"],[1,"flex","items-center","gap-3","mb-6"],[1,"w-10","h-10","rounded-lg","bg-gradient-to-br","from-green-500","to-teal-600","flex","items-center","justify-center"],[1,"fas","fa-code","text-white"],["value","0"],[1,"flex","flex-wrap","gap-2","mb-6"],["value","0",1,"flex","items-center","gap-2"],[1,"fas","fa-times-circle","text-red-500"],[1,"text-sm","sm:text-base","font-semibold"],["value","1",1,"flex","items-center","gap-2"],[1,"fas","fa-check-circle","text-green-500"],[1,"code-block-modern"],[1,"overflow-x-auto","text-sm","sm:text-base"],["value","1"],[1,"w-10","h-10","rounded-lg","bg-gradient-to-br","from-purple-500","to-pink-600","flex","items-center","justify-center"],[1,"fas","fa-play-circle","text-white"],[1,"space-y-8"],[1,"border-2","border-gray-200","dark:border-gray-700","rounded-lg","p-5"],[1,"text-lg","font-semibold","text-gray-800","dark:text-gray-200","mb-4"],[1,"text-sm","text-lg","text-gray-700","dark:text-gray-300","leading-relaxed","mb-2"],["label","Test filter()","icon","pi pi-filter",1,"mb-4",3,"buttonClick"],[1,"bg-gray-100","dark:bg-gray-700","p-5","rounded"],["label","Test take(5)","icon","pi pi-list",1,"mb-4",3,"buttonClick"],[1,"border-2","border-green-200","dark:border-green-800","rounded-lg","p-5"],[1,"text-lg","font-semibold","text-green-800","dark:text-green-200","mb-4"],["label","Test takeUntil()","icon","pi pi-shield",1,"mb-4",3,"buttonClick","disabled"],[1,"bg-green-50","dark:bg-green-900/20","p-5","rounded","mb-2"],["label","Test takeWhile()","icon","pi pi-check-circle",1,"mb-4",3,"buttonClick"],[1,"border-2","border-blue-200","dark:border-blue-800","rounded-lg","p-5"],[1,"text-lg","font-semibold","text-blue-800","dark:text-blue-200","mb-4"],["label","Test distinctUntilChanged()","icon","pi pi-ban",1,"mb-4",3,"buttonClick"],[1,"bg-blue-50","dark:bg-blue-900/20","p-5","rounded"],[1,"w-10","h-10","rounded-lg","bg-gradient-to-br","from-teal-500","to-cyan-600","flex","items-center","justify-center"],[1,"fas","fa-graduation-cap","text-white"],[1,"text-sm","font-semibold","mb-2"],[1,"text-sm"],[1,"text-sm","font-semibold"],[1,"text-xs","text-lg","text-gray-700","dark:text-gray-300","leading-relaxed"]],template:function(n,o){n&1&&(t(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5),s(6,"i",6),e(),t(7,"div")(8,"span",7),i(9,"RxJS Operators"),e()()(),t(10,"h1",8),i(11," Filtering Operators "),e(),t(12,"p",9),i(13," Controlling emissions: "),t(14,"code"),i(15,"filter()"),e(),i(16,", "),t(17,"code"),i(18,"take()"),e(),i(19,", "),t(20,"code"),i(21,"takeUntil()"),e(),i(22,", "),t(23,"code"),i(24,"takeWhile()"),e(),i(25,", "),t(26,"code"),i(27,"distinctUntilChanged()"),e()()(),t(28,"div",10)(29,"div",11),s(30,"i",12),e()()()(),t(31,"p-card",13)(32,"div",14)(33,"div",4)(34,"div",15),s(35,"i",16),e(),t(36,"h2",17),i(37,"What are Filtering Operators?"),e()(),t(38,"p",18),i(39," Filtering operators control which values are emitted and when observables complete. They're essential for memory leak prevention and efficient data processing. "),e(),t(40,"div",19)(41,"div",4),s(42,"i",20),t(43,"h3",21),i(44,"Key Operators"),e()(),t(45,"ul",22)(46,"li",23)(47,"strong"),i(48,"filter():"),e(),i(49," Conditional emission based on predicate "),e(),t(50,"li",23)(51,"strong"),i(52,"take(n):"),e(),i(53," First n values then complete "),e(),t(54,"li",23)(55,"strong"),i(56,"takeUntil():"),e(),i(57," Complete when notifier emits (memory leak prevention) "),e(),t(58,"li",23)(59,"strong"),i(60,"takeWhile():"),e(),i(61," Complete when condition fails "),e(),t(62,"li",23)(63,"strong"),i(64,"distinctUntilChanged():"),e(),i(65," Only emit when value changes "),e()()()()(),t(66,"p-card",13)(67,"div",24)(68,"div",25)(69,"div",26),s(70,"i",27),e(),t(71,"h2",17),i(72,"Code Examples"),e()(),t(73,"p-tabs",28)(74,"p-tablist",29)(75,"p-tab",30),s(76,"i",31),t(77,"span",32),i(78,"Violation"),e()(),t(79,"p-tab",33),s(80,"i",34),t(81,"span",32),i(82,"Solution"),e()()(),t(83,"p-tabpanels")(84,"p-tabpanel",28)(85,"div",35)(86,"pre",36)(87,"code"),i(88),e()()()(),t(89,"p-tabpanel",37)(90,"div",35)(91,"pre",36)(92,"code"),i(93),e()()()()()()()(),t(94,"p-card",13)(95,"div",24)(96,"div",4)(97,"div",38),s(98,"i",39),e(),t(99,"h2",17),i(100,"Interactive Demo"),e()(),t(101,"div",40)(102,"div",41)(103,"h3",42),i(104,"filter() - Conditional Emission"),e(),t(105,"p",43),i(106," Emits only even numbers greater than 5. "),e(),t(107,"app-enhanced-button",44),u("buttonClick",function(){return o.testFilter()}),e(),m(108,L,5,1,"div",45),e(),t(109,"div",41)(110,"h3",42),i(111,"take(n) - First N Values"),e(),t(112,"p",43),i(113," Takes only the first 5 values, then completes. "),e(),t(114,"app-enhanced-button",46),u("buttonClick",function(){return o.testTake()}),e(),m(115,q,5,1,"div",45),e(),t(116,"div",47)(117,"h3",48),i(118,"takeUntil() - Memory Leak Prevention"),e(),t(119,"p",43),i(120," Streams values until destroyed. Auto-stops after 3 seconds (simulating component destroy). "),e(),t(121,"app-enhanced-button",49),u("buttonClick",function(){return o.testTakeUntil()}),e(),m(122,K,5,1,"div",50),m(123,z,5,1,"div",45),e(),t(124,"div",41)(125,"h3",42),i(126,"takeWhile() - Conditional Completion"),e(),t(127,"p",43),i(128," Emits values while condition is true (stops when value >= 10). "),e(),t(129,"app-enhanced-button",51),u("buttonClick",function(){return o.testTakeWhile()}),e(),m(130,B,5,1,"div",45),e(),t(131,"div",52)(132,"h3",53),i(133,"distinctUntilChanged() - Remove Duplicates"),e(),t(134,"p",43),i(135," Emits only when value changes. Prevents duplicate API calls. "),e(),t(136,"app-enhanced-button",54),u("buttonClick",function(){return o.testDistinctUntilChanged()}),e(),m(137,J,7,1,"div",55),e()()()(),t(138,"p-card",13)(139,"div",24)(140,"div",25)(141,"div",56),s(142,"i",57),e(),t(143,"h2",17),i(144,"Key Takeaways"),e()(),t(145,"ul",22)(146,"li",23),i(147," Always use "),t(148,"code"),i(149,"takeUntil()"),e(),i(150," or "),t(151,"code"),i(152,"takeUntilDestroyed()"),e(),i(153," to prevent memory leaks "),e(),t(154,"li",23),i(155," Use "),t(156,"code"),i(157,"distinctUntilChanged()"),e(),i(158," with form valueChanges to prevent duplicate API calls "),e(),t(159,"li",23),i(160," Use "),t(161,"code"),i(162,"take(n)"),e(),i(163," to limit emissions and ensure completion "),e(),t(164,"li",23),i(165," Use "),t(166,"code"),i(167,"filter()"),e(),i(168," to conditionally process values "),e(),t(169,"li",23),i(170," Never forget cleanup - unsubscribed observables cause memory leaks! "),e()()()()()),n&2&&(r(88),x(o.violationCode),r(5),x(o.solutionCode),r(15),p(o.filterResult().length>0?108:-1),r(7),p(o.takeResult().length>0?115:-1),r(6),T("disabled",o.isStreaming()),r(),p(o.isStreaming()?122:-1),r(),p(o.takeUntilResult().length>0&&!o.isStreaming()?123:-1),r(7),p(o.takeWhileResult().length>0?130:-1),r(7),p(o.distinctResult().length>0?137:-1))},dependencies:[R,O,U,N,I,F,M,$,P,j,W],styles:["[_nghost-%COMP%]{display:block;width:100%}"]})};export{A as FilteringOperatorsDemoComponent};
