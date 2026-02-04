import{e as h}from"./chunk-26I6QKGV.js";import"./chunk-DS4DKGB5.js";import"./chunk-YPUDPSQH.js";import"./chunk-DEGWJE5E.js";import{b as U}from"./chunk-PKLQWDLD.js";import{a as E,b as D,c as C,d as k,e as I}from"./chunk-3ZW5MUH5.js";import"./chunk-SHEHAVXT.js";import{a as S,b as w}from"./chunk-ST7OVFPO.js";import"./chunk-3N3GZBUB.js";import"./chunk-4O3FVBGX.js";import"./chunk-QCJRPF2F.js";import"./chunk-IZU7C3FN.js";import{b}from"./chunk-JBIPGRVB.js";import{r as v}from"./chunk-BO564T5E.js";import"./chunk-FPPZ4BUR.js";import{a as y}from"./chunk-HUEVSVD3.js";import{Cb as g,Db as x,Jb as e,Kb as t,Lb as i,Wb as f,Yb as u,Za as l,ha as m,kc as n,lc as d,nb as c,va as p}from"./chunk-6P3ZW5D6.js";import"./chunk-6HR7AMTL.js";function R(r,a){if(r&1&&(e(0,"div",44)(1,"div",4),i(2,"ng-icon",60),e(3,"h3",61),n(4," Test Result "),t()(),e(5,"p",62),n(6),t()()),r&2){let o=u();l(6),d(o.testResult())}}var T=class r{userRepository=m(y);violationCode=`
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
`;testResult=p("");testDependencyInversion(){let a=this.userRepository.findAll();this.testResult.set(`Successfully using UserRepositoryService through Repository<User> interface.
Found ${a.length} users.
This demonstrates dependency inversion - high-level code depends on abstraction.`)}static \u0275fac=function(o){return new(o||r)};static \u0275cmp=c({type:r,selectors:[["app-dip-demo"]],decls:122,vars:3,consts:[[1,"container-responsive","space-y-responsive"],[1,"card-modern","padding-responsive","hover-lift","slide-in-up"],[1,"flex","flex-col","lg:flex-row","lg:items-center","lg:justify-between","gap-6"],[1,"flex-1"],[1,"flex","items-center","gap-3","mb-4"],[1,"w-12","h-12","sm:w-14","sm:h-14","rounded-xl","bg-gradient-to-br","from-orange-500","to-red-600","flex","items-center","justify-center","shadow-lg"],["name","faSolidArrowsUpDown",1,"text-white","text-xl","sm:text-2xl"],[1,"badge-modern","text-xs","sm:text-sm"],[1,"heading-responsive","text-gradient","mb-4"],[1,"text-responsive","text-gray-700","dark:text-gray-300"],[1,"hidden","lg:block"],[1,"w-32","h-32","rounded-2xl","bg-gradient-to-br","from-orange-500/20","to-red-600/20","flex","items-center","justify-center"],["name","faSolidArrowsUpDown",1,"text-6xl","text-orange-500"],[1,"card-modern","hover-lift","slide-in-up"],[1,"padding-responsive","space-y-6"],[1,"w-10","h-10","rounded-lg","bg-gradient-to-br","from-blue-500","to-purple-600","flex","items-center","justify-center"],["name","faSolidLightbulb",1,"text-white"],[1,"subheading-responsive","text-gray-900","dark:text-gray-100"],[1,"text-responsive","text-gray-700","dark:text-gray-300","leading-relaxed"],[1,"glass","rounded-xl","p-6","border-l-4","border-accent"],["name","faSolidStar",1,"text-accent","text-xl"],[1,"text-lg","sm:text-xl","font-semibold","text-gray-900","dark:text-gray-100"],[1,"list-modern"],[1,"text-sm","sm:text-base","text-gray-800","dark:text-gray-200"],[1,"padding-responsive"],[1,"flex","items-center","gap-3","mb-6"],[1,"w-10","h-10","rounded-lg","bg-gradient-to-br","from-green-500","to-teal-600","flex","items-center","justify-center"],["name","faSolidCode",1,"text-white"],["value","0"],[1,"flex","flex-wrap","gap-2","mb-6"],["value","0",1,"flex","items-center","gap-2"],["name","faSolidCircleXmark",1,"text-red-500"],[1,"text-sm","sm:text-base","font-semibold"],["value","1",1,"flex","items-center","gap-2"],["name","faSolidCircleCheck",1,"text-green-500"],[1,"code-block-modern"],[1,"overflow-x-auto","text-sm","sm:text-base"],["value","1"],[1,"w-10","h-10","rounded-lg","bg-gradient-to-br","from-purple-500","to-pink-600","flex","items-center","justify-center"],["name","faSolidCirclePlay",1,"text-white"],[1,"text-responsive","text-gray-700","dark:text-gray-300","mb-8"],[1,"space-y-6"],[1,"btn-modern","px-8","py-4","rounded-xl","font-semibold","text-base","sm:text-lg","flex","items-center","justify-center","gap-3","shadow-lg","hover:shadow-xl","transition-all","duration-300","hover:scale-105","active:scale-100",3,"click"],["name","faSolidCircleCheck","aria-hidden","true",1,"text-lg","sm:text-xl"],[1,"glass","rounded-lg","p-6","fade-in","border","border-green-200","dark:border-green-800"],[1,"w-10","h-10","rounded-lg","bg-gradient-to-br","from-teal-500","to-cyan-600","flex","items-center","justify-center"],["name","faSolidGraduationCap",1,"text-white"],[1,"mt-8","pt-6","border-t","border-gray-200","dark:border-gray-700"],[1,"text-lg","font-semibold","text-gray-900","dark:text-gray-100","mb-4","flex","items-center","gap-2"],["name","faSolidBookOpen",1,"text-accent"],[1,"flex","flex-wrap","gap-3"],["href","#",1,"badge-outline","hover:scale-105","transition-transform"],["name","faSolidArrowUpRightFromSquare",1,"mr-2"],["name","faSolidVideo",1,"mr-2"],["name","faSolidCodeBranch",1,"mr-2"],[1,"flex","flex-col","sm:flex-row","gap-4","justify-between","items-stretch","sm:items-center","fade-in"],[1,"glass","padding-responsive-sm","rounded-xl","hover-lift","flex","items-center","justify-center","gap-3","group"],["name","faSolidArrowLeft",1,"text-accent","group-hover:-translate-x-1","transition-transform"],[1,"font-semibold","text-gray-900","dark:text-gray-100"],["name","faSolidArrowRight",1,"text-accent","group-hover:translate-x-1","transition-transform"],["name","faSolidCircleCheck",1,"text-green-500","text-xl"],[1,"text-lg","sm:text-xl","font-semibold","text-gray-800","dark:text-gray-200"],[1,"text-sm","sm:text-base","text-green-800","dark:text-green-200"]],template:function(o,s){o&1&&(e(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5),i(6,"ng-icon",6),t(),e(7,"div")(8,"span",7),n(9,"SOLID Principles"),t()()(),e(10,"h1",8),n(11," Dependency Inversion Principle "),t(),e(12,"p",9),n(13," High-level modules should not depend on low-level modules. Both should depend on abstractions. "),t()(),e(14,"div",10)(15,"div",11),i(16,"ng-icon",12),t()()()(),e(17,"p-card",13)(18,"div",14)(19,"div",4)(20,"div",15),i(21,"ng-icon",16),t(),e(22,"h2",17),n(23,"What is DIP?"),t()(),e(24,"p",18),n(25," The Dependency Inversion Principle states that high-level modules should not depend on low-level modules. Both should depend on abstractions (interfaces). Abstractions should not depend on details; details should depend on abstractions. This principle promotes loose coupling and makes code more flexible. "),t(),e(26,"div",19)(27,"div",4),i(28,"ng-icon",20),e(29,"h3",21),n(30,"Key Benefits"),t()(),e(31,"ul",22)(32,"li",23),n(33," Reduces coupling between modules "),t(),e(34,"li",23),n(35," Makes code more testable (easy to mock dependencies) "),t(),e(36,"li",23),n(37," Enables swapping implementations easily "),t(),e(38,"li",23),n(39," Promotes better architecture and design "),t()()()()(),e(40,"p-card",13)(41,"div",24)(42,"div",25)(43,"div",26),i(44,"ng-icon",27),t(),e(45,"h2",17),n(46,"Code Examples"),t()(),e(47,"p-tabs",28)(48,"p-tablist",29)(49,"p-tab",30),i(50,"ng-icon",31),e(51,"span",32),n(52,"Violation"),t()(),e(53,"p-tab",33),i(54,"ng-icon",34),e(55,"span",32),n(56,"Solution"),t()()(),e(57,"p-tabpanels")(58,"p-tabpanel",28)(59,"div",35)(60,"pre",36)(61,"code"),n(62),t()()()(),e(63,"p-tabpanel",37)(64,"div",35)(65,"pre",36)(66,"code"),n(67),t()()()()()()()(),e(68,"p-card",13)(69,"div",24)(70,"div",4)(71,"div",38),i(72,"ng-icon",39),t(),e(73,"h2",17),n(74,"Interactive Demo"),t()(),e(75,"p",40),n(76," This demo shows how dependency injection allows high-level code to depend on abstractions. "),t(),e(77,"div",41)(78,"button",42),f("click",function(){return s.testDependencyInversion()}),i(79,"ng-icon",43),e(80,"span"),n(81,"Test Dependency Inversion"),t()(),g(82,R,7,1,"div",44),t()()(),e(83,"p-card",13)(84,"div",24)(85,"div",25)(86,"div",45),i(87,"ng-icon",46),t(),e(88,"h2",17),n(89,"Key Takeaways"),t()(),e(90,"ul",22)(91,"li",23),n(92," Depend on abstractions (interfaces), not concrete implementations "),t(),e(93,"li",23),n(94," Use dependency injection to provide dependencies "),t(),e(95,"li",23),n(96," High-level modules define what they need, low-level modules provide it "),t(),e(97,"li",23),n(98," Makes code more flexible, testable, and maintainable "),t()(),e(99,"div",47)(100,"h3",48),i(101,"ng-icon",49),n(102," Learn More "),t(),e(103,"div",50)(104,"a",51),i(105,"ng-icon",52),n(106,"Documentation "),t(),e(107,"a",51),i(108,"ng-icon",53),n(109,"Video Tutorial "),t(),e(110,"a",51),i(111,"ng-icon",54),n(112,"GitHub Examples "),t()()()()(),e(113,"div",55)(114,"button",56),i(115,"ng-icon",57),e(116,"span",58),n(117,"Previous: Interface Segregation"),t()(),e(118,"button",56)(119,"span",58),n(120,"Next: OOP Concepts"),t(),i(121,"ng-icon",59),t()()()),o&2&&(l(62),d(s.violationCode),l(5),d(s.solutionCode),l(15),x(s.testResult()?82:-1))},dependencies:[b,v,w,S,I,D,E,C,k,h,U],styles:["[_nghost-%COMP%]{display:block;width:100%}"]})};export{T as DipDemoComponent};
