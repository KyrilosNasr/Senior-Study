import{w as T}from"./chunk-MWI2D735.js";import{d as v,e as h}from"./chunk-YEZRGREG.js";import"./chunk-WXMMCV33.js";import"./chunk-4JJEULIU.js";import"./chunk-ERLXMSWH.js";import{a as k,b as E,c as C,d as D,e as _}from"./chunk-FRDNIM2O.js";import"./chunk-LBBDP666.js";import{a as w,b as S}from"./chunk-O5DX6C7Z.js";import"./chunk-NBRYHMVY.js";import"./chunk-DOJ5NW32.js";import{r as b}from"./chunk-RWFPYU6R.js";import"./chunk-FPPZ4BUR.js";import{Cb as g,Db as y,Jb as e,Kb as t,Lb as s,Wb as p,Yb as x,Za as d,kc as n,lc as m,nb as f,va as c}from"./chunk-LNAK4PJ4.js";import"./chunk-6HR7AMTL.js";function R(r,l){if(r&1&&(e(0,"div",49)(1,"pre",52),n(2),t()()),r&2){let a=x();d(2),m(a.result())}}function U(r){return r.type==="dog"}function A(r){return r.type==="cat"}function P(r){return typeof r=="string"}function j(r){return typeof r=="number"}function N(r){return Array.isArray(r)}var G=class r{typeGuardsCode=`
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
`;result=c("");testTypeGuards(){let a=["hello",42,!0,[1,2,3]].map(i=>P(i)?`String: ${i.toUpperCase()}`:j(i)?`Number: ${i.toFixed(2)}`:N(i)?`Array: [${i.join(", ")}]`:`Unknown: ${i}`);this.result.set(a.join(`
`))}testDiscriminatedUnions(){let i=[{type:"dog",bark:()=>console.log("Woof!")},{type:"cat",meow:()=>console.log("Meow!")}],o=[];i.forEach(u=>{U(u)?o.push("Dog detected - can call bark()"):A(u)&&o.push("Cat detected - can call meow()")}),this.result.set(o.join(`
`))}testResultPattern(){let l={success:!0,data:"Operation completed"},a={success:!1,error:"Something went wrong"},i=[];l.success&&i.push(`Success: ${l.data}`),a.success||i.push(`Error: ${a.error}`),this.result.set(i.join(`
`))}static \u0275fac=function(a){return new(a||r)};static \u0275cmp=f({type:r,selectors:[["app-type-guards-demo"]],decls:118,vars:4,consts:[[1,"container-responsive","space-y-responsive"],[1,"card-modern","padding-responsive","hover-lift","slide-in-up"],[1,"flex","flex-col","lg:flex-row","lg:items-center","lg:justify-between","gap-6"],[1,"flex-1"],[1,"flex","items-center","gap-3","mb-4"],[1,"w-12","h-12","sm:w-14","sm:h-14","rounded-xl","bg-gradient-to-br","from-blue-600","to-cyan-600","flex","items-center","justify-center","shadow-lg"],[1,"fas","fa-shield-alt","text-white","text-xl","sm:text-2xl"],[1,"badge-modern","text-xs","sm:text-sm"],[1,"heading-responsive","text-gradient","mb-4"],[1,"text-responsive","text-gray-700","dark:text-gray-300"],[1,"hidden","lg:block"],[1,"w-32","h-32","rounded-2xl","bg-gradient-to-br","from-blue-600/20","to-cyan-600/20","flex","items-center","justify-center"],[1,"fas","fa-shield-alt","text-6xl","text-blue-600"],[1,"card-modern","hover-lift","slide-in-up"],[1,"padding-responsive","space-y-6"],[1,"w-10","h-10","rounded-lg","bg-gradient-to-br","from-blue-500","to-purple-600","flex","items-center","justify-center"],[1,"fas","fa-lightbulb","text-white"],[1,"subheading-responsive","text-gray-900","dark:text-gray-100"],[1,"text-responsive","text-gray-700","dark:text-gray-300","leading-relaxed"],[1,"glass","rounded-xl","p-6","border-l-4","border-accent"],[1,"fas","fa-star","text-accent","text-xl"],[1,"text-lg","sm:text-xl","font-semibold","text-gray-900","dark:text-gray-100"],[1,"list-modern"],[1,"text-sm","sm:text-base","text-gray-800","dark:text-gray-200"],[1,"padding-responsive"],[1,"flex","items-center","gap-3","mb-6"],[1,"w-10","h-10","rounded-lg","bg-gradient-to-br","from-green-500","to-teal-600","flex","items-center","justify-center"],[1,"fas","fa-code","text-white"],["value","0"],[1,"flex","flex-wrap","gap-2","mb-6"],["value","0",1,"flex","items-center","gap-2"],[1,"fas","fa-shield-alt","text-blue-500"],[1,"text-sm","sm:text-base","font-semibold"],["value","1",1,"flex","items-center","gap-2"],[1,"fas","fa-sitemap","text-purple-500"],["value","2",1,"flex","items-center","gap-2"],[1,"fas","fa-check-circle","text-green-500"],[1,"code-block-modern"],[1,"overflow-x-auto","text-sm","sm:text-base"],["value","1"],["value","2"],[1,"w-10","h-10","rounded-lg","bg-gradient-to-br","from-purple-500","to-pink-600","flex","items-center","justify-center"],[1,"fas","fa-play-circle","text-white"],[1,"text-responsive","text-gray-700","dark:text-gray-300","mb-8"],[1,"space-y-6"],[1,"flex","gap-3","flex-wrap"],["label","Test Type Guards","icon","pi pi-shield",1,"btn-modern",3,"click"],["label","Test Discriminated Unions","icon","pi pi-sitemap",1,"btn-modern",3,"click"],["label","Test Result Pattern","icon","pi pi-check-circle",1,"btn-modern",3,"click"],[1,"glass","rounded-xl","p-6","fade-in"],[1,"w-10","h-10","rounded-lg","bg-gradient-to-br","from-teal-500","to-cyan-600","flex","items-center","justify-center"],[1,"fas","fa-graduation-cap","text-white"],[1,"text-sm","sm:text-base","text-gray-800","dark:text-gray-200","whitespace-pre-wrap"]],template:function(a,i){a&1&&(e(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5),s(6,"i",6),t(),e(7,"div")(8,"span",7),n(9,"TypeScript"),t()()(),e(10,"h1",8),n(11," Type Guards & Type Predicates "),t(),e(12,"p",9),n(13," Narrow types at runtime and enable type-safe code with type guards and predicates. "),t()(),e(14,"div",10)(15,"div",11),s(16,"i",12),t()()()(),e(17,"p-card",13)(18,"div",14)(19,"div",4)(20,"div",15),s(21,"i",16),t(),e(22,"h2",17),n(23,"What are Type Guards?"),t()(),e(24,"p",18),n(25," Type guards are functions that help TypeScript narrow down types at runtime. They use type predicates (value is Type) to tell the compiler that a value is of a specific type after a runtime check. "),t(),e(26,"div",19)(27,"div",4),s(28,"i",20),e(29,"h3",21),n(30,"Key Concepts"),t()(),e(31,"ul",22)(32,"li",23)(33,"strong"),n(34,"Type Guards:"),t(),n(35," Functions that narrow types using "),e(36,"code"),n(37,"value is Type"),t(),n(38," syntax "),t(),e(39,"li",23)(40,"strong"),n(41,"Type Predicates:"),t(),n(42," Return type annotations that tell TypeScript about type narrowing "),t(),e(43,"li",23)(44,"strong"),n(45,"Discriminated Unions:"),t(),n(46," Union types with a common property used for type narrowing "),t()()()()(),e(47,"p-card",13)(48,"div",24)(49,"div",25)(50,"div",26),s(51,"i",27),t(),e(52,"h2",17),n(53,"Code Examples"),t()(),e(54,"p-tabs",28)(55,"p-tablist",29)(56,"p-tab",30),s(57,"i",31),e(58,"span",32),n(59,"Type Guards"),t()(),e(60,"p-tab",33),s(61,"i",34),e(62,"span",32),n(63,"Discriminated Unions"),t()(),e(64,"p-tab",35),s(65,"i",36),e(66,"span",32),n(67,"Result Pattern"),t()()(),e(68,"p-tabpanels")(69,"p-tabpanel",28)(70,"div",37)(71,"pre",38)(72,"code"),n(73),t()()()(),e(74,"p-tabpanel",39)(75,"div",37)(76,"pre",38)(77,"code"),n(78),t()()()(),e(79,"p-tabpanel",40)(80,"div",37)(81,"pre",38)(82,"code"),n(83),t()()()()()()()(),e(84,"p-card",13)(85,"div",24)(86,"div",4)(87,"div",41),s(88,"i",42),t(),e(89,"h2",17),n(90,"Interactive Demo"),t()(),e(91,"p",43),n(92," Test type guards and type predicates in action. "),t(),e(93,"div",44)(94,"div",45)(95,"p-button",46),p("click",function(){return i.testTypeGuards()}),t(),e(96,"p-button",47),p("click",function(){return i.testDiscriminatedUnions()}),t(),e(97,"p-button",48),p("click",function(){return i.testResultPattern()}),t()(),g(98,R,3,1,"div",49),t()()(),e(99,"p-card",13)(100,"div",24)(101,"div",25)(102,"div",50),s(103,"i",51),t(),e(104,"h2",17),n(105,"Key Takeaways"),t()(),e(106,"ul",22)(107,"li",23),n(108," Type guards use the "),e(109,"code"),n(110,"value is Type"),t(),n(111," return type annotation "),t(),e(112,"li",23),n(113," They enable type narrowing after runtime checks "),t(),e(114,"li",23),n(115," Discriminated unions work great with type guards "),t(),e(116,"li",23),n(117," Essential for handling unknown types and union types safely "),t()()()()()),a&2&&(d(73),m(i.typeGuardsCode),d(5),m(i.discriminatedUnionsCode),d(5),m(i.resultPatternCode),d(15),y(i.result()?98:-1))},dependencies:[b,S,w,_,E,k,C,D,h,v,T],encapsulation:2})};export{G as TypeGuardsDemoComponent};
