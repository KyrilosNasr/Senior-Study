import{d as y,e as h}from"./chunk-JXT2X624.js";import"./chunk-FCYNDV26.js";import"./chunk-WEH2CWNU.js";import"./chunk-NGL2KP4B.js";import{a as S,b as M,c as T,d as w,e as A}from"./chunk-QULNL4D5.js";import"./chunk-4DGHZC6K.js";import{a as v,b as E}from"./chunk-DTTSOEG2.js";import"./chunk-7XHGMHQI.js";import"./chunk-CX3Q4OJ4.js";import{r as b}from"./chunk-M52WRTAU.js";import"./chunk-FPPZ4BUR.js";import{Db as u,Eb as x,Kb as e,Lb as t,Mb as r,Xb as d,Za as o,Zb as f,lc as n,mc as m,nb as c,va as g}from"./chunk-3ITXA53T.js";import"./chunk-6HR7AMTL.js";function D(s,i){if(s&1&&(e(0,"div",52)(1,"pre",55),n(2),t()()),s&2){let a=f();o(2),m(a.result())}}var k;(i=>{function s(a){return{id:"1",name:a,email:`${a}@example.com`,greet:()=>`Hello, ${a}!`}}i.create=s})(k||={});Array.prototype.last=function(){return this[this.length-1]};var C=class s{moduleAugmentationCode=`
// Module Augmentation: Extend existing modules
declare module 'some-library' {
  interface SomeType {
    customProperty: string;
    customMethod(): void;
  }
}

// Usage
import { SomeType } from 'some-library';
const instance: SomeType = {
  // ... existing properties
  customProperty: 'value',
  customMethod: () => console.log('Custom method')
};
`;declarationMergingCode=`
// Declaration Merging: Merge multiple declarations
interface User {
  id: string;
  name: string;
}

// Later in the codebase
interface User {
  email: string;  // Merged with previous declaration
}

// Result: User has id, name, and email

// Namespace Merging
namespace User {
  export function create(name: string): User {
    return { id: '1', name, email: 'test@example.com' };
  }
}

// Usage
const user = User.create('John');
`;globalAugmentationCode=`
// Global Augmentation: Extend global types
declare global {
  interface Array<T> {
    last(): T | undefined;
  }
  
  interface Window {
    customProperty: string;
  }
}

// Implementation
Array.prototype.last = function<T>(this: T[]): T | undefined {
  return this[this.length - 1];
};

// Usage
const arr = [1, 2, 3];
const last = arr.last();  // TypeScript knows this method exists
`;thirdPartyAugmentationCode=`
// Extending Third-Party Libraries
// Example: Extending Express Request
declare module 'express-serve-static-core' {
  interface Request {
    user?: {
      id: string;
      name: string;
    };
  }
}

// Now Request has user property
import { Request } from 'express';
function handler(req: Request) {
  if (req.user) {
    console.log(req.user.name);  // Type-safe!
  }
}
`;result=g("");testDeclarationMerging(){let i={id:"1",name:"John Doe",email:"john@example.com",greet:()=>"Hello, John Doe!"};this.result.set(`Declaration Merging Test:
User: ${JSON.stringify(i,null,2)}
Greet: ${i.greet()}`)}testNamespaceMerging(){let i=k.create("Jane Smith");this.result.set(`Namespace Merging Test:
Created User: ${JSON.stringify(i,null,2)}
Greet: ${i.greet()}`)}testGlobalAugmentation(){let i=[1,2,3,4,5],a=i.last();this.result.set(`Global Augmentation Test:
Array: [${i.join(", ")}]
Last element: ${a}
TypeScript knows about .last() method!`)}static \u0275fac=function(a){return new(a||s)};static \u0275cmp=c({type:s,selectors:[["app-module-augmentation-demo"]],decls:125,vars:5,consts:[[1,"container-responsive","space-y-responsive"],[1,"card-modern","padding-responsive","hover-lift","slide-in-up"],[1,"flex","flex-col","lg:flex-row","lg:items-center","lg:justify-between","gap-6"],[1,"flex-1"],[1,"flex","items-center","gap-3","mb-4"],[1,"w-12","h-12","sm:w-14","sm:h-14","rounded-xl","bg-gradient-to-br","from-blue-600","to-cyan-600","flex","items-center","justify-center","shadow-lg"],[1,"fas","fa-puzzle-piece","text-white","text-xl","sm:text-2xl"],[1,"badge-modern","text-xs","sm:text-sm"],[1,"heading-responsive","text-gradient","mb-4"],[1,"text-responsive","text-gray-700","dark:text-gray-300"],[1,"hidden","lg:block"],[1,"w-32","h-32","rounded-2xl","bg-gradient-to-br","from-blue-600/20","to-cyan-600/20","flex","items-center","justify-center"],[1,"fas","fa-puzzle-piece","text-6xl","text-blue-600"],[1,"card-modern","hover-lift","slide-in-up"],[1,"padding-responsive","space-y-6"],[1,"w-10","h-10","rounded-lg","bg-gradient-to-br","from-blue-500","to-purple-600","flex","items-center","justify-center"],[1,"fas","fa-lightbulb","text-white"],[1,"subheading-responsive","text-gray-900","dark:text-gray-100"],[1,"text-responsive","text-gray-700","dark:text-gray-300","leading-relaxed"],[1,"glass","rounded-xl","p-6","border-l-4","border-accent"],[1,"fas","fa-star","text-accent","text-xl"],[1,"text-lg","sm:text-xl","font-semibold","text-gray-900","dark:text-gray-100"],[1,"list-modern"],[1,"text-sm","sm:text-base","text-gray-800","dark:text-gray-200"],[1,"padding-responsive"],[1,"flex","items-center","gap-3","mb-6"],[1,"w-10","h-10","rounded-lg","bg-gradient-to-br","from-green-500","to-teal-600","flex","items-center","justify-center"],[1,"fas","fa-code","text-white"],["value","0"],[1,"flex","flex-wrap","gap-2","mb-6"],["value","0",1,"flex","items-center","gap-2"],[1,"fas","fa-puzzle-piece","text-blue-500"],[1,"text-sm","sm:text-base","font-semibold"],["value","1",1,"flex","items-center","gap-2"],[1,"fas","fa-layer-group","text-purple-500"],["value","2",1,"flex","items-center","gap-2"],[1,"fas","fa-globe","text-cyan-500"],["value","3",1,"flex","items-center","gap-2"],[1,"fas","fa-rocket","text-green-500"],[1,"code-block-modern"],[1,"overflow-x-auto","text-sm","sm:text-base"],["value","1"],["value","2"],["value","3"],[1,"w-10","h-10","rounded-lg","bg-gradient-to-br","from-purple-500","to-pink-600","flex","items-center","justify-center"],[1,"fas","fa-play-circle","text-white"],[1,"text-responsive","text-gray-700","dark:text-gray-300","mb-8"],[1,"space-y-6"],[1,"flex","gap-3","flex-wrap"],["label","Test Declaration Merging","icon","pi pi-puzzle",1,"btn-modern",3,"click"],["label","Test Namespace Merging","icon","pi pi-sitemap",1,"btn-modern",3,"click"],["label","Test Global Augmentation","icon","pi pi-globe",1,"btn-modern",3,"click"],[1,"glass","rounded-xl","p-6","fade-in"],[1,"w-10","h-10","rounded-lg","bg-gradient-to-br","from-teal-500","to-cyan-600","flex","items-center","justify-center"],[1,"fas","fa-graduation-cap","text-white"],[1,"text-sm","sm:text-base","text-gray-800","dark:text-gray-200","whitespace-pre-wrap"]],template:function(a,l){a&1&&(e(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5),r(6,"i",6),t(),e(7,"div")(8,"span",7),n(9,"TypeScript"),t()()(),e(10,"h1",8),n(11," Module Augmentation & Declaration Merging "),t(),e(12,"p",9),n(13," Extend existing types and modules without modifying their source code. "),t()(),e(14,"div",10)(15,"div",11),r(16,"i",12),t()()()(),e(17,"p-card",13)(18,"div",14)(19,"div",4)(20,"div",15),r(21,"i",16),t(),e(22,"h2",17),n(23,"What is Module Augmentation?"),t()(),e(24,"p",18),n(25," Module augmentation and declaration merging allow you to extend existing types, interfaces, and modules without modifying their original source code. This is especially useful for extending third-party libraries. "),t(),e(26,"div",19)(27,"div",4),r(28,"i",20),e(29,"h3",21),n(30,"Key Concepts"),t()(),e(31,"ul",22)(32,"li",23)(33,"strong"),n(34,"Module Augmentation:"),t(),n(35," Extend types from external modules "),t(),e(36,"li",23)(37,"strong"),n(38,"Declaration Merging:"),t(),n(39," Merge multiple declarations of the same name "),t(),e(40,"li",23)(41,"strong"),n(42,"Global Augmentation:"),t(),n(43," Extend global types like Array, Window, etc. "),t(),e(44,"li",23)(45,"strong"),n(46,"Namespace Merging:"),t(),n(47," Merge namespaces with interfaces/classes "),t()()()()(),e(48,"p-card",13)(49,"div",24)(50,"div",25)(51,"div",26),r(52,"i",27),t(),e(53,"h2",17),n(54,"Code Examples"),t()(),e(55,"p-tabs",28)(56,"p-tablist",29)(57,"p-tab",30),r(58,"i",31),e(59,"span",32),n(60,"Module Augmentation"),t()(),e(61,"p-tab",33),r(62,"i",34),e(63,"span",32),n(64,"Declaration Merging"),t()(),e(65,"p-tab",35),r(66,"i",36),e(67,"span",32),n(68,"Global Augmentation"),t()(),e(69,"p-tab",37),r(70,"i",38),e(71,"span",32),n(72,"Third-Party Extension"),t()()(),e(73,"p-tabpanels")(74,"p-tabpanel",28)(75,"div",39)(76,"pre",40)(77,"code"),n(78),t()()()(),e(79,"p-tabpanel",41)(80,"div",39)(81,"pre",40)(82,"code"),n(83),t()()()(),e(84,"p-tabpanel",42)(85,"div",39)(86,"pre",40)(87,"code"),n(88),t()()()(),e(89,"p-tabpanel",43)(90,"div",39)(91,"pre",40)(92,"code"),n(93),t()()()()()()()(),e(94,"p-card",13)(95,"div",24)(96,"div",4)(97,"div",44),r(98,"i",45),t(),e(99,"h2",17),n(100,"Interactive Demo"),t()(),e(101,"p",46),n(102," Test module augmentation and declaration merging. "),t(),e(103,"div",47)(104,"div",48)(105,"p-button",49),d("click",function(){return l.testDeclarationMerging()}),t(),e(106,"p-button",50),d("click",function(){return l.testNamespaceMerging()}),t(),e(107,"p-button",51),d("click",function(){return l.testGlobalAugmentation()}),t()(),u(108,D,3,1,"div",52),t()()(),e(109,"p-card",13)(110,"div",24)(111,"div",25)(112,"div",53),r(113,"i",54),t(),e(114,"h2",17),n(115,"Key Takeaways"),t()(),e(116,"ul",22)(117,"li",23),n(118," Module augmentation extends types from external modules without modifying source "),t(),e(119,"li",23),n(120," Declaration merging combines multiple declarations of the same name "),t(),e(121,"li",23),n(122," Global augmentation extends built-in types like Array, Window, etc. "),t(),e(123,"li",23),n(124," Essential for extending third-party libraries with type safety "),t()()()()()),a&2&&(o(78),m(l.moduleAugmentationCode),o(5),m(l.declarationMergingCode),o(5),m(l.globalAugmentationCode),o(5),m(l.thirdPartyAugmentationCode),o(15),x(l.result()?108:-1))},dependencies:[b,E,v,A,M,S,T,w,h,y],encapsulation:2})};export{C as ModuleAugmentationDemoComponent};
