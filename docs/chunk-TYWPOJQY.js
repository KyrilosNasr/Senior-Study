import{a as h,b as E,c as C,d as S,e as w,f as I,g as k}from"./chunk-AH7MQ5KM.js";import{p as v,q as T}from"./chunk-47HPTYDK.js";import{p as b}from"./chunk-FHCI6K3X.js";import"./chunk-FPPZ4BUR.js";import{Hb as p,Jb as y,Ma as o,Xb as t,Yb as d,ab as x,nb as f,ob as g,ub as n,va as u,vb as e}from"./chunk-S2MQBBOY.js";import"./chunk-6HR7AMTL.js";function R(s,r){if(s&1&&(n(0,"div",21)(1,"pre",25),t(2),e()()),s&2){let i=y();o(2),d(i.result())}}function P(s,r){return s.find(i=>i.id===r)}var m=class{items=[];findById(r){return this.items.find(i=>i.id===r)||null}save(r){let i=this.items.findIndex(a=>a.id===r.id);i>=0?this.items[i]=r:this.items.push(r)}findAll(){return[...this.items]}},D=class s{constraintsCode=`
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
`;result=u("");testConstraints(){let i=P([{id:"1",name:"John Doe",email:"john@example.com"},{id:"2",name:"Jane Smith",email:"jane@example.com"}],"1"),a=i?`Found user: ${i.name} (${i.email})`:"User not found";this.result.set(a)}testRepository(){let r=new m,i=new m;r.save({id:"1",name:"John",email:"john@example.com"}),i.save({id:"1",name:"Laptop",price:999.99});let a=r.findById("1"),l=i.findById("1"),c=[];a&&c.push(`User: ${a.name} - ${a.email}`),l&&c.push(`Product: ${l.name} - $${l.price}`),this.result.set(c.join(`
`))}static \u0275fac=function(i){return new(i||s)};static \u0275cmp=x({type:s,selectors:[["app-generics-demo"]],decls:96,vars:5,consts:[[1,"max-w-7xl","mx-auto","space-y-8"],[1,"bg-white","dark:bg-gray-800","rounded-lg","shadow-lg","p-8"],[1,"text-4xl","font-bold","text-gray-900","dark:text-gray-100","mb-3"],[1,"text-lg","text-gray-700","dark:text-gray-300","leading-relaxed"],[1,"shadow-lg"],[1,"space-y-4"],[1,"text-3xl","font-semibold","text-gray-900","dark:text-gray-100","mb-3"],[1,"text-base","text-gray-700","dark:text-gray-300","leading-relaxed"],[1,"bg-blue-50","dark:bg-blue-900/30","p-5","rounded-lg","border","border-blue-200","dark:border-blue-800"],[1,"text-lg","font-semibold","text-blue-900","dark:text-blue-100","mb-3"],[1,"list-disc","list-inside","space-y-2","text-base","text-blue-800","dark:text-blue-200"],["value","0"],["value","1"],["value","2"],["value","3"],[1,"overflow-x-auto"],[1,"text-3xl","font-semibold","text-gray-900","dark:text-gray-100","mb-3","mb-4"],[1,"text-base","text-gray-700","dark:text-gray-300","leading-relaxed","mb-6"],[1,"flex","gap-5","flex-wrap"],["label","Test Constraints","icon","pi pi-lock",3,"click"],["label","Test Repository","icon","pi pi-database",3,"click"],[1,"bg-gray-100","dark:bg-gray-700","p-5","rounded-lg"],[1,"space-y-2","text-base","text-gray-700","dark:text-gray-300","leading-relaxed"],[1,"flex","items-start"],[1,"text-green-500","mr-2"],[1,"text-sm","text-gray-800","dark:text-gray-200","whitespace-pre-wrap"]],template:function(i,a){i&1&&(n(0,"div",0)(1,"div",1)(2,"h1",2),t(3,"Generics: Constraints, Default Types & Variance"),e(),n(4,"p",3),t(5," Advanced generic programming with constraints, default types, and understanding variance. "),e()(),n(6,"p-card",4)(7,"div",5)(8,"h2",6),t(9,"What are Advanced Generics?"),e(),n(10,"p",7),t(11," Advanced generics allow you to create reusable, type-safe code with constraints, default types, and understanding how variance affects type relationships. "),e(),n(12,"div",8)(13,"h3",9),t(14,"Key Concepts:"),e(),n(15,"ul",10)(16,"li")(17,"strong"),t(18,"Constraints:"),e(),t(19," Limit generic types using "),n(20,"code"),t(21,"extends"),e(),t(22," keyword"),e(),n(23,"li")(24,"strong"),t(25,"Default Types:"),e(),t(26," Provide default type parameters for generics"),e(),n(27,"li")(28,"strong"),t(29,"Variance:"),e(),t(30," How subtyping works with generics (covariant, contravariant, invariant)"),e()()()()(),n(31,"p-card",4)(32,"p-tabs",11)(33,"p-tablist")(34,"p-tab",11),t(35,"Constraints"),e(),n(36,"p-tab",12),t(37,"Default Types"),e(),n(38,"p-tab",13),t(39,"Variance"),e(),n(40,"p-tab",14),t(41,"Practical Example"),e()(),n(42,"p-tabpanels")(43,"p-tabpanel",11)(44,"pre",15)(45,"code"),t(46),e()()(),n(47,"p-tabpanel",12)(48,"pre",15)(49,"code"),t(50),e()()(),n(51,"p-tabpanel",13)(52,"pre",15)(53,"code"),t(54),e()()(),n(55,"p-tabpanel",14)(56,"pre",15)(57,"code"),t(58),e()()()()()(),n(59,"p-card",4)(60,"h2",16),t(61,"Live Demo"),e(),n(62,"p",17),t(63," Test generic constraints and repository pattern. "),e(),n(64,"div",5)(65,"div",18)(66,"p-button",19),p("click",function(){return a.testConstraints()}),e(),n(67,"p-button",20),p("click",function(){return a.testRepository()}),e()(),f(68,R,3,1,"div",21),e()(),n(69,"p-card",4)(70,"h2",16),t(71,"Key Takeaways"),e(),n(72,"ul",22)(73,"li",23)(74,"span",24),t(75,"\u2713"),e(),n(76,"span"),t(77,"Use "),n(78,"code"),t(79,"extends"),e(),t(80," to constrain generic types"),e()(),n(81,"li",23)(82,"span",24),t(83,"\u2713"),e(),n(84,"span"),t(85,"Default type parameters make generics more convenient"),e()(),n(86,"li",23)(87,"span",24),t(88,"\u2713"),e(),n(89,"span"),t(90,"Understanding variance helps with type safety and flexibility"),e()(),n(91,"li",23)(92,"span",24),t(93,"\u2713"),e(),n(94,"span"),t(95,"Generics enable powerful patterns like Repository and Factory"),e()()()()()),i&2&&(o(46),d(a.constraintsCode),o(4),d(a.defaultTypesCode),o(4),d(a.varianceCode),o(4),d(a.practicalExampleCode),o(10),g(a.result()?68:-1))},dependencies:[b,E,h,k,S,C,w,I,T,v],encapsulation:2})};export{D as GenericsDemoComponent};
