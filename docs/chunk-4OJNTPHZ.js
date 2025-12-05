import{a as B,b as V}from"./chunk-WMH24HSC.js";import"./chunk-BNU3XHMI.js";import"./chunk-ZNZEMCYO.js";import{e as A,i as M,p as L}from"./chunk-5TVMUKYR.js";import{b as j}from"./chunk-VHQBVC6O.js";import{a as P,b as R,c as W,d as D,e as I,f as N,g as H}from"./chunk-AH7MQ5KM.js";import"./chunk-K33OWSJ3.js";import"./chunk-UB7WHAP5.js";import{p as q,q as T}from"./chunk-47HPTYDK.js";import{p as C}from"./chunk-FHCI6K3X.js";import"./chunk-FPPZ4BUR.js";import{$b as h,Hb as S,Ma as o,Xb as i,Yb as w,Zb as m,ab as _,ac as g,bc as b,nb as f,ob as v,tb as p,ub as t,va as u,vb as e,wb as a}from"./chunk-S2MQBBOY.js";import"./chunk-6HR7AMTL.js";function F(d,r){if(d&1&&(t(0,"div",53)(1,"div",74)(2,"p")(3,"strong"),i(4,"Rectangle Area:"),e(),i(5),e(),t(6,"p")(7,"strong"),i(8,"Square Initial Area:"),e(),i(9),e(),t(10,"p")(11,"strong"),i(12,"Square After setWidth/setHeight:"),e(),i(13),e(),t(14,"p")(15,"strong"),i(16,"Violation Detected:"),e(),i(17),e()()()),d&2){let n=r;o(5),m(" ",n.rectangleArea),o(4),m(" ",n.squareAreaInitial),o(4),m(" ",n.squareAreaAfter),o(4),m(" ",n.violation?"Yes - Square cannot substitute Rectangle":"No")}}function K(d,r){if(d&1&&(t(0,"div",58)(1,"div",75)(2,"p")(3,"strong"),i(4,"Rectangle Area:"),e(),i(5),e(),t(6,"p")(7,"strong"),i(8,"Rectangle Perimeter:"),e(),i(9),e(),t(10,"p")(11,"strong"),i(12,"Square Area:"),e(),i(13),e(),t(14,"p")(15,"strong"),i(16,"Square Perimeter:"),e(),i(17),e(),t(18,"p")(19,"strong"),i(20,"Total Area:"),e(),i(21),e()()()),d&2){let n=r;o(5),m(" ",n.rectangleArea),o(4),m(" ",n.rectanglePerimeter),o(4),m(" ",n.squareArea),o(4),m(" ",n.squarePerimeter),o(4),m(" ",n.totalArea)}}var x=class{constructor(r,n){this.width=r;this.height=n}area(){return this.width*this.height}perimeter(){return 2*(this.width+this.height)}},y=class extends x{constructor(r){super(r,r)}setWidth(r){this.width=r,this.height=r}setHeight(r){this.width=r,this.height=r}},E=class{constructor(r,n){this.width=r;this.height=n}area(){return this.width*this.height}perimeter(){return 2*(this.width+this.height)}},k=class{constructor(r){this.side=r}area(){return this.side*this.side}perimeter(){return 4*this.side}},O=class d{rectangleWidth=u(10);rectangleHeight=u(5);squareSide=u(5);violationCode=`
// \u274C VIOLATION: Liskov Substitution Principle
// Square cannot be substituted for Rectangle without breaking behavior

class Rectangle {
  constructor(public width: number, public height: number) {}
  
  area(): number {
    return this.width * this.height;
  }
  
  setWidth(width: number): void {
    this.width = width;
  }
  
  setHeight(height: number): void {
    this.height = height;
  }
}

class Square extends Rectangle {
  constructor(side: number) {
    super(side, side);
  }
  
  // Problem: This violates the contract!
  setWidth(width: number): void {
    this.width = width;
    this.height = width; // Changes both dimensions
  }
  
  setHeight(height: number): void {
    this.width = height;
    this.height = height; // Changes both dimensions
  }
}

// This function expects Rectangle behavior
function testRectangle(rect: Rectangle): void {
  const areaBefore = rect.area();
  rect.setWidth(10);
  rect.setHeight(5);
  const areaAfter = rect.area();
  // This will fail with Square!
  // Expected: 50, but Square gives: 25
}
`;solutionCode=`
// \u2705 SOLUTION: Liskov Substitution Principle
// Subtypes must be substitutable for their base types

interface Shape {
  area(): number;
  perimeter(): number;
}

class Rectangle implements Shape {
  constructor(public width: number, public height: number) {}
  
  area(): number {
    return this.width * this.height;
  }
  
  perimeter(): number {
    return 2 * (this.width + this.height);
  }
}

class Square implements Shape {
  constructor(public side: number) {}
  
  area(): number {
    return this.side * this.side;
  }
  
  perimeter(): number {
    return 4 * this.side;
  }
}

// Both can be used interchangeably where Shape is expected
function calculateTotalArea(shapes: Shape[]): number {
  return shapes.reduce((sum, shape) => sum + shape.area(), 0);
}

// Square and Rectangle can be substituted without issues
const shapes: Shape[] = [
  new Rectangle(10, 5),
  new Square(5)
];
const totalArea = calculateTotalArea(shapes);
`;testViolation(){let r=new x(this.rectangleWidth(),this.rectangleHeight()),n=new y(this.squareSide()),l=r.area(),c=n.area();n.setWidth(10),n.setHeight(5);let s=n.area();this.violationResult.set({rectangleArea:l,squareAreaInitial:c,squareAreaAfter:s,violation:s!==50})}testSolution(){let r=new E(this.rectangleWidth(),this.rectangleHeight()),n=new k(this.squareSide());this.solutionResult.set({rectangleArea:r.area(),rectanglePerimeter:r.perimeter(),squareArea:n.area(),squarePerimeter:n.perimeter(),totalArea:r.area()+n.area()})}violationResult=u(null);solutionResult=u(null);runViolationTest(){this.testViolation()}runSolutionTest(){this.testSolution()}static \u0275fac=function(n){return new(n||d)};static \u0275cmp=_({type:d,selectors:[["app-lsp-demo"]],decls:147,vars:16,consts:[[1,"container-responsive","space-y-responsive"],[1,"card-modern","padding-responsive","hover-lift","slide-in-up"],[1,"flex","flex-col","lg:flex-row","lg:items-center","lg:justify-between","gap-6"],[1,"flex-1"],[1,"flex","items-center","gap-3","mb-4"],[1,"w-12","h-12","sm:w-14","sm:h-14","rounded-xl","bg-gradient-to-br","from-orange-500","to-red-600","flex","items-center","justify-center","shadow-lg"],[1,"fas","fa-exchange-alt","text-white","text-xl","sm:text-2xl"],[1,"badge-modern","text-xs","sm:text-sm"],[1,"heading-responsive","text-gradient","mb-4"],[1,"text-responsive","text-gray-700","dark:text-gray-300"],[1,"hidden","lg:block"],[1,"w-32","h-32","rounded-2xl","bg-gradient-to-br","from-orange-500/20","to-red-600/20","flex","items-center","justify-center"],[1,"fas","fa-exchange-alt","text-6xl","text-orange-500"],[1,"card-modern","hover-lift","slide-in-up"],[1,"padding-responsive","space-y-6"],[1,"w-10","h-10","rounded-lg","bg-gradient-to-br","from-blue-500","to-purple-600","flex","items-center","justify-center"],[1,"fas","fa-lightbulb","text-white"],[1,"subheading-responsive","text-gray-900","dark:text-gray-100"],[1,"text-responsive","text-gray-700","dark:text-gray-300","leading-relaxed"],[1,"glass","rounded-xl","p-6","border-l-4","border-accent"],[1,"fas","fa-star","text-accent","text-xl"],[1,"text-lg","sm:text-xl","font-semibold","text-gray-900","dark:text-gray-100"],[1,"list-modern"],[1,"text-sm","sm:text-base","text-gray-800","dark:text-gray-200"],[1,"padding-responsive"],[1,"flex","items-center","gap-3","mb-6"],[1,"w-10","h-10","rounded-lg","bg-gradient-to-br","from-green-500","to-teal-600","flex","items-center","justify-center"],[1,"fas","fa-code","text-white"],["value","0"],[1,"flex","flex-wrap","gap-2","mb-6"],["value","0",1,"flex","items-center","gap-2"],[1,"fas","fa-times-circle","text-red-500"],[1,"text-sm","sm:text-base","font-semibold"],["value","1",1,"flex","items-center","gap-2"],[1,"fas","fa-check-circle","text-green-500"],[1,"code-block-modern"],[1,"overflow-x-auto","text-sm","sm:text-base"],["value","1"],[1,"w-10","h-10","rounded-lg","bg-gradient-to-br","from-purple-500","to-pink-600","flex","items-center","justify-center"],[1,"fas","fa-play-circle","text-white"],[1,"text-responsive","text-gray-700","dark:text-gray-300","mb-8"],[1,"space-y-6"],[1,"glass","rounded-xl","p-6","border-l-4","border-red-500"],[1,"fas","fa-times-circle","text-red-500","text-xl"],[1,"text-lg","sm:text-xl","font-semibold","text-red-800","dark:text-red-200"],[1,"grid","grid-cols-1","sm:grid-cols-2","lg:grid-cols-3","gap-4","lg:gap-6","mb-4"],[1,"space-y-2"],[1,"block","text-sm","font-semibold","text-gray-700","dark:text-gray-300"],[1,"fas","fa-ruler-horizontal","text-accent","mr-2"],[1,"w-full",3,"ngModelChange","ngModel","min","max","showButtons"],[1,"fas","fa-ruler-vertical","text-accent","mr-2"],[1,"fas","fa-square","text-accent","mr-2"],["label","Test Violation","icon","pi pi-exclamation-triangle","severity","danger",1,"btn-modern",3,"click"],[1,"mt-4","glass","rounded-lg","p-5","border","border-red-200","dark:border-red-800","fade-in"],[1,"glass","rounded-xl","p-6","border-l-4","border-green-500"],[1,"fas","fa-check-circle","text-green-500","text-xl"],[1,"text-lg","sm:text-xl","font-semibold","text-green-800","dark:text-green-200"],["label","Test Solution","icon","pi pi-check","severity","success",1,"btn-modern",3,"click"],[1,"mt-4","glass","rounded-lg","p-5","border","border-green-200","dark:border-green-800","fade-in"],[1,"w-10","h-10","rounded-lg","bg-gradient-to-br","from-teal-500","to-cyan-600","flex","items-center","justify-center"],[1,"fas","fa-graduation-cap","text-white"],[1,"mt-8","pt-6","border-t","border-gray-200","dark:border-gray-700"],[1,"text-lg","font-semibold","text-gray-900","dark:text-gray-100","mb-4","flex","items-center","gap-2"],[1,"fas","fa-book-open","text-accent"],[1,"flex","flex-wrap","gap-3"],["href","#",1,"badge-outline","hover:scale-105","transition-transform"],[1,"fas","fa-external-link-alt","mr-2"],[1,"fas","fa-video","mr-2"],[1,"fas","fa-code-branch","mr-2"],[1,"flex","flex-col","sm:flex-row","gap-4","justify-between","items-stretch","sm:items-center","fade-in"],[1,"glass","padding-responsive-sm","rounded-xl","hover-lift","flex","items-center","justify-center","gap-3","group"],[1,"fas","fa-arrow-left","text-accent","group-hover:-translate-x-1","transition-transform"],[1,"font-semibold","text-gray-900","dark:text-gray-100"],[1,"fas","fa-arrow-right","text-accent","group-hover:translate-x-1","transition-transform"],[1,"space-y-2","text-sm","sm:text-base","text-red-800","dark:text-red-200"],[1,"space-y-2","text-sm","sm:text-base","text-green-800","dark:text-green-200"]],template:function(n,l){if(n&1&&(t(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5),a(6,"i",6),e(),t(7,"div")(8,"span",7),i(9,"SOLID Principles"),e()()(),t(10,"h1",8),i(11," Liskov Substitution Principle "),e(),t(12,"p",9),i(13," Objects of a superclass should be replaceable with objects of its subclasses without breaking the application. "),e()(),t(14,"div",10)(15,"div",11),a(16,"i",12),e()()()(),t(17,"p-card",13)(18,"div",14)(19,"div",4)(20,"div",15),a(21,"i",16),e(),t(22,"h2",17),i(23,"What is LSP?"),e()(),t(24,"p",18),i(25," The Liskov Substitution Principle states that derived classes must be substitutable for their base classes. This means that any code that works with a base class should also work with any of its derived classes without modification. The derived class should not change the expected behavior of the base class. "),e(),t(26,"div",19)(27,"div",4),a(28,"i",20),t(29,"h3",21),i(30,"Key Benefits"),e()(),t(31,"ul",22)(32,"li",23),i(33," Ensures proper inheritance relationships "),e(),t(34,"li",23),i(35," Prevents unexpected behavior in polymorphic code "),e(),t(36,"li",23),i(37," Makes code more predictable and reliable "),e(),t(38,"li",23),i(39," Enables safe use of polymorphism "),e()()()()(),t(40,"p-card",13)(41,"div",24)(42,"div",25)(43,"div",26),a(44,"i",27),e(),t(45,"h2",17),i(46,"Code Examples"),e()(),t(47,"p-tabs",28)(48,"p-tablist",29)(49,"p-tab",30),a(50,"i",31),t(51,"span",32),i(52,"Violation"),e()(),t(53,"p-tab",33),a(54,"i",34),t(55,"span",32),i(56,"Solution"),e()()(),t(57,"p-tabpanels")(58,"p-tabpanel",28)(59,"div",35)(60,"pre",36)(61,"code"),i(62),e()()()(),t(63,"p-tabpanel",37)(64,"div",35)(65,"pre",36)(66,"code"),i(67),e()()()()()()()(),t(68,"p-card",13)(69,"div",24)(70,"div",4)(71,"div",38),a(72,"i",39),e(),t(73,"h2",17),i(74,"Interactive Demo"),e()(),t(75,"p",40),i(76," Test the violation and solution with different shape dimensions. "),e(),t(77,"div",41)(78,"div",42)(79,"div",4),a(80,"i",43),t(81,"h3",44),i(82,"Violation Example"),e()(),t(83,"div",45)(84,"div",46)(85,"label",47),a(86,"i",48),i(87,"Rectangle Width "),e(),t(88,"p-inputNumber",49),b("ngModelChange",function(s){return g(l.rectangleWidth,s)||(l.rectangleWidth=s),s}),e()(),t(89,"div",46)(90,"label",47),a(91,"i",50),i(92,"Rectangle Height "),e(),t(93,"p-inputNumber",49),b("ngModelChange",function(s){return g(l.rectangleHeight,s)||(l.rectangleHeight=s),s}),e()(),t(94,"div",46)(95,"label",47),a(96,"i",51),i(97,"Square Side "),e(),t(98,"p-inputNumber",49),b("ngModelChange",function(s){return g(l.squareSide,s)||(l.squareSide=s),s}),e()()(),t(99,"p-button",52),S("click",function(){return l.runViolationTest()}),e(),f(100,F,18,4,"div",53),e(),t(101,"div",54)(102,"div",4),a(103,"i",55),t(104,"h3",56),i(105,"Solution Example"),e()(),t(106,"p-button",57),S("click",function(){return l.runSolutionTest()}),e(),f(107,K,22,5,"div",58),e()()()(),t(108,"p-card",13)(109,"div",24)(110,"div",25)(111,"div",59),a(112,"i",60),e(),t(113,"h2",17),i(114,"Key Takeaways"),e()(),t(115,"ul",22)(116,"li",23),i(117," Subtypes must honor the contract of their base types "),e(),t(118,"li",23),i(119," Don't override methods in a way that changes expected behavior "),e(),t(120,"li",23),i(121," Use composition over inheritance when LSP cannot be maintained "),e(),t(122,"li",23),i(123," Preconditions cannot be strengthened, postconditions cannot be weakened "),e()(),t(124,"div",61)(125,"h3",62),a(126,"i",63),i(127," Learn More "),e(),t(128,"div",64)(129,"a",65),a(130,"i",66),i(131,"Documentation "),e(),t(132,"a",65),a(133,"i",67),i(134,"Video Tutorial "),e(),t(135,"a",65),a(136,"i",68),i(137,"GitHub Examples "),e()()()()(),t(138,"div",69)(139,"button",70),a(140,"i",71),t(141,"span",72),i(142,"Previous: Open/Closed"),e()(),t(143,"button",70)(144,"span",72),i(145,"Next: Interface Segregation"),e(),a(146,"i",73),e()()()),n&2){let c,s;o(62),w(l.violationCode),o(5),w(l.solutionCode),o(21),h("ngModel",l.rectangleWidth),p("min",1)("max",100)("showButtons",!0),o(5),h("ngModel",l.rectangleHeight),p("min",1)("max",100)("showButtons",!0),o(5),h("ngModel",l.squareSide),p("min",1)("max",100)("showButtons",!0),o(2),v((c=l.violationResult())?100:-1,c),o(7),v((s=l.solutionResult())?107:-1,s)}},dependencies:[C,L,A,M,R,P,H,D,W,I,N,T,q,V,B,j],styles:["[_nghost-%COMP%]{display:block;width:100%}"]})};export{O as LspDemoComponent};
