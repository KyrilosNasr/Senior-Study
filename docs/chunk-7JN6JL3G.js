import{a as J,b as Q}from"./chunk-S3FC6JI5.js";import"./chunk-ILIYAXGI.js";import{a as R,b as X}from"./chunk-337FFFQO.js";import"./chunk-CDZS2EA5.js";import{b as B,d as z,e as P,f as L,h as G,i as H}from"./chunk-CZ2XDEQV.js";import{a as O,b as A,c as F,d as U,e as K,f as Y,g as j,h as q}from"./chunk-ASZDYMUJ.js";import{q as $,r as W}from"./chunk-FAB6L2O4.js";import"./chunk-PRB5TZSC.js";import{p as N}from"./chunk-FNU46F6K.js";import{Cb as k,Db as c,Ia as d,Rb as i,Sb as v,Tb as f,Vb as p,Wb as g,Xb as h,Ya as I,Z as x,_ as C,ga as m,jb as b,kb as y,mb as D,nb as V,ob as u,pb as t,qb as e,rb as T,yb as _}from"./chunk-AMIIRL3Q.js";var S=class{brand;model;year;constructor(a,n,r){this.brand=a,this.model=n,this.year=r}getInfo(){return`${this.year} ${this.brand} ${this.model}`}},w=class extends S{doors;constructor(a,n,r,s){super(a,n,r),this.doors=s}start(){return`Starting ${this.brand} ${this.model} car with ${this.doors} doors`}stop(){return`Stopping ${this.brand} ${this.model} car`}getDoors(){return this.doors}},E=class extends S{engineSize;constructor(a,n,r,s){super(a,n,r),this.engineSize=s}start(){return`Starting ${this.brand} ${this.model} motorcycle with ${this.engineSize}cc engine`}stop(){return`Stopping ${this.brand} ${this.model} motorcycle`}getEngineSize(){return this.engineSize}},M=class extends S{cargoCapacity;constructor(a,n,r,s){super(a,n,r),this.cargoCapacity=s}start(){return`Starting ${this.brand} ${this.model} truck with ${this.cargoCapacity}kg capacity`}stop(){return`Stopping ${this.brand} ${this.model} truck`}getCargoCapacity(){return this.cargoCapacity}};var ee=(l,a)=>a.getInfo();function te(l,a){if(l&1){let n=_();t(0,"div")(1,"label",20),i(2,"Doors"),e(),t(3,"p-inputNumber",24),h("ngModelChange",function(s){x(n);let o=c();return g(o.doors,s)||(o.doors=s),C(s)}),e()()}if(l&2){let n=c();d(3),p("ngModel",n.doors),u("min",2)("max",6)("showButtons",!0)}}function ie(l,a){if(l&1){let n=_();t(0,"div")(1,"label",20),i(2,"Engine Size (cc)"),e(),t(3,"p-inputNumber",24),h("ngModelChange",function(s){x(n);let o=c();return g(o.engineSize,s)||(o.engineSize=s),C(s)}),e()()}if(l&2){let n=c();d(3),p("ngModel",n.engineSize),u("min",50)("max",2e3)("showButtons",!0)}}function ne(l,a){if(l&1){let n=_();t(0,"div")(1,"label",20),i(2,"Cargo Capacity (kg)"),e(),t(3,"p-inputNumber",24),h("ngModelChange",function(s){x(n);let o=c();return g(o.cargoCapacity,s)||(o.cargoCapacity=s),C(s)}),e()()}if(l&2){let n=c();d(3),p("ngModel",n.cargoCapacity),u("min",100)("max",5e4)("showButtons",!0)}}function re(l,a){if(l&1){let n=_();t(0,"div",34),k("click",function(){let s=x(n).$implicit,o=c(2);return C(o.selectVehicle(s))}),t(1,"p",35),i(2),e()()}if(l&2){let n=a.$implicit;d(2),v(n.getInfo())}}function ae(l,a){if(l&1&&(t(0,"div",33)(1,"h4",36),i(2,"Selected Vehicle:"),e(),t(3,"p",37)(4,"strong"),i(5,"Info:"),e(),i(6),T(7,"br"),t(8,"strong"),i(9,"Start:"),e(),i(10),T(11,"br"),t(12,"strong"),i(13,"Stop:"),e(),i(14),e()()),l&2){let n=a;d(6),f(" ",n.getInfo()),d(4),f(" ",n.start()),d(4),f(" ",n.stop()," ")}}function oe(l,a){if(l&1&&(t(0,"div",26)(1,"h3",30),i(2,"Created Vehicles"),e(),t(3,"div",31),D(4,re,3,1,"div",32,ee),e(),b(6,ae,15,3,"div",33),e()),l&2){let n,r=c();d(4),V(r.vehicles()),d(2),y((n=r.selectedVehicle())?6:-1,n)}}var Z=class l{vehicleType=m("car");brand=m("");model=m("");year=m(2024);doors=m(4);engineSize=m(600);cargoCapacity=m(1e3);vehicles=m([]);selectedVehicle=m(null);violationCode=`
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
`;vehicleTypes=[{label:"Car",value:"car"},{label:"Motorcycle",value:"motorcycle"},{label:"Truck",value:"truck"}];createVehicle(){if(!this.brand().trim()||!this.model().trim())return;let a;switch(this.vehicleType()){case"car":a=new w(this.brand(),this.model(),this.year(),this.doors());break;case"motorcycle":a=new E(this.brand(),this.model(),this.year(),this.engineSize());break;case"truck":a=new M(this.brand(),this.model(),this.year(),this.cargoCapacity());break;default:return}this.vehicles.update(n=>[...n,a]),this.selectedVehicle.set(a),this.brand.set(""),this.model.set("")}selectVehicle(a){this.selectedVehicle.set(a)}static \u0275fac=function(n){return new(n||l)};static \u0275cmp=I({type:l,selectors:[["app-inheritance-demo"]],decls:95,vars:15,consts:[[1,"max-w-7xl","mx-auto","space-y-6"],[1,"bg-white","dark:bg-gray-800","rounded-lg","shadow-md","p-6"],[1,"text-3xl","font-bold","text-gray-800","dark:text-gray-200","mb-2"],[1,"text-gray-600","dark:text-gray-400"],[1,"shadow-md"],[1,"space-y-4"],[1,"text-2xl","font-semibold","text-gray-800","dark:text-gray-200"],[1,"text-gray-700","dark:text-gray-300"],[1,"bg-purple-50","dark:bg-purple-900/20","p-4","rounded-lg"],[1,"font-semibold","text-purple-900","dark:text-purple-200","mb-2"],[1,"list-disc","list-inside","space-y-1","text-purple-800","dark:text-purple-300"],["value","0"],["value","1"],[1,"bg-gray-900","text-gray-100","p-4","rounded-lg","overflow-x-auto","text-sm"],[1,"text-2xl","font-semibold","text-gray-800","dark:text-gray-200","mb-4"],[1,"text-gray-700","dark:text-gray-300","mb-6"],[1,"space-y-6"],[1,"border-2","border-gray-200","dark:border-gray-700","rounded-lg","p-4"],[1,"text-lg","font-semibold","text-gray-800","dark:text-gray-200","mb-4"],[1,"grid","grid-cols-1","md:grid-cols-2","gap-4","mb-4"],[1,"block","text-sm","font-medium","text-gray-700","dark:text-gray-300","mb-2"],["optionLabel","label","optionValue","value",1,"w-full",3,"ngModelChange","options","ngModel"],["pInputText","","type","text","placeholder","Toyota",1,"w-full",3,"ngModelChange","ngModel"],["pInputText","","type","text","placeholder","Camry",1,"w-full",3,"ngModelChange","ngModel"],[1,"w-full",3,"ngModelChange","ngModel","min","max","showButtons"],["label","Create Vehicle","icon","pi pi-plus",3,"click","disabled"],[1,"border-2","border-green-200","dark:border-green-800","rounded-lg","p-4"],[1,"space-y-2","text-gray-700","dark:text-gray-300"],[1,"flex","items-start"],[1,"text-green-500","mr-2"],[1,"text-lg","font-semibold","text-green-800","dark:text-green-200","mb-4"],[1,"space-y-2","mb-4"],[1,"p-3","bg-gray-100","dark:bg-gray-700","rounded","cursor-pointer","hover:bg-gray-200","dark:hover:bg-gray-600"],[1,"p-4","bg-blue-50","dark:bg-blue-900/20","rounded-lg"],[1,"p-3","bg-gray-100","dark:bg-gray-700","rounded","cursor-pointer","hover:bg-gray-200","dark:hover:bg-gray-600",3,"click"],[1,"text-sm","text-gray-800","dark:text-gray-200"],[1,"font-semibold","text-blue-900","dark:text-blue-200","mb-2"],[1,"text-sm","text-blue-800","dark:text-blue-300","mb-2"]],template:function(n,r){n&1&&(t(0,"div",0)(1,"div",1)(2,"h1",2),i(3,"Inheritance"),e(),t(4,"p",3),i(5," A mechanism where a new class is derived from an existing class, inheriting its properties and methods. "),e()(),t(6,"p-card",4)(7,"div",5)(8,"h2",6),i(9,"What is Inheritance?"),e(),t(10,"p",7),i(11,` Inheritance allows a class (child/subclass) to inherit properties and methods from another class (parent/superclass). This promotes code reuse and establishes an "is-a" relationship. The child class can extend or override the parent's functionality while maintaining the base structure. `),e(),t(12,"div",8)(13,"h3",9),i(14,"Key Benefits:"),e(),t(15,"ul",10)(16,"li"),i(17,"Code reuse and reduction of duplication"),e(),t(18,"li"),i(19,"Establishes hierarchical relationships"),e(),t(20,"li"),i(21,"Easier maintenance and updates"),e(),t(22,"li"),i(23,"Polymorphism support"),e()()()()(),t(24,"p-card",4)(25,"p-tabs",11)(26,"p-tablist")(27,"p-tab",11),i(28,"\u274C Violation"),e(),t(29,"p-tab",12),i(30,"\u2705 Solution"),e()(),t(31,"p-tabpanels")(32,"p-tabpanel",11)(33,"pre",13)(34,"code"),i(35),e()()(),t(36,"p-tabpanel",12)(37,"pre",13)(38,"code"),i(39),e()()()()()(),t(40,"p-card",4)(41,"h2",14),i(42,"Live Demo"),e(),t(43,"p",15),i(44," Create different types of vehicles. Notice how they all inherit common properties (brand, model, year) from the Vehicle base class, but each has its own specific characteristics. "),e(),t(45,"div",16)(46,"div",17)(47,"h3",18),i(48,"Create Vehicle"),e(),t(49,"div",19)(50,"div")(51,"label",20),i(52,"Vehicle Type"),e(),t(53,"p-select",21),h("ngModelChange",function(o){return g(r.vehicleType,o)||(r.vehicleType=o),o}),e()(),t(54,"div")(55,"label",20),i(56,"Brand"),e(),t(57,"input",22),h("ngModelChange",function(o){return g(r.brand,o)||(r.brand=o),o}),e()(),t(58,"div")(59,"label",20),i(60,"Model"),e(),t(61,"input",23),h("ngModelChange",function(o){return g(r.model,o)||(r.model=o),o}),e()(),t(62,"div")(63,"label",20),i(64,"Year"),e(),t(65,"p-inputNumber",24),h("ngModelChange",function(o){return g(r.year,o)||(r.year=o),o}),e()(),b(66,te,4,4,"div"),b(67,ie,4,4,"div"),b(68,ne,4,4,"div"),e(),t(69,"p-button",25),k("click",function(){return r.createVehicle()}),e()(),b(70,oe,7,1,"div",26),e()(),t(71,"p-card",4)(72,"h2",14),i(73,"Key Takeaways"),e(),t(74,"ul",27)(75,"li",28)(76,"span",29),i(77,"\u2713"),e(),t(78,"span"),i(79,'Use inheritance to establish "is-a" relationships'),e()(),t(80,"li",28)(81,"span",29),i(82,"\u2713"),e(),t(83,"span"),i(84,"Child classes inherit properties and methods from parent classes"),e()(),t(85,"li",28)(86,"span",29),i(87,"\u2713"),e(),t(88,"span"),i(89,"Use abstract classes for base classes that shouldn't be instantiated"),e()(),t(90,"li",28)(91,"span",29),i(92,"\u2713"),e(),t(93,"span"),i(94,"Override methods in child classes to provide specific implementations"),e()()()()()),n&2&&(d(35),v(r.violationCode),d(4),v(r.solutionCode),d(14),u("options",r.vehicleTypes),p("ngModel",r.vehicleType),d(4),p("ngModel",r.brand),d(4),p("ngModel",r.model),d(4),p("ngModel",r.year),u("min",1900)("max",2024)("showButtons",!0),d(),y(r.vehicleType()==="car"?66:-1),d(),y(r.vehicleType()==="motorcycle"?67:-1),d(),y(r.vehicleType()==="truck"?68:-1),d(),u("disabled",!r.brand().trim()||!r.model().trim()),d(),y(r.vehicles().length>0?70:-1))},dependencies:[N,L,B,z,P,A,O,j,U,F,K,Y,W,$,H,G,X,R,Q,J,q],styles:["[_nghost-%COMP%]{display:block;width:100%}"]})};export{Z as InheritanceDemoComponent};
