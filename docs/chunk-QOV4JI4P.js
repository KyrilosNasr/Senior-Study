import{a as T,b,c as S,d as h,e as v,f as C,g as E}from"./chunk-6IHYB2AV.js";import{p as g,q as f}from"./chunk-H3I524XT.js";import{p as x}from"./chunk-EFMPFDS6.js";import"./chunk-4IVXAVEU.js";import{Ab as r,Bb as e,Nb as l,Ob as u,Sa as s,ac as t,bc as p,gb as d,pa as m,tb as c,ub as y}from"./chunk-ANFRTOHF.js";import"./chunk-6HR7AMTL.js";function P(i,o){if(i&1&&(r(0,"div",20)(1,"pre",25),t(2),e()()),i&2){let a=u();s(2),p(a.result())}}function _(i){return i[0]}var k=class i{constTypeParamsCode=`
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
`;result=m("");testConstTypeParams(){let a=_([1,2,3]);this.result.set(`Const Type Parameters Test:
Array: [1, 2, 3]
First element: ${a}
Type preserved: literal type '1' instead of 'number'`)}testSatisfiesOperator(){let o={primary:"red",secondary:"blue"};this.result.set(`Satisfies Operator Test:
Theme primary: ${o.primary}
Type preserved: literal type 'red' instead of 'Colors'
Type checking: \u2705 Validates against Theme type`)}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=d({type:i,selectors:[["app-typescript-5-features-demo"]],decls:87,vars:4,consts:[[1,"max-w-7xl","mx-auto","space-y-6"],[1,"bg-white","dark:bg-gray-800","rounded-lg","shadow-md","p-6"],[1,"text-3xl","font-bold","text-gray-800","dark:text-gray-200","mb-2"],[1,"text-gray-600","dark:text-gray-400"],[1,"shadow-md"],[1,"space-y-4"],[1,"text-2xl","font-semibold","text-gray-800","dark:text-gray-200"],[1,"text-gray-700","dark:text-gray-300"],[1,"bg-blue-50","dark:bg-blue-900/20","p-4","rounded-lg"],[1,"font-semibold","text-blue-900","dark:text-blue-200","mb-2"],[1,"list-disc","list-inside","space-y-1","text-blue-800","dark:text-blue-300"],["value","0"],["value","1"],["value","2"],[1,"bg-gray-900","text-gray-100","p-4","rounded-lg","overflow-x-auto","text-sm"],[1,"text-2xl","font-semibold","text-gray-800","dark:text-gray-200","mb-4"],[1,"text-gray-700","dark:text-gray-300","mb-6"],[1,"flex","gap-4","flex-wrap"],["label","Test Const Type Params","icon","pi pi-bolt",3,"click"],["label","Test Satisfies Operator","icon","pi pi-check",3,"click"],[1,"bg-gray-100","dark:bg-gray-700","p-4","rounded-lg"],[1,"space-y-2","text-gray-700","dark:text-gray-300"],[1,"flex","items-start"],[1,"text-green-500","mr-2"],[1,"bg-gray-200","dark:bg-gray-700","px-1","rounded"],[1,"text-sm","text-gray-800","dark:text-gray-200","whitespace-pre-wrap"]],template:function(a,n){a&1&&(r(0,"div",0)(1,"div",1)(2,"h1",2),t(3,"TypeScript 5.x Features"),e(),r(4,"p",3),t(5," New features in TypeScript 5.x: const type parameters, satisfies operator, and more. "),e()(),r(6,"p-card",4)(7,"div",5)(8,"h2",6),t(9,"What's New in TypeScript 5.x?"),e(),r(10,"p",7),t(11," TypeScript 5.x introduces powerful new features that improve type safety and developer experience, including const type parameters and the satisfies operator. "),e(),r(12,"div",8)(13,"h3",9),t(14,"Key Features:"),e(),r(15,"ul",10)(16,"li")(17,"strong"),t(18,"Const Type Parameters:"),e(),t(19," Preserve literal types in generic functions"),e(),r(20,"li")(21,"strong"),t(22,"Satisfies Operator:"),e(),t(23," Validate types while preserving literal types"),e(),r(24,"li")(25,"strong"),t(26,"Better Decorator Support:"),e(),t(27," Improved decorator metadata and type checking"),e()()()()(),r(28,"p-card",4)(29,"p-tabs",11)(30,"p-tablist")(31,"p-tab",11),t(32,"Const Type Parameters"),e(),r(33,"p-tab",12),t(34,"Satisfies Operator"),e(),r(35,"p-tab",13),t(36,"Decorator Metadata"),e()(),r(37,"p-tabpanels")(38,"p-tabpanel",11)(39,"pre",14)(40,"code"),t(41),e()()(),r(42,"p-tabpanel",12)(43,"pre",14)(44,"code"),t(45),e()()(),r(46,"p-tabpanel",13)(47,"pre",14)(48,"code"),t(49),e()()()()()(),r(50,"p-card",4)(51,"h2",15),t(52,"Live Demo"),e(),r(53,"p",16),t(54," Test TypeScript 5.x features in action. "),e(),r(55,"div",5)(56,"div",17)(57,"p-button",18),l("click",function(){return n.testConstTypeParams()}),e(),r(58,"p-button",19),l("click",function(){return n.testSatisfiesOperator()}),e()(),c(59,P,3,1,"div",20),e()(),r(60,"p-card",4)(61,"h2",15),t(62,"Key Takeaways"),e(),r(63,"ul",21)(64,"li",22)(65,"span",23),t(66,"\u2713"),e(),r(67,"span"),t(68,"Const type parameters preserve literal types in generic functions"),e()(),r(69,"li",22)(70,"span",23),t(71,"\u2713"),e(),r(72,"span"),t(73,"The "),r(74,"code",24),t(75,"satisfies"),e(),t(76," operator validates types while preserving literal types"),e()(),r(77,"li",22)(78,"span",23),t(79,"\u2713"),e(),r(80,"span"),t(81,"Better type inference and autocomplete with these features"),e()(),r(82,"li",22)(83,"span",23),t(84,"\u2713"),e(),r(85,"span"),t(86,"Improved decorator support for better metadata handling"),e()()()()()),a&2&&(s(41),p(n.constTypeParamsCode),s(4),p(n.satisfiesOperatorCode),s(4),p(n.decoratorMetadataCode),s(10),y(n.result()?59:-1))},dependencies:[x,b,T,E,h,S,v,C,f,g],encapsulation:2})};export{k as TypeScript5FeaturesDemoComponent};
