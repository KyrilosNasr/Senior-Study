import{e as T}from"./chunk-26I6QKGV.js";import"./chunk-DS4DKGB5.js";import"./chunk-YPUDPSQH.js";import"./chunk-DEGWJE5E.js";import{a as E,b as C,c as w,d as F,e as k}from"./chunk-3ZW5MUH5.js";import"./chunk-SHEHAVXT.js";import{a as S,b as h}from"./chunk-ST7OVFPO.js";import"./chunk-QCJRPF2F.js";import"./chunk-IZU7C3FN.js";import{b as y}from"./chunk-JBIPGRVB.js";import{r as v}from"./chunk-BO564T5E.js";import"./chunk-FPPZ4BUR.js";import{Cb as f,Db as b,Jb as e,Kb as t,Lb as a,Wb as d,Yb as x,Za as l,kc as n,lc as u,nb as g,va as c}from"./chunk-6P3ZW5D6.js";import"./chunk-6HR7AMTL.js";function U(i,r){if(i&1&&(e(0,"div",52)(1,"pre",55),n(2),t()()),i&2){let o=x();l(2),u(o.result())}}function p(i){return typeof i=="string"?i.toUpperCase():typeof i=="number"?i*2:!i}function _(...i){return i.reduce((r,o)=>r+o,0)}function V(i,...r){return{name:i,roles:r}}function O(i,r){return i.filter(r)}function M(i,r){return i.map(r)}var P=class i{overloadsCode=`
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
`;result=c("");testOverloads(){let r=p("hello"),o=p(5),s=p(!0);this.result.set(`Function Overloads Test:
processValue('hello'): "${r}" (type: string)
processValue(5): ${o} (type: number)
processValue(true): ${s} (type: boolean)`)}testRestParameters(){let r=_(1,2,3,4,5),o=V("John","admin","user");this.result.set(`Rest Parameters Test:
sum(1, 2, 3, 4, 5): ${r}
createUser('John', 'admin', 'user'): ${JSON.stringify(o,null,2)}`)}testFunctionTypes(){let r=[1,2,3,4,5],o=M(r,m=>m*2),s=O(r,m=>m%2===0);this.result.set(`Function Types Test:
Original: [${r.join(", ")}]
Mapped (doubled): [${o.join(", ")}]
Filtered (evens): [${s.join(", ")}]`)}static \u0275fac=function(o){return new(o||i)};static \u0275cmp=g({type:i,selectors:[["app-function-types-demo"]],decls:131,vars:5,consts:[[1,"container-responsive","space-y-responsive"],[1,"card-modern","padding-responsive","hover-lift","slide-in-up"],[1,"flex","flex-col","lg:flex-row","lg:items-center","lg:justify-between","gap-6"],[1,"flex-1"],[1,"flex","items-center","gap-3","mb-4"],[1,"w-12","h-12","sm:w-14","sm:h-14","rounded-xl","bg-gradient-to-br","from-blue-600","to-cyan-600","flex","items-center","justify-center","shadow-lg"],["name","faSolidSquareRootVariable",1,"text-white","text-xl","sm:text-2xl"],[1,"badge-modern","text-xs","sm:text-sm"],[1,"heading-responsive","text-gradient","mb-4"],[1,"text-responsive","text-gray-700","dark:text-gray-300"],[1,"hidden","lg:block"],[1,"w-32","h-32","rounded-2xl","bg-gradient-to-br","from-blue-600/20","to-cyan-600/20","flex","items-center","justify-center"],["name","faSolidSquareRootVariable",1,"text-6xl","text-blue-600"],[1,"card-modern","hover-lift","slide-in-up"],[1,"padding-responsive","space-y-6"],[1,"w-10","h-10","rounded-lg","bg-gradient-to-br","from-blue-500","to-purple-600","flex","items-center","justify-center"],["name","faSolidLightbulb",1,"text-white"],[1,"subheading-responsive","text-gray-900","dark:text-gray-100"],[1,"text-responsive","text-gray-700","dark:text-gray-300","leading-relaxed"],[1,"glass","rounded-xl","p-6","border-l-4","border-accent"],["name","faSolidStar",1,"text-accent","text-xl"],[1,"text-lg","sm:text-xl","font-semibold","text-gray-900","dark:text-gray-100"],[1,"list-modern"],[1,"text-sm","sm:text-base","text-gray-800","dark:text-gray-200"],[1,"padding-responsive"],[1,"flex","items-center","gap-3","mb-6"],[1,"w-10","h-10","rounded-lg","bg-gradient-to-br","from-green-500","to-teal-600","flex","items-center","justify-center"],["name","faSolidCode",1,"text-white"],["value","0"],[1,"flex","flex-wrap","gap-2","mb-6"],["value","0",1,"flex","items-center","gap-2"],["name","faSolidLayerGroup",1,"text-blue-500"],[1,"text-sm","sm:text-base","font-semibold"],["value","1",1,"flex","items-center","gap-2"],["name","faSolidEllipsis",1,"text-purple-500"],["value","2",1,"flex","items-center","gap-2"],["name","faSolidSignature",1,"text-cyan-500"],["value","3",1,"flex","items-center","gap-2"],["name","faSolidRocket",1,"text-green-500"],[1,"code-block-modern"],[1,"overflow-x-auto","text-sm","sm:text-base"],["value","1"],["value","2"],["value","3"],[1,"w-10","h-10","rounded-lg","bg-gradient-to-br","from-purple-500","to-pink-600","flex","items-center","justify-center"],["name","faSolidCirclePlay",1,"text-white"],[1,"text-responsive","text-gray-700","dark:text-gray-300","mb-8"],[1,"space-y-6"],[1,"flex","gap-3","flex-wrap"],[1,"btn-modern",3,"click"],["name","faSolidCode",1,"pe-3"],["name","faSolidList",1,"pe-3"],[1,"glass","rounded-xl","p-6","fade-in"],[1,"w-10","h-10","rounded-lg","bg-gradient-to-br","from-teal-500","to-cyan-600","flex","items-center","justify-center"],["name","faSolidGraduationCap",1,"text-white"],[1,"text-sm","sm:text-base","text-gray-800","dark:text-gray-200","whitespace-pre-wrap"]],template:function(o,s){o&1&&(e(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5),a(6,"ng-icon",6),t(),e(7,"div")(8,"span",7),n(9,"TypeScript"),t()()(),e(10,"h1",8),n(11," Advanced Function Types "),t(),e(12,"p",9),n(13," Function overloads, rest parameters, and advanced function type patterns. "),t()(),e(14,"div",10)(15,"div",11),a(16,"ng-icon",12),t()()()(),e(17,"p-card",13)(18,"div",14)(19,"div",4)(20,"div",15),a(21,"ng-icon",16),t(),e(22,"h2",17),n(23,"What are Advanced Function Types?"),t()(),e(24,"p",18),n(25," Advanced function types enable powerful patterns like overloads, rest parameters, and higher-order functions with full type safety. "),t(),e(26,"div",19)(27,"div",4),a(28,"ng-icon",20),e(29,"h3",21),n(30,"Key Concepts"),t()(),e(31,"ul",22)(32,"li",23)(33,"strong"),n(34,"Function Overloads:"),t(),n(35," Multiple signatures for one function implementation "),t(),e(36,"li",23)(37,"strong"),n(38,"Rest Parameters:"),t(),n(39," Variable number of arguments with type safety "),t(),e(40,"li",23)(41,"strong"),n(42,"Function Types:"),t(),n(43," Type aliases for function signatures "),t(),e(44,"li",23)(45,"strong"),n(46,"Higher-Order Functions:"),t(),n(47," Functions that take or return functions "),t()()()()(),e(48,"p-card",13)(49,"div",24)(50,"div",25)(51,"div",26),a(52,"ng-icon",27),t(),e(53,"h2",17),n(54,"Code Examples"),t()(),e(55,"p-tabs",28)(56,"p-tablist",29)(57,"p-tab",30),a(58,"ng-icon",31),e(59,"span",32),n(60,"Overloads"),t()(),e(61,"p-tab",33),a(62,"ng-icon",34),e(63,"span",32),n(64,"Rest Parameters"),t()(),e(65,"p-tab",35),a(66,"ng-icon",36),e(67,"span",32),n(68,"Function Types"),t()(),e(69,"p-tab",37),a(70,"ng-icon",38),e(71,"span",32),n(72,"Higher-Order Functions"),t()()(),e(73,"p-tabpanels")(74,"p-tabpanel",28)(75,"div",39)(76,"pre",40)(77,"code"),n(78),t()()()(),e(79,"p-tabpanel",41)(80,"div",39)(81,"pre",40)(82,"code"),n(83),t()()()(),e(84,"p-tabpanel",42)(85,"div",39)(86,"pre",40)(87,"code"),n(88),t()()()(),e(89,"p-tabpanel",43)(90,"div",39)(91,"pre",40)(92,"code"),n(93),t()()()()()()()(),e(94,"p-card",13)(95,"div",24)(96,"div",4)(97,"div",44),a(98,"ng-icon",45),t(),e(99,"h2",17),n(100,"Interactive Demo"),t()(),e(101,"p",46),n(102," Test advanced function types in action. "),t(),e(103,"div",47)(104,"div",48)(105,"button",49),d("click",function(){return s.testOverloads()}),a(106,"ng-icon",50),n(107,"Test Overloads"),t(),e(108,"button",49),d("click",function(){return s.testRestParameters()}),a(109,"ng-icon",51),n(110,"Test Rest Parameters"),t(),e(111,"button",49),d("click",function(){return s.testFunctionTypes()}),a(112,"ng-icon",50),n(113,"Test Function Types"),t()(),f(114,U,3,1,"div",52),t()()(),e(115,"p-card",13)(116,"div",24)(117,"div",25)(118,"div",53),a(119,"ng-icon",54),t(),e(120,"h2",17),n(121,"Key Takeaways"),t()(),e(122,"ul",22)(123,"li",23),n(124," Function overloads provide type-safe multiple signatures "),t(),e(125,"li",23),n(126," Rest parameters enable variable arguments with type safety "),t(),e(127,"li",23),n(128," Function type aliases improve code readability and reusability "),t(),e(129,"li",23),n(130," Higher-order functions enable powerful functional programming patterns "),t()()()()()),o&2&&(l(78),u(s.overloadsCode),l(5),u(s.restParametersCode),l(5),u(s.functionTypesCode),l(5),u(s.higherOrderFunctionsCode),l(21),b(s.result()?114:-1))},dependencies:[y,v,h,S,k,C,E,w,F,T],encapsulation:2})};export{P as FunctionTypesDemoComponent};
