import{a as z,b as G}from"./chunk-UUSXUM62.js";import"./chunk-BFEPA36G.js";import{a as H,b as J}from"./chunk-3DPJLBO5.js";import"./chunk-2O2BBMCO.js";import{e as N,i as R,p as W}from"./chunk-A7WYH36G.js";import{b as K}from"./chunk-KJPPBXDO.js";import{a as B,b as L,c as U,d as A,e as F,f as j,g as V}from"./chunk-6IHYB2AV.js";import"./chunk-IMEODX4F.js";import"./chunk-PRB5TZSC.js";import{p as q,q as I}from"./chunk-H3I524XT.js";import{n as _,p as k}from"./chunk-EFMPFDS6.js";import"./chunk-4IVXAVEU.js";import{a as D,b as O,c as T}from"./chunk-YWMIPTKS.js";import{Ab as t,Bb as e,Cb as c,Nb as C,Sa as r,ac as n,bc as f,cc as u,dc as v,ec as y,fc as g,gb as P,gc as x,ic as b,kc as w,nc as E,pa as d,pc as M,tb as h,ub as S,zb as p}from"./chunk-ANFRTOHF.js";import"./chunk-6HR7AMTL.js";var X=()=>({label:"USD",value:"USD"}),Y=()=>({label:"EUR",value:"EUR"}),Z=(m,s)=>[m,s];function $(m,s){if(m&1&&(t(0,"div",21)(1,"h3",25),n(2,"Payment Result:"),e(),t(3,"p",26)(4,"strong"),n(5,"ID:"),e(),n(6),c(7,"br"),t(8,"strong"),n(9,"Amount:"),e(),n(10),c(11,"br"),t(12,"strong"),n(13,"Status:"),e(),n(14),c(15,"br"),t(16,"strong"),n(17,"Timestamp:"),e(),n(18),E(19,"date"),e()()),m&2){let o=s;r(6),u(" ",o.id),r(4),v(" ",o.amount," ",o.currency),r(4),u(" ",o.status),r(4),u(" ",M(19,5,o.timestamp,"short")," ")}}var Q=class m{paymentMethods=[{label:"Credit Card",value:"creditcard"},{label:"PayPal",value:"paypal"},{label:"Crypto",value:"crypto"}];selectedMethod=d("creditcard");amount=d(100);currency=d("USD");paymentResult=d(null);processors=new Map([["creditcard",new D],["paypal",new O],["crypto",new T]]);violationCode=`
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
`;processPayment(){let s=this.processors.get(this.selectedMethod());if(s){let o={amount:this.amount(),currency:this.currency()},i=s.processPayment(o);this.paymentResult.set(i)}}static \u0275fac=function(o){return new(o||m)};static \u0275cmp=P({type:m,selectors:[["app-ocp-demo"]],decls:85,vars:16,consts:[[1,"max-w-7xl","mx-auto","space-y-6"],[1,"bg-white","dark:bg-gray-800","rounded-lg","shadow-md","p-6"],[1,"text-3xl","font-bold","text-gray-800","dark:text-gray-200","mb-2"],[1,"text-gray-600","dark:text-gray-400"],[1,"shadow-md"],[1,"space-y-4"],[1,"text-2xl","font-semibold","text-gray-800","dark:text-gray-200"],[1,"text-gray-700","dark:text-gray-300"],[1,"bg-green-50","dark:bg-green-900/20","p-4","rounded-lg"],[1,"font-semibold","text-green-900","dark:text-green-200","mb-2"],[1,"list-disc","list-inside","space-y-1","text-green-800","dark:text-green-300"],["value","0"],["value","1"],[1,"bg-gray-900","text-gray-100","p-4","rounded-lg","overflow-x-auto","text-sm"],[1,"text-2xl","font-semibold","text-gray-800","dark:text-gray-200","mb-4"],[1,"text-gray-700","dark:text-gray-300","mb-6"],[1,"grid","grid-cols-1","md:grid-cols-3","gap-4"],[1,"block","text-sm","font-medium","text-gray-700","dark:text-gray-300","mb-2"],["optionLabel","label","optionValue","value",1,"w-full",3,"ngModelChange","options","ngModel"],["mode","decimal",1,"w-full",3,"ngModelChange","ngModel","min","max","showButtons"],["label","Process Payment","icon","pi pi-check",3,"click"],[1,"bg-gray-100","dark:bg-gray-700","p-4","rounded-lg"],[1,"space-y-2","text-gray-700","dark:text-gray-300"],[1,"flex","items-start"],[1,"text-green-500","mr-2"],[1,"font-semibold","text-gray-800","dark:text-gray-200","mb-2"],[1,"text-sm","text-gray-700","dark:text-gray-300"]],template:function(o,i){if(o&1&&(t(0,"div",0)(1,"div",1)(2,"h1",2),n(3,"Open/Closed Principle (OCP)"),e(),t(4,"p",3),n(5," Software entities should be open for extension but closed for modification. "),e()(),t(6,"p-card",4)(7,"div",5)(8,"h2",6),n(9,"What is OCP?"),e(),t(10,"p",7),n(11," The Open/Closed Principle states that classes should be open for extension but closed for modification. This means you should be able to add new functionality without changing existing code. This is typically achieved through interfaces, abstract classes, and polymorphism. "),e(),t(12,"div",8)(13,"h3",9),n(14,"Key Benefits:"),e(),t(15,"ul",10)(16,"li"),n(17,"Add new features without breaking existing code"),e(),t(18,"li"),n(19,"Reduced risk of introducing bugs"),e(),t(20,"li"),n(21,"Better code stability"),e(),t(22,"li"),n(23,"Easier to maintain and test"),e()()()()(),t(24,"p-card",4)(25,"p-tabs",11)(26,"p-tablist")(27,"p-tab",11),n(28,"\u274C Violation"),e(),t(29,"p-tab",12),n(30,"\u2705 Solution"),e()(),t(31,"p-tabpanels")(32,"p-tabpanel",11)(33,"pre",13)(34,"code"),n(35),e()()(),t(36,"p-tabpanel",12)(37,"pre",13)(38,"code"),n(39),e()()()()()(),t(40,"p-card",4)(41,"h2",14),n(42,"Live Demo"),e(),t(43,"p",15),n(44," Select a payment method and process a payment. New payment methods can be added without modifying existing code. "),e(),t(45,"div",5)(46,"div",16)(47,"div")(48,"label",17),n(49,"Payment Method"),e(),t(50,"p-select",18),x("ngModelChange",function(a){return g(i.selectedMethod,a)||(i.selectedMethod=a),a}),e()(),t(51,"div")(52,"label",17),n(53,"Amount"),e(),t(54,"p-inputNumber",19),x("ngModelChange",function(a){return g(i.amount,a)||(i.amount=a),a}),e()(),t(55,"div")(56,"label",17),n(57,"Currency"),e(),t(58,"p-select",18),x("ngModelChange",function(a){return g(i.currency,a)||(i.currency=a),a}),e()()(),t(59,"p-button",20),C("click",function(){return i.processPayment()}),e(),h(60,$,20,8,"div",21),e()(),t(61,"p-card",4)(62,"h2",14),n(63,"Key Takeaways"),e(),t(64,"ul",22)(65,"li",23)(66,"span",24),n(67,"\u2713"),e(),t(68,"span"),n(69,"Use interfaces and abstractions to define contracts"),e()(),t(70,"li",23)(71,"span",24),n(72,"\u2713"),e(),t(73,"span"),n(74,"Implement new features by adding new classes, not modifying existing ones"),e()(),t(75,"li",23)(76,"span",24),n(77,"\u2713"),e(),t(78,"span"),n(79,"Strategy pattern is a common way to achieve OCP"),e()(),t(80,"li",23)(81,"span",24),n(82,"\u2713"),e(),t(83,"span"),n(84,"Makes code more maintainable and extensible"),e()()()()()),o&2){let l;r(35),f(i.violationCode),r(4),f(i.solutionCode),r(11),p("options",i.paymentMethods),y("ngModel",i.selectedMethod),r(4),y("ngModel",i.amount),p("min",1)("max",1e4)("showButtons",!0),r(4),p("options",w(13,Z,b(11,X),b(12,Y))),y("ngModel",i.currency),r(2),S((l=i.paymentResult())?60:-1,l)}},dependencies:[k,W,N,R,L,B,V,A,U,F,j,I,q,G,z,J,H,K,_],styles:["[_nghost-%COMP%]{display:block;width:100%}"]})};export{Q as OcpDemoComponent};
