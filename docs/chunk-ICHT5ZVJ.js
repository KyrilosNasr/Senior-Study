import{b as D,e as _,i as N,p as R,s as B,t as L}from"./chunk-5TVMUKYR.js";import{a as P,b as O,c as W,d as q,e as A,f as Q,g as Y}from"./chunk-AH7MQ5KM.js";import{p as I,q as M}from"./chunk-47HPTYDK.js";import{p as V}from"./chunk-FHCI6K3X.js";import"./chunk-FPPZ4BUR.js";import{$b as T,Db as S,G as y,Hb as k,Ma as s,Nb as c,Ob as g,Pb as b,Xb as t,Yb as x,Zb as m,ab as E,ac as w,bc as C,ma as u,na as p,s as h,ub as i,va as o,vb as e,z as v}from"./chunk-S2MQBBOY.js";import"./chunk-6HR7AMTL.js";var H=["searchInput"],j=["scrollContainer"],U=class f{searchInput;scrollContainer;searchValue=o("");debouncedValue=o("");throttledValue=o("");sampledValue=o("");scrollPosition=o(0);throttledScroll=o(0);debouncedScroll=o(0);violationCode=`
// \u274C VIOLATION: No Rate Limiting
// High-frequency events cause performance issues

fromEvent(input, 'input').subscribe(event => {
  // Called on EVERY keystroke - too many API calls!
  this.search(event.target.value);
});

fromEvent(window, 'scroll').subscribe(() => {
  // Called on EVERY scroll event - performance killer!
  this.updatePosition(window.scrollY);
});
`;solutionCode=`
// \u2705 SOLUTION: Rate Limiting Operators
// Control frequency of emissions

// Debounce: Wait for pause in emissions
fromEvent(input, 'input').pipe(
  debounceTime(300), // Wait 300ms after last keystroke
  map(e => e.target.value)
).subscribe(value => {
  this.search(value); // Only called after user stops typing
});

// Throttle: Emit first, then ignore for duration
fromEvent(window, 'scroll').pipe(
  throttleTime(100), // Max once per 100ms
  map(() => window.scrollY)
).subscribe(position => {
  this.updatePosition(position);
});

// Sample: Emit latest at intervals
fromEvent(document, 'mousemove').pipe(
  sampleTime(200), // Sample every 200ms
  map((e: MouseEvent) => ({ x: e.clientX, y: e.clientY }))
).subscribe(position => {
  this.trackMouse(position);
});
`;ngAfterViewInit(){this.searchInput?.nativeElement&&v(this.searchInput.nativeElement,"input").pipe(y(300),h(r=>r.target.value)).subscribe(r=>{this.debouncedValue.set(r)})}testThrottle(){let r=0,a=setInterval(()=>{r++,this.throttledValue.set(`Event ${r}`),r>=10&&clearInterval(a)},50)}static \u0275fac=function(a){return new(a||f)};static \u0275cmp=E({type:f,selectors:[["app-backpressure-demo"]],viewQuery:function(a,n){if(a&1&&(c(H,5),c(j,5)),a&2){let l;g(l=b())&&(n.searchInput=l.first),g(l=b())&&(n.scrollContainer=l.first)}},decls:101,vars:6,consts:[["searchInput",""],[1,"max-w-7xl","mx-auto","space-y-8"],[1,"bg-white","dark:bg-gray-800","rounded-lg","shadow-lg","p-8"],[1,"text-4xl","font-bold","text-gray-900","dark:text-gray-100","mb-3"],[1,"text-lg","text-gray-700","dark:text-gray-300","leading-relaxed"],[1,"shadow-lg"],[1,"space-y-4"],[1,"text-3xl","font-semibold","text-gray-900","dark:text-gray-100","mb-3"],[1,"text-base","text-gray-700","dark:text-gray-300","leading-relaxed"],[1,"bg-blue-50","dark:bg-blue-900/30","p-5","rounded-lg","border","border-blue-200","dark:border-blue-800"],[1,"text-lg","font-semibold","text-blue-900","dark:text-blue-100","mb-3"],[1,"list-disc","list-inside","space-y-2","text-base","text-blue-800","dark:text-blue-200"],["value","0"],["value","1"],[1,"overflow-x-auto"],[1,"text-3xl","font-semibold","text-gray-900","dark:text-gray-100","mb-3","mb-4"],[1,"space-y-8"],[1,"border-2","border-gray-200","dark:border-gray-700","rounded-lg","p-5"],[1,"text-lg","font-semibold","text-gray-800","dark:text-gray-200","mb-4"],[1,"text-sm","text-lg","text-gray-700","dark:text-gray-300","leading-relaxed","mb-2"],["pInputText","","type","text","placeholder","Type to search...",1,"w-full","mb-2",3,"ngModelChange","ngModel"],[1,"bg-gray-100","dark:bg-gray-700","p-5","rounded"],["label","Generate Rapid Events","icon","pi pi-bolt",1,"mb-4",3,"click"],[1,"space-y-2","text-base","text-gray-700","dark:text-gray-300","leading-relaxed"],[1,"flex","items-start"],[1,"text-green-500","mr-2"]],template:function(a,n){if(a&1){let l=S();i(0,"div",1)(1,"div",2)(2,"h1",3),t(3,"Backpressure & Rate Limiting"),e(),i(4,"p",4),t(5," Controlling the frequency of emissions to handle high-frequency events efficiently. "),e()(),i(6,"p-card",5)(7,"div",6)(8,"h2",7),t(9,"What is Backpressure?"),e(),i(10,"p",8),t(11," Backpressure occurs when a producer emits values faster than a consumer can process them. Rate limiting operators help control this flow. "),e(),i(12,"div",9)(13,"h3",10),t(14,"Rate Limiting Operators:"),e(),i(15,"ul",11)(16,"li")(17,"strong"),t(18,"debounceTime:"),e(),t(19," Wait for pause, then emit latest"),e(),i(20,"li")(21,"strong"),t(22,"throttleTime:"),e(),t(23," Emit first, then ignore for duration"),e(),i(24,"li")(25,"strong"),t(26,"sampleTime:"),e(),t(27," Emit latest value at intervals"),e(),i(28,"li")(29,"strong"),t(30,"auditTime:"),e(),t(31," Wait for source to complete, emit latest"),e()()()()(),i(32,"p-card",5)(33,"p-tabs",12)(34,"p-tablist")(35,"p-tab",12),t(36,"\u274C Violation"),e(),i(37,"p-tab",13),t(38,"\u2705 Solution"),e()(),i(39,"p-tabpanels")(40,"p-tabpanel",12)(41,"pre",14)(42,"code"),t(43),e()()(),i(44,"p-tabpanel",13)(45,"pre",14)(46,"code"),t(47),e()()()()()(),i(48,"p-card",5)(49,"h2",15),t(50,"Live Demo"),e(),i(51,"div",16)(52,"div",17)(53,"h3",18),t(54,"Debounce (Search Input)"),e(),i(55,"p",19),t(56," Type quickly - notice the debounced value only updates after you stop typing for 300ms "),e(),i(57,"input",20,0),C("ngModelChange",function(d){return u(l),w(n.searchValue,d)||(n.searchValue=d),p(d)}),e(),i(59,"div",21)(60,"p")(61,"strong"),t(62,"Current:"),e(),t(63),e(),i(64,"p")(65,"strong"),t(66,"Debounced (300ms):"),e(),t(67),e()()(),i(68,"div",17)(69,"h3",18),t(70,"Throttle"),e(),i(71,"p-button",22),k("click",function(){return u(l),p(n.testThrottle())}),e(),i(72,"div",21)(73,"p")(74,"strong"),t(75,"Throttled Value:"),e(),t(76),e()()()()(),i(77,"p-card",5)(78,"h2",15),t(79,"Key Takeaways"),e(),i(80,"ul",23)(81,"li",24)(82,"span",25),t(83,"\u2713"),e(),i(84,"span"),t(85,"Use debounceTime for search inputs and form validation"),e()(),i(86,"li",24)(87,"span",25),t(88,"\u2713"),e(),i(89,"span"),t(90,"Use throttleTime for scroll events and mouse movements"),e()(),i(91,"li",24)(92,"span",25),t(93,"\u2713"),e(),i(94,"span"),t(95,"Use sampleTime when you need periodic updates"),e()(),i(96,"li",24)(97,"span",25),t(98,"\u2713"),e(),i(99,"span"),t(100,"Choose appropriate delay times based on use case"),e()()()()()}a&2&&(s(43),x(n.violationCode),s(4),x(n.solutionCode),s(10),T("ngModel",n.searchValue),s(6),m(" ",n.searchValue()),s(4),m(" ",n.debouncedValue()),s(9),m(" ",n.throttledValue()))},dependencies:[V,O,P,Y,q,W,A,Q,M,I,L,B,R,D,_,N],styles:["[_nghost-%COMP%]{display:block;width:100%}"]})};export{U as BackpressureDemoComponent};
