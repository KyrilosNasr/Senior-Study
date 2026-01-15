import{c as z}from"./chunk-7IKJME7E.js";import"./chunk-NUMUFXKH.js";import{b as I,e as $,i as F,s as J,v as N,w as P}from"./chunk-DEDY34HR.js";import{a as K}from"./chunk-NMPCLWFH.js";import"./chunk-NGL2KP4B.js";import{b as H}from"./chunk-S5R4RPRN.js";import{a as A,b as U,c as q,d as V,e as B}from"./chunk-QULNL4D5.js";import"./chunk-4DGHZC6K.js";import{a as W,b as j}from"./chunk-DTTSOEG2.js";import"./chunk-QVFIZX54.js";import"./chunk-4O3FVBGX.js";import"./chunk-7XHGMHQI.js";import"./chunk-CX3Q4OJ4.js";import{r as R}from"./chunk-M52WRTAU.js";import"./chunk-FPPZ4BUR.js";import{C as M,Db as b,Eb as g,J as u,Kb as t,Lb as e,Mb as p,V as C,Xb as x,Za as m,Zb as h,_ as T,ha as O,lc as i,mc as f,n as d,nb as D,nc as S,pc as E,qc as y,rc as k,s as v,t as _,va as c,w,y as L}from"./chunk-3ITXA53T.js";import"./chunk-6HR7AMTL.js";function Q(a,r){if(a&1&&(t(0,"div",48)(1,"p",68),i(2),e()()),a&2){let o=h();m(2),f(o.combineLatestResult())}}function X(a,r){if(a&1&&(t(0,"div",53)(1,"p",68),i(2),e()()),a&2){let o=h();m(2),f(o.forkJoinResult())}}function Z(a,r){if(a&1&&(t(0,"div",57)(1,"p",68),i(2),e(),t(3,"p",69),i(4,"Note: Order may vary based on timing"),e()()),a&2){let o=h();m(2),S("Merged: ",o.mergeResult())}}function ee(a,r){if(a&1&&(t(0,"div",61)(1,"p",68),i(2),e(),t(3,"p",69),i(4,"Note: Order is always preserved"),e()()),a&2){let o=h();m(2),S("Sequential: ",o.concatResult())}}function te(a,r){if(a&1&&(t(0,"div",65)(1,"p",68),i(2),e()()),a&2){let o=h();m(2),f(o.withLatestFromResult())}}var G=class a{apiService=O(z);country=c("USA");state=c("CA");combineLatestResult=c("");forkJoinResult=c("");mergeResult=c("");concatResult=c("");withLatestFromResult=c("");violationCode=`
// \u274C VIOLATION: Sequential Loading, No Parallelization
// Slow, inefficient, poor user experience

loadOrderDetails(orderId: string) {
  // Sequential - slow!
  this.http.get(\`/api/orders/\${orderId}\`).subscribe(order => {
    this.http.get(\`/api/customers/\${order.customerId}\`).subscribe(customer => {
      this.http.get(\`/api/orders/\${orderId}/items\`).subscribe(items => {
        // All data loaded, but took 3x longer than needed
        this.displayOrder({ order, customer, items });
      });
    });
  });
}

// No reactive form field combination
onCountryChange() {
  // Manual handling, not reactive
  this.loadStates(this.country);
}
`;solutionCode=`
// \u2705 SOLUTION: Combination Operators
// Parallel loading, reactive combinations, efficient

@Injectable()
export class OrderService {
  private http = inject(HttpClient);
  
  // forkJoin() - Parallel loading
  loadOrderDetails(orderId: string) {
    return forkJoin({
      order: this.http.get<Order>(\`/api/orders/\${orderId}\`),
      customer: this.http.get<Customer>(\`/api/customers/\${orderId}\`),
      items: this.http.get<Item[]>(\`/api/orders/\${orderId}/items\`)
    }).pipe(
      map(({ order, customer, items }) => ({
        ...order,
        customer,
        items,
        total: items.reduce((sum, item) => sum + item.price, 0)
      })),
      catchError(error => {
        console.error('Failed to load order details', error);
        return of(null); // Graceful degradation
      })
    );
  }
}

// combineLatest() - Reactive form field combination
@Component({
  template: \`
    <select [(ngModel)]="country">...</select>
    <select [(ngModel)]="state">...</select>
  \`
})
export class FormComponent {
  country = 'USA';
  state = 'CA';
  
  cities$ = combineLatest([
    this.countryControl.valueChanges.pipe(startWith(this.country)),
    this.stateControl.valueChanges.pipe(startWith(this.state))
  ]).pipe(
    switchMap(([country, state]) => this.loadCities(country, state))
  );
}

// merge() - Multiple event sources
updates$ = merge(
  this.wsService.messages$,
  this.pollingService.updates$
).subscribe(update => this.handleUpdate(update));

// withLatestFrom() - Enrich data
saveClick$.pipe(
  withLatestFrom(this.formValue$, this.userId$),
  switchMap(([_, formValue, userId]) => this.save(formValue, userId))
).subscribe();
`;testCombineLatest(){_([d(this.country()).pipe(C(this.country())),d(this.state()).pipe(C(this.state()))]).pipe(v(([r,o])=>`Loading cities for ${r}, ${o}...`)).subscribe(r=>{this.combineLatestResult.set(r)})}testForkJoin(){this.forkJoinResult.set("Loading..."),L({user:this.apiService.simulateApiCall({id:1,name:"John Doe"},500),settings:this.apiService.simulateApiCall({theme:"dark",lang:"en"},400),permissions:this.apiService.simulateApiCall(["read","write"],300)}).pipe(v(({user:r,settings:o,permissions:n})=>`User: ${r.name}, Theme: ${o.theme}, Permissions: ${n.join(", ")}`)).subscribe(r=>{this.forkJoinResult.set(r)})}testMerge(){this.mergeResult.set("");let r=d("Message 1").pipe(u(200)),o=d("Message 2").pipe(u(100)),n=d("Message 3").pipe(u(300));M(r,o,n).subscribe(s=>{this.mergeResult.update(l=>l?`${l}, ${s}`:s)})}testConcat(){this.concatResult.set("");let r=d("Task 1").pipe(u(200)),o=d("Task 2").pipe(u(200)),n=d("Task 3").pipe(u(200));w(r,o,n).subscribe(s=>{this.concatResult.update(l=>l?`${l} \u2192 ${s}`:s)})}testWithLatestFrom(){let r=d("save"),o=d({name:"John",email:"john@example.com"}),n=d("123");r.pipe(T(o,n),v(([s,l,Y])=>({formValue:l,userId:Y}))).subscribe(({formValue:s,userId:l})=>{this.withLatestFromResult.set(`Saved: ${s.name} (User: ${l})`)})}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=D({type:a,selectors:[["app-combination-operators-demo"]],decls:179,vars:9,consts:[[1,"container-responsive","space-y-responsive"],[1,"card-modern","padding-responsive","hover-lift","slide-in-up"],[1,"flex","flex-col","lg:flex-row","lg:items-center","lg:justify-between","gap-6"],[1,"flex-1"],[1,"flex","items-center","gap-3","mb-4"],[1,"w-12","h-12","sm:w-14","sm:h-14","rounded-xl","bg-gradient-to-br","from-purple-500","to-pink-600","flex","items-center","justify-center","shadow-lg"],[1,"fas","fa-code-branch","text-white","text-xl","sm:text-2xl"],[1,"badge-modern","text-xs","sm:text-sm"],[1,"heading-responsive","text-gradient","mb-4"],[1,"text-responsive","text-gray-700","dark:text-gray-300"],[1,"hidden","lg:block"],[1,"w-32","h-32","rounded-2xl","bg-gradient-to-br","from-purple-500/20","to-pink-600/20","flex","items-center","justify-center"],[1,"fas","fa-code-branch","text-6xl","text-purple-500"],[1,"card-modern","hover-lift","slide-in-up"],[1,"padding-responsive","space-y-6"],[1,"w-10","h-10","rounded-lg","bg-gradient-to-br","from-blue-500","to-purple-600","flex","items-center","justify-center"],[1,"fas","fa-lightbulb","text-white"],[1,"subheading-responsive","text-gray-900","dark:text-gray-100"],[1,"text-responsive","text-gray-700","dark:text-gray-300","leading-relaxed"],[1,"glass","rounded-xl","p-6","border-l-4","border-accent"],[1,"fas","fa-star","text-accent","text-xl"],[1,"text-lg","sm:text-xl","font-semibold","text-gray-900","dark:text-gray-100"],[1,"list-modern"],[1,"text-sm","sm:text-base","text-gray-800","dark:text-gray-200"],[1,"padding-responsive"],[1,"flex","items-center","gap-3","mb-6"],[1,"w-10","h-10","rounded-lg","bg-gradient-to-br","from-green-500","to-teal-600","flex","items-center","justify-center"],[1,"fas","fa-code","text-white"],["value","0"],[1,"flex","flex-wrap","gap-2","mb-6"],["value","0",1,"flex","items-center","gap-2"],[1,"fas","fa-times-circle","text-red-500"],[1,"text-sm","sm:text-base","font-semibold"],["value","1",1,"flex","items-center","gap-2"],[1,"fas","fa-check-circle","text-green-500"],[1,"code-block-modern"],[1,"overflow-x-auto","text-sm","sm:text-base"],["value","1"],[1,"w-10","h-10","rounded-lg","bg-gradient-to-br","from-purple-500","to-pink-600","flex","items-center","justify-center"],[1,"fas","fa-play-circle","text-white"],[1,"space-y-8"],[1,"border-2","border-green-200","dark:border-green-800","rounded-lg","p-5"],[1,"text-lg","font-semibold","text-green-800","dark:text-green-200","mb-4"],[1,"text-sm","text-lg","text-gray-700","dark:text-gray-300","leading-relaxed","mb-4"],[1,"grid","grid-cols-2","gap-5","mb-4"],[1,"block","text-sm","font-medium","mb-2"],["pInputText","","type","text",1,"w-full",3,"ngModelChange","ngModel"],["label","Test combineLatest()","icon","pi pi-link",1,"mb-4",3,"buttonClick"],[1,"bg-green-50","dark:bg-green-900/20","p-5","rounded"],[1,"border-2","border-blue-200","dark:border-blue-800","rounded-lg","p-5"],[1,"text-lg","font-semibold","text-blue-800","dark:text-blue-200","mb-4"],[1,"text-sm","text-lg","text-gray-700","dark:text-gray-300","leading-relaxed","mb-2"],["label","Test forkJoin() (Parallel)","icon","pi pi-download",1,"mb-4",3,"buttonClick"],[1,"bg-blue-50","dark:bg-blue-900/20","p-5","rounded"],[1,"border-2","border-purple-200","dark:border-purple-800","rounded-lg","p-5"],[1,"text-lg","font-semibold","text-purple-800","dark:text-purple-200","mb-4"],["label","Test merge()","icon","pi pi-code",1,"mb-4",3,"buttonClick"],[1,"bg-purple-50","dark:bg-purple-900/20","p-5","rounded"],[1,"border-2","border-orange-200","dark:border-orange-800","rounded-lg","p-5"],[1,"text-lg","font-semibold","text-orange-800","dark:text-orange-200","mb-4"],["label","Test concat()","icon","pi pi-list",1,"mb-4",3,"buttonClick"],[1,"bg-orange-50","dark:bg-orange-900/20","p-5","rounded"],[1,"border-2","border-indigo-200","dark:border-indigo-800","rounded-lg","p-5"],[1,"text-lg","font-semibold","text-indigo-800","dark:text-indigo-200","mb-4"],["label","Test withLatestFrom()","icon","pi pi-link",1,"mb-4",3,"buttonClick"],[1,"bg-indigo-50","dark:bg-indigo-900/20","p-5","rounded"],[1,"w-10","h-10","rounded-lg","bg-gradient-to-br","from-teal-500","to-cyan-600","flex","items-center","justify-center"],[1,"fas","fa-graduation-cap","text-white"],[1,"text-sm"],[1,"text-xs","text-lg","text-gray-700","dark:text-gray-300","leading-relaxed","mt-2"]],template:function(o,n){o&1&&(t(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5),p(6,"i",6),e(),t(7,"div")(8,"span",7),i(9,"RxJS Operators"),e()()(),t(10,"h1",8),i(11," Combination Operators "),e(),t(12,"p",9),i(13," Combining multiple observables: "),t(14,"code"),i(15,"combineLatest()"),e(),i(16,", "),t(17,"code"),i(18,"forkJoin()"),e(),i(19,", "),t(20,"code"),i(21,"merge()"),e(),i(22,", "),t(23,"code"),i(24,"concat()"),e(),i(25,", "),t(26,"code"),i(27,"withLatestFrom()"),e()()(),t(28,"div",10)(29,"div",11),p(30,"i",12),e()()()(),t(31,"p-card",13)(32,"div",14)(33,"div",4)(34,"div",15),p(35,"i",16),e(),t(36,"h2",17),i(37,"What are Combination Operators?"),e()(),t(38,"p",18),i(39," Combination operators merge multiple observables into one, enabling parallel loading, reactive form handling, and efficient data aggregation. "),e(),t(40,"div",19)(41,"div",4),p(42,"i",20),t(43,"h3",21),i(44,"Key Operators"),e()(),t(45,"ul",22)(46,"li",23)(47,"strong"),i(48,"combineLatest():"),e(),i(49," Emits when ANY source emits (needs all to emit once) - Forms, dependent streams "),e(),t(50,"li",23)(51,"strong"),i(52,"forkJoin():"),e(),i(53," Waits for ALL to complete, emits last values - Parallel HTTP requests "),e(),t(54,"li",23)(55,"strong"),i(56,"merge():"),e(),i(57," Emits from all sources as they emit - Multiple event sources, real-time updates "),e(),t(58,"li",23)(59,"strong"),i(60,"concat():"),e(),i(61," Emits sequentially, one after another - Order matters "),e(),t(62,"li",23)(63,"strong"),i(64,"withLatestFrom():"),e(),i(65," Combines with latest from other stream - Enriching data "),e()()()()(),t(66,"p-card",13)(67,"div",24)(68,"div",25)(69,"div",26),p(70,"i",27),e(),t(71,"h2",17),i(72,"Code Examples"),e()(),t(73,"p-tabs",28)(74,"p-tablist",29)(75,"p-tab",30),p(76,"i",31),t(77,"span",32),i(78,"Violation"),e()(),t(79,"p-tab",33),p(80,"i",34),t(81,"span",32),i(82,"Solution"),e()()(),t(83,"p-tabpanels")(84,"p-tabpanel",28)(85,"div",35)(86,"pre",36)(87,"code"),i(88),e()()()(),t(89,"p-tabpanel",37)(90,"div",35)(91,"pre",36)(92,"code"),i(93),e()()()()()()()(),t(94,"p-card",13)(95,"div",24)(96,"div",4)(97,"div",38),p(98,"i",39),e(),t(99,"h2",17),i(100,"Interactive Demo"),e()(),t(101,"div",40)(102,"div",41)(103,"h3",42),i(104,"combineLatest() - Reactive Form Fields"),e(),t(105,"p",43),i(106," Simulates form fields that depend on each other (country + state \u2192 cities). "),e(),t(107,"div",44)(108,"div")(109,"label",45),i(110,"Country"),e(),t(111,"input",46),k("ngModelChange",function(l){return y(n.country,l)||(n.country=l),l}),e()(),t(112,"div")(113,"label",45),i(114,"State"),e(),t(115,"input",46),k("ngModelChange",function(l){return y(n.state,l)||(n.state=l),l}),e()()(),t(116,"app-enhanced-button",47),x("buttonClick",function(){return n.testCombineLatest()}),e(),b(117,Q,3,1,"div",48),e(),t(118,"div",49)(119,"h3",50),i(120,"forkJoin() - Parallel Loading"),e(),t(121,"p",51),i(122," Loads user, settings, and permissions in parallel. Waits for all to complete. "),e(),t(123,"app-enhanced-button",52),x("buttonClick",function(){return n.testForkJoin()}),e(),b(124,X,3,1,"div",53),e(),t(125,"div",54)(126,"h3",55),i(127,"merge() - Multiple Event Sources"),e(),t(128,"p",51),i(129," Merges multiple observables, emits as they arrive (order may vary). "),e(),t(130,"app-enhanced-button",56),x("buttonClick",function(){return n.testMerge()}),e(),b(131,Z,5,1,"div",57),e(),t(132,"div",58)(133,"h3",59),i(134,"concat() - Sequential Execution"),e(),t(135,"p",51),i(136," Concatenates observables sequentially, one after another (order preserved). "),e(),t(137,"app-enhanced-button",60),x("buttonClick",function(){return n.testConcat()}),e(),b(138,ee,5,1,"div",61),e(),t(139,"div",62)(140,"h3",63),i(141,"withLatestFrom() - Enrich Data"),e(),t(142,"p",51),i(143," Combines with latest from other streams without triggering emissions. "),e(),t(144,"app-enhanced-button",64),x("buttonClick",function(){return n.testWithLatestFrom()}),e(),b(145,te,3,1,"div",65),e()()()(),t(146,"p-card",13)(147,"div",24)(148,"div",25)(149,"div",66),p(150,"i",67),e(),t(151,"h2",17),i(152,"Key Takeaways"),e()(),t(153,"ul",22)(154,"li",23),i(155," Use "),t(156,"code"),i(157,"forkJoin()"),e(),i(158," for parallel HTTP requests - much faster than sequential "),e(),t(159,"li",23),i(160," Use "),t(161,"code"),i(162,"combineLatest()"),e(),i(163," for reactive form field combinations "),e(),t(164,"li",23),i(165," Use "),t(166,"code"),i(167,"merge()"),e(),i(168," to combine multiple event sources (WebSocket + polling) "),e(),t(169,"li",23),i(170," Use "),t(171,"code"),i(172,"concat()"),e(),i(173," when order matters and you need sequential execution "),e(),t(174,"li",23),i(175," Use "),t(176,"code"),i(177,"withLatestFrom()"),e(),i(178," to enrich data without triggering emissions "),e()()()()()),o&2&&(m(88),f(n.violationCode),m(5),f(n.solutionCode),m(18),E("ngModel",n.country),m(4),E("ngModel",n.state),m(2),g(n.combineLatestResult()?117:-1),m(7),g(n.forkJoinResult()?124:-1),m(7),g(n.mergeResult()?131:-1),m(7),g(n.concatResult()?138:-1),m(7),g(n.withLatestFromResult()?145:-1))},dependencies:[R,j,W,B,U,A,q,V,K,P,N,J,I,$,F,H],styles:["[_nghost-%COMP%]{display:block;width:100%}"]})};export{G as CombinationOperatorsDemoComponent};
