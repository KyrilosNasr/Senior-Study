import{a as J,b as Q}from"./chunk-UUSXUM62.js";import"./chunk-BFEPA36G.js";import"./chunk-2O2BBMCO.js";import{b as $,e as B,i as V,p as j,s as G,t as H}from"./chunk-A7WYH36G.js";import{a as L,b as F,c as O,d as K,e as R,f as U,g as q,h as z}from"./chunk-6IHYB2AV.js";import"./chunk-IMEODX4F.js";import"./chunk-PRB5TZSC.js";import{p as I,q as W}from"./chunk-H3I524XT.js";import{p as P}from"./chunk-EFMPFDS6.js";import"./chunk-4IVXAVEU.js";import{Ab as t,Bb as e,Cb as N,Jb as w,Nb as b,Ob as p,Sa as r,ac as i,bc as c,cc as C,ec as E,fc as T,ga as v,gb as M,gc as A,ha as _,pa as d,tb as g,ub as u,wb as D,xb as S,yb as k,zb as y}from"./chunk-ANFRTOHF.js";import"./chunk-6HR7AMTL.js";var f=class{name;constructor(n){this.name=n}makeSound(){return`${this.name} says: Woof! Woof!`}move(){return`${this.name} is running`}},h=class{name;constructor(n){this.name=n}makeSound(){return`${this.name} says: Meow! Meow!`}move(){return`${this.name} is walking gracefully`}},x=class{name;constructor(n){this.name=n}makeSound(){return`${this.name} says: Tweet! Tweet!`}move(){return`${this.name} is flying`}};var Y=(o,n)=>n.makeSound();function Z(o,n){if(o&1){let a=w();t(0,"div",34),b("click",function(){let s=v(a).$implicit,m=p(2);return _(m.selectAnimal(s))}),t(1,"p",35),i(2),e()()}if(o&2){let a=n.$implicit;r(2),c(a.makeSound())}}function ee(o,n){if(o&1&&(t(0,"div",31)(1,"h4",36),i(2,"Selected Animal:"),e(),t(3,"p",37)(4,"strong"),i(5,"Sound:"),e(),i(6),N(7,"br"),t(8,"strong"),i(9,"Movement:"),e(),i(10),e()()),o&2){let a=n;r(6),C(" ",a.makeSound()),r(4),C(" ",a.move()," ")}}function te(o,n){if(o&1&&(t(0,"p",40),i(1),e()),o&2){let a=n.$implicit;r(),c(a)}}function ie(o,n){if(o&1&&(t(0,"div",33)(1,"h4",38),i(2,"All Animals Interacting:"),e(),t(3,"div",39),S(4,te,2,1,"p",40,D),e()()),o&2){let a=p(2);r(4),k(a.allInteractions())}}function ne(o,n){if(o&1){let a=w();t(0,"div",24)(1,"h3",28),i(2,"Created Animals"),e(),t(3,"div",29),S(4,Z,3,1,"div",30,Y),e(),g(6,ee,11,2,"div",31),t(7,"p-button",32),b("click",function(){v(a);let s=p();return _(s.interactWithAll())}),e(),g(8,ie,6,0,"div",33),e()}if(o&2){let a,l=p();r(4),k(l.animals()),r(2),u((a=l.selectedAnimal())?6:-1,a),r(),y("disabled",l.animals().length===0),r(),u(l.allInteractions().length>0?8:-1)}}var X=class o{animalType=d("dog");animalName=d("");animals=d([]);selectedAnimal=d(null);violationCode=`
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
`;animalTypes=[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"},{label:"Bird",value:"bird"}];createAnimal(){if(!this.animalName().trim())return;let n;switch(this.animalType()){case"dog":n=new f(this.animalName());break;case"cat":n=new h(this.animalName());break;case"bird":n=new x(this.animalName());break;default:return}this.animals.update(a=>[...a,n]),this.selectedAnimal.set(n),this.animalName.set("")}selectAnimal(n){this.selectedAnimal.set(n)}allInteractions=d([]);interactWithAll(){let n=this.animals().flatMap(a=>[a.makeSound(),a.move()]);this.allInteractions.set(n)}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=M({type:o,selectors:[["app-polymorphism-demo"]],decls:84,vars:7,consts:[[1,"max-w-7xl","mx-auto","space-y-6"],[1,"bg-white","dark:bg-gray-800","rounded-lg","shadow-md","p-6"],[1,"text-3xl","font-bold","text-gray-800","dark:text-gray-200","mb-2"],[1,"text-gray-600","dark:text-gray-400"],[1,"shadow-md"],[1,"space-y-4"],[1,"text-2xl","font-semibold","text-gray-800","dark:text-gray-200"],[1,"text-gray-700","dark:text-gray-300"],[1,"bg-yellow-50","dark:bg-yellow-900/20","p-4","rounded-lg"],[1,"font-semibold","text-yellow-900","dark:text-yellow-200","mb-2"],[1,"list-disc","list-inside","space-y-1","text-yellow-800","dark:text-yellow-300"],["value","0"],["value","1"],[1,"bg-gray-900","text-gray-100","p-4","rounded-lg","overflow-x-auto","text-sm"],[1,"text-2xl","font-semibold","text-gray-800","dark:text-gray-200","mb-4"],[1,"text-gray-700","dark:text-gray-300","mb-6"],[1,"space-y-6"],[1,"border-2","border-gray-200","dark:border-gray-700","rounded-lg","p-4"],[1,"text-lg","font-semibold","text-gray-800","dark:text-gray-200","mb-4"],[1,"grid","grid-cols-1","md:grid-cols-2","gap-4","mb-4"],[1,"block","text-sm","font-medium","text-gray-700","dark:text-gray-300","mb-2"],["optionLabel","label","optionValue","value",1,"w-full",3,"ngModelChange","options","ngModel"],["pInputText","","type","text","placeholder","Buddy",1,"w-full",3,"ngModelChange","ngModel"],["label","Create Animal","icon","pi pi-plus",3,"click","disabled"],[1,"border-2","border-green-200","dark:border-green-800","rounded-lg","p-4"],[1,"space-y-2","text-gray-700","dark:text-gray-300"],[1,"flex","items-start"],[1,"text-green-500","mr-2"],[1,"text-lg","font-semibold","text-green-800","dark:text-green-200","mb-4"],[1,"space-y-2","mb-4"],[1,"p-3","bg-gray-100","dark:bg-gray-700","rounded","cursor-pointer","hover:bg-gray-200","dark:hover:bg-gray-600"],[1,"p-4","bg-blue-50","dark:bg-blue-900/20","rounded-lg","mb-4"],["label","Interact with All Animals","icon","pi pi-play",1,"w-full",3,"click","disabled"],[1,"mt-4","p-4","bg-purple-50","dark:bg-purple-900/20","rounded-lg"],[1,"p-3","bg-gray-100","dark:bg-gray-700","rounded","cursor-pointer","hover:bg-gray-200","dark:hover:bg-gray-600",3,"click"],[1,"text-sm","text-gray-800","dark:text-gray-200"],[1,"font-semibold","text-blue-900","dark:text-blue-200","mb-2"],[1,"text-sm","text-blue-800","dark:text-blue-300"],[1,"font-semibold","text-purple-900","dark:text-purple-200","mb-2"],[1,"space-y-1"],[1,"text-sm","text-purple-800","dark:text-purple-300"]],template:function(a,l){a&1&&(t(0,"div",0)(1,"div",1)(2,"h1",2),i(3,"Polymorphism"),e(),t(4,"p",3),i(5," The ability of objects of different types to be accessed through the same interface, with each type providing its own implementation. "),e()(),t(6,"p-card",4)(7,"div",5)(8,"h2",6),i(9,"What is Polymorphism?"),e(),t(10,"p",7),i(11," Polymorphism allows objects of different classes to be treated as objects of a common base class or interface. The same method call can produce different behaviors depending on the actual object type. This enables code to work with objects at a higher level of abstraction. "),e(),t(12,"div",8)(13,"h3",9),i(14,"Key Benefits:"),e(),t(15,"ul",10)(16,"li"),i(17,"Code reusability and flexibility"),e(),t(18,"li"),i(19,"Easier to extend with new types"),e(),t(20,"li"),i(21,"Simplifies complex code"),e(),t(22,"li"),i(23,"Enables runtime method resolution"),e()()()()(),t(24,"p-card",4)(25,"p-tabs",11)(26,"p-tablist")(27,"p-tab",11),i(28,"\u274C Violation"),e(),t(29,"p-tab",12),i(30,"\u2705 Solution"),e()(),t(31,"p-tabpanels")(32,"p-tabpanel",11)(33,"pre",13)(34,"code"),i(35),e()()(),t(36,"p-tabpanel",12)(37,"pre",13)(38,"code"),i(39),e()()()()()(),t(40,"p-card",4)(41,"h2",14),i(42,"Live Demo"),e(),t(43,"p",15),i(44," Create different animals and see how they all respond to the same method calls (makeSound, move) but with different behaviors. This demonstrates polymorphism in action. "),e(),t(45,"div",16)(46,"div",17)(47,"h3",18),i(48,"Create Animal"),e(),t(49,"div",19)(50,"div")(51,"label",20),i(52,"Animal Type"),e(),t(53,"p-select",21),A("ngModelChange",function(m){return T(l.animalType,m)||(l.animalType=m),m}),e()(),t(54,"div")(55,"label",20),i(56,"Animal Name"),e(),t(57,"input",22),A("ngModelChange",function(m){return T(l.animalName,m)||(l.animalName=m),m}),e()()(),t(58,"p-button",23),b("click",function(){return l.createAnimal()}),e()(),g(59,ne,9,3,"div",24),e()(),t(60,"p-card",4)(61,"h2",14),i(62,"Key Takeaways"),e(),t(63,"ul",25)(64,"li",26)(65,"span",27),i(66,"\u2713"),e(),t(67,"span"),i(68,"Same interface, different implementations"),e()(),t(69,"li",26)(70,"span",27),i(71,"\u2713"),e(),t(72,"span"),i(73,"Runtime method resolution based on actual object type"),e()(),t(74,"li",26)(75,"span",27),i(76,"\u2713"),e(),t(77,"span"),i(78,"Enables code to work with objects at a higher level of abstraction"),e()(),t(79,"li",26)(80,"span",27),i(81,"\u2713"),e(),t(82,"span"),i(83,"Makes code more flexible and easier to extend"),e()()()()()),a&2&&(r(35),c(l.violationCode),r(4),c(l.solutionCode),r(14),y("options",l.animalTypes),E("ngModel",l.animalType),r(4),E("ngModel",l.animalName),r(),y("disabled",!l.animalName().trim()),r(),u(l.animals().length>0?59:-1))},dependencies:[P,j,$,B,V,F,L,q,K,O,R,U,W,I,H,G,Q,J,z],styles:["[_nghost-%COMP%]{display:block;width:100%}"]})};export{X as PolymorphismDemoComponent};
