import{a as B,b as H,c as O}from"./chunk-7V3YUGU4.js";import{a as N,b as R}from"./chunk-S2OXY7KE.js";import"./chunk-ZCBYKFSK.js";import"./chunk-BNU3XHMI.js";import"./chunk-ZNZEMCYO.js";import{e as w,i as M,p as k}from"./chunk-5TVMUKYR.js";import{a as I,b as U}from"./chunk-VHQBVC6O.js";import{a as C,b as L,c as T,d as q,e as A,f as _,g as Q,h as P}from"./chunk-AH7MQ5KM.js";import"./chunk-K33OWSJ3.js";import"./chunk-UB7WHAP5.js";import{p as E,q as D}from"./chunk-47HPTYDK.js";import{p as v}from"./chunk-FHCI6K3X.js";import"./chunk-FPPZ4BUR.js";import{$b as f,Hb as x,Jb as y,Ma as r,Xb as a,Yb as c,ab as p,ac as h,bc as S,nb as b,ob as u,tb as m,ub as t,va as d,vb as e,wb as g}from"./chunk-S2MQBBOY.js";import"./chunk-6HR7AMTL.js";function j(o,n){if(o&1&&g(0,"p-message",19),o&2){let i=y();m("text",i.result())}}var F=class o{selectedDatabase=d("mysql");result=d("");violationCode=`
// \u274C VIOLATION: No Abstraction
// Direct dependency on concrete implementations

class UserService {
  // Tightly coupled to MySQL
  private mysql = new MySQLDatabase();

  getUser(id: string): User {
    // Direct MySQL-specific code
    return this.mysql.query(\`SELECT * FROM users WHERE id = \${id}\`);
  }
}

// Problems:
// - Hard to switch databases
// - Tightly coupled to MySQL
// - Hard to test
// - Violates abstraction principle
`;solutionCode=`
// \u2705 SOLUTION: Abstraction
// Abstract interface hides implementation details

// Abstract interface - defines contract
interface Database {
  connect(): void;
  disconnect(): void;
  query(sql: string): any[];
  execute(sql: string): void;
}

// Concrete implementations
class MySQLDatabaseService implements Database {
  connect(): void {
    console.log('Connecting to MySQL...');
  }

  query(sql: string): any[] {
    // MySQL-specific implementation
    return [];
  }

  execute(sql: string): void {
    // MySQL-specific implementation
  }
}

class PostgresDatabaseService implements Database {
  connect(): void {
    console.log('Connecting to PostgreSQL...');
  }

  query(sql: string): any[] {
    // PostgreSQL-specific implementation
    return [];
  }

  execute(sql: string): void {
    // PostgreSQL-specific implementation
  }
}

// High-level code depends on abstraction
class UserRepositoryService {
  constructor(private database: Database) {} // Depends on interface

  findById(id: string): User | null {
    // Works with any Database implementation
    return this.database.query(\`SELECT * FROM users WHERE id = \${id}\`)[0];
  }
}

// Benefits:
// - Easy to swap implementations
// - Loose coupling
// - Testable (can inject mock)
// - Follows abstraction principle
`;databases=[{label:"MySQL",value:"mysql"},{label:"PostgreSQL",value:"postgres"},{label:"MongoDB",value:"mongodb"}];testAbstraction(){let n;switch(this.selectedDatabase()){case"mysql":n=new B;break;case"postgres":n=new H;break;case"mongodb":n=new O;break;default:this.result.set("Invalid database selection");return}try{n.connect();let i=n.query("SELECT * FROM users");n.disconnect(),this.result.set(`Successfully used ${this.selectedDatabase()} database through Database interface.
The UserRepositoryService can work with any Database implementation without modification.
This demonstrates abstraction - hiding implementation details behind an interface.
Query returned ${i.length} results.`)}catch(i){this.result.set(`Error: ${i instanceof Error?i.message:"Unknown error"}`)}}static \u0275fac=function(i){return new(i||o)};static \u0275cmp=p({type:o,selectors:[["app-abstraction-demo"]],decls:76,vars:5,consts:[[1,"max-w-7xl","mx-auto","space-y-8"],[1,"bg-white","dark:bg-gray-800","rounded-lg","shadow-lg","p-8"],[1,"text-4xl","font-bold","text-gray-900","dark:text-gray-100","mb-3"],[1,"text-lg","text-gray-700","dark:text-gray-300"],[1,"shadow-lg"],[1,"space-y-4"],[1,"text-3xl","font-semibold","text-gray-900","dark:text-gray-100","mb-3"],[1,"text-base","text-gray-700","dark:text-gray-300","leading-relaxed"],[1,"bg-teal-50","dark:bg-teal-900/30","p-5","rounded-lg","border","border-teal-200","dark:border-teal-800"],[1,"font-semibold","text-teal-900","dark:text-teal-200","mb-2"],[1,"list-disc","list-inside","space-y-1","text-teal-800","dark:text-teal-300"],["value","0"],["value","1"],[1,"overflow-x-auto"],[1,"text-3xl","font-semibold","text-gray-900","dark:text-gray-100","mb-3","mb-4"],[1,"text-base","text-gray-700","dark:text-gray-300","leading-relaxed","mb-6"],[1,"block","text-sm","font-medium","text-base","text-gray-700","dark:text-gray-300","leading-relaxed","mb-2"],["optionLabel","label","optionValue","value",1,"w-full",3,"ngModelChange","options","ngModel"],["label","Test Abstraction","icon","pi pi-check",3,"click"],["severity","success",3,"text"],[1,"space-y-2","text-base","text-gray-700","dark:text-gray-300","leading-relaxed"],[1,"flex","items-start"],[1,"text-green-500","mr-2"]],template:function(i,s){i&1&&(t(0,"div",0)(1,"div",1)(2,"h1",2),a(3,"Abstraction"),e(),t(4,"p",3),a(5," Hiding complex implementation details and exposing only essential features through a simplified interface. "),e()(),t(6,"p-card",4)(7,"div",5)(8,"h2",6),a(9,"What is Abstraction?"),e(),t(10,"p",7),a(11," Abstraction is the process of hiding complex implementation details and showing only the essential features of an object. It focuses on what an object does rather than how it does it. In programming, abstraction is achieved through abstract classes and interfaces, which define contracts without providing implementation details. "),e(),t(12,"div",8)(13,"h3",9),a(14,"Key Benefits:"),e(),t(15,"ul",10)(16,"li"),a(17,"Simplifies complex systems"),e(),t(18,"li"),a(19,"Hides implementation details"),e(),t(20,"li"),a(21,"Reduces complexity for users"),e(),t(22,"li"),a(23,"Enables flexibility and extensibility"),e()()()()(),t(24,"p-card",4)(25,"p-tabs",11)(26,"p-tablist")(27,"p-tab",11),a(28,"\u274C Violation"),e(),t(29,"p-tab",12),a(30,"\u2705 Solution"),e()(),t(31,"p-tabpanels")(32,"p-tabpanel",11)(33,"pre",13)(34,"code"),a(35),e()()(),t(36,"p-tabpanel",12)(37,"pre",13)(38,"code"),a(39),e()()()()()(),t(40,"p-card",4)(41,"h2",14),a(42,"Live Demo"),e(),t(43,"p",15),a(44," Select a database type and see how the same interface (Database) can work with different implementations. The UserRepositoryService doesn't need to know the specific database details - it works through the abstraction. "),e(),t(45,"div",5)(46,"div")(47,"label",16),a(48,"Select Database"),e(),t(49,"p-select",17),S("ngModelChange",function(l){return h(s.selectedDatabase,l)||(s.selectedDatabase=l),l}),e()(),t(50,"p-button",18),x("click",function(){return s.testAbstraction()}),e(),b(51,j,1,1,"p-message",19),e()(),t(52,"p-card",4)(53,"h2",14),a(54,"Key Takeaways"),e(),t(55,"ul",20)(56,"li",21)(57,"span",22),a(58,"\u2713"),e(),t(59,"span"),a(60,"Use interfaces and abstract classes to define contracts"),e()(),t(61,"li",21)(62,"span",22),a(63,"\u2713"),e(),t(64,"span"),a(65,"Hide implementation details behind abstractions"),e()(),t(66,"li",21)(67,"span",22),a(68,"\u2713"),e(),t(69,"span"),a(70,"Focus on what an object does, not how it does it"),e()(),t(71,"li",21)(72,"span",22),a(73,"\u2713"),e(),t(74,"span"),a(75,"Makes code more maintainable and flexible"),e()()()()()),i&2&&(r(35),c(s.violationCode),r(4),c(s.solutionCode),r(10),m("options",s.databases),f("ngModel",s.selectedDatabase),r(2),u(s.result()?51:-1))},dependencies:[v,k,w,M,L,C,Q,q,T,A,_,D,E,R,N,U,I,P],styles:["[_nghost-%COMP%]{display:block;width:100%}"]})};export{F as AbstractionDemoComponent};
