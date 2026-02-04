import{a as R}from"./chunk-OUYGT5I4.js";import{c as B}from"./chunk-LFGOYEYT.js";import"./chunk-CMZ4I467.js";import{d as q,e as T}from"./chunk-26I6QKGV.js";import"./chunk-DS4DKGB5.js";import"./chunk-YPUDPSQH.js";import"./chunk-DEGWJE5E.js";import{b as L}from"./chunk-PKLQWDLD.js";import{a as N,b as A,c as U,d as $,e as J}from"./chunk-3ZW5MUH5.js";import"./chunk-SHEHAVXT.js";import{a as H,b as j}from"./chunk-ST7OVFPO.js";import"./chunk-3N3GZBUB.js";import"./chunk-4O3FVBGX.js";import"./chunk-QCJRPF2F.js";import"./chunk-IZU7C3FN.js";import{b as M}from"./chunk-JBIPGRVB.js";import{q as _,r as I}from"./chunk-BO564T5E.js";import"./chunk-FPPZ4BUR.js";import{Cb as g,Db as b,Eb as D,Ec as h,Fc as v,Gb as k,Hb as w,Ib as O,Jb as e,Kb as t,Lb as r,W as E,Wb as u,Yb as P,Za as o,ha as c,kc as i,lc as m,nb as C,s as S,va as p,y}from"./chunk-6P3ZW5D6.js";import{a as x,b as f}from"./chunk-6HR7AMTL.js";function G(a,l){if(a&1&&(e(0,"li"),i(1),h(2,"json"),t()),a&2){let n=l.$implicit;o(),m(v(2,1,n))}}function K(a,l){if(a&1&&(e(0,"div",46)(1,"h4",50),i(2,"Polled Data:"),t(),e(3,"ul",51),k(4,G,3,3,"li",null,D),t()()),a&2){let n=P();o(4),w(n.pollingData())}}function V(a,l){a&1&&(e(0,"div",46)(1,"pre",52),i(2),h(3,"json"),t()()),a&2&&(o(2),m(v(3,1,l)))}var F=class a{pollingService=c(R);apiService=c(B);pollingData=p([]);sequentialData=p(null);isPolling=p(!1);violationCode=`
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
`;startPolling(){this.isPolling.set(!0),this.pollingData.set([]),this.pollingService.pollData(()=>this.apiService.simulateApiCall({timestamp:Date.now(),value:Math.random()},500),2e3).subscribe({next:l=>{this.pollingData.update(n=>[...n,l])},error:()=>{this.isPolling.set(!1)}})}testSequential(){this.apiService.simulateApiCall({id:"123",name:"John Doe"},500).pipe(E(n=>y({orders:this.apiService.simulateApiCall([{id:1,total:100}],300),preferences:this.apiService.simulateApiCall({theme:"dark"},200)}).pipe(S(({orders:s,preferences:d})=>f(x({},n),{orders:s,preferences:d}))))).subscribe(n=>{this.sequentialData.set(n)})}static \u0275fac=function(n){return new(n||a)};static \u0275cmp=C({type:a,selectors:[["app-higher-order-observables-demo"]],decls:111,vars:5,consts:[[1,"container-responsive","space-y-responsive"],[1,"card-modern","padding-responsive","hover-lift","slide-in-up"],[1,"flex","flex-col","lg:flex-row","lg:items-center","lg:justify-between","gap-6"],[1,"flex-1"],[1,"flex","items-center","gap-3","mb-4"],[1,"w-12","h-12","sm:w-14","sm:h-14","rounded-xl","bg-gradient-to-br","from-purple-500","to-pink-600","flex","items-center","justify-center","shadow-lg"],["name","faSolidLayerGroup",1,"text-white","text-xl","sm:text-2xl"],[1,"badge-modern","text-xs","sm:text-sm"],[1,"heading-responsive","text-gradient"],[1,"flex","items-center","gap-2"],["name","faSolidStar",1,"text-accent","text-xl"],[1,"heading-responsive","text-gradient","mb-4"],[1,"text-responsive","text-gray-700","dark:text-gray-300"],[1,"hidden","lg:block"],[1,"w-32","h-32","rounded-2xl","bg-gradient-to-br","from-purple-500/20","to-pink-600/20","flex","items-center","justify-center"],["name","faSolidLayerGroup",1,"text-6xl","text-purple-500"],[1,"card-modern","hover-lift","slide-in-up"],[1,"padding-responsive","space-y-6"],[1,"w-10","h-10","rounded-lg","bg-gradient-to-br","from-blue-500","to-purple-600","flex","items-center","justify-center"],["name","faSolidLightbulb",1,"text-white"],[1,"subheading-responsive","text-gray-900","dark:text-gray-100"],[1,"text-responsive","text-gray-700","dark:text-gray-300","leading-relaxed"],[1,"glass","rounded-xl","p-6","border-l-4","border-accent"],[1,"text-lg","sm:text-xl","font-semibold","text-gray-900","dark:text-gray-100"],[1,"list-modern"],[1,"text-sm","sm:text-base","text-gray-800","dark:text-gray-200"],[1,"padding-responsive"],[1,"flex","items-center","gap-3","mb-6"],[1,"w-10","h-10","rounded-lg","bg-gradient-to-br","from-green-500","to-teal-600","flex","items-center","justify-center"],["name","faSolidCode",1,"text-white"],["value","0"],[1,"flex","flex-wrap","gap-2","mb-6"],["value","0",1,"flex","items-center","gap-2"],["name","faSolidCircleXmark",1,"text-red-500"],[1,"text-sm","sm:text-base","font-semibold"],["value","1",1,"flex","items-center","gap-2"],["name","faSolidCircleCheck",1,"text-green-500"],[1,"code-block-modern"],[1,"overflow-x-auto","text-sm","sm:text-base"],["value","1"],[1,"w-10","h-10","rounded-lg","bg-gradient-to-br","from-purple-500","to-pink-600","flex","items-center","justify-center"],["name","faSolidPlay",1,"text-white"],[1,"space-y-8"],[1,"border-2","border-gray-200","dark:border-gray-700","rounded-lg","p-5"],[1,"text-lg","font-semibold","text-gray-800","dark:text-gray-200","mb-4"],["label","Start Polling","icon","faSolidPlay",1,"mb-4",3,"click","disabled"],[1,"bg-gray-100","dark:bg-gray-700","p-5","rounded"],["label","Load User Data (Sequential)","icon","faSolidDownload",1,"mb-4",3,"click"],[1,"w-10","h-10","rounded-lg","bg-gradient-to-br","from-teal-500","to-cyan-600","flex","items-center","justify-center"],["name","faSolidBook",1,"text-white"],[1,"font-semibold","mb-2"],[1,"list-disc","list-inside","space-y-1","text-sm"],[1,"text-sm"]],template:function(n,s){if(n&1&&(e(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5),r(6,"ng-icon",6),t(),e(7,"div",3)(8,"span",7),i(9,"RxJS"),t(),e(10,"h2",8),i(11,"Higher-Order Observables"),t()(),e(12,"div",9),r(13,"ng-icon",10)(14,"ng-icon",10)(15,"ng-icon",10),t(),e(16,"div")(17,"span",7),i(18,"RxJS Patterns"),t()()(),e(19,"h1",11),i(20," Higher-Order Observables "),t(),e(21,"p",12),i(22," Managing observables that emit other observables using flattening operators. "),t()(),e(23,"div",13)(24,"div",14),r(25,"ng-icon",15),t()()()(),e(26,"p-card",16)(27,"div",17)(28,"div",4)(29,"div",18),r(30,"ng-icon",19),t(),e(31,"h2",20),i(32,"What are Higher-Order Observables?"),t()(),e(33,"p",21),i(34," Higher-order observables are observables that emit other observables. Flattening operators like switchMap, mergeMap, concatMap, and exhaustMap handle these nested observables. "),t(),e(35,"div",22)(36,"div",4),r(37,"ng-icon",10),e(38,"h3",23),i(39,"Key Patterns"),t()(),e(40,"ul",24)(41,"li",25),i(42," Polling: Repeated data fetching at intervals "),t(),e(43,"li",25),i(44," Sequential chains: Dependent API calls "),t(),e(45,"li",25),i(46," Parallel requests: Independent operations "),t(),e(47,"li",25),i(48," Cancellation: SwitchMap cancels previous requests "),t()()()()(),e(49,"p-card",16)(50,"div",26)(51,"div",27)(52,"div",28),r(53,"ng-icon",29),t(),e(54,"h2",20),i(55,"Code Examples"),t()(),e(56,"p-tabs",30)(57,"p-tablist",31)(58,"p-tab",32),r(59,"ng-icon",33),e(60,"span",34),i(61,"Violation"),t()(),e(62,"p-tab",35),r(63,"ng-icon",36),e(64,"span",34),i(65,"Solution"),t()()(),e(66,"p-tabpanels")(67,"p-tabpanel",30)(68,"div",37)(69,"pre",38)(70,"code"),i(71),t()()()(),e(72,"p-tabpanel",39)(73,"div",37)(74,"pre",38)(75,"code"),i(76),t()()()()()()()(),e(77,"p-card",16)(78,"div",26)(79,"div",4)(80,"div",40),r(81,"ng-icon",41),t(),e(82,"h2",20),i(83,"Interactive Demo"),t()(),e(84,"div",42)(85,"div",43)(86,"h3",44),i(87,"Polling Pattern"),t(),e(88,"p-button",45),u("click",function(){return s.startPolling()}),t(),g(89,K,6,0,"div",46),t(),e(90,"div",43)(91,"h3",44),i(92,"Sequential Request Chain"),t(),e(93,"p-button",47),u("click",function(){return s.testSequential()}),t(),g(94,V,4,3,"div",46),t()()()(),e(95,"p-card",16)(96,"div",26)(97,"div",27)(98,"div",48),r(99,"ng-icon",49),t(),e(100,"h2",20),i(101,"Key Takeaways"),t()(),e(102,"ul",24)(103,"li",25),i(104," Use switchMap for cancellable operations (search, typeahead) "),t(),e(105,"li",25),i(106," Use concatMap when order matters (sequential operations) "),t(),e(107,"li",25),i(108," Use mergeMap for parallel independent operations "),t(),e(109,"li",25),i(110," Avoid nested subscriptions - use flattening operators "),t()()()()()),n&2){let d;o(71),m(s.violationCode),o(5),m(s.solutionCode),o(12),O("disabled",s.isPolling()),o(),b(s.pollingData().length>0?89:-1),o(5),b((d=s.sequentialData())?94:-1,d)}},dependencies:[M,I,j,H,J,A,N,U,$,T,q,L,_],styles:["[_nghost-%COMP%]{display:block;width:100%}"]})};export{F as HigherOrderObservablesDemoComponent};
