import{a as O,b as R,c as U}from"./chunk-7V3YUGU4.js";import{a as I,b as j}from"./chunk-CCIXEDXD.js";import"./chunk-OKKGN7BT.js";import"./chunk-BPLO7K3K.js";import"./chunk-WNDTDVSB.js";import{e as w,i as D,p as k}from"./chunk-JMY276AL.js";import{c as E}from"./chunk-DWOAIROL.js";import"./chunk-4WL4JRY5.js";import"./chunk-7HDGE6MB.js";import"./chunk-KDOOMALM.js";import{b as P}from"./chunk-MFLIXFRL.js";import{a as M,b as C,c as T,d as L,e as q,f as A,g as _,h as Q}from"./chunk-OAZ4ZSRP.js";import"./chunk-6GNMPK52.js";import"./chunk-UB7WHAP5.js";import"./chunk-2VTPWLFV.js";import{p as S}from"./chunk-FHCI6K3X.js";import"./chunk-FPPZ4BUR.js";import{$b as y,Hb as g,Jb as u,Ma as o,Xb as i,Yb as d,ab as p,ac as h,bc as v,nb as b,ob as f,tb as x,ub as e,va as c,vb as t,wb as a}from"./chunk-S2MQBBOY.js";import"./chunk-6HR7AMTL.js";function B(l,r){if(l&1&&(e(0,"div",52)(1,"h4",62),a(2,"i",34),i(3," Result "),t(),e(4,"p",63),i(5),t()()),l&2){let n=u();o(5),d(n.result())}}var H=class l{selectedDatabase=c("mysql");result=c("");violationCode=`
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
`;databases=[{label:"MySQL",value:"mysql"},{label:"PostgreSQL",value:"postgres"},{label:"MongoDB",value:"mongodb"}];testAbstraction(){let r;switch(this.selectedDatabase()){case"mysql":r=new O;break;case"postgres":r=new R;break;case"mongodb":r=new U;break;default:this.result.set("Invalid database selection");return}try{r.connect();let n=r.query("SELECT * FROM users");r.disconnect(),this.result.set(`Successfully used ${this.selectedDatabase()} database through Database interface.
The UserRepositoryService can work with any Database implementation without modification.
This demonstrates abstraction - hiding implementation details behind an interface.
Query returned ${n.length} results.`)}catch(n){this.result.set(`Error: ${n instanceof Error?n.message:"Unknown error"}`)}}static \u0275fac=function(n){return new(n||l)};static \u0275cmp=p({type:l,selectors:[["app-abstraction-demo"]],decls:123,vars:5,consts:[[1,"container-responsive","space-y-responsive"],[1,"card-modern","padding-responsive","hover-lift","slide-in-up"],[1,"flex","flex-col","lg:flex-row","lg:items-center","lg:justify-between","gap-6"],[1,"flex-1"],[1,"flex","items-center","gap-3","mb-4"],[1,"w-12","h-12","sm:w-14","sm:h-14","rounded-xl","bg-gradient-to-br","from-teal-500","to-cyan-600","flex","items-center","justify-center","shadow-lg"],[1,"fas","fa-layer-group","text-white","text-xl","sm:text-2xl"],[1,"badge-modern","text-xs","sm:text-sm"],[1,"heading-responsive","text-gradient","mb-4"],[1,"text-responsive","text-gray-700","dark:text-gray-300"],[1,"hidden","lg:block"],[1,"w-32","h-32","rounded-2xl","bg-gradient-to-br","from-teal-500/20","to-cyan-600/20","flex","items-center","justify-center"],[1,"fas","fa-cube","text-6xl","text-teal-500"],[1,"card-modern","hover-lift","slide-in-up"],[1,"padding-responsive","space-y-6"],[1,"w-10","h-10","rounded-lg","bg-gradient-to-br","from-teal-500","to-cyan-600","flex","items-center","justify-center"],[1,"fas","fa-lightbulb","text-white"],[1,"subheading-responsive","text-gray-900","dark:text-gray-100"],[1,"text-responsive","text-gray-700","dark:text-gray-300","leading-relaxed"],[1,"glass","rounded-xl","p-6","border-l-4","border-accent"],[1,"fas","fa-star","text-accent","text-xl"],[1,"text-lg","sm:text-xl","font-semibold","text-gray-900","dark:text-gray-100"],[1,"list-modern"],[1,"text-sm","sm:text-base","text-gray-800","dark:text-gray-200"],[1,"padding-responsive"],[1,"flex","items-center","gap-3","mb-6"],[1,"w-10","h-10","rounded-lg","bg-gradient-to-br","from-green-500","to-teal-600","flex","items-center","justify-center"],[1,"fas","fa-code","text-white"],["value","0"],[1,"flex","flex-wrap","gap-2","mb-6"],["value","0",1,"flex","items-center","gap-2"],[1,"fas","fa-times-circle","text-red-500"],[1,"text-sm","sm:text-base","font-semibold"],["value","1",1,"flex","items-center","gap-2"],[1,"fas","fa-check-circle","text-green-500"],[1,"code-block-modern"],[1,"overflow-x-auto","text-sm","sm:text-base"],["value","1"],[1,"w-10","h-10","rounded-lg","bg-gradient-to-br","from-purple-500","to-pink-600","flex","items-center","justify-center"],[1,"fas","fa-play-circle","text-white"],[1,"text-responsive","text-gray-700","dark:text-gray-300","mb-8"],[1,"space-y-6"],[1,"glass","rounded-xl","p-6","border","border-gray-200","dark:border-gray-700"],[1,"text-lg","sm:text-xl","font-semibold","text-gray-800","dark:text-gray-200","mb-4","flex","items-center","gap-2"],[1,"fas","fa-database","text-accent"],[1,"space-y-4"],[1,"space-y-2"],[1,"block","text-sm","font-semibold","text-gray-700","dark:text-gray-300"],[1,"fas","fa-server","text-accent","mr-2"],["optionLabel","label","optionValue","value",1,"w-full",3,"ngModelChange","options","ngModel"],[1,"btn-modern","w-full","px-8","py-4","rounded-xl","font-semibold","text-base","sm:text-lg","flex","items-center","justify-center","gap-3","shadow-lg","hover:shadow-xl","transition-all","duration-300","hover:scale-105","active:scale-100",3,"click"],["aria-hidden","true",1,"fas","fa-check-circle","text-lg","sm:text-xl"],[1,"glass","rounded-xl","p-6","border-l-4","border-green-500"],[1,"fas","fa-graduation-cap","text-white"],[1,"mt-8","pt-6","border-t","border-gray-200","dark:border-gray-700"],[1,"text-lg","font-semibold","text-gray-900","dark:text-gray-100","mb-4","flex","items-center","gap-2"],[1,"fas","fa-book-open","text-accent"],[1,"flex","flex-wrap","gap-3"],["href","#",1,"badge-outline","hover:scale-105","transition-transform"],[1,"fas","fa-external-link-alt","mr-2"],[1,"fas","fa-video","mr-2"],[1,"fas","fa-code-branch","mr-2"],[1,"text-lg","font-semibold","text-green-800","dark:text-green-200","mb-3","flex","items-center","gap-2"],[1,"text-sm","sm:text-base","text-gray-800","dark:text-gray-200","whitespace-pre-line"]],template:function(n,s){n&1&&(e(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5),a(6,"i",6),t(),e(7,"div")(8,"span",7),i(9,"OOP Concepts"),t()()(),e(10,"h1",8),i(11," Abstraction "),t(),e(12,"p",9),i(13," Hiding complex implementation details and exposing only essential features through a simplified interface. "),t()(),e(14,"div",10)(15,"div",11),a(16,"i",12),t()()()(),e(17,"p-card",13)(18,"div",14)(19,"div",4)(20,"div",15),a(21,"i",16),t(),e(22,"h2",17),i(23,"What is Abstraction?"),t()(),e(24,"p",18),i(25," Abstraction is the process of hiding complex implementation details and showing only the essential features of an object. It focuses on what an object does rather than how it does it. In programming, abstraction is achieved through abstract classes and interfaces, which define contracts without providing implementation details. "),t(),e(26,"div",19)(27,"div",4),a(28,"i",20),e(29,"h3",21),i(30,"Key Benefits"),t()(),e(31,"ul",22)(32,"li",23),i(33," Simplifies complex systems "),t(),e(34,"li",23),i(35," Hides implementation details "),t(),e(36,"li",23),i(37," Reduces complexity for users "),t(),e(38,"li",23),i(39," Enables flexibility and extensibility "),t()()()()(),e(40,"p-card",13)(41,"div",24)(42,"div",25)(43,"div",26),a(44,"i",27),t(),e(45,"h2",17),i(46,"Code Examples"),t()(),e(47,"p-tabs",28)(48,"p-tablist",29)(49,"p-tab",30),a(50,"i",31),e(51,"span",32),i(52,"Violation"),t()(),e(53,"p-tab",33),a(54,"i",34),e(55,"span",32),i(56,"Solution"),t()()(),e(57,"p-tabpanels")(58,"p-tabpanel",28)(59,"div",35)(60,"pre",36)(61,"code"),i(62),t()()()(),e(63,"p-tabpanel",37)(64,"div",35)(65,"pre",36)(66,"code"),i(67),t()()()()()()()(),e(68,"p-card",13)(69,"div",24)(70,"div",4)(71,"div",38),a(72,"i",39),t(),e(73,"h2",17),i(74,"Interactive Demo"),t()(),e(75,"p",40),i(76," Select a database type and see how the same interface (Database) can work with different implementations. The UserRepositoryService doesn't need to know the specific database details - it works through the abstraction. "),t(),e(77,"div",41)(78,"div",42)(79,"h3",43),a(80,"i",44),i(81," Select Database "),t(),e(82,"div",45)(83,"div",46)(84,"label",47),a(85,"i",48),i(86,"Database Type "),t(),e(87,"p-select",49),v("ngModelChange",function(m){return h(s.selectedDatabase,m)||(s.selectedDatabase=m),m}),t()(),e(88,"button",50),g("click",function(){return s.testAbstraction()}),a(89,"i",51),e(90,"span"),i(91,"Test Abstraction"),t()()()(),b(92,B,6,1,"div",52),t()()(),e(93,"p-card",13)(94,"div",24)(95,"div",25)(96,"div",15),a(97,"i",53),t(),e(98,"h2",17),i(99,"Key Takeaways"),t()(),e(100,"ul",22)(101,"li",23),i(102," Use interfaces and abstract classes to define contracts "),t(),e(103,"li",23),i(104," Hide implementation details behind abstractions "),t(),e(105,"li",23),i(106," Focus on what an object does, not how it does it "),t(),e(107,"li",23),i(108," Makes code more maintainable and flexible "),t()(),e(109,"div",54)(110,"h3",55),a(111,"i",56),i(112," Learn More "),t(),e(113,"div",57)(114,"a",58),a(115,"i",59),i(116,"Documentation "),t(),e(117,"a",58),a(118,"i",60),i(119,"Video Tutorial "),t(),e(120,"a",58),a(121,"i",61),i(122,"GitHub Examples "),t()()()()()()),n&2&&(o(62),d(s.violationCode),o(5),d(s.solutionCode),o(20),x("options",s.databases),y("ngModel",s.selectedDatabase),o(5),f(s.result()?92:-1))},dependencies:[S,k,w,D,C,M,_,L,T,q,A,E,j,I,P,Q],styles:["[_nghost-%COMP%]{display:block;width:100%}"]})};export{H as AbstractionDemoComponent};
