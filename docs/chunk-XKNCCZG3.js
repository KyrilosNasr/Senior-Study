import{b as U}from"./chunk-VHQBVC6O.js";import{a as S,b as w,c as E,d as D,e as k,f as I,g as T}from"./chunk-AH7MQ5KM.js";import"./chunk-K33OWSJ3.js";import"./chunk-UB7WHAP5.js";import{p as y,q as h}from"./chunk-47HPTYDK.js";import{p as v}from"./chunk-FHCI6K3X.js";import"./chunk-FPPZ4BUR.js";import{a as b}from"./chunk-JP7STZEX.js";import{Hb as g,Jb as u,Ma as l,Xb as i,Yb as d,ab as c,ha as m,nb as x,ob as f,ub as e,va as p,vb as t,wb as n}from"./chunk-S2MQBBOY.js";import"./chunk-6HR7AMTL.js";function R(o,s){if(o&1&&(e(0,"div",43)(1,"div",4),n(2,"i",59),e(3,"h3",60),i(4," Test Result "),t()(),e(5,"p",61),i(6),t()()),o&2){let r=u();l(6),d(r.testResult())}}var C=class o{userRepository=m(b);violationCode=`
// \u274C VIOLATION: Dependency Inversion Principle
// High-level module depends on low-level module (concrete implementation)

class UserService {
  // Direct dependency on concrete class - violates DIP
  private repository = new UserRepositoryService();

  getUser(id: string): User | null {
    return this.repository.findById(id);
  }
}

// Problems:
// - Tight coupling to specific implementation
// - Hard to test (can't mock repository)
// - Hard to swap implementations
// - Violates DIP: High-level depends on low-level
`;solutionCode=`
// \u2705 SOLUTION: Dependency Inversion Principle
// High-level modules depend on abstractions, not concretions

// Define abstraction (interface)
interface Repository<T> {
  findById(id: string): T | null;
  findAll(): T[];
  save(entity: T): void;
}

// Low-level module implements abstraction
class UserRepositoryService implements Repository<User> {
  findById(id: string): User | null {
    // Implementation details
  }
  
  findAll(): User[] {
    // Implementation details
  }
  
  save(entity: User): void {
    // Implementation details
  }
}

// High-level module depends on abstraction
class UserService {
  constructor(private repository: Repository<User>) {} // Depends on interface
  
  getUser(id: string): User | null {
    return this.repository.findById(id);
  }
}

// Benefits:
// - Loose coupling
// - Easy to test (can inject mock)
// - Easy to swap implementations
// - Follows DIP: Both depend on abstraction
`;testResult=p("");testDependencyInversion(){let s=this.userRepository.findAll();this.testResult.set(`Successfully using UserRepositoryService through Repository<User> interface.
Found ${s.length} users.
This demonstrates dependency inversion - high-level code depends on abstraction.`)}static \u0275fac=function(r){return new(r||o)};static \u0275cmp=c({type:o,selectors:[["app-dip-demo"]],decls:119,vars:3,consts:[[1,"container-responsive","space-y-responsive"],[1,"card-modern","padding-responsive","hover-lift","slide-in-up"],[1,"flex","flex-col","lg:flex-row","lg:items-center","lg:justify-between","gap-6"],[1,"flex-1"],[1,"flex","items-center","gap-3","mb-4"],[1,"w-12","h-12","sm:w-14","sm:h-14","rounded-xl","bg-gradient-to-br","from-orange-500","to-red-600","flex","items-center","justify-center","shadow-lg"],[1,"fas","fa-arrows-alt-v","text-white","text-xl","sm:text-2xl"],[1,"badge-modern","text-xs","sm:text-sm"],[1,"heading-responsive","text-gradient","mb-4"],[1,"text-responsive","text-gray-700","dark:text-gray-300"],[1,"hidden","lg:block"],[1,"w-32","h-32","rounded-2xl","bg-gradient-to-br","from-orange-500/20","to-red-600/20","flex","items-center","justify-center"],[1,"fas","fa-arrows-alt-v","text-6xl","text-orange-500"],[1,"card-modern","hover-lift","slide-in-up"],[1,"padding-responsive","space-y-6"],[1,"w-10","h-10","rounded-lg","bg-gradient-to-br","from-blue-500","to-purple-600","flex","items-center","justify-center"],[1,"fas","fa-lightbulb","text-white"],[1,"subheading-responsive","text-gray-900","dark:text-gray-100"],[1,"text-responsive","text-gray-700","dark:text-gray-300","leading-relaxed"],[1,"glass","rounded-xl","p-6","border-l-4","border-accent"],[1,"fas","fa-star","text-accent","text-xl"],[1,"text-lg","sm:text-xl","font-semibold","text-gray-900","dark:text-gray-100"],[1,"list-modern"],[1,"text-sm","sm:text-base","text-gray-800","dark:text-gray-200"],[1,"padding-responsive"],[1,"flex","items-center","gap-3","mb-6"],[1,"w-10","h-10","rounded-lg","bg-gradient-to-br","from-green-500","to-teal-600","flex","items-center","justify-center"],[1,"fas","fa-code","text-white"],["value","0"],[1,"flex","flex-wrap","gap-2","mb-6"],["value","0",1,"flex","items-center","gap-2"],[1,"fas","fa-times-circle","text-red-500"],[1,"text-sm","sm:text-base","font-semibold"],["value","1",1,"flex","items-center","gap-2"],[1,"fas","fa-check-circle","text-green-500"],[1,"code-block-modern"],[1,"overflow-x-auto","text-sm","sm:text-base"],["value","1"],[1,"w-10","h-10","rounded-lg","bg-gradient-to-br","from-purple-500","to-pink-600","flex","items-center","justify-center"],[1,"fas","fa-play-circle","text-white"],[1,"text-responsive","text-gray-700","dark:text-gray-300","mb-8"],[1,"space-y-6"],["label","Test Dependency Inversion","icon","pi pi-check",1,"btn-modern",3,"click"],[1,"glass","rounded-lg","p-6","fade-in","border","border-green-200","dark:border-green-800"],[1,"w-10","h-10","rounded-lg","bg-gradient-to-br","from-teal-500","to-cyan-600","flex","items-center","justify-center"],[1,"fas","fa-graduation-cap","text-white"],[1,"mt-8","pt-6","border-t","border-gray-200","dark:border-gray-700"],[1,"text-lg","font-semibold","text-gray-900","dark:text-gray-100","mb-4","flex","items-center","gap-2"],[1,"fas","fa-book-open","text-accent"],[1,"flex","flex-wrap","gap-3"],["href","#",1,"badge-outline","hover:scale-105","transition-transform"],[1,"fas","fa-external-link-alt","mr-2"],[1,"fas","fa-video","mr-2"],[1,"fas","fa-code-branch","mr-2"],[1,"flex","flex-col","sm:flex-row","gap-4","justify-between","items-stretch","sm:items-center","fade-in"],[1,"glass","padding-responsive-sm","rounded-xl","hover-lift","flex","items-center","justify-center","gap-3","group"],[1,"fas","fa-arrow-left","text-accent","group-hover:-translate-x-1","transition-transform"],[1,"font-semibold","text-gray-900","dark:text-gray-100"],[1,"fas","fa-arrow-right","text-accent","group-hover:translate-x-1","transition-transform"],[1,"fas","fa-check-circle","text-green-500","text-xl"],[1,"text-lg","sm:text-xl","font-semibold","text-gray-800","dark:text-gray-200"],[1,"text-sm","sm:text-base","text-green-800","dark:text-green-200"]],template:function(r,a){r&1&&(e(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5),n(6,"i",6),t(),e(7,"div")(8,"span",7),i(9,"SOLID Principles"),t()()(),e(10,"h1",8),i(11," Dependency Inversion Principle "),t(),e(12,"p",9),i(13," High-level modules should not depend on low-level modules. Both should depend on abstractions. "),t()(),e(14,"div",10)(15,"div",11),n(16,"i",12),t()()()(),e(17,"p-card",13)(18,"div",14)(19,"div",4)(20,"div",15),n(21,"i",16),t(),e(22,"h2",17),i(23,"What is DIP?"),t()(),e(24,"p",18),i(25," The Dependency Inversion Principle states that high-level modules should not depend on low-level modules. Both should depend on abstractions (interfaces). Abstractions should not depend on details; details should depend on abstractions. This principle promotes loose coupling and makes code more flexible. "),t(),e(26,"div",19)(27,"div",4),n(28,"i",20),e(29,"h3",21),i(30,"Key Benefits"),t()(),e(31,"ul",22)(32,"li",23),i(33," Reduces coupling between modules "),t(),e(34,"li",23),i(35," Makes code more testable (easy to mock dependencies) "),t(),e(36,"li",23),i(37," Enables swapping implementations easily "),t(),e(38,"li",23),i(39," Promotes better architecture and design "),t()()()()(),e(40,"p-card",13)(41,"div",24)(42,"div",25)(43,"div",26),n(44,"i",27),t(),e(45,"h2",17),i(46,"Code Examples"),t()(),e(47,"p-tabs",28)(48,"p-tablist",29)(49,"p-tab",30),n(50,"i",31),e(51,"span",32),i(52,"Violation"),t()(),e(53,"p-tab",33),n(54,"i",34),e(55,"span",32),i(56,"Solution"),t()()(),e(57,"p-tabpanels")(58,"p-tabpanel",28)(59,"div",35)(60,"pre",36)(61,"code"),i(62),t()()()(),e(63,"p-tabpanel",37)(64,"div",35)(65,"pre",36)(66,"code"),i(67),t()()()()()()()(),e(68,"p-card",13)(69,"div",24)(70,"div",4)(71,"div",38),n(72,"i",39),t(),e(73,"h2",17),i(74,"Interactive Demo"),t()(),e(75,"p",40),i(76," This demo shows how dependency injection allows high-level code to depend on abstractions. "),t(),e(77,"div",41)(78,"p-button",42),g("click",function(){return a.testDependencyInversion()}),t(),x(79,R,7,1,"div",43),t()()(),e(80,"p-card",13)(81,"div",24)(82,"div",25)(83,"div",44),n(84,"i",45),t(),e(85,"h2",17),i(86,"Key Takeaways"),t()(),e(87,"ul",22)(88,"li",23),i(89," Depend on abstractions (interfaces), not concrete implementations "),t(),e(90,"li",23),i(91," Use dependency injection to provide dependencies "),t(),e(92,"li",23),i(93," High-level modules define what they need, low-level modules provide it "),t(),e(94,"li",23),i(95," Makes code more flexible, testable, and maintainable "),t()(),e(96,"div",46)(97,"h3",47),n(98,"i",48),i(99," Learn More "),t(),e(100,"div",49)(101,"a",50),n(102,"i",51),i(103,"Documentation "),t(),e(104,"a",50),n(105,"i",52),i(106,"Video Tutorial "),t(),e(107,"a",50),n(108,"i",53),i(109,"GitHub Examples "),t()()()()(),e(110,"div",54)(111,"button",55),n(112,"i",56),e(113,"span",57),i(114,"Previous: Interface Segregation"),t()(),e(115,"button",55)(116,"span",57),i(117,"Next: OOP Concepts"),t(),n(118,"i",58),t()()()),r&2&&(l(62),d(a.violationCode),l(5),d(a.solutionCode),l(12),f(a.testResult()?79:-1))},dependencies:[v,w,S,T,D,E,k,I,h,y,U],styles:["[_nghost-%COMP%]{display:block;width:100%}"]})};export{C as DipDemoComponent};
