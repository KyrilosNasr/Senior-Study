import{d as H,e as X}from"./chunk-2J3LZQCR.js";import"./chunk-TP7YNU2K.js";import"./chunk-3DC6BNIH.js";import"./chunk-YTKLB6YK.js";import"./chunk-D27LCWUD.js";import{a as B,b as L}from"./chunk-QB6ZO67J.js";import{b as W,e as j,i as $,s as V}from"./chunk-RMJAI7RZ.js";import{a as J}from"./chunk-I2ZT4LK6.js";import"./chunk-DS4DKGB5.js";import"./chunk-YPUDPSQH.js";import"./chunk-DEGWJE5E.js";import{a as z,b as G,c as K,d as R,e as U,f as q}from"./chunk-3ZW5MUH5.js";import"./chunk-SHEHAVXT.js";import{a as O,b as F}from"./chunk-ST7OVFPO.js";import"./chunk-3N3GZBUB.js";import"./chunk-4O3FVBGX.js";import"./chunk-QCJRPF2F.js";import"./chunk-IZU7C3FN.js";import{b as I}from"./chunk-JBIPGRVB.js";import{r as N}from"./chunk-BO564T5E.js";import"./chunk-FPPZ4BUR.js";import{Cb as f,Db as u,Fb as D,Gb as C,Hb as k,Ib as x,Jb as e,Kb as t,Lb as r,Sb as _,Wb as b,Yb as c,Za as m,kc as n,lc as g,ma as S,mc as E,na as w,nb as P,pc as T,qc as A,rc as M,va as p}from"./chunk-6P3ZW5D6.js";import"./chunk-6HR7AMTL.js";var h=class{name;constructor(i){this.name=i}makeSound(){return`${this.name} says: Woof! Woof!`}move(){return`${this.name} is running`}},y=class{name;constructor(i){this.name=i}makeSound(){return`${this.name} says: Meow! Meow!`}move(){return`${this.name} is walking gracefully`}},v=class{name;constructor(i){this.name=i}makeSound(){return`${this.name} says: Tweet! Tweet!`}move(){return`${this.name} is flying`}};var Y=(o,i)=>i.makeSound();function Z(o,i){if(o&1){let a=_();e(0,"div",72),b("click",function(){let s=S(a).$implicit,d=c(2);return w(d.selectAnimal(s))}),e(1,"p",73),n(2),t()()}if(o&2){let a=i.$implicit;m(2),g(a.makeSound())}}function ee(o,i){if(o&1&&(e(0,"div",69)(1,"h4",74),r(2,"ng-icon",75),n(3," Selected Animal "),t(),e(4,"div",76)(5,"p")(6,"strong",77),n(7,"Sound:"),t(),n(8),t(),e(9,"p")(10,"strong",77),n(11,"Movement:"),t(),n(12),t()()()),o&2){let a=i;m(8),E(" ",a.makeSound()),m(4),E(" ",a.move())}}function te(o,i){if(o&1&&(e(0,"p",80),n(1),t()),o&2){let a=i.$implicit;m(),g(a)}}function ne(o,i){if(o&1&&(e(0,"div",71)(1,"h4",78),r(2,"ng-icon",79),n(3," All Animals Interacting "),t(),e(4,"div",46),C(5,te,2,1,"p",80,D),t()()),o&2){let a=c(2);m(5),k(a.allInteractions())}}function ie(o,i){if(o&1){let a=_();e(0,"div",54)(1,"h3",65),r(2,"ng-icon",66),n(3," Created Animals "),t(),e(4,"div",67),C(5,Z,3,1,"div",68,Y),t(),f(7,ee,13,2,"div",69),e(8,"app-enhanced-button",70),b("buttonClick",function(){S(a);let s=c();return w(s.interactWithAll())}),t(),f(9,ne,7,0,"div",71),t()}if(o&2){let a,l=c();m(5),k(l.animals()),m(2),u((a=l.selectedAnimal())?7:-1,a),m(),x("disabled",l.animals().length===0)("fullWidth",!0),m(),u(l.allInteractions().length>0?9:-1)}}var Q=class o{animalType=p("dog");animalName=p("");animals=p([]);selectedAnimal=p(null);violationCode=`
// \u274C VIOLATION: No Polymorphism
// Need separate handling for each type

function makeSound(animalType: string, name: string): string {
  if (animalType === 'dog') {
    return \`\${name} says: Woof! Woof!\`;
  } else if (animalType === 'cat') {
    return \`\${name} says: Meow! Meow!\`;
  } else if (animalType === 'bird') {
    return \`\${name} says: Tweet! Tweet!\`;
  }
  return '';
}

// Problem: Need to modify function for each new animal type
// No code reuse, harder to extend
`;solutionCode=`
// \u2705 SOLUTION: Polymorphism
// Same interface, different implementations

interface Animal {
  makeSound(): string;
  move(): string;
}

class Dog implements Animal {
  constructor(private name: string) {}

  makeSound(): string {
    return \`\${this.name} says: Woof! Woof!\`;
  }

  move(): string {
    return \`\${this.name} is running\`;
  }
}

class Cat implements Animal {
  constructor(private name: string) {}

  makeSound(): string {
    return \`\${this.name} says: Meow! Meow!\`;
  }

  move(): string {
    return \`\${this.name} is walking gracefully\`;
  }
}

class Bird implements Animal {
  constructor(private name: string) {}

  makeSound(): string {
    return \`\${this.name} says: Tweet! Tweet!\`;
  }

  move(): string {
    return \`\${this.name} is flying\`;
  }
}

// Polymorphic usage - same code works with any Animal
function interactWithAnimals(animals: Animal[]): void {
  animals.forEach(animal => {
    console.log(animal.makeSound());  // Different implementation for each
    console.log(animal.move());       // Different implementation for each
  });
}

// Benefits:
// - Code reuse
// - Easy to extend (add new animals)
// - Same interface, different behavior
`;animalTypes=[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"},{label:"Bird",value:"bird"}];createAnimal(){if(!this.animalName().trim())return;let i;switch(this.animalType()){case"dog":i=new h(this.animalName());break;case"cat":i=new y(this.animalName());break;case"bird":i=new v(this.animalName());break;default:return}this.animals.update(a=>[...a,i]),this.selectedAnimal.set(i),this.animalName.set("")}selectAnimal(i){this.selectedAnimal.set(i)}allInteractions=p([]);interactWithAll(){let i=this.animals().flatMap(a=>[a.makeSound(),a.move()]);this.allInteractions.set(i)}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=P({type:o,selectors:[["app-polymorphism-demo"]],decls:128,vars:7,consts:[[1,"container-responsive","space-y-responsive"],[1,"card-modern","padding-responsive","hover-lift","slide-in-up"],[1,"flex","flex-col","lg:flex-row","lg:items-center","lg:justify-between","gap-6"],[1,"flex-1"],[1,"flex","items-center","gap-3","mb-4"],[1,"w-12","h-12","sm:w-14","sm:h-14","rounded-xl","bg-gradient-to-br","from-yellow-500","to-orange-600","flex","items-center","justify-center","shadow-lg"],["name","faSolidShapes",1,"text-white","text-xl","sm:text-2xl"],[1,"badge-modern","text-xs","sm:text-sm"],[1,"heading-responsive","text-gradient","mb-4"],[1,"text-responsive","text-gray-700","dark:text-gray-300"],[1,"hidden","lg:block"],[1,"w-32","h-32","rounded-2xl","bg-gradient-to-br","from-yellow-500/20","to-orange-600/20","flex","items-center","justify-center"],["name","faSolidPuzzlePiece",1,"text-6xl","text-yellow-500"],[1,"card-modern","hover-lift","slide-in-up"],[1,"padding-responsive","space-y-6"],[1,"w-10","h-10","rounded-lg","bg-gradient-to-br","from-yellow-500","to-orange-600","flex","items-center","justify-center"],["name","faSolidLightbulb",1,"text-white"],[1,"subheading-responsive","text-gray-900","dark:text-gray-100"],[1,"text-responsive","text-gray-700","dark:text-gray-300","leading-relaxed"],[1,"glass","rounded-xl","p-6","border-l-4","border-accent"],["name","faSolidStar",1,"text-accent","text-xl"],[1,"text-lg","sm:text-xl","font-semibold","text-gray-900","dark:text-gray-100"],[1,"list-modern"],[1,"text-sm","sm:text-base","text-gray-800","dark:text-gray-200"],[1,"padding-responsive"],[1,"flex","items-center","gap-3","mb-6"],[1,"w-10","h-10","rounded-lg","bg-gradient-to-br","from-green-500","to-teal-600","flex","items-center","justify-center"],["name","faSolidCode",1,"text-white"],["value","0"],[1,"flex","flex-wrap","gap-2","mb-6"],["value","0",1,"flex","items-center","gap-2"],["name","faSolidCircleXmark",1,"text-red-500"],[1,"text-sm","sm:text-base","font-semibold"],["value","1",1,"flex","items-center","gap-2"],["name","faSolidCircleCheck",1,"text-green-500"],[1,"code-block-modern"],[1,"overflow-x-auto","text-sm","sm:text-base"],["value","1"],[1,"w-10","h-10","rounded-lg","bg-gradient-to-br","from-purple-500","to-pink-600","flex","items-center","justify-center"],["name","faSolidCirclePlay",1,"text-white"],[1,"text-responsive","text-gray-700","dark:text-gray-300","mb-8"],[1,"space-y-6"],[1,"glass","rounded-xl","p-6","border","border-gray-200","dark:border-gray-700"],[1,"text-lg","sm:text-xl","font-semibold","text-gray-800","dark:text-gray-200","mb-4","flex","items-center","gap-2"],["name","faSolidPaw",1,"text-accent"],[1,"grid","grid-cols-1","sm:grid-cols-2","gap-4","lg:gap-6","mb-4"],[1,"space-y-2"],[1,"block","text-sm","font-semibold","text-gray-700","dark:text-gray-300"],["name","faSolidList",1,"text-accent","mr-2"],["optionLabel","label","optionValue","value",1,"w-full",3,"ngModelChange","options","ngModel"],["name","faSolidTag",1,"text-accent","mr-2"],["pInputText","","type","text","placeholder","Buddy",1,"input-modern",3,"ngModelChange","ngModel"],[1,"btn-modern","px-8","py-4","rounded-xl","font-semibold","text-base","sm:text-lg","flex","items-center","justify-center","gap-3","shadow-lg","hover:shadow-xl","transition-all","duration-300","hover:scale-105","active:scale-100","disabled:opacity-50","disabled:cursor-not-allowed","disabled:hover:scale-100",3,"click","disabled"],["name","faSolidCirclePlus","aria-hidden","true",1,"text-lg","sm:text-xl"],[1,"glass","rounded-xl","p-6","border-l-4","border-green-500"],[1,"w-10","h-10","rounded-lg","bg-gradient-to-br","from-teal-500","to-cyan-600","flex","items-center","justify-center"],["name","faSolidGraduationCap",1,"text-white"],[1,"mt-8","pt-6","border-t","border-gray-200","dark:border-gray-700"],[1,"text-lg","font-semibold","text-gray-900","dark:text-gray-100","mb-4","flex","items-center","gap-2"],["name","faSolidBookOpen",1,"text-accent"],[1,"flex","flex-wrap","gap-3"],["href","#",1,"badge-outline","hover:scale-105","transition-transform"],["name","faSolidArrowUpRightFromSquare",1,"mr-2"],["name","faSolidVideo",1,"mr-2"],["name","faSolidCodeBranch",1,"mr-2"],[1,"text-lg","sm:text-xl","font-semibold","text-green-800","dark:text-green-200","mb-4","flex","items-center","gap-2"],["name","faSolidList",1,"text-green-500"],[1,"space-y-2","mb-4"],[1,"p-4","bg-gradient-to-r","from-gray-50","to-gray-100","dark:from-gray-800","dark:to-gray-700","rounded-lg","cursor-pointer","hover:scale-[1.02]","transition-transform","border","border-gray-200","dark:border-gray-600"],[1,"p-6","bg-gradient-to-r","from-blue-50","to-indigo-50","dark:from-blue-900/20","dark:to-indigo-900/20","rounded-lg","border","border-blue-200","dark:border-blue-800","mb-4"],["label","Interact with All Animals","icon","faSolidPlay",3,"buttonClick","disabled","fullWidth"],[1,"mt-4","p-6","bg-gradient-to-r","from-purple-50","to-pink-50","dark:from-purple-900/20","dark:to-pink-900/20","rounded-lg","border","border-purple-200","dark:border-purple-800"],[1,"p-4","bg-gradient-to-r","from-gray-50","to-gray-100","dark:from-gray-800","dark:to-gray-700","rounded-lg","cursor-pointer","hover:scale-[1.02]","transition-transform","border","border-gray-200","dark:border-gray-600",3,"click"],[1,"text-sm","sm:text-base","text-gray-800","dark:text-gray-200","font-medium"],[1,"text-lg","font-semibold","text-blue-900","dark:text-blue-100","mb-4","flex","items-center","gap-2"],["name","faSolidCircleInfo",1,"text-blue-500"],[1,"space-y-2","text-sm","sm:text-base","text-blue-800","dark:text-blue-300"],[1,"font-semibold"],[1,"text-lg","font-semibold","text-purple-900","dark:text-purple-200","mb-3","flex","items-center","gap-2"],["name","faSolidComments",1,"text-purple-500"],[1,"text-sm","sm:text-base","text-purple-800","dark:text-purple-300"]],template:function(a,l){a&1&&(e(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5),r(6,"ng-icon",6),t(),e(7,"div")(8,"span",7),n(9,"OOP Concepts"),t()()(),e(10,"h1",8),n(11," Polymorphism "),t(),e(12,"p",9),n(13," The ability of objects of different types to be accessed through the same interface, with each type providing its own implementation. "),t()(),e(14,"div",10)(15,"div",11),r(16,"ng-icon",12),t()()()(),e(17,"p-card",13)(18,"div",14)(19,"div",4)(20,"div",15),r(21,"ng-icon",16),t(),e(22,"h2",17),n(23,"What is Polymorphism?"),t()(),e(24,"p",18),n(25," Polymorphism allows objects of different classes to be treated as objects of a common base class or interface. The same method call can produce different behaviors depending on the actual object type. This enables code to work with objects at a higher level of abstraction. "),t(),e(26,"div",19)(27,"div",4),r(28,"ng-icon",20),e(29,"h3",21),n(30,"Key Benefits"),t()(),e(31,"ul",22)(32,"li",23),n(33," Code reusability and flexibility "),t(),e(34,"li",23),n(35," Easier to extend with new types "),t(),e(36,"li",23),n(37," Simplifies complex code "),t(),e(38,"li",23),n(39," Enables runtime method resolution "),t()()()()(),e(40,"p-card",13)(41,"div",24)(42,"div",25)(43,"div",26),r(44,"ng-icon",27),t(),e(45,"h2",17),n(46,"Code Examples"),t()(),e(47,"p-tabs",28)(48,"p-tablist",29)(49,"p-tab",30),r(50,"ng-icon",31),e(51,"span",32),n(52,"Violation"),t()(),e(53,"p-tab",33),r(54,"ng-icon",34),e(55,"span",32),n(56,"Solution"),t()()(),e(57,"p-tabpanels")(58,"p-tabpanel",28)(59,"div",35)(60,"pre",36)(61,"code"),n(62),t()()()(),e(63,"p-tabpanel",37)(64,"div",35)(65,"pre",36)(66,"code"),n(67),t()()()()()()()(),e(68,"p-card",13)(69,"div",24)(70,"div",4)(71,"div",38),r(72,"ng-icon",39),t(),e(73,"h2",17),n(74,"Interactive Demo"),t()(),e(75,"p",40),n(76," Create different animals and see how they all respond to the same method calls (makeSound, move) but with different behaviors. This demonstrates polymorphism in action. "),t(),e(77,"div",41)(78,"div",42)(79,"h3",43),r(80,"ng-icon",44),n(81," Create Animal "),t(),e(82,"div",45)(83,"div",46)(84,"label",47),r(85,"ng-icon",48),n(86,"Animal Type "),t(),e(87,"p-select",49),M("ngModelChange",function(d){return A(l.animalType,d)||(l.animalType=d),d}),t()(),e(88,"div",46)(89,"label",47),r(90,"ng-icon",50),n(91,"Animal Name "),t(),e(92,"input",51),M("ngModelChange",function(d){return A(l.animalName,d)||(l.animalName=d),d}),t()()(),e(93,"button",52),b("click",function(){return l.createAnimal()}),r(94,"ng-icon",53),e(95,"span"),n(96,"Create Animal"),t()()(),f(97,ie,10,4,"div",54),t()()(),e(98,"p-card",13)(99,"div",24)(100,"div",25)(101,"div",55),r(102,"ng-icon",56),t(),e(103,"h2",17),n(104,"Key Takeaways"),t()(),e(105,"ul",22)(106,"li",23),n(107," Same interface, different implementations "),t(),e(108,"li",23),n(109," Runtime method resolution based on actual object type "),t(),e(110,"li",23),n(111," Enables code to work with objects at a higher level of abstraction "),t(),e(112,"li",23),n(113," Makes code more flexible and easier to extend "),t()(),e(114,"div",57)(115,"h3",58),r(116,"ng-icon",59),n(117," Learn More "),t(),e(118,"div",60)(119,"a",61),r(120,"ng-icon",62),n(121,"Documentation "),t(),e(122,"a",61),r(123,"ng-icon",63),n(124,"Video Tutorial "),t(),e(125,"a",61),r(126,"ng-icon",64),n(127,"GitHub Examples "),t()()()()()()),a&2&&(m(62),g(l.violationCode),m(5),g(l.solutionCode),m(20),x("options",l.animalTypes),T("ngModel",l.animalType),m(5),T("ngModel",l.animalName),m(),x("disabled",!l.animalName().trim()),m(4),u(l.animals().length>0?97:-1))},dependencies:[I,N,V,W,j,$,F,O,U,G,z,K,R,J,L,B,X,H,q],styles:["[_nghost-%COMP%]{display:block;width:100%}"]})};export{Q as PolymorphismDemoComponent};
