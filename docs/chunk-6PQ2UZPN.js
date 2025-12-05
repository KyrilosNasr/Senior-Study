import{s as D,t as V}from"./chunk-5TVMUKYR.js";import{b as $}from"./chunk-VHQBVC6O.js";import{a as R,b as U,c as N,d as A,e as P,f as L,g as j}from"./chunk-AH7MQ5KM.js";import"./chunk-K33OWSJ3.js";import"./chunk-UB7WHAP5.js";import{p as O,q as M}from"./chunk-47HPTYDK.js";import{p as w}from"./chunk-FHCI6K3X.js";import"./chunk-FPPZ4BUR.js";import{Db as I,G as y,Hb as v,Jb as u,Ma as s,Nb as T,Ob as k,Pb as _,Xb as e,Yb as l,ab as C,m as b,ma as f,n as g,na as x,nb as p,ob as c,s as E,ub as n,va as d,vb as t,wb as S,z as h}from"./chunk-S2MQBBOY.js";import"./chunk-6HR7AMTL.js";var q=["searchInput"];function F(a,r){if(a&1&&(n(0,"div",21)(1,"p",28),e(2),t()()),a&2){let i=u();s(2),l(i.ofResult())}}function B(a,r){if(a&1&&(n(0,"div",21)(1,"p",28),e(2),t()()),a&2){let i=u();s(2),l(i.fromResult())}}function K(a,r){if(a&1&&(n(0,"div",21)(1,"p",28),e(2),t()()),a&2){let i=u();s(2),l(i.fromEventResult())}}var H=class a{searchInput;ofResult=d("");fromResult=d("");fromEventResult=d("");searchValue=d("");violationCode=`
// \u274C VIOLATION: Not using observables
// Manual event handling, no reactive patterns

export class SearchComponent {
  searchValue = '';
  
  onInput(event: Event) {
    this.searchValue = (event.target as HTMLInputElement).value;
    // Manual debouncing with setTimeout
    clearTimeout(this.debounceTimer);
    this.debounceTimer = setTimeout(() => {
      this.search(this.searchValue);
    }, 300);
  }
  
  // Problems:
  // - Manual timer management
  // - No cancellation
  // - Hard to test
  // - Not reactive
}
`;solutionCode=`
// \u2705 SOLUTION: Creation Operators
// Reactive, cancellable, testable

import { of, from, fromEvent } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';

// of() - Emits values synchronously, then completes
const config$ = of({ apiUrl: '/api', timeout: 5000 });
// Use case: Static configuration, mock data, default values

// from() - Converts arrays, promises, iterables to observables
const users$ = from(fetch('/api/users').then(r => r.json()));
// Use case: Converting promises, iterating arrays reactively

// fromEvent() - DOM events to observable streams
const clicks$ = fromEvent(document, 'click');
// Use case: Event handling, user interactions

// Angular 17+ Application:
@Component({
  selector: 'app-search',
  standalone: true,
  template: \`<input #searchInput type="text" />\`
})
export class SearchComponent implements AfterViewInit {
  @ViewChild('searchInput') searchInput!: ElementRef;
  
  ngAfterViewInit() {
    // Converting DOM events to reactive streams
    fromEvent<InputEvent>(this.searchInput.nativeElement, 'input')
      .pipe(
        debounceTime(300),
        map(event => (event.target as HTMLInputElement).value)
      )
      .subscribe(query => this.search(query));
  }
}
`;ngAfterViewInit(){this.searchInput?.nativeElement&&h(this.searchInput.nativeElement,"input").pipe(y(300),E(r=>r.target.value)).subscribe(r=>{this.fromEventResult.set(`Searching for: "${r}"`),this.searchValue.set(r)})}testOf(){g({apiUrl:"/api",timeout:5e3}).subscribe(r=>{this.ofResult.set(`Config: ${JSON.stringify(r)}`)})}testFrom(){let r=Promise.resolve(["User 1","User 2","User 3"]);b(r).subscribe(i=>{this.fromResult.set(`Users: ${i.join(", ")}`)})}static \u0275fac=function(i){return new(i||a)};static \u0275cmp=C({type:a,selectors:[["app-creation-operators-demo"]],viewQuery:function(i,o){if(i&1&&T(q,5),i&2){let m;k(m=_())&&(o.searchInput=m.first)}},decls:111,vars:5,consts:[["searchInput",""],[1,"max-w-7xl","mx-auto","space-y-8"],[1,"bg-white","dark:bg-gray-800","rounded-lg","shadow-lg","p-8"],[1,"text-4xl","font-bold","text-gray-900","dark:text-gray-100","mb-3"],[1,"text-lg","text-gray-700","dark:text-gray-300"],[1,"shadow-lg"],[1,"space-y-4"],[1,"text-3xl","font-semibold","text-gray-900","dark:text-gray-100","mb-3"],[1,"text-base","text-gray-700","dark:text-gray-300","leading-relaxed"],[1,"bg-blue-50","dark:bg-blue-900/30","p-5","rounded-lg","border","border-blue-200","dark:border-blue-800"],[1,"text-lg","font-semibold","text-blue-900","dark:text-blue-100","mb-3"],[1,"list-disc","list-inside","space-y-2","text-base","text-blue-800","dark:text-blue-200"],["value","0"],["value","1"],[1,"overflow-x-auto"],[1,"text-3xl","font-semibold","text-gray-900","dark:text-gray-100","mb-4"],[1,"space-y-8"],[1,"border-2","border-gray-200","dark:border-gray-700","rounded-lg","p-4"],[1,"text-lg","font-semibold","text-gray-800","dark:text-gray-200","mb-4"],[1,"text-sm","text-gray-600","dark:text-gray-400","mb-2"],["label","Test of()","icon","pi pi-play",1,"mb-4",3,"click"],[1,"bg-gray-100","dark:bg-gray-700","p-4","rounded"],["label","Test from()","icon","pi pi-play",1,"mb-4",3,"click"],["pInputText","","type","text","placeholder","Type to search...",1,"w-full","mb-4"],[1,"text-3xl","font-semibold","text-gray-900","dark:text-gray-100","mb-5"],[1,"space-y-3","text-base","text-gray-700","dark:text-gray-300"],[1,"flex","items-start"],[1,"text-green-500","mr-2"],[1,"text-sm"]],template:function(i,o){if(i&1){let m=I();n(0,"div",1)(1,"div",2)(2,"h1",3),e(3,"Part 1: Creation Operators"),t(),n(4,"p",4),e(5," Creating observables from different sources: "),n(6,"code"),e(7,"of()"),t(),e(8,", "),n(9,"code"),e(10,"from()"),t(),e(11,", and "),n(12,"code"),e(13,"fromEvent()"),t()()(),n(14,"p-card",5)(15,"div",6)(16,"h2",7),e(17,"Creation Operators"),t(),n(18,"p",8),e(19," Creation operators are functions that create observables from various sources. They're the foundation of reactive programming in Angular. "),t(),n(20,"div",9)(21,"h3",10),e(22,"Key Operators:"),t(),n(23,"ul",11)(24,"li")(25,"strong"),e(26,"of():"),t(),e(27," Emits values synchronously, then completes - Use for static data, config, mock data"),t(),n(28,"li")(29,"strong"),e(30,"from():"),t(),e(31," Converts arrays, promises, iterables to observables - Use for async conversions"),t(),n(32,"li")(33,"strong"),e(34,"fromEvent():"),t(),e(35," DOM events to observable streams - Use for user interactions, events"),t()()()()(),n(36,"p-card",5)(37,"p-tabs",12)(38,"p-tablist")(39,"p-tab",12),e(40,"\u274C Violation"),t(),n(41,"p-tab",13),e(42,"\u2705 Solution"),t()(),n(43,"p-tabpanels")(44,"p-tabpanel",12)(45,"pre",14)(46,"code"),e(47),t()()(),n(48,"p-tabpanel",13)(49,"pre",14)(50,"code"),e(51),t()()()()()(),n(52,"p-card",5)(53,"h2",15),e(54,"Live Demo"),t(),n(55,"div",16)(56,"div",17)(57,"h3",18),e(58,"of() - Static Values"),t(),n(59,"p",19),e(60," Creates an observable from static values. Emits synchronously, then completes. "),t(),n(61,"p-button",20),v("click",function(){return f(m),x(o.testOf())}),t(),p(62,F,3,1,"div",21),t(),n(63,"div",17)(64,"h3",18),e(65,"from() - Promise/Array"),t(),n(66,"p",19),e(67," Converts a promise or array to an observable. Handles async operations reactively. "),t(),n(68,"p-button",22),v("click",function(){return f(m),x(o.testFrom())}),t(),p(69,B,3,1,"div",21),t(),n(70,"div",17)(71,"h3",18),e(72,"fromEvent() - DOM Events"),t(),n(73,"p",19),e(74," Type in the input below. Notice how it debounces (waits 300ms after you stop typing). "),t(),S(75,"input",23,0),p(77,K,3,1,"div",21),t()()(),n(78,"p-card",5)(79,"h2",24),e(80,"Key Takeaways"),t(),n(81,"ul",25)(82,"li",26)(83,"span",27),e(84,"\u2713"),t(),n(85,"span"),e(86,"Use "),n(87,"code"),e(88,"of()"),t(),e(89," for static values, config, or mock data"),t()(),n(90,"li",26)(91,"span",27),e(92,"\u2713"),t(),n(93,"span"),e(94,"Use "),n(95,"code"),e(96,"from()"),t(),e(97," to convert promises, arrays, or iterables to observables"),t()(),n(98,"li",26)(99,"span",27),e(100,"\u2713"),t(),n(101,"span"),e(102,"Use "),n(103,"code"),e(104,"fromEvent()"),t(),e(105," for DOM events - makes event handling reactive and cancellable"),t()(),n(106,"li",26)(107,"span",27),e(108,"\u2713"),t(),n(109,"span"),e(110,"Creation operators are the foundation - they turn any data source into a reactive stream"),t()()()()()}i&2&&(s(47),l(o.violationCode),s(4),l(o.solutionCode),s(11),c(o.ofResult()?62:-1),s(7),c(o.fromResult()?69:-1),s(8),c(o.fromEventResult()?77:-1))},dependencies:[w,U,R,j,A,N,P,L,M,O,V,D,$],styles:["[_nghost-%COMP%]{display:block;width:100%}"]})};export{H as CreationOperatorsDemoComponent};
