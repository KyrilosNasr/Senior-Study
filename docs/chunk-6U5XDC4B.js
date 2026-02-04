import{e as h}from"./chunk-26I6QKGV.js";import"./chunk-DS4DKGB5.js";import"./chunk-YPUDPSQH.js";import"./chunk-DEGWJE5E.js";import{a as E,b as M,c as T,d as w,e as C}from"./chunk-3ZW5MUH5.js";import"./chunk-SHEHAVXT.js";import{a as v,b as S}from"./chunk-ST7OVFPO.js";import"./chunk-QCJRPF2F.js";import"./chunk-IZU7C3FN.js";import{b as y}from"./chunk-JBIPGRVB.js";import{r as b}from"./chunk-BO564T5E.js";import"./chunk-FPPZ4BUR.js";import{Cb as p,Db as x,Jb as e,Kb as t,Lb as i,Wb as d,Yb as f,Za as o,kc as n,lc as s,nb as u,va as c}from"./chunk-6P3ZW5D6.js";import"./chunk-6HR7AMTL.js";function D(m,a){if(m&1&&(e(0,"div",53)(1,"pre",56),n(2),t()()),m&2){let r=f();o(2),s(r.result())}}var k;(a=>{function m(r){return{id:"1",name:r,email:`${r}@example.com`,greet:()=>`Hello, ${r}!`}}a.create=m})(k||={});Array.prototype.last=function(){return this[this.length-1]};var A=class m{moduleAugmentationCode=`
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
`;result=c("");testDeclarationMerging(){let a={id:"1",name:"John Doe",email:"john@example.com",greet:()=>"Hello, John Doe!"};this.result.set(`Declaration Merging Test:
User: ${JSON.stringify(a,null,2)}
Greet: ${a.greet()}`)}testNamespaceMerging(){let a=k.create("Jane Smith");this.result.set(`Namespace Merging Test:
Created User: ${JSON.stringify(a,null,2)}
Greet: ${a.greet()}`)}testGlobalAugmentation(){let a=[1,2,3,4,5],r=a.last();this.result.set(`Global Augmentation Test:
Array: [${a.join(", ")}]
Last element: ${r}
TypeScript knows about .last() method!`)}static \u0275fac=function(r){return new(r||m)};static \u0275cmp=u({type:m,selectors:[["app-module-augmentation-demo"]],decls:131,vars:5,consts:[[1,"container-responsive","space-y-responsive"],[1,"card-modern","padding-responsive","hover-lift","slide-in-up"],[1,"flex","flex-col","lg:flex-row","lg:items-center","lg:justify-between","gap-6"],[1,"flex-1"],[1,"flex","items-center","gap-3","mb-4"],[1,"w-12","h-12","sm:w-14","sm:h-14","rounded-xl","bg-gradient-to-br","from-blue-600","to-cyan-600","flex","items-center","justify-center","shadow-lg"],["name","faSolidTableColumns",1,"text-white","text-xl","sm:text-2xl"],[1,"badge-modern","text-xs","sm:text-sm"],[1,"heading-responsive","text-gradient","mb-4"],[1,"text-responsive","text-gray-700","dark:text-gray-300"],[1,"hidden","lg:block"],[1,"w-32","h-32","rounded-2xl","bg-gradient-to-br","from-blue-600/20","to-cyan-600/20","flex","items-center","justify-center"],["name","faSolidTableColumns",1,"text-6xl","text-blue-600"],[1,"card-modern","hover-lift","slide-in-up"],[1,"padding-responsive","space-y-6"],[1,"w-10","h-10","rounded-lg","bg-gradient-to-br","from-blue-500","to-purple-600","flex","items-center","justify-center"],["name","faSolidLightbulb",1,"text-white"],[1,"subheading-responsive","text-gray-900","dark:text-gray-100"],[1,"text-responsive","text-gray-700","dark:text-gray-300","leading-relaxed"],[1,"glass","rounded-xl","p-6","border-l-4","border-accent"],["name","faSolidStar",1,"text-accent","text-xl"],[1,"text-lg","sm:text-xl","font-semibold","text-gray-900","dark:text-gray-100"],[1,"list-modern"],[1,"text-sm","sm:text-base","text-gray-800","dark:text-gray-200"],[1,"padding-responsive"],[1,"flex","items-center","gap-3","mb-6"],[1,"w-10","h-10","rounded-lg","bg-gradient-to-br","from-green-500","to-teal-600","flex","items-center","justify-center"],["name","faSolidCode",1,"text-white"],["value","0"],[1,"flex","flex-wrap","gap-2","mb-6"],["value","0",1,"flex","items-center","gap-2"],["name","faSolidTableColumns",1,"text-blue-500"],[1,"text-sm","sm:text-base","font-semibold"],["value","1",1,"flex","items-center","gap-2"],["name","faSolidLayerGroup",1,"text-purple-500"],["value","2",1,"flex","items-center","gap-2"],["name","faSolidGlobe",1,"text-cyan-500"],["value","3",1,"flex","items-center","gap-2"],["name","faSolidRocket",1,"text-green-500"],[1,"code-block-modern"],[1,"overflow-x-auto","text-sm","sm:text-base"],["value","1"],["value","2"],["value","3"],[1,"w-10","h-10","rounded-lg","bg-gradient-to-br","from-purple-500","to-pink-600","flex","items-center","justify-center"],["name","faSolidCirclePlay",1,"text-white"],[1,"text-responsive","text-gray-700","dark:text-gray-300","mb-8"],[1,"space-y-6"],[1,"flex","gap-3","flex-wrap"],[1,"btn-modern",3,"click"],["name","faSolidPuzzlePiece"],["name","faSolidSitemap"],["name","faSolidGlobe"],[1,"glass","rounded-xl","p-6","fade-in"],[1,"w-10","h-10","rounded-lg","bg-gradient-to-br","from-teal-500","to-cyan-600","flex","items-center","justify-center"],["name","faSolidGraduationCap",1,"text-white"],[1,"text-sm","sm:text-base","text-gray-800","dark:text-gray-200","whitespace-pre-wrap"]],template:function(r,l){r&1&&(e(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5),i(6,"ng-icon",6),t(),e(7,"div")(8,"span",7),n(9,"TypeScript"),t()()(),e(10,"h1",8),n(11," Module Augmentation & Declaration Merging "),t(),e(12,"p",9),n(13," Extend existing types and modules without modifying their source code. "),t()(),e(14,"div",10)(15,"div",11),i(16,"ng-icon",12),t()()()(),e(17,"p-card",13)(18,"div",14)(19,"div",4)(20,"div",15),i(21,"ng-icon",16),t(),e(22,"h2",17),n(23,"What is Module Augmentation?"),t()(),e(24,"p",18),n(25," Module augmentation and declaration merging allow you to extend existing types, interfaces, and modules without modifying their original source code. This is especially useful for extending third-party libraries. "),t(),e(26,"div",19)(27,"div",4),i(28,"ng-icon",20),e(29,"h3",21),n(30,"Key Concepts"),t()(),e(31,"ul",22)(32,"li",23)(33,"strong"),n(34,"Module Augmentation:"),t(),n(35," Extend types from external modules "),t(),e(36,"li",23)(37,"strong"),n(38,"Declaration Merging:"),t(),n(39," Merge multiple declarations of the same name "),t(),e(40,"li",23)(41,"strong"),n(42,"Global Augmentation:"),t(),n(43," Extend global types like Array, Window, etc. "),t(),e(44,"li",23)(45,"strong"),n(46,"Namespace Merging:"),t(),n(47," Merge namespaces with interfaces/classes "),t()()()()(),e(48,"p-card",13)(49,"div",24)(50,"div",25)(51,"div",26),i(52,"ng-icon",27),t(),e(53,"h2",17),n(54,"Code Examples"),t()(),e(55,"p-tabs",28)(56,"p-tablist",29)(57,"p-tab",30),i(58,"ng-icon",31),e(59,"span",32),n(60,"Module Augmentation"),t()(),e(61,"p-tab",33),i(62,"ng-icon",34),e(63,"span",32),n(64,"Declaration Merging"),t()(),e(65,"p-tab",35),i(66,"ng-icon",36),e(67,"span",32),n(68,"Global Augmentation"),t()(),e(69,"p-tab",37),i(70,"ng-icon",38),e(71,"span",32),n(72,"Third-Party Extension"),t()()(),e(73,"p-tabpanels")(74,"p-tabpanel",28)(75,"div",39)(76,"pre",40)(77,"code"),n(78),t()()()(),e(79,"p-tabpanel",41)(80,"div",39)(81,"pre",40)(82,"code"),n(83),t()()()(),e(84,"p-tabpanel",42)(85,"div",39)(86,"pre",40)(87,"code"),n(88),t()()()(),e(89,"p-tabpanel",43)(90,"div",39)(91,"pre",40)(92,"code"),n(93),t()()()()()()()(),e(94,"p-card",13)(95,"div",24)(96,"div",4)(97,"div",44),i(98,"ng-icon",45),t(),e(99,"h2",17),n(100,"Interactive Demo"),t()(),e(101,"p",46),n(102," Test module augmentation and declaration merging. "),t(),e(103,"div",47)(104,"div",48)(105,"button",49),d("click",function(){return l.testDeclarationMerging()}),i(106,"ng-icon",50),n(107," Test Declaration Merging"),t(),e(108,"button",49),d("click",function(){return l.testNamespaceMerging()}),i(109,"ng-icon",51),n(110," Test Namespace Merging"),t(),e(111,"button",49),d("click",function(){return l.testGlobalAugmentation()}),i(112,"ng-icon",52),n(113," Test Global Augmentation"),t()(),p(114,D,3,1,"div",53),t()()(),e(115,"p-card",13)(116,"div",24)(117,"div",25)(118,"div",54),i(119,"ng-icon",55),t(),e(120,"h2",17),n(121,"Key Takeaways"),t()(),e(122,"ul",22)(123,"li",23),n(124," Module augmentation extends types from external modules without modifying source "),t(),e(125,"li",23),n(126," Declaration merging combines multiple declarations of the same name "),t(),e(127,"li",23),n(128," Global augmentation extends built-in types like Array, Window, etc. "),t(),e(129,"li",23),n(130," Essential for extending third-party libraries with type safety "),t()()()()()),r&2&&(o(78),s(l.moduleAugmentationCode),o(5),s(l.declarationMergingCode),o(5),s(l.globalAugmentationCode),o(5),s(l.thirdPartyAugmentationCode),o(21),x(l.result()?114:-1))},dependencies:[y,b,S,v,C,M,E,T,w,h],encapsulation:2})};export{A as ModuleAugmentationDemoComponent};
