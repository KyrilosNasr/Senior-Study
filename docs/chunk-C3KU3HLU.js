import{a as G,b as H}from"./chunk-S2OXY7KE.js";import"./chunk-ZCBYKFSK.js";import{a as z,b as J}from"./chunk-WMH24HSC.js";import"./chunk-BNU3XHMI.js";import"./chunk-ZNZEMCYO.js";import{e as N,i as R,p as j}from"./chunk-5TVMUKYR.js";import{b as K}from"./chunk-VHQBVC6O.js";import{a as W,b as B,c as L,d as U,e as A,f as F,g as V}from"./chunk-AH7MQ5KM.js";import"./chunk-K33OWSJ3.js";import"./chunk-UB7WHAP5.js";import{p as I,q}from"./chunk-47HPTYDK.js";import{n as _,p as k}from"./chunk-FHCI6K3X.js";import"./chunk-FPPZ4BUR.js";import{a as D,b as O,c as T}from"./chunk-7AA6AAH6.js";import{$b as f,Hb as S,Ma as s,Xb as n,Yb as u,Zb as y,_b as w,ab as v,ac as g,bc as x,dc as b,fc as E,ic as C,kc as M,nb as h,ob as P,tb as p,ub as e,va as c,vb as t,wb as i}from"./chunk-S2MQBBOY.js";import"./chunk-6HR7AMTL.js";var X=()=>({label:"USD",value:"USD"}),Y=()=>({label:"EUR",value:"EUR"}),Z=(m,l)=>[m,l];function $(m,l){if(m&1&&(e(0,"div",52)(1,"div",4),i(2,"i",68),e(3,"h3",69),n(4," Payment Result "),t()(),e(5,"div",70)(6,"p")(7,"strong"),n(8,"ID:"),t(),n(9),t(),e(10,"p")(11,"strong"),n(12,"Amount:"),t(),n(13),t(),e(14,"p")(15,"strong"),n(16,"Status:"),t(),e(17,"span",71),n(18),t()(),e(19,"p")(20,"strong"),n(21,"Timestamp:"),t(),n(22),C(23,"date"),t()()()),m&2){let r=l;s(9),y(" ",r.id),s(4),w(" ",r.amount," ",r.currency),s(5),u(r.status),s(4),y(" ",M(23,5,r.timestamp,"short"))}}var Q=class m{paymentMethods=[{label:"Credit Card",value:"creditcard"},{label:"PayPal",value:"paypal"},{label:"Crypto",value:"crypto"}];selectedMethod=c("creditcard");amount=c(100);currency=c("USD");paymentResult=c(null);processors=new Map([["creditcard",new D],["paypal",new O],["crypto",new T]]);violationCode=`
// \u274C VIOLATION: Open/Closed Principle
// Adding new payment methods requires modifying existing code

export class PaymentService {
  processPayment(method: string, amount: number): Payment {
    if (method === 'creditcard') {
      // Credit card processing logic
      return { id: 'cc_1', amount, status: 'completed' };
    } else if (method === 'paypal') {
      // PayPal processing logic
      return { id: 'pp_1', amount, status: 'completed' };
    }
    // Need to modify this class to add new methods!
    throw new Error('Unsupported payment method');
  }
}

// To add crypto payments, we must modify PaymentService
// This violates OCP - open for extension, closed for modification
`;solutionCode=`
// \u2705 SOLUTION: Open/Closed Principle
// Open for extension, closed for modification

// Define interface/abstraction
export interface PaymentProcessor {
  processPayment(request: PaymentRequest): Payment;
}

// Implementations - can add new ones without modifying existing code
@Injectable()
export class CreditCardProcessorService implements PaymentProcessor {
  processPayment(request: PaymentRequest): Payment {
    // Credit card specific logic
    return { id: 'cc_1', ...request, status: 'completed' };
  }
}

@Injectable()
export class PayPalProcessorService implements PaymentProcessor {
  processPayment(request: PaymentRequest): Payment {
    // PayPal specific logic
    return { id: 'pp_1', ...request, status: 'completed' };
  }
}

// NEW: Add crypto without modifying existing code
@Injectable()
export class CryptoProcessorService implements PaymentProcessor {
  processPayment(request: PaymentRequest): Payment {
    // Crypto specific logic
    return { id: 'crypto_1', ...request, status: 'completed' };
  }
}

// Payment service uses abstraction - no changes needed
export class PaymentService {
  constructor(private processor: PaymentProcessor) {}

  processPayment(request: PaymentRequest): Payment {
    return this.processor.processPayment(request);
  }
}
`;processPayment(){let l=this.processors.get(this.selectedMethod());if(l){let r={amount:this.amount(),currency:this.currency()},a=l.processPayment(r);this.paymentResult.set(a)}}static \u0275fac=function(r){return new(r||m)};static \u0275cmp=v({type:m,selectors:[["app-ocp-demo"]],decls:136,vars:16,consts:[[1,"container-responsive","space-y-responsive"],[1,"card-modern","padding-responsive","hover-lift","slide-in-up"],[1,"flex","flex-col","lg:flex-row","lg:items-center","lg:justify-between","gap-6"],[1,"flex-1"],[1,"flex","items-center","gap-3","mb-4"],[1,"w-12","h-12","sm:w-14","sm:h-14","rounded-xl","bg-gradient-to-br","from-orange-500","to-red-600","flex","items-center","justify-center","shadow-lg"],[1,"fas","fa-door-open","text-white","text-xl","sm:text-2xl"],[1,"badge-modern","text-xs","sm:text-sm"],[1,"heading-responsive","text-gradient","mb-4"],[1,"text-responsive","text-gray-700","dark:text-gray-300"],[1,"hidden","lg:block"],[1,"w-32","h-32","rounded-2xl","bg-gradient-to-br","from-orange-500/20","to-red-600/20","flex","items-center","justify-center"],[1,"fas","fa-door-open","text-6xl","text-orange-500"],[1,"card-modern","hover-lift","slide-in-up"],[1,"padding-responsive","space-y-6"],[1,"w-10","h-10","rounded-lg","bg-gradient-to-br","from-blue-500","to-purple-600","flex","items-center","justify-center"],[1,"fas","fa-lightbulb","text-white"],[1,"subheading-responsive","text-gray-900","dark:text-gray-100"],[1,"text-responsive","text-gray-700","dark:text-gray-300","leading-relaxed"],[1,"glass","rounded-xl","p-6","border-l-4","border-accent"],[1,"fas","fa-star","text-accent","text-xl"],[1,"text-lg","sm:text-xl","font-semibold","text-gray-900","dark:text-gray-100"],[1,"list-modern"],[1,"text-sm","sm:text-base","text-gray-800","dark:text-gray-200"],[1,"padding-responsive"],[1,"flex","items-center","gap-3","mb-6"],[1,"w-10","h-10","rounded-lg","bg-gradient-to-br","from-green-500","to-teal-600","flex","items-center","justify-center"],[1,"fas","fa-code","text-white"],["value","0"],[1,"flex","flex-wrap","gap-2","mb-6"],["value","0",1,"flex","items-center","gap-2"],[1,"fas","fa-times-circle","text-red-500"],[1,"text-sm","sm:text-base","font-semibold"],["value","1",1,"flex","items-center","gap-2"],[1,"fas","fa-check-circle","text-green-500"],[1,"code-block-modern"],[1,"overflow-x-auto","text-sm","sm:text-base"],["value","1"],[1,"w-10","h-10","rounded-lg","bg-gradient-to-br","from-purple-500","to-pink-600","flex","items-center","justify-center"],[1,"fas","fa-play-circle","text-white"],[1,"text-responsive","text-gray-700","dark:text-gray-300","mb-8"],[1,"space-y-6"],[1,"grid","grid-cols-1","sm:grid-cols-2","lg:grid-cols-3","gap-4","lg:gap-6"],[1,"space-y-2"],[1,"block","text-sm","font-semibold","text-gray-700","dark:text-gray-300"],[1,"fas","fa-credit-card","text-accent","mr-2"],["optionLabel","label","optionValue","value",1,"w-full",3,"ngModelChange","options","ngModel"],[1,"fas","fa-dollar-sign","text-accent","mr-2"],["mode","decimal",1,"w-full",3,"ngModelChange","ngModel","min","max","showButtons"],[1,"fas","fa-money-bill","text-accent","mr-2"],[1,"flex","flex-col","sm:flex-row","gap-4","items-stretch","sm:items-center"],["label","Process Payment","icon","pi pi-check",1,"btn-modern","flex-1","sm:flex-initial",3,"click"],[1,"glass","rounded-lg","p-6","fade-in","border","border-gray-200","dark:border-gray-700"],[1,"w-10","h-10","rounded-lg","bg-gradient-to-br","from-teal-500","to-cyan-600","flex","items-center","justify-center"],[1,"fas","fa-graduation-cap","text-white"],[1,"mt-8","pt-6","border-t","border-gray-200","dark:border-gray-700"],[1,"text-lg","font-semibold","text-gray-900","dark:text-gray-100","mb-4","flex","items-center","gap-2"],[1,"fas","fa-book-open","text-accent"],[1,"flex","flex-wrap","gap-3"],["href","#",1,"badge-outline","hover:scale-105","transition-transform"],[1,"fas","fa-external-link-alt","mr-2"],[1,"fas","fa-video","mr-2"],[1,"fas","fa-code-branch","mr-2"],[1,"flex","flex-col","sm:flex-row","gap-4","justify-between","items-stretch","sm:items-center","fade-in"],[1,"glass","padding-responsive-sm","rounded-xl","hover-lift","flex","items-center","justify-center","gap-3","group"],[1,"fas","fa-arrow-left","text-accent","group-hover:-translate-x-1","transition-transform"],[1,"font-semibold","text-gray-900","dark:text-gray-100"],[1,"fas","fa-arrow-right","text-accent","group-hover:translate-x-1","transition-transform"],[1,"fas","fa-receipt","text-accent","text-xl"],[1,"text-lg","sm:text-xl","font-semibold","text-gray-800","dark:text-gray-200"],[1,"space-y-2","text-sm","sm:text-base","text-gray-700","dark:text-gray-300"],[1,"text-green-600","dark:text-green-400"]],template:function(r,a){if(r&1&&(e(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5),i(6,"i",6),t(),e(7,"div")(8,"span",7),n(9,"SOLID Principles"),t()()(),e(10,"h1",8),n(11," Open/Closed Principle "),t(),e(12,"p",9),n(13," Software entities should be open for extension but closed for modification. "),t()(),e(14,"div",10)(15,"div",11),i(16,"i",12),t()()()(),e(17,"p-card",13)(18,"div",14)(19,"div",4)(20,"div",15),i(21,"i",16),t(),e(22,"h2",17),n(23,"What is OCP?"),t()(),e(24,"p",18),n(25," The Open/Closed Principle states that classes should be open for extension but closed for modification. This means you should be able to add new functionality without changing existing code. This is typically achieved through interfaces, abstract classes, and polymorphism. "),t(),e(26,"div",19)(27,"div",4),i(28,"i",20),e(29,"h3",21),n(30,"Key Benefits"),t()(),e(31,"ul",22)(32,"li",23),n(33," Add new features without breaking existing code "),t(),e(34,"li",23),n(35," Reduced risk of introducing bugs "),t(),e(36,"li",23),n(37," Better code stability "),t(),e(38,"li",23),n(39," Easier to maintain and test "),t()()()()(),e(40,"p-card",13)(41,"div",24)(42,"div",25)(43,"div",26),i(44,"i",27),t(),e(45,"h2",17),n(46,"Code Examples"),t()(),e(47,"p-tabs",28)(48,"p-tablist",29)(49,"p-tab",30),i(50,"i",31),e(51,"span",32),n(52,"Violation"),t()(),e(53,"p-tab",33),i(54,"i",34),e(55,"span",32),n(56,"Solution"),t()()(),e(57,"p-tabpanels")(58,"p-tabpanel",28)(59,"div",35)(60,"pre",36)(61,"code"),n(62),t()()()(),e(63,"p-tabpanel",37)(64,"div",35)(65,"pre",36)(66,"code"),n(67),t()()()()()()()(),e(68,"p-card",13)(69,"div",24)(70,"div",4)(71,"div",38),i(72,"i",39),t(),e(73,"h2",17),n(74,"Interactive Demo"),t()(),e(75,"p",40),n(76," Select a payment method and process a payment. New payment methods can be added without modifying existing code. "),t(),e(77,"div",41)(78,"div",42)(79,"div",43)(80,"label",44),i(81,"i",45),n(82,"Payment Method "),t(),e(83,"p-select",46),x("ngModelChange",function(o){return g(a.selectedMethod,o)||(a.selectedMethod=o),o}),t()(),e(84,"div",43)(85,"label",44),i(86,"i",47),n(87,"Amount "),t(),e(88,"p-inputNumber",48),x("ngModelChange",function(o){return g(a.amount,o)||(a.amount=o),o}),t()(),e(89,"div",43)(90,"label",44),i(91,"i",49),n(92,"Currency "),t(),e(93,"p-select",46),x("ngModelChange",function(o){return g(a.currency,o)||(a.currency=o),o}),t()()(),e(94,"div",50)(95,"p-button",51),S("click",function(){return a.processPayment()}),t()(),h(96,$,24,8,"div",52),t()()(),e(97,"p-card",13)(98,"div",24)(99,"div",25)(100,"div",53),i(101,"i",54),t(),e(102,"h2",17),n(103,"Key Takeaways"),t()(),e(104,"ul",22)(105,"li",23),n(106," Use interfaces and abstractions to define contracts "),t(),e(107,"li",23),n(108," Implement new features by adding new classes, not modifying existing ones "),t(),e(109,"li",23),n(110," Strategy pattern is a common way to achieve OCP "),t(),e(111,"li",23),n(112," Makes code more maintainable and extensible "),t()(),e(113,"div",55)(114,"h3",56),i(115,"i",57),n(116," Learn More "),t(),e(117,"div",58)(118,"a",59),i(119,"i",60),n(120,"Documentation "),t(),e(121,"a",59),i(122,"i",61),n(123,"Video Tutorial "),t(),e(124,"a",59),i(125,"i",62),n(126,"GitHub Examples "),t()()()()(),e(127,"div",63)(128,"button",64),i(129,"i",65),e(130,"span",66),n(131,"Previous: Single Responsibility"),t()(),e(132,"button",64)(133,"span",66),n(134,"Next: Liskov Substitution"),t(),i(135,"i",67),t()()()),r&2){let d;s(62),u(a.violationCode),s(5),u(a.solutionCode),s(16),p("options",a.paymentMethods),f("ngModel",a.selectedMethod),s(5),f("ngModel",a.amount),p("min",1)("max",1e4)("showButtons",!0),s(5),p("options",E(13,Z,b(11,X),b(12,Y))),f("ngModel",a.currency),s(3),P((d=a.paymentResult())?96:-1,d)}},dependencies:[k,j,N,R,B,W,V,U,L,A,F,q,I,H,G,J,z,K,_],styles:["[_nghost-%COMP%]{display:block;width:100%}"]})};export{Q as OcpDemoComponent};
