import{a as S,b as h,c as C,d as P,e as k,f as w,g as A}from"./chunk-AH7MQ5KM.js";import{p as E,q as b}from"./chunk-47HPTYDK.js";import{p as v}from"./chunk-FHCI6K3X.js";import"./chunk-FPPZ4BUR.js";import{Hb as d,Jb as f,Ma as l,Xb as n,Yb as o,_b as g,ab as T,nb as u,ob as x,ub as e,va as y,vb as t,wb as a}from"./chunk-S2MQBBOY.js";import{a as c}from"./chunk-6HR7AMTL.js";function M(p,s){if(p&1&&(e(0,"div",52)(1,"pre",55),n(2),t()()),p&2){let r=f();l(2),o(r.result())}}var U=class p{conditionalTypesCode=`
// Conditional Types: Types that depend on other types
type IsString<T> = T extends string ? true : false;
type NonNullable<T> = T extends null | undefined ? never : T;
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

// Usage
type Test1 = IsString<string>;        // true
type Test2 = IsString<number>;        // false
type Test3 = NonNullable<string | null>;  // string
type Test4 = ReturnType<() => number>;    // number
`;mappedTypesCode=`
// Mapped Types: Transform properties of existing types
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};

type Partial<T> = {
  [P in keyof T]?: T[P];
};

type Required<T> = {
  [P in keyof T]-?: T[P];
};

// Usage
interface User {
  id: string;
  name: string;
  email?: string;
}

type ReadonlyUser = Readonly<User>;      // All properties readonly
type PartialUser = Partial<User>;        // All properties optional
type RequiredUser = Required<User>;      // All properties required
`;templateLiteralTypesCode=`
// Template Literal Types: String manipulation at type level
type EventName<T extends string> = \`on\${Capitalize<T>}\`;
type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';
type ApiEndpoint<T extends HttpMethod> = \`/api/\${Lowercase<T>}\`;

// Usage
type ClickEvent = EventName<'click'>;           // 'onClick'
type SubmitEvent = EventName<'submit'>;         // 'onSubmit'
type GetEndpoint = ApiEndpoint<'GET'>;          // '/api/get'
type PostEndpoint = ApiEndpoint<'POST'>;        // '/api/post'

// Advanced: CSS Custom Properties
type CSSProperty = \`--\${string}\`;
const color: CSSProperty = '--primary-color';   // \u2705 Valid
const invalid: CSSProperty = 'primary-color';   // \u274C Error
`;practicalExampleCode=`
// Practical Example: Type-safe API Client
type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';
type Endpoint = '/users' | '/products' | '/orders';

type ApiRoute<T extends HttpMethod, E extends Endpoint> = 
  \`\${E}:\${T}\`;

type RequestConfig<T extends HttpMethod, E extends Endpoint> = {
  method: T;
  url: E;
  body?: T extends 'POST' | 'PUT' ? Record<string, any> : never;
};

// Usage - Type-safe API calls
const config1: RequestConfig<'GET', '/users'> = {
  method: 'GET',
  url: '/users'
  // body is not allowed for GET
};

const config2: RequestConfig<'POST', '/users'> = {
  method: 'POST',
  url: '/users',
  body: { name: 'John' }  // body is required for POST
};
`;result=y("");testConditionalTypes(){this.result.set(`Conditional Types Test:
IsString<string>: true
IsString<number>: false
NonNullable<string | null>: "test"`)}testMappedTypes(){let s={id:"1",name:"John Doe",email:"john@example.com",age:30},r={name:"Jane Doe"},i=c({},s);this.result.set(`Mapped Types Test:
Partial User: ${JSON.stringify(r,null,2)}
Readonly User: ${JSON.stringify(i,null,2)}`)}testTemplateLiteralTypes(){this.result.set(`Template Literal Types Test:
Event: onClick
Event: onSubmit
Endpoint: /api/get
Endpoint: /api/post`)}static \u0275fac=function(r){return new(r||p)};static \u0275cmp=T({type:p,selectors:[["app-advanced-types-demo"]],decls:127,vars:7,consts:[[1,"container-responsive","space-y-responsive"],[1,"card-modern","padding-responsive","hover-lift","slide-in-up"],[1,"flex","flex-col","lg:flex-row","lg:items-center","lg:justify-between","gap-6"],[1,"flex-1"],[1,"flex","items-center","gap-3","mb-4"],[1,"w-12","h-12","sm:w-14","sm:h-14","rounded-xl","bg-gradient-to-br","from-blue-600","to-cyan-600","flex","items-center","justify-center","shadow-lg"],[1,"fas","fa-code","text-white","text-xl","sm:text-2xl"],[1,"badge-modern","text-xs","sm:text-sm"],[1,"heading-responsive","text-gradient","mb-4"],[1,"text-responsive","text-gray-700","dark:text-gray-300"],[1,"hidden","lg:block"],[1,"w-32","h-32","rounded-2xl","bg-gradient-to-br","from-blue-600/20","to-cyan-600/20","flex","items-center","justify-center"],[1,"fas","fa-code","text-6xl","text-blue-600"],[1,"card-modern","hover-lift","slide-in-up"],[1,"padding-responsive","space-y-6"],[1,"w-10","h-10","rounded-lg","bg-gradient-to-br","from-blue-500","to-purple-600","flex","items-center","justify-center"],[1,"fas","fa-lightbulb","text-white"],[1,"subheading-responsive","text-gray-900","dark:text-gray-100"],[1,"text-responsive","text-gray-700","dark:text-gray-300","leading-relaxed"],[1,"glass","rounded-xl","p-6","border-l-4","border-accent"],[1,"fas","fa-star","text-accent","text-xl"],[1,"text-lg","sm:text-xl","font-semibold","text-gray-900","dark:text-gray-100"],[1,"list-modern"],[1,"text-sm","sm:text-base","text-gray-800","dark:text-gray-200"],[1,"padding-responsive"],[1,"flex","items-center","gap-3","mb-6"],[1,"w-10","h-10","rounded-lg","bg-gradient-to-br","from-green-500","to-teal-600","flex","items-center","justify-center"],[1,"fas","fa-code","text-white"],["value","0"],[1,"flex","flex-wrap","gap-2","mb-6"],["value","0",1,"flex","items-center","gap-2"],[1,"fas","fa-question-circle","text-blue-500"],[1,"text-sm","sm:text-base","font-semibold"],["value","1",1,"flex","items-center","gap-2"],[1,"fas","fa-map","text-purple-500"],["value","2",1,"flex","items-center","gap-2"],[1,"fas","fa-font","text-cyan-500"],["value","3",1,"flex","items-center","gap-2"],[1,"fas","fa-rocket","text-green-500"],[1,"code-block-modern"],[1,"overflow-x-auto","text-sm","sm:text-base"],["value","1"],["value","2"],["value","3"],[1,"w-10","h-10","rounded-lg","bg-gradient-to-br","from-purple-500","to-pink-600","flex","items-center","justify-center"],[1,"fas","fa-play-circle","text-white"],[1,"text-responsive","text-gray-700","dark:text-gray-300","mb-8"],[1,"space-y-6"],[1,"flex","gap-3","flex-wrap"],["label","Test Conditional Types","icon","pi pi-code",1,"btn-modern",3,"click"],["label","Test Mapped Types","icon","pi pi-cog",1,"btn-modern",3,"click"],["label","Test Template Literal Types","icon","pi pi-bolt",1,"btn-modern",3,"click"],[1,"glass","rounded-xl","p-6","fade-in"],[1,"w-10","h-10","rounded-lg","bg-gradient-to-br","from-teal-500","to-cyan-600","flex","items-center","justify-center"],[1,"fas","fa-graduation-cap","text-white"],[1,"text-sm","sm:text-base","text-gray-800","dark:text-gray-200","whitespace-pre-wrap"]],template:function(r,i){r&1&&(e(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5),a(6,"i",6),t(),e(7,"div")(8,"span",7),n(9,"TypeScript"),t()()(),e(10,"h1",8),n(11," Advanced Types "),t(),e(12,"p",9),n(13," Conditional Types, Mapped Types, and Template Literal Types - Powerful type manipulation features in TypeScript. "),t()(),e(14,"div",10)(15,"div",11),a(16,"i",12),t()()()(),e(17,"p-card",13)(18,"div",14)(19,"div",4)(20,"div",15),a(21,"i",16),t(),e(22,"h2",17),n(23,"What are Advanced Types?"),t()(),e(24,"p",18),n(25," Advanced types allow you to create complex type transformations and manipulations, enabling more expressive and type-safe code. They include Conditional Types, Mapped Types, and Template Literal Types. "),t(),e(26,"div",19)(27,"div",4),a(28,"i",20),e(29,"h3",21),n(30,"Key Concepts"),t()(),e(31,"ul",22)(32,"li",23)(33,"strong"),n(34,"Conditional Types:"),t(),n(35," Types that depend on conditions (T extends U ? X : Y) "),t(),e(36,"li",23)(37,"strong"),n(38,"Mapped Types:"),t(),n(39," Transform properties of existing types ([P in keyof T]) "),t(),e(40,"li",23)(41,"strong"),n(42,"Template Literal Types:"),t(),n(43," String manipulation at the type level ("),e(44,"code"),n(45),t(),n(46,") "),t()()()()(),e(47,"p-card",13)(48,"div",24)(49,"div",25)(50,"div",26),a(51,"i",27),t(),e(52,"h2",17),n(53,"Code Examples"),t()(),e(54,"p-tabs",28)(55,"p-tablist",29)(56,"p-tab",30),a(57,"i",31),e(58,"span",32),n(59,"Conditional Types"),t()(),e(60,"p-tab",33),a(61,"i",34),e(62,"span",32),n(63,"Mapped Types"),t()(),e(64,"p-tab",35),a(65,"i",36),e(66,"span",32),n(67,"Template Literal Types"),t()(),e(68,"p-tab",37),a(69,"i",38),e(70,"span",32),n(71,"Practical Example"),t()()(),e(72,"p-tabpanels")(73,"p-tabpanel",28)(74,"div",39)(75,"pre",40)(76,"code"),n(77),t()()()(),e(78,"p-tabpanel",41)(79,"div",39)(80,"pre",40)(81,"code"),n(82),t()()()(),e(83,"p-tabpanel",42)(84,"div",39)(85,"pre",40)(86,"code"),n(87),t()()()(),e(88,"p-tabpanel",43)(89,"div",39)(90,"pre",40)(91,"code"),n(92),t()()()()()()()(),e(93,"p-card",13)(94,"div",24)(95,"div",4)(96,"div",44),a(97,"i",45),t(),e(98,"h2",17),n(99,"Interactive Demo"),t()(),e(100,"p",46),n(101," Test the different advanced types in action. "),t(),e(102,"div",47)(103,"div",48)(104,"p-button",49),d("click",function(){return i.testConditionalTypes()}),t(),e(105,"p-button",50),d("click",function(){return i.testMappedTypes()}),t(),e(106,"p-button",51),d("click",function(){return i.testTemplateLiteralTypes()}),t()(),u(107,M,3,1,"div",52),t()()(),e(108,"p-card",13)(109,"div",24)(110,"div",25)(111,"div",53),a(112,"i",54),t(),e(113,"h2",17),n(114,"Key Takeaways"),t()(),e(115,"ul",22)(116,"li",23),n(117," Conditional types enable type-level conditionals using the ternary operator "),t(),e(118,"li",23),n(119," Mapped types transform properties using the "),e(120,"code"),n(121,"[P in keyof T]"),t(),n(122," syntax "),t(),e(123,"li",23),n(124," Template literal types enable string manipulation at the type level "),t(),e(125,"li",23),n(126," These types enable powerful type-safe utilities and APIs "),t()()()()()),r&2&&(l(45),g("`on","{","Capitalize<T>","}","`"),l(32),o(i.conditionalTypesCode),l(5),o(i.mappedTypesCode),l(5),o(i.templateLiteralTypesCode),l(5),o(i.practicalExampleCode),l(15),x(i.result()?107:-1))},dependencies:[v,h,S,A,P,C,k,w,b,E],encapsulation:2})};export{U as AdvancedTypesDemoComponent};
