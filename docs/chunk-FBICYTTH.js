import{a as h,b as E,c as M,d as S,e as T,f as v,g as A}from"./chunk-6IHYB2AV.js";import{p as b,q as f}from"./chunk-H3I524XT.js";import{p as y}from"./chunk-EFMPFDS6.js";import"./chunk-4IVXAVEU.js";import{Ab as n,Bb as e,Nb as m,Ob as x,Sa as o,ac as t,bc as s,gb as g,pa as u,tb as p,ub as c}from"./chunk-ANFRTOHF.js";import"./chunk-6HR7AMTL.js";function w(l,i){if(l&1&&(n(0,"div",22)(1,"pre",26),t(2),e()()),l&2){let a=x();o(2),s(a.result())}}var C;(i=>{function l(a){return{id:"1",name:a,email:`${a}@example.com`,greet:()=>`Hello, ${a}!`}}i.create=l})(C||={});Array.prototype.last=function(){return this[this.length-1]};var k=class l{moduleAugmentationCode=`
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
`;result=u("");testDeclarationMerging(){let i={id:"1",name:"John Doe",email:"john@example.com",greet:()=>"Hello, John Doe!"};this.result.set(`Declaration Merging Test:
User: ${JSON.stringify(i,null,2)}
Greet: ${i.greet()}`)}testNamespaceMerging(){let i=C.create("Jane Smith");this.result.set(`Namespace Merging Test:
Created User: ${JSON.stringify(i,null,2)}
Greet: ${i.greet()}`)}testGlobalAugmentation(){let i=[1,2,3,4,5],a=i.last();this.result.set(`Global Augmentation Test:
Array: [${i.join(", ")}]
Last element: ${a}
TypeScript knows about .last() method!`)}static \u0275fac=function(a){return new(a||l)};static \u0275cmp=g({type:l,selectors:[["app-module-augmentation-demo"]],decls:95,vars:5,consts:[[1,"max-w-7xl","mx-auto","space-y-6"],[1,"bg-white","dark:bg-gray-800","rounded-lg","shadow-md","p-6"],[1,"text-3xl","font-bold","text-gray-800","dark:text-gray-200","mb-2"],[1,"text-gray-600","dark:text-gray-400"],[1,"shadow-md"],[1,"space-y-4"],[1,"text-2xl","font-semibold","text-gray-800","dark:text-gray-200"],[1,"text-gray-700","dark:text-gray-300"],[1,"bg-blue-50","dark:bg-blue-900/20","p-4","rounded-lg"],[1,"font-semibold","text-blue-900","dark:text-blue-200","mb-2"],[1,"list-disc","list-inside","space-y-1","text-blue-800","dark:text-blue-300"],["value","0"],["value","1"],["value","2"],["value","3"],[1,"bg-gray-900","text-gray-100","p-4","rounded-lg","overflow-x-auto","text-sm"],[1,"text-2xl","font-semibold","text-gray-800","dark:text-gray-200","mb-4"],[1,"text-gray-700","dark:text-gray-300","mb-6"],[1,"flex","gap-4","flex-wrap"],["label","Test Declaration Merging","icon","pi pi-puzzle",3,"click"],["label","Test Namespace Merging","icon","pi pi-sitemap",3,"click"],["label","Test Global Augmentation","icon","pi pi-globe",3,"click"],[1,"bg-gray-100","dark:bg-gray-700","p-4","rounded-lg"],[1,"space-y-2","text-gray-700","dark:text-gray-300"],[1,"flex","items-start"],[1,"text-green-500","mr-2"],[1,"text-sm","text-gray-800","dark:text-gray-200","whitespace-pre-wrap"]],template:function(a,r){a&1&&(n(0,"div",0)(1,"div",1)(2,"h1",2),t(3,"Module Augmentation & Declaration Merging"),e(),n(4,"p",3),t(5," Extend existing types and modules without modifying their source code. "),e()(),n(6,"p-card",4)(7,"div",5)(8,"h2",6),t(9,"What is Module Augmentation?"),e(),n(10,"p",7),t(11," Module augmentation and declaration merging allow you to extend existing types, interfaces, and modules without modifying their original source code. This is especially useful for extending third-party libraries. "),e(),n(12,"div",8)(13,"h3",9),t(14,"Key Concepts:"),e(),n(15,"ul",10)(16,"li")(17,"strong"),t(18,"Module Augmentation:"),e(),t(19," Extend types from external modules"),e(),n(20,"li")(21,"strong"),t(22,"Declaration Merging:"),e(),t(23," Merge multiple declarations of the same name"),e(),n(24,"li")(25,"strong"),t(26,"Global Augmentation:"),e(),t(27," Extend global types like Array, Window, etc."),e(),n(28,"li")(29,"strong"),t(30,"Namespace Merging:"),e(),t(31," Merge namespaces with interfaces/classes"),e()()()()(),n(32,"p-card",4)(33,"p-tabs",11)(34,"p-tablist")(35,"p-tab",11),t(36,"Module Augmentation"),e(),n(37,"p-tab",12),t(38,"Declaration Merging"),e(),n(39,"p-tab",13),t(40,"Global Augmentation"),e(),n(41,"p-tab",14),t(42,"Third-Party Extension"),e()(),n(43,"p-tabpanels")(44,"p-tabpanel",11)(45,"pre",15)(46,"code"),t(47),e()()(),n(48,"p-tabpanel",12)(49,"pre",15)(50,"code"),t(51),e()()(),n(52,"p-tabpanel",13)(53,"pre",15)(54,"code"),t(55),e()()(),n(56,"p-tabpanel",14)(57,"pre",15)(58,"code"),t(59),e()()()()()(),n(60,"p-card",4)(61,"h2",16),t(62,"Live Demo"),e(),n(63,"p",17),t(64," Test module augmentation and declaration merging. "),e(),n(65,"div",5)(66,"div",18)(67,"p-button",19),m("click",function(){return r.testDeclarationMerging()}),e(),n(68,"p-button",20),m("click",function(){return r.testNamespaceMerging()}),e(),n(69,"p-button",21),m("click",function(){return r.testGlobalAugmentation()}),e()(),p(70,w,3,1,"div",22),e()(),n(71,"p-card",4)(72,"h2",16),t(73,"Key Takeaways"),e(),n(74,"ul",23)(75,"li",24)(76,"span",25),t(77,"\u2713"),e(),n(78,"span"),t(79,"Module augmentation extends types from external modules without modifying source"),e()(),n(80,"li",24)(81,"span",25),t(82,"\u2713"),e(),n(83,"span"),t(84,"Declaration merging combines multiple declarations of the same name"),e()(),n(85,"li",24)(86,"span",25),t(87,"\u2713"),e(),n(88,"span"),t(89,"Global augmentation extends built-in types like Array, Window, etc."),e()(),n(90,"li",24)(91,"span",25),t(92,"\u2713"),e(),n(93,"span"),t(94,"Essential for extending third-party libraries with type safety"),e()()()()()),a&2&&(o(47),s(r.moduleAugmentationCode),o(4),s(r.declarationMergingCode),o(4),s(r.globalAugmentationCode),o(4),s(r.thirdPartyAugmentationCode),o(11),c(r.result()?70:-1))},dependencies:[y,E,h,A,S,M,T,v,f,b],encapsulation:2})};export{k as ModuleAugmentationDemoComponent};
