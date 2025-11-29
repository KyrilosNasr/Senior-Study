import{a as A,b as y,c as I}from"./chunk-ZIKL4GMZ.js";import"./chunk-PVYFTFE3.js";import{a as B,b as N}from"./chunk-KJPPBXDO.js";import{a as T,b as w,c as O,d as D,e as R,f as L,g as W}from"./chunk-6IHYB2AV.js";import"./chunk-IMEODX4F.js";import"./chunk-PRB5TZSC.js";import{p as _,q as M}from"./chunk-H3I524XT.js";import{p as k}from"./chunk-EFMPFDS6.js";import"./chunk-4IVXAVEU.js";import{Ab as t,Bb as e,C as f,Cb as g,Nb as x,Ob as d,Sa as s,ac as r,ba as h,bc as c,gb as C,n as b,pa as l,tb as m,ub as p,vb as v,xb as S,yb as E,zb as u}from"./chunk-ANFRTOHF.js";import"./chunk-6HR7AMTL.js";function J(o,a){if(o&1&&g(0,"p-message",20),o&2){let i=d();u("text",i.successMessage())}}function U(o,a){if(o&1&&g(0,"p-message",21),o&2){let i=d();u("text",i.errorMessage())}}function j(o,a){if(o&1&&(t(0,"li",29),r(1),e()),o&2){let i=a.$implicit;s(),c(i)}}function q(o,a){if(o&1&&(t(0,"div",23)(1,"h4",27),r(2,"Logs:"),e(),t(3,"ul",28),S(4,j,2,1,"li",29,v),e()()),o&2){let i=d();s(4),E(i.retryLogs())}}var P=class o{apiService=h(I);retryAttempts=l(0);retryLogs=l([]);successMessage=l("");errorMessage=l("");violationCode=`
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
`;testRetry(){this.retryAttempts.set(0),this.retryLogs.set([]),this.successMessage.set(""),this.errorMessage.set("");let a=0,i=3;this.apiService.simulateApiCall({data:"Success!"},500,a<i-1).pipe(y("Retry Demo"),A(i,500),f(n=>(this.errorMessage.set("Failed after all retry attempts"),b(null)))).subscribe({next:n=>{n&&this.successMessage.set("Request succeeded after retries!")},error:n=>{this.errorMessage.set("Request failed: "+n.message)}})}testLogging(){this.retryLogs.set([]),this.apiService.simulateApiCall({data:"Test data"},300).pipe(y("Test Context")).subscribe({next:a=>{this.retryLogs.update(i=>[...i,"Next: "+JSON.stringify(a)])},complete:()=>{this.retryLogs.update(a=>[...a,"Complete"])}})}static \u0275fac=function(i){return new(i||o)};static \u0275cmp=C({type:o,selectors:[["app-custom-operators-demo"]],decls:81,vars:5,consts:[[1,"max-w-7xl","mx-auto","space-y-6"],[1,"bg-white","dark:bg-gray-800","rounded-lg","shadow-md","p-6"],[1,"text-3xl","font-bold","text-gray-800","dark:text-gray-200","mb-2"],[1,"text-gray-600","dark:text-gray-400"],[1,"shadow-md"],[1,"space-y-4"],[1,"text-2xl","font-semibold","text-gray-800","dark:text-gray-200"],[1,"text-gray-700","dark:text-gray-300"],[1,"bg-blue-50","dark:bg-blue-900/20","p-4","rounded-lg"],[1,"font-semibold","text-blue-900","dark:text-blue-200","mb-2"],[1,"list-disc","list-inside","space-y-1","text-blue-800","dark:text-blue-300"],["value","0"],["value","1"],[1,"bg-gray-900","text-gray-100","p-4","rounded-lg","overflow-x-auto","text-sm"],[1,"text-2xl","font-semibold","text-gray-800","dark:text-gray-200","mb-4"],[1,"text-gray-700","dark:text-gray-300","mb-6"],[1,"space-y-6"],[1,"border-2","border-gray-200","dark:border-gray-700","rounded-lg","p-4"],[1,"text-lg","font-semibold","text-gray-800","dark:text-gray-200","mb-4"],["label","Test Retry (Will fail 2 times, then succeed)","icon","pi pi-refresh",1,"mb-4",3,"click"],["severity","success",3,"text"],["severity","error",3,"text"],["label","Test Logging","icon","pi pi-info-circle",1,"mb-4",3,"click"],[1,"bg-gray-100","dark:bg-gray-700","p-4","rounded"],[1,"space-y-2","text-gray-700","dark:text-gray-300"],[1,"flex","items-start"],[1,"text-green-500","mr-2"],[1,"font-semibold","mb-2"],[1,"list-disc","list-inside","space-y-1"],[1,"text-sm"]],template:function(i,n){i&1&&(t(0,"div",0)(1,"div",1)(2,"h1",2),r(3,"Custom Operators"),e(),t(4,"p",3),r(5," Building reusable RxJS operators for common patterns like retry logic, logging, and cleanup. "),e()(),t(6,"p-card",4)(7,"div",5)(8,"h2",6),r(9,"What are Custom Operators?"),e(),t(10,"p",7),r(11," Custom operators are reusable functions that compose existing RxJS operators to create new functionality. They encapsulate common patterns like retry logic, logging, and cleanup strategies. "),e(),t(12,"div",8)(13,"h3",9),r(14,"Key Benefits:"),e(),t(15,"ul",10)(16,"li"),r(17,"Reusable logic across the application"),e(),t(18,"li"),r(19,"Testable in isolation"),e(),t(20,"li"),r(21,"Consistent error handling and retry strategies"),e(),t(22,"li"),r(23,"Easier to maintain and update"),e()()()()(),t(24,"p-card",4)(25,"p-tabs",11)(26,"p-tablist")(27,"p-tab",11),r(28,"\u274C Violation"),e(),t(29,"p-tab",12),r(30,"\u2705 Solution"),e()(),t(31,"p-tabpanels")(32,"p-tabpanel",11)(33,"pre",13)(34,"code"),r(35),e()()(),t(36,"p-tabpanel",12)(37,"pre",13)(38,"code"),r(39),e()()()()()(),t(40,"p-card",4)(41,"h2",14),r(42,"Live Demo"),e(),t(43,"p",15),r(44," Test the custom operators: retry with exponential backoff and contextual logging. "),e(),t(45,"div",16)(46,"div",17)(47,"h3",18),r(48,"Retry with Exponential Backoff"),e(),t(49,"p-button",19),x("click",function(){return n.testRetry()}),e(),m(50,J,1,1,"p-message",20),m(51,U,1,1,"p-message",21),e(),t(52,"div",17)(53,"h3",18),r(54,"Contextual Logging"),e(),t(55,"p-button",22),x("click",function(){return n.testLogging()}),e(),m(56,q,6,0,"div",23),e()()(),t(57,"p-card",4)(58,"h2",14),r(59,"Key Takeaways"),e(),t(60,"ul",24)(61,"li",25)(62,"span",26),r(63,"\u2713"),e(),t(64,"span"),r(65,"Create custom operators for repeated patterns"),e()(),t(66,"li",25)(67,"span",26),r(68,"\u2713"),e(),t(69,"span"),r(70,"Use pipe() and existing operators to compose new functionality"),e()(),t(71,"li",25)(72,"span",26),r(73,"\u2713"),e(),t(74,"span"),r(75,"Make operators configurable with parameters"),e()(),t(76,"li",25)(77,"span",26),r(78,"\u2713"),e(),t(79,"span"),r(80,"Test custom operators in isolation"),e()()()()()),i&2&&(s(35),c(n.violationCode),s(4),c(n.solutionCode),s(11),p(n.successMessage()?50:-1),s(),p(n.errorMessage()?51:-1),s(5),p(n.retryLogs().length>0?56:-1))},dependencies:[k,w,T,W,D,O,R,L,M,_,N,B],styles:["[_nghost-%COMP%]{display:block;width:100%}"]})};export{P as CustomOperatorsDemoComponent};
