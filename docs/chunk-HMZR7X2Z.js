import{b as y,c as T}from"./chunk-DWOAIROL.js";import"./chunk-4WL4JRY5.js";import"./chunk-7HDGE6MB.js";import"./chunk-KDOOMALM.js";import{a as h,b as S,c as E,d as w,e as C,f as F,g as k}from"./chunk-OAZ4ZSRP.js";import"./chunk-2VTPWLFV.js";import{p as v}from"./chunk-FHCI6K3X.js";import"./chunk-FPPZ4BUR.js";import{Hb as p,Jb as x,Ma as l,Xb as n,Yb as u,ab as f,nb as g,ob as b,ub as e,va as c,vb as t,wb as o}from"./chunk-S2MQBBOY.js";import"./chunk-6HR7AMTL.js";function U(i,r){if(i&1&&(e(0,"div",52)(1,"pre",55),n(2),t()()),i&2){let a=x();l(2),u(a.result())}}function d(i){return typeof i=="string"?i.toUpperCase():typeof i=="number"?i*2:!i}function _(...i){return i.reduce((r,a)=>r+a,0)}function O(i,...r){return{name:i,roles:r}}function M(i,r){return i.filter(r)}function V(i,r){return i.map(r)}var P=class i{overloadsCode=`
// Function Overloads: Multiple signatures for one function
function processValue(value: string): string;
function processValue(value: number): number;
function processValue(value: boolean): boolean;
function processValue(value: string | number | boolean): string | number | boolean {
  if (typeof value === 'string') {
    return value.toUpperCase();
  } else if (typeof value === 'number') {
    return value * 2;
  } else {
    return !value;
  }
}

// Usage - TypeScript knows the return type based on input
const str = processValue('hello');    // Type: string
const num = processValue(5);          // Type: number
const bool = processValue(true);      // Type: boolean
`;restParametersCode=`
// Rest Parameters: Variable number of arguments
function sum(...numbers: number[]): number {
  return numbers.reduce((acc, num) => acc + num, 0);
}

// Typed Rest Parameters
function createUser(name: string, ...roles: ('admin' | 'user')[]): { name: string; roles: string[] } {
  return { name, roles };
}

// Usage
const total = sum(1, 2, 3, 4, 5);  // 15
const user = createUser('John', 'admin', 'user');  // { name: 'John', roles: ['admin', 'user'] }
`;functionTypesCode=`
// Function Type Aliases
type MathOperation = (a: number, b: number) => number;
type StringProcessor = (input: string) => string;

// Usage
const add: MathOperation = (a, b) => a + b;
const toUpper: StringProcessor = (input) => input.toUpperCase();

// Generic Function Types
type Mapper<T, U> = (value: T) => U;
type Predicate<T> = (value: T) => boolean;

function filter<T>(arr: T[], predicate: Predicate<T>): T[] {
  return arr.filter(predicate);
}

function map<T, U>(arr: T[], mapper: Mapper<T, U>): U[] {
  return arr.map(mapper);
}
`;higherOrderFunctionsCode=`
// Higher-Order Functions: Functions that take or return functions
function withLogging<T extends (...args: any[]) => any>(fn: T): T {
  return ((...args: Parameters<T>) => {
    console.log(\`Calling \${fn.name} with:\`, args);
    const result = fn(...args);
    console.log(\`Result:\`, result);
    return result;
  }) as T;
}

// Usage
const loggedAdd = withLogging((a: number, b: number) => a + b);
const result = loggedAdd(2, 3);  // Logs: Calling anonymous with: [2, 3], Result: 5
`;result=c("");testOverloads(){let r=d("hello"),a=d(5),s=d(!0);this.result.set(`Function Overloads Test:
processValue('hello'): "${r}" (type: string)
processValue(5): ${a} (type: number)
processValue(true): ${s} (type: boolean)`)}testRestParameters(){let r=_(1,2,3,4,5),a=O("John","admin","user");this.result.set(`Rest Parameters Test:
sum(1, 2, 3, 4, 5): ${r}
createUser('John', 'admin', 'user'): ${JSON.stringify(a,null,2)}`)}testFunctionTypes(){let r=[1,2,3,4,5],a=V(r,m=>m*2),s=M(r,m=>m%2===0);this.result.set(`Function Types Test:
Original: [${r.join(", ")}]
Mapped (doubled): [${a.join(", ")}]
Filtered (evens): [${s.join(", ")}]`)}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=f({type:i,selectors:[["app-function-types-demo"]],decls:125,vars:5,consts:[[1,"container-responsive","space-y-responsive"],[1,"card-modern","padding-responsive","hover-lift","slide-in-up"],[1,"flex","flex-col","lg:flex-row","lg:items-center","lg:justify-between","gap-6"],[1,"flex-1"],[1,"flex","items-center","gap-3","mb-4"],[1,"w-12","h-12","sm:w-14","sm:h-14","rounded-xl","bg-gradient-to-br","from-blue-600","to-cyan-600","flex","items-center","justify-center","shadow-lg"],[1,"fas","fa-function","text-white","text-xl","sm:text-2xl"],[1,"badge-modern","text-xs","sm:text-sm"],[1,"heading-responsive","text-gradient","mb-4"],[1,"text-responsive","text-gray-700","dark:text-gray-300"],[1,"hidden","lg:block"],[1,"w-32","h-32","rounded-2xl","bg-gradient-to-br","from-blue-600/20","to-cyan-600/20","flex","items-center","justify-center"],[1,"fas","fa-function","text-6xl","text-blue-600"],[1,"card-modern","hover-lift","slide-in-up"],[1,"padding-responsive","space-y-6"],[1,"w-10","h-10","rounded-lg","bg-gradient-to-br","from-blue-500","to-purple-600","flex","items-center","justify-center"],[1,"fas","fa-lightbulb","text-white"],[1,"subheading-responsive","text-gray-900","dark:text-gray-100"],[1,"text-responsive","text-gray-700","dark:text-gray-300","leading-relaxed"],[1,"glass","rounded-xl","p-6","border-l-4","border-accent"],[1,"fas","fa-star","text-accent","text-xl"],[1,"text-lg","sm:text-xl","font-semibold","text-gray-900","dark:text-gray-100"],[1,"list-modern"],[1,"text-sm","sm:text-base","text-gray-800","dark:text-gray-200"],[1,"padding-responsive"],[1,"flex","items-center","gap-3","mb-6"],[1,"w-10","h-10","rounded-lg","bg-gradient-to-br","from-green-500","to-teal-600","flex","items-center","justify-center"],[1,"fas","fa-code","text-white"],["value","0"],[1,"flex","flex-wrap","gap-2","mb-6"],["value","0",1,"flex","items-center","gap-2"],[1,"fas","fa-layer-group","text-blue-500"],[1,"text-sm","sm:text-base","font-semibold"],["value","1",1,"flex","items-center","gap-2"],[1,"fas","fa-ellipsis-h","text-purple-500"],["value","2",1,"flex","items-center","gap-2"],[1,"fas","fa-signature","text-cyan-500"],["value","3",1,"flex","items-center","gap-2"],[1,"fas","fa-rocket","text-green-500"],[1,"code-block-modern"],[1,"overflow-x-auto","text-sm","sm:text-base"],["value","1"],["value","2"],["value","3"],[1,"w-10","h-10","rounded-lg","bg-gradient-to-br","from-purple-500","to-pink-600","flex","items-center","justify-center"],[1,"fas","fa-play-circle","text-white"],[1,"text-responsive","text-gray-700","dark:text-gray-300","mb-8"],[1,"space-y-6"],[1,"flex","gap-3","flex-wrap"],["label","Test Overloads","icon","pi pi-function",1,"btn-modern",3,"click"],["label","Test Rest Parameters","icon","pi pi-list",1,"btn-modern",3,"click"],["label","Test Function Types","icon","pi pi-code",1,"btn-modern",3,"click"],[1,"glass","rounded-xl","p-6","fade-in"],[1,"w-10","h-10","rounded-lg","bg-gradient-to-br","from-teal-500","to-cyan-600","flex","items-center","justify-center"],[1,"fas","fa-graduation-cap","text-white"],[1,"text-sm","sm:text-base","text-gray-800","dark:text-gray-200","whitespace-pre-wrap"]],template:function(a,s){a&1&&(e(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5),o(6,"i",6),t(),e(7,"div")(8,"span",7),n(9,"TypeScript"),t()()(),e(10,"h1",8),n(11," Advanced Function Types "),t(),e(12,"p",9),n(13," Function overloads, rest parameters, and advanced function type patterns. "),t()(),e(14,"div",10)(15,"div",11),o(16,"i",12),t()()()(),e(17,"p-card",13)(18,"div",14)(19,"div",4)(20,"div",15),o(21,"i",16),t(),e(22,"h2",17),n(23,"What are Advanced Function Types?"),t()(),e(24,"p",18),n(25," Advanced function types enable powerful patterns like overloads, rest parameters, and higher-order functions with full type safety. "),t(),e(26,"div",19)(27,"div",4),o(28,"i",20),e(29,"h3",21),n(30,"Key Concepts"),t()(),e(31,"ul",22)(32,"li",23)(33,"strong"),n(34,"Function Overloads:"),t(),n(35," Multiple signatures for one function implementation "),t(),e(36,"li",23)(37,"strong"),n(38,"Rest Parameters:"),t(),n(39," Variable number of arguments with type safety "),t(),e(40,"li",23)(41,"strong"),n(42,"Function Types:"),t(),n(43," Type aliases for function signatures "),t(),e(44,"li",23)(45,"strong"),n(46,"Higher-Order Functions:"),t(),n(47," Functions that take or return functions "),t()()()()(),e(48,"p-card",13)(49,"div",24)(50,"div",25)(51,"div",26),o(52,"i",27),t(),e(53,"h2",17),n(54,"Code Examples"),t()(),e(55,"p-tabs",28)(56,"p-tablist",29)(57,"p-tab",30),o(58,"i",31),e(59,"span",32),n(60,"Overloads"),t()(),e(61,"p-tab",33),o(62,"i",34),e(63,"span",32),n(64,"Rest Parameters"),t()(),e(65,"p-tab",35),o(66,"i",36),e(67,"span",32),n(68,"Function Types"),t()(),e(69,"p-tab",37),o(70,"i",38),e(71,"span",32),n(72,"Higher-Order Functions"),t()()(),e(73,"p-tabpanels")(74,"p-tabpanel",28)(75,"div",39)(76,"pre",40)(77,"code"),n(78),t()()()(),e(79,"p-tabpanel",41)(80,"div",39)(81,"pre",40)(82,"code"),n(83),t()()()(),e(84,"p-tabpanel",42)(85,"div",39)(86,"pre",40)(87,"code"),n(88),t()()()(),e(89,"p-tabpanel",43)(90,"div",39)(91,"pre",40)(92,"code"),n(93),t()()()()()()()(),e(94,"p-card",13)(95,"div",24)(96,"div",4)(97,"div",44),o(98,"i",45),t(),e(99,"h2",17),n(100,"Interactive Demo"),t()(),e(101,"p",46),n(102," Test advanced function types in action. "),t(),e(103,"div",47)(104,"div",48)(105,"p-button",49),p("click",function(){return s.testOverloads()}),t(),e(106,"p-button",50),p("click",function(){return s.testRestParameters()}),t(),e(107,"p-button",51),p("click",function(){return s.testFunctionTypes()}),t()(),g(108,U,3,1,"div",52),t()()(),e(109,"p-card",13)(110,"div",24)(111,"div",25)(112,"div",53),o(113,"i",54),t(),e(114,"h2",17),n(115,"Key Takeaways"),t()(),e(116,"ul",22)(117,"li",23),n(118," Function overloads provide type-safe multiple signatures "),t(),e(119,"li",23),n(120," Rest parameters enable variable arguments with type safety "),t(),e(121,"li",23),n(122," Function type aliases improve code readability and reusability "),t(),e(123,"li",23),n(124," Higher-order functions enable powerful functional programming patterns "),t()()()()()),a&2&&(l(78),u(s.overloadsCode),l(5),u(s.restParametersCode),l(5),u(s.functionTypesCode),l(5),u(s.higherOrderFunctionsCode),l(15),b(s.result()?108:-1))},dependencies:[v,S,h,k,w,E,C,F,T,y],encapsulation:2})};export{P as FunctionTypesDemoComponent};
