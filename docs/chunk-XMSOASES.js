import{b as g,c as v}from"./chunk-DWOAIROL.js";import"./chunk-4WL4JRY5.js";import"./chunk-7HDGE6MB.js";import"./chunk-KDOOMALM.js";import{a as b,b as T,c as h,d as S,e as E,f as C,g as w}from"./chunk-OAZ4ZSRP.js";import"./chunk-2VTPWLFV.js";import{p as u}from"./chunk-FHCI6K3X.js";import"./chunk-FPPZ4BUR.js";import{Hb as m,Jb as x,Ma as o,Xb as r,Yb as p,ab as c,nb as y,ob as f,ub as e,va as d,vb as t,wb as i}from"./chunk-S2MQBBOY.js";import"./chunk-6HR7AMTL.js";function _(a,l){if(a&1&&(e(0,"div",48)(1,"pre",51),r(2),t()()),a&2){let n=x();o(2),p(n.result())}}function F(a){return a[0]}var k=class a{constTypeParamsCode=`
// Const Type Parameters (TypeScript 5.0+)
// Preserves literal types in function parameters

function getFirstElement<const T extends readonly unknown[]>(arr: T): T[0] {
  return arr[0];
}

// Usage
const arr = [1, 2, 3] as const;
const first = getFirstElement(arr);  // Type: 1 (literal type, not number)

// Without const type parameter
function getFirst<T extends readonly unknown[]>(arr: T): T[0] {
  return arr[0];
}
const first2 = getFirst([1, 2, 3]);  // Type: number
`;satisfiesOperatorCode=`
// Satisfies Operator (TypeScript 4.9+)
// Validates type while preserving literal types

type Colors = 'red' | 'green' | 'blue';
type Theme = {
  primary: Colors;
  secondary: Colors;
};

// Using satisfies - preserves literal types
const theme = {
  primary: 'red',    // Type: 'red' (literal)
  secondary: 'blue'  // Type: 'blue' (literal)
} satisfies Theme;

// Without satisfies - loses literal types
const theme2: Theme = {
  primary: 'red',    // Type: Colors
  secondary: 'blue'  // Type: Colors
};

// Benefits:
// - Type checking
// - Preserves literal types
// - Better autocomplete
`;decoratorMetadataCode=`
// Decorator Metadata (TypeScript 5.0+)
// Better support for decorators and metadata

import 'reflect-metadata';

function Log(target: any, propertyKey: string) {
  const types = Reflect.getMetadata('design:type', target, propertyKey);
  const paramTypes = Reflect.getMetadata('design:paramtypes', target, propertyKey);
  console.log('Property type:', types);
  console.log('Parameter types:', paramTypes);
}

class UserService {
  @Log
  name: string = 'John';
}
`;result=d("");testConstTypeParams(){let n=F([1,2,3]);this.result.set(`Const Type Parameters Test:
Array: [1, 2, 3]
First element: ${n}
Type preserved: literal type '1' instead of 'number'`)}testSatisfiesOperator(){let l={primary:"red",secondary:"blue"};this.result.set(`Satisfies Operator Test:
Theme primary: ${l.primary}
Type preserved: literal type 'red' instead of 'Colors'
Type checking: \u2705 Validates against Theme type`)}static \u0275fac=function(n){return new(n||a)};static \u0275cmp=c({type:a,selectors:[["app-typescript-5-features-demo"]],decls:114,vars:4,consts:[[1,"container-responsive","space-y-responsive"],[1,"card-modern","padding-responsive","hover-lift","slide-in-up"],[1,"flex","flex-col","lg:flex-row","lg:items-center","lg:justify-between","gap-6"],[1,"flex-1"],[1,"flex","items-center","gap-3","mb-4"],[1,"w-12","h-12","sm:w-14","sm:h-14","rounded-xl","bg-gradient-to-br","from-blue-600","to-cyan-600","flex","items-center","justify-center","shadow-lg"],[1,"fas","fa-rocket","text-white","text-xl","sm:text-2xl"],[1,"badge-modern","text-xs","sm:text-sm"],[1,"heading-responsive","text-gradient","mb-4"],[1,"text-responsive","text-gray-700","dark:text-gray-300"],[1,"hidden","lg:block"],[1,"w-32","h-32","rounded-2xl","bg-gradient-to-br","from-blue-600/20","to-cyan-600/20","flex","items-center","justify-center"],[1,"fas","fa-rocket","text-6xl","text-blue-600"],[1,"card-modern","hover-lift","slide-in-up"],[1,"padding-responsive","space-y-6"],[1,"w-10","h-10","rounded-lg","bg-gradient-to-br","from-blue-500","to-purple-600","flex","items-center","justify-center"],[1,"fas","fa-lightbulb","text-white"],[1,"subheading-responsive","text-gray-900","dark:text-gray-100"],[1,"text-responsive","text-gray-700","dark:text-gray-300","leading-relaxed"],[1,"glass","rounded-xl","p-6","border-l-4","border-accent"],[1,"fas","fa-star","text-accent","text-xl"],[1,"text-lg","sm:text-xl","font-semibold","text-gray-900","dark:text-gray-100"],[1,"list-modern"],[1,"text-sm","sm:text-base","text-gray-800","dark:text-gray-200"],[1,"padding-responsive"],[1,"flex","items-center","gap-3","mb-6"],[1,"w-10","h-10","rounded-lg","bg-gradient-to-br","from-green-500","to-teal-600","flex","items-center","justify-center"],[1,"fas","fa-code","text-white"],["value","0"],[1,"flex","flex-wrap","gap-2","mb-6"],["value","0",1,"flex","items-center","gap-2"],[1,"fas","fa-lock","text-blue-500"],[1,"text-sm","sm:text-base","font-semibold"],["value","1",1,"flex","items-center","gap-2"],[1,"fas","fa-check-circle","text-purple-500"],["value","2",1,"flex","items-center","gap-2"],[1,"fas","fa-star","text-cyan-500"],[1,"code-block-modern"],[1,"overflow-x-auto","text-sm","sm:text-base"],["value","1"],["value","2"],[1,"w-10","h-10","rounded-lg","bg-gradient-to-br","from-purple-500","to-pink-600","flex","items-center","justify-center"],[1,"fas","fa-play-circle","text-white"],[1,"text-responsive","text-gray-700","dark:text-gray-300","mb-8"],[1,"space-y-6"],[1,"flex","gap-3","flex-wrap"],["label","Test Const Type Params","icon","pi pi-bolt",1,"btn-modern",3,"click"],["label","Test Satisfies Operator","icon","pi pi-check",1,"btn-modern",3,"click"],[1,"glass","rounded-xl","p-6","fade-in"],[1,"w-10","h-10","rounded-lg","bg-gradient-to-br","from-teal-500","to-cyan-600","flex","items-center","justify-center"],[1,"fas","fa-graduation-cap","text-white"],[1,"text-sm","sm:text-base","text-gray-800","dark:text-gray-200","whitespace-pre-wrap"]],template:function(n,s){n&1&&(e(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5),i(6,"i",6),t(),e(7,"div")(8,"span",7),r(9,"TypeScript"),t()()(),e(10,"h1",8),r(11," TypeScript 5.x Features "),t(),e(12,"p",9),r(13," New features in TypeScript 5.x: const type parameters, satisfies operator, and more. "),t()(),e(14,"div",10)(15,"div",11),i(16,"i",12),t()()()(),e(17,"p-card",13)(18,"div",14)(19,"div",4)(20,"div",15),i(21,"i",16),t(),e(22,"h2",17),r(23,"What's New in TypeScript 5.x?"),t()(),e(24,"p",18),r(25," TypeScript 5.x introduces powerful new features that improve type safety and developer experience, including const type parameters and the satisfies operator. "),t(),e(26,"div",19)(27,"div",4),i(28,"i",20),e(29,"h3",21),r(30,"Key Features"),t()(),e(31,"ul",22)(32,"li",23)(33,"strong"),r(34,"Const Type Parameters:"),t(),r(35," Preserve literal types in generic functions "),t(),e(36,"li",23)(37,"strong"),r(38,"Satisfies Operator:"),t(),r(39," Validate types while preserving literal types "),t(),e(40,"li",23)(41,"strong"),r(42,"Better Decorator Support:"),t(),r(43," Improved decorator metadata and type checking "),t()()()()(),e(44,"p-card",13)(45,"div",24)(46,"div",25)(47,"div",26),i(48,"i",27),t(),e(49,"h2",17),r(50,"Code Examples"),t()(),e(51,"p-tabs",28)(52,"p-tablist",29)(53,"p-tab",30),i(54,"i",31),e(55,"span",32),r(56,"Const Type Parameters"),t()(),e(57,"p-tab",33),i(58,"i",34),e(59,"span",32),r(60,"Satisfies Operator"),t()(),e(61,"p-tab",35),i(62,"i",36),e(63,"span",32),r(64,"Decorator Metadata"),t()()(),e(65,"p-tabpanels")(66,"p-tabpanel",28)(67,"div",37)(68,"pre",38)(69,"code"),r(70),t()()()(),e(71,"p-tabpanel",39)(72,"div",37)(73,"pre",38)(74,"code"),r(75),t()()()(),e(76,"p-tabpanel",40)(77,"div",37)(78,"pre",38)(79,"code"),r(80),t()()()()()()()(),e(81,"p-card",13)(82,"div",24)(83,"div",4)(84,"div",41),i(85,"i",42),t(),e(86,"h2",17),r(87,"Interactive Demo"),t()(),e(88,"p",43),r(89," Test TypeScript 5.x features in action. "),t(),e(90,"div",44)(91,"div",45)(92,"p-button",46),m("click",function(){return s.testConstTypeParams()}),t(),e(93,"p-button",47),m("click",function(){return s.testSatisfiesOperator()}),t()(),y(94,_,3,1,"div",48),t()()(),e(95,"p-card",13)(96,"div",24)(97,"div",25)(98,"div",49),i(99,"i",50),t(),e(100,"h2",17),r(101,"Key Takeaways"),t()(),e(102,"ul",22)(103,"li",23),r(104," Const type parameters preserve literal types in generic functions "),t(),e(105,"li",23),r(106," The "),e(107,"code"),r(108,"satisfies"),t(),r(109," operator validates types while preserving literal types "),t(),e(110,"li",23),r(111," Better type inference and autocomplete with these features "),t(),e(112,"li",23),r(113," Improved decorator support for better metadata handling "),t()()()()()),n&2&&(o(70),p(s.constTypeParamsCode),o(5),p(s.satisfiesOperatorCode),o(5),p(s.decoratorMetadataCode),o(14),f(s.result()?94:-1))},dependencies:[u,T,b,w,S,h,E,C,v,g],encapsulation:2})};export{k as TypeScript5FeaturesDemoComponent};
