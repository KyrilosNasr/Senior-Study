import{a as O,c as $}from"./chunk-HQCF4P2J.js";import"./chunk-OFQQBTXX.js";import{b as A}from"./chunk-VHQBVC6O.js";import{a as W,b as H,c as L,d as B,e as I,f as M,g as N}from"./chunk-AH7MQ5KM.js";import"./chunk-K33OWSJ3.js";import"./chunk-UB7WHAP5.js";import{p as T,q as w}from"./chunk-47HPTYDK.js";import{p as D}from"./chunk-FHCI6K3X.js";import"./chunk-FPPZ4BUR.js";import{E as b,Hb as g,I as y,J as h,Jb as u,Ma as l,Q as f,R as E,Xb as t,Yb as d,Z as v,ab as k,ha as S,n as x,nb as c,ob as p,pb as C,rb as R,sb as _,ub as r,va as m,vb as e}from"./chunk-S2MQBBOY.js";import"./chunk-6HR7AMTL.js";function P(a,n){if(a&1&&(r(0,"div",20)(1,"p",37),t(2),e()()),a&2){let o=u();l(2),d(o.catchErrorResult())}}function j(a,n){if(a&1&&(r(0,"div",24)(1,"p",38),t(2),e()()),a&2){let o=u();l(2),d(o.retryResult())}}function U(a,n){if(a&1&&(r(0,"li"),t(1),e()),a&2){let o=n.$implicit;l(),d(o)}}function q(a,n){if(a&1&&(r(0,"div",25)(1,"p",39),t(2,"Retry Log:"),e(),r(3,"ul",40),R(4,U,2,1,"li",null,C),e()()),a&2){let o=u();l(4),_(o.errorLogs())}}function K(a,n){if(a&1&&(r(0,"div",29)(1,"p",37),t(2),e()()),a&2){let o=u();l(2),d(o.retryWhenResult())}}function V(a,n){if(a&1&&(r(0,"div",33)(1,"p",37),t(2),e()()),a&2){let o=u();l(2),d(o.retryBackoffResult())}}var F=class a{apiService=S($);catchErrorResult=m("");retryResult=m("");retryWhenResult=m("");retryBackoffResult=m("");errorLogs=m([]);retryAttempts=m(0);violationCode=`
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
`;testCatchError(){this.catchErrorResult.set("Loading..."),this.apiService.simulateApiCall(null,500,!0).pipe(b(n=>(this.catchErrorResult.set(`Error caught: ${n.message}. Returning fallback data.`),x({data:"Fallback data"})))).subscribe(n=>{n&&this.catchErrorResult.set(`Success with fallback: ${JSON.stringify(n)}`)})}testRetry(){this.retryResult.set("Loading..."),this.errorLogs.set([]);let n=0;(()=>{n++;let i=n<3;return this.errorLogs.update(s=>[...s,`Attempt ${n} ${i?"failed":"succeeded"}`]),this.apiService.simulateApiCall("Success!",300,i)})().pipe(f(3)).subscribe({next:i=>{this.retryResult.set(`Success after retries: ${i}`)},error:i=>{this.retryResult.set(`Failed after all retries: ${i.message}`)}})}testRetryWhen(){this.retryWhenResult.set("Loading..."),this.errorLogs.set([]);let n=0;(()=>{n++;let i=n<3;return i||this.errorLogs.update(s=>[...s,"Success!"]),this.apiService.simulateApiCall("Success!",300,i)})().pipe(E(i=>i.pipe(v(()=>{this.errorLogs.update(s=>[...s,`Retrying... (attempt ${n})`])}),h(500),y(3)))).subscribe({next:i=>{this.retryWhenResult.set(`Success: ${i}`)},error:i=>{this.retryWhenResult.set(`Failed: ${i.message}`)}})}testRetryWithBackoff(){this.retryBackoffResult.set("Loading..."),this.errorLogs.set([]),this.retryAttempts.set(0),this.apiService.simulateApiCall("Success!",500,!0).pipe(O(3,500),b(n=>(this.retryBackoffResult.set("Failed after exponential backoff retries"),x(null)))).subscribe({next:n=>{n&&this.retryBackoffResult.set("Success after retries with exponential backoff!")}})}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=k({type:a,selectors:[["app-error-handling-demo"]],decls:123,vars:7,consts:[[1,"max-w-7xl","mx-auto","space-y-8"],[1,"bg-white","dark:bg-gray-800","rounded-lg","shadow-lg","p-8"],[1,"text-4xl","font-bold","text-gray-900","dark:text-gray-100","mb-3"],[1,"text-lg","text-gray-700","dark:text-gray-300"],[1,"shadow-lg"],[1,"space-y-4"],[1,"text-3xl","font-semibold","text-gray-900","dark:text-gray-100","mb-3"],[1,"text-base","text-gray-700","dark:text-gray-300","leading-relaxed"],[1,"bg-blue-50","dark:bg-blue-900/30","p-5","rounded-lg","border","border-blue-200","dark:border-blue-800"],[1,"text-lg","font-semibold","text-blue-900","dark:text-blue-100","mb-3"],[1,"list-disc","list-inside","space-y-2","text-base","text-blue-800","dark:text-blue-200"],["value","0"],["value","1"],[1,"overflow-x-auto"],[1,"text-3xl","font-semibold","text-gray-900","dark:text-gray-100","mb-3","mb-4"],[1,"space-y-8"],[1,"border-2","border-green-200","dark:border-green-800","rounded-lg","p-5"],[1,"text-lg","font-semibold","text-green-800","dark:text-green-200","mb-4"],[1,"text-sm","text-lg","text-gray-700","dark:text-gray-300","leading-relaxed","mb-2"],["label","Test catchError()","icon","pi pi-shield","severity","success",1,"mb-4",3,"click"],[1,"bg-green-50","dark:bg-green-900/20","p-5","rounded"],[1,"border-2","border-blue-200","dark:border-blue-800","rounded-lg","p-5"],[1,"text-lg","font-semibold","text-blue-800","dark:text-blue-200","mb-4"],["label","Test retry(3)","icon","pi pi-refresh",1,"mb-4",3,"click"],[1,"bg-blue-50","dark:bg-blue-900/20","p-5","rounded","mb-2"],[1,"bg-gray-100","dark:bg-gray-700","p-5","rounded"],[1,"border-2","border-purple-200","dark:border-purple-800","rounded-lg","p-5"],[1,"text-lg","font-semibold","text-purple-800","dark:text-purple-200","mb-4"],["label","Test retryWhen()","icon","pi pi-cog",1,"mb-4",3,"click"],[1,"bg-purple-50","dark:bg-purple-900/20","p-5","rounded"],[1,"border-2","border-orange-200","dark:border-orange-800","rounded-lg","p-5"],[1,"text-lg","font-semibold","text-orange-800","dark:text-orange-200","mb-4"],["label","Test retryWithBackoff()","icon","pi pi-bolt",1,"mb-4",3,"click"],[1,"bg-orange-50","dark:bg-orange-900/20","p-5","rounded"],[1,"space-y-2","text-base","text-gray-700","dark:text-gray-300","leading-relaxed"],[1,"flex","items-start"],[1,"text-green-500","mr-2"],[1,"text-sm"],[1,"text-sm","font-semibold"],[1,"text-xs","font-semibold","mb-2"],[1,"list-disc","list-inside","text-xs","space-y-1"]],template:function(o,i){o&1&&(r(0,"div",0)(1,"div",1)(2,"h1",2),t(3,"Part 5: Error Handling & Retry"),e(),r(4,"p",3),t(5," Handling errors gracefully: "),r(6,"code"),t(7,"catchError()"),e(),t(8,", "),r(9,"code"),t(10,"retry()"),e(),t(11,", "),r(12,"code"),t(13,"retryWhen()"),e()()(),r(14,"p-card",4)(15,"div",5)(16,"h2",6),t(17,"Error Handling Operators"),e(),r(18,"p",7),t(19," Error handling operators allow you to recover from errors, retry failed operations, and provide graceful degradation for better user experience. "),e(),r(20,"div",8)(21,"h3",9),t(22,"Key Operators:"),e(),r(23,"ul",10)(24,"li")(25,"strong"),t(26,"catchError():"),e(),t(27," Handle errors without terminating stream - Return fallback values"),e(),r(28,"li")(29,"strong"),t(30,"retry(n):"),e(),t(31," Retry n times on error - Simple retry logic"),e(),r(32,"li")(33,"strong"),t(34,"retryWhen():"),e(),t(35," Custom retry logic with conditions - Advanced retry strategies"),e()()()()(),r(36,"p-card",4)(37,"p-tabs",11)(38,"p-tablist")(39,"p-tab",11),t(40,"\u274C Violation"),e(),r(41,"p-tab",12),t(42,"\u2705 Solution"),e()(),r(43,"p-tabpanels")(44,"p-tabpanel",11)(45,"pre",13)(46,"code"),t(47),e()()(),r(48,"p-tabpanel",12)(49,"pre",13)(50,"code"),t(51),e()()()()()(),r(52,"p-card",4)(53,"h2",14),t(54,"Live Demo"),e(),r(55,"div",15)(56,"div",16)(57,"h3",17),t(58,"catchError() - Error Recovery"),e(),r(59,"p",18),t(60," Simulates a failed request that recovers with fallback data. "),e(),r(61,"p-button",19),g("click",function(){return i.testCatchError()}),e(),c(62,P,3,1,"div",20),e(),r(63,"div",21)(64,"h3",22),t(65,"retry(n) - Simple Retry"),e(),r(66,"p",18),t(67," Retries failed request 3 times before giving up. "),e(),r(68,"p-button",23),g("click",function(){return i.testRetry()}),e(),c(69,j,3,1,"div",24),c(70,q,6,0,"div",25),e(),r(71,"div",26)(72,"h3",27),t(73,"retryWhen() - Custom Retry Logic"),e(),r(74,"p",18),t(75," Custom retry with delay and logging. "),e(),r(76,"p-button",28),g("click",function(){return i.testRetryWhen()}),e(),c(77,K,3,1,"div",29),e(),r(78,"div",30)(79,"h3",31),t(80,"retryWithBackoff() - Exponential Backoff"),e(),r(81,"p",18),t(82," Retries with exponentially increasing delays (500ms, 1000ms, 2000ms). "),e(),r(83,"p-button",32),g("click",function(){return i.testRetryWithBackoff()}),e(),c(84,V,3,1,"div",33),e()()(),r(85,"p-card",4)(86,"h2",14),t(87,"Key Takeaways"),e(),r(88,"ul",34)(89,"li",35)(90,"span",36),t(91,"\u2713"),e(),r(92,"span"),t(93,"Always use "),r(94,"code"),t(95,"catchError()"),e(),t(96," to handle errors gracefully - never let errors crash the app"),e()(),r(97,"li",35)(98,"span",36),t(99,"\u2713"),e(),r(100,"span"),t(101,"Use "),r(102,"code"),t(103,"retry()"),e(),t(104," for simple retry logic with fixed attempts"),e()(),r(105,"li",35)(106,"span",36),t(107,"\u2713"),e(),r(108,"span"),t(109,"Use "),r(110,"code"),t(111,"retryWhen()"),e(),t(112," for custom retry logic with conditions and delays"),e()(),r(113,"li",35)(114,"span",36),t(115,"\u2713"),e(),r(116,"span"),t(117,"Implement exponential backoff for production - reduces server load"),e()(),r(118,"li",35)(119,"span",36),t(120,"\u2713"),e(),r(121,"span"),t(122,"Don't retry on 4xx errors (client errors) - only retry on 5xx (server errors)"),e()()()()()),o&2&&(l(47),d(i.violationCode),l(4),d(i.solutionCode),l(11),p(i.catchErrorResult()?62:-1),l(7),p(i.retryResult()?69:-1),l(),p(i.errorLogs().length>0?70:-1),l(7),p(i.retryWhenResult()?77:-1),l(7),p(i.retryBackoffResult()?84:-1))},dependencies:[D,H,W,N,B,L,I,M,w,T,A],styles:["[_nghost-%COMP%]{display:block;width:100%}"]})};export{F as ErrorHandlingDemoComponent};
