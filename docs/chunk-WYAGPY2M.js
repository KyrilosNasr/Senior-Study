import{d as q,e as J}from"./chunk-75V6H3CD.js";import"./chunk-TDA3B4WK.js";import"./chunk-3DC6BNIH.js";import{a as Q,b as R}from"./chunk-3OAHOTHL.js";import"./chunk-4EDUVNSX.js";import"./chunk-U257Q7EF.js";import{b as W,e as z,i as B,s as P,v as L,w as O}from"./chunk-DEDY34HR.js";import{e as $}from"./chunk-JXT2X624.js";import"./chunk-FCYNDV26.js";import"./chunk-WEH2CWNU.js";import"./chunk-NGL2KP4B.js";import{a as F,b as U,c as K,d as G,e as H,f as Y}from"./chunk-QULNL4D5.js";import"./chunk-4DGHZC6K.js";import{a as j,b as A}from"./chunk-DTTSOEG2.js";import"./chunk-QVFIZX54.js";import"./chunk-4O3FVBGX.js";import"./chunk-7XHGMHQI.js";import"./chunk-CX3Q4OJ4.js";import{r as N}from"./chunk-M52WRTAU.js";import"./chunk-FPPZ4BUR.js";import{Db as x,Eb as f,Hb as D,Ib as V,Jb as b,Kb as t,Lb as e,Mb as s,Tb as C,Xb as T,Za as m,Zb as p,lc as i,ma as y,mc as _,na as v,nb as I,nc as w,pc as g,qc as h,rc as u,va as c}from"./chunk-3ITXA53T.js";import"./chunk-6HR7AMTL.js";var S=class{brand;model;year;constructor(a,n,r){this.brand=a,this.model=n,this.year=r}getInfo(){return`${this.year} ${this.brand} ${this.model}`}},E=class extends S{doors;constructor(a,n,r,d){super(a,n,r),this.doors=d}start(){return`Starting ${this.brand} ${this.model} car with ${this.doors} doors`}stop(){return`Stopping ${this.brand} ${this.model} car`}getDoors(){return this.doors}},M=class extends S{engineSize;constructor(a,n,r,d){super(a,n,r),this.engineSize=d}start(){return`Starting ${this.brand} ${this.model} motorcycle with ${this.engineSize}cc engine`}stop(){return`Stopping ${this.brand} ${this.model} motorcycle`}getEngineSize(){return this.engineSize}},k=class extends S{cargoCapacity;constructor(a,n,r,d){super(a,n,r),this.cargoCapacity=d}start(){return`Starting ${this.brand} ${this.model} truck with ${this.cargoCapacity}kg capacity`}stop(){return`Stopping ${this.brand} ${this.model} truck`}getCargoCapacity(){return this.cargoCapacity}};var Z=(l,a)=>a.getInfo();function ee(l,a){if(l&1){let n=C();t(0,"div",45)(1,"label",46),s(2,"i",68),i(3,"Doors "),e(),t(4,"p-inputNumber",54),u("ngModelChange",function(d){y(n);let o=p();return h(o.doors,d)||(o.doors=d),v(d)}),e()()}if(l&2){let n=p();m(4),g("ngModel",n.doors),b("min",2)("max",6)("showButtons",!0)}}function te(l,a){if(l&1){let n=C();t(0,"div",45)(1,"label",46),s(2,"i",69),i(3,"Engine Size (cc) "),e(),t(4,"p-inputNumber",54),u("ngModelChange",function(d){y(n);let o=p();return h(o.engineSize,d)||(o.engineSize=d),v(d)}),e()()}if(l&2){let n=p();m(4),g("ngModel",n.engineSize),b("min",50)("max",2e3)("showButtons",!0)}}function ie(l,a){if(l&1){let n=C();t(0,"div",45)(1,"label",46),s(2,"i",70),i(3,"Cargo Capacity (kg) "),e(),t(4,"p-inputNumber",54),u("ngModelChange",function(d){y(n);let o=p();return h(o.cargoCapacity,d)||(o.cargoCapacity=d),v(d)}),e()()}if(l&2){let n=p();m(4),g("ngModel",n.cargoCapacity),b("min",100)("max",5e4)("showButtons",!0)}}function ne(l,a){if(l&1){let n=C();t(0,"div",76),T("click",function(){let d=y(n).$implicit,o=p(2);return v(o.selectVehicle(d))}),t(1,"p",77),i(2),e()()}if(l&2){let n=a.$implicit;m(2),_(n.getInfo())}}function re(l,a){if(l&1&&(t(0,"div",75)(1,"h4",78),s(2,"i",79),i(3," Selected Vehicle "),e(),t(4,"div",80)(5,"p")(6,"strong",81),i(7,"Info:"),e(),i(8),e(),t(9,"p")(10,"strong",81),i(11,"Start:"),e(),i(12),e(),t(13,"p")(14,"strong",81),i(15,"Stop:"),e(),i(16),e()()()),l&2){let n=a;m(8),w(" ",n.getInfo()),m(4),w(" ",n.start()),m(4),w(" ",n.stop())}}function ae(l,a){if(l&1&&(t(0,"div",57)(1,"h3",71),s(2,"i",72),i(3," Created Vehicles "),e(),t(4,"div",73),D(5,ne,3,1,"div",74,Z),e(),x(7,re,17,3,"div",75),e()),l&2){let n,r=p();m(5),V(r.vehicles()),m(2),f((n=r.selectedVehicle())?7:-1,n)}}var X=class l{vehicleType=c("car");brand=c("");model=c("");year=c(2024);doors=c(4);engineSize=c(600);cargoCapacity=c(1e3);vehicles=c([]);selectedVehicle=c(null);violationCode=`
// \u274C VIOLATION: No Inheritance
// Code duplication and no code reuse

class Car {
  brand: string;
  model: string;
  year: number;
  doors: number;

  start(): string {
    return \`Starting \${this.brand} \${this.model} car\`;
  }

  stop(): string {
    return \`Stopping \${this.brand} \${this.model} car\`;
  }
}

class Motorcycle {
  brand: string;  // Duplicated
  model: string;   // Duplicated
  year: number;    // Duplicated
  engineSize: number;

  start(): string {
    return \`Starting \${this.brand} \${this.model} motorcycle\`;
  }

  stop(): string {
    return \`Stopping \${this.brand} \${this.model} motorcycle\`;
  }
}

// Problem: Code duplication, harder to maintain
`;solutionCode=`
// \u2705 SOLUTION: Inheritance
// Base class with common properties and methods

abstract class Vehicle {
  protected brand: string;
  protected model: string;
  protected year: number;

  constructor(brand: string, model: string, year: number) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  // Common method - shared by all vehicles
  getInfo(): string {
    return \`\${this.year} \${this.brand} \${this.model}\`;
  }

  // Abstract methods - must be implemented by subclasses
  abstract start(): string;
  abstract stop(): string;
}

// Derived classes inherit common properties and methods
class Car extends Vehicle {
  private doors: number;

  constructor(brand: string, model: string, year: number, doors: number) {
    super(brand, model, year);  // Call parent constructor
    this.doors = doors;
  }

  // Override abstract methods
  start(): string {
    return \`Starting \${this.brand} \${this.model} car with \${this.doors} doors\`;
  }

  stop(): string {
    return \`Stopping \${this.brand} \${this.model} car\`;
  }
}

class Motorcycle extends Vehicle {
  private engineSize: number;

  constructor(brand: string, model: string, year: number, engineSize: number) {
    super(brand, model, year);
    this.engineSize = engineSize;
  }

  start(): string {
    return \`Starting \${this.brand} \${this.model} motorcycle\`;
  }

  stop(): string {
    return \`Stopping \${this.brand} \${this.model} motorcycle\`;
  }
}

// Benefits:
// - Code reuse
// - Consistent interface
// - Easier to maintain
`;vehicleTypes=[{label:"Car",value:"car"},{label:"Motorcycle",value:"motorcycle"},{label:"Truck",value:"truck"}];createVehicle(){if(!this.brand().trim()||!this.model().trim())return;let a;switch(this.vehicleType()){case"car":a=new E(this.brand(),this.model(),this.year(),this.doors());break;case"motorcycle":a=new M(this.brand(),this.model(),this.year(),this.engineSize());break;case"truck":a=new k(this.brand(),this.model(),this.year(),this.cargoCapacity());break;default:return}this.vehicles.update(n=>[...n,a]),this.selectedVehicle.set(a),this.brand.set(""),this.model.set("")}selectVehicle(a){this.selectedVehicle.set(a)}static \u0275fac=function(n){return new(n||l)};static \u0275cmp=I({type:l,selectors:[["app-inheritance-demo"]],decls:141,vars:15,consts:[[1,"container-responsive","space-y-responsive"],[1,"card-modern","padding-responsive","hover-lift","slide-in-up"],[1,"flex","flex-col","lg:flex-row","lg:items-center","lg:justify-between","gap-6"],[1,"flex-1"],[1,"flex","items-center","gap-3","mb-4"],[1,"w-12","h-12","sm:w-14","sm:h-14","rounded-xl","bg-gradient-to-br","from-purple-500","to-pink-600","flex","items-center","justify-center","shadow-lg"],[1,"fas","fa-sitemap","text-white","text-xl","sm:text-2xl"],[1,"badge-modern","text-xs","sm:text-sm"],[1,"heading-responsive","text-gradient","mb-4"],[1,"text-responsive","text-gray-700","dark:text-gray-300"],[1,"hidden","lg:block"],[1,"w-32","h-32","rounded-2xl","bg-gradient-to-br","from-purple-500/20","to-pink-600/20","flex","items-center","justify-center"],[1,"fas","fa-code-branch","text-6xl","text-purple-500"],[1,"card-modern","hover-lift","slide-in-up"],[1,"padding-responsive","space-y-6"],[1,"w-10","h-10","rounded-lg","bg-gradient-to-br","from-purple-500","to-pink-600","flex","items-center","justify-center"],[1,"fas","fa-lightbulb","text-white"],[1,"subheading-responsive","text-gray-900","dark:text-gray-100"],[1,"text-responsive","text-gray-700","dark:text-gray-300","leading-relaxed"],[1,"glass","rounded-xl","p-6","border-l-4","border-accent"],[1,"fas","fa-star","text-accent","text-xl"],[1,"text-lg","sm:text-xl","font-semibold","text-gray-900","dark:text-gray-100"],[1,"list-modern"],[1,"text-sm","sm:text-base","text-gray-800","dark:text-gray-200"],[1,"padding-responsive"],[1,"flex","items-center","gap-3","mb-6"],[1,"w-10","h-10","rounded-lg","bg-gradient-to-br","from-green-500","to-teal-600","flex","items-center","justify-center"],[1,"fas","fa-code","text-white"],["value","0"],[1,"flex","flex-wrap","gap-2","mb-6"],["value","0",1,"flex","items-center","gap-2"],[1,"fas","fa-times-circle","text-red-500"],[1,"text-sm","sm:text-base","font-semibold"],["value","1",1,"flex","items-center","gap-2"],[1,"fas","fa-check-circle","text-green-500"],[1,"code-block-modern"],[1,"overflow-x-auto","text-sm","sm:text-base"],["value","1"],[1,"fas","fa-play-circle","text-white"],[1,"text-responsive","text-gray-700","dark:text-gray-300","mb-8"],[1,"space-y-6"],[1,"glass","rounded-xl","p-6","border","border-gray-200","dark:border-gray-700"],[1,"text-lg","sm:text-xl","font-semibold","text-gray-800","dark:text-gray-200","mb-4","flex","items-center","gap-2"],[1,"fas","fa-car","text-accent"],[1,"grid","grid-cols-1","sm:grid-cols-2","gap-4","lg:gap-6","mb-4"],[1,"space-y-2"],[1,"block","text-sm","font-semibold","text-gray-700","dark:text-gray-300"],[1,"fas","fa-list","text-accent","mr-2"],["optionLabel","label","optionValue","value",1,"w-full",3,"ngModelChange","options","ngModel"],[1,"fas","fa-tag","text-accent","mr-2"],["pInputText","","type","text","placeholder","Toyota",1,"input-modern",3,"ngModelChange","ngModel"],[1,"fas","fa-car-side","text-accent","mr-2"],["pInputText","","type","text","placeholder","Camry",1,"input-modern",3,"ngModelChange","ngModel"],[1,"fas","fa-calendar","text-accent","mr-2"],[1,"w-full",3,"ngModelChange","ngModel","min","max","showButtons"],[1,"btn-modern","px-8","py-4","rounded-xl","font-semibold","text-base","sm:text-lg","flex","items-center","justify-center","gap-3","shadow-lg","hover:shadow-xl","transition-all","duration-300","hover:scale-105","active:scale-100","disabled:opacity-50","disabled:cursor-not-allowed","disabled:hover:scale-100",3,"click","disabled"],["aria-hidden","true",1,"fas","fa-plus-circle","text-lg","sm:text-xl"],[1,"glass","rounded-xl","p-6","border-l-4","border-green-500"],[1,"w-10","h-10","rounded-lg","bg-gradient-to-br","from-teal-500","to-cyan-600","flex","items-center","justify-center"],[1,"fas","fa-graduation-cap","text-white"],[1,"mt-8","pt-6","border-t","border-gray-200","dark:border-gray-700"],[1,"text-lg","font-semibold","text-gray-900","dark:text-gray-100","mb-4","flex","items-center","gap-2"],[1,"fas","fa-book-open","text-accent"],[1,"flex","flex-wrap","gap-3"],["href","#",1,"badge-outline","hover:scale-105","transition-transform"],[1,"fas","fa-external-link-alt","mr-2"],[1,"fas","fa-video","mr-2"],[1,"fas","fa-code-branch","mr-2"],[1,"fas","fa-door-open","text-accent","mr-2"],[1,"fas","fa-cog","text-accent","mr-2"],[1,"fas","fa-weight","text-accent","mr-2"],[1,"text-lg","sm:text-xl","font-semibold","text-green-800","dark:text-green-200","mb-4","flex","items-center","gap-2"],[1,"fas","fa-list","text-green-500"],[1,"space-y-2","mb-4"],[1,"p-4","bg-gradient-to-r","from-gray-50","to-gray-100","dark:from-gray-800","dark:to-gray-700","rounded-lg","cursor-pointer","hover:scale-[1.02]","transition-transform","border","border-gray-200","dark:border-gray-600"],[1,"p-6","bg-gradient-to-r","from-blue-50","to-indigo-50","dark:from-blue-900/20","dark:to-indigo-900/20","rounded-lg","border","border-blue-200","dark:border-blue-800"],[1,"p-4","bg-gradient-to-r","from-gray-50","to-gray-100","dark:from-gray-800","dark:to-gray-700","rounded-lg","cursor-pointer","hover:scale-[1.02]","transition-transform","border","border-gray-200","dark:border-gray-600",3,"click"],[1,"text-sm","sm:text-base","text-gray-800","dark:text-gray-200","font-medium"],[1,"text-lg","font-semibold","text-blue-900","dark:text-blue-100","mb-4","flex","items-center","gap-2"],[1,"fas","fa-info-circle","text-blue-500"],[1,"space-y-2","text-sm","sm:text-base","text-blue-800","dark:text-blue-300"],[1,"font-semibold"]],template:function(n,r){n&1&&(t(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5),s(6,"i",6),e(),t(7,"div")(8,"span",7),i(9,"OOP Concepts"),e()()(),t(10,"h1",8),i(11," Inheritance "),e(),t(12,"p",9),i(13," A mechanism where a new class is derived from an existing class, inheriting its properties and methods. "),e()(),t(14,"div",10)(15,"div",11),s(16,"i",12),e()()()(),t(17,"p-card",13)(18,"div",14)(19,"div",4)(20,"div",15),s(21,"i",16),e(),t(22,"h2",17),i(23,"What is Inheritance?"),e()(),t(24,"p",18),i(25,` Inheritance allows a class (child/subclass) to inherit properties and methods from another class (parent/superclass). This promotes code reuse and establishes an "is-a" relationship. The child class can extend or override the parent's functionality while maintaining the base structure. `),e(),t(26,"div",19)(27,"div",4),s(28,"i",20),t(29,"h3",21),i(30,"Key Benefits"),e()(),t(31,"ul",22)(32,"li",23),i(33," Code reuse and reduction of duplication "),e(),t(34,"li",23),i(35," Establishes hierarchical relationships "),e(),t(36,"li",23),i(37," Easier maintenance and updates "),e(),t(38,"li",23),i(39," Polymorphism support "),e()()()()(),t(40,"p-card",13)(41,"div",24)(42,"div",25)(43,"div",26),s(44,"i",27),e(),t(45,"h2",17),i(46,"Code Examples"),e()(),t(47,"p-tabs",28)(48,"p-tablist",29)(49,"p-tab",30),s(50,"i",31),t(51,"span",32),i(52,"Violation"),e()(),t(53,"p-tab",33),s(54,"i",34),t(55,"span",32),i(56,"Solution"),e()()(),t(57,"p-tabpanels")(58,"p-tabpanel",28)(59,"div",35)(60,"pre",36)(61,"code"),i(62),e()()()(),t(63,"p-tabpanel",37)(64,"div",35)(65,"pre",36)(66,"code"),i(67),e()()()()()()()(),t(68,"p-card",13)(69,"div",24)(70,"div",4)(71,"div",15),s(72,"i",38),e(),t(73,"h2",17),i(74,"Interactive Demo"),e()(),t(75,"p",39),i(76," Create different types of vehicles. Notice how they all inherit common properties (brand, model, year) from the Vehicle base class, but each has its own specific characteristics. "),e(),t(77,"div",40)(78,"div",41)(79,"h3",42),s(80,"i",43),i(81," Create Vehicle "),e(),t(82,"div",44)(83,"div",45)(84,"label",46),s(85,"i",47),i(86,"Vehicle Type "),e(),t(87,"p-select",48),u("ngModelChange",function(o){return h(r.vehicleType,o)||(r.vehicleType=o),o}),e()(),t(88,"div",45)(89,"label",46),s(90,"i",49),i(91,"Brand "),e(),t(92,"input",50),u("ngModelChange",function(o){return h(r.brand,o)||(r.brand=o),o}),e()(),t(93,"div",45)(94,"label",46),s(95,"i",51),i(96,"Model "),e(),t(97,"input",52),u("ngModelChange",function(o){return h(r.model,o)||(r.model=o),o}),e()(),t(98,"div",45)(99,"label",46),s(100,"i",53),i(101,"Year "),e(),t(102,"p-inputNumber",54),u("ngModelChange",function(o){return h(r.year,o)||(r.year=o),o}),e()(),x(103,ee,5,4,"div",45),x(104,te,5,4,"div",45),x(105,ie,5,4,"div",45),e(),t(106,"button",55),T("click",function(){return r.createVehicle()}),s(107,"i",56),t(108,"span"),i(109,"Create Vehicle"),e()()(),x(110,ae,8,1,"div",57),e()()(),t(111,"p-card",13)(112,"div",24)(113,"div",25)(114,"div",58),s(115,"i",59),e(),t(116,"h2",17),i(117,"Key Takeaways"),e()(),t(118,"ul",22)(119,"li",23),i(120,' Use inheritance to establish "is-a" relationships '),e(),t(121,"li",23),i(122," Child classes inherit properties and methods from parent classes "),e(),t(123,"li",23),i(124," Use abstract classes for base classes that shouldn't be instantiated "),e(),t(125,"li",23),i(126," Override methods in child classes to provide specific implementations "),e()(),t(127,"div",60)(128,"h3",61),s(129,"i",62),i(130," Learn More "),e(),t(131,"div",63)(132,"a",64),s(133,"i",65),i(134,"Documentation "),e(),t(135,"a",64),s(136,"i",66),i(137,"Video Tutorial "),e(),t(138,"a",64),s(139,"i",67),i(140,"GitHub Examples "),e()()()()()()),n&2&&(m(62),_(r.violationCode),m(5),_(r.solutionCode),m(20),b("options",r.vehicleTypes),g("ngModel",r.vehicleType),m(5),g("ngModel",r.brand),m(5),g("ngModel",r.model),m(5),g("ngModel",r.year),b("min",1900)("max",2024)("showButtons",!0),m(),f(r.vehicleType()==="car"?103:-1),m(),f(r.vehicleType()==="motorcycle"?104:-1),m(),f(r.vehicleType()==="truck"?105:-1),m(),b("disabled",!r.brand().trim()||!r.model().trim()),m(4),f(r.vehicles().length>0?110:-1))},dependencies:[N,P,W,z,B,A,j,H,U,F,K,G,$,O,L,R,Q,J,q,Y],styles:["[_nghost-%COMP%]{display:block;width:100%}"]})};export{X as InheritanceDemoComponent};
