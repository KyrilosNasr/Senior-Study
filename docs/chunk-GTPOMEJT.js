import{b as h}from"./chunk-QB6ZO67J.js";import"./chunk-RMJAI7RZ.js";import{e as b}from"./chunk-26I6QKGV.js";import"./chunk-DS4DKGB5.js";import"./chunk-YPUDPSQH.js";import"./chunk-DEGWJE5E.js";import{a as S,b as k,c as E,d as C,e as D}from"./chunk-3ZW5MUH5.js";import"./chunk-SHEHAVXT.js";import{a as T,b as w}from"./chunk-ST7OVFPO.js";import"./chunk-QCJRPF2F.js";import"./chunk-IZU7C3FN.js";import{r as v}from"./chunk-BO564T5E.js";import"./chunk-FPPZ4BUR.js";import{Cb as g,Db as x,Jb as e,Kb as t,Lb as a,Wb as p,Yb as y,Za as d,kc as n,lc as m,nb as f,va as c}from"./chunk-6P3ZW5D6.js";import"./chunk-6HR7AMTL.js";function _(r,l){if(r&1&&(e(0,"div",50)(1,"pre",53),n(2),t()()),r&2){let s=y();d(2),m(s.result())}}function R(r){return r.type==="dog"}function U(r){return r.type==="cat"}function A(r){return typeof r=="string"}function P(r){return typeof r=="number"}function j(r){return Array.isArray(r)}var G=class r{typeGuardsCode=`
// Type Guards: Narrow types at runtime
function isString(value: unknown): value is string {
  return typeof value === 'string';
}

function isNumber(value: unknown): value is number {
  return typeof value === 'number';
}

// Usage
function processValue(value: unknown) {
  if (isString(value)) {
    // TypeScript knows value is string here
    console.log(value.toUpperCase());
  } else if (isNumber(value)) {
    // TypeScript knows value is number here
    console.log(value.toFixed(2));
  }
}
`;discriminatedUnionsCode=`
// Discriminated Unions with Type Guards
interface Dog {
  type: 'dog';
  bark: () => void;
}

interface Cat {
  type: 'cat';
  meow: () => void;
}

type Animal = Dog | Cat;

function isDog(animal: Animal): animal is Dog {
  return animal.type === 'dog';
}

function handleAnimal(animal: Animal) {
  if (isDog(animal)) {
    animal.bark();  // TypeScript knows it's a Dog
  } else {
    animal.meow();  // TypeScript knows it's a Cat
  }
}
`;resultPatternCode=`
// Result Pattern with Type Guards
type Result<T> = 
  | { success: true; data: T }
  | { success: false; error: string };

function isSuccess<T>(result: Result<T>): result is { success: true; data: T } {
  return result.success === true;
}

function handleResult<T>(result: Result<T>) {
  if (isSuccess(result)) {
    // TypeScript knows result.data exists
    console.log(result.data);
  } else {
    // TypeScript knows result.error exists
    console.error(result.error);
  }
}
`;result=c("");testTypeGuards(){let s=["hello",42,!0,[1,2,3]].map(i=>A(i)?`String: ${i.toUpperCase()}`:P(i)?`Number: ${i.toFixed(2)}`:j(i)?`Array: [${i.join(", ")}]`:`Unknown: ${i}`);this.result.set(s.join(`
`))}testDiscriminatedUnions(){let i=[{type:"dog",bark:()=>console.log("Woof!")},{type:"cat",meow:()=>console.log("Meow!")}],o=[];i.forEach(u=>{R(u)?o.push("Dog detected - can call bark()"):U(u)&&o.push("Cat detected - can call meow()")}),this.result.set(o.join(`
`))}testResultPattern(){let l={success:!0,data:"Operation completed"},s={success:!1,error:"Something went wrong"},i=[];l.success&&i.push(`Success: ${l.data}`),s.success||i.push(`Error: ${s.error}`),this.result.set(i.join(`
`))}static \u0275fac=function(s){return new(s||r)};static \u0275cmp=f({type:r,selectors:[["app-type-guards-demo"]],decls:124,vars:4,consts:[[1,"container-responsive","space-y-responsive"],[1,"card-modern","padding-responsive","hover-lift","slide-in-up"],[1,"flex","flex-col","lg:flex-row","lg:items-center","lg:justify-between","gap-6"],[1,"flex-1"],[1,"flex","items-center","gap-3","mb-4"],[1,"w-12","h-12","sm:w-14","sm:h-14","rounded-xl","bg-gradient-to-br","from-blue-600","to-cyan-600","flex","items-center","justify-center","shadow-lg"],[1,"fas","fa-shield-alt","text-white","text-xl","sm:text-2xl"],[1,"badge-modern","text-xs","sm:text-sm"],[1,"heading-responsive","text-gradient","mb-4"],[1,"text-responsive","text-gray-700","dark:text-gray-300"],[1,"hidden","lg:block"],[1,"w-32","h-32","rounded-2xl","bg-gradient-to-br","from-blue-600/20","to-cyan-600/20","flex","items-center","justify-center"],[1,"fas","fa-shield-alt","text-6xl","text-blue-600"],[1,"card-modern","hover-lift","slide-in-up"],[1,"padding-responsive","space-y-6"],[1,"w-10","h-10","rounded-lg","bg-gradient-to-br","from-blue-500","to-purple-600","flex","items-center","justify-center"],[1,"fas","fa-lightbulb","text-white"],[1,"subheading-responsive","text-gray-900","dark:text-gray-100"],[1,"text-responsive","text-gray-700","dark:text-gray-300","leading-relaxed"],[1,"glass","rounded-xl","p-6","border-l-4","border-accent"],[1,"fas","fa-star","text-accent","text-xl"],[1,"text-lg","sm:text-xl","font-semibold","text-gray-900","dark:text-gray-100"],[1,"list-modern"],[1,"text-sm","sm:text-base","text-gray-800","dark:text-gray-200"],[1,"padding-responsive"],[1,"flex","items-center","gap-3","mb-6"],[1,"w-10","h-10","rounded-lg","bg-gradient-to-br","from-green-500","to-teal-600","flex","items-center","justify-center"],[1,"fas","fa-code","text-white"],["value","0"],[1,"flex","flex-wrap","gap-2","mb-6"],["value","0",1,"flex","items-center","gap-2"],[1,"fas","fa-shield-alt","text-blue-500"],[1,"text-sm","sm:text-base","font-semibold"],["value","1",1,"flex","items-center","gap-2"],[1,"fas","fa-sitemap","text-purple-500"],["value","2",1,"flex","items-center","gap-2"],[1,"fas","fa-check-circle","text-green-500"],[1,"code-block-modern"],[1,"overflow-x-auto","text-sm","sm:text-base"],["value","1"],["value","2"],[1,"w-10","h-10","rounded-lg","bg-gradient-to-br","from-purple-500","to-pink-600","flex","items-center","justify-center"],[1,"fas","fa-play-circle","text-white"],[1,"text-responsive","text-gray-700","dark:text-gray-300","mb-8"],[1,"space-y-6"],[1,"flex","gap-3","flex-wrap"],[1,"btn-modern",3,"click"],[1,"pi","pi-shield","pe-3"],[1,"pi","pi-sitemap","pe-3"],[1,"pi","pi-check-circle","pe-3"],[1,"glass","rounded-xl","p-6","fade-in"],[1,"w-10","h-10","rounded-lg","bg-gradient-to-br","from-teal-500","to-cyan-600","flex","items-center","justify-center"],[1,"fas","fa-graduation-cap","text-white"],[1,"text-sm","sm:text-base","text-gray-800","dark:text-gray-200","whitespace-pre-wrap"]],template:function(s,i){s&1&&(e(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5),a(6,"i",6),t(),e(7,"div")(8,"span",7),n(9,"TypeScript"),t()()(),e(10,"h1",8),n(11," Type Guards & Type Predicates "),t(),e(12,"p",9),n(13," Narrow types at runtime and enable type-safe code with type guards and predicates. "),t()(),e(14,"div",10)(15,"div",11),a(16,"i",12),t()()()(),e(17,"p-card",13)(18,"div",14)(19,"div",4)(20,"div",15),a(21,"i",16),t(),e(22,"h2",17),n(23,"What are Type Guards?"),t()(),e(24,"p",18),n(25," Type guards are functions that help TypeScript narrow down types at runtime. They use type predicates (value is Type) to tell the compiler that a value is of a specific type after a runtime check. "),t(),e(26,"div",19)(27,"div",4),a(28,"i",20),e(29,"h3",21),n(30,"Key Concepts"),t()(),e(31,"ul",22)(32,"li",23)(33,"strong"),n(34,"Type Guards:"),t(),n(35," Functions that narrow types using "),e(36,"code"),n(37,"value is Type"),t(),n(38," syntax "),t(),e(39,"li",23)(40,"strong"),n(41,"Type Predicates:"),t(),n(42," Return type annotations that tell TypeScript about type narrowing "),t(),e(43,"li",23)(44,"strong"),n(45,"Discriminated Unions:"),t(),n(46," Union types with a common property used for type narrowing "),t()()()()(),e(47,"p-card",13)(48,"div",24)(49,"div",25)(50,"div",26),a(51,"i",27),t(),e(52,"h2",17),n(53,"Code Examples"),t()(),e(54,"p-tabs",28)(55,"p-tablist",29)(56,"p-tab",30),a(57,"i",31),e(58,"span",32),n(59,"Type Guards"),t()(),e(60,"p-tab",33),a(61,"i",34),e(62,"span",32),n(63,"Discriminated Unions"),t()(),e(64,"p-tab",35),a(65,"i",36),e(66,"span",32),n(67,"Result Pattern"),t()()(),e(68,"p-tabpanels")(69,"p-tabpanel",28)(70,"div",37)(71,"pre",38)(72,"code"),n(73),t()()()(),e(74,"p-tabpanel",39)(75,"div",37)(76,"pre",38)(77,"code"),n(78),t()()()(),e(79,"p-tabpanel",40)(80,"div",37)(81,"pre",38)(82,"code"),n(83),t()()()()()()()(),e(84,"p-card",13)(85,"div",24)(86,"div",4)(87,"div",41),a(88,"i",42),t(),e(89,"h2",17),n(90,"Interactive Demo"),t()(),e(91,"p",43),n(92," Test type guards and type predicates in action. "),t(),e(93,"div",44)(94,"div",45)(95,"button",46),p("click",function(){return i.testTypeGuards()}),a(96,"i",47),n(97," Test Type Guards"),t(),e(98,"button",46),p("click",function(){return i.testDiscriminatedUnions()}),a(99,"i",48),n(100,"Test Discriminated Unions"),t(),e(101,"button",46),p("click",function(){return i.testResultPattern()}),a(102,"i",49),n(103,"Test Result Pattern"),t()(),g(104,_,3,1,"div",50),t()()(),e(105,"p-card",13)(106,"div",24)(107,"div",25)(108,"div",51),a(109,"i",52),t(),e(110,"h2",17),n(111,"Key Takeaways"),t()(),e(112,"ul",22)(113,"li",23),n(114," Type guards use the "),e(115,"code"),n(116,"value is Type"),t(),n(117," return type annotation "),t(),e(118,"li",23),n(119," They enable type narrowing after runtime checks "),t(),e(120,"li",23),n(121," Discriminated unions work great with type guards "),t(),e(122,"li",23),n(123," Essential for handling unknown types and union types safely "),t()()()()()),s&2&&(d(73),m(i.typeGuardsCode),d(5),m(i.discriminatedUnionsCode),d(5),m(i.resultPatternCode),d(21),x(i.result()?104:-1))},dependencies:[v,w,T,D,k,S,E,C,b,h],encapsulation:2})};export{G as TypeGuardsDemoComponent};
