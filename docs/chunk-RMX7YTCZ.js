import{a as v,b as h,c as E,d as S,e as F,f as C,g as k}from"./chunk-AH7MQ5KM.js";import{p as x,q as T}from"./chunk-47HPTYDK.js";import{p as y}from"./chunk-FHCI6K3X.js";import"./chunk-FPPZ4BUR.js";import{Hb as p,Jb as f,Ma as s,Xb as t,Yb as u,ab as c,nb as g,ob as b,ub as n,va as d,vb as e}from"./chunk-S2MQBBOY.js";import"./chunk-6HR7AMTL.js";function P(r,i){if(r&1&&(n(0,"div",22)(1,"pre",26),t(2),e()()),r&2){let a=f();s(2),u(a.result())}}function m(r){return typeof r=="string"?r.toUpperCase():typeof r=="number"?r*2:!r}function U(...r){return r.reduce((i,a)=>i+a,0)}function _(r,...i){return{name:r,roles:i}}function O(r,i){return r.filter(i)}function M(r,i){return r.map(i)}var w=class r{overloadsCode=`
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
`;result=d("");testOverloads(){let i=m("hello"),a=m(5),o=m(!0);this.result.set(`Function Overloads Test:
processValue('hello'): "${i}" (type: string)
processValue(5): ${a} (type: number)
processValue(true): ${o} (type: boolean)`)}testRestParameters(){let i=U(1,2,3,4,5),a=_("John","admin","user");this.result.set(`Rest Parameters Test:
sum(1, 2, 3, 4, 5): ${i}
createUser('John', 'admin', 'user'): ${JSON.stringify(a,null,2)}`)}testFunctionTypes(){let i=[1,2,3,4,5],a=M(i,l=>l*2),o=O(i,l=>l%2===0);this.result.set(`Function Types Test:
Original: [${i.join(", ")}]
Mapped (doubled): [${a.join(", ")}]
Filtered (evens): [${o.join(", ")}]`)}static \u0275fac=function(a){return new(a||r)};static \u0275cmp=c({type:r,selectors:[["app-function-types-demo"]],decls:95,vars:5,consts:[[1,"max-w-7xl","mx-auto","space-y-8"],[1,"bg-white","dark:bg-gray-800","rounded-lg","shadow-lg","p-8"],[1,"text-4xl","font-bold","text-gray-900","dark:text-gray-100","mb-3"],[1,"text-lg","text-gray-700","dark:text-gray-300","leading-relaxed"],[1,"shadow-lg"],[1,"space-y-4"],[1,"text-3xl","font-semibold","text-gray-900","dark:text-gray-100","mb-3"],[1,"text-base","text-gray-700","dark:text-gray-300","leading-relaxed"],[1,"bg-blue-50","dark:bg-blue-900/30","p-5","rounded-lg","border","border-blue-200","dark:border-blue-800"],[1,"text-lg","font-semibold","text-blue-900","dark:text-blue-100","mb-3"],[1,"list-disc","list-inside","space-y-2","text-base","text-blue-800","dark:text-blue-200"],["value","0"],["value","1"],["value","2"],["value","3"],[1,"overflow-x-auto"],[1,"text-3xl","font-semibold","text-gray-900","dark:text-gray-100","mb-3","mb-4"],[1,"text-base","text-gray-700","dark:text-gray-300","leading-relaxed","mb-6"],[1,"flex","gap-5","flex-wrap"],["label","Test Overloads","icon","pi pi-function",3,"click"],["label","Test Rest Parameters","icon","pi pi-list",3,"click"],["label","Test Function Types","icon","pi pi-code",3,"click"],[1,"bg-gray-100","dark:bg-gray-700","p-5","rounded-lg"],[1,"space-y-2","text-base","text-gray-700","dark:text-gray-300","leading-relaxed"],[1,"flex","items-start"],[1,"text-green-500","mr-2"],[1,"text-sm","text-gray-800","dark:text-gray-200","whitespace-pre-wrap"]],template:function(a,o){a&1&&(n(0,"div",0)(1,"div",1)(2,"h1",2),t(3,"Advanced Function Types"),e(),n(4,"p",3),t(5," Function overloads, rest parameters, and advanced function type patterns. "),e()(),n(6,"p-card",4)(7,"div",5)(8,"h2",6),t(9,"What are Advanced Function Types?"),e(),n(10,"p",7),t(11," Advanced function types enable powerful patterns like overloads, rest parameters, and higher-order functions with full type safety. "),e(),n(12,"div",8)(13,"h3",9),t(14,"Key Concepts:"),e(),n(15,"ul",10)(16,"li")(17,"strong"),t(18,"Function Overloads:"),e(),t(19," Multiple signatures for one function implementation"),e(),n(20,"li")(21,"strong"),t(22,"Rest Parameters:"),e(),t(23," Variable number of arguments with type safety"),e(),n(24,"li")(25,"strong"),t(26,"Function Types:"),e(),t(27," Type aliases for function signatures"),e(),n(28,"li")(29,"strong"),t(30,"Higher-Order Functions:"),e(),t(31," Functions that take or return functions"),e()()()()(),n(32,"p-card",4)(33,"p-tabs",11)(34,"p-tablist")(35,"p-tab",11),t(36,"Overloads"),e(),n(37,"p-tab",12),t(38,"Rest Parameters"),e(),n(39,"p-tab",13),t(40,"Function Types"),e(),n(41,"p-tab",14),t(42,"Higher-Order Functions"),e()(),n(43,"p-tabpanels")(44,"p-tabpanel",11)(45,"pre",15)(46,"code"),t(47),e()()(),n(48,"p-tabpanel",12)(49,"pre",15)(50,"code"),t(51),e()()(),n(52,"p-tabpanel",13)(53,"pre",15)(54,"code"),t(55),e()()(),n(56,"p-tabpanel",14)(57,"pre",15)(58,"code"),t(59),e()()()()()(),n(60,"p-card",4)(61,"h2",16),t(62,"Live Demo"),e(),n(63,"p",17),t(64," Test advanced function types in action. "),e(),n(65,"div",5)(66,"div",18)(67,"p-button",19),p("click",function(){return o.testOverloads()}),e(),n(68,"p-button",20),p("click",function(){return o.testRestParameters()}),e(),n(69,"p-button",21),p("click",function(){return o.testFunctionTypes()}),e()(),g(70,P,3,1,"div",22),e()(),n(71,"p-card",4)(72,"h2",16),t(73,"Key Takeaways"),e(),n(74,"ul",23)(75,"li",24)(76,"span",25),t(77,"\u2713"),e(),n(78,"span"),t(79,"Function overloads provide type-safe multiple signatures"),e()(),n(80,"li",24)(81,"span",25),t(82,"\u2713"),e(),n(83,"span"),t(84,"Rest parameters enable variable arguments with type safety"),e()(),n(85,"li",24)(86,"span",25),t(87,"\u2713"),e(),n(88,"span"),t(89,"Function type aliases improve code readability and reusability"),e()(),n(90,"li",24)(91,"span",25),t(92,"\u2713"),e(),n(93,"span"),t(94,"Higher-order functions enable powerful functional programming patterns"),e()()()()()),a&2&&(s(47),u(o.overloadsCode),s(4),u(o.restParametersCode),s(4),u(o.functionTypesCode),s(4),u(o.higherOrderFunctionsCode),s(11),b(o.result()?70:-1))},dependencies:[y,h,v,k,S,E,F,C,T,x],encapsulation:2})};export{w as FunctionTypesDemoComponent};
