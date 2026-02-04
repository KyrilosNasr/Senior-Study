import{e as S}from"./chunk-26I6QKGV.js";import"./chunk-DS4DKGB5.js";import"./chunk-YPUDPSQH.js";import"./chunk-DEGWJE5E.js";import{a as w,b as C,c as I,d as k,e as D}from"./chunk-3ZW5MUH5.js";import"./chunk-SHEHAVXT.js";import{a as h,b as E}from"./chunk-ST7OVFPO.js";import"./chunk-QCJRPF2F.js";import"./chunk-IZU7C3FN.js";import{b as T}from"./chunk-JBIPGRVB.js";import{r as b}from"./chunk-BO564T5E.js";import"./chunk-FPPZ4BUR.js";import{Cb as g,Db as v,Jb as e,Kb as t,Lb as s,Wb as u,Yb as y,Za as d,kc as n,lc as l,nb as x,va as f}from"./chunk-6P3ZW5D6.js";import"./chunk-6HR7AMTL.js";function P(o,r){if(o&1&&(e(0,"div",52)(1,"pre",55),n(2),t()()),o&2){let i=y();d(2),l(i.result())}}function G(o,r){return o.find(i=>i.id===r)}var c=class{items=[];findById(r){return this.items.find(i=>i.id===r)||null}save(r){let i=this.items.findIndex(a=>a.id===r.id);i>=0?this.items[i]=r:this.items.push(r)}findAll(){return[...this.items]}},R=class o{constraintsCode=`
// Generic Constraints: Limit what types can be used
interface Identifiable {
  id: string;
}

// T must extend Identifiable
function findById<T extends Identifiable>(items: T[], id: string): T | undefined {
  return items.find(item => item.id === id);
}

// Multiple Constraints
function processEntity<T extends Identifiable & Named>(entity: T): string {
  return \`\${entity.name} (\${entity.id})\`;
}

// Usage
const users: User[] = [{ id: '1', name: 'John' }];
const user = findById(users, '1');  // Type-safe!
`;defaultTypesCode=`
// Default Type Parameters
interface Repository<T = any> {
  findById(id: string): T | null;
  save(entity: T): void;
}

// Usage with default
const anyRepo: Repository = { ... };

// Usage with specific type
const userRepo: Repository<User> = { ... };
`;varianceCode=`
// Generic Variance: How subtyping works with generics

// Covariance: Producer<T> is covariant
interface Producer<T> {
  produce(): T;
}
// Producer<Dog> is a subtype of Producer<Animal>

// Contravariance: Consumer<T> is contravariant
interface Consumer<T> {
  consume(value: T): void;
}
// Consumer<Animal> is a subtype of Consumer<Dog>

// Invariance: Storage<T> is invariant
interface Storage<T> {
  get(): T;
  set(value: T): void;
}
// Storage<Dog> is NOT a subtype of Storage<Animal>
`;practicalExampleCode=`
// Practical Example: Generic Repository Pattern
class GenericRepository<T extends Identifiable> {
  private items: T[] = [];

  findById(id: string): T | null {
    return this.items.find(item => item.id === id) || null;
  }

  save(entity: T): void {
    const index = this.items.findIndex(item => item.id === entity.id);
    if (index >= 0) {
      this.items[index] = entity;
    } else {
      this.items.push(entity);
    }
  }
}

// Usage
const userRepo = new GenericRepository<User>();
const productRepo = new GenericRepository<Product>();
`;result=f("");testConstraints(){let i=G([{id:"1",name:"John Doe",email:"john@example.com"},{id:"2",name:"Jane Smith",email:"jane@example.com"}],"1"),a=i?`Found user: ${i.name} (${i.email})`:"User not found";this.result.set(a)}testRepository(){let r=new c,i=new c;r.save({id:"1",name:"John",email:"john@example.com"}),i.save({id:"1",name:"Laptop",price:999.99});let a=r.findById("1"),m=i.findById("1"),p=[];a&&p.push(`User: ${a.name} - ${a.email}`),m&&p.push(`Product: ${m.name} - $${m.price}`),this.result.set(p.join(`
`))}static \u0275fac=function(i){return new(i||o)};static \u0275cmp=x({type:o,selectors:[["app-generics-demo"]],decls:130,vars:5,consts:[[1,"container-responsive","space-y-responsive"],[1,"card-modern","padding-responsive","hover-lift","slide-in-up"],[1,"flex","flex-col","lg:flex-row","lg:items-center","lg:justify-between","gap-6"],[1,"flex-1"],[1,"flex","items-center","gap-3","mb-4"],[1,"w-12","h-12","sm:w-14","sm:h-14","rounded-xl","bg-gradient-to-br","from-blue-600","to-cyan-600","flex","items-center","justify-center","shadow-lg"],["name","faSolidGear",1,"text-white","text-xl","sm:text-2xl"],[1,"badge-modern","text-xs","sm:text-sm"],[1,"heading-responsive","text-gradient","mb-4"],[1,"text-responsive","text-gray-700","dark:text-gray-300"],[1,"hidden","lg:block"],[1,"w-32","h-32","rounded-2xl","bg-gradient-to-br","from-blue-600/20","to-cyan-600/20","flex","items-center","justify-center"],["name","faSolidGear",1,"text-6xl","text-blue-600"],[1,"card-modern","hover-lift","slide-in-up"],[1,"padding-responsive","space-y-6"],[1,"w-10","h-10","rounded-lg","bg-gradient-to-br","from-blue-500","to-purple-600","flex","items-center","justify-center"],["name","faSolidLightbulb",1,"text-white"],[1,"subheading-responsive","text-gray-900","dark:text-gray-100"],[1,"text-responsive","text-gray-700","dark:text-gray-300","leading-relaxed"],[1,"glass","rounded-xl","p-6","border-l-4","border-accent"],["name","faSolidStar",1,"text-accent","text-xl"],[1,"text-lg","sm:text-xl","font-semibold","text-gray-900","dark:text-gray-100"],[1,"list-modern"],[1,"text-sm","sm:text-base","text-gray-800","dark:text-gray-200"],[1,"padding-responsive"],[1,"flex","items-center","gap-3","mb-6"],[1,"w-10","h-10","rounded-lg","bg-gradient-to-br","from-green-500","to-teal-600","flex","items-center","justify-center"],["name","faSolidCode",1,"text-white"],["value","0"],[1,"flex","flex-wrap","gap-2","mb-6"],["value","0",1,"flex","items-center","gap-2"],["name","faSolidLock",1,"text-blue-500"],[1,"text-sm","sm:text-base","font-semibold"],["value","1",1,"flex","items-center","gap-2"],["name","faSolidSliders",1,"text-purple-500"],["value","2",1,"flex","items-center","gap-2"],["name","faSolidArrowRightArrowLeft",1,"text-cyan-500"],["value","3",1,"flex","items-center","gap-2"],["name","faSolidRocket",1,"text-green-500"],[1,"code-block-modern"],[1,"overflow-x-auto","text-sm","sm:text-base"],["value","1"],["value","2"],["value","3"],[1,"w-10","h-10","rounded-lg","bg-gradient-to-br","from-purple-500","to-pink-600","flex","items-center","justify-center"],["name","faSolidCirclePlay",1,"text-white"],[1,"text-responsive","text-gray-700","dark:text-gray-300","mb-8"],[1,"space-y-6"],[1,"flex","gap-3","flex-wrap"],[1,"btn-modern",3,"click"],["name","faSolidLock",1,"pe-3"],["name","faSolidDatabase",1,"pe-3"],[1,"glass","rounded-xl","p-6","fade-in"],[1,"w-10","h-10","rounded-lg","bg-gradient-to-br","from-teal-500","to-cyan-600","flex","items-center","justify-center"],["name","faSolidGraduationCap",1,"text-white"],[1,"text-sm","sm:text-base","text-gray-800","dark:text-gray-200","whitespace-pre-wrap"]],template:function(i,a){i&1&&(e(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5),s(6,"ng-icon",6),t(),e(7,"div")(8,"span",7),n(9,"TypeScript"),t()()(),e(10,"h1",8),n(11," Generics: Constraints, Default Types & Variance "),t(),e(12,"p",9),n(13," Advanced generic programming with constraints, default types, and understanding variance. "),t()(),e(14,"div",10)(15,"div",11),s(16,"ng-icon",12),t()()()(),e(17,"p-card",13)(18,"div",14)(19,"div",4)(20,"div",15),s(21,"ng-icon",16),t(),e(22,"h2",17),n(23,"What are Advanced Generics?"),t()(),e(24,"p",18),n(25," Advanced generics allow you to create reusable, type-safe code with constraints, default types, and understanding how variance affects type relationships. "),t(),e(26,"div",19)(27,"div",4),s(28,"ng-icon",20),e(29,"h3",21),n(30,"Key Concepts"),t()(),e(31,"ul",22)(32,"li",23)(33,"strong"),n(34,"Constraints:"),t(),n(35," Limit generic types using "),e(36,"code"),n(37,"extends"),t(),n(38," keyword "),t(),e(39,"li",23)(40,"strong"),n(41,"Default Types:"),t(),n(42," Provide default type parameters for generics "),t(),e(43,"li",23)(44,"strong"),n(45,"Variance:"),t(),n(46," How subtyping works with generics (covariant, contravariant, invariant) "),t()()()()(),e(47,"p-card",13)(48,"div",24)(49,"div",25)(50,"div",26),s(51,"ng-icon",27),t(),e(52,"h2",17),n(53,"Code Examples"),t()(),e(54,"p-tabs",28)(55,"p-tablist",29)(56,"p-tab",30),s(57,"ng-icon",31),e(58,"span",32),n(59,"Constraints"),t()(),e(60,"p-tab",33),s(61,"ng-icon",34),e(62,"span",32),n(63,"Default Types"),t()(),e(64,"p-tab",35),s(65,"ng-icon",36),e(66,"span",32),n(67,"Variance"),t()(),e(68,"p-tab",37),s(69,"ng-icon",38),e(70,"span",32),n(71,"Practical Example"),t()()(),e(72,"p-tabpanels")(73,"p-tabpanel",28)(74,"div",39)(75,"pre",40)(76,"code"),n(77),t()()()(),e(78,"p-tabpanel",41)(79,"div",39)(80,"pre",40)(81,"code"),n(82),t()()()(),e(83,"p-tabpanel",42)(84,"div",39)(85,"pre",40)(86,"code"),n(87),t()()()(),e(88,"p-tabpanel",43)(89,"div",39)(90,"pre",40)(91,"code"),n(92),t()()()()()()()(),e(93,"p-card",13)(94,"div",24)(95,"div",4)(96,"div",44),s(97,"ng-icon",45),t(),e(98,"h2",17),n(99,"Interactive Demo"),t()(),e(100,"p",46),n(101," Test generic constraints and repository pattern. "),t(),e(102,"div",47)(103,"div",48)(104,"button",49),u("click",function(){return a.testConstraints()}),s(105,"ng-icon",50),n(106,"Test Constraints"),t(),e(107,"button",49),u("click",function(){return a.testRepository()}),s(108,"ng-icon",51),n(109,"Test Repository"),t()(),g(110,P,3,1,"div",52),t()()(),e(111,"p-card",13)(112,"div",24)(113,"div",25)(114,"div",53),s(115,"ng-icon",54),t(),e(116,"h2",17),n(117,"Key Takeaways"),t()(),e(118,"ul",22)(119,"li",23),n(120," Use "),e(121,"code"),n(122,"extends"),t(),n(123," to constrain generic types "),t(),e(124,"li",23),n(125," Default type parameters make generics more convenient "),t(),e(126,"li",23),n(127," Understanding variance helps with type safety and flexibility "),t(),e(128,"li",23),n(129," Generics enable powerful patterns like Repository and Factory "),t()()()()()),i&2&&(d(77),l(a.constraintsCode),d(5),l(a.defaultTypesCode),d(5),l(a.varianceCode),d(5),l(a.practicalExampleCode),d(18),v(a.result()?110:-1))},dependencies:[T,b,E,h,D,C,w,I,k,S],encapsulation:2})};export{R as GenericsDemoComponent};
