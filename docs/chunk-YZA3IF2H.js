import{c as A}from"./chunk-HQCF4P2J.js";import"./chunk-OFQQBTXX.js";import{t as q}from"./chunk-5TVMUKYR.js";import{b as U}from"./chunk-VHQBVC6O.js";import{a as D,b as O,c as L,d as I,e as $,f as N,g as P}from"./chunk-AH7MQ5KM.js";import"./chunk-K33OWSJ3.js";import"./chunk-UB7WHAP5.js";import{p as R,q as w}from"./chunk-47HPTYDK.js";import{p as T}from"./chunk-FHCI6K3X.js";import"./chunk-FPPZ4BUR.js";import{F as f,Hb as u,Jb as c,L as S,Ma as o,W as M,Xb as t,Yb as l,ab as y,ha as E,m as x,n as b,nb as m,ob as d,pb as C,rb as _,s as h,sb as k,u as v,ub as i,va as p,vb as e}from"./chunk-S2MQBBOY.js";import"./chunk-6HR7AMTL.js";function W(r,a){if(r&1&&(i(0,"div",20)(1,"p",44),t(2),e()()),r&2){let n=c();o(2),l(n.mapResult())}}function B(r,a){if(r&1&&(i(0,"div",25)(1,"p",45),t(2),e()()),r&2){let n=c();o(2),l(n.switchMapResult())}}function Q(r,a){if(r&1&&(i(0,"li"),t(1),e()),r&2){let n=a.$implicit;o(),l(n)}}function F(r,a){if(r&1&&(i(0,"div",26)(1,"p",46),t(2,"Request Log:"),e(),i(3,"ul",47),_(4,Q,2,1,"li",null,C),e()()),r&2){let n=c();o(4),k(n.requestLogs())}}function G(r,a){if(r&1&&(i(0,"div",30)(1,"p",44),t(2),e()()),r&2){let n=c();o(2),l(n.mergeMapResult())}}function H(r,a){if(r&1&&(i(0,"div",34)(1,"p",44),t(2),e()()),r&2){let n=c();o(2),l(n.concatMapResult())}}function V(r,a){if(r&1&&(i(0,"div",38)(1,"p",44),t(2),e()()),r&2){let n=c();o(2),l(n.exhaustMapResult())}}var j=class r{apiService=E(A);searchQuery=p("");mapResult=p("");switchMapResult=p("");mergeMapResult=p("");concatMapResult=p("");exhaustMapResult=p("");requestLogs=p([]);violationCode=`
// \u274C VIOLATION: Wrong operator choice
// Race conditions, memory leaks, incorrect behavior

@Injectable()
export class UserService {
  private http = inject(HttpClient);
  
  // WRONG - Race condition potential
  searchUsersWrong(query: string) {
    return this.http.get(\`/api/users?q=\${query}\`).pipe(
      mergeMap(users => this.enrichUserData(users)) // DON'T DO THIS
      // Problem: If user types fast, multiple requests run
      // Latest result might arrive before earlier ones
    );
  }
  
  // WRONG - No cancellation
  saveDataWrong(data: any) {
    return this.http.post('/api/save', data).pipe(
      mergeMap(() => this.http.post('/api/log', data))
      // Problem: If called multiple times, all requests execute
    );
  }
}
`;solutionCode=`
// \u2705 SOLUTION: Correct operator selection
// Prevents race conditions, proper cancellation, sequential when needed

@Injectable()
export class UserService {
  private http = inject(HttpClient);
  
  // CORRECT - Cancels previous searches
  searchUsers(query: string) {
    return this.http.get(\`/api/users?q=\${query}\`).pipe(
      switchMap(users => this.enrichUserData(users)) // Latest search wins
    );
  }
  
  // CORRECT - Sequential processing when order matters
  processUserActions(actions: Action[]) {
    return from(actions).pipe(
      concatMap(action => this.http.post('/api/action', action)),
      toArray() // Collect all results
    );
  }
  
  // CORRECT - Prevent duplicate submissions
  saveData(data: any) {
    return this.http.post('/api/save', data).pipe(
      exhaustMap(() => this.http.post('/api/log', data))
      // Ignores new clicks while save is in progress
    );
  }
}

// Operator Selection Guide:
// map() - Simple 1-to-1 transformation
// switchMap() - Cancels previous (search, typeahead)
// mergeMap() - Parallel operations (uploads, analytics)
// concatMap() - Sequential (order matters)
// exhaustMap() - Ignore while busy (save button, login)
`;testMap(){b(1,2,3).pipe(h(a=>a*10)).subscribe(a=>{this.mapResult.set(`Result: ${a}`)})}testSwitchMap(){this.requestLogs.set([]),this.switchMapResult.set("Searching..."),x(["a","ab","abc"]).pipe(M(a=>(this.requestLogs.update(n=>[...n,`Request: "${a}"`]),this.apiService.simulateApiCall(`Results for "${a}"`,500)))).subscribe({next:a=>{this.switchMapResult.set(`Latest: ${a}`),this.requestLogs.update(n=>[...n,`Response: ${a}`])}})}testMergeMap(){this.requestLogs.set([]),this.mergeMapResult.set("Processing..."),x(["file1","file2","file3"]).pipe(v(a=>(this.requestLogs.update(n=>[...n,`Uploading: ${a}`]),this.apiService.simulateApiCall(`Uploaded: ${a}`,300)))).subscribe({next:a=>{this.mergeMapResult.set(`Completed: ${a}`),this.requestLogs.update(n=>[...n,`Done: ${a}`])}})}testConcatMap(){this.requestLogs.set([]),this.concatMapResult.set("Processing sequentially..."),x(["action1","action2","action3"]).pipe(f(a=>(this.requestLogs.update(n=>[...n,`Processing: ${a}`]),this.apiService.simulateApiCall(`Completed: ${a}`,400)))).subscribe({next:a=>{this.concatMapResult.set(`Latest: ${a}`),this.requestLogs.update(n=>[...n,`Done: ${a}`])}})}testExhaustMap(){this.requestLogs.set([]),this.exhaustMapResult.set("Ready to save..."),x(["click1","click2","click3"]).pipe(S(()=>(this.requestLogs.update(a=>[...a,"Save clicked"]),this.apiService.simulateApiCall("Saved!",1e3)))).subscribe({next:a=>{this.exhaustMapResult.set(`Result: ${a}`),this.requestLogs.update(n=>[...n,`Saved: ${a}`])}})}static \u0275fac=function(n){return new(n||r)};static \u0275cmp=y({type:r,selectors:[["app-transformation-operators-demo"]],decls:150,vars:8,consts:[[1,"max-w-7xl","mx-auto","space-y-8"],[1,"bg-white","dark:bg-gray-800","rounded-lg","shadow-lg","p-8"],[1,"text-4xl","font-bold","text-gray-900","dark:text-gray-100","mb-3"],[1,"text-lg","text-gray-700","dark:text-gray-300"],[1,"shadow-lg"],[1,"space-y-4"],[1,"text-3xl","font-semibold","text-gray-900","dark:text-gray-100","mb-3"],[1,"text-base","text-gray-700","dark:text-gray-300","leading-relaxed"],[1,"bg-blue-50","dark:bg-blue-900/30","p-5","rounded-lg","border","border-blue-200","dark:border-blue-800"],[1,"text-lg","font-semibold","text-blue-900","dark:text-blue-100","mb-3"],[1,"list-disc","list-inside","space-y-2","text-base","text-blue-800","dark:text-blue-200"],["value","0"],["value","1"],[1,"overflow-x-auto"],[1,"text-3xl","font-semibold","text-gray-900","dark:text-gray-100","mb-4"],[1,"text-gray-700","dark:text-gray-300","mb-6"],[1,"space-y-8"],[1,"border-2","border-gray-200","dark:border-gray-700","rounded-lg","p-4"],[1,"text-lg","font-semibold","text-gray-800","dark:text-gray-200","mb-4"],["label","Test map()","icon","pi pi-play",1,"mb-4",3,"click"],[1,"bg-gray-100","dark:bg-gray-700","p-4","rounded"],[1,"border-2","border-green-200","dark:border-green-800","rounded-lg","p-4"],[1,"text-lg","font-semibold","text-green-800","dark:text-green-200","mb-4"],[1,"text-sm","text-gray-600","dark:text-gray-400","mb-2"],["label","Test switchMap() (Rapid Queries)","icon","pi pi-search","severity","success",1,"mb-4",3,"click"],[1,"bg-green-50","dark:bg-green-900/20","p-4","rounded","mb-2"],[1,"bg-gray-100","dark:bg-gray-700","p-4","rounded","max-h-32","overflow-y-auto"],[1,"border-2","border-blue-200","dark:border-blue-800","rounded-lg","p-4"],[1,"text-lg","font-semibold","text-blue-800","dark:text-blue-200","mb-4"],["label","Test mergeMap() (Parallel)","icon","pi pi-upload",1,"mb-4",3,"click"],[1,"bg-blue-50","dark:bg-blue-900/20","p-4","rounded"],[1,"border-2","border-purple-200","dark:border-purple-800","rounded-lg","p-4"],[1,"text-lg","font-semibold","text-purple-800","dark:text-purple-200","mb-4"],["label","Test concatMap() (Sequential)","icon","pi pi-list",1,"mb-4",3,"click"],[1,"bg-purple-50","dark:bg-purple-900/20","p-4","rounded"],[1,"border-2","border-orange-200","dark:border-orange-800","rounded-lg","p-4"],[1,"text-lg","font-semibold","text-orange-800","dark:text-orange-200","mb-4"],["label","Test exhaustMap() (Save Button)","icon","pi pi-save",1,"mb-4",3,"click"],[1,"bg-orange-50","dark:bg-orange-900/20","p-4","rounded"],[1,"text-3xl","font-semibold","text-gray-900","dark:text-gray-100","mb-5"],[1,"space-y-3","text-base","text-gray-700","dark:text-gray-300"],[1,"flex","items-start"],[1,"text-green-500","mr-2"],[1,"text-red-500","mr-2"],[1,"text-sm"],[1,"text-sm","font-semibold"],[1,"text-xs","font-semibold","mb-2"],[1,"list-disc","list-inside","text-xs","space-y-1"]],template:function(n,s){n&1&&(i(0,"div",0)(1,"div",1)(2,"h1",2),t(3,"Part 2: Transformation Operators"),e(),i(4,"p",3),t(5," Understanding flattening operators: "),i(6,"code"),t(7,"map()"),e(),t(8,", "),i(9,"code"),t(10,"switchMap()"),e(),t(11,", "),i(12,"code"),t(13,"mergeMap()"),e(),t(14,", "),i(15,"code"),t(16,"concatMap()"),e(),t(17,", "),i(18,"code"),t(19,"exhaustMap()"),e()()(),i(20,"p-card",4)(21,"div",5)(22,"h2",6),t(23,"Transformation Operators"),e(),i(24,"p",7),t(25," Transformation operators modify values emitted by observables. Flattening operators (switchMap, mergeMap, etc.) are critical for handling async operations and preventing race conditions. "),e(),i(26,"div",8)(27,"h3",9),t(28,"Operator Selection:"),e(),i(29,"ul",10)(30,"li")(31,"strong"),t(32,"map():"),e(),t(33," Simple 1-to-1 transformation"),e(),i(34,"li")(35,"strong"),t(36,"switchMap():"),e(),t(37," Cancels previous inner observable (search, typeahead)"),e(),i(38,"li")(39,"strong"),t(40,"mergeMap():"),e(),t(41," Maintains all inner observables concurrently (parallel operations)"),e(),i(42,"li")(43,"strong"),t(44,"concatMap():"),e(),t(45," Queues inner observables sequentially (order matters)"),e(),i(46,"li")(47,"strong"),t(48,"exhaustMap():"),e(),t(49," Ignores new values until current completes (prevent duplicates)"),e()()()()(),i(50,"p-card",4)(51,"p-tabs",11)(52,"p-tablist")(53,"p-tab",11),t(54,"\u274C Violation"),e(),i(55,"p-tab",12),t(56,"\u2705 Solution"),e()(),i(57,"p-tabpanels")(58,"p-tabpanel",11)(59,"pre",13)(60,"code"),t(61),e()()(),i(62,"p-tabpanel",12)(63,"pre",13)(64,"code"),t(65),e()()()()()(),i(66,"p-card",4)(67,"h2",14),t(68,"Live Demo"),e(),i(69,"p",15),t(70," Test each operator to see how they handle multiple emissions differently. "),e(),i(71,"div",16)(72,"div",17)(73,"h3",18),t(74,"map() - Simple Transformation"),e(),i(75,"p-button",19),u("click",function(){return s.testMap()}),e(),m(76,W,3,1,"div",20),e(),i(77,"div",21)(78,"h3",22),t(79,"switchMap() - Cancels Previous"),e(),i(80,"p",23),t(81," Simulates rapid search queries. Notice how only the latest result is shown. "),e(),i(82,"p-button",24),u("click",function(){return s.testSwitchMap()}),e(),m(83,B,3,1,"div",25),m(84,F,6,0,"div",26),e(),i(85,"div",27)(86,"h3",28),t(87,"mergeMap() - Parallel Execution"),e(),i(88,"p",23),t(89," Simulates parallel file uploads. All requests execute concurrently. "),e(),i(90,"p-button",29),u("click",function(){return s.testMergeMap()}),e(),m(91,G,3,1,"div",30),e(),i(92,"div",31)(93,"h3",32),t(94,"concatMap() - Sequential Execution"),e(),i(95,"p",23),t(96," Simulates sequential actions. Each action waits for the previous to complete. "),e(),i(97,"p-button",33),u("click",function(){return s.testConcatMap()}),e(),m(98,H,3,1,"div",34),e(),i(99,"div",35)(100,"h3",36),t(101,"exhaustMap() - Ignore While Busy"),e(),i(102,"p",23),t(103," Simulates rapid save clicks. Only the first click is processed, others are ignored. "),e(),i(104,"p-button",37),u("click",function(){return s.testExhaustMap()}),e(),m(105,V,3,1,"div",38),e()()(),i(106,"p-card",4)(107,"h2",39),t(108,"Key Takeaways"),e(),i(109,"ul",40)(110,"li",41)(111,"span",42),t(112,"\u2713"),e(),i(113,"span"),t(114,"Use "),i(115,"code"),t(116,"switchMap()"),e(),t(117," for search/typeahead - cancels previous requests"),e()(),i(118,"li",41)(119,"span",42),t(120,"\u2713"),e(),i(121,"span"),t(122,"Use "),i(123,"code"),t(124,"mergeMap()"),e(),t(125," for parallel independent operations (uploads, analytics)"),e()(),i(126,"li",41)(127,"span",42),t(128,"\u2713"),e(),i(129,"span"),t(130,"Use "),i(131,"code"),t(132,"concatMap()"),e(),t(133," when order matters (sequential updates, transactions)"),e()(),i(134,"li",41)(135,"span",42),t(136,"\u2713"),e(),i(137,"span"),t(138,"Use "),i(139,"code"),t(140,"exhaustMap()"),e(),t(141," to prevent duplicate submissions (save button, login)"),e()(),i(142,"li",41)(143,"span",43),t(144,"\u2717"),e(),i(145,"span"),t(146,"Never use "),i(147,"code"),t(148,"mergeMap()"),e(),t(149," for search - causes race conditions!"),e()()()()()),n&2&&(o(61),l(s.violationCode),o(4),l(s.solutionCode),o(11),d(s.mapResult()?76:-1),o(7),d(s.switchMapResult()?83:-1),o(),d(s.requestLogs().length>0?84:-1),o(7),d(s.mergeMapResult()?91:-1),o(7),d(s.concatMapResult()?98:-1),o(7),d(s.exhaustMapResult()?105:-1))},dependencies:[T,O,D,P,I,L,$,N,w,R,q,U],styles:["[_nghost-%COMP%]{display:block;width:100%}"]})};export{j as TransformationOperatorsDemoComponent};
