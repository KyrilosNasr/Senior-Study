import{a as j,c as $}from"./chunk-HQCF4P2J.js";import"./chunk-OFQQBTXX.js";import{b as A}from"./chunk-VHQBVC6O.js";import{a as H,b as L,c as I,d as B,e as M,f as N,g as O}from"./chunk-AH7MQ5KM.js";import"./chunk-K33OWSJ3.js";import"./chunk-UB7WHAP5.js";import{p as T,q as W}from"./chunk-47HPTYDK.js";import{p as D}from"./chunk-FHCI6K3X.js";import"./chunk-FPPZ4BUR.js";import{E as h,Hb as x,I as b,J as y,Jb as g,Ma as l,Q as v,R as E,Xb as r,Yb as m,Z as S,ab as C,ha as k,n as f,nb as p,ob as u,pb as R,rb as _,sb as w,ub as t,va as c,vb as e,wb as s}from"./chunk-S2MQBBOY.js";import"./chunk-6HR7AMTL.js";function P(a,n){if(a&1&&(t(0,"div",45)(1,"p",61),r(2),e()()),a&2){let o=g();l(2),m(o.catchErrorResult())}}function U(a,n){if(a&1&&(t(0,"div",49)(1,"p",62),r(2),e()()),a&2){let o=g();l(2),m(o.retryResult())}}function q(a,n){if(a&1&&(t(0,"li"),r(1),e()),a&2){let o=n.$implicit;l(),m(o)}}function J(a,n){if(a&1&&(t(0,"div",50)(1,"p",63),r(2,"Retry Log:"),e(),t(3,"ul",64),_(4,q,2,1,"li",null,R),e()()),a&2){let o=g();l(4),w(o.errorLogs())}}function K(a,n){if(a&1&&(t(0,"div",54)(1,"p",61),r(2),e()()),a&2){let o=g();l(2),m(o.retryWhenResult())}}function V(a,n){if(a&1&&(t(0,"div",58)(1,"p",61),r(2),e()()),a&2){let o=g();l(2),m(o.retryBackoffResult())}}var F=class a{apiService=k($);catchErrorResult=c("");retryResult=c("");retryWhenResult=c("");retryBackoffResult=c("");errorLogs=c([]);retryAttempts=c(0);violationCode=`
// \u274C VIOLATION: No Error Handling
// Errors crash the app, no recovery, poor UX

loadData() {
  this.http.get('/api/data').subscribe({
    next: data => this.data = data,
    // No error handling - app crashes on error!
  });
}

// No retry logic
saveData(data: any) {
  this.http.post('/api/save', data).subscribe({
    next: () => console.log('Saved'),
    error: err => {
      // Error shown, but no retry - user must manually retry
      alert('Save failed!');
    }
  });
}
`;solutionCode=`
// \u2705 SOLUTION: Comprehensive Error Handling
// Graceful degradation, retry logic, user-friendly errors

@Injectable({ providedIn: 'root' })
export class ApiService {
  private http = inject(HttpClient);
  
  getData<T>(url: string): Observable<T> {
    return this.http.get<T>(url).pipe(
      retryWhen(errors => errors.pipe(
        scan((retryCount, error) => {
          if (retryCount >= 3 || error.status === 404) {
            throw error; // Don't retry on 404 or after 3 attempts
          }
          return retryCount + 1;
        }, 0),
        delay(1000) // Implement exponential backoff in production
      )),
      catchError(error => {
        this.errorHandler.handle(error);
        return of([]); // Return fallback value
      }),
      shareReplay(1) // Cache successful response
    );
  }
}

// catchError() - Handle errors without terminating stream
this.http.get('/api/data').pipe(
  catchError(error => {
    console.error(error);
    return of([]); // Return fallback value
  })
);

// retry(n) - Retry n times on error
this.http.get('/api/data').pipe(
  retry(3)
);

// retryWhen() - Custom retry logic with backoff
this.http.get('/api/data').pipe(
  retryWhen(errors => errors.pipe(
    tap(err => console.log('Retrying...', err)),
    delay(1000),
    take(3)
  ))
);
`;testCatchError(){this.catchErrorResult.set("Loading..."),this.apiService.simulateApiCall(null,500,!0).pipe(h(n=>(this.catchErrorResult.set(`Error caught: ${n.message}. Returning fallback data.`),f({data:"Fallback data"})))).subscribe(n=>{n&&this.catchErrorResult.set(`Success with fallback: ${JSON.stringify(n)}`)})}testRetry(){this.retryResult.set("Loading..."),this.errorLogs.set([]);let n=0;(()=>{n++;let i=n<3;return this.errorLogs.update(d=>[...d,`Attempt ${n} ${i?"failed":"succeeded"}`]),this.apiService.simulateApiCall("Success!",300,i)})().pipe(v(3)).subscribe({next:i=>{this.retryResult.set(`Success after retries: ${i}`)},error:i=>{this.retryResult.set(`Failed after all retries: ${i.message}`)}})}testRetryWhen(){this.retryWhenResult.set("Loading..."),this.errorLogs.set([]);let n=0;(()=>{n++;let i=n<3;return i||this.errorLogs.update(d=>[...d,"Success!"]),this.apiService.simulateApiCall("Success!",300,i)})().pipe(E(i=>i.pipe(S(()=>{this.errorLogs.update(d=>[...d,`Retrying... (attempt ${n})`])}),y(500),b(3)))).subscribe({next:i=>{this.retryWhenResult.set(`Success: ${i}`)},error:i=>{this.retryWhenResult.set(`Failed: ${i.message}`)}})}testRetryWithBackoff(){this.retryBackoffResult.set("Loading..."),this.errorLogs.set([]),this.retryAttempts.set(0),this.apiService.simulateApiCall("Success!",500,!0).pipe(j(3,500),h(n=>(this.retryBackoffResult.set("Failed after exponential backoff retries"),f(null)))).subscribe({next:n=>{n&&this.retryBackoffResult.set("Success after retries with exponential backoff!")}})}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=C({type:a,selectors:[["app-error-handling-demo"]],decls:144,vars:7,consts:[[1,"container-responsive","space-y-responsive"],[1,"card-modern","padding-responsive","hover-lift","slide-in-up"],[1,"flex","flex-col","lg:flex-row","lg:items-center","lg:justify-between","gap-6"],[1,"flex-1"],[1,"flex","items-center","gap-3","mb-4"],[1,"w-12","h-12","sm:w-14","sm:h-14","rounded-xl","bg-gradient-to-br","from-purple-500","to-pink-600","flex","items-center","justify-center","shadow-lg"],[1,"fas","fa-exclamation-triangle","text-white","text-xl","sm:text-2xl"],[1,"badge-modern","text-xs","sm:text-sm"],[1,"heading-responsive","text-gradient","mb-4"],[1,"text-responsive","text-gray-700","dark:text-gray-300"],[1,"hidden","lg:block"],[1,"w-32","h-32","rounded-2xl","bg-gradient-to-br","from-purple-500/20","to-pink-600/20","flex","items-center","justify-center"],[1,"fas","fa-exclamation-triangle","text-6xl","text-purple-500"],[1,"card-modern","hover-lift","slide-in-up"],[1,"padding-responsive","space-y-6"],[1,"w-10","h-10","rounded-lg","bg-gradient-to-br","from-blue-500","to-purple-600","flex","items-center","justify-center"],[1,"fas","fa-lightbulb","text-white"],[1,"subheading-responsive","text-gray-900","dark:text-gray-100"],[1,"text-responsive","text-gray-700","dark:text-gray-300","leading-relaxed"],[1,"glass","rounded-xl","p-6","border-l-4","border-accent"],[1,"fas","fa-star","text-accent","text-xl"],[1,"text-lg","sm:text-xl","font-semibold","text-gray-900","dark:text-gray-100"],[1,"list-modern"],[1,"text-sm","sm:text-base","text-gray-800","dark:text-gray-200"],[1,"padding-responsive"],[1,"flex","items-center","gap-3","mb-6"],[1,"w-10","h-10","rounded-lg","bg-gradient-to-br","from-green-500","to-teal-600","flex","items-center","justify-center"],[1,"fas","fa-code","text-white"],["value","0"],[1,"flex","flex-wrap","gap-2","mb-6"],["value","0",1,"flex","items-center","gap-2"],[1,"fas","fa-times-circle","text-red-500"],[1,"text-sm","sm:text-base","font-semibold"],["value","1",1,"flex","items-center","gap-2"],[1,"fas","fa-check-circle","text-green-500"],[1,"code-block-modern"],[1,"overflow-x-auto","text-sm","sm:text-base"],["value","1"],[1,"w-10","h-10","rounded-lg","bg-gradient-to-br","from-purple-500","to-pink-600","flex","items-center","justify-center"],[1,"fas","fa-play-circle","text-white"],[1,"space-y-8"],[1,"border-2","border-green-200","dark:border-green-800","rounded-lg","p-5"],[1,"text-lg","font-semibold","text-green-800","dark:text-green-200","mb-4"],[1,"text-sm","text-lg","text-gray-700","dark:text-gray-300","leading-relaxed","mb-2"],["label","Test catchError()","icon","pi pi-shield","severity","success",1,"mb-4",3,"click"],[1,"bg-green-50","dark:bg-green-900/20","p-5","rounded"],[1,"border-2","border-blue-200","dark:border-blue-800","rounded-lg","p-5"],[1,"text-lg","font-semibold","text-blue-800","dark:text-blue-200","mb-4"],["label","Test retry(3)","icon","pi pi-refresh",1,"mb-4",3,"click"],[1,"bg-blue-50","dark:bg-blue-900/20","p-5","rounded","mb-2"],[1,"bg-gray-100","dark:bg-gray-700","p-5","rounded"],[1,"border-2","border-purple-200","dark:border-purple-800","rounded-lg","p-5"],[1,"text-lg","font-semibold","text-purple-800","dark:text-purple-200","mb-4"],["label","Test retryWhen()","icon","pi pi-cog",1,"mb-4",3,"click"],[1,"bg-purple-50","dark:bg-purple-900/20","p-5","rounded"],[1,"border-2","border-orange-200","dark:border-orange-800","rounded-lg","p-5"],[1,"text-lg","font-semibold","text-orange-800","dark:text-orange-200","mb-4"],["label","Test retryWithBackoff()","icon","pi pi-bolt",1,"mb-4",3,"click"],[1,"bg-orange-50","dark:bg-orange-900/20","p-5","rounded"],[1,"w-10","h-10","rounded-lg","bg-gradient-to-br","from-teal-500","to-cyan-600","flex","items-center","justify-center"],[1,"fas","fa-graduation-cap","text-white"],[1,"text-sm"],[1,"text-sm","font-semibold"],[1,"text-xs","font-semibold","mb-2"],[1,"list-disc","list-inside","text-xs","space-y-1"]],template:function(o,i){o&1&&(t(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5),s(6,"i",6),e(),t(7,"div")(8,"span",7),r(9,"RxJS Operators"),e()()(),t(10,"h1",8),r(11," Error Handling & Retry "),e(),t(12,"p",9),r(13," Handling errors gracefully: "),t(14,"code"),r(15,"catchError()"),e(),r(16,", "),t(17,"code"),r(18,"retry()"),e(),r(19,", "),t(20,"code"),r(21,"retryWhen()"),e()()(),t(22,"div",10)(23,"div",11),s(24,"i",12),e()()()(),t(25,"p-card",13)(26,"div",14)(27,"div",4)(28,"div",15),s(29,"i",16),e(),t(30,"h2",17),r(31,"What are Error Handling Operators?"),e()(),t(32,"p",18),r(33," Error handling operators allow you to recover from errors, retry failed operations, and provide graceful degradation for better user experience. "),e(),t(34,"div",19)(35,"div",4),s(36,"i",20),t(37,"h3",21),r(38,"Key Operators"),e()(),t(39,"ul",22)(40,"li",23)(41,"strong"),r(42,"catchError():"),e(),r(43," Handle errors without terminating stream - Return fallback values "),e(),t(44,"li",23)(45,"strong"),r(46,"retry(n):"),e(),r(47," Retry n times on error - Simple retry logic "),e(),t(48,"li",23)(49,"strong"),r(50,"retryWhen():"),e(),r(51," Custom retry logic with conditions - Advanced retry strategies "),e()()()()(),t(52,"p-card",13)(53,"div",24)(54,"div",25)(55,"div",26),s(56,"i",27),e(),t(57,"h2",17),r(58,"Code Examples"),e()(),t(59,"p-tabs",28)(60,"p-tablist",29)(61,"p-tab",30),s(62,"i",31),t(63,"span",32),r(64,"Violation"),e()(),t(65,"p-tab",33),s(66,"i",34),t(67,"span",32),r(68,"Solution"),e()()(),t(69,"p-tabpanels")(70,"p-tabpanel",28)(71,"div",35)(72,"pre",36)(73,"code"),r(74),e()()()(),t(75,"p-tabpanel",37)(76,"div",35)(77,"pre",36)(78,"code"),r(79),e()()()()()()()(),t(80,"p-card",13)(81,"div",24)(82,"div",4)(83,"div",38),s(84,"i",39),e(),t(85,"h2",17),r(86,"Interactive Demo"),e()(),t(87,"div",40)(88,"div",41)(89,"h3",42),r(90,"catchError() - Error Recovery"),e(),t(91,"p",43),r(92," Simulates a failed request that recovers with fallback data. "),e(),t(93,"p-button",44),x("click",function(){return i.testCatchError()}),e(),p(94,P,3,1,"div",45),e(),t(95,"div",46)(96,"h3",47),r(97,"retry(n) - Simple Retry"),e(),t(98,"p",43),r(99," Retries failed request 3 times before giving up. "),e(),t(100,"p-button",48),x("click",function(){return i.testRetry()}),e(),p(101,U,3,1,"div",49),p(102,J,6,0,"div",50),e(),t(103,"div",51)(104,"h3",52),r(105,"retryWhen() - Custom Retry Logic"),e(),t(106,"p",43),r(107," Custom retry with delay and logging. "),e(),t(108,"p-button",53),x("click",function(){return i.testRetryWhen()}),e(),p(109,K,3,1,"div",54),e(),t(110,"div",55)(111,"h3",56),r(112,"retryWithBackoff() - Exponential Backoff"),e(),t(113,"p",43),r(114," Retries with exponentially increasing delays (500ms, 1000ms, 2000ms). "),e(),t(115,"p-button",57),x("click",function(){return i.testRetryWithBackoff()}),e(),p(116,V,3,1,"div",58),e()()()(),t(117,"p-card",13)(118,"div",24)(119,"div",25)(120,"div",59),s(121,"i",60),e(),t(122,"h2",17),r(123,"Key Takeaways"),e()(),t(124,"ul",22)(125,"li",23),r(126," Always use "),t(127,"code"),r(128,"catchError()"),e(),r(129," to handle errors gracefully - never let errors crash the app "),e(),t(130,"li",23),r(131," Use "),t(132,"code"),r(133,"retry()"),e(),r(134," for simple retry logic with fixed attempts "),e(),t(135,"li",23),r(136," Use "),t(137,"code"),r(138,"retryWhen()"),e(),r(139," for custom retry logic with conditions and delays "),e(),t(140,"li",23),r(141," Implement exponential backoff for production - reduces server load "),e(),t(142,"li",23),r(143," Don't retry on 4xx errors (client errors) - only retry on 5xx (server errors) "),e()()()()()),o&2&&(l(74),m(i.violationCode),l(5),m(i.solutionCode),l(15),u(i.catchErrorResult()?94:-1),l(7),u(i.retryResult()?101:-1),l(),u(i.errorLogs().length>0?102:-1),l(7),u(i.retryWhenResult()?109:-1),l(7),u(i.retryBackoffResult()?116:-1))},dependencies:[D,L,H,O,B,I,M,N,W,T,A],styles:["[_nghost-%COMP%]{display:block;width:100%}"]})};export{F as ErrorHandlingDemoComponent};
