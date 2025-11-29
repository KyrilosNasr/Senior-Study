import{a as L}from"./chunk-VTPR72QH.js";import{c as J}from"./chunk-ZIKL4GMZ.js";import"./chunk-PVYFTFE3.js";import{b as B}from"./chunk-KJPPBXDO.js";import{a as q,b as T,c as H,d as N,e as A,f as U,g as $}from"./chunk-6IHYB2AV.js";import"./chunk-IMEODX4F.js";import"./chunk-PRB5TZSC.js";import{p as I,q as w}from"./chunk-H3I524XT.js";import{o as P,p as M}from"./chunk-EFMPFDS6.js";import"./chunk-4IVXAVEU.js";import{Ab as t,Bb as e,Nb as u,Ob as O,S as y,Sa as s,ac as i,ba as m,bc as d,gb as C,nc as g,oc as h,pa as p,r as f,tb as b,ub as c,vb as D,x as S,xb as E,yb as k,zb as _}from"./chunk-ANFRTOHF.js";import{a as v,b as x}from"./chunk-6HR7AMTL.js";function F(r,n){if(r&1&&(t(0,"li"),i(1),g(2,"json"),e()),r&2){let a=n.$implicit;s(),d(h(2,1,a))}}function R(r,n){if(r&1&&(t(0,"div",19)(1,"h4",24),i(2,"Polled Data:"),e(),t(3,"ul",25),E(4,F,3,3,"li",null,D),e()()),r&2){let a=O();s(4),k(a.pollingData())}}function K(r,n){r&1&&(t(0,"div",19)(1,"pre",26),i(2),g(3,"json"),e()()),r&2&&(s(2),d(h(3,1,n)))}var j=class r{pollingService=m(L);apiService=m(J);pollingData=p([]);sequentialData=p(null);isPolling=p(!1);violationCode=`
// \u274C VIOLATION: Nested Subscriptions
// Creates memory leaks and race conditions

loadUserData(userId: string) {
  this.http.get(\`/api/users/\${userId}\`).subscribe(user => {
    this.http.get(\`/api/users/\${userId}/orders\`).subscribe(orders => {
      this.http.get(\`/api/users/\${userId}/preferences\`).subscribe(prefs => {
        // Nested callbacks - hard to maintain
        this.userData = { user, orders, prefs };
      });
    });
  });
}

// Polling with manual intervals
startPolling() {
  setInterval(() => {
    this.http.get('/api/data').subscribe(data => {
      this.data = data;
    });
  }, 5000);
}
`;solutionCode=`
// \u2705 SOLUTION: Higher-Order Observables
// Clean, composable, cancellable

// Sequential requests with switchMap
loadUserData(userId: string) {
  return this.http.get(\`/api/users/\${userId}\`).pipe(
    switchMap(user => 
      forkJoin({
        orders: this.http.get(\`/api/users/\${userId}/orders\`),
        preferences: this.http.get(\`/api/users/\${userId}/preferences\`)
      }).pipe(
        map(({ orders, preferences }) => ({
          ...user,
          orders,
          preferences
        }))
      )
    )
  );
}

// Polling with RxJS
startPolling() {
  this.pollingService.pollData(
    () => this.http.get('/api/data'),
    5000
  ).pipe(
    takeUntil(this.destroy$)
  ).subscribe(data => {
    this.data = data;
  });
}
`;startPolling(){this.isPolling.set(!0),this.pollingData.set([]),this.pollingService.pollData(()=>this.apiService.simulateApiCall({timestamp:Date.now(),value:Math.random()},500),2e3).subscribe({next:n=>{this.pollingData.update(a=>[...a,n])},error:()=>{this.isPolling.set(!1)}})}testSequential(){this.apiService.simulateApiCall({id:"123",name:"John Doe"},500).pipe(y(a=>S({orders:this.apiService.simulateApiCall([{id:1,total:100}],300),preferences:this.apiService.simulateApiCall({theme:"dark"},200)}).pipe(f(({orders:l,preferences:o})=>x(v({},a),{orders:l,preferences:o}))))).subscribe(a=>{this.sequentialData.set(a)})}static \u0275fac=function(a){return new(a||r)};static \u0275cmp=C({type:r,selectors:[["app-higher-order-observables-demo"]],decls:78,vars:5,consts:[[1,"max-w-7xl","mx-auto","space-y-6"],[1,"bg-white","dark:bg-gray-800","rounded-lg","shadow-md","p-6"],[1,"text-3xl","font-bold","text-gray-800","dark:text-gray-200","mb-2"],[1,"text-gray-600","dark:text-gray-400"],[1,"shadow-md"],[1,"space-y-4"],[1,"text-2xl","font-semibold","text-gray-800","dark:text-gray-200"],[1,"text-gray-700","dark:text-gray-300"],[1,"bg-blue-50","dark:bg-blue-900/20","p-4","rounded-lg"],[1,"font-semibold","text-blue-900","dark:text-blue-200","mb-2"],[1,"list-disc","list-inside","space-y-1","text-blue-800","dark:text-blue-300"],["value","0"],["value","1"],[1,"bg-gray-900","text-gray-100","p-4","rounded-lg","overflow-x-auto","text-sm"],[1,"text-2xl","font-semibold","text-gray-800","dark:text-gray-200","mb-4"],[1,"space-y-6"],[1,"border-2","border-gray-200","dark:border-gray-700","rounded-lg","p-4"],[1,"text-lg","font-semibold","text-gray-800","dark:text-gray-200","mb-4"],["label","Start Polling","icon","pi pi-play",1,"mb-4",3,"click","disabled"],[1,"bg-gray-100","dark:bg-gray-700","p-4","rounded"],["label","Load User Data (Sequential)","icon","pi pi-download",1,"mb-4",3,"click"],[1,"space-y-2","text-gray-700","dark:text-gray-300"],[1,"flex","items-start"],[1,"text-green-500","mr-2"],[1,"font-semibold","mb-2"],[1,"list-disc","list-inside","space-y-1","text-sm"],[1,"text-sm"]],template:function(a,l){if(a&1&&(t(0,"div",0)(1,"div",1)(2,"h1",2),i(3,"Higher-Order Observables"),e(),t(4,"p",3),i(5," Managing observables that emit other observables using flattening operators. "),e()(),t(6,"p-card",4)(7,"div",5)(8,"h2",6),i(9,"What are Higher-Order Observables?"),e(),t(10,"p",7),i(11," Higher-order observables are observables that emit other observables. Flattening operators like switchMap, mergeMap, concatMap, and exhaustMap handle these nested observables. "),e(),t(12,"div",8)(13,"h3",9),i(14,"Key Patterns:"),e(),t(15,"ul",10)(16,"li"),i(17,"Polling: Repeated data fetching at intervals"),e(),t(18,"li"),i(19,"Sequential chains: Dependent API calls"),e(),t(20,"li"),i(21,"Parallel requests: Independent operations"),e(),t(22,"li"),i(23,"Cancellation: SwitchMap cancels previous requests"),e()()()()(),t(24,"p-card",4)(25,"p-tabs",11)(26,"p-tablist")(27,"p-tab",11),i(28,"\u274C Violation"),e(),t(29,"p-tab",12),i(30,"\u2705 Solution"),e()(),t(31,"p-tabpanels")(32,"p-tabpanel",11)(33,"pre",13)(34,"code"),i(35),e()()(),t(36,"p-tabpanel",12)(37,"pre",13)(38,"code"),i(39),e()()()()()(),t(40,"p-card",4)(41,"h2",14),i(42,"Live Demo"),e(),t(43,"div",15)(44,"div",16)(45,"h3",17),i(46,"Polling Pattern"),e(),t(47,"p-button",18),u("click",function(){return l.startPolling()}),e(),b(48,R,6,0,"div",19),e(),t(49,"div",16)(50,"h3",17),i(51,"Sequential Request Chain"),e(),t(52,"p-button",20),u("click",function(){return l.testSequential()}),e(),b(53,K,4,3,"div",19),e()()(),t(54,"p-card",4)(55,"h2",14),i(56,"Key Takeaways"),e(),t(57,"ul",21)(58,"li",22)(59,"span",23),i(60,"\u2713"),e(),t(61,"span"),i(62,"Use switchMap for cancellable operations (search, typeahead)"),e()(),t(63,"li",22)(64,"span",23),i(65,"\u2713"),e(),t(66,"span"),i(67,"Use concatMap when order matters (sequential operations)"),e()(),t(68,"li",22)(69,"span",23),i(70,"\u2713"),e(),t(71,"span"),i(72,"Use mergeMap for parallel independent operations"),e()(),t(73,"li",22)(74,"span",23),i(75,"\u2713"),e(),t(76,"span"),i(77,"Avoid nested subscriptions - use flattening operators"),e()()()()()),a&2){let o;s(35),d(l.violationCode),s(4),d(l.solutionCode),s(8),_("disabled",l.isPolling()),s(),c(l.pollingData().length>0?48:-1),s(5),c((o=l.sequentialData())?53:-1,o)}},dependencies:[M,T,q,$,N,H,A,U,w,I,B,P],styles:["[_nghost-%COMP%]{display:block;width:100%}"]})};export{j as HigherOrderObservablesDemoComponent};
