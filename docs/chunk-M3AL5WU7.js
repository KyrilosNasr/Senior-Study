import{a as C,b as R}from"./chunk-KJPPBXDO.js";import{a as D,b as E,c as I,d as w,e as k,f as U,g as T}from"./chunk-6IHYB2AV.js";import"./chunk-IMEODX4F.js";import"./chunk-PRB5TZSC.js";import{p as b,q as S}from"./chunk-H3I524XT.js";import{p as f}from"./chunk-EFMPFDS6.js";import"./chunk-4IVXAVEU.js";import{a as h}from"./chunk-5IWLABJM.js";import{Ab as t,Bb as e,Cb as g,Nb as x,Ob as v,Sa as r,ac as i,ba as d,bc as a,gb as m,pa as p,tb as c,ub as u,zb as y}from"./chunk-ANFRTOHF.js";import"./chunk-6HR7AMTL.js";function B(o,s){if(o&1&&g(0,"p-message",17),o&2){let n=v();y("text",n.testResult())}}var P=class o{userRepository=d(h);violationCode=`
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
This demonstrates dependency inversion - high-level code depends on abstraction.`)}static \u0275fac=function(n){return new(n||o)};static \u0275cmp=m({type:o,selectors:[["app-dip-demo"]],decls:72,vars:3,consts:[[1,"max-w-7xl","mx-auto","space-y-6"],[1,"bg-white","dark:bg-gray-800","rounded-lg","shadow-md","p-6"],[1,"text-3xl","font-bold","text-gray-800","dark:text-gray-200","mb-2"],[1,"text-gray-600","dark:text-gray-400"],[1,"shadow-md"],[1,"space-y-4"],[1,"text-2xl","font-semibold","text-gray-800","dark:text-gray-200"],[1,"text-gray-700","dark:text-gray-300"],[1,"bg-indigo-50","dark:bg-indigo-900/20","p-4","rounded-lg"],[1,"font-semibold","text-indigo-900","dark:text-indigo-200","mb-2"],[1,"list-disc","list-inside","space-y-1","text-indigo-800","dark:text-indigo-300"],["value","0"],["value","1"],[1,"bg-gray-900","text-gray-100","p-4","rounded-lg","overflow-x-auto","text-sm"],[1,"text-2xl","font-semibold","text-gray-800","dark:text-gray-200","mb-4"],[1,"text-gray-700","dark:text-gray-300","mb-6"],["label","Test Dependency Inversion","icon","pi pi-check",3,"click"],["severity","success",3,"text"],[1,"space-y-2","text-gray-700","dark:text-gray-300"],[1,"flex","items-start"],[1,"text-green-500","mr-2"]],template:function(n,l){n&1&&(t(0,"div",0)(1,"div",1)(2,"h1",2),i(3,"Dependency Inversion Principle (DIP)"),e(),t(4,"p",3),i(5," High-level modules should not depend on low-level modules. Both should depend on abstractions. "),e()(),t(6,"p-card",4)(7,"div",5)(8,"h2",6),i(9,"What is DIP?"),e(),t(10,"p",7),i(11," The Dependency Inversion Principle states that high-level modules should not depend on low-level modules. Both should depend on abstractions (interfaces). Abstractions should not depend on details; details should depend on abstractions. This principle promotes loose coupling and makes code more flexible. "),e(),t(12,"div",8)(13,"h3",9),i(14,"Key Benefits:"),e(),t(15,"ul",10)(16,"li"),i(17,"Reduces coupling between modules"),e(),t(18,"li"),i(19,"Makes code more testable (easy to mock dependencies)"),e(),t(20,"li"),i(21,"Enables swapping implementations easily"),e(),t(22,"li"),i(23,"Promotes better architecture and design"),e()()()()(),t(24,"p-card",4)(25,"p-tabs",11)(26,"p-tablist")(27,"p-tab",11),i(28,"\u274C Violation"),e(),t(29,"p-tab",12),i(30,"\u2705 Solution"),e()(),t(31,"p-tabpanels")(32,"p-tabpanel",11)(33,"pre",13)(34,"code"),i(35),e()()(),t(36,"p-tabpanel",12)(37,"pre",13)(38,"code"),i(39),e()()()()()(),t(40,"p-card",4)(41,"h2",14),i(42,"Live Demo"),e(),t(43,"p",15),i(44," This demo shows how dependency injection allows high-level code to depend on abstractions. "),e(),t(45,"div",5)(46,"p-button",16),x("click",function(){return l.testDependencyInversion()}),e(),c(47,B,1,1,"p-message",17),e()(),t(48,"p-card",4)(49,"h2",14),i(50,"Key Takeaways"),e(),t(51,"ul",18)(52,"li",19)(53,"span",20),i(54,"\u2713"),e(),t(55,"span"),i(56,"Depend on abstractions (interfaces), not concrete implementations"),e()(),t(57,"li",19)(58,"span",20),i(59,"\u2713"),e(),t(60,"span"),i(61,"Use dependency injection to provide dependencies"),e()(),t(62,"li",19)(63,"span",20),i(64,"\u2713"),e(),t(65,"span"),i(66,"High-level modules define what they need, low-level modules provide it"),e()(),t(67,"li",19)(68,"span",20),i(69,"\u2713"),e(),t(70,"span"),i(71,"Makes code more flexible, testable, and maintainable"),e()()()()()),n&2&&(r(35),a(l.violationCode),r(4),a(l.solutionCode),r(8),u(l.testResult()?47:-1))},dependencies:[f,E,D,T,w,I,k,U,S,b,R,C],styles:["[_nghost-%COMP%]{display:block;width:100%}"]})};export{P as DipDemoComponent};
