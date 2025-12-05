import{a as R,b as q}from"./chunk-WMH24HSC.js";import"./chunk-BNU3XHMI.js";import"./chunk-ZNZEMCYO.js";import{b as B,e as D,i as T,p as P,s as W,t as I}from"./chunk-5TVMUKYR.js";import{a as z,b as H}from"./chunk-VHQBVC6O.js";import{a as V,b as L,c as O,d as $,e as F,f as K,g as U,h as j}from"./chunk-AH7MQ5KM.js";import"./chunk-K33OWSJ3.js";import"./chunk-UB7WHAP5.js";import{p as k,q as M}from"./chunk-47HPTYDK.js";import{p as A}from"./chunk-FHCI6K3X.js";import"./chunk-FPPZ4BUR.js";import{$b as g,Db as S,Hb as f,Jb as u,Ma as l,Xb as n,Yb as C,Zb as E,ab as N,ac as h,bc as x,ma as p,na as b,nb as y,ob as _,tb as d,ub as t,va as m,vb as e,wb as v}from"./chunk-S2MQBBOY.js";import"./chunk-6HR7AMTL.js";var w=class{balance=0;accountNumber;constructor(i,o=0){this.accountNumber=i,this.balance=o}deposit(i){i>0&&(this.balance+=i)}withdraw(i){return i>0&&i<=this.balance?(this.balance-=i,!0):!1}getBalance(){return this.balance}getAccountNumber(){return this.accountNumber}};function J(c,i){if(c&1){let o=S();t(0,"div",24)(1,"h3",30),n(2,"Account Operations"),e(),t(3,"div",31)(4,"p",32)(5,"strong"),n(6,"Account:"),e(),n(7),v(8,"br"),t(9,"strong"),n(10,"Balance:"),e(),n(11),e()(),t(12,"div",19)(13,"div")(14,"label",20),n(15,"Deposit Amount"),e(),t(16,"p-inputNumber",22),x("ngModelChange",function(r){p(o);let s=u();return h(s.depositAmount,r)||(s.depositAmount=r),b(r)}),e(),t(17,"p-button",33),f("click",function(){p(o);let r=u();return b(r.deposit())}),e()(),t(18,"div")(19,"label",20),n(20,"Withdraw Amount"),e(),t(21,"p-inputNumber",22),x("ngModelChange",function(r){p(o);let s=u();return h(s.withdrawAmount,r)||(s.withdrawAmount=r),b(r)}),e(),t(22,"p-button",34),f("click",function(){p(o);let r=u();return b(r.withdraw())}),e()()()()}if(c&2){let o=i,a=u();l(7),E(" ",o.getAccountNumber()),l(4),E(" $",o.getBalance()," "),l(5),g("ngModel",a.depositAmount),d("min",.01)("showButtons",!0),l(),d("disabled",a.depositAmount()<=0),l(4),g("ngModel",a.withdrawAmount),d("min",.01)("showButtons",!0),l(),d("disabled",a.withdrawAmount()<=0)}}function Q(c,i){if(c&1&&v(0,"p-message",25),c&2){let o=u();d("severity",o.account()?"success":"info")("text",o.message())}}var G=class c{accountNumber=m("");initialBalance=m(0);depositAmount=m(0);withdrawAmount=m(0);account=m(null);message=m("");violationCode=`
// \u274C VIOLATION: No Encapsulation
// Public fields can be accessed and modified directly

class BankAccount {
  public balance: number = 0;  // Public - anyone can modify!
  public accountNumber: string;

  constructor(accountNumber: string) {
    this.accountNumber = accountNumber;
  }
}

// Problem: Direct access allows invalid operations
const account = new BankAccount('12345');
account.balance = -1000;  // Can set negative balance!
account.balance = 999999; // Can set any value!
// No validation, no control
`;solutionCode=`
// \u2705 SOLUTION: Encapsulation
// Private fields with controlled access through methods

class BankAccount {
  private balance: number = 0;  // Private - cannot access directly
  private accountNumber: string;

  constructor(accountNumber: string, initialBalance: number = 0) {
    this.accountNumber = accountNumber;
    this.balance = initialBalance;
  }

  // Controlled access through methods
  deposit(amount: number): void {
    if (amount > 0) {
      this.balance += amount;  // Validation included
    }
  }

  withdraw(amount: number): boolean {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;  // Validation prevents overdraft
      return true;
    }
    return false;
  }

  // Read-only access
  getBalance(): number {
    return this.balance;
  }

  getAccountNumber(): string {
    return this.accountNumber;
  }
}

// Benefits:
// - Data protection
// - Validation and control
// - Can change implementation without affecting clients
`;createAccount(){if(!this.accountNumber().trim()){this.message.set("Please enter an account number");return}let i=new w(this.accountNumber(),this.initialBalance());this.account.set(i),this.message.set(`Account ${this.accountNumber()} created with balance $${this.initialBalance()}`)}deposit(){let i=this.account();if(!i){this.message.set("Please create an account first");return}if(this.depositAmount()<=0){this.message.set("Deposit amount must be greater than 0");return}i.deposit(this.depositAmount()),this.message.set(`Deposited $${this.depositAmount()}. New balance: $${i.getBalance()}`),this.depositAmount.set(0)}withdraw(){let i=this.account();if(!i){this.message.set("Please create an account first");return}if(this.withdrawAmount()<=0){this.message.set("Withdrawal amount must be greater than 0");return}i.withdraw(this.withdrawAmount())?this.message.set(`Withdrew $${this.withdrawAmount()}. New balance: $${i.getBalance()}`):this.message.set(`Insufficient funds. Current balance: $${i.getBalance()}`),this.withdrawAmount.set(0)}static \u0275fac=function(o){return new(o||c)};static \u0275cmp=N({type:c,selectors:[["app-encapsulation-demo"]],decls:85,vars:9,consts:[[1,"max-w-7xl","mx-auto","space-y-8"],[1,"bg-white","dark:bg-gray-800","rounded-lg","shadow-lg","p-8"],[1,"text-4xl","font-bold","text-gray-900","dark:text-gray-100","mb-3"],[1,"text-lg","text-gray-700","dark:text-gray-300"],[1,"shadow-lg"],[1,"space-y-4"],[1,"text-3xl","font-semibold","text-gray-900","dark:text-gray-100","mb-3"],[1,"text-base","text-gray-700","dark:text-gray-300","leading-relaxed"],[1,"bg-blue-50","dark:bg-blue-900/30","p-5","rounded-lg","border","border-blue-200","dark:border-blue-800"],[1,"text-lg","font-semibold","text-blue-900","dark:text-blue-100","mb-3"],[1,"list-disc","list-inside","space-y-2","text-base","text-blue-800","dark:text-blue-200"],["value","0"],["value","1"],[1,"overflow-x-auto"],[1,"text-3xl","font-semibold","text-gray-900","dark:text-gray-100","mb-4"],[1,"text-gray-700","dark:text-gray-300","mb-6"],[1,"space-y-8"],[1,"border-2","border-gray-200","dark:border-gray-700","rounded-lg","p-4"],[1,"text-lg","font-semibold","text-gray-800","dark:text-gray-200","mb-4"],[1,"grid","grid-cols-1","md:grid-cols-2","gap-4","mb-4"],[1,"block","text-sm","font-medium","text-gray-700","dark:text-gray-300","mb-2"],["pInputText","","type","text","placeholder","ACC-12345",1,"w-full",3,"ngModelChange","ngModel"],[1,"w-full",3,"ngModelChange","ngModel","min","showButtons"],["label","Create Account","icon","pi pi-plus",3,"click","disabled"],[1,"border-2","border-green-200","dark:border-green-800","rounded-lg","p-4"],[3,"severity","text"],[1,"text-3xl","font-semibold","text-gray-900","dark:text-gray-100","mb-5"],[1,"space-y-3","text-base","text-gray-700","dark:text-gray-300"],[1,"flex","items-start"],[1,"text-green-500","mr-2"],[1,"text-lg","font-semibold","text-green-800","dark:text-green-200","mb-4"],[1,"mb-4","p-4","bg-gray-100","dark:bg-gray-700","rounded"],[1,"text-sm","text-gray-800","dark:text-gray-200"],["label","Deposit","icon","pi pi-arrow-down","severity","success",1,"mt-2","w-full",3,"click","disabled"],["label","Withdraw","icon","pi pi-arrow-up","severity","danger",1,"mt-2","w-full",3,"click","disabled"]],template:function(o,a){if(o&1&&(t(0,"div",0)(1,"div",1)(2,"h1",2),n(3,"Encapsulation"),e(),t(4,"p",3),n(5," Bundling data and methods that operate on that data within a single unit, and restricting access to internal details. "),e()(),t(6,"p-card",4)(7,"div",5)(8,"h2",6),n(9,"What is Encapsulation?"),e(),t(10,"p",7),n(11," Encapsulation is the bundling of data (attributes) and methods (functions) that operate on that data into a single unit called a class. It restricts direct access to some of an object's components, which is a means of preventing accidental interference and misuse of the data. "),e(),t(12,"div",8)(13,"h3",9),n(14,"Key Benefits:"),e(),t(15,"ul",10)(16,"li"),n(17,"Data protection and validation"),e(),t(18,"li"),n(19,"Controlled access through methods"),e(),t(20,"li"),n(21,"Hides implementation details"),e(),t(22,"li"),n(23,"Easier to maintain and modify"),e()()()()(),t(24,"p-card",4)(25,"p-tabs",11)(26,"p-tablist")(27,"p-tab",11),n(28,"\u274C Violation"),e(),t(29,"p-tab",12),n(30,"\u2705 Solution"),e()(),t(31,"p-tabpanels")(32,"p-tabpanel",11)(33,"pre",13)(34,"code"),n(35),e()()(),t(36,"p-tabpanel",12)(37,"pre",13)(38,"code"),n(39),e()()()()()(),t(40,"p-card",4)(41,"h2",14),n(42,"Live Demo"),e(),t(43,"p",15),n(44," Create a bank account and perform transactions. Notice how the balance is protected and can only be modified through controlled methods. "),e(),t(45,"div",16)(46,"div",17)(47,"h3",18),n(48,"Create Account"),e(),t(49,"div",19)(50,"div")(51,"label",20),n(52,"Account Number"),e(),t(53,"input",21),x("ngModelChange",function(s){return h(a.accountNumber,s)||(a.accountNumber=s),s}),e()(),t(54,"div")(55,"label",20),n(56,"Initial Balance"),e(),t(57,"p-inputNumber",22),x("ngModelChange",function(s){return h(a.initialBalance,s)||(a.initialBalance=s),s}),e()()(),t(58,"p-button",23),f("click",function(){return a.createAccount()}),e()(),y(59,J,23,10,"div",24),y(60,Q,1,2,"p-message",25),e()(),t(61,"p-card",4)(62,"h2",26),n(63,"Key Takeaways"),e(),t(64,"ul",27)(65,"li",28)(66,"span",29),n(67,"\u2713"),e(),t(68,"span"),n(69,"Use private/protected access modifiers to hide internal data"),e()(),t(70,"li",28)(71,"span",29),n(72,"\u2713"),e(),t(73,"span"),n(74,"Provide controlled access through public methods (getters/setters)"),e()(),t(75,"li",28)(76,"span",29),n(77,"\u2713"),e(),t(78,"span"),n(79,"Add validation and business logic in accessor methods"),e()(),t(80,"li",28)(81,"span",29),n(82,"\u2713"),e(),t(83,"span"),n(84,"Protects data integrity and prevents unauthorized access"),e()()()()()),o&2){let r;l(35),C(a.violationCode),l(4),C(a.solutionCode),l(14),g("ngModel",a.accountNumber),l(4),g("ngModel",a.initialBalance),d("min",0)("showButtons",!0),l(),d("disabled",!a.accountNumber().trim()),l(),_((r=a.account())?59:-1,r),l(),_(a.message()?60:-1)}},dependencies:[A,P,B,D,T,L,V,U,$,O,F,K,M,k,q,R,I,W,H,z,j],styles:["[_nghost-%COMP%]{display:block;width:100%}"]})};export{G as EncapsulationDemoComponent};
