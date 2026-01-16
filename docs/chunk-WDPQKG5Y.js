import{a as M}from"./chunk-7224OI3Q.js";import{c as D}from"./chunk-XQUX7KCG.js";import"./chunk-JYXC555M.js";import{d as S,e as k}from"./chunk-TZQAO3FF.js";import"./chunk-IZO5M3UY.js";import"./chunk-ZY4775QE.js";import"./chunk-ZNXKPSJD.js";import{b as _}from"./chunk-62D4PAY4.js";import{a as R,b as q,c as E,d as w,e as T}from"./chunk-UVKQ3HHI.js";import"./chunk-M7M6PVNH.js";import{a as C,b as y}from"./chunk-6YR6DT4F.js";import"./chunk-7NSTPXRT.js";import"./chunk-4O3FVBGX.js";import"./chunk-XIG2QSYL.js";import"./chunk-4W5EU4G4.js";import{r as h}from"./chunk-W43CSKKG.js";import"./chunk-FPPZ4BUR.js";import{Fb as p,Hb as c,Ib as b,Kb as e,Lb as t,Mb as s,Xb as x,Za as o,g as v,ha as g,lc as i,mc as d,nb as f,va as m}from"./chunk-2VW4HCOQ.js";import"./chunk-6HR7AMTL.js";function O(l,n){if(l&1&&(e(0,"li"),i(1),t()),l&2){let r=n.$implicit;o(),d(r)}}function j(l,n){if(l&1&&(e(0,"li"),i(1),t()),l&2){let r=n.$implicit;o(),d(r)}}function P(l,n){if(l&1&&(e(0,"li"),i(1),t()),l&2){let r=n.$implicit;o(),d(r)}}var I=class l{deduplicationService=g(M);apiService=g(D);queue$=new v;raceConditionResults=m([]);deduplicatedResults=m([]);queuedResults=m([]);violationCode=`
// \u274C VIOLATION: Race Conditions
// Multiple simultaneous requests, no deduplication

onUserClick() {
  // User clicks rapidly - multiple requests!
  this.http.get('/api/user/123').subscribe(user => {
    this.user = user;
  });
}

// Or sequential operations without queue
saveData(data: Data) {
  // If called multiple times, order is unpredictable
  this.http.post('/api/save', data).subscribe();
}
`;solutionCode=`
// \u2705 SOLUTION: Request Deduplication & Queuing
// Prevent duplicate requests and ensure order

// Pattern 1: Request Deduplication
@Injectable()
export class DeduplicationService {
  private pendingRequests = new Map<string, Observable<any>>();
  
  deduplicate<T>(key: string, requestFn: () => Observable<T>): Observable<T> {
    if (this.pendingRequests.has(key)) {
      return this.pendingRequests.get(key)!; // Return existing
    }
    
    const request$ = requestFn().pipe(
      finalize(() => this.pendingRequests.delete(key)),
      shareReplay(1)
    );
    
    this.pendingRequests.set(key, request$);
    return request$;
  }
}

// Pattern 2: Sequential Queue
private queue$ = new Subject<() => Observable<any>>();

constructor() {
  this.queue$.pipe(
    concatMap(task => task()) // Process sequentially
  ).subscribe();
}

enqueue<T>(task: () => Observable<T>): Observable<T> {
  return new Observable(observer => {
    const wrappedTask = () => task().pipe(
      tap({
        next: value => observer.next(value),
        error: err => observer.error(err),
        complete: () => observer.complete()
      })
    );
    this.queue$.next(wrappedTask);
  });
}
`;constructor(){}testRaceCondition(){this.raceConditionResults.set([]);for(let n=0;n<3;n++)this.apiService.simulateApiCall(`Request ${n}`,500).subscribe({next:r=>{this.raceConditionResults.update(a=>[...a,`Result: ${r}`])}})}testDeduplication(){this.deduplicatedResults.set([]);for(let n=0;n<3;n++)this.deduplicationService.deduplicate("same-request",()=>this.apiService.simulateApiCall("Deduplicated",500)).subscribe({next:r=>{this.deduplicatedResults.update(a=>[...a,`Result: ${r}`])}})}testQueue(){this.queuedResults.set([]);for(let n=0;n<3;n++){let r=n;this.apiService.simulateApiCall(`Task ${r}`,300).subscribe({next:u=>{this.queuedResults.update($=>[...$,`Queued: ${u}`])}})}}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=f({type:l,selectors:[["app-race-conditions-demo"]],decls:120,vars:2,consts:[[1,"container-responsive","space-y-responsive"],[1,"card-modern","padding-responsive","hover-lift","slide-in-up"],[1,"flex","flex-col","lg:flex-row","lg:items-center","lg:justify-between","gap-6"],[1,"flex-1"],[1,"flex","items-center","gap-3","mb-4"],[1,"w-12","h-12","sm:w-14","sm:h-14","rounded-xl","bg-gradient-to-br","from-purple-500","to-pink-600","flex","items-center","justify-center","shadow-lg"],[1,"fas","fa-bolt","text-white","text-xl","sm:text-2xl"],[1,"badge-modern","text-xs","sm:text-sm"],[1,"heading-responsive","text-gradient","mb-4"],[1,"text-responsive","text-gray-700","dark:text-gray-300"],[1,"hidden","lg:block"],[1,"w-32","h-32","rounded-2xl","bg-gradient-to-br","from-purple-500/20","to-pink-600/20","flex","items-center","justify-center"],[1,"fas","fa-bolt","text-6xl","text-purple-500"],[1,"card-modern","hover-lift","slide-in-up"],[1,"padding-responsive","space-y-6"],[1,"w-10","h-10","rounded-lg","bg-gradient-to-br","from-blue-500","to-purple-600","flex","items-center","justify-center"],[1,"fas","fa-lightbulb","text-white"],[1,"subheading-responsive","text-gray-900","dark:text-gray-100"],[1,"text-responsive","text-gray-700","dark:text-gray-300","leading-relaxed"],[1,"glass","rounded-xl","p-6","border-l-4","border-red-500"],[1,"fas","fa-exclamation-triangle","text-red-500","text-xl"],[1,"text-lg","sm:text-xl","font-semibold","text-gray-900","dark:text-gray-100"],[1,"list-modern"],[1,"text-sm","sm:text-base","text-gray-800","dark:text-gray-200"],[1,"padding-responsive"],[1,"flex","items-center","gap-3","mb-6"],[1,"w-10","h-10","rounded-lg","bg-gradient-to-br","from-green-500","to-teal-600","flex","items-center","justify-center"],[1,"fas","fa-code","text-white"],["value","0"],[1,"flex","flex-wrap","gap-2","mb-6"],["value","0",1,"flex","items-center","gap-2"],[1,"fas","fa-times-circle","text-red-500"],[1,"text-sm","sm:text-base","font-semibold"],["value","1",1,"flex","items-center","gap-2"],[1,"fas","fa-check-circle","text-green-500"],[1,"code-block-modern"],[1,"overflow-x-auto","text-sm","sm:text-base"],["value","1"],[1,"w-10","h-10","rounded-lg","bg-gradient-to-br","from-purple-500","to-pink-600","flex","items-center","justify-center"],[1,"fas","fa-play-circle","text-white"],[1,"space-y-8"],[1,"border-2","border-red-200","dark:border-red-800","rounded-lg","p-5"],[1,"text-lg","font-semibold","text-red-800","dark:text-red-200","mb-4"],["label","Trigger Race Condition","icon","pi pi-exclamation-triangle","severity","danger",1,"mb-4",3,"click"],[1,"bg-red-50","dark:bg-red-900/20","p-5","rounded"],[1,"list-disc","list-inside"],[1,"border-2","border-green-200","dark:border-green-800","rounded-lg","p-5"],[1,"text-lg","font-semibold","text-green-800","dark:text-green-200","mb-4"],["label","Test Deduplication","icon","pi pi-check","severity","success",1,"mb-4",3,"click"],[1,"bg-green-50","dark:bg-green-900/20","p-5","rounded"],[1,"text-sm","text-green-700","dark:text-green-300","mt-2"],[1,"border-2","border-blue-200","dark:border-blue-800","rounded-lg","p-5"],[1,"text-lg","font-semibold","text-blue-800","dark:text-blue-200","mb-4"],["label","Test Queue","icon","pi pi-list",1,"mb-4",3,"click"],[1,"bg-blue-50","dark:bg-blue-900/20","p-5","rounded"],[1,"text-sm","text-blue-700","dark:text-blue-300","mt-2"],[1,"w-10","h-10","rounded-lg","bg-gradient-to-br","from-teal-500","to-cyan-600","flex","items-center","justify-center"],[1,"fas","fa-graduation-cap","text-white"]],template:function(r,a){r&1&&(e(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5),s(6,"i",6),t(),e(7,"div")(8,"span",7),i(9,"RxJS Patterns"),t()()(),e(10,"h1",8),i(11," Race Condition Prevention "),t(),e(12,"p",9),i(13," Preventing race conditions with request deduplication and sequential processing queues. "),t()(),e(14,"div",10)(15,"div",11),s(16,"i",12),t()()()(),e(17,"p-card",13)(18,"div",14)(19,"div",4)(20,"div",15),s(21,"i",16),t(),e(22,"h2",17),i(23,"What are Race Conditions?"),t()(),e(24,"p",18),i(25," Race conditions occur when multiple operations execute simultaneously, leading to unpredictable results. RxJS provides patterns to prevent these issues. "),t(),e(26,"div",19)(27,"div",4),s(28,"i",20),e(29,"h3",21),i(30,"Common Scenarios"),t()(),e(31,"ul",22)(32,"li",23),i(33," Rapid button clicks causing duplicate requests "),t(),e(34,"li",23),i(35," Multiple components requesting same data "),t(),e(36,"li",23),i(37," Sequential operations executed out of order "),t(),e(38,"li",23),i(39," Concurrent updates causing data inconsistency "),t()()()()(),e(40,"p-card",13)(41,"div",24)(42,"div",25)(43,"div",26),s(44,"i",27),t(),e(45,"h2",17),i(46,"Code Examples"),t()(),e(47,"p-tabs",28)(48,"p-tablist",29)(49,"p-tab",30),s(50,"i",31),e(51,"span",32),i(52,"Violation"),t()(),e(53,"p-tab",33),s(54,"i",34),e(55,"span",32),i(56,"Solution"),t()()(),e(57,"p-tabpanels")(58,"p-tabpanel",28)(59,"div",35)(60,"pre",36)(61,"code"),i(62),t()()()(),e(63,"p-tabpanel",37)(64,"div",35)(65,"pre",36)(66,"code"),i(67),t()()()()()()()(),e(68,"p-card",13)(69,"div",24)(70,"div",4)(71,"div",38),s(72,"i",39),t(),e(73,"h2",17),i(74,"Interactive Demo"),t()(),e(75,"div",40)(76,"div",41)(77,"h3",42),i(78,"Race Condition (3 simultaneous requests)"),t(),e(79,"p-button",43),x("click",function(){return a.testRaceCondition()}),t(),e(80,"div",44)(81,"ul",45),c(82,O,2,1,"li",null,p),t()()(),e(84,"div",46)(85,"h3",47),i(86,"Deduplication (Same request 3 times)"),t(),e(87,"p-button",48),x("click",function(){return a.testDeduplication()}),t(),e(88,"div",49)(89,"ul",45),c(90,j,2,1,"li",null,p),t(),e(92,"p",50),i(93," Notice: Only 1 actual request made, but 3 subscribers get the result "),t()()(),e(94,"div",51)(95,"h3",52),i(96,"Sequential Queue (3 tasks)"),t(),e(97,"p-button",53),x("click",function(){return a.testQueue()}),t(),e(98,"div",54)(99,"ul",45),c(100,P,2,1,"li",null,p),t(),e(102,"p",55),i(103," Notice: Tasks execute one after another, maintaining order "),t()()()()()(),e(104,"p-card",13)(105,"div",24)(106,"div",25)(107,"div",56),s(108,"i",57),t(),e(109,"h2",17),i(110,"Key Takeaways"),t()(),e(111,"ul",22)(112,"li",23),i(113," Use request deduplication to prevent duplicate API calls "),t(),e(114,"li",23),i(115," Use sequential queues (concatMap) when order matters "),t(),e(116,"li",23),i(117," Combine with shareReplay to share results across subscribers "),t(),e(118,"li",23),i(119," Use exhaustMap to ignore new requests while one is in progress "),t()()()()()),r&2&&(o(62),d(a.violationCode),o(5),d(a.solutionCode),o(15),b(a.raceConditionResults()),o(8),b(a.deduplicatedResults()),o(10),b(a.queuedResults()))},dependencies:[h,y,C,T,q,R,E,w,k,S,_],styles:["[_nghost-%COMP%]{display:block;width:100%}"]})};export{I as RaceConditionsDemoComponent};
