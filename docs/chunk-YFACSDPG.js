import{a as V,b as O}from"./chunk-337FFFQO.js";import"./chunk-CDZS2EA5.js";import{d as A,e as M,f as L}from"./chunk-CZ2XDEQV.js";import{b as B}from"./chunk-B476GZ7J.js";import{a as R,b as W,c as P,d as D,e as I,f as N,g as H}from"./chunk-ASZDYMUJ.js";import{q,r as T}from"./chunk-FAB6L2O4.js";import"./chunk-PRB5TZSC.js";import{p as C}from"./chunk-FNU46F6K.js";import{Cb as f,Ia as s,Rb as t,Sb as w,Tb as d,Vb as c,Wb as g,Xb as b,Ya as k,ga as p,jb as S,kb as v,ob as h,pb as i,qb as e,rb as u}from"./chunk-AMIIRL3Q.js";function F(l,r){if(l&1&&(i(0,"div",23)(1,"p",31)(2,"strong"),t(3,"Rectangle Area:"),e(),t(4),u(5,"br"),i(6,"strong"),t(7,"Square Initial Area:"),e(),t(8),u(9,"br"),i(10,"strong"),t(11,"Square After setWidth/setHeight:"),e(),t(12),u(13,"br"),i(14,"strong"),t(15,"Violation Detected:"),e(),t(16),e()()),l&2){let n=r;s(4),d(" ",n.rectangleArea),s(4),d(" ",n.squareAreaInitial),s(4),d(" ",n.squareAreaAfter),s(4),d(" ",n.violation?"Yes - Square cannot substitute Rectangle":"No"," ")}}function K(l,r){if(l&1&&(i(0,"div",27)(1,"p",32)(2,"strong"),t(3,"Rectangle Area:"),e(),t(4),u(5,"br"),i(6,"strong"),t(7,"Rectangle Perimeter:"),e(),t(8),u(9,"br"),i(10,"strong"),t(11,"Square Area:"),e(),t(12),u(13,"br"),i(14,"strong"),t(15,"Square Perimeter:"),e(),t(16),u(17,"br"),i(18,"strong"),t(19,"Total Area:"),e(),t(20),e()()),l&2){let n=r;s(4),d(" ",n.rectangleArea),s(4),d(" ",n.rectanglePerimeter),s(4),d(" ",n.squareArea),s(4),d(" ",n.squarePerimeter),s(4),d(" ",n.totalArea," ")}}var x=class{constructor(r,n){this.width=r;this.height=n}area(){return this.width*this.height}perimeter(){return 2*(this.width+this.height)}},y=class extends x{constructor(r){super(r,r)}setWidth(r){this.width=r,this.height=r}setHeight(r){this.width=r,this.height=r}},E=class{constructor(r,n){this.width=r;this.height=n}area(){return this.width*this.height}perimeter(){return 2*(this.width+this.height)}},_=class{constructor(r){this.side=r}area(){return this.side*this.side}perimeter(){return 4*this.side}},j=class l{rectangleWidth=p(10);rectangleHeight=p(5);squareSide=p(5);violationCode=`
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
`;testViolation(){let r=new x(this.rectangleWidth(),this.rectangleHeight()),n=new y(this.squareSide()),a=r.area(),m=n.area();n.setWidth(10),n.setHeight(5);let o=n.area();this.violationResult.set({rectangleArea:a,squareAreaInitial:m,squareAreaAfter:o,violation:o!==50})}testSolution(){let r=new E(this.rectangleWidth(),this.rectangleHeight()),n=new _(this.squareSide());this.solutionResult.set({rectangleArea:r.area(),rectanglePerimeter:r.perimeter(),squareArea:n.area(),squarePerimeter:n.perimeter(),totalArea:r.area()+n.area()})}violationResult=p(null);solutionResult=p(null);runViolationTest(){this.testViolation()}runSolutionTest(){this.testSolution()}static \u0275fac=function(n){return new(n||l)};static \u0275cmp=k({type:l,selectors:[["app-lsp-demo"]],decls:93,vars:16,consts:[[1,"max-w-7xl","mx-auto","space-y-6"],[1,"bg-white","dark:bg-gray-800","rounded-lg","shadow-md","p-6"],[1,"text-3xl","font-bold","text-gray-800","dark:text-gray-200","mb-2"],[1,"text-gray-600","dark:text-gray-400"],[1,"shadow-md"],[1,"space-y-4"],[1,"text-2xl","font-semibold","text-gray-800","dark:text-gray-200"],[1,"text-gray-700","dark:text-gray-300"],[1,"bg-purple-50","dark:bg-purple-900/20","p-4","rounded-lg"],[1,"font-semibold","text-purple-900","dark:text-purple-200","mb-2"],[1,"list-disc","list-inside","space-y-1","text-purple-800","dark:text-purple-300"],["value","0"],["value","1"],[1,"bg-gray-900","text-gray-100","p-4","rounded-lg","overflow-x-auto","text-sm"],[1,"text-2xl","font-semibold","text-gray-800","dark:text-gray-200","mb-4"],[1,"text-gray-700","dark:text-gray-300","mb-6"],[1,"space-y-6"],[1,"border-2","border-red-200","dark:border-red-800","rounded-lg","p-4"],[1,"text-lg","font-semibold","text-red-800","dark:text-red-200","mb-4"],[1,"grid","grid-cols-1","md:grid-cols-3","gap-4","mb-4"],[1,"block","text-sm","font-medium","text-gray-700","dark:text-gray-300","mb-2"],[1,"w-full",3,"ngModelChange","ngModel","min","max","showButtons"],["label","Test Violation","icon","pi pi-exclamation-triangle","severity","danger",3,"click"],[1,"mt-4","bg-red-50","dark:bg-red-900/20","p-4","rounded"],[1,"border-2","border-green-200","dark:border-green-800","rounded-lg","p-4"],[1,"text-lg","font-semibold","text-green-800","dark:text-green-200","mb-4"],["label","Test Solution","icon","pi pi-check","severity","success",3,"click"],[1,"mt-4","bg-green-50","dark:bg-green-900/20","p-4","rounded"],[1,"space-y-2","text-gray-700","dark:text-gray-300"],[1,"flex","items-start"],[1,"text-green-500","mr-2"],[1,"text-sm","text-red-800","dark:text-red-200"],[1,"text-sm","text-green-800","dark:text-green-200"]],template:function(n,a){if(n&1&&(i(0,"div",0)(1,"div",1)(2,"h1",2),t(3,"Liskov Substitution Principle (LSP)"),e(),i(4,"p",3),t(5," Objects of a superclass should be replaceable with objects of its subclasses without breaking the application. "),e()(),i(6,"p-card",4)(7,"div",5)(8,"h2",6),t(9,"What is LSP?"),e(),i(10,"p",7),t(11," The Liskov Substitution Principle states that derived classes must be substitutable for their base classes. This means that any code that works with a base class should also work with any of its derived classes without modification. The derived class should not change the expected behavior of the base class. "),e(),i(12,"div",8)(13,"h3",9),t(14,"Key Benefits:"),e(),i(15,"ul",10)(16,"li"),t(17,"Ensures proper inheritance relationships"),e(),i(18,"li"),t(19,"Prevents unexpected behavior in polymorphic code"),e(),i(20,"li"),t(21,"Makes code more predictable and reliable"),e(),i(22,"li"),t(23,"Enables safe use of polymorphism"),e()()()()(),i(24,"p-card",4)(25,"p-tabs",11)(26,"p-tablist")(27,"p-tab",11),t(28,"\u274C Violation"),e(),i(29,"p-tab",12),t(30,"\u2705 Solution"),e()(),i(31,"p-tabpanels")(32,"p-tabpanel",11)(33,"pre",13)(34,"code"),t(35),e()()(),i(36,"p-tabpanel",12)(37,"pre",13)(38,"code"),t(39),e()()()()()(),i(40,"p-card",4)(41,"h2",14),t(42,"Live Demo"),e(),i(43,"p",15),t(44," Test the violation and solution with different shape dimensions. "),e(),i(45,"div",16)(46,"div",17)(47,"h3",18),t(48,"\u274C Violation Example"),e(),i(49,"div",19)(50,"div")(51,"label",20),t(52,"Rectangle Width"),e(),i(53,"p-inputNumber",21),b("ngModelChange",function(o){return g(a.rectangleWidth,o)||(a.rectangleWidth=o),o}),e()(),i(54,"div")(55,"label",20),t(56,"Rectangle Height"),e(),i(57,"p-inputNumber",21),b("ngModelChange",function(o){return g(a.rectangleHeight,o)||(a.rectangleHeight=o),o}),e()(),i(58,"div")(59,"label",20),t(60,"Square Side"),e(),i(61,"p-inputNumber",21),b("ngModelChange",function(o){return g(a.squareSide,o)||(a.squareSide=o),o}),e()()(),i(62,"p-button",22),f("click",function(){return a.runViolationTest()}),e(),S(63,F,17,4,"div",23),e(),i(64,"div",24)(65,"h3",25),t(66,"\u2705 Solution Example"),e(),i(67,"p-button",26),f("click",function(){return a.runSolutionTest()}),e(),S(68,K,21,5,"div",27),e()()(),i(69,"p-card",4)(70,"h2",14),t(71,"Key Takeaways"),e(),i(72,"ul",28)(73,"li",29)(74,"span",30),t(75,"\u2713"),e(),i(76,"span"),t(77,"Subtypes must honor the contract of their base types"),e()(),i(78,"li",29)(79,"span",30),t(80,"\u2713"),e(),i(81,"span"),t(82,"Don't override methods in a way that changes expected behavior"),e()(),i(83,"li",29)(84,"span",30),t(85,"\u2713"),e(),i(86,"span"),t(87,"Use composition over inheritance when LSP cannot be maintained"),e()(),i(88,"li",29)(89,"span",30),t(90,"\u2713"),e(),i(91,"span"),t(92,"Preconditions cannot be strengthened, postconditions cannot be weakened"),e()()()()()),n&2){let m,o;s(35),w(a.violationCode),s(4),w(a.solutionCode),s(14),c("ngModel",a.rectangleWidth),h("min",1)("max",100)("showButtons",!0),s(4),c("ngModel",a.rectangleHeight),h("min",1)("max",100)("showButtons",!0),s(4),c("ngModel",a.squareSide),h("min",1)("max",100)("showButtons",!0),s(2),v((m=a.violationResult())?63:-1,m),s(5),v((o=a.solutionResult())?68:-1,o)}},dependencies:[C,L,A,M,W,R,H,D,P,I,N,T,q,O,V,B],styles:["[_nghost-%COMP%]{display:block;width:100%}"]})};export{j as LspDemoComponent};
