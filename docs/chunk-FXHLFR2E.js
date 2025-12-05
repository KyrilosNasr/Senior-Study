import{a as J,b as Q}from"./chunk-S2OXY7KE.js";import"./chunk-ZCBYKFSK.js";import"./chunk-BNU3XHMI.js";import"./chunk-ZNZEMCYO.js";import{b as $,e as j,i as V,p as B,s as L,t as O}from"./chunk-5TVMUKYR.js";import{a as F,b as z,c as K,d as G,e as H,f as R,g as U,h as q}from"./chunk-AH7MQ5KM.js";import"./chunk-K33OWSJ3.js";import"./chunk-UB7WHAP5.js";import{p as I,q as W}from"./chunk-47HPTYDK.js";import{p as P}from"./chunk-FHCI6K3X.js";import"./chunk-FPPZ4BUR.js";import{$b as T,Db as C,Hb as b,Jb as c,Ma as m,Xb as i,Yb as g,Zb as E,ab as D,ac as A,bc as M,ma as S,na as k,nb as f,ob as u,qb as N,rb as w,sb as _,tb as x,ub as e,va as p,vb as t,wb as o}from"./chunk-S2MQBBOY.js";import"./chunk-6HR7AMTL.js";var y=class{name;constructor(n){this.name=n}makeSound(){return`${this.name} says: Woof! Woof!`}move(){return`${this.name} is running`}},h=class{name;constructor(n){this.name=n}makeSound(){return`${this.name} says: Meow! Meow!`}move(){return`${this.name} is walking gracefully`}},v=class{name;constructor(n){this.name=n}makeSound(){return`${this.name} says: Tweet! Tweet!`}move(){return`${this.name} is flying`}};var Y=(r,n)=>n.makeSound();function Z(r,n){if(r&1){let a=C();e(0,"div",71),b("click",function(){let d=S(a).$implicit,s=c(2);return k(s.selectAnimal(d))}),e(1,"p",72),i(2),t()()}if(r&2){let a=n.$implicit;m(2),g(a.makeSound())}}function ee(r,n){if(r&1&&(e(0,"div",68)(1,"h4",73),o(2,"i",74),i(3," Selected Animal "),t(),e(4,"div",75)(5,"p")(6,"strong",76),i(7,"Sound:"),t(),i(8),t(),e(9,"p")(10,"strong",76),i(11,"Movement:"),t(),i(12),t()()()),r&2){let a=n;m(8),E(" ",a.makeSound()),m(4),E(" ",a.move())}}function te(r,n){if(r&1&&(e(0,"p",79),i(1),t()),r&2){let a=n.$implicit;m(),g(a)}}function ie(r,n){if(r&1&&(e(0,"div",70)(1,"h4",77),o(2,"i",78),i(3," All Animals Interacting "),t(),e(4,"div",46),w(5,te,2,1,"p",79,N),t()()),r&2){let a=c(2);m(5),_(a.allInteractions())}}function ne(r,n){if(r&1){let a=C();e(0,"div",53)(1,"h3",64),o(2,"i",65),i(3," Created Animals "),t(),e(4,"div",66),w(5,Z,3,1,"div",67,Y),t(),f(7,ee,13,2,"div",68),e(8,"p-button",69),b("click",function(){S(a);let d=c();return k(d.interactWithAll())}),t(),f(9,ie,7,0,"div",70),t()}if(r&2){let a,l=c();m(5),_(l.animals()),m(2),u((a=l.selectedAnimal())?7:-1,a),m(),x("disabled",l.animals().length===0),m(),u(l.allInteractions().length>0?9:-1)}}var X=class r{animalType=p("dog");animalName=p("");animals=p([]);selectedAnimal=p(null);violationCode=`
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
`;animalTypes=[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"},{label:"Bird",value:"bird"}];createAnimal(){if(!this.animalName().trim())return;let n;switch(this.animalType()){case"dog":n=new y(this.animalName());break;case"cat":n=new h(this.animalName());break;case"bird":n=new v(this.animalName());break;default:return}this.animals.update(a=>[...a,n]),this.selectedAnimal.set(n),this.animalName.set("")}selectAnimal(n){this.selectedAnimal.set(n)}allInteractions=p([]);interactWithAll(){let n=this.animals().flatMap(a=>[a.makeSound(),a.move()]);this.allInteractions.set(n)}static \u0275fac=function(a){return new(a||r)};static \u0275cmp=D({type:r,selectors:[["app-polymorphism-demo"]],decls:125,vars:7,consts:[[1,"container-responsive","space-y-responsive"],[1,"card-modern","padding-responsive","hover-lift","slide-in-up"],[1,"flex","flex-col","lg:flex-row","lg:items-center","lg:justify-between","gap-6"],[1,"flex-1"],[1,"flex","items-center","gap-3","mb-4"],[1,"w-12","h-12","sm:w-14","sm:h-14","rounded-xl","bg-gradient-to-br","from-yellow-500","to-orange-600","flex","items-center","justify-center","shadow-lg"],[1,"fas","fa-shapes","text-white","text-xl","sm:text-2xl"],[1,"badge-modern","text-xs","sm:text-sm"],[1,"heading-responsive","text-gradient","mb-4"],[1,"text-responsive","text-gray-700","dark:text-gray-300"],[1,"hidden","lg:block"],[1,"w-32","h-32","rounded-2xl","bg-gradient-to-br","from-yellow-500/20","to-orange-600/20","flex","items-center","justify-center"],[1,"fas","fa-puzzle-piece","text-6xl","text-yellow-500"],[1,"card-modern","hover-lift","slide-in-up"],[1,"padding-responsive","space-y-6"],[1,"w-10","h-10","rounded-lg","bg-gradient-to-br","from-yellow-500","to-orange-600","flex","items-center","justify-center"],[1,"fas","fa-lightbulb","text-white"],[1,"subheading-responsive","text-gray-900","dark:text-gray-100"],[1,"text-responsive","text-gray-700","dark:text-gray-300","leading-relaxed"],[1,"glass","rounded-xl","p-6","border-l-4","border-accent"],[1,"fas","fa-star","text-accent","text-xl"],[1,"text-lg","sm:text-xl","font-semibold","text-gray-900","dark:text-gray-100"],[1,"list-modern"],[1,"text-sm","sm:text-base","text-gray-800","dark:text-gray-200"],[1,"padding-responsive"],[1,"flex","items-center","gap-3","mb-6"],[1,"w-10","h-10","rounded-lg","bg-gradient-to-br","from-green-500","to-teal-600","flex","items-center","justify-center"],[1,"fas","fa-code","text-white"],["value","0"],[1,"flex","flex-wrap","gap-2","mb-6"],["value","0",1,"flex","items-center","gap-2"],[1,"fas","fa-times-circle","text-red-500"],[1,"text-sm","sm:text-base","font-semibold"],["value","1",1,"flex","items-center","gap-2"],[1,"fas","fa-check-circle","text-green-500"],[1,"code-block-modern"],[1,"overflow-x-auto","text-sm","sm:text-base"],["value","1"],[1,"w-10","h-10","rounded-lg","bg-gradient-to-br","from-purple-500","to-pink-600","flex","items-center","justify-center"],[1,"fas","fa-play-circle","text-white"],[1,"text-responsive","text-gray-700","dark:text-gray-300","mb-8"],[1,"space-y-6"],[1,"glass","rounded-xl","p-6","border","border-gray-200","dark:border-gray-700"],[1,"text-lg","sm:text-xl","font-semibold","text-gray-800","dark:text-gray-200","mb-4","flex","items-center","gap-2"],[1,"fas","fa-paw","text-accent"],[1,"grid","grid-cols-1","sm:grid-cols-2","gap-4","lg:gap-6","mb-4"],[1,"space-y-2"],[1,"block","text-sm","font-semibold","text-gray-700","dark:text-gray-300"],[1,"fas","fa-list","text-accent","mr-2"],["optionLabel","label","optionValue","value",1,"w-full",3,"ngModelChange","options","ngModel"],[1,"fas","fa-tag","text-accent","mr-2"],["pInputText","","type","text","placeholder","Buddy",1,"input-modern",3,"ngModelChange","ngModel"],["label","Create Animal","icon","pi pi-plus",1,"btn-modern",3,"click","disabled"],[1,"glass","rounded-xl","p-6","border-l-4","border-green-500"],[1,"w-10","h-10","rounded-lg","bg-gradient-to-br","from-teal-500","to-cyan-600","flex","items-center","justify-center"],[1,"fas","fa-graduation-cap","text-white"],[1,"mt-8","pt-6","border-t","border-gray-200","dark:border-gray-700"],[1,"text-lg","font-semibold","text-gray-900","dark:text-gray-100","mb-4","flex","items-center","gap-2"],[1,"fas","fa-book-open","text-accent"],[1,"flex","flex-wrap","gap-3"],["href","#",1,"badge-outline","hover:scale-105","transition-transform"],[1,"fas","fa-external-link-alt","mr-2"],[1,"fas","fa-video","mr-2"],[1,"fas","fa-code-branch","mr-2"],[1,"text-lg","sm:text-xl","font-semibold","text-green-800","dark:text-green-200","mb-4","flex","items-center","gap-2"],[1,"fas","fa-list","text-green-500"],[1,"space-y-2","mb-4"],[1,"p-4","bg-gradient-to-r","from-gray-50","to-gray-100","dark:from-gray-800","dark:to-gray-700","rounded-lg","cursor-pointer","hover:scale-[1.02]","transition-transform","border","border-gray-200","dark:border-gray-600"],[1,"p-6","bg-gradient-to-r","from-blue-50","to-indigo-50","dark:from-blue-900/20","dark:to-indigo-900/20","rounded-lg","border","border-blue-200","dark:border-blue-800","mb-4"],["label","Interact with All Animals","icon","pi pi-play",1,"w-full","btn-modern",3,"click","disabled"],[1,"mt-4","p-6","bg-gradient-to-r","from-purple-50","to-pink-50","dark:from-purple-900/20","dark:to-pink-900/20","rounded-lg","border","border-purple-200","dark:border-purple-800"],[1,"p-4","bg-gradient-to-r","from-gray-50","to-gray-100","dark:from-gray-800","dark:to-gray-700","rounded-lg","cursor-pointer","hover:scale-[1.02]","transition-transform","border","border-gray-200","dark:border-gray-600",3,"click"],[1,"text-sm","sm:text-base","text-gray-800","dark:text-gray-200","font-medium"],[1,"text-lg","font-semibold","text-blue-900","dark:text-blue-100","mb-4","flex","items-center","gap-2"],[1,"fas","fa-info-circle","text-blue-500"],[1,"space-y-2","text-sm","sm:text-base","text-blue-800","dark:text-blue-300"],[1,"font-semibold"],[1,"text-lg","font-semibold","text-purple-900","dark:text-purple-200","mb-3","flex","items-center","gap-2"],[1,"fas","fa-comments","text-purple-500"],[1,"text-sm","sm:text-base","text-purple-800","dark:text-purple-300"]],template:function(a,l){a&1&&(e(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5),o(6,"i",6),t(),e(7,"div")(8,"span",7),i(9,"OOP Concepts"),t()()(),e(10,"h1",8),i(11," Polymorphism "),t(),e(12,"p",9),i(13," The ability of objects of different types to be accessed through the same interface, with each type providing its own implementation. "),t()(),e(14,"div",10)(15,"div",11),o(16,"i",12),t()()()(),e(17,"p-card",13)(18,"div",14)(19,"div",4)(20,"div",15),o(21,"i",16),t(),e(22,"h2",17),i(23,"What is Polymorphism?"),t()(),e(24,"p",18),i(25," Polymorphism allows objects of different classes to be treated as objects of a common base class or interface. The same method call can produce different behaviors depending on the actual object type. This enables code to work with objects at a higher level of abstraction. "),t(),e(26,"div",19)(27,"div",4),o(28,"i",20),e(29,"h3",21),i(30,"Key Benefits"),t()(),e(31,"ul",22)(32,"li",23),i(33," Code reusability and flexibility "),t(),e(34,"li",23),i(35," Easier to extend with new types "),t(),e(36,"li",23),i(37," Simplifies complex code "),t(),e(38,"li",23),i(39," Enables runtime method resolution "),t()()()()(),e(40,"p-card",13)(41,"div",24)(42,"div",25)(43,"div",26),o(44,"i",27),t(),e(45,"h2",17),i(46,"Code Examples"),t()(),e(47,"p-tabs",28)(48,"p-tablist",29)(49,"p-tab",30),o(50,"i",31),e(51,"span",32),i(52,"Violation"),t()(),e(53,"p-tab",33),o(54,"i",34),e(55,"span",32),i(56,"Solution"),t()()(),e(57,"p-tabpanels")(58,"p-tabpanel",28)(59,"div",35)(60,"pre",36)(61,"code"),i(62),t()()()(),e(63,"p-tabpanel",37)(64,"div",35)(65,"pre",36)(66,"code"),i(67),t()()()()()()()(),e(68,"p-card",13)(69,"div",24)(70,"div",4)(71,"div",38),o(72,"i",39),t(),e(73,"h2",17),i(74,"Interactive Demo"),t()(),e(75,"p",40),i(76," Create different animals and see how they all respond to the same method calls (makeSound, move) but with different behaviors. This demonstrates polymorphism in action. "),t(),e(77,"div",41)(78,"div",42)(79,"h3",43),o(80,"i",44),i(81," Create Animal "),t(),e(82,"div",45)(83,"div",46)(84,"label",47),o(85,"i",48),i(86,"Animal Type "),t(),e(87,"p-select",49),M("ngModelChange",function(s){return A(l.animalType,s)||(l.animalType=s),s}),t()(),e(88,"div",46)(89,"label",47),o(90,"i",50),i(91,"Animal Name "),t(),e(92,"input",51),M("ngModelChange",function(s){return A(l.animalName,s)||(l.animalName=s),s}),t()()(),e(93,"p-button",52),b("click",function(){return l.createAnimal()}),t()(),f(94,ne,10,3,"div",53),t()()(),e(95,"p-card",13)(96,"div",24)(97,"div",25)(98,"div",54),o(99,"i",55),t(),e(100,"h2",17),i(101,"Key Takeaways"),t()(),e(102,"ul",22)(103,"li",23),i(104," Same interface, different implementations "),t(),e(105,"li",23),i(106," Runtime method resolution based on actual object type "),t(),e(107,"li",23),i(108," Enables code to work with objects at a higher level of abstraction "),t(),e(109,"li",23),i(110," Makes code more flexible and easier to extend "),t()(),e(111,"div",56)(112,"h3",57),o(113,"i",58),i(114," Learn More "),t(),e(115,"div",59)(116,"a",60),o(117,"i",61),i(118,"Documentation "),t(),e(119,"a",60),o(120,"i",62),i(121,"Video Tutorial "),t(),e(122,"a",60),o(123,"i",63),i(124,"GitHub Examples "),t()()()()()()),a&2&&(m(62),g(l.violationCode),m(5),g(l.solutionCode),m(20),x("options",l.animalTypes),T("ngModel",l.animalType),m(5),T("ngModel",l.animalName),m(),x("disabled",!l.animalName().trim()),m(),u(l.animals().length>0?94:-1))},dependencies:[P,B,$,j,V,z,F,U,G,K,H,R,W,I,O,L,Q,J,q],styles:["[_nghost-%COMP%]{display:block;width:100%}"]})};export{X as PolymorphismDemoComponent};
