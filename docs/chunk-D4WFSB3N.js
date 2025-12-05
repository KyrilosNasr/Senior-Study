import{c as A}from"./chunk-HQCF4P2J.js";import"./chunk-OFQQBTXX.js";import{b as I}from"./chunk-VHQBVC6O.js";import{a as O,b as R,c as L,d as U,e as z,f as N,g as M}from"./chunk-AH7MQ5KM.js";import"./chunk-K33OWSJ3.js";import"./chunk-UB7WHAP5.js";import{p as w,q as D}from"./chunk-47HPTYDK.js";import{p as T}from"./chunk-FHCI6K3X.js";import"./chunk-FPPZ4BUR.js";import{E as f,Hb as c,J as y,Jb as u,M as h,Ma as o,Xb as t,Yb as d,Z as S,ab as E,ha as v,n as x,nb as m,ob as p,pb as C,r as b,rb as _,sb as k,ub as i,va as s,vb as e}from"./chunk-S2MQBBOY.js";import"./chunk-6HR7AMTL.js";function $(a,n){if(a&1&&(i(0,"li"),t(1),e()),a&2){let l=n.$implicit;o(),d(l)}}function q(a,n){if(a&1&&(i(0,"div",20)(1,"p",38),t(2,"Tap Logs:"),e(),i(3,"ul",39),_(4,$,2,1,"li",null,C),e()()),a&2){let l=u();o(4),k(l.tapLogs())}}function F(a,n){a&1&&(i(0,"div",24)(1,"p",40),t(2,"Loading..."),e()())}function B(a,n){if(a&1&&(i(0,"div",25)(1,"p",40),t(2),e()()),a&2){let l=u();o(2),d(l.finalizeResult())}}function J(a,n){if(a&1&&(i(0,"div",29)(1,"p",40),t(2),e()()),a&2){let l=u();o(2),d(l.delayResult())}}function j(a,n){if(a&1&&(i(0,"div",33)(1,"p",40),t(2),e()()),a&2){let l=u();o(2),d(l.timeoutResult())}}var P=class a{apiService=v(A);tapLogs=s([]);finalizeResult=s("");delayResult=s("");timeoutResult=s("");isLoading=s(!1);violationCode=`
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
`;testTap(){this.tapLogs.set([]),this.apiService.simulateApiCall({data:"Test data"},500).pipe(S({next:n=>{this.tapLogs.update(l=>[...l,`Next: ${JSON.stringify(n)}`])},error:n=>{this.tapLogs.update(l=>[...l,`Error: ${n.message}`])},complete:()=>{this.tapLogs.update(n=>[...n,"Complete"])}})).subscribe()}testFinalize(){this.finalizeResult.set(""),this.isLoading.set(!0),this.apiService.simulateApiCall({data:"Success"},1e3).pipe(h(()=>{this.isLoading.set(!1),this.finalizeResult.set("Cleanup executed (loading hidden)")})).subscribe(n=>{this.finalizeResult.set(`Data received: ${JSON.stringify(n)}`)})}testDelay(){this.delayResult.set("Waiting..."),x("Delayed data").pipe(y(2e3)).subscribe(n=>{this.delayResult.set(`Received after delay: ${n}`)})}testTimeout(){this.timeoutResult.set("Loading (will timeout in 2s)..."),this.apiService.simulateApiCall({data:"Success"},3e3).pipe(b(2e3),f(()=>(this.timeoutResult.set("Request timed out after 2 seconds"),x({timeout:!0})))).subscribe(n=>{n&&!("timeout"in n)&&this.timeoutResult.set(`Success: ${JSON.stringify(n)}`)})}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=E({type:a,selectors:[["app-utility-operators-demo"]],decls:133,vars:7,consts:[[1,"max-w-7xl","mx-auto","space-y-8"],[1,"bg-white","dark:bg-gray-800","rounded-lg","shadow-lg","p-8"],[1,"text-4xl","font-bold","text-gray-900","dark:text-gray-100","mb-3"],[1,"text-lg","text-gray-700","dark:text-gray-300","leading-relaxed"],[1,"shadow-lg"],[1,"space-y-4"],[1,"text-3xl","font-semibold","text-gray-900","dark:text-gray-100","mb-3"],[1,"text-base","text-gray-700","dark:text-gray-300","leading-relaxed"],[1,"bg-blue-50","dark:bg-blue-900/30","p-5","rounded-lg","border","border-blue-200","dark:border-blue-800"],[1,"text-lg","font-semibold","text-blue-900","dark:text-blue-100","mb-3"],[1,"list-disc","list-inside","space-y-2","text-base","text-blue-800","dark:text-blue-200"],["value","0"],["value","1"],[1,"overflow-x-auto"],[1,"text-3xl","font-semibold","text-gray-900","dark:text-gray-100","mb-3","mb-4"],[1,"space-y-8"],[1,"border-2","border-gray-200","dark:border-gray-700","rounded-lg","p-5"],[1,"text-lg","font-semibold","text-gray-800","dark:text-gray-200","mb-4"],[1,"text-sm","text-lg","text-gray-700","dark:text-gray-300","leading-relaxed","mb-2"],["label","Test tap()","icon","pi pi-info-circle",1,"mb-4",3,"click"],[1,"bg-gray-100","dark:bg-gray-700","p-5","rounded"],[1,"border-2","border-green-200","dark:border-green-800","rounded-lg","p-5"],[1,"text-lg","font-semibold","text-green-800","dark:text-green-200","mb-4"],["label","Test finalize()","icon","pi pi-check","severity","success",1,"mb-4",3,"click"],[1,"bg-yellow-50","dark:bg-yellow-900/20","p-5","rounded","mb-2"],[1,"bg-green-50","dark:bg-green-900/20","p-5","rounded"],[1,"border-2","border-blue-200","dark:border-blue-800","rounded-lg","p-5"],[1,"text-lg","font-semibold","text-blue-800","dark:text-blue-200","mb-4"],["label","Test delay(2000ms)","icon","pi pi-clock",1,"mb-4",3,"click"],[1,"bg-blue-50","dark:bg-blue-900/20","p-5","rounded"],[1,"border-2","border-red-200","dark:border-red-800","rounded-lg","p-5"],[1,"text-lg","font-semibold","text-red-800","dark:text-red-200","mb-4"],["label","Test timeout(2000ms)","icon","pi pi-exclamation-triangle","severity","danger",1,"mb-4",3,"click"],[1,"bg-red-50","dark:bg-red-900/20","p-5","rounded"],[1,"space-y-2","text-base","text-gray-700","dark:text-gray-300","leading-relaxed"],[1,"flex","items-start"],[1,"text-green-500","mr-2"],[1,"text-red-500","mr-2"],[1,"text-xs","font-semibold","mb-2"],[1,"list-disc","list-inside","text-xs","space-y-1"],[1,"text-sm"]],template:function(l,r){l&1&&(i(0,"div",0)(1,"div",1)(2,"h1",2),t(3,"Part 6: Utility Operators"),e(),i(4,"p",3),t(5," Side effects and utilities: "),i(6,"code"),t(7,"tap()"),e(),t(8,", "),i(9,"code"),t(10,"finalize()"),e(),t(11,", "),i(12,"code"),t(13,"delay()"),e(),t(14,", "),i(15,"code"),t(16,"timeout()"),e()()(),i(17,"p-card",4)(18,"div",5)(19,"h2",6),t(20,"Utility Operators"),e(),i(21,"p",7),t(22," Utility operators provide side effects, cleanup, and timing control without modifying the observable stream. They're essential for logging, loading states, and resource cleanup. "),e(),i(23,"div",8)(24,"h3",9),t(25,"Key Operators:"),e(),i(26,"ul",10)(27,"li")(28,"strong"),t(29,"tap():"),e(),t(30," Side effects without modifying stream - Logging, debugging"),e(),i(31,"li")(32,"strong"),t(33,"finalize():"),e(),t(34," Cleanup logic that always executes - Hide loaders, cleanup"),e(),i(35,"li")(36,"strong"),t(37,"delay():"),e(),t(38," Delay emissions by specified time - Testing, animations"),e(),i(39,"li")(40,"strong"),t(41,"timeout():"),e(),t(42," Error if doesn't complete in time - Prevent hanging requests"),e()()()()(),i(43,"p-card",4)(44,"p-tabs",11)(45,"p-tablist")(46,"p-tab",11),t(47,"\u274C Violation"),e(),i(48,"p-tab",12),t(49,"\u2705 Solution"),e()(),i(50,"p-tabpanels")(51,"p-tabpanel",11)(52,"pre",13)(53,"code"),t(54),e()()(),i(55,"p-tabpanel",12)(56,"pre",13)(57,"code"),t(58),e()()()()()(),i(59,"p-card",4)(60,"h2",14),t(61,"Live Demo"),e(),i(62,"div",15)(63,"div",16)(64,"h3",17),t(65,"tap() - Side Effects"),e(),i(66,"p",18),t(67," Logs values without modifying the stream. Check the logs below. "),e(),i(68,"p-button",19),c("click",function(){return r.testTap()}),e(),m(69,q,6,0,"div",20),e(),i(70,"div",21)(71,"h3",22),t(72,"finalize() - Cleanup"),e(),i(73,"p",18),t(74," Ensures cleanup code always runs, even on error or completion. "),e(),i(75,"p-button",23),c("click",function(){return r.testFinalize()}),e(),m(76,F,3,0,"div",24),m(77,B,3,1,"div",25),e(),i(78,"div",26)(79,"h3",27),t(80,"delay() - Delay Emissions"),e(),i(81,"p",18),t(82," Delays emissions by 2 seconds. "),e(),i(83,"p-button",28),c("click",function(){return r.testDelay()}),e(),m(84,J,3,1,"div",29),e(),i(85,"div",30)(86,"h3",31),t(87,"timeout() - Request Timeout"),e(),i(88,"p",18),t(89," Simulates a slow request that times out after 2 seconds. "),e(),i(90,"p-button",32),c("click",function(){return r.testTimeout()}),e(),m(91,j,3,1,"div",33),e()()(),i(92,"p-card",4)(93,"h2",14),t(94,"Key Takeaways"),e(),i(95,"ul",34)(96,"li",35)(97,"span",36),t(98,"\u2713"),e(),i(99,"span"),t(100,"Use "),i(101,"code"),t(102,"tap()"),e(),t(103," for side effects (logging, debugging) without modifying the stream"),e()(),i(104,"li",35)(105,"span",36),t(106,"\u2713"),e(),i(107,"span"),t(108,"Always use "),i(109,"code"),t(110,"finalize()"),e(),t(111," for cleanup (hide loaders, close connections) - it always executes"),e()(),i(112,"li",35)(113,"span",36),t(114,"\u2713"),e(),i(115,"span"),t(116,"Use "),i(117,"code"),t(118,"timeout()"),e(),t(119," to prevent hanging requests - improves UX"),e()(),i(120,"li",35)(121,"span",36),t(122,"\u2713"),e(),i(123,"span"),t(124,"Use "),i(125,"code"),t(126,"delay()"),e(),t(127," for testing, animations, or rate limiting"),e()(),i(128,"li",35)(129,"span",37),t(130,"\u2717"),e(),i(131,"span"),t(132,"Never put side effects in subscribe() - use tap() instead for better composition"),e()()()()()),l&2&&(o(54),d(r.violationCode),o(4),d(r.solutionCode),o(11),p(r.tapLogs().length>0?69:-1),o(7),p(r.isLoading()?76:-1),o(),p(r.finalizeResult()?77:-1),o(7),p(r.delayResult()?84:-1),o(7),p(r.timeoutResult()?91:-1))},dependencies:[T,R,O,M,U,L,z,N,D,w,I],styles:["[_nghost-%COMP%]{display:block;width:100%}"]})};export{P as UtilityOperatorsDemoComponent};
