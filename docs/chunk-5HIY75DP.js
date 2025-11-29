import{a as S,b as E,c as U,d as h,e as k,f as R,g as v}from"./chunk-6IHYB2AV.js";import{p as b,q as f}from"./chunk-H3I524XT.js";import{p as x}from"./chunk-EFMPFDS6.js";import"./chunk-4IVXAVEU.js";import{Ab as i,Bb as e,Nb as m,Ob as g,Sa as l,ac as t,bc as o,gb as c,pa as p,tb as u,ub as y}from"./chunk-ANFRTOHF.js";import"./chunk-6HR7AMTL.js";function T(s,a){if(s&1&&(i(0,"div",22)(1,"pre",27),t(2),e()()),s&2){let n=g();l(2),o(n.result())}}var N=class s{partialPickOmitCode=`
// Partial: Make all properties optional
type PartialUser = Partial<User>;
// { id?: string; name?: string; email?: string; ... }

// Pick: Select specific properties
type UserName = Pick<User, 'name' | 'email'>;
// { name: string; email: string; }

// Omit: Exclude specific properties
type UserWithoutId = Omit<User, 'id'>;
// { name: string; email: string; age?: number; role: 'admin' | 'user'; }

// Usage
const partialUser: PartialUser = { name: 'John' };
const userName: UserName = { name: 'John', email: 'john@example.com' };
const userWithoutId: UserWithoutId = { name: 'John', email: 'john@example.com', role: 'user' };
`;recordRequiredReadonlyCode=`
// Record: Create object type with specific keys and values
type UserRoles = Record<string, 'admin' | 'user'>;
// { [key: string]: 'admin' | 'user' }

type StatusCodes = Record<200 | 404 | 500, string>;
// { 200: string; 404: string; 500: string; }

// Required: Make all properties required
type RequiredUser = Required<User>;
// { id: string; name: string; email: string; age: number; role: 'admin' | 'user'; }

// Readonly: Make all properties readonly
type ReadonlyUser = Readonly<User>;
// All properties are readonly
`;extractExcludeNonNullableCode=`
// Extract: Extract types from union
type StringOrNumber = string | number | boolean;
type OnlyString = Extract<StringOrNumber, string>;  // string

// Exclude: Exclude types from union
type WithoutBoolean = Exclude<StringOrNumber, boolean>;  // string | number

// NonNullable: Remove null and undefined
type MaybeString = string | null | undefined;
type DefiniteString = NonNullable<MaybeString>;  // string
`;advancedUtilityTypesCode=`
// Parameters: Extract function parameters
function createUser(name: string, email: string, age?: number) {}
type CreateUserParams = Parameters<typeof createUser>;
// [string, string, number?]

// ReturnType: Extract return type
type UserReturn = ReturnType<typeof createUser>;
// User

// Awaited: Unwrap Promise type
type UserPromise = Promise<User>;
type UnwrappedUser = Awaited<UserPromise>;  // User

// InstanceType: Extract instance type from constructor
class UserService {}
type ServiceInstance = InstanceType<typeof UserService>;  // UserService
`;result=p("");testPartialPickOmit(){let a={name:"John"},n={name:"John",email:"john@example.com"},r={name:"John",email:"john@example.com",role:"user"};this.result.set(`Partial User: ${JSON.stringify(a,null,2)}

Pick User: ${JSON.stringify(n,null,2)}

Omit User: ${JSON.stringify(r,null,2)}`)}testRecordRequiredReadonly(){let a={user1:"admin",user2:"user"},n={id:"1",name:"John",email:"john@example.com",role:"user"};this.result.set(`Record: ${JSON.stringify(a,null,2)}

Readonly User: ${JSON.stringify(n,null,2)}`)}testExtractExcludeNonNullable(){this.result.set(`Extract (string only): "hello"
Exclude (no boolean): "hello"
NonNullable: "hello"`)}static \u0275fac=function(n){return new(n||s)};static \u0275cmp=c({type:s,selectors:[["app-utility-types-demo"]],decls:103,vars:5,consts:[[1,"max-w-7xl","mx-auto","space-y-6"],[1,"bg-white","dark:bg-gray-800","rounded-lg","shadow-md","p-6"],[1,"text-3xl","font-bold","text-gray-800","dark:text-gray-200","mb-2"],[1,"text-gray-600","dark:text-gray-400"],[1,"shadow-md"],[1,"space-y-4"],[1,"text-2xl","font-semibold","text-gray-800","dark:text-gray-200"],[1,"text-gray-700","dark:text-gray-300"],[1,"bg-blue-50","dark:bg-blue-900/20","p-4","rounded-lg"],[1,"font-semibold","text-blue-900","dark:text-blue-200","mb-2"],[1,"list-disc","list-inside","space-y-1","text-blue-800","dark:text-blue-300"],["value","0"],["value","1"],["value","2"],["value","3"],[1,"bg-gray-900","text-gray-100","p-4","rounded-lg","overflow-x-auto","text-sm"],[1,"text-2xl","font-semibold","text-gray-800","dark:text-gray-200","mb-4"],[1,"text-gray-700","dark:text-gray-300","mb-6"],[1,"flex","gap-4","flex-wrap"],["label","Test Partial/Pick/Omit","icon","pi pi-wrench",3,"click"],["label","Test Record/Required/Readonly","icon","pi pi-cog",3,"click"],["label","Test Extract/Exclude/NonNullable","icon","pi pi-filter",3,"click"],[1,"bg-gray-100","dark:bg-gray-700","p-4","rounded-lg"],[1,"space-y-2","text-gray-700","dark:text-gray-300"],[1,"flex","items-start"],[1,"text-green-500","mr-2"],[1,"bg-gray-200","dark:bg-gray-700","px-1","rounded"],[1,"text-sm","text-gray-800","dark:text-gray-200","whitespace-pre-wrap"]],template:function(n,r){n&1&&(i(0,"div",0)(1,"div",1)(2,"h1",2),t(3,"Utility Types Deep Dive"),e(),i(4,"p",3),t(5," Built-in TypeScript utility types: Partial, Pick, Omit, Record, Required, Readonly, and more. "),e()(),i(6,"p-card",4)(7,"div",5)(8,"h2",6),t(9,"What are Utility Types?"),e(),i(10,"p",7),t(11," Utility types are built-in TypeScript types that help transform and manipulate other types. They're essential for creating flexible, reusable type definitions. "),e(),i(12,"div",8)(13,"h3",9),t(14,"Common Utility Types:"),e(),i(15,"ul",10)(16,"li")(17,"strong"),t(18,"Partial<T>:"),e(),t(19," Make all properties optional"),e(),i(20,"li")(21,"strong"),t(22,"Pick<T, K>:"),e(),t(23," Select specific properties"),e(),i(24,"li")(25,"strong"),t(26,"Omit<T, K>:"),e(),t(27," Exclude specific properties"),e(),i(28,"li")(29,"strong"),t(30,"Record<K, V>:"),e(),t(31," Create object type with specific keys"),e()()()()(),i(32,"p-card",4)(33,"p-tabs",11)(34,"p-tablist")(35,"p-tab",11),t(36,"Partial, Pick, Omit"),e(),i(37,"p-tab",12),t(38,"Record, Required, Readonly"),e(),i(39,"p-tab",13),t(40,"Extract, Exclude, NonNullable"),e(),i(41,"p-tab",14),t(42,"Advanced Utilities"),e()(),i(43,"p-tabpanels")(44,"p-tabpanel",11)(45,"pre",15)(46,"code"),t(47),e()()(),i(48,"p-tabpanel",12)(49,"pre",15)(50,"code"),t(51),e()()(),i(52,"p-tabpanel",13)(53,"pre",15)(54,"code"),t(55),e()()(),i(56,"p-tabpanel",14)(57,"pre",15)(58,"code"),t(59),e()()()()()(),i(60,"p-card",4)(61,"h2",16),t(62,"Live Demo"),e(),i(63,"p",17),t(64," Test utility types in action. "),e(),i(65,"div",5)(66,"div",18)(67,"p-button",19),m("click",function(){return r.testPartialPickOmit()}),e(),i(68,"p-button",20),m("click",function(){return r.testRecordRequiredReadonly()}),e(),i(69,"p-button",21),m("click",function(){return r.testExtractExcludeNonNullable()}),e()(),u(70,T,3,1,"div",22),e()(),i(71,"p-card",4)(72,"h2",16),t(73,"Key Takeaways"),e(),i(74,"ul",23)(75,"li",24)(76,"span",25),t(77,"\u2713"),e(),i(78,"span"),t(79,"Utility types transform existing types without modifying the original"),e()(),i(80,"li",24)(81,"span",25),t(82,"\u2713"),e(),i(83,"span"),t(84,"Use "),i(85,"code",26),t(86,"Partial"),e(),t(87," for optional updates, "),i(88,"code",26),t(89,"Pick"),e(),t(90," for selecting fields"),e()(),i(91,"li",24)(92,"span",25),t(93,"\u2713"),e(),i(94,"span")(95,"code",26),t(96,"Record"),e(),t(97," is great for creating key-value mappings"),e()(),i(98,"li",24)(99,"span",25),t(100,"\u2713"),e(),i(101,"span"),t(102,"Combine utility types for powerful type transformations"),e()()()()()),n&2&&(l(47),o(r.partialPickOmitCode),l(4),o(r.recordRequiredReadonlyCode),l(4),o(r.extractExcludeNonNullableCode),l(4),o(r.advancedUtilityTypesCode),l(11),y(r.result()?70:-1))},dependencies:[x,E,S,v,h,U,k,R,f,b],encapsulation:2})};export{N as UtilityTypesDemoComponent};
