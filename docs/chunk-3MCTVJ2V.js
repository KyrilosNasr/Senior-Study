import{c as z}from"./chunk-HQCF4P2J.js";import"./chunk-OFQQBTXX.js";import{b as I,e as F,i as J,p as N,s as P,t as W}from"./chunk-5TVMUKYR.js";import{b as K}from"./chunk-VHQBVC6O.js";import{a as A,b as U,c as q,d as V,e as j,f as B,g as H}from"./chunk-AH7MQ5KM.js";import"./chunk-K33OWSJ3.js";import"./chunk-UB7WHAP5.js";import{p as R,q as $}from"./chunk-47HPTYDK.js";import{p as D}from"./chunk-FHCI6K3X.js";import"./chunk-FPPZ4BUR.js";import{$b as S,C as w,Hb as g,J as c,Jb as x,Ma as m,V as C,Xb as t,Yb as h,Zb as v,_ as M,ab as O,ac as E,bc as k,ha as T,n as d,nb as u,ob as b,s as f,t as y,ub as i,va as p,vb as e,w as _,y as L}from"./chunk-S2MQBBOY.js";import"./chunk-6HR7AMTL.js";function Q(a,r){if(a&1&&(i(0,"div",23)(1,"p",44),t(2),e()()),a&2){let o=x();m(2),h(o.combineLatestResult())}}function X(a,r){if(a&1&&(i(0,"div",28)(1,"p",44),t(2),e()()),a&2){let o=x();m(2),h(o.forkJoinResult())}}function Z(a,r){if(a&1&&(i(0,"div",32)(1,"p",44),t(2),e(),i(3,"p",45),t(4,"Note: Order may vary based on timing"),e()()),a&2){let o=x();m(2),v("Merged: ",o.mergeResult())}}function ee(a,r){if(a&1&&(i(0,"div",36)(1,"p",44),t(2),e(),i(3,"p",45),t(4,"Note: Order is always preserved"),e()()),a&2){let o=x();m(2),v("Sequential: ",o.concatResult())}}function te(a,r){if(a&1&&(i(0,"div",40)(1,"p",44),t(2),e()()),a&2){let o=x();m(2),h(o.withLatestFromResult())}}var G=class a{apiService=T(z);country=p("USA");state=p("CA");combineLatestResult=p("");forkJoinResult=p("");mergeResult=p("");concatResult=p("");withLatestFromResult=p("");violationCode=`
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
`;testCombineLatest(){y([d(this.country()).pipe(C(this.country())),d(this.state()).pipe(C(this.state()))]).pipe(f(([r,o])=>`Loading cities for ${r}, ${o}...`)).subscribe(r=>{this.combineLatestResult.set(r)})}testForkJoin(){this.forkJoinResult.set("Loading..."),L({user:this.apiService.simulateApiCall({id:1,name:"John Doe"},500),settings:this.apiService.simulateApiCall({theme:"dark",lang:"en"},400),permissions:this.apiService.simulateApiCall(["read","write"],300)}).pipe(f(({user:r,settings:o,permissions:n})=>`User: ${r.name}, Theme: ${o.theme}, Permissions: ${n.join(", ")}`)).subscribe(r=>{this.forkJoinResult.set(r)})}testMerge(){this.mergeResult.set("");let r=d("Message 1").pipe(c(200)),o=d("Message 2").pipe(c(100)),n=d("Message 3").pipe(c(300));w(r,o,n).subscribe(s=>{this.mergeResult.update(l=>l?`${l}, ${s}`:s)})}testConcat(){this.concatResult.set("");let r=d("Task 1").pipe(c(200)),o=d("Task 2").pipe(c(200)),n=d("Task 3").pipe(c(200));_(r,o,n).subscribe(s=>{this.concatResult.update(l=>l?`${l} \u2192 ${s}`:s)})}testWithLatestFrom(){let r=d("save"),o=d({name:"John",email:"john@example.com"}),n=d("123");r.pipe(M(o,n),f(([s,l,Y])=>({formValue:l,userId:Y}))).subscribe(({formValue:s,userId:l})=>{this.withLatestFromResult.set(`Saved: ${s.name} (User: ${l})`)})}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=O({type:a,selectors:[["app-combination-operators-demo"]],decls:158,vars:9,consts:[[1,"max-w-7xl","mx-auto","space-y-8"],[1,"bg-white","dark:bg-gray-800","rounded-lg","shadow-lg","p-8"],[1,"text-4xl","font-bold","text-gray-900","dark:text-gray-100","mb-3"],[1,"text-lg","text-gray-700","dark:text-gray-300","leading-relaxed"],[1,"shadow-lg"],[1,"space-y-4"],[1,"text-3xl","font-semibold","text-gray-900","dark:text-gray-100","mb-3"],[1,"text-base","text-gray-700","dark:text-gray-300","leading-relaxed"],[1,"bg-blue-50","dark:bg-blue-900/30","p-5","rounded-lg","border","border-blue-200","dark:border-blue-800"],[1,"text-lg","font-semibold","text-blue-900","dark:text-blue-100","mb-3"],[1,"list-disc","list-inside","space-y-2","text-base","text-blue-800","dark:text-blue-200"],["value","0"],["value","1"],[1,"overflow-x-auto"],[1,"text-3xl","font-semibold","text-gray-900","dark:text-gray-100","mb-3","mb-4"],[1,"space-y-8"],[1,"border-2","border-green-200","dark:border-green-800","rounded-lg","p-5"],[1,"text-lg","font-semibold","text-green-800","dark:text-green-200","mb-4"],[1,"text-sm","text-lg","text-gray-700","dark:text-gray-300","leading-relaxed","mb-4"],[1,"grid","grid-cols-2","gap-5","mb-4"],[1,"block","text-sm","font-medium","mb-2"],["pInputText","","type","text",1,"w-full",3,"ngModelChange","ngModel"],["label","Test combineLatest()","icon","pi pi-link","severity","success",1,"mb-4",3,"click"],[1,"bg-green-50","dark:bg-green-900/20","p-5","rounded"],[1,"border-2","border-blue-200","dark:border-blue-800","rounded-lg","p-5"],[1,"text-lg","font-semibold","text-blue-800","dark:text-blue-200","mb-4"],[1,"text-sm","text-lg","text-gray-700","dark:text-gray-300","leading-relaxed","mb-2"],["label","Test forkJoin() (Parallel)","icon","pi pi-download",1,"mb-4",3,"click"],[1,"bg-blue-50","dark:bg-blue-900/20","p-5","rounded"],[1,"border-2","border-purple-200","dark:border-purple-800","rounded-lg","p-5"],[1,"text-lg","font-semibold","text-purple-800","dark:text-purple-200","mb-4"],["label","Test merge()","icon","pi pi-code",1,"mb-4",3,"click"],[1,"bg-purple-50","dark:bg-purple-900/20","p-5","rounded"],[1,"border-2","border-orange-200","dark:border-orange-800","rounded-lg","p-5"],[1,"text-lg","font-semibold","text-orange-800","dark:text-orange-200","mb-4"],["label","Test concat()","icon","pi pi-list",1,"mb-4",3,"click"],[1,"bg-orange-50","dark:bg-orange-900/20","p-5","rounded"],[1,"border-2","border-indigo-200","dark:border-indigo-800","rounded-lg","p-5"],[1,"text-lg","font-semibold","text-indigo-800","dark:text-indigo-200","mb-4"],["label","Test withLatestFrom()","icon","pi pi-link",1,"mb-4",3,"click"],[1,"bg-indigo-50","dark:bg-indigo-900/20","p-5","rounded"],[1,"space-y-2","text-base","text-gray-700","dark:text-gray-300","leading-relaxed"],[1,"flex","items-start"],[1,"text-green-500","mr-2"],[1,"text-sm"],[1,"text-xs","text-lg","text-gray-700","dark:text-gray-300","leading-relaxed","mt-2"]],template:function(o,n){o&1&&(i(0,"div",0)(1,"div",1)(2,"h1",2),t(3,"Part 4: Combination Operators"),e(),i(4,"p",3),t(5," Combining multiple observables: "),i(6,"code"),t(7,"combineLatest()"),e(),t(8,", "),i(9,"code"),t(10,"forkJoin()"),e(),t(11,", "),i(12,"code"),t(13,"merge()"),e(),t(14,", "),i(15,"code"),t(16,"concat()"),e(),t(17,", "),i(18,"code"),t(19,"withLatestFrom()"),e()()(),i(20,"p-card",4)(21,"div",5)(22,"h2",6),t(23,"Combination Operators"),e(),i(24,"p",7),t(25," Combination operators merge multiple observables into one, enabling parallel loading, reactive form handling, and efficient data aggregation. "),e(),i(26,"div",8)(27,"h3",9),t(28,"Key Operators:"),e(),i(29,"ul",10)(30,"li")(31,"strong"),t(32,"combineLatest():"),e(),t(33," Emits when ANY source emits (needs all to emit once) - Forms, dependent streams"),e(),i(34,"li")(35,"strong"),t(36,"forkJoin():"),e(),t(37," Waits for ALL to complete, emits last values - Parallel HTTP requests"),e(),i(38,"li")(39,"strong"),t(40,"merge():"),e(),t(41," Emits from all sources as they emit - Multiple event sources, real-time updates"),e(),i(42,"li")(43,"strong"),t(44,"concat():"),e(),t(45," Emits sequentially, one after another - Order matters"),e(),i(46,"li")(47,"strong"),t(48,"withLatestFrom():"),e(),t(49," Combines with latest from other stream - Enriching data"),e()()()()(),i(50,"p-card",4)(51,"p-tabs",11)(52,"p-tablist")(53,"p-tab",11),t(54,"\u274C Violation"),e(),i(55,"p-tab",12),t(56,"\u2705 Solution"),e()(),i(57,"p-tabpanels")(58,"p-tabpanel",11)(59,"pre",13)(60,"code"),t(61),e()()(),i(62,"p-tabpanel",12)(63,"pre",13)(64,"code"),t(65),e()()()()()(),i(66,"p-card",4)(67,"h2",14),t(68,"Live Demo"),e(),i(69,"div",15)(70,"div",16)(71,"h3",17),t(72,"combineLatest() - Reactive Form Fields"),e(),i(73,"p",18),t(74," Simulates form fields that depend on each other (country + state \u2192 cities). "),e(),i(75,"div",19)(76,"div")(77,"label",20),t(78,"Country"),e(),i(79,"input",21),k("ngModelChange",function(l){return E(n.country,l)||(n.country=l),l}),e()(),i(80,"div")(81,"label",20),t(82,"State"),e(),i(83,"input",21),k("ngModelChange",function(l){return E(n.state,l)||(n.state=l),l}),e()()(),i(84,"p-button",22),g("click",function(){return n.testCombineLatest()}),e(),u(85,Q,3,1,"div",23),e(),i(86,"div",24)(87,"h3",25),t(88,"forkJoin() - Parallel Loading"),e(),i(89,"p",26),t(90," Loads user, settings, and permissions in parallel. Waits for all to complete. "),e(),i(91,"p-button",27),g("click",function(){return n.testForkJoin()}),e(),u(92,X,3,1,"div",28),e(),i(93,"div",29)(94,"h3",30),t(95,"merge() - Multiple Event Sources"),e(),i(96,"p",26),t(97," Merges multiple observables, emits as they arrive (order may vary). "),e(),i(98,"p-button",31),g("click",function(){return n.testMerge()}),e(),u(99,Z,5,1,"div",32),e(),i(100,"div",33)(101,"h3",34),t(102,"concat() - Sequential Execution"),e(),i(103,"p",26),t(104," Concatenates observables sequentially, one after another (order preserved). "),e(),i(105,"p-button",35),g("click",function(){return n.testConcat()}),e(),u(106,ee,5,1,"div",36),e(),i(107,"div",37)(108,"h3",38),t(109,"withLatestFrom() - Enrich Data"),e(),i(110,"p",26),t(111," Combines with latest from other streams without triggering emissions. "),e(),i(112,"p-button",39),g("click",function(){return n.testWithLatestFrom()}),e(),u(113,te,3,1,"div",40),e()()(),i(114,"p-card",4)(115,"h2",14),t(116,"Key Takeaways"),e(),i(117,"ul",41)(118,"li",42)(119,"span",43),t(120,"\u2713"),e(),i(121,"span"),t(122,"Use "),i(123,"code"),t(124,"forkJoin()"),e(),t(125," for parallel HTTP requests - much faster than sequential"),e()(),i(126,"li",42)(127,"span",43),t(128,"\u2713"),e(),i(129,"span"),t(130,"Use "),i(131,"code"),t(132,"combineLatest()"),e(),t(133," for reactive form field combinations"),e()(),i(134,"li",42)(135,"span",43),t(136,"\u2713"),e(),i(137,"span"),t(138,"Use "),i(139,"code"),t(140,"merge()"),e(),t(141," to combine multiple event sources (WebSocket + polling)"),e()(),i(142,"li",42)(143,"span",43),t(144,"\u2713"),e(),i(145,"span"),t(146,"Use "),i(147,"code"),t(148,"concat()"),e(),t(149," when order matters and you need sequential execution"),e()(),i(150,"li",42)(151,"span",43),t(152,"\u2713"),e(),i(153,"span"),t(154,"Use "),i(155,"code"),t(156,"withLatestFrom()"),e(),t(157," to enrich data without triggering emissions"),e()()()()()),o&2&&(m(61),h(n.violationCode),m(4),h(n.solutionCode),m(14),S("ngModel",n.country),m(4),S("ngModel",n.state),m(2),b(n.combineLatestResult()?85:-1),m(7),b(n.forkJoinResult()?92:-1),m(7),b(n.mergeResult()?99:-1),m(7),b(n.concatResult()?106:-1),m(7),b(n.withLatestFromResult()?113:-1))},dependencies:[D,U,A,H,V,q,j,B,$,R,W,P,N,I,F,J,K],styles:["[_nghost-%COMP%]{display:block;width:100%}"]})};export{G as CombinationOperatorsDemoComponent};
