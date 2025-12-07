import{a as N,b as f,c as A}from"./chunk-HQCF4P2J.js";import"./chunk-OFQQBTXX.js";import{a as I}from"./chunk-RVXGMZMS.js";import{a as L,b as W}from"./chunk-MFLIXFRL.js";import{a as w,b as _,c as T,d as M,e as O,f as D,g as R}from"./chunk-OAZ4ZSRP.js";import"./chunk-6GNMPK52.js";import"./chunk-UB7WHAP5.js";import"./chunk-2VTPWLFV.js";import{p as k}from"./chunk-FHCI6K3X.js";import"./chunk-FPPZ4BUR.js";import{E as y,Hb as x,Jb as c,Ma as l,Xb as i,Yb as g,ab as v,ha as h,n as b,nb as p,ob as d,pb as C,rb as S,sb as E,tb as u,ub as e,va as m,vb as t,wb as s}from"./chunk-S2MQBBOY.js";import"./chunk-6HR7AMTL.js";function P(n,o){if(n&1&&s(0,"p-message",45),n&2){let r=c();u("text",r.successMessage())}}function F(n,o){if(n&1&&s(0,"p-message",46),n&2){let r=c();u("text",r.errorMessage())}}function J(n,o){if(n&1&&(e(0,"li",53),i(1),t()),n&2){let r=o.$implicit;l(),g(r)}}function U(n,o){if(n&1&&(e(0,"div",48)(1,"h4",51),i(2,"Logs:"),t(),e(3,"ul",52),S(4,J,2,1,"li",53,C),t()()),n&2){let r=c();l(4),E(r.retryLogs())}}var B=class n{apiService=h(A);retryAttempts=m(0);retryLogs=m([]);successMessage=m("");errorMessage=m("");violationCode=`
// \u274C VIOLATION: No Custom Operators
// Repeated retry logic everywhere, hard to maintain

this.http.get('/api/data').pipe(
  retryWhen(errors => errors.pipe(
    scan((count, err) => {
      if (count >= 3) throw err;
      return count + 1;
    }, 0),
    delay(1000),
    tap(() => console.log('Retrying...'))
  ))
).subscribe();

// Same logic repeated in multiple places
this.http.post('/api/save').pipe(
  retryWhen(errors => errors.pipe(
    scan((count, err) => {
      if (count >= 3) throw err;
      return count + 1;
    }, 0),
    delay(1000),
    tap(() => console.log('Retrying...'))
  ))
).subscribe();
`;solutionCode=`
// \u2705 SOLUTION: Custom Operators
// Reusable, testable, maintainable

import { retryWithBackoff } from './operators/retry-with-backoff.operator';
import { logWithContext } from './operators/log-with-context.operator';

// Custom operator: Retry with exponential backoff
export function retryWithBackoff<T>(
  maxRetries: number = 3,
  initialDelay: number = 1000
): OperatorFunction<T, T> {
  return (source: Observable<T>) =>
    source.pipe(
      retryWhen(errors =>
        errors.pipe(
          scan((retryCount, error) => {
            if (retryCount >= maxRetries) {
              throw error;
            }
            return retryCount + 1;
          }, 0),
          delay((retryCount) => initialDelay * Math.pow(2, retryCount)),
          tap(() => console.log('Retrying...'))
        )
      )
    );
}

// Usage - clean and reusable
this.http.get('/api/data').pipe(
  logWithContext('API'),
  retryWithBackoff(3, 1000)
).subscribe();

this.http.post('/api/save').pipe(
  logWithContext('API'),
  retryWithBackoff(3, 1000)
).subscribe();
`;testRetry(){this.retryAttempts.set(0),this.retryLogs.set([]),this.successMessage.set(""),this.errorMessage.set("");let o=0,r=3;this.apiService.simulateApiCall({data:"Success!"},500,o<r-1).pipe(f("Retry Demo"),N(r,500),y(a=>(this.errorMessage.set("Failed after all retry attempts"),b(null)))).subscribe({next:a=>{a&&this.successMessage.set("Request succeeded after retries!")},error:a=>{this.errorMessage.set("Request failed: "+a.message)}})}testLogging(){this.retryLogs.set([]),this.apiService.simulateApiCall({data:"Test data"},300).pipe(f("Test Context")).subscribe({next:o=>{this.retryLogs.update(r=>[...r,"Next: "+JSON.stringify(o)])},complete:()=>{this.retryLogs.update(o=>[...o,"Complete"])}})}static \u0275fac=function(r){return new(r||n)};static \u0275cmp=v({type:n,selectors:[["app-custom-operators-demo"]],decls:105,vars:5,consts:[[1,"container-responsive","space-y-responsive"],[1,"card-modern","padding-responsive","hover-lift","slide-in-up"],[1,"flex","flex-col","lg:flex-row","lg:items-center","lg:justify-between","gap-6"],[1,"flex-1"],[1,"flex","items-center","gap-3","mb-4"],[1,"w-12","h-12","sm:w-14","sm:h-14","rounded-xl","bg-gradient-to-br","from-purple-500","to-pink-600","flex","items-center","justify-center","shadow-lg"],[1,"fas","fa-cog","text-white","text-xl","sm:text-2xl"],[1,"badge-modern","text-xs","sm:text-sm"],[1,"heading-responsive","text-gradient","mb-4"],[1,"text-responsive","text-gray-700","dark:text-gray-300"],[1,"hidden","lg:block"],[1,"w-32","h-32","rounded-2xl","bg-gradient-to-br","from-purple-500/20","to-pink-600/20","flex","items-center","justify-center"],[1,"fas","fa-cog","text-6xl","text-purple-500"],[1,"card-modern","hover-lift","slide-in-up"],[1,"padding-responsive","space-y-6"],[1,"w-10","h-10","rounded-lg","bg-gradient-to-br","from-blue-500","to-purple-600","flex","items-center","justify-center"],[1,"fas","fa-lightbulb","text-white"],[1,"subheading-responsive","text-gray-900","dark:text-gray-100"],[1,"text-responsive","text-gray-700","dark:text-gray-300","leading-relaxed"],[1,"glass","rounded-xl","p-6","border-l-4","border-accent"],[1,"fas","fa-star","text-accent","text-xl"],[1,"text-lg","sm:text-xl","font-semibold","text-gray-900","dark:text-gray-100"],[1,"list-modern"],[1,"text-sm","sm:text-base","text-gray-800","dark:text-gray-200"],[1,"padding-responsive"],[1,"flex","items-center","gap-3","mb-6"],[1,"w-10","h-10","rounded-lg","bg-gradient-to-br","from-green-500","to-teal-600","flex","items-center","justify-center"],[1,"fas","fa-code","text-white"],["value","0"],[1,"flex","flex-wrap","gap-2","mb-6"],["value","0",1,"flex","items-center","gap-2"],[1,"fas","fa-times-circle","text-red-500"],[1,"text-sm","sm:text-base","font-semibold"],["value","1",1,"flex","items-center","gap-2"],[1,"fas","fa-check-circle","text-green-500"],[1,"code-block-modern"],[1,"overflow-x-auto","text-sm","sm:text-base"],["value","1"],[1,"w-10","h-10","rounded-lg","bg-gradient-to-br","from-purple-500","to-pink-600","flex","items-center","justify-center"],[1,"fas","fa-play-circle","text-white"],[1,"text-responsive","text-gray-700","dark:text-gray-300","mb-8"],[1,"space-y-8"],[1,"border-2","border-gray-200","dark:border-gray-700","rounded-lg","p-5"],[1,"text-lg","font-semibold","text-gray-800","dark:text-gray-200","mb-4"],["label","Test Retry (Will fail 2 times, then succeed)","icon","pi pi-refresh",1,"mb-4",3,"buttonClick"],["severity","success",3,"text"],["severity","error",3,"text"],["label","Test Logging","icon","pi pi-info-circle",1,"mb-4",3,"buttonClick"],[1,"bg-gray-100","dark:bg-gray-700","p-5","rounded"],[1,"w-10","h-10","rounded-lg","bg-gradient-to-br","from-teal-500","to-cyan-600","flex","items-center","justify-center"],[1,"fas","fa-graduation-cap","text-white"],[1,"font-semibold","mb-2"],[1,"list-disc","list-inside","space-y-1"],[1,"text-sm"]],template:function(r,a){r&1&&(e(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5),s(6,"i",6),t(),e(7,"div")(8,"span",7),i(9,"RxJS Patterns"),t()()(),e(10,"h1",8),i(11," Custom Operators "),t(),e(12,"p",9),i(13," Building reusable RxJS operators for common patterns like retry logic, logging, and cleanup. "),t()(),e(14,"div",10)(15,"div",11),s(16,"i",12),t()()()(),e(17,"p-card",13)(18,"div",14)(19,"div",4)(20,"div",15),s(21,"i",16),t(),e(22,"h2",17),i(23,"What are Custom Operators?"),t()(),e(24,"p",18),i(25," Custom operators are reusable functions that compose existing RxJS operators to create new functionality. They encapsulate common patterns like retry logic, logging, and cleanup strategies. "),t(),e(26,"div",19)(27,"div",4),s(28,"i",20),e(29,"h3",21),i(30,"Key Benefits"),t()(),e(31,"ul",22)(32,"li",23),i(33," Reusable logic across the application "),t(),e(34,"li",23),i(35," Testable in isolation "),t(),e(36,"li",23),i(37," Consistent error handling and retry strategies "),t(),e(38,"li",23),i(39," Easier to maintain and update "),t()()()()(),e(40,"p-card",13)(41,"div",24)(42,"div",25)(43,"div",26),s(44,"i",27),t(),e(45,"h2",17),i(46,"Code Examples"),t()(),e(47,"p-tabs",28)(48,"p-tablist",29)(49,"p-tab",30),s(50,"i",31),e(51,"span",32),i(52,"Violation"),t()(),e(53,"p-tab",33),s(54,"i",34),e(55,"span",32),i(56,"Solution"),t()()(),e(57,"p-tabpanels")(58,"p-tabpanel",28)(59,"div",35)(60,"pre",36)(61,"code"),i(62),t()()()(),e(63,"p-tabpanel",37)(64,"div",35)(65,"pre",36)(66,"code"),i(67),t()()()()()()()(),e(68,"p-card",13)(69,"div",24)(70,"div",4)(71,"div",38),s(72,"i",39),t(),e(73,"h2",17),i(74,"Interactive Demo"),t()(),e(75,"p",40),i(76," Test the custom operators: retry with exponential backoff and contextual logging. "),t(),e(77,"div",41)(78,"div",42)(79,"h3",43),i(80,"Retry with Exponential Backoff"),t(),e(81,"app-enhanced-button",44),x("buttonClick",function(){return a.testRetry()}),t(),p(82,P,1,1,"p-message",45),p(83,F,1,1,"p-message",46),t(),e(84,"div",42)(85,"h3",43),i(86,"Contextual Logging"),t(),e(87,"app-enhanced-button",47),x("buttonClick",function(){return a.testLogging()}),t(),p(88,U,6,0,"div",48),t()()()(),e(89,"p-card",13)(90,"div",24)(91,"div",25)(92,"div",49),s(93,"i",50),t(),e(94,"h2",17),i(95,"Key Takeaways"),t()(),e(96,"ul",22)(97,"li",23),i(98," Create custom operators for repeated patterns "),t(),e(99,"li",23),i(100," Use pipe() and existing operators to compose new functionality "),t(),e(101,"li",23),i(102," Make operators configurable with parameters "),t(),e(103,"li",23),i(104," Test custom operators in isolation "),t()()()()()),r&2&&(l(62),g(a.violationCode),l(5),g(a.solutionCode),l(15),d(a.successMessage()?82:-1),l(),d(a.errorMessage()?83:-1),l(5),d(a.retryLogs().length>0?88:-1))},dependencies:[k,_,w,R,M,T,O,D,I,W,L],styles:["[_nghost-%COMP%]{display:block;width:100%}"]})};export{B as CustomOperatorsDemoComponent};
