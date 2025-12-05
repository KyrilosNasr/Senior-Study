import{c as A}from"./chunk-HQCF4P2J.js";import"./chunk-OFQQBTXX.js";import{b as j}from"./chunk-VHQBVC6O.js";import{a as R,b as L,c as U,d as z,e as N,f as M,g as I}from"./chunk-AH7MQ5KM.js";import"./chunk-K33OWSJ3.js";import"./chunk-UB7WHAP5.js";import{p as D,q as O}from"./chunk-47HPTYDK.js";import{p as T}from"./chunk-FHCI6K3X.js";import"./chunk-FPPZ4BUR.js";import{E as y,Hb as u,J as v,Jb as g,M as h,Ma as o,Xb as i,Yb as s,Z as S,ab as C,ha as E,n as x,nb as p,ob as c,pb as _,r as b,rb as w,sb as k,ub as t,va as m,vb as e,wb as d}from"./chunk-S2MQBBOY.js";import"./chunk-6HR7AMTL.js";function q(a,n){if(a&1&&(t(0,"li"),i(1),e()),a&2){let l=n.$implicit;o(),s(l)}}function P(a,n){if(a&1&&(t(0,"div",45)(1,"p",61),i(2,"Tap Logs:"),e(),t(3,"ul",62),w(4,q,2,1,"li",null,_),e()()),a&2){let l=g();o(4),k(l.tapLogs())}}function F(a,n){a&1&&(t(0,"div",49)(1,"p",63),i(2,"Loading..."),e()())}function J(a,n){if(a&1&&(t(0,"div",50)(1,"p",63),i(2),e()()),a&2){let l=g();o(2),s(l.finalizeResult())}}function B(a,n){if(a&1&&(t(0,"div",54)(1,"p",63),i(2),e()()),a&2){let l=g();o(2),s(l.delayResult())}}function W(a,n){if(a&1&&(t(0,"div",58)(1,"p",63),i(2),e()()),a&2){let l=g();o(2),s(l.timeoutResult())}}var $=class a{apiService=E(A);tapLogs=m([]);finalizeResult=m("");delayResult=m("");timeoutResult=m("");isLoading=m(!1);violationCode=`
// \u274C VIOLATION: Side Effects in Stream, No Cleanup
// Modifies stream, no logging, no cleanup

loadData() {
  this.loading = true; // Side effect in wrong place
  this.http.get('/api/data').subscribe({
    next: data => {
      this.data = data;
      console.log(data); // Logging in subscribe
    },
    error: err => {
      this.loading = false; // Cleanup in error handler only
    }
    // What if complete? Loading never turns off!
  });
}
`;solutionCode=`
// \u2705 SOLUTION: Utility Operators
// Side effects without modifying stream, proper cleanup

loadData() {
  this.loadingService.show();
  
  this.http.get('/api/data').pipe(
    // tap() - Side effects without modifying stream
    tap({
      next: data => console.log('Received:', data),
      error: err => console.error('Error:', err),
      complete: () => console.log('Complete')
    }),
    
    // delay() - Delay emissions
    delay(1000),
    
    // timeout() - Error if doesn't complete in time
    timeout(5000),
    
    // finalize() - Cleanup logic (always executes)
    finalize(() => {
      this.loadingService.hide(); // Always hides loader
    }),
    
    catchError(() => of({ timeout: true }))
  ).subscribe(data => {
    this.data = data;
  });
}

// tap() - Side effects without modifying stream
this.http.get('/api/data').pipe(
  tap(data => console.log('Received:', data))
);

// finalize() - Cleanup logic (always executes)
this.loadingService.show();
this.http.get('/api/data').pipe(
  finalize(() => this.loadingService.hide()) // Always hides loader
);

// timeout() - Error if doesn't complete in time
this.http.get('/api/slow-endpoint').pipe(
  timeout(5000),
  catchError(() => of({ timeout: true }))
);
`;testTap(){this.tapLogs.set([]),this.apiService.simulateApiCall({data:"Test data"},500).pipe(S({next:n=>{this.tapLogs.update(l=>[...l,`Next: ${JSON.stringify(n)}`])},error:n=>{this.tapLogs.update(l=>[...l,`Error: ${n.message}`])},complete:()=>{this.tapLogs.update(n=>[...n,"Complete"])}})).subscribe()}testFinalize(){this.finalizeResult.set(""),this.isLoading.set(!0),this.apiService.simulateApiCall({data:"Success"},1e3).pipe(h(()=>{this.isLoading.set(!1),this.finalizeResult.set("Cleanup executed (loading hidden)")})).subscribe(n=>{this.finalizeResult.set(`Data received: ${JSON.stringify(n)}`)})}testDelay(){this.delayResult.set("Waiting..."),x("Delayed data").pipe(v(2e3)).subscribe(n=>{this.delayResult.set(`Received after delay: ${n}`)})}testTimeout(){this.timeoutResult.set("Loading (will timeout in 2s)..."),this.apiService.simulateApiCall({data:"Success"},3e3).pipe(b(2e3),y(()=>(this.timeoutResult.set("Request timed out after 2 seconds"),x({timeout:!0})))).subscribe(n=>{n&&!("timeout"in n)&&this.timeoutResult.set(`Success: ${JSON.stringify(n)}`)})}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=C({type:a,selectors:[["app-utility-operators-demo"]],decls:154,vars:7,consts:[[1,"container-responsive","space-y-responsive"],[1,"card-modern","padding-responsive","hover-lift","slide-in-up"],[1,"flex","flex-col","lg:flex-row","lg:items-center","lg:justify-between","gap-6"],[1,"flex-1"],[1,"flex","items-center","gap-3","mb-4"],[1,"w-12","h-12","sm:w-14","sm:h-14","rounded-xl","bg-gradient-to-br","from-purple-500","to-pink-600","flex","items-center","justify-center","shadow-lg"],[1,"fas","fa-wrench","text-white","text-xl","sm:text-2xl"],[1,"badge-modern","text-xs","sm:text-sm"],[1,"heading-responsive","text-gradient","mb-4"],[1,"text-responsive","text-gray-700","dark:text-gray-300"],[1,"hidden","lg:block"],[1,"w-32","h-32","rounded-2xl","bg-gradient-to-br","from-purple-500/20","to-pink-600/20","flex","items-center","justify-center"],[1,"fas","fa-wrench","text-6xl","text-purple-500"],[1,"card-modern","hover-lift","slide-in-up"],[1,"padding-responsive","space-y-6"],[1,"w-10","h-10","rounded-lg","bg-gradient-to-br","from-blue-500","to-purple-600","flex","items-center","justify-center"],[1,"fas","fa-lightbulb","text-white"],[1,"subheading-responsive","text-gray-900","dark:text-gray-100"],[1,"text-responsive","text-gray-700","dark:text-gray-300","leading-relaxed"],[1,"glass","rounded-xl","p-6","border-l-4","border-accent"],[1,"fas","fa-star","text-accent","text-xl"],[1,"text-lg","sm:text-xl","font-semibold","text-gray-900","dark:text-gray-100"],[1,"list-modern"],[1,"text-sm","sm:text-base","text-gray-800","dark:text-gray-200"],[1,"padding-responsive"],[1,"flex","items-center","gap-3","mb-6"],[1,"w-10","h-10","rounded-lg","bg-gradient-to-br","from-green-500","to-teal-600","flex","items-center","justify-center"],[1,"fas","fa-code","text-white"],["value","0"],[1,"flex","flex-wrap","gap-2","mb-6"],["value","0",1,"flex","items-center","gap-2"],[1,"fas","fa-times-circle","text-red-500"],[1,"text-sm","sm:text-base","font-semibold"],["value","1",1,"flex","items-center","gap-2"],[1,"fas","fa-check-circle","text-green-500"],[1,"code-block-modern"],[1,"overflow-x-auto","text-sm","sm:text-base"],["value","1"],[1,"w-10","h-10","rounded-lg","bg-gradient-to-br","from-purple-500","to-pink-600","flex","items-center","justify-center"],[1,"fas","fa-play-circle","text-white"],[1,"space-y-8"],[1,"border-2","border-gray-200","dark:border-gray-700","rounded-lg","p-5"],[1,"text-lg","font-semibold","text-gray-800","dark:text-gray-200","mb-4"],[1,"text-sm","text-lg","text-gray-700","dark:text-gray-300","leading-relaxed","mb-2"],["label","Test tap()","icon","pi pi-info-circle",1,"mb-4",3,"click"],[1,"bg-gray-100","dark:bg-gray-700","p-5","rounded"],[1,"border-2","border-green-200","dark:border-green-800","rounded-lg","p-5"],[1,"text-lg","font-semibold","text-green-800","dark:text-green-200","mb-4"],["label","Test finalize()","icon","pi pi-check","severity","success",1,"mb-4",3,"click"],[1,"bg-yellow-50","dark:bg-yellow-900/20","p-5","rounded","mb-2"],[1,"bg-green-50","dark:bg-green-900/20","p-5","rounded"],[1,"border-2","border-blue-200","dark:border-blue-800","rounded-lg","p-5"],[1,"text-lg","font-semibold","text-blue-800","dark:text-blue-200","mb-4"],["label","Test delay(2000ms)","icon","pi pi-clock",1,"mb-4",3,"click"],[1,"bg-blue-50","dark:bg-blue-900/20","p-5","rounded"],[1,"border-2","border-red-200","dark:border-red-800","rounded-lg","p-5"],[1,"text-lg","font-semibold","text-red-800","dark:text-red-200","mb-4"],["label","Test timeout(2000ms)","icon","pi pi-exclamation-triangle","severity","danger",1,"mb-4",3,"click"],[1,"bg-red-50","dark:bg-red-900/20","p-5","rounded"],[1,"w-10","h-10","rounded-lg","bg-gradient-to-br","from-teal-500","to-cyan-600","flex","items-center","justify-center"],[1,"fas","fa-graduation-cap","text-white"],[1,"text-xs","font-semibold","mb-2"],[1,"list-disc","list-inside","text-xs","space-y-1"],[1,"text-sm"]],template:function(l,r){l&1&&(t(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5),d(6,"i",6),e(),t(7,"div")(8,"span",7),i(9,"RxJS Operators"),e()()(),t(10,"h1",8),i(11," Utility Operators "),e(),t(12,"p",9),i(13," Side effects and utilities: "),t(14,"code"),i(15,"tap()"),e(),i(16,", "),t(17,"code"),i(18,"finalize()"),e(),i(19,", "),t(20,"code"),i(21,"delay()"),e(),i(22,", "),t(23,"code"),i(24,"timeout()"),e()()(),t(25,"div",10)(26,"div",11),d(27,"i",12),e()()()(),t(28,"p-card",13)(29,"div",14)(30,"div",4)(31,"div",15),d(32,"i",16),e(),t(33,"h2",17),i(34,"What are Utility Operators?"),e()(),t(35,"p",18),i(36," Utility operators provide side effects, cleanup, and timing control without modifying the observable stream. They're essential for logging, loading states, and resource cleanup. "),e(),t(37,"div",19)(38,"div",4),d(39,"i",20),t(40,"h3",21),i(41,"Key Operators"),e()(),t(42,"ul",22)(43,"li",23)(44,"strong"),i(45,"tap():"),e(),i(46," Side effects without modifying stream - Logging, debugging "),e(),t(47,"li",23)(48,"strong"),i(49,"finalize():"),e(),i(50," Cleanup logic that always executes - Hide loaders, cleanup "),e(),t(51,"li",23)(52,"strong"),i(53,"delay():"),e(),i(54," Delay emissions by specified time - Testing, animations "),e(),t(55,"li",23)(56,"strong"),i(57,"timeout():"),e(),i(58," Error if doesn't complete in time - Prevent hanging requests "),e()()()()(),t(59,"p-card",13)(60,"div",24)(61,"div",25)(62,"div",26),d(63,"i",27),e(),t(64,"h2",17),i(65,"Code Examples"),e()(),t(66,"p-tabs",28)(67,"p-tablist",29)(68,"p-tab",30),d(69,"i",31),t(70,"span",32),i(71,"Violation"),e()(),t(72,"p-tab",33),d(73,"i",34),t(74,"span",32),i(75,"Solution"),e()()(),t(76,"p-tabpanels")(77,"p-tabpanel",28)(78,"div",35)(79,"pre",36)(80,"code"),i(81),e()()()(),t(82,"p-tabpanel",37)(83,"div",35)(84,"pre",36)(85,"code"),i(86),e()()()()()()()(),t(87,"p-card",13)(88,"div",24)(89,"div",4)(90,"div",38),d(91,"i",39),e(),t(92,"h2",17),i(93,"Interactive Demo"),e()(),t(94,"div",40)(95,"div",41)(96,"h3",42),i(97,"tap() - Side Effects"),e(),t(98,"p",43),i(99," Logs values without modifying the stream. Check the logs below. "),e(),t(100,"p-button",44),u("click",function(){return r.testTap()}),e(),p(101,P,6,0,"div",45),e(),t(102,"div",46)(103,"h3",47),i(104,"finalize() - Cleanup"),e(),t(105,"p",43),i(106," Ensures cleanup code always runs, even on error or completion. "),e(),t(107,"p-button",48),u("click",function(){return r.testFinalize()}),e(),p(108,F,3,0,"div",49),p(109,J,3,1,"div",50),e(),t(110,"div",51)(111,"h3",52),i(112,"delay() - Delay Emissions"),e(),t(113,"p",43),i(114," Delays emissions by 2 seconds. "),e(),t(115,"p-button",53),u("click",function(){return r.testDelay()}),e(),p(116,B,3,1,"div",54),e(),t(117,"div",55)(118,"h3",56),i(119,"timeout() - Request Timeout"),e(),t(120,"p",43),i(121," Simulates a slow request that times out after 2 seconds. "),e(),t(122,"p-button",57),u("click",function(){return r.testTimeout()}),e(),p(123,W,3,1,"div",58),e()()()(),t(124,"p-card",13)(125,"div",24)(126,"div",25)(127,"div",59),d(128,"i",60),e(),t(129,"h2",17),i(130,"Key Takeaways"),e()(),t(131,"ul",22)(132,"li",23),i(133," Use "),t(134,"code"),i(135,"tap()"),e(),i(136," for side effects (logging, debugging) without modifying the stream "),e(),t(137,"li",23),i(138," Always use "),t(139,"code"),i(140,"finalize()"),e(),i(141," for cleanup (hide loaders, close connections) - it always executes "),e(),t(142,"li",23),i(143," Use "),t(144,"code"),i(145,"timeout()"),e(),i(146," to prevent hanging requests - improves UX "),e(),t(147,"li",23),i(148," Use "),t(149,"code"),i(150,"delay()"),e(),i(151," for testing, animations, or rate limiting "),e(),t(152,"li",23),i(153," Never put side effects in subscribe() - use tap() instead for better composition "),e()()()()()),l&2&&(o(81),s(r.violationCode),o(5),s(r.solutionCode),o(15),c(r.tapLogs().length>0?101:-1),o(7),c(r.isLoading()?108:-1),o(),c(r.finalizeResult()?109:-1),o(7),c(r.delayResult()?116:-1),o(7),c(r.timeoutResult()?123:-1))},dependencies:[T,L,R,I,z,U,N,M,O,D,j],styles:["[_nghost-%COMP%]{display:block;width:100%}"]})};export{$ as UtilityOperatorsDemoComponent};
