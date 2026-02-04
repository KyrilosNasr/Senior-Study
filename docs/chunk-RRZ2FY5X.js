import{e as S}from"./chunk-26I6QKGV.js";import"./chunk-DS4DKGB5.js";import"./chunk-YPUDPSQH.js";import"./chunk-DEGWJE5E.js";import{a as h,b as P,c as k,d as w,e as A}from"./chunk-3ZW5MUH5.js";import"./chunk-SHEHAVXT.js";import{a as b,b as C}from"./chunk-ST7OVFPO.js";import"./chunk-QCJRPF2F.js";import"./chunk-IZU7C3FN.js";import{b as E}from"./chunk-JBIPGRVB.js";import{r as v}from"./chunk-BO564T5E.js";import"./chunk-FPPZ4BUR.js";import{Cb as x,Db as u,Jb as e,Kb as t,Lb as i,Wb as d,Yb as g,Za as r,kc as n,lc as s,nb as T,nc as f,va as y}from"./chunk-6P3ZW5D6.js";import{a as c}from"./chunk-6HR7AMTL.js";function U(p,o){if(p&1&&(e(0,"div",53)(1,"pre",56),n(2),t()()),p&2){let l=g();r(2),s(l.result())}}var M=class p{conditionalTypesCode=`
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
NonNullable<string | null>: "test"`)}testMappedTypes(){let o={id:"1",name:"John Doe",email:"john@example.com",age:30},l={name:"Jane Doe"},a=c({},o);this.result.set(`Mapped Types Test:
Partial User: ${JSON.stringify(l,null,2)}
Readonly User: ${JSON.stringify(a,null,2)}`)}testTemplateLiteralTypes(){this.result.set(`Template Literal Types Test:
Event: onClick
Event: onSubmit
Endpoint: /api/get
Endpoint: /api/post`)}static \u0275fac=function(l){return new(l||p)};static \u0275cmp=T({type:p,selectors:[["app-advanced-types-demo"]],decls:133,vars:7,consts:[[1,"container-responsive","space-y-responsive"],[1,"card-modern","padding-responsive","hover-lift","slide-in-up"],[1,"flex","flex-col","lg:flex-row","lg:items-center","lg:justify-between","gap-6"],[1,"flex-1"],[1,"flex","items-center","gap-3","mb-4"],[1,"w-12","h-12","sm:w-14","sm:h-14","rounded-xl","bg-gradient-to-br","from-blue-600","to-cyan-600","flex","items-center","justify-center","shadow-lg"],["name","faSolidCode",1,"text-white","text-xl","sm:text-2xl"],[1,"badge-modern","text-xs","sm:text-sm"],[1,"heading-responsive","text-gradient","mb-4"],[1,"text-responsive","text-gray-700","dark:text-gray-300"],[1,"hidden","lg:block"],[1,"w-32","h-32","rounded-2xl","bg-gradient-to-br","from-blue-600/20","to-cyan-600/20","flex","items-center","justify-center"],["name","faSolidCode",1,"text-6xl","text-blue-600"],[1,"card-modern","hover-lift","slide-in-up"],[1,"padding-responsive","space-y-6"],[1,"w-10","h-10","rounded-lg","bg-gradient-to-br","from-blue-500","to-purple-600","flex","items-center","justify-center"],["name","faSolidLightbulb",1,"text-white"],[1,"subheading-responsive","text-gray-900","dark:text-gray-100"],[1,"text-responsive","text-gray-700","dark:text-gray-300","leading-relaxed"],[1,"glass","rounded-xl","p-6","border-l-4","border-accent"],["name","faSolidStar",1,"text-accent","text-xl"],[1,"text-lg","sm:text-xl","font-semibold","text-gray-900","dark:text-gray-100"],[1,"list-modern"],[1,"text-sm","sm:text-base","text-gray-800","dark:text-gray-200"],[1,"padding-responsive"],[1,"flex","items-center","gap-3","mb-6"],[1,"w-10","h-10","rounded-lg","bg-gradient-to-br","from-green-500","to-teal-600","flex","items-center","justify-center"],["name","faSolidCode",1,"text-white"],["value","0"],[1,"flex","flex-wrap","gap-2","mb-6"],["value","0",1,"flex","items-center","gap-2"],["name","faSolidCircleQuestion",1,"text-blue-500"],[1,"text-sm","sm:text-base","font-semibold"],["value","1",1,"flex","items-center","gap-2"],["name","faSolidMap",1,"text-purple-500"],["value","2",1,"flex","items-center","gap-2"],["name","faSolidFont",1,"text-cyan-500"],["value","3",1,"flex","items-center","gap-2"],["name","faSolidRocket",1,"text-green-500"],[1,"code-block-modern"],[1,"overflow-x-auto","text-sm","sm:text-base"],["value","1"],["value","2"],["value","3"],[1,"w-10","h-10","rounded-lg","bg-gradient-to-br","from-purple-500","to-pink-600","flex","items-center","justify-center"],["name","faSolidCirclePlay",1,"text-white"],[1,"text-responsive","text-gray-700","dark:text-gray-300","mb-8"],[1,"space-y-6"],[1,"flex","gap-3","flex-wrap"],[1,"btn-modern",3,"click"],["name","faSolidCode",1,"pe-3"],["name","faSolidGear",1,"pe-3"],["name","faSolidBolt",1,"pe-3"],[1,"glass","rounded-xl","p-6","fade-in"],[1,"w-10","h-10","rounded-lg","bg-gradient-to-br","from-teal-500","to-cyan-600","flex","items-center","justify-center"],["name","faSolidGraduationCap",1,"text-white"],[1,"text-sm","sm:text-base","text-gray-800","dark:text-gray-200","whitespace-pre-wrap"]],template:function(l,a){l&1&&(e(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5),i(6,"ng-icon",6),t(),e(7,"div")(8,"span",7),n(9,"TypeScript"),t()()(),e(10,"h1",8),n(11," Advanced Types "),t(),e(12,"p",9),n(13," Conditional Types, Mapped Types, and Template Literal Types - Powerful type manipulation features in TypeScript. "),t()(),e(14,"div",10)(15,"div",11),i(16,"ng-icon",12),t()()()(),e(17,"p-card",13)(18,"div",14)(19,"div",4)(20,"div",15),i(21,"ng-icon",16),t(),e(22,"h2",17),n(23,"What are Advanced Types?"),t()(),e(24,"p",18),n(25," Advanced types allow you to create complex type transformations and manipulations, enabling more expressive and type-safe code. They include Conditional Types, Mapped Types, and Template Literal Types. "),t(),e(26,"div",19)(27,"div",4),i(28,"ng-icon",20),e(29,"h3",21),n(30,"Key Concepts"),t()(),e(31,"ul",22)(32,"li",23)(33,"strong"),n(34,"Conditional Types:"),t(),n(35," Types that depend on conditions (T extends U ? X : Y) "),t(),e(36,"li",23)(37,"strong"),n(38,"Mapped Types:"),t(),n(39," Transform properties of existing types ([P in keyof T]) "),t(),e(40,"li",23)(41,"strong"),n(42,"Template Literal Types:"),t(),n(43," String manipulation at the type level ("),e(44,"code"),n(45),t(),n(46,") "),t()()()()(),e(47,"p-card",13)(48,"div",24)(49,"div",25)(50,"div",26),i(51,"ng-icon",27),t(),e(52,"h2",17),n(53,"Code Examples"),t()(),e(54,"p-tabs",28)(55,"p-tablist",29)(56,"p-tab",30),i(57,"ng-icon",31),e(58,"span",32),n(59,"Conditional Types"),t()(),e(60,"p-tab",33),i(61,"ng-icon",34),e(62,"span",32),n(63,"Mapped Types"),t()(),e(64,"p-tab",35),i(65,"ng-icon",36),e(66,"span",32),n(67,"Template Literal Types"),t()(),e(68,"p-tab",37),i(69,"ng-icon",38),e(70,"span",32),n(71,"Practical Example"),t()()(),e(72,"p-tabpanels")(73,"p-tabpanel",28)(74,"div",39)(75,"pre",40)(76,"code"),n(77),t()()()(),e(78,"p-tabpanel",41)(79,"div",39)(80,"pre",40)(81,"code"),n(82),t()()()(),e(83,"p-tabpanel",42)(84,"div",39)(85,"pre",40)(86,"code"),n(87),t()()()(),e(88,"p-tabpanel",43)(89,"div",39)(90,"pre",40)(91,"code"),n(92),t()()()()()()()(),e(93,"p-card",13)(94,"div",24)(95,"div",4)(96,"div",44),i(97,"ng-icon",45),t(),e(98,"h2",17),n(99,"Interactive Demo"),t()(),e(100,"p",46),n(101," Test the different advanced types in action. "),t(),e(102,"div",47)(103,"div",48)(104,"button",49),d("click",function(){return a.testConditionalTypes()}),i(105,"ng-icon",50),n(106," Test Conditional Types"),t(),e(107,"button",49),d("click",function(){return a.testMappedTypes()}),i(108,"ng-icon",51),n(109," Test Mapped Types"),t(),e(110,"button",49),d("click",function(){return a.testTemplateLiteralTypes()}),i(111,"ng-icon",52),n(112," Test Template Literal Types"),t()(),x(113,U,3,1,"div",53),t()()(),e(114,"p-card",13)(115,"div",24)(116,"div",25)(117,"div",54),i(118,"ng-icon",55),t(),e(119,"h2",17),n(120,"Key Takeaways"),t()(),e(121,"ul",22)(122,"li",23),n(123," Conditional types enable type-level conditionals using the ternary operator "),t(),e(124,"li",23),n(125," Mapped types transform properties using the "),e(126,"code"),n(127,"[P in keyof T]"),t(),n(128," syntax "),t(),e(129,"li",23),n(130," Template literal types enable string manipulation at the type level "),t(),e(131,"li",23),n(132," These types enable powerful type-safe utilities and APIs "),t()()()()()),l&2&&(r(45),f("`on","{","Capitalize<T>","}","`"),r(32),s(a.conditionalTypesCode),r(5),s(a.mappedTypesCode),r(5),s(a.templateLiteralTypesCode),r(5),s(a.practicalExampleCode),r(21),u(a.result()?113:-1))},dependencies:[E,v,C,b,A,P,h,k,w,S],encapsulation:2})};export{M as AdvancedTypesDemoComponent};
