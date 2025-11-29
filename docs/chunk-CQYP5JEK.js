import{a as w}from"./chunk-E3S34OQ5.js";import{c as D}from"./chunk-ZIKL4GMZ.js";import"./chunk-PVYFTFE3.js";import{b as _}from"./chunk-KJPPBXDO.js";import{a as h,b as f,c as y,d as R,e as q,f as E,g as T}from"./chunk-6IHYB2AV.js";import"./chunk-IMEODX4F.js";import"./chunk-PRB5TZSC.js";import{p as S,q as C}from"./chunk-H3I524XT.js";import{p as k}from"./chunk-EFMPFDS6.js";import"./chunk-4IVXAVEU.js";import{Ab as e,Bb as t,Nb as b,Sa as l,ac as i,ba as x,bc as o,g,gb as v,pa as u,vb as p,xb as c,yb as m}from"./chunk-ANFRTOHF.js";import"./chunk-6HR7AMTL.js";function $(s,n){if(s&1&&(e(0,"li"),i(1),t()),s&2){let r=n.$implicit;l(),o(r)}}function O(s,n){if(s&1&&(e(0,"li"),i(1),t()),s&2){let r=n.$implicit;l(),o(r)}}function P(s,n){if(s&1&&(e(0,"li"),i(1),t()),s&2){let r=n.$implicit;l(),o(r)}}var M=class s{deduplicationService=x(w);apiService=x(D);queue$=new g;raceConditionResults=u([]);deduplicatedResults=u([]);queuedResults=u([]);violationCode=`
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
`;constructor(){}testRaceCondition(){this.raceConditionResults.set([]);for(let n=0;n<3;n++)this.apiService.simulateApiCall(`Request ${n}`,500).subscribe({next:r=>{this.raceConditionResults.update(a=>[...a,`Result: ${r}`])}})}testDeduplication(){this.deduplicatedResults.set([]);for(let n=0;n<3;n++)this.deduplicationService.deduplicate("same-request",()=>this.apiService.simulateApiCall("Deduplicated",500)).subscribe({next:r=>{this.deduplicatedResults.update(a=>[...a,`Result: ${r}`])}})}testQueue(){this.queuedResults.set([]);for(let n=0;n<3;n++){let r=n;this.apiService.simulateApiCall(`Task ${r}`,300).subscribe({next:d=>{this.queuedResults.update(I=>[...I,`Queued: ${d}`])}})}}static \u0275fac=function(r){return new(r||s)};static \u0275cmp=v({type:s,selectors:[["app-race-conditions-demo"]],decls:96,vars:2,consts:[[1,"max-w-7xl","mx-auto","space-y-6"],[1,"bg-white","dark:bg-gray-800","rounded-lg","shadow-md","p-6"],[1,"text-3xl","font-bold","text-gray-800","dark:text-gray-200","mb-2"],[1,"text-gray-600","dark:text-gray-400"],[1,"shadow-md"],[1,"space-y-4"],[1,"text-2xl","font-semibold","text-gray-800","dark:text-gray-200"],[1,"text-gray-700","dark:text-gray-300"],[1,"bg-red-50","dark:bg-red-900/20","p-4","rounded-lg"],[1,"font-semibold","text-red-900","dark:text-red-200","mb-2"],[1,"list-disc","list-inside","space-y-1","text-red-800","dark:text-red-300"],["value","0"],["value","1"],[1,"bg-gray-900","text-gray-100","p-4","rounded-lg","overflow-x-auto","text-sm"],[1,"text-2xl","font-semibold","text-gray-800","dark:text-gray-200","mb-4"],[1,"space-y-6"],[1,"border-2","border-red-200","dark:border-red-800","rounded-lg","p-4"],[1,"text-lg","font-semibold","text-red-800","dark:text-red-200","mb-4"],["label","Trigger Race Condition","icon","pi pi-exclamation-triangle","severity","danger",1,"mb-4",3,"click"],[1,"bg-red-50","dark:bg-red-900/20","p-4","rounded"],[1,"list-disc","list-inside"],[1,"border-2","border-green-200","dark:border-green-800","rounded-lg","p-4"],[1,"text-lg","font-semibold","text-green-800","dark:text-green-200","mb-4"],["label","Test Deduplication","icon","pi pi-check","severity","success",1,"mb-4",3,"click"],[1,"bg-green-50","dark:bg-green-900/20","p-4","rounded"],[1,"text-sm","text-green-700","dark:text-green-300","mt-2"],[1,"border-2","border-blue-200","dark:border-blue-800","rounded-lg","p-4"],[1,"text-lg","font-semibold","text-blue-800","dark:text-blue-200","mb-4"],["label","Test Queue","icon","pi pi-list",1,"mb-4",3,"click"],[1,"bg-blue-50","dark:bg-blue-900/20","p-4","rounded"],[1,"text-sm","text-blue-700","dark:text-blue-300","mt-2"],[1,"space-y-2","text-gray-700","dark:text-gray-300"],[1,"flex","items-start"],[1,"text-green-500","mr-2"]],template:function(r,a){r&1&&(e(0,"div",0)(1,"div",1)(2,"h1",2),i(3,"Race Condition Prevention"),t(),e(4,"p",3),i(5," Preventing race conditions with request deduplication and sequential processing queues. "),t()(),e(6,"p-card",4)(7,"div",5)(8,"h2",6),i(9,"Race Conditions"),t(),e(10,"p",7),i(11," Race conditions occur when multiple operations execute simultaneously, leading to unpredictable results. RxJS provides patterns to prevent these issues. "),t(),e(12,"div",8)(13,"h3",9),i(14,"Common Scenarios:"),t(),e(15,"ul",10)(16,"li"),i(17,"Rapid button clicks causing duplicate requests"),t(),e(18,"li"),i(19,"Multiple components requesting same data"),t(),e(20,"li"),i(21,"Sequential operations executed out of order"),t(),e(22,"li"),i(23,"Concurrent updates causing data inconsistency"),t()()()()(),e(24,"p-card",4)(25,"p-tabs",11)(26,"p-tablist")(27,"p-tab",11),i(28,"\u274C Violation"),t(),e(29,"p-tab",12),i(30,"\u2705 Solution"),t()(),e(31,"p-tabpanels")(32,"p-tabpanel",11)(33,"pre",13)(34,"code"),i(35),t()()(),e(36,"p-tabpanel",12)(37,"pre",13)(38,"code"),i(39),t()()()()()(),e(40,"p-card",4)(41,"h2",14),i(42,"Live Demo"),t(),e(43,"div",15)(44,"div",16)(45,"h3",17),i(46,"Race Condition (3 simultaneous requests)"),t(),e(47,"p-button",18),b("click",function(){return a.testRaceCondition()}),t(),e(48,"div",19)(49,"ul",20),c(50,$,2,1,"li",null,p),t()()(),e(52,"div",21)(53,"h3",22),i(54,"Deduplication (Same request 3 times)"),t(),e(55,"p-button",23),b("click",function(){return a.testDeduplication()}),t(),e(56,"div",24)(57,"ul",20),c(58,O,2,1,"li",null,p),t(),e(60,"p",25),i(61," Notice: Only 1 actual request made, but 3 subscribers get the result "),t()()(),e(62,"div",26)(63,"h3",27),i(64,"Sequential Queue (3 tasks)"),t(),e(65,"p-button",28),b("click",function(){return a.testQueue()}),t(),e(66,"div",29)(67,"ul",20),c(68,P,2,1,"li",null,p),t(),e(70,"p",30),i(71," Notice: Tasks execute one after another, maintaining order "),t()()()()(),e(72,"p-card",4)(73,"h2",14),i(74,"Key Takeaways"),t(),e(75,"ul",31)(76,"li",32)(77,"span",33),i(78,"\u2713"),t(),e(79,"span"),i(80,"Use request deduplication to prevent duplicate API calls"),t()(),e(81,"li",32)(82,"span",33),i(83,"\u2713"),t(),e(84,"span"),i(85,"Use sequential queues (concatMap) when order matters"),t()(),e(86,"li",32)(87,"span",33),i(88,"\u2713"),t(),e(89,"span"),i(90,"Combine with shareReplay to share results across subscribers"),t()(),e(91,"li",32)(92,"span",33),i(93,"\u2713"),t(),e(94,"span"),i(95,"Use exhaustMap to ignore new requests while one is in progress"),t()()()()()),r&2&&(l(35),o(a.violationCode),l(4),o(a.solutionCode),l(11),m(a.raceConditionResults()),l(8),m(a.deduplicatedResults()),l(10),m(a.queuedResults()))},dependencies:[k,f,h,T,R,y,q,E,C,S,_],styles:["[_nghost-%COMP%]{display:block;width:100%}"]})};export{M as RaceConditionsDemoComponent};
