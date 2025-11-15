import{a as W,b as P}from"./chunk-B476GZ7J.js";import{a as C,b as w,c as D,d as M,e as I,f as _,g as T}from"./chunk-ASZDYMUJ.js";import{q as S,r as E}from"./chunk-FAB6L2O4.js";import"./chunk-PRB5TZSC.js";import{p as k}from"./chunk-FNU46F6K.js";import{Cb as g,Db as v,Ia as s,Rb as n,Sb as u,Ya as y,ga as r,jb as d,kb as m,ob as p,pb as t,qb as e,rb as c}from"./chunk-AMIIRL3Q.js";function O(o,l){if(o&1&&c(0,"p-message",19),o&2){let i=v();p("text",i.violationResult())}}function V(o,l){if(o&1&&c(0,"p-message",23),o&2){let i=v();p("text",i.solutionResult())}}var b=class{work(){console.log("Developer working")}eat(){console.log("Developer eating")}sleep(){console.log("Developer sleeping")}code(){console.log("Developer coding")}design(){}manage(){}},f=class{work(){console.log("Manager working")}eat(){console.log("Manager eating")}sleep(){console.log("Manager sleeping")}code(){}design(){}manage(){console.log("Manager managing")}},x=class{work(){console.log("Developer working")}eat(){console.log("Developer eating")}sleep(){console.log("Developer sleeping")}code(){console.log("Developer coding")}},h=class{work(){console.log("Manager working")}eat(){console.log("Manager eating")}sleep(){console.log("Manager sleeping")}manage(){console.log("Manager managing")}},R=class o{violationCode=`
// \u274C VIOLATION: Interface Segregation Principle
// Fat interface forces classes to implement methods they don't need

interface Worker {
  work(): void;
  eat(): void;
  sleep(): void;
  code(): void;      // Only developers need this
  design(): void;    // Only designers need this
  manage(): void;    // Only managers need this
}

class Developer implements Worker {
  work(): void { /* ... */ }
  eat(): void { /* ... */ }
  sleep(): void { /* ... */ }
  code(): void { /* ... */ }
  design(): void { /* Empty - not applicable! */ }
  manage(): void { /* Empty - not applicable! */ }
}

// Problem: Developer is forced to implement methods it doesn't use
// This violates ISP - clients shouldn't depend on interfaces they don't use
`;solutionCode=`
// \u2705 SOLUTION: Interface Segregation Principle
// Split fat interface into smaller, focused interfaces

interface Workable {
  work(): void;
}

interface Eatable {
  eat(): void;
}

interface Sleepable {
  sleep(): void;
}

interface Codable {
  code(): void;
}

interface Designable {
  design(): void;
}

interface Manageable {
  manage(): void;
}

// Classes only implement interfaces they need
class Developer implements Workable, Eatable, Sleepable, Codable {
  work(): void { /* ... */ }
  eat(): void { /* ... */ }
  sleep(): void { /* ... */ }
  code(): void { /* ... */ }
  // No need to implement design() or manage()
}

class Manager implements Workable, Eatable, Sleepable, Manageable {
  work(): void { /* ... */ }
  eat(): void { /* ... */ }
  sleep(): void { /* ... */ }
  manage(): void { /* ... */ }
  // No need to implement code() or design()
}

// Benefits:
// - No empty method implementations
// - Clear contracts
// - Easier to maintain and extend
`;violationResult=r("");solutionResult=r("");testViolation(){let l=new b,i=new f;this.violationResult.set(`Developer forced to implement design() and manage() methods it doesn't use.
Manager forced to implement code() and design() methods it doesn't use.`)}testSolution(){let l=new x,i=new h;this.solutionResult.set(`Developer only implements: Workable, Eatable, Sleepable, Codable
Manager only implements: Workable, Eatable, Sleepable, Manageable
No empty or unused method implementations!`)}static \u0275fac=function(i){return new(i||o)};static \u0275cmp=y({type:o,selectors:[["app-isp-demo"]],decls:80,vars:4,consts:[[1,"max-w-7xl","mx-auto","space-y-6"],[1,"bg-white","dark:bg-gray-800","rounded-lg","shadow-md","p-6"],[1,"text-3xl","font-bold","text-gray-800","dark:text-gray-200","mb-2"],[1,"text-gray-600","dark:text-gray-400"],[1,"shadow-md"],[1,"space-y-4"],[1,"text-2xl","font-semibold","text-gray-800","dark:text-gray-200"],[1,"text-gray-700","dark:text-gray-300"],[1,"bg-orange-50","dark:bg-orange-900/20","p-4","rounded-lg"],[1,"font-semibold","text-orange-900","dark:text-orange-200","mb-2"],[1,"list-disc","list-inside","space-y-1","text-orange-800","dark:text-orange-300"],["value","0"],["value","1"],[1,"bg-gray-900","text-gray-100","p-4","rounded-lg","overflow-x-auto","text-sm"],[1,"text-2xl","font-semibold","text-gray-800","dark:text-gray-200","mb-4"],[1,"text-gray-700","dark:text-gray-300","mb-6"],[1,"border-2","border-red-200","dark:border-red-800","rounded-lg","p-4"],[1,"text-lg","font-semibold","text-red-800","dark:text-red-200","mb-2"],["label","Test Violation","icon","pi pi-exclamation-triangle","severity","danger",3,"click"],["severity","warn",1,"mt-4",3,"text"],[1,"border-2","border-green-200","dark:border-green-800","rounded-lg","p-4"],[1,"text-lg","font-semibold","text-green-800","dark:text-green-200","mb-2"],["label","Test Solution","icon","pi pi-check","severity","success",3,"click"],["severity","success",1,"mt-4",3,"text"],[1,"space-y-2","text-gray-700","dark:text-gray-300"],[1,"flex","items-start"],[1,"text-green-500","mr-2"]],template:function(i,a){i&1&&(t(0,"div",0)(1,"div",1)(2,"h1",2),n(3,"Interface Segregation Principle (ISP)"),e(),t(4,"p",3),n(5," Clients should not be forced to depend upon interfaces that they do not use. "),e()(),t(6,"p-card",4)(7,"div",5)(8,"h2",6),n(9,"What is ISP?"),e(),t(10,"p",7),n(11," The Interface Segregation Principle states that no client should be forced to depend on methods it does not use. Instead of having one large interface, we should have multiple smaller, more specific interfaces. This prevents classes from being forced to implement methods they don't need. "),e(),t(12,"div",8)(13,"h3",9),n(14,"Key Benefits:"),e(),t(15,"ul",10)(16,"li"),n(17,"Prevents fat interfaces with unused methods"),e(),t(18,"li"),n(19,"Reduces coupling between classes"),e(),t(20,"li"),n(21,"Makes interfaces more focused and cohesive"),e(),t(22,"li"),n(23,"Easier to maintain and extend"),e()()()()(),t(24,"p-card",4)(25,"p-tabs",11)(26,"p-tablist")(27,"p-tab",11),n(28,"\u274C Violation"),e(),t(29,"p-tab",12),n(30,"\u2705 Solution"),e()(),t(31,"p-tabpanels")(32,"p-tabpanel",11)(33,"pre",13)(34,"code"),n(35),e()()(),t(36,"p-tabpanel",12)(37,"pre",13)(38,"code"),n(39),e()()()()()(),t(40,"p-card",4)(41,"h2",14),n(42,"Live Demo"),e(),t(43,"p",15),n(44," Compare the violation (fat interface) with the solution (segregated interfaces). "),e(),t(45,"div",5)(46,"div",16)(47,"h3",17),n(48,"\u274C Violation"),e(),t(49,"p-button",18),g("click",function(){return a.testViolation()}),e(),d(50,O,1,1,"p-message",19),e(),t(51,"div",20)(52,"h3",21),n(53,"\u2705 Solution"),e(),t(54,"p-button",22),g("click",function(){return a.testSolution()}),e(),d(55,V,1,1,"p-message",23),e()()(),t(56,"p-card",4)(57,"h2",14),n(58,"Key Takeaways"),e(),t(59,"ul",24)(60,"li",25)(61,"span",26),n(62,"\u2713"),e(),t(63,"span"),n(64,"Split large interfaces into smaller, focused ones"),e()(),t(65,"li",25)(66,"span",26),n(67,"\u2713"),e(),t(68,"span"),n(69,"Classes should only implement interfaces they actually use"),e()(),t(70,"li",25)(71,"span",26),n(72,"\u2713"),e(),t(73,"span"),n(74,'Avoid "fat" interfaces with many unrelated methods'),e()(),t(75,"li",25)(76,"span",26),n(77,"\u2713"),e(),t(78,"span"),n(79,"Use composition to combine multiple interfaces when needed"),e()()()()()),i&2&&(s(35),u(a.violationCode),s(4),u(a.solutionCode),s(11),m(a.violationResult()?50:-1),s(5),m(a.solutionResult()?55:-1))},dependencies:[k,w,C,T,M,D,I,_,P,W,E,S],styles:["[_nghost-%COMP%]{display:block;width:100%}"]})};export{R as IspDemoComponent};
