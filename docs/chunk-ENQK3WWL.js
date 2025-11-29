import{a as S,b as C,c as k,d as M,e as w,f as P,g as L}from"./chunk-6IHYB2AV.js";import{p as v,q as E}from"./chunk-H3I524XT.js";import{p as D}from"./chunk-EFMPFDS6.js";import"./chunk-4IVXAVEU.js";import{Ab as r,Bb as e,Nb as b,Ob as h,Sa as c,ac as t,bc as p,gb as y,pa as u,tb as x,ub as f}from"./chunk-ANFRTOHF.js";import{d as m,e as g}from"./chunk-6HR7AMTL.js";function $(i,n){if(i&1&&(r(0,"div",19)(1,"pre",23),t(2),e()()),i&2){let o=h();c(2),p(o.result())}}function _(i){return console.log("Class decorator applied to:",i.name),i}function A(i,n,o){let a=o.value;return o.value=function(...l){return console.log(`Calling method: ${n}`,l),a.apply(this,l)},o}function I(i,n){let o;Object.defineProperty(i,n,{get:function(){return console.log(`Getting ${n}:`,o),o},set:function(s){console.log(`Setting ${n} to:`,s),o=s},enumerable:!0,configurable:!0})}function K(i,n,o){console.log(`Parameter ${o} of ${String(n)}`)}function j(i){return function(n,o,a){let l=a.value;return a.value=function(...s){return console.log(`[${i}]`,o,s),l.apply(this,s)},a}}var d=class{name="";constructor(n){this.name=n}greet(n){return`${this.name} says: ${n}`}};m([I],d.prototype,"name",2),m([A,j("UserService"),g(0,K)],d.prototype,"greet",1),d=m([_],d);var T=class i{classDecoratorCode=`
// Class Decorator: Applied to class declaration
function LogClass(target: any) {
  console.log('Class decorator applied to:', target.name);
  return target;
}

@LogClass
class UserService {
  // ...
}
`;methodDecoratorCode=`
// Method Decorator: Applied to method
function LogMethod(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  descriptor.value = function (...args: any[]) {
    console.log(\`Calling method: \${propertyKey}\`, args);
    return originalMethod.apply(this, args);
  };
  return descriptor;
}

class UserService {
  @LogMethod
  greet(message: string): string {
    return message;
  }
}
`;propertyDecoratorCode=`
// Property Decorator: Applied to property
function LogProperty(target: any, propertyKey: string) {
  let value: any;
  const getter = function () {
    console.log(\`Getting \${propertyKey}:\`, value);
    return value;
  };
  const setter = function (newVal: any) {
    console.log(\`Setting \${propertyKey} to:\`, newVal);
    value = newVal;
  };
  Object.defineProperty(target, propertyKey, {
    get: getter,
    set: setter
  });
}

class UserService {
  @LogProperty
  name: string = '';
}
`;decoratorFactoryCode=`
// Decorator Factory: Returns a decorator function
function Log(prefix: string) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
      console.log(\`[\${prefix}]\`, propertyKey, args);
      return originalMethod.apply(this, args);
    };
    return descriptor;
  };
}

class UserService {
  @Log('UserService')
  greet(message: string): string {
    return message;
  }
}
`;result=u("");testDecorators(){let n=new d("John"),o=[],a=console.log;console.log=(...s)=>{o.push(s.join(" ")),a.apply(console,s)},n.name="Jane";let l=n.greet("Hello!");console.log=a,this.result.set(`Decorator Output:
${o.join(`
`)}

Greeting Result: ${l}`)}static \u0275fac=function(o){return new(o||i)};static \u0275cmp=y({type:i,selectors:[["app-decorators-demo"]],decls:95,vars:5,consts:[[1,"max-w-7xl","mx-auto","space-y-6"],[1,"bg-white","dark:bg-gray-800","rounded-lg","shadow-md","p-6"],[1,"text-3xl","font-bold","text-gray-800","dark:text-gray-200","mb-2"],[1,"text-gray-600","dark:text-gray-400"],[1,"shadow-md"],[1,"space-y-4"],[1,"text-2xl","font-semibold","text-gray-800","dark:text-gray-200"],[1,"text-gray-700","dark:text-gray-300"],[1,"bg-blue-50","dark:bg-blue-900/20","p-4","rounded-lg"],[1,"font-semibold","text-blue-900","dark:text-blue-200","mb-2"],[1,"list-disc","list-inside","space-y-1","text-blue-800","dark:text-blue-300"],["value","0"],["value","1"],["value","2"],["value","3"],[1,"bg-gray-900","text-gray-100","p-4","rounded-lg","overflow-x-auto","text-sm"],[1,"text-2xl","font-semibold","text-gray-800","dark:text-gray-200","mb-4"],[1,"text-gray-700","dark:text-gray-300","mb-6"],["label","Test Decorators","icon","pi pi-star",3,"click"],[1,"bg-gray-100","dark:bg-gray-700","p-4","rounded-lg"],[1,"space-y-2","text-gray-700","dark:text-gray-300"],[1,"flex","items-start"],[1,"text-green-500","mr-2"],[1,"text-sm","text-gray-800","dark:text-gray-200","whitespace-pre-wrap"]],template:function(o,a){o&1&&(r(0,"div",0)(1,"div",1)(2,"h1",2),t(3,"Decorators & Metadata Reflection"),e(),r(4,"p",3),t(5," Learn how decorators work and how to use metadata reflection in TypeScript. "),e()(),r(6,"p-card",4)(7,"div",5)(8,"h2",6),t(9,"What are Decorators?"),e(),r(10,"p",7),t(11," Decorators are a special kind of declaration that can be attached to classes, methods, properties, and parameters. They use the form "),r(12,"code"),t(13,"@expression"),e(),t(14," where expression evaluates to a function. "),e(),r(15,"div",8)(16,"h3",9),t(17,"Types of Decorators:"),e(),r(18,"ul",10)(19,"li")(20,"strong"),t(21,"Class Decorators:"),e(),t(22," Applied to class declarations"),e(),r(23,"li")(24,"strong"),t(25,"Method Decorators:"),e(),t(26," Applied to method declarations"),e(),r(27,"li")(28,"strong"),t(29,"Property Decorators:"),e(),t(30," Applied to property declarations"),e(),r(31,"li")(32,"strong"),t(33,"Parameter Decorators:"),e(),t(34," Applied to parameter declarations"),e()()()()(),r(35,"p-card",4)(36,"p-tabs",11)(37,"p-tablist")(38,"p-tab",11),t(39,"Class Decorator"),e(),r(40,"p-tab",12),t(41,"Method Decorator"),e(),r(42,"p-tab",13),t(43,"Property Decorator"),e(),r(44,"p-tab",14),t(45,"Decorator Factory"),e()(),r(46,"p-tabpanels")(47,"p-tabpanel",11)(48,"pre",15)(49,"code"),t(50),e()()(),r(51,"p-tabpanel",12)(52,"pre",15)(53,"code"),t(54),e()()(),r(55,"p-tabpanel",13)(56,"pre",15)(57,"code"),t(58),e()()(),r(59,"p-tabpanel",14)(60,"pre",15)(61,"code"),t(62),e()()()()()(),r(63,"p-card",4)(64,"h2",16),t(65,"Live Demo"),e(),r(66,"p",17),t(67," Test decorators in action. Check the browser console for decorator output. "),e(),r(68,"div",5)(69,"p-button",18),b("click",function(){return a.testDecorators()}),e(),x(70,$,3,1,"div",19),e()(),r(71,"p-card",4)(72,"h2",16),t(73,"Key Takeaways"),e(),r(74,"ul",20)(75,"li",21)(76,"span",22),t(77,"\u2713"),e(),r(78,"span"),t(79,"Decorators are functions that modify classes, methods, properties, or parameters"),e()(),r(80,"li",21)(81,"span",22),t(82,"\u2713"),e(),r(83,"span"),t(84,"Decorator factories return decorator functions and accept parameters"),e()(),r(85,"li",21)(86,"span",22),t(87,"\u2713"),e(),r(88,"span"),t(89,"Enable powerful patterns like dependency injection, logging, and validation"),e()(),r(90,"li",21)(91,"span",22),t(92,"\u2713"),e(),r(93,"span"),t(94,"Angular uses decorators extensively (@Component, @Injectable, etc.)"),e()()()()()),o&2&&(c(50),p(a.classDecoratorCode),c(4),p(a.methodDecoratorCode),c(4),p(a.propertyDecoratorCode),c(4),p(a.decoratorFactoryCode),c(8),f(a.result()?70:-1))},dependencies:[D,C,S,L,M,k,w,P,E,v],encapsulation:2})};export{T as DecoratorsDemoComponent};
