import{v as O,w as M}from"./chunk-4UXUI4FZ.js";import{a as L}from"./chunk-K53LRMBI.js";import"./chunk-IAGI55XL.js";import{b as P}from"./chunk-AI3VJOCX.js";import{a as V,b as U,c as j,d as N,e as A}from"./chunk-WL3GUFCA.js";import"./chunk-4XAVTQOD.js";import{a as D,b as R}from"./chunk-QNFUOYYO.js";import"./chunk-Z44BU5J4.js";import"./chunk-4O3FVBGX.js";import"./chunk-7F3YVZD6.js";import"./chunk-54PGZSHQ.js";import{r as _}from"./chunk-4KSQBOQ2.js";import"./chunk-FPPZ4BUR.js";import{Db as c,Eb as u,G as C,Kb as t,Lb as e,Mb as o,Tb as w,Xb as b,Za as l,Zb as f,bc as I,cc as T,dc as k,lc as n,m as g,ma as v,mc as m,n as h,na as x,nb as S,s as E,va as p,z as y}from"./chunk-IOSF2A54.js";import"./chunk-6HR7AMTL.js";var Q=["searchInput"];function q(a,r){if(a&1&&(t(0,"div",47)(1,"p",52),n(2),e()()),a&2){let i=f();l(2),m(i.ofResult())}}function F(a,r){if(a&1&&(t(0,"div",47)(1,"p",52),n(2),e()()),a&2){let i=f();l(2),m(i.fromResult())}}function J(a,r){if(a&1&&(t(0,"div",47)(1,"p",52),n(2),e()()),a&2){let i=f();l(2),m(i.fromEventResult())}}var $=class a{searchInput;ofResult=p("");fromResult=p("");fromEventResult=p("");searchValue=p("");violationCode=`
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
`;ngAfterViewInit(){this.searchInput?.nativeElement&&y(this.searchInput.nativeElement,"input").pipe(C(300),E(r=>r.target.value)).subscribe(r=>{this.fromEventResult.set(`Searching for: "${r}"`),this.searchValue.set(r)})}testOf(){h({apiUrl:"/api",timeout:5e3}).subscribe(r=>{this.ofResult.set(`Config: ${JSON.stringify(r)}`)})}testFrom(){let r=Promise.resolve(["User 1","User 2","User 3"]);g(r).subscribe(i=>{this.fromResult.set(`Users: ${i.join(", ")}`)})}static \u0275fac=function(i){return new(i||a)};static \u0275cmp=S({type:a,selectors:[["app-creation-operators-demo"]],viewQuery:function(i,s){if(i&1&&I(Q,5),i&2){let d;T(d=k())&&(s.searchInput=d.first)}},decls:137,vars:5,consts:[["searchInput",""],[1,"container-responsive","space-y-responsive"],[1,"card-modern","padding-responsive","hover-lift","slide-in-up"],[1,"flex","flex-col","lg:flex-row","lg:items-center","lg:justify-between","gap-6"],[1,"flex-1"],[1,"flex","items-center","gap-3","mb-4"],[1,"w-12","h-12","sm:w-14","sm:h-14","rounded-xl","bg-gradient-to-br","from-purple-500","to-pink-600","flex","items-center","justify-center","shadow-lg"],[1,"fas","fa-plus-circle","text-white","text-xl","sm:text-2xl"],[1,"badge-modern","text-xs","sm:text-sm"],[1,"heading-responsive","text-gradient","mb-4"],[1,"text-responsive","text-gray-700","dark:text-gray-300"],[1,"hidden","lg:block"],[1,"w-32","h-32","rounded-2xl","bg-gradient-to-br","from-purple-500/20","to-pink-600/20","flex","items-center","justify-center"],[1,"fas","fa-plus-circle","text-6xl","text-purple-500"],[1,"card-modern","hover-lift","slide-in-up"],[1,"padding-responsive","space-y-6"],[1,"w-10","h-10","rounded-lg","bg-gradient-to-br","from-blue-500","to-purple-600","flex","items-center","justify-center"],[1,"fas","fa-lightbulb","text-white"],[1,"subheading-responsive","text-gray-900","dark:text-gray-100"],[1,"text-responsive","text-gray-700","dark:text-gray-300","leading-relaxed"],[1,"glass","rounded-xl","p-6","border-l-4","border-accent"],[1,"fas","fa-star","text-accent","text-xl"],[1,"text-lg","sm:text-xl","font-semibold","text-gray-900","dark:text-gray-100"],[1,"list-modern"],[1,"text-sm","sm:text-base","text-gray-800","dark:text-gray-200"],[1,"padding-responsive"],[1,"flex","items-center","gap-3","mb-6"],[1,"w-10","h-10","rounded-lg","bg-gradient-to-br","from-green-500","to-teal-600","flex","items-center","justify-center"],[1,"fas","fa-code","text-white"],["value","0"],[1,"flex","flex-wrap","gap-2","mb-6"],["value","0",1,"flex","items-center","gap-2"],[1,"fas","fa-times-circle","text-red-500"],[1,"text-sm","sm:text-base","font-semibold"],["value","1",1,"flex","items-center","gap-2"],[1,"fas","fa-check-circle","text-green-500"],[1,"code-block-modern"],[1,"overflow-x-auto","text-sm","sm:text-base"],["value","1"],[1,"w-10","h-10","rounded-lg","bg-gradient-to-br","from-purple-500","to-pink-600","flex","items-center","justify-center"],[1,"fas","fa-play-circle","text-white"],[1,"text-responsive","text-gray-700","dark:text-gray-300","mb-8"],[1,"space-y-8"],[1,"border-2","border-gray-200","dark:border-gray-700","rounded-lg","p-4"],[1,"text-lg","font-semibold","text-gray-800","dark:text-gray-200","mb-4"],[1,"text-sm","text-gray-600","dark:text-gray-400","mb-2"],["label","Test of()","icon","pi pi-play",1,"mb-4",3,"buttonClick"],[1,"bg-gray-100","dark:bg-gray-700","p-4","rounded"],["label","Test from()","icon","pi pi-play",1,"mb-4",3,"buttonClick"],["pInputText","","type","text","placeholder","Type to search...",1,"w-full","mb-4"],[1,"w-10","h-10","rounded-lg","bg-gradient-to-br","from-teal-500","to-cyan-600","flex","items-center","justify-center"],[1,"fas","fa-graduation-cap","text-white"],[1,"text-sm"]],template:function(i,s){if(i&1){let d=w();t(0,"div",1)(1,"div",2)(2,"div",3)(3,"div",4)(4,"div",5)(5,"div",6),o(6,"i",7),e(),t(7,"div")(8,"span",8),n(9,"RxJS Operators"),e()()(),t(10,"h1",9),n(11," Creation Operators "),e(),t(12,"p",10),n(13," Creating observables from different sources: "),t(14,"code"),n(15,"of()"),e(),n(16,", "),t(17,"code"),n(18,"from()"),e(),n(19,", and "),t(20,"code"),n(21,"fromEvent()"),e()()(),t(22,"div",11)(23,"div",12),o(24,"i",13),e()()()(),t(25,"p-card",14)(26,"div",15)(27,"div",5)(28,"div",16),o(29,"i",17),e(),t(30,"h2",18),n(31,"What are Creation Operators?"),e()(),t(32,"p",19),n(33," Creation operators are functions that create observables from various sources. They're the foundation of reactive programming in Angular. "),e(),t(34,"div",20)(35,"div",5),o(36,"i",21),t(37,"h3",22),n(38,"Key Operators"),e()(),t(39,"ul",23)(40,"li",24)(41,"strong"),n(42,"of():"),e(),n(43," Emits values synchronously, then completes - Use for static data, config, mock data "),e(),t(44,"li",24)(45,"strong"),n(46,"from():"),e(),n(47," Converts arrays, promises, iterables to observables - Use for async conversions "),e(),t(48,"li",24)(49,"strong"),n(50,"fromEvent():"),e(),n(51," DOM events to observable streams - Use for user interactions, events "),e()()()()(),t(52,"p-card",14)(53,"div",25)(54,"div",26)(55,"div",27),o(56,"i",28),e(),t(57,"h2",18),n(58,"Code Examples"),e()(),t(59,"p-tabs",29)(60,"p-tablist",30)(61,"p-tab",31),o(62,"i",32),t(63,"span",33),n(64,"Violation"),e()(),t(65,"p-tab",34),o(66,"i",35),t(67,"span",33),n(68,"Solution"),e()()(),t(69,"p-tabpanels")(70,"p-tabpanel",29)(71,"div",36)(72,"pre",37)(73,"code"),n(74),e()()()(),t(75,"p-tabpanel",38)(76,"div",36)(77,"pre",37)(78,"code"),n(79),e()()()()()()()(),t(80,"p-card",14)(81,"div",25)(82,"div",5)(83,"div",39),o(84,"i",40),e(),t(85,"h2",18),n(86,"Interactive Demo"),e()(),t(87,"p",41),n(88," Try out each creation operator to see how they work in practice. "),e(),t(89,"div",42)(90,"div",43)(91,"h3",44),n(92,"of() - Static Values"),e(),t(93,"p",45),n(94," Creates an observable from static values. Emits synchronously, then completes. "),e(),t(95,"app-enhanced-button",46),b("buttonClick",function(){return v(d),x(s.testOf())}),e(),c(96,q,3,1,"div",47),e(),t(97,"div",43)(98,"h3",44),n(99,"from() - Promise/Array"),e(),t(100,"p",45),n(101," Converts a promise or array to an observable. Handles async operations reactively. "),e(),t(102,"app-enhanced-button",48),b("buttonClick",function(){return v(d),x(s.testFrom())}),e(),c(103,F,3,1,"div",47),e(),t(104,"div",43)(105,"h3",44),n(106,"fromEvent() - DOM Events"),e(),t(107,"p",45),n(108," Type in the input below. Notice how it debounces (waits 300ms after you stop typing). "),e(),o(109,"input",49,0),c(111,J,3,1,"div",47),e()()()(),t(112,"p-card",14)(113,"div",25)(114,"div",26)(115,"div",50),o(116,"i",51),e(),t(117,"h2",18),n(118,"Key Takeaways"),e()(),t(119,"ul",23)(120,"li",24),n(121," Use "),t(122,"code"),n(123,"of()"),e(),n(124," for static values, config, or mock data "),e(),t(125,"li",24),n(126," Use "),t(127,"code"),n(128,"from()"),e(),n(129," to convert promises, arrays, or iterables to observables "),e(),t(130,"li",24),n(131," Use "),t(132,"code"),n(133,"fromEvent()"),e(),n(134," for DOM events - makes event handling reactive and cancellable "),e(),t(135,"li",24),n(136," Creation operators are the foundation - they turn any data source into a reactive stream "),e()()()()()}i&2&&(l(74),m(s.violationCode),l(5),m(s.solutionCode),l(17),u(s.ofResult()?96:-1),l(7),u(s.fromResult()?103:-1),l(8),u(s.fromEventResult()?111:-1))},dependencies:[_,R,D,A,U,V,j,N,L,M,O,P],styles:["[_nghost-%COMP%]{display:block;width:100%}"]})};export{$ as CreationOperatorsDemoComponent};
