import{a as v,b as S,c as C,d as P,e as k,f as h,g as A}from"./chunk-AH7MQ5KM.js";import{p as b,q as f}from"./chunk-47HPTYDK.js";import{p as E}from"./chunk-FHCI6K3X.js";import"./chunk-FPPZ4BUR.js";import{Hb as o,Jb as x,Ma as l,Xb as t,Yb as p,_b as g,ab as T,nb as c,ob as u,ub as n,va as y,vb as e}from"./chunk-S2MQBBOY.js";import{a as m}from"./chunk-6HR7AMTL.js";function M(s,r){if(s&1&&(n(0,"div",22)(1,"pre",26),t(2),e()()),s&2){let a=x();l(2),p(a.result())}}var U=class s{conditionalTypesCode=`
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
NonNullable<string | null>: "test"`)}testMappedTypes(){let r={id:"1",name:"John Doe",email:"john@example.com",age:30},a={name:"Jane Doe"},i=m({},r);this.result.set(`Mapped Types Test:
Partial User: ${JSON.stringify(a,null,2)}
Readonly User: ${JSON.stringify(i,null,2)}`)}testTemplateLiteralTypes(){this.result.set(`Template Literal Types Test:
Event: onClick
Event: onSubmit
Endpoint: /api/get
Endpoint: /api/post`)}static \u0275fac=function(a){return new(a||s)};static \u0275cmp=T({type:s,selectors:[["app-advanced-types-demo"]],decls:97,vars:7,consts:[[1,"max-w-7xl","mx-auto","space-y-8"],[1,"bg-white","dark:bg-gray-800","rounded-lg","shadow-lg","p-8"],[1,"text-4xl","font-bold","text-gray-900","dark:text-gray-100","mb-3"],[1,"text-lg","text-gray-700","dark:text-gray-300","leading-relaxed"],[1,"shadow-lg"],[1,"space-y-4"],[1,"text-3xl","font-semibold","text-gray-900","dark:text-gray-100","mb-3"],[1,"text-base","text-gray-700","dark:text-gray-300","leading-relaxed"],[1,"bg-blue-50","dark:bg-blue-900/30","p-5","rounded-lg","border","border-blue-200","dark:border-blue-800"],[1,"text-lg","font-semibold","text-blue-900","dark:text-blue-100","mb-3"],[1,"list-disc","list-inside","space-y-2","text-base","text-blue-800","dark:text-blue-200"],["value","0"],["value","1"],["value","2"],["value","3"],[1,"overflow-x-auto"],[1,"text-3xl","font-semibold","text-gray-900","dark:text-gray-100","mb-3","mb-4"],[1,"text-base","text-gray-700","dark:text-gray-300","leading-relaxed","mb-6"],[1,"flex","gap-5","flex-wrap"],["label","Test Conditional Types","icon","pi pi-code",3,"click"],["label","Test Mapped Types","icon","pi pi-cog",3,"click"],["label","Test Template Literal Types","icon","pi pi-bolt",3,"click"],[1,"bg-gray-100","dark:bg-gray-700","p-5","rounded-lg"],[1,"space-y-2","text-base","text-gray-700","dark:text-gray-300","leading-relaxed"],[1,"flex","items-start"],[1,"text-green-500","mr-2"],[1,"text-sm","text-gray-800","dark:text-gray-200","whitespace-pre-wrap"]],template:function(a,i){a&1&&(n(0,"div",0)(1,"div",1)(2,"h1",2),t(3,"Advanced Types"),e(),n(4,"p",3),t(5," Conditional Types, Mapped Types, and Template Literal Types - Powerful type manipulation features in TypeScript. "),e()(),n(6,"p-card",4)(7,"div",5)(8,"h2",6),t(9,"What are Advanced Types?"),e(),n(10,"p",7),t(11," Advanced types allow you to create complex type transformations and manipulations, enabling more expressive and type-safe code. They include Conditional Types, Mapped Types, and Template Literal Types. "),e(),n(12,"div",8)(13,"h3",9),t(14,"Key Concepts:"),e(),n(15,"ul",10)(16,"li")(17,"strong"),t(18,"Conditional Types:"),e(),t(19," Types that depend on conditions (T extends U ? X : Y)"),e(),n(20,"li")(21,"strong"),t(22,"Mapped Types:"),e(),t(23," Transform properties of existing types ([P in keyof T])"),e(),n(24,"li")(25,"strong"),t(26,"Template Literal Types:"),e(),t(27," String manipulation at the type level ("),n(28,"code"),t(29),e(),t(30,")"),e()()()()(),n(31,"p-card",4)(32,"p-tabs",11)(33,"p-tablist")(34,"p-tab",11),t(35,"Conditional Types"),e(),n(36,"p-tab",12),t(37,"Mapped Types"),e(),n(38,"p-tab",13),t(39,"Template Literal Types"),e(),n(40,"p-tab",14),t(41,"Practical Example"),e()(),n(42,"p-tabpanels")(43,"p-tabpanel",11)(44,"pre",15)(45,"code"),t(46),e()()(),n(47,"p-tabpanel",12)(48,"pre",15)(49,"code"),t(50),e()()(),n(51,"p-tabpanel",13)(52,"pre",15)(53,"code"),t(54),e()()(),n(55,"p-tabpanel",14)(56,"pre",15)(57,"code"),t(58),e()()()()()(),n(59,"p-card",4)(60,"h2",16),t(61,"Live Demo"),e(),n(62,"p",17),t(63," Test the different advanced types in action. "),e(),n(64,"div",5)(65,"div",18)(66,"p-button",19),o("click",function(){return i.testConditionalTypes()}),e(),n(67,"p-button",20),o("click",function(){return i.testMappedTypes()}),e(),n(68,"p-button",21),o("click",function(){return i.testTemplateLiteralTypes()}),e()(),c(69,M,3,1,"div",22),e()(),n(70,"p-card",4)(71,"h2",16),t(72,"Key Takeaways"),e(),n(73,"ul",23)(74,"li",24)(75,"span",25),t(76,"\u2713"),e(),n(77,"span"),t(78,"Conditional types enable type-level conditionals using the ternary operator"),e()(),n(79,"li",24)(80,"span",25),t(81,"\u2713"),e(),n(82,"span"),t(83,"Mapped types transform properties using the "),n(84,"code"),t(85,"[P in keyof T]"),e(),t(86," syntax"),e()(),n(87,"li",24)(88,"span",25),t(89,"\u2713"),e(),n(90,"span"),t(91,"Template literal types enable string manipulation at the type level"),e()(),n(92,"li",24)(93,"span",25),t(94,"\u2713"),e(),n(95,"span"),t(96,"These types enable powerful type-safe utilities and APIs"),e()()()()()),a&2&&(l(29),g("`on","{","Capitalize<T>","}","`"),l(17),p(i.conditionalTypesCode),l(4),p(i.mappedTypesCode),l(4),p(i.templateLiteralTypesCode),l(4),p(i.practicalExampleCode),l(11),u(i.result()?69:-1))},dependencies:[E,S,v,A,P,C,k,h,f,b],encapsulation:2})};export{U as AdvancedTypesDemoComponent};
