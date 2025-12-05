import{b as T}from"./chunk-VHQBVC6O.js";import{a as E,b as w,c as C,d as D,e as M,f as I,g as _}from"./chunk-AH7MQ5KM.js";import"./chunk-K33OWSJ3.js";import"./chunk-UB7WHAP5.js";import{p as y,q as k}from"./chunk-47HPTYDK.js";import{p as S}from"./chunk-FHCI6K3X.js";import"./chunk-FPPZ4BUR.js";import{Hb as g,Jb as f,Ma as l,Xb as i,Yb as d,ab as h,nb as c,ob as p,ub as e,va as m,vb as t,wb as n}from"./chunk-S2MQBBOY.js";import"./chunk-6HR7AMTL.js";function N(o,s){if(o&1&&(e(0,"div",46)(1,"p",67),i(2),t()()),o&2){let a=f();l(2),d(a.violationResult())}}function R(o,s){if(o&1&&(e(0,"div",51)(1,"p",68),i(2),t()()),o&2){let a=f();l(2),d(a.solutionResult())}}var v=class{work(){console.log("Developer working")}eat(){console.log("Developer eating")}sleep(){console.log("Developer sleeping")}code(){console.log("Developer coding")}design(){}manage(){}},x=class{work(){console.log("Manager working")}eat(){console.log("Manager eating")}sleep(){console.log("Manager sleeping")}code(){}design(){}manage(){console.log("Manager managing")}},b=class{work(){console.log("Developer working")}eat(){console.log("Developer eating")}sleep(){console.log("Developer sleeping")}code(){console.log("Developer coding")}},u=class{work(){console.log("Manager working")}eat(){console.log("Manager eating")}sleep(){console.log("Manager sleeping")}manage(){console.log("Manager managing")}},P=class o{violationCode=`
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
`;violationResult=m("");solutionResult=m("");testViolation(){let s=new v,a=new x;this.violationResult.set(`Developer forced to implement design() and manage() methods it doesn't use.
Manager forced to implement code() and design() methods it doesn't use.`)}testSolution(){let s=new b,a=new u;this.solutionResult.set(`Developer only implements: Workable, Eatable, Sleepable, Codable
Manager only implements: Workable, Eatable, Sleepable, Manageable
No empty or unused method implementations!`)}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=h({type:o,selectors:[["app-isp-demo"]],decls:131,vars:4,consts:[[1,"container-responsive","space-y-responsive"],[1,"card-modern","padding-responsive","hover-lift","slide-in-up"],[1,"flex","flex-col","lg:flex-row","lg:items-center","lg:justify-between","gap-6"],[1,"flex-1"],[1,"flex","items-center","gap-3","mb-4"],[1,"w-12","h-12","sm:w-14","sm:h-14","rounded-xl","bg-gradient-to-br","from-orange-500","to-red-600","flex","items-center","justify-center","shadow-lg"],[1,"fas","fa-layer-group","text-white","text-xl","sm:text-2xl"],[1,"badge-modern","text-xs","sm:text-sm"],[1,"heading-responsive","text-gradient","mb-4"],[1,"text-responsive","text-gray-700","dark:text-gray-300"],[1,"hidden","lg:block"],[1,"w-32","h-32","rounded-2xl","bg-gradient-to-br","from-orange-500/20","to-red-600/20","flex","items-center","justify-center"],[1,"fas","fa-layer-group","text-6xl","text-orange-500"],[1,"card-modern","hover-lift","slide-in-up"],[1,"padding-responsive","space-y-6"],[1,"w-10","h-10","rounded-lg","bg-gradient-to-br","from-blue-500","to-purple-600","flex","items-center","justify-center"],[1,"fas","fa-lightbulb","text-white"],[1,"subheading-responsive","text-gray-900","dark:text-gray-100"],[1,"text-responsive","text-gray-700","dark:text-gray-300","leading-relaxed"],[1,"glass","rounded-xl","p-6","border-l-4","border-accent"],[1,"fas","fa-star","text-accent","text-xl"],[1,"text-lg","sm:text-xl","font-semibold","text-gray-900","dark:text-gray-100"],[1,"list-modern"],[1,"text-sm","sm:text-base","text-gray-800","dark:text-gray-200"],[1,"padding-responsive"],[1,"flex","items-center","gap-3","mb-6"],[1,"w-10","h-10","rounded-lg","bg-gradient-to-br","from-green-500","to-teal-600","flex","items-center","justify-center"],[1,"fas","fa-code","text-white"],["value","0"],[1,"flex","flex-wrap","gap-2","mb-6"],["value","0",1,"flex","items-center","gap-2"],[1,"fas","fa-times-circle","text-red-500"],[1,"text-sm","sm:text-base","font-semibold"],["value","1",1,"flex","items-center","gap-2"],[1,"fas","fa-check-circle","text-green-500"],[1,"code-block-modern"],[1,"overflow-x-auto","text-sm","sm:text-base"],["value","1"],[1,"w-10","h-10","rounded-lg","bg-gradient-to-br","from-purple-500","to-pink-600","flex","items-center","justify-center"],[1,"fas","fa-play-circle","text-white"],[1,"text-responsive","text-gray-700","dark:text-gray-300","mb-8"],[1,"space-y-6"],[1,"glass","rounded-xl","p-6","border-l-4","border-red-500"],[1,"fas","fa-times-circle","text-red-500","text-xl"],[1,"text-lg","sm:text-xl","font-semibold","text-red-800","dark:text-red-200"],["label","Test Violation","icon","pi pi-exclamation-triangle","severity","danger",1,"btn-modern",3,"click"],[1,"mt-4","glass","rounded-lg","p-5","border","border-yellow-200","dark:border-yellow-800","fade-in"],[1,"glass","rounded-xl","p-6","border-l-4","border-green-500"],[1,"fas","fa-check-circle","text-green-500","text-xl"],[1,"text-lg","sm:text-xl","font-semibold","text-green-800","dark:text-green-200"],["label","Test Solution","icon","pi pi-check","severity","success",1,"btn-modern",3,"click"],[1,"mt-4","glass","rounded-lg","p-5","border","border-green-200","dark:border-green-800","fade-in"],[1,"w-10","h-10","rounded-lg","bg-gradient-to-br","from-teal-500","to-cyan-600","flex","items-center","justify-center"],[1,"fas","fa-graduation-cap","text-white"],[1,"mt-8","pt-6","border-t","border-gray-200","dark:border-gray-700"],[1,"text-lg","font-semibold","text-gray-900","dark:text-gray-100","mb-4","flex","items-center","gap-2"],[1,"fas","fa-book-open","text-accent"],[1,"flex","flex-wrap","gap-3"],["href","#",1,"badge-outline","hover:scale-105","transition-transform"],[1,"fas","fa-external-link-alt","mr-2"],[1,"fas","fa-video","mr-2"],[1,"fas","fa-code-branch","mr-2"],[1,"flex","flex-col","sm:flex-row","gap-4","justify-between","items-stretch","sm:items-center","fade-in"],[1,"glass","padding-responsive-sm","rounded-xl","hover-lift","flex","items-center","justify-center","gap-3","group"],[1,"fas","fa-arrow-left","text-accent","group-hover:-translate-x-1","transition-transform"],[1,"font-semibold","text-gray-900","dark:text-gray-100"],[1,"fas","fa-arrow-right","text-accent","group-hover:translate-x-1","transition-transform"],[1,"text-sm","sm:text-base","text-yellow-800","dark:text-yellow-200"],[1,"text-sm","sm:text-base","text-green-800","dark:text-green-200"]],template:function(a,r){a&1&&(e(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5),n(6,"i",6),t(),e(7,"div")(8,"span",7),i(9,"SOLID Principles"),t()()(),e(10,"h1",8),i(11," Interface Segregation Principle "),t(),e(12,"p",9),i(13," Clients should not be forced to depend upon interfaces that they do not use. "),t()(),e(14,"div",10)(15,"div",11),n(16,"i",12),t()()()(),e(17,"p-card",13)(18,"div",14)(19,"div",4)(20,"div",15),n(21,"i",16),t(),e(22,"h2",17),i(23,"What is ISP?"),t()(),e(24,"p",18),i(25," The Interface Segregation Principle states that no client should be forced to depend on methods it does not use. Instead of having one large interface, we should have multiple smaller, more specific interfaces. This prevents classes from being forced to implement methods they don't need. "),t(),e(26,"div",19)(27,"div",4),n(28,"i",20),e(29,"h3",21),i(30,"Key Benefits"),t()(),e(31,"ul",22)(32,"li",23),i(33," Prevents fat interfaces with unused methods "),t(),e(34,"li",23),i(35," Reduces coupling between classes "),t(),e(36,"li",23),i(37," Makes interfaces more focused and cohesive "),t(),e(38,"li",23),i(39," Easier to maintain and extend "),t()()()()(),e(40,"p-card",13)(41,"div",24)(42,"div",25)(43,"div",26),n(44,"i",27),t(),e(45,"h2",17),i(46,"Code Examples"),t()(),e(47,"p-tabs",28)(48,"p-tablist",29)(49,"p-tab",30),n(50,"i",31),e(51,"span",32),i(52,"Violation"),t()(),e(53,"p-tab",33),n(54,"i",34),e(55,"span",32),i(56,"Solution"),t()()(),e(57,"p-tabpanels")(58,"p-tabpanel",28)(59,"div",35)(60,"pre",36)(61,"code"),i(62),t()()()(),e(63,"p-tabpanel",37)(64,"div",35)(65,"pre",36)(66,"code"),i(67),t()()()()()()()(),e(68,"p-card",13)(69,"div",24)(70,"div",4)(71,"div",38),n(72,"i",39),t(),e(73,"h2",17),i(74,"Interactive Demo"),t()(),e(75,"p",40),i(76," Compare the violation (fat interface) with the solution (segregated interfaces). "),t(),e(77,"div",41)(78,"div",42)(79,"div",4),n(80,"i",43),e(81,"h3",44),i(82,"Violation"),t()(),e(83,"p-button",45),g("click",function(){return r.testViolation()}),t(),c(84,N,3,1,"div",46),t(),e(85,"div",47)(86,"div",4),n(87,"i",48),e(88,"h3",49),i(89,"Solution"),t()(),e(90,"p-button",50),g("click",function(){return r.testSolution()}),t(),c(91,R,3,1,"div",51),t()()()(),e(92,"p-card",13)(93,"div",24)(94,"div",25)(95,"div",52),n(96,"i",53),t(),e(97,"h2",17),i(98,"Key Takeaways"),t()(),e(99,"ul",22)(100,"li",23),i(101," Split large interfaces into smaller, focused ones "),t(),e(102,"li",23),i(103," Classes should only implement interfaces they actually use "),t(),e(104,"li",23),i(105,' Avoid "fat" interfaces with many unrelated methods '),t(),e(106,"li",23),i(107," Use composition to combine multiple interfaces when needed "),t()(),e(108,"div",54)(109,"h3",55),n(110,"i",56),i(111," Learn More "),t(),e(112,"div",57)(113,"a",58),n(114,"i",59),i(115,"Documentation "),t(),e(116,"a",58),n(117,"i",60),i(118,"Video Tutorial "),t(),e(119,"a",58),n(120,"i",61),i(121,"GitHub Examples "),t()()()()(),e(122,"div",62)(123,"button",63),n(124,"i",64),e(125,"span",65),i(126,"Previous: Liskov Substitution"),t()(),e(127,"button",63)(128,"span",65),i(129,"Next: Dependency Inversion"),t(),n(130,"i",66),t()()()),a&2&&(l(62),d(r.violationCode),l(5),d(r.solutionCode),l(17),p(r.violationResult()?84:-1),l(7),p(r.solutionResult()?91:-1))},dependencies:[S,w,E,_,D,C,M,I,T,k,y],styles:["[_nghost-%COMP%]{display:block;width:100%}"]})};export{P as IspDemoComponent};
