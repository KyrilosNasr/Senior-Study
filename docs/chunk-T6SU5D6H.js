import{e as b}from"./chunk-26I6QKGV.js";import"./chunk-DS4DKGB5.js";import"./chunk-YPUDPSQH.js";import"./chunk-DEGWJE5E.js";import{a as E,b as h,c as U,d as k,e as R}from"./chunk-3ZW5MUH5.js";import"./chunk-SHEHAVXT.js";import{a as v,b as S}from"./chunk-ST7OVFPO.js";import"./chunk-QCJRPF2F.js";import"./chunk-IZU7C3FN.js";import{r as f}from"./chunk-BO564T5E.js";import"./chunk-FPPZ4BUR.js";import{Cb as x,Db as y,Jb as t,Kb as e,Lb as n,Wb as d,Yb as g,Za as s,kc as i,lc as o,nb as u,va as c}from"./chunk-6P3ZW5D6.js";import"./chunk-6HR7AMTL.js";function T(m,l){if(m&1&&(t(0,"div",53)(1,"pre",56),i(2),e()()),m&2){let r=g();s(2),o(r.result())}}var N=class m{partialPickOmitCode=`
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
`;result=c("");testPartialPickOmit(){let l={name:"John"},r={name:"John",email:"john@example.com"},a={name:"John",email:"john@example.com",role:"user"};this.result.set(`Partial User: ${JSON.stringify(l,null,2)}

Pick User: ${JSON.stringify(r,null,2)}

Omit User: ${JSON.stringify(a,null,2)}`)}testRecordRequiredReadonly(){let l={user1:"admin",user2:"user"},r={id:"1",name:"John",email:"john@example.com",role:"user"};this.result.set(`Record: ${JSON.stringify(l,null,2)}

Readonly User: ${JSON.stringify(r,null,2)}`)}testExtractExcludeNonNullable(){this.result.set(`Extract (string only): "hello"
Exclude (no boolean): "hello"
NonNullable: "hello"`)}static \u0275fac=function(r){return new(r||m)};static \u0275cmp=u({type:m,selectors:[["app-utility-types-demo"]],decls:139,vars:5,consts:[[1,"container-responsive","space-y-responsive"],[1,"card-modern","padding-responsive","hover-lift","slide-in-up"],[1,"flex","flex-col","lg:flex-row","lg:items-center","lg:justify-between","gap-6"],[1,"flex-1"],[1,"flex","items-center","gap-3","mb-4"],[1,"w-12","h-12","sm:w-14","sm:h-14","rounded-xl","bg-gradient-to-br","from-blue-600","to-cyan-600","flex","items-center","justify-center","shadow-lg"],[1,"fas","fa-wrench","text-white","text-xl","sm:text-2xl"],[1,"badge-modern","text-xs","sm:text-sm"],[1,"heading-responsive","text-gradient","mb-4"],[1,"text-responsive","text-gray-700","dark:text-gray-300"],[1,"hidden","lg:block"],[1,"w-32","h-32","rounded-2xl","bg-gradient-to-br","from-blue-600/20","to-cyan-600/20","flex","items-center","justify-center"],[1,"fas","fa-wrench","text-6xl","text-blue-600"],[1,"card-modern","hover-lift","slide-in-up"],[1,"padding-responsive","space-y-6"],[1,"w-10","h-10","rounded-lg","bg-gradient-to-br","from-blue-500","to-purple-600","flex","items-center","justify-center"],[1,"fas","fa-lightbulb","text-white"],[1,"subheading-responsive","text-gray-900","dark:text-gray-100"],[1,"text-responsive","text-gray-700","dark:text-gray-300","leading-relaxed"],[1,"glass","rounded-xl","p-6","border-l-4","border-accent"],[1,"fas","fa-star","text-accent","text-xl"],[1,"text-lg","sm:text-xl","font-semibold","text-gray-900","dark:text-gray-100"],[1,"list-modern"],[1,"text-sm","sm:text-base","text-gray-800","dark:text-gray-200"],[1,"padding-responsive"],[1,"flex","items-center","gap-3","mb-6"],[1,"w-10","h-10","rounded-lg","bg-gradient-to-br","from-green-500","to-teal-600","flex","items-center","justify-center"],[1,"fas","fa-code","text-white"],["value","0"],[1,"flex","flex-wrap","gap-2","mb-6"],["value","0",1,"flex","items-center","gap-2"],[1,"fas","fa-cut","text-blue-500"],[1,"text-sm","sm:text-base","font-semibold"],["value","1",1,"flex","items-center","gap-2"],[1,"fas","fa-lock","text-purple-500"],["value","2",1,"flex","items-center","gap-2"],[1,"fas","fa-filter","text-cyan-500"],["value","3",1,"flex","items-center","gap-2"],[1,"fas","fa-rocket","text-green-500"],[1,"code-block-modern"],[1,"overflow-x-auto","text-sm","sm:text-base"],["value","1"],["value","2"],["value","3"],[1,"w-10","h-10","rounded-lg","bg-gradient-to-br","from-purple-500","to-pink-600","flex","items-center","justify-center"],[1,"fas","fa-play-circle","text-white"],[1,"text-responsive","text-gray-700","dark:text-gray-300","mb-8"],[1,"space-y-6"],[1,"flex","gap-3","flex-wrap"],[1,"btn-modern",3,"click"],[1,"pi","pi-wrench","pe-3"],[1,"pi","pi-cog","pe-3"],[1,"pi","pi-filter","pe-3"],[1,"glass","rounded-xl","p-6","fade-in"],[1,"w-10","h-10","rounded-lg","bg-gradient-to-br","from-teal-500","to-cyan-600","flex","items-center","justify-center"],[1,"fas","fa-graduation-cap","text-white"],[1,"text-sm","sm:text-base","text-gray-800","dark:text-gray-200","whitespace-pre-wrap"]],template:function(r,a){r&1&&(t(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5),n(6,"i",6),e(),t(7,"div")(8,"span",7),i(9,"TypeScript"),e()()(),t(10,"h1",8),i(11," Utility Types Deep Dive "),e(),t(12,"p",9),i(13," Built-in TypeScript utility types: Partial, Pick, Omit, Record, Required, Readonly, and more. "),e()(),t(14,"div",10)(15,"div",11),n(16,"i",12),e()()()(),t(17,"p-card",13)(18,"div",14)(19,"div",4)(20,"div",15),n(21,"i",16),e(),t(22,"h2",17),i(23,"What are Utility Types?"),e()(),t(24,"p",18),i(25," Utility types are built-in TypeScript types that help transform and manipulate other types. They're essential for creating flexible, reusable type definitions. "),e(),t(26,"div",19)(27,"div",4),n(28,"i",20),t(29,"h3",21),i(30,"Common Utility Types"),e()(),t(31,"ul",22)(32,"li",23)(33,"strong"),i(34,"Partial<T>:"),e(),i(35," Make all properties optional "),e(),t(36,"li",23)(37,"strong"),i(38,"Pick<T, K>:"),e(),i(39," Select specific properties "),e(),t(40,"li",23)(41,"strong"),i(42,"Omit<T, K>:"),e(),i(43," Exclude specific properties "),e(),t(44,"li",23)(45,"strong"),i(46,"Record<K, V>:"),e(),i(47," Create object type with specific keys "),e()()()()(),t(48,"p-card",13)(49,"div",24)(50,"div",25)(51,"div",26),n(52,"i",27),e(),t(53,"h2",17),i(54,"Code Examples"),e()(),t(55,"p-tabs",28)(56,"p-tablist",29)(57,"p-tab",30),n(58,"i",31),t(59,"span",32),i(60,"Partial, Pick, Omit"),e()(),t(61,"p-tab",33),n(62,"i",34),t(63,"span",32),i(64,"Record, Required, Readonly"),e()(),t(65,"p-tab",35),n(66,"i",36),t(67,"span",32),i(68,"Extract, Exclude, NonNullable"),e()(),t(69,"p-tab",37),n(70,"i",38),t(71,"span",32),i(72,"Advanced Utilities"),e()()(),t(73,"p-tabpanels")(74,"p-tabpanel",28)(75,"div",39)(76,"pre",40)(77,"code"),i(78),e()()()(),t(79,"p-tabpanel",41)(80,"div",39)(81,"pre",40)(82,"code"),i(83),e()()()(),t(84,"p-tabpanel",42)(85,"div",39)(86,"pre",40)(87,"code"),i(88),e()()()(),t(89,"p-tabpanel",43)(90,"div",39)(91,"pre",40)(92,"code"),i(93),e()()()()()()()(),t(94,"p-card",13)(95,"div",24)(96,"div",4)(97,"div",44),n(98,"i",45),e(),t(99,"h2",17),i(100,"Interactive Demo"),e()(),t(101,"p",46),i(102," Test utility types in action. "),e(),t(103,"div",47)(104,"div",48)(105,"button",49),d("click",function(){return a.testPartialPickOmit()}),n(106,"i",50),i(107,"Test Partial/Pick/Omit"),e(),t(108,"button",49),d("click",function(){return a.testRecordRequiredReadonly()}),n(109,"i",51),i(110,"Test Record/Required/Readonly"),e(),t(111,"button",49),d("click",function(){return a.testExtractExcludeNonNullable()}),n(112,"i",52),i(113,"Test Extract/Exclude/NonNullable"),e()(),x(114,T,3,1,"div",53),e()()(),t(115,"p-card",13)(116,"div",24)(117,"div",25)(118,"div",54),n(119,"i",55),e(),t(120,"h2",17),i(121,"Key Takeaways"),e()(),t(122,"ul",22)(123,"li",23),i(124," Utility types transform existing types without modifying the original "),e(),t(125,"li",23),i(126," Use "),t(127,"code"),i(128,"Partial"),e(),i(129," for optional updates, "),t(130,"code"),i(131,"Pick"),e(),i(132," for selecting fields "),e(),t(133,"li",23)(134,"code"),i(135,"Record"),e(),i(136," is great for creating key-value mappings "),e(),t(137,"li",23),i(138," Combine utility types for powerful type transformations "),e()()()()()),r&2&&(s(78),o(a.partialPickOmitCode),s(5),o(a.recordRequiredReadonlyCode),s(5),o(a.extractExcludeNonNullableCode),s(5),o(a.advancedUtilityTypesCode),s(21),y(a.result()?114:-1))},dependencies:[f,S,v,R,h,E,U,k,b],encapsulation:2})};export{N as UtilityTypesDemoComponent};
