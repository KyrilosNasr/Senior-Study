import{t as k}from"./chunk-5TVMUKYR.js";import{a as w,b as S,c as v,d as h,e as E,f as C,g as D}from"./chunk-AH7MQ5KM.js";import{p as b,q as T}from"./chunk-47HPTYDK.js";import{p as f}from"./chunk-FHCI6K3X.js";import"./chunk-FPPZ4BUR.js";import{Hb as d,Jb as x,Ma as o,Xb as t,Yb as u,ab as c,nb as y,ob as g,ub as n,va as m,vb as e}from"./chunk-S2MQBBOY.js";import"./chunk-6HR7AMTL.js";function G(a,s){if(a&1&&(n(0,"div",21)(1,"pre",25),t(2),e()()),a&2){let r=x();o(2),u(r.result())}}function R(a){return a.type==="dog"}function U(a){return a.type==="cat"}function A(a){return typeof a=="string"}function P(a){return typeof a=="number"}function N(a){return Array.isArray(a)}var _=class a{typeGuardsCode=`
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
`;result=m("");testTypeGuards(){let r=["hello",42,!0,[1,2,3]].map(i=>A(i)?`String: ${i.toUpperCase()}`:P(i)?`Number: ${i.toFixed(2)}`:N(i)?`Array: [${i.join(", ")}]`:`Unknown: ${i}`);this.result.set(r.join(`
`))}testDiscriminatedUnions(){let i=[{type:"dog",bark:()=>console.log("Woof!")},{type:"cat",meow:()=>console.log("Meow!")}],l=[];i.forEach(p=>{R(p)?l.push("Dog detected - can call bark()"):U(p)&&l.push("Cat detected - can call meow()")}),this.result.set(l.join(`
`))}testResultPattern(){let s={success:!0,data:"Operation completed"},r={success:!1,error:"Something went wrong"},i=[];s.success&&i.push(`Success: ${s.data}`),r.success||i.push(`Error: ${r.error}`),this.result.set(i.join(`
`))}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=c({type:a,selectors:[["app-type-guards-demo"]],decls:91,vars:4,consts:[[1,"max-w-7xl","mx-auto","space-y-8"],[1,"bg-white","dark:bg-gray-800","rounded-lg","shadow-lg","p-8"],[1,"text-4xl","font-bold","text-gray-900","dark:text-gray-100","mb-3"],[1,"text-lg","text-gray-700","dark:text-gray-300","leading-relaxed"],[1,"shadow-lg"],[1,"space-y-4"],[1,"text-3xl","font-semibold","text-gray-900","dark:text-gray-100","mb-3"],[1,"text-base","text-gray-700","dark:text-gray-300","leading-relaxed"],[1,"bg-blue-50","dark:bg-blue-900/30","p-5","rounded-lg","border","border-blue-200","dark:border-blue-800"],[1,"text-lg","font-semibold","text-blue-900","dark:text-blue-100","mb-3"],[1,"list-disc","list-inside","space-y-2","text-base","text-blue-800","dark:text-blue-200"],["value","0"],["value","1"],["value","2"],[1,"overflow-x-auto"],[1,"text-3xl","font-semibold","text-gray-900","dark:text-gray-100","mb-3","mb-4"],[1,"text-base","text-gray-700","dark:text-gray-300","leading-relaxed","mb-6"],[1,"flex","gap-5","flex-wrap"],["label","Test Type Guards","icon","pi pi-shield",3,"click"],["label","Test Discriminated Unions","icon","pi pi-sitemap",3,"click"],["label","Test Result Pattern","icon","pi pi-check-circle",3,"click"],[1,"bg-gray-100","dark:bg-gray-700","p-5","rounded-lg"],[1,"space-y-2","text-base","text-gray-700","dark:text-gray-300","leading-relaxed"],[1,"flex","items-start"],[1,"text-green-500","mr-2"],[1,"text-sm","text-gray-800","dark:text-gray-200","whitespace-pre-wrap"]],template:function(r,i){r&1&&(n(0,"div",0)(1,"div",1)(2,"h1",2),t(3,"Type Guards & Type Predicates"),e(),n(4,"p",3),t(5," Narrow types at runtime and enable type-safe code with type guards and predicates. "),e()(),n(6,"p-card",4)(7,"div",5)(8,"h2",6),t(9,"What are Type Guards?"),e(),n(10,"p",7),t(11," Type guards are functions that help TypeScript narrow down types at runtime. They use type predicates (value is Type) to tell the compiler that a value is of a specific type after a runtime check. "),e(),n(12,"div",8)(13,"h3",9),t(14,"Key Concepts:"),e(),n(15,"ul",10)(16,"li")(17,"strong"),t(18,"Type Guards:"),e(),t(19," Functions that narrow types using "),n(20,"code"),t(21,"value is Type"),e(),t(22," syntax"),e(),n(23,"li")(24,"strong"),t(25,"Type Predicates:"),e(),t(26," Return type annotations that tell TypeScript about type narrowing"),e(),n(27,"li")(28,"strong"),t(29,"Discriminated Unions:"),e(),t(30," Union types with a common property used for type narrowing"),e()()()()(),n(31,"p-card",4)(32,"p-tabs",11)(33,"p-tablist")(34,"p-tab",11),t(35,"Type Guards"),e(),n(36,"p-tab",12),t(37,"Discriminated Unions"),e(),n(38,"p-tab",13),t(39,"Result Pattern"),e()(),n(40,"p-tabpanels")(41,"p-tabpanel",11)(42,"pre",14)(43,"code"),t(44),e()()(),n(45,"p-tabpanel",12)(46,"pre",14)(47,"code"),t(48),e()()(),n(49,"p-tabpanel",13)(50,"pre",14)(51,"code"),t(52),e()()()()()(),n(53,"p-card",4)(54,"h2",15),t(55,"Live Demo"),e(),n(56,"p",16),t(57," Test type guards and type predicates in action. "),e(),n(58,"div",5)(59,"div",17)(60,"p-button",18),d("click",function(){return i.testTypeGuards()}),e(),n(61,"p-button",19),d("click",function(){return i.testDiscriminatedUnions()}),e(),n(62,"p-button",20),d("click",function(){return i.testResultPattern()}),e()(),y(63,G,3,1,"div",21),e()(),n(64,"p-card",4)(65,"h2",15),t(66,"Key Takeaways"),e(),n(67,"ul",22)(68,"li",23)(69,"span",24),t(70,"\u2713"),e(),n(71,"span"),t(72,"Type guards use the "),n(73,"code"),t(74,"value is Type"),e(),t(75," return type annotation"),e()(),n(76,"li",23)(77,"span",24),t(78,"\u2713"),e(),n(79,"span"),t(80,"They enable type narrowing after runtime checks"),e()(),n(81,"li",23)(82,"span",24),t(83,"\u2713"),e(),n(84,"span"),t(85,"Discriminated unions work great with type guards"),e()(),n(86,"li",23)(87,"span",24),t(88,"\u2713"),e(),n(89,"span"),t(90,"Essential for handling unknown types and union types safely"),e()()()()()),r&2&&(o(44),u(i.typeGuardsCode),o(4),u(i.discriminatedUnionsCode),o(4),u(i.resultPatternCode),o(11),g(i.result()?63:-1))},dependencies:[f,S,w,D,h,v,E,C,T,b,k],encapsulation:2})};export{_ as TypeGuardsDemoComponent};
