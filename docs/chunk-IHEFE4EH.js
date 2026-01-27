import{a as _}from"./chunk-CJQBBBJE.js";import{b as M}from"./chunk-PKLQWDLD.js";import{a as E,b as w,c as C,d as D,e as I}from"./chunk-3ZW5MUH5.js";import"./chunk-SHEHAVXT.js";import{a as y,b as k}from"./chunk-ST7OVFPO.js";import"./chunk-3N3GZBUB.js";import"./chunk-4O3FVBGX.js";import"./chunk-QCJRPF2F.js";import"./chunk-IZU7C3FN.js";import{r as S}from"./chunk-BO564T5E.js";import"./chunk-FPPZ4BUR.js";import{Cb as c,Db as p,Jb as e,Kb as t,Lb as i,Wb as g,Yb as f,Za as l,kc as n,lc as d,nb as h,va as m}from"./chunk-6P3ZW5D6.js";import"./chunk-6HR7AMTL.js";function W(o,s){if(o&1&&(e(0,"div",46)(1,"p",68),n(2),t()()),o&2){let a=f();l(2),d(a.violationResult())}}function N(o,s){if(o&1&&(e(0,"div",52)(1,"p",69),n(2),t()()),o&2){let a=f();l(2),d(a.solutionResult())}}var v=class{work(){console.log("Developer working")}eat(){console.log("Developer eating")}sleep(){console.log("Developer sleeping")}code(){console.log("Developer coding")}design(){}manage(){}},x=class{work(){console.log("Manager working")}eat(){console.log("Manager eating")}sleep(){console.log("Manager sleeping")}code(){}design(){}manage(){console.log("Manager managing")}},b=class{work(){console.log("Developer working")}eat(){console.log("Developer eating")}sleep(){console.log("Developer sleeping")}code(){console.log("Developer coding")}},u=class{work(){console.log("Manager working")}eat(){console.log("Manager eating")}sleep(){console.log("Manager sleeping")}manage(){console.log("Manager managing")}},T=class o{violationCode=`
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
No empty or unused method implementations!`)}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=h({type:o,selectors:[["app-isp-demo"]],decls:134,vars:4,consts:[[1,"container-responsive","space-y-responsive"],[1,"card-modern","padding-responsive","hover-lift","slide-in-up"],[1,"flex","flex-col","lg:flex-row","lg:items-center","lg:justify-between","gap-6"],[1,"flex-1"],[1,"flex","items-center","gap-3","mb-4"],[1,"w-12","h-12","sm:w-14","sm:h-14","rounded-xl","bg-gradient-to-br","from-orange-500","to-red-600","flex","items-center","justify-center","shadow-lg"],[1,"fas","fa-layer-group","text-white","text-xl","sm:text-2xl"],[1,"badge-modern","text-xs","sm:text-sm"],[1,"heading-responsive","text-gradient","mb-4"],[1,"text-responsive","text-gray-700","dark:text-gray-300"],[1,"hidden","lg:block"],[1,"w-32","h-32","rounded-2xl","bg-gradient-to-br","from-orange-500/20","to-red-600/20","flex","items-center","justify-center"],[1,"fas","fa-layer-group","text-6xl","text-orange-500"],[1,"card-modern","hover-lift","slide-in-up"],[1,"padding-responsive","space-y-6"],[1,"w-10","h-10","rounded-lg","bg-gradient-to-br","from-blue-500","to-purple-600","flex","items-center","justify-center"],[1,"fas","fa-lightbulb","text-white"],[1,"subheading-responsive","text-gray-900","dark:text-gray-100"],[1,"text-responsive","text-gray-700","dark:text-gray-300","leading-relaxed"],[1,"glass","rounded-xl","p-6","border-l-4","border-accent"],[1,"fas","fa-star","text-accent","text-xl"],[1,"text-lg","sm:text-xl","font-semibold","text-gray-900","dark:text-gray-100"],[1,"list-modern"],[1,"text-sm","sm:text-base","text-gray-800","dark:text-gray-200"],[1,"padding-responsive"],[1,"flex","items-center","gap-3","mb-6"],[1,"w-10","h-10","rounded-lg","bg-gradient-to-br","from-green-500","to-teal-600","flex","items-center","justify-center"],[1,"fas","fa-code","text-white"],["value","0"],[1,"flex","flex-wrap","gap-2","mb-6"],["value","0",1,"flex","items-center","gap-2"],[1,"fas","fa-times-circle","text-red-500"],[1,"text-sm","sm:text-base","font-semibold"],["value","1",1,"flex","items-center","gap-2"],[1,"fas","fa-check-circle","text-green-500"],[1,"code-block-modern"],[1,"overflow-x-auto","text-sm","sm:text-base"],["value","1"],[1,"w-10","h-10","rounded-lg","bg-gradient-to-br","from-purple-500","to-pink-600","flex","items-center","justify-center"],[1,"fas","fa-play-circle","text-white"],[1,"text-responsive","text-gray-700","dark:text-gray-300","mb-8"],[1,"space-y-6"],[1,"glass","rounded-xl","p-6","border-l-4","border-red-500"],[1,"fas","fa-times-circle","text-red-500","text-xl"],[1,"text-lg","sm:text-xl","font-semibold","text-red-800","dark:text-red-200"],["label","Test Violation","icon","pi pi-exclamation-triangle",3,"buttonClick"],[1,"mt-4","glass","rounded-lg","p-5","border","border-yellow-200","dark:border-yellow-800","fade-in"],[1,"glass","rounded-xl","p-6","border-l-4","border-green-500"],[1,"fas","fa-check-circle","text-green-500","text-xl"],[1,"text-lg","sm:text-xl","font-semibold","text-green-800","dark:text-green-200"],[1,"btn-modern","px-8","py-4","rounded-xl","font-semibold","text-base","sm:text-lg","flex","items-center","justify-center","gap-3","shadow-lg","hover:shadow-xl","transition-all","duration-300","hover:scale-105","active:scale-100",3,"click"],["aria-hidden","true",1,"fas","fa-check-circle","text-lg","sm:text-xl"],[1,"mt-4","glass","rounded-lg","p-5","border","border-green-200","dark:border-green-800","fade-in"],[1,"w-10","h-10","rounded-lg","bg-gradient-to-br","from-teal-500","to-cyan-600","flex","items-center","justify-center"],[1,"fas","fa-graduation-cap","text-white"],[1,"mt-8","pt-6","border-t","border-gray-200","dark:border-gray-700"],[1,"text-lg","font-semibold","text-gray-900","dark:text-gray-100","mb-4","flex","items-center","gap-2"],[1,"fas","fa-book-open","text-accent"],[1,"flex","flex-wrap","gap-3"],["href","#",1,"badge-outline","hover:scale-105","transition-transform"],[1,"fas","fa-external-link-alt","mr-2"],[1,"fas","fa-video","mr-2"],[1,"fas","fa-code-branch","mr-2"],[1,"flex","flex-col","sm:flex-row","gap-4","justify-between","items-stretch","sm:items-center","fade-in"],[1,"glass","padding-responsive-sm","rounded-xl","hover-lift","flex","items-center","justify-center","gap-3","group"],[1,"fas","fa-arrow-left","text-accent","group-hover:-translate-x-1","transition-transform"],[1,"font-semibold","text-gray-900","dark:text-gray-100"],[1,"fas","fa-arrow-right","text-accent","group-hover:translate-x-1","transition-transform"],[1,"text-sm","sm:text-base","text-yellow-800","dark:text-yellow-200"],[1,"text-sm","sm:text-base","text-green-800","dark:text-green-200"]],template:function(a,r){a&1&&(e(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5),i(6,"i",6),t(),e(7,"div")(8,"span",7),n(9,"SOLID Principles"),t()()(),e(10,"h1",8),n(11," Interface Segregation Principle "),t(),e(12,"p",9),n(13," Clients should not be forced to depend upon interfaces that they do not use. "),t()(),e(14,"div",10)(15,"div",11),i(16,"i",12),t()()()(),e(17,"p-card",13)(18,"div",14)(19,"div",4)(20,"div",15),i(21,"i",16),t(),e(22,"h2",17),n(23,"What is ISP?"),t()(),e(24,"p",18),n(25," The Interface Segregation Principle states that no client should be forced to depend on methods it does not use. Instead of having one large interface, we should have multiple smaller, more specific interfaces. This prevents classes from being forced to implement methods they don't need. "),t(),e(26,"div",19)(27,"div",4),i(28,"i",20),e(29,"h3",21),n(30,"Key Benefits"),t()(),e(31,"ul",22)(32,"li",23),n(33," Prevents fat interfaces with unused methods "),t(),e(34,"li",23),n(35," Reduces coupling between classes "),t(),e(36,"li",23),n(37," Makes interfaces more focused and cohesive "),t(),e(38,"li",23),n(39," Easier to maintain and extend "),t()()()()(),e(40,"p-card",13)(41,"div",24)(42,"div",25)(43,"div",26),i(44,"i",27),t(),e(45,"h2",17),n(46,"Code Examples"),t()(),e(47,"p-tabs",28)(48,"p-tablist",29)(49,"p-tab",30),i(50,"i",31),e(51,"span",32),n(52,"Violation"),t()(),e(53,"p-tab",33),i(54,"i",34),e(55,"span",32),n(56,"Solution"),t()()(),e(57,"p-tabpanels")(58,"p-tabpanel",28)(59,"div",35)(60,"pre",36)(61,"code"),n(62),t()()()(),e(63,"p-tabpanel",37)(64,"div",35)(65,"pre",36)(66,"code"),n(67),t()()()()()()()(),e(68,"p-card",13)(69,"div",24)(70,"div",4)(71,"div",38),i(72,"i",39),t(),e(73,"h2",17),n(74,"Interactive Demo"),t()(),e(75,"p",40),n(76," Compare the violation (fat interface) with the solution (segregated interfaces). "),t(),e(77,"div",41)(78,"div",42)(79,"div",4),i(80,"i",43),e(81,"h3",44),n(82,"Violation"),t()(),e(83,"app-enhanced-button",45),g("buttonClick",function(){return r.testViolation()}),t(),c(84,W,3,1,"div",46),t(),e(85,"div",47)(86,"div",4),i(87,"i",48),e(88,"h3",49),n(89,"Solution"),t()(),e(90,"button",50),g("click",function(){return r.testSolution()}),i(91,"i",51),e(92,"span"),n(93,"Test Solution"),t()(),c(94,N,3,1,"div",52),t()()()(),e(95,"p-card",13)(96,"div",24)(97,"div",25)(98,"div",53),i(99,"i",54),t(),e(100,"h2",17),n(101,"Key Takeaways"),t()(),e(102,"ul",22)(103,"li",23),n(104," Split large interfaces into smaller, focused ones "),t(),e(105,"li",23),n(106," Classes should only implement interfaces they actually use "),t(),e(107,"li",23),n(108,' Avoid "fat" interfaces with many unrelated methods '),t(),e(109,"li",23),n(110," Use composition to combine multiple interfaces when needed "),t()(),e(111,"div",55)(112,"h3",56),i(113,"i",57),n(114," Learn More "),t(),e(115,"div",58)(116,"a",59),i(117,"i",60),n(118,"Documentation "),t(),e(119,"a",59),i(120,"i",61),n(121,"Video Tutorial "),t(),e(122,"a",59),i(123,"i",62),n(124,"GitHub Examples "),t()()()()(),e(125,"div",63)(126,"button",64),i(127,"i",65),e(128,"span",66),n(129,"Previous: Liskov Substitution"),t()(),e(130,"button",64)(131,"span",66),n(132,"Next: Dependency Inversion"),t(),i(133,"i",67),t()()()),a&2&&(l(62),d(r.violationCode),l(5),d(r.solutionCode),l(17),p(r.violationResult()?84:-1),l(10),p(r.solutionResult()?94:-1))},dependencies:[S,k,y,I,w,E,C,D,M,_],styles:["[_nghost-%COMP%]{display:block;width:100%}"]})};export{T as IspDemoComponent};
