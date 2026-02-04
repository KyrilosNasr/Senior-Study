import{a as M,b as D}from"./chunk-QB6ZO67J.js";import"./chunk-RMJAI7RZ.js";import{a as $}from"./chunk-I2ZT4LK6.js";import"./chunk-DEGWJE5E.js";import{b as L}from"./chunk-PKLQWDLD.js";import{a as U,b as N,c as j,d as P,e as A}from"./chunk-3ZW5MUH5.js";import"./chunk-SHEHAVXT.js";import{a as R,b as V}from"./chunk-ST7OVFPO.js";import"./chunk-3N3GZBUB.js";import"./chunk-4O3FVBGX.js";import"./chunk-QCJRPF2F.js";import"./chunk-IZU7C3FN.js";import{b as O}from"./chunk-JBIPGRVB.js";import{r as _}from"./chunk-BO564T5E.js";import"./chunk-FPPZ4BUR.js";import{Cb as p,Db as u,G as C,Jb as t,Kb as e,Lb as a,Sb as w,Wb as g,Yb as f,Za as s,ac as I,bc as T,cc as k,kc as n,lc as m,m as b,ma as v,n as h,na as x,nb as S,s as E,va as c,z as y}from"./chunk-6P3ZW5D6.js";import"./chunk-6HR7AMTL.js";var q=["searchInput"];function F(o,r){if(o&1&&(t(0,"div",47)(1,"p",52),n(2),e()()),o&2){let i=f();s(2),m(i.ofResult())}}function J(o,r){if(o&1&&(t(0,"div",47)(1,"p",52),n(2),e()()),o&2){let i=f();s(2),m(i.fromResult())}}function K(o,r){if(o&1&&(t(0,"div",47)(1,"p",52),n(2),e()()),o&2){let i=f();s(2),m(i.fromEventResult())}}var H=class o{searchInput;ofResult=c("");fromResult=c("");fromEventResult=c("");searchValue=c("");violationCode=`
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
`;ngAfterViewInit(){this.searchInput?.nativeElement&&y(this.searchInput.nativeElement,"input").pipe(C(300),E(r=>r.target.value)).subscribe(r=>{this.fromEventResult.set(`Searching for: "${r}"`),this.searchValue.set(r)})}testOf(){h({apiUrl:"/api",timeout:5e3}).subscribe(r=>{this.ofResult.set(`Config: ${JSON.stringify(r)}`)})}testFrom(){let r=Promise.resolve(["User 1","User 2","User 3"]);b(r).subscribe(i=>{this.fromResult.set(`Users: ${i.join(", ")}`)})}static \u0275fac=function(i){return new(i||o)};static \u0275cmp=S({type:o,selectors:[["app-creation-operators-demo"]],viewQuery:function(i,l){if(i&1&&I(q,5),i&2){let d;T(d=k())&&(l.searchInput=d.first)}},decls:137,vars:5,consts:[["searchInput",""],[1,"container-responsive","space-y-responsive"],[1,"card-modern","padding-responsive","hover-lift","slide-in-up"],[1,"flex","flex-col","lg:flex-row","lg:items-center","lg:justify-between","gap-6"],[1,"flex-1"],[1,"flex","items-center","gap-3","mb-4"],[1,"w-12","h-12","sm:w-14","sm:h-14","rounded-xl","bg-gradient-to-br","from-purple-500","to-pink-600","flex","items-center","justify-center","shadow-lg"],["name","faSolidCirclePlus",1,"text-white","text-xl","sm:text-2xl"],[1,"badge-modern","text-xs","sm:text-sm"],[1,"heading-responsive","text-gradient","mb-4"],[1,"text-responsive","text-gray-700","dark:text-gray-300"],[1,"hidden","lg:block"],[1,"w-32","h-32","rounded-2xl","bg-gradient-to-br","from-purple-500/20","to-pink-600/20","flex","items-center","justify-center"],["name","faSolidCirclePlus",1,"text-6xl","text-purple-500"],[1,"card-modern","hover-lift","slide-in-up"],[1,"padding-responsive","space-y-6"],[1,"w-10","h-10","rounded-lg","bg-gradient-to-br","from-blue-500","to-purple-600","flex","items-center","justify-center"],["name","faSolidLightbulb",1,"text-white"],[1,"subheading-responsive","text-gray-900","dark:text-gray-100"],[1,"text-responsive","text-gray-700","dark:text-gray-300","leading-relaxed"],[1,"glass","rounded-xl","p-6","border-l-4","border-accent"],["name","faSolidStar",1,"text-accent","text-xl"],[1,"text-lg","sm:text-xl","font-semibold","text-gray-900","dark:text-gray-100"],[1,"list-modern"],[1,"text-sm","sm:text-base","text-gray-800","dark:text-gray-200"],[1,"padding-responsive"],[1,"flex","items-center","gap-3","mb-6"],[1,"w-10","h-10","rounded-lg","bg-gradient-to-br","from-green-500","to-teal-600","flex","items-center","justify-center"],["name","faSolidCode",1,"text-white"],["value","0"],[1,"flex","flex-wrap","gap-2","mb-6"],["value","0",1,"flex","items-center","gap-2"],["name","faSolidCircleXmark",1,"text-red-500"],[1,"text-sm","sm:text-base","font-semibold"],["value","1",1,"flex","items-center","gap-2"],["name","faSolidCircleCheck",1,"text-green-500"],[1,"code-block-modern"],[1,"overflow-x-auto","text-sm","sm:text-base"],["value","1"],[1,"w-10","h-10","rounded-lg","bg-gradient-to-br","from-purple-500","to-pink-600","flex","items-center","justify-center"],["name","faSolidCirclePlay",1,"text-white"],[1,"text-responsive","text-gray-700","dark:text-gray-300","mb-8"],[1,"space-y-8"],[1,"border-2","border-gray-200","dark:border-gray-700","rounded-lg","p-4"],[1,"text-lg","font-semibold","text-gray-800","dark:text-gray-200","mb-4"],[1,"text-sm","text-gray-600","dark:text-gray-400","mb-2"],["label","Test of()","icon","faSolidPlay",1,"mb-4",3,"buttonClick"],[1,"bg-gray-100","dark:bg-gray-700","p-4","rounded"],["label","Test from()","icon","faSolidPlay",1,"mb-4",3,"buttonClick"],["pInputText","","type","text","placeholder","Type to search...",1,"w-full","mb-4"],[1,"w-10","h-10","rounded-lg","bg-gradient-to-br","from-teal-500","to-cyan-600","flex","items-center","justify-center"],["name","faSolidGraduationCap",1,"text-white"],[1,"text-sm"]],template:function(i,l){if(i&1){let d=w();t(0,"div",1)(1,"div",2)(2,"div",3)(3,"div",4)(4,"div",5)(5,"div",6),a(6,"ng-icon",7),e(),t(7,"div")(8,"span",8),n(9,"RxJS Operators"),e()()(),t(10,"h1",9),n(11," Creation Operators "),e(),t(12,"p",10),n(13," Creating observables from different sources: "),t(14,"code"),n(15,"of()"),e(),n(16,", "),t(17,"code"),n(18,"from()"),e(),n(19,", and "),t(20,"code"),n(21,"fromEvent()"),e()()(),t(22,"div",11)(23,"div",12),a(24,"ng-icon",13),e()()()(),t(25,"p-card",14)(26,"div",15)(27,"div",5)(28,"div",16),a(29,"ng-icon",17),e(),t(30,"h2",18),n(31,"What are Creation Operators?"),e()(),t(32,"p",19),n(33," Creation operators are functions that create observables from various sources. They're the foundation of reactive programming in Angular. "),e(),t(34,"div",20)(35,"div",5),a(36,"ng-icon",21),t(37,"h3",22),n(38,"Key Operators"),e()(),t(39,"ul",23)(40,"li",24)(41,"strong"),n(42,"of():"),e(),n(43," Emits values synchronously, then completes - Use for static data, config, mock data "),e(),t(44,"li",24)(45,"strong"),n(46,"from():"),e(),n(47," Converts arrays, promises, iterables to observables - Use for async conversions "),e(),t(48,"li",24)(49,"strong"),n(50,"fromEvent():"),e(),n(51," DOM events to observable streams - Use for user interactions, events "),e()()()()(),t(52,"p-card",14)(53,"div",25)(54,"div",26)(55,"div",27),a(56,"ng-icon",28),e(),t(57,"h2",18),n(58,"Code Examples"),e()(),t(59,"p-tabs",29)(60,"p-tablist",30)(61,"p-tab",31),a(62,"ng-icon",32),t(63,"span",33),n(64,"Violation"),e()(),t(65,"p-tab",34),a(66,"ng-icon",35),t(67,"span",33),n(68,"Solution"),e()()(),t(69,"p-tabpanels")(70,"p-tabpanel",29)(71,"div",36)(72,"pre",37)(73,"code"),n(74),e()()()(),t(75,"p-tabpanel",38)(76,"div",36)(77,"pre",37)(78,"code"),n(79),e()()()()()()()(),t(80,"p-card",14)(81,"div",25)(82,"div",5)(83,"div",39),a(84,"ng-icon",40),e(),t(85,"h2",18),n(86,"Interactive Demo"),e()(),t(87,"p",41),n(88," Try out each creation operator to see how they work in practice. "),e(),t(89,"div",42)(90,"div",43)(91,"h3",44),n(92,"of() - Static Values"),e(),t(93,"p",45),n(94," Creates an observable from static values. Emits synchronously, then completes. "),e(),t(95,"app-enhanced-button",46),g("buttonClick",function(){return v(d),x(l.testOf())}),e(),p(96,F,3,1,"div",47),e(),t(97,"div",43)(98,"h3",44),n(99,"from() - Promise/Array"),e(),t(100,"p",45),n(101," Converts a promise or array to an observable. Handles async operations reactively. "),e(),t(102,"app-enhanced-button",48),g("buttonClick",function(){return v(d),x(l.testFrom())}),e(),p(103,J,3,1,"div",47),e(),t(104,"div",43)(105,"h3",44),n(106,"fromEvent() - DOM Events"),e(),t(107,"p",45),n(108," Type in the input below. Notice how it debounces (waits 300ms after you stop typing). "),e(),a(109,"input",49,0),p(111,K,3,1,"div",47),e()()()(),t(112,"p-card",14)(113,"div",25)(114,"div",26)(115,"div",50),a(116,"ng-icon",51),e(),t(117,"h2",18),n(118,"Key Takeaways"),e()(),t(119,"ul",23)(120,"li",24),n(121," Use "),t(122,"code"),n(123,"of()"),e(),n(124," for static values, config, or mock data "),e(),t(125,"li",24),n(126," Use "),t(127,"code"),n(128,"from()"),e(),n(129," to convert promises, arrays, or iterables to observables "),e(),t(130,"li",24),n(131," Use "),t(132,"code"),n(133,"fromEvent()"),e(),n(134," for DOM events - makes event handling reactive and cancellable "),e(),t(135,"li",24),n(136," Creation operators are the foundation - they turn any data source into a reactive stream "),e()()()()()}i&2&&(s(74),m(l.violationCode),s(5),m(l.solutionCode),s(17),u(l.ofResult()?96:-1),s(7),u(l.fromResult()?103:-1),s(8),u(l.fromEventResult()?111:-1))},dependencies:[O,_,V,R,A,N,U,j,P,$,D,M,L],styles:["[_nghost-%COMP%]{display:block;width:100%}"]})};export{H as CreationOperatorsDemoComponent};
