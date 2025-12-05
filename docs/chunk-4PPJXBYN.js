import{a as C,b as w,c as M,d as k,e as P,f as L,g as T}from"./chunk-AH7MQ5KM.js";import{p as S,q as E}from"./chunk-47HPTYDK.js";import{p as D}from"./chunk-FHCI6K3X.js";import"./chunk-FPPZ4BUR.js";import{Hb as b,Jb as h,Ma as c,Xb as r,Yb as p,ab as x,nb as y,ob as v,ub as e,va as f,vb as t,wb as l}from"./chunk-S2MQBBOY.js";import{d as g,e as u}from"./chunk-6HR7AMTL.js";function j(i,o){if(i&1&&(e(0,"div",49)(1,"pre",52),r(2),t()()),i&2){let n=h();c(2),p(n.result())}}function _(i){return console.log("Class decorator applied to:",i.name),i}function A(i,o,n){let a=n.value;return n.value=function(...s){return console.log(`Calling method: ${o}`,s),a.apply(this,s)},n}function I(i,o){let n;Object.defineProperty(i,o,{get:function(){return console.log(`Getting ${o}:`,n),n},set:function(d){console.log(`Setting ${o} to:`,d),n=d},enumerable:!0,configurable:!0})}function K(i,o,n){console.log(`Parameter ${n} of ${String(o)}`)}function F(i){return function(o,n,a){let s=a.value;return a.value=function(...d){return console.log(`[${i}]`,n,d),s.apply(this,d)},a}}var m=class{name="";constructor(o){this.name=o}greet(o){return`${this.name} says: ${o}`}};g([I],m.prototype,"name",2),g([A,F("UserService"),u(0,K)],m.prototype,"greet",1),m=g([_],m);var $=class i{classDecoratorCode=`
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
`;result=f("");testDecorators(){let o=new m("John"),n=[],a=console.log;console.log=(...d)=>{n.push(d.join(" ")),a.apply(console,d)},o.name="Jane";let s=o.greet("Hello!");console.log=a,this.result.set(`Decorator Output:
${n.join(`
`)}

Greeting Result: ${s}`)}static \u0275fac=function(n){return new(n||i)};static \u0275cmp=x({type:i,selectors:[["app-decorators-demo"]],decls:125,vars:5,consts:[[1,"container-responsive","space-y-responsive"],[1,"card-modern","padding-responsive","hover-lift","slide-in-up"],[1,"flex","flex-col","lg:flex-row","lg:items-center","lg:justify-between","gap-6"],[1,"flex-1"],[1,"flex","items-center","gap-3","mb-4"],[1,"w-12","h-12","sm:w-14","sm:h-14","rounded-xl","bg-gradient-to-br","from-blue-600","to-cyan-600","flex","items-center","justify-center","shadow-lg"],[1,"fas","fa-star","text-white","text-xl","sm:text-2xl"],[1,"badge-modern","text-xs","sm:text-sm"],[1,"heading-responsive","text-gradient","mb-4"],[1,"text-responsive","text-gray-700","dark:text-gray-300"],[1,"hidden","lg:block"],[1,"w-32","h-32","rounded-2xl","bg-gradient-to-br","from-blue-600/20","to-cyan-600/20","flex","items-center","justify-center"],[1,"fas","fa-star","text-6xl","text-blue-600"],[1,"card-modern","hover-lift","slide-in-up"],[1,"padding-responsive","space-y-6"],[1,"w-10","h-10","rounded-lg","bg-gradient-to-br","from-blue-500","to-purple-600","flex","items-center","justify-center"],[1,"fas","fa-lightbulb","text-white"],[1,"subheading-responsive","text-gray-900","dark:text-gray-100"],[1,"text-responsive","text-gray-700","dark:text-gray-300","leading-relaxed"],[1,"glass","rounded-xl","p-6","border-l-4","border-accent"],[1,"fas","fa-star","text-accent","text-xl"],[1,"text-lg","sm:text-xl","font-semibold","text-gray-900","dark:text-gray-100"],[1,"list-modern"],[1,"text-sm","sm:text-base","text-gray-800","dark:text-gray-200"],[1,"padding-responsive"],[1,"flex","items-center","gap-3","mb-6"],[1,"w-10","h-10","rounded-lg","bg-gradient-to-br","from-green-500","to-teal-600","flex","items-center","justify-center"],[1,"fas","fa-code","text-white"],["value","0"],[1,"flex","flex-wrap","gap-2","mb-6"],["value","0",1,"flex","items-center","gap-2"],[1,"fas","fa-cube","text-blue-500"],[1,"text-sm","sm:text-base","font-semibold"],["value","1",1,"flex","items-center","gap-2"],[1,"fas","fa-function","text-purple-500"],["value","2",1,"flex","items-center","gap-2"],[1,"fas","fa-tag","text-cyan-500"],["value","3",1,"flex","items-center","gap-2"],[1,"fas","fa-industry","text-green-500"],[1,"code-block-modern"],[1,"overflow-x-auto","text-sm","sm:text-base"],["value","1"],["value","2"],["value","3"],[1,"w-10","h-10","rounded-lg","bg-gradient-to-br","from-purple-500","to-pink-600","flex","items-center","justify-center"],[1,"fas","fa-play-circle","text-white"],[1,"text-responsive","text-gray-700","dark:text-gray-300","mb-8"],[1,"space-y-6"],["label","Test Decorators","icon","pi pi-star",1,"btn-modern",3,"click"],[1,"glass","rounded-xl","p-6","fade-in"],[1,"w-10","h-10","rounded-lg","bg-gradient-to-br","from-teal-500","to-cyan-600","flex","items-center","justify-center"],[1,"fas","fa-graduation-cap","text-white"],[1,"text-sm","sm:text-base","text-gray-800","dark:text-gray-200","whitespace-pre-wrap"]],template:function(n,a){n&1&&(e(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5),l(6,"i",6),t(),e(7,"div")(8,"span",7),r(9,"TypeScript"),t()()(),e(10,"h1",8),r(11," Decorators & Metadata Reflection "),t(),e(12,"p",9),r(13," Learn how decorators work and how to use metadata reflection in TypeScript. "),t()(),e(14,"div",10)(15,"div",11),l(16,"i",12),t()()()(),e(17,"p-card",13)(18,"div",14)(19,"div",4)(20,"div",15),l(21,"i",16),t(),e(22,"h2",17),r(23,"What are Decorators?"),t()(),e(24,"p",18),r(25," Decorators are a special kind of declaration that can be attached to classes, methods, properties, and parameters. They use the form "),e(26,"code"),r(27,"@expression"),t(),r(28," where expression evaluates to a function. "),t(),e(29,"div",19)(30,"div",4),l(31,"i",20),e(32,"h3",21),r(33,"Types of Decorators"),t()(),e(34,"ul",22)(35,"li",23)(36,"strong"),r(37,"Class Decorators:"),t(),r(38," Applied to class declarations "),t(),e(39,"li",23)(40,"strong"),r(41,"Method Decorators:"),t(),r(42," Applied to method declarations "),t(),e(43,"li",23)(44,"strong"),r(45,"Property Decorators:"),t(),r(46," Applied to property declarations "),t(),e(47,"li",23)(48,"strong"),r(49,"Parameter Decorators:"),t(),r(50," Applied to parameter declarations "),t()()()()(),e(51,"p-card",13)(52,"div",24)(53,"div",25)(54,"div",26),l(55,"i",27),t(),e(56,"h2",17),r(57,"Code Examples"),t()(),e(58,"p-tabs",28)(59,"p-tablist",29)(60,"p-tab",30),l(61,"i",31),e(62,"span",32),r(63,"Class Decorator"),t()(),e(64,"p-tab",33),l(65,"i",34),e(66,"span",32),r(67,"Method Decorator"),t()(),e(68,"p-tab",35),l(69,"i",36),e(70,"span",32),r(71,"Property Decorator"),t()(),e(72,"p-tab",37),l(73,"i",38),e(74,"span",32),r(75,"Decorator Factory"),t()()(),e(76,"p-tabpanels")(77,"p-tabpanel",28)(78,"div",39)(79,"pre",40)(80,"code"),r(81),t()()()(),e(82,"p-tabpanel",41)(83,"div",39)(84,"pre",40)(85,"code"),r(86),t()()()(),e(87,"p-tabpanel",42)(88,"div",39)(89,"pre",40)(90,"code"),r(91),t()()()(),e(92,"p-tabpanel",43)(93,"div",39)(94,"pre",40)(95,"code"),r(96),t()()()()()()()(),e(97,"p-card",13)(98,"div",24)(99,"div",4)(100,"div",44),l(101,"i",45),t(),e(102,"h2",17),r(103,"Interactive Demo"),t()(),e(104,"p",46),r(105," Test decorators in action. Check the browser console for decorator output. "),t(),e(106,"div",47)(107,"p-button",48),b("click",function(){return a.testDecorators()}),t(),y(108,j,3,1,"div",49),t()()(),e(109,"p-card",13)(110,"div",24)(111,"div",25)(112,"div",50),l(113,"i",51),t(),e(114,"h2",17),r(115,"Key Takeaways"),t()(),e(116,"ul",22)(117,"li",23),r(118," Decorators are functions that modify classes, methods, properties, or parameters "),t(),e(119,"li",23),r(120," Decorator factories return decorator functions and accept parameters "),t(),e(121,"li",23),r(122," Enable powerful patterns like dependency injection, logging, and validation "),t(),e(123,"li",23),r(124," Angular uses decorators extensively (@Component, @Injectable, etc.) "),t()()()()()),n&2&&(c(81),p(a.classDecoratorCode),c(5),p(a.methodDecoratorCode),c(5),p(a.propertyDecoratorCode),c(5),p(a.decoratorFactoryCode),c(12),v(a.result()?108:-1))},dependencies:[D,w,C,T,k,M,P,L,E,S],encapsulation:2})};export{$ as DecoratorsDemoComponent};
