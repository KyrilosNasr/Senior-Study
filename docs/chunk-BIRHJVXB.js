import{d as T,e as h}from"./chunk-TZQAO3FF.js";import"./chunk-IZO5M3UY.js";import"./chunk-ZY4775QE.js";import"./chunk-ZNXKPSJD.js";import{a as w,b as C,c as I,d as k,e as D}from"./chunk-UVKQ3HHI.js";import"./chunk-M7M6PVNH.js";import{a as S,b as E}from"./chunk-6YR6DT4F.js";import"./chunk-XIG2QSYL.js";import"./chunk-4W5EU4G4.js";import{r as b}from"./chunk-W43CSKKG.js";import"./chunk-FPPZ4BUR.js";import{Db as g,Eb as v,Kb as e,Lb as t,Mb as s,Xb as f,Za as d,Zb as y,lc as i,mc as l,nb as x,va as u}from"./chunk-2VW4HCOQ.js";import"./chunk-6HR7AMTL.js";function P(o,r){if(o&1&&(e(0,"div",51)(1,"pre",54),i(2),t()()),o&2){let n=y();d(2),l(n.result())}}function _(o,r){return o.find(n=>n.id===r)}var c=class{items=[];findById(r){return this.items.find(n=>n.id===r)||null}save(r){let n=this.items.findIndex(a=>a.id===r.id);n>=0?this.items[n]=r:this.items.push(r)}findAll(){return[...this.items]}},R=class o{constraintsCode=`
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
`;result=u("");testConstraints(){let n=_([{id:"1",name:"John Doe",email:"john@example.com"},{id:"2",name:"Jane Smith",email:"jane@example.com"}],"1"),a=n?`Found user: ${n.name} (${n.email})`:"User not found";this.result.set(a)}testRepository(){let r=new c,n=new c;r.save({id:"1",name:"John",email:"john@example.com"}),n.save({id:"1",name:"Laptop",price:999.99});let a=r.findById("1"),m=n.findById("1"),p=[];a&&p.push(`User: ${a.name} - ${a.email}`),m&&p.push(`Product: ${m.name} - $${m.price}`),this.result.set(p.join(`
`))}static \u0275fac=function(n){return new(n||o)};static \u0275cmp=x({type:o,selectors:[["app-generics-demo"]],decls:126,vars:5,consts:[[1,"container-responsive","space-y-responsive"],[1,"card-modern","padding-responsive","hover-lift","slide-in-up"],[1,"flex","flex-col","lg:flex-row","lg:items-center","lg:justify-between","gap-6"],[1,"flex-1"],[1,"flex","items-center","gap-3","mb-4"],[1,"w-12","h-12","sm:w-14","sm:h-14","rounded-xl","bg-gradient-to-br","from-blue-600","to-cyan-600","flex","items-center","justify-center","shadow-lg"],[1,"fas","fa-cog","text-white","text-xl","sm:text-2xl"],[1,"badge-modern","text-xs","sm:text-sm"],[1,"heading-responsive","text-gradient","mb-4"],[1,"text-responsive","text-gray-700","dark:text-gray-300"],[1,"hidden","lg:block"],[1,"w-32","h-32","rounded-2xl","bg-gradient-to-br","from-blue-600/20","to-cyan-600/20","flex","items-center","justify-center"],[1,"fas","fa-cog","text-6xl","text-blue-600"],[1,"card-modern","hover-lift","slide-in-up"],[1,"padding-responsive","space-y-6"],[1,"w-10","h-10","rounded-lg","bg-gradient-to-br","from-blue-500","to-purple-600","flex","items-center","justify-center"],[1,"fas","fa-lightbulb","text-white"],[1,"subheading-responsive","text-gray-900","dark:text-gray-100"],[1,"text-responsive","text-gray-700","dark:text-gray-300","leading-relaxed"],[1,"glass","rounded-xl","p-6","border-l-4","border-accent"],[1,"fas","fa-star","text-accent","text-xl"],[1,"text-lg","sm:text-xl","font-semibold","text-gray-900","dark:text-gray-100"],[1,"list-modern"],[1,"text-sm","sm:text-base","text-gray-800","dark:text-gray-200"],[1,"padding-responsive"],[1,"flex","items-center","gap-3","mb-6"],[1,"w-10","h-10","rounded-lg","bg-gradient-to-br","from-green-500","to-teal-600","flex","items-center","justify-center"],[1,"fas","fa-code","text-white"],["value","0"],[1,"flex","flex-wrap","gap-2","mb-6"],["value","0",1,"flex","items-center","gap-2"],[1,"fas","fa-lock","text-blue-500"],[1,"text-sm","sm:text-base","font-semibold"],["value","1",1,"flex","items-center","gap-2"],[1,"fas","fa-sliders-h","text-purple-500"],["value","2",1,"flex","items-center","gap-2"],[1,"fas","fa-exchange-alt","text-cyan-500"],["value","3",1,"flex","items-center","gap-2"],[1,"fas","fa-rocket","text-green-500"],[1,"code-block-modern"],[1,"overflow-x-auto","text-sm","sm:text-base"],["value","1"],["value","2"],["value","3"],[1,"w-10","h-10","rounded-lg","bg-gradient-to-br","from-purple-500","to-pink-600","flex","items-center","justify-center"],[1,"fas","fa-play-circle","text-white"],[1,"text-responsive","text-gray-700","dark:text-gray-300","mb-8"],[1,"space-y-6"],[1,"flex","gap-3","flex-wrap"],["label","Test Constraints","icon","pi pi-lock",1,"btn-modern",3,"click"],["label","Test Repository","icon","pi pi-database",1,"btn-modern",3,"click"],[1,"glass","rounded-xl","p-6","fade-in"],[1,"w-10","h-10","rounded-lg","bg-gradient-to-br","from-teal-500","to-cyan-600","flex","items-center","justify-center"],[1,"fas","fa-graduation-cap","text-white"],[1,"text-sm","sm:text-base","text-gray-800","dark:text-gray-200","whitespace-pre-wrap"]],template:function(n,a){n&1&&(e(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5),s(6,"i",6),t(),e(7,"div")(8,"span",7),i(9,"TypeScript"),t()()(),e(10,"h1",8),i(11," Generics: Constraints, Default Types & Variance "),t(),e(12,"p",9),i(13," Advanced generic programming with constraints, default types, and understanding variance. "),t()(),e(14,"div",10)(15,"div",11),s(16,"i",12),t()()()(),e(17,"p-card",13)(18,"div",14)(19,"div",4)(20,"div",15),s(21,"i",16),t(),e(22,"h2",17),i(23,"What are Advanced Generics?"),t()(),e(24,"p",18),i(25," Advanced generics allow you to create reusable, type-safe code with constraints, default types, and understanding how variance affects type relationships. "),t(),e(26,"div",19)(27,"div",4),s(28,"i",20),e(29,"h3",21),i(30,"Key Concepts"),t()(),e(31,"ul",22)(32,"li",23)(33,"strong"),i(34,"Constraints:"),t(),i(35," Limit generic types using "),e(36,"code"),i(37,"extends"),t(),i(38," keyword "),t(),e(39,"li",23)(40,"strong"),i(41,"Default Types:"),t(),i(42," Provide default type parameters for generics "),t(),e(43,"li",23)(44,"strong"),i(45,"Variance:"),t(),i(46," How subtyping works with generics (covariant, contravariant, invariant) "),t()()()()(),e(47,"p-card",13)(48,"div",24)(49,"div",25)(50,"div",26),s(51,"i",27),t(),e(52,"h2",17),i(53,"Code Examples"),t()(),e(54,"p-tabs",28)(55,"p-tablist",29)(56,"p-tab",30),s(57,"i",31),e(58,"span",32),i(59,"Constraints"),t()(),e(60,"p-tab",33),s(61,"i",34),e(62,"span",32),i(63,"Default Types"),t()(),e(64,"p-tab",35),s(65,"i",36),e(66,"span",32),i(67,"Variance"),t()(),e(68,"p-tab",37),s(69,"i",38),e(70,"span",32),i(71,"Practical Example"),t()()(),e(72,"p-tabpanels")(73,"p-tabpanel",28)(74,"div",39)(75,"pre",40)(76,"code"),i(77),t()()()(),e(78,"p-tabpanel",41)(79,"div",39)(80,"pre",40)(81,"code"),i(82),t()()()(),e(83,"p-tabpanel",42)(84,"div",39)(85,"pre",40)(86,"code"),i(87),t()()()(),e(88,"p-tabpanel",43)(89,"div",39)(90,"pre",40)(91,"code"),i(92),t()()()()()()()(),e(93,"p-card",13)(94,"div",24)(95,"div",4)(96,"div",44),s(97,"i",45),t(),e(98,"h2",17),i(99,"Interactive Demo"),t()(),e(100,"p",46),i(101," Test generic constraints and repository pattern. "),t(),e(102,"div",47)(103,"div",48)(104,"p-button",49),f("click",function(){return a.testConstraints()}),t(),e(105,"p-button",50),f("click",function(){return a.testRepository()}),t()(),g(106,P,3,1,"div",51),t()()(),e(107,"p-card",13)(108,"div",24)(109,"div",25)(110,"div",52),s(111,"i",53),t(),e(112,"h2",17),i(113,"Key Takeaways"),t()(),e(114,"ul",22)(115,"li",23),i(116," Use "),e(117,"code"),i(118,"extends"),t(),i(119," to constrain generic types "),t(),e(120,"li",23),i(121," Default type parameters make generics more convenient "),t(),e(122,"li",23),i(123," Understanding variance helps with type safety and flexibility "),t(),e(124,"li",23),i(125," Generics enable powerful patterns like Repository and Factory "),t()()()()()),n&2&&(d(77),l(a.constraintsCode),d(5),l(a.defaultTypesCode),d(5),l(a.varianceCode),d(5),l(a.practicalExampleCode),d(14),v(a.result()?106:-1))},dependencies:[b,E,S,D,C,w,I,k,h,T],encapsulation:2})};export{R as GenericsDemoComponent};
