import{c as Z}from"./chunk-HQCF4P2J.js";import"./chunk-OFQQBTXX.js";import{b as M,c as _,e as I,f as A,g as B,h as d,j as L,k as O,l as P,m as U,n as G,o as V,q as J,s as W,t as $}from"./chunk-5TVMUKYR.js";import{b as Y}from"./chunk-VHQBVC6O.js";import{a as j,b as H,c as K,d as q,e as z,f as Q,g as X}from"./chunk-AH7MQ5KM.js";import"./chunk-K33OWSJ3.js";import"./chunk-UB7WHAP5.js";import{q as N}from"./chunk-47HPTYDK.js";import{o as k,p as D}from"./chunk-FHCI6K3X.js";import"./chunk-FPPZ4BUR.js";import{G as h,Jb as w,K as v,Ma as o,V as m,W as b,Xb as i,Yb as s,ab as y,ha as f,ic as R,jc as T,n as g,nb as p,ob as u,rb as S,sb as C,t as x,tb as E,ub as t,va as c,vb as e,wb as F}from"./chunk-S2MQBBOY.js";import"./chunk-6HR7AMTL.js";var te=(n,a)=>a.id;function ie(n,a){n&1&&(t(0,"p",27),i(1,"Searching..."),e())}function ae(n,a){if(n&1&&(t(0,"li"),i(1),R(2,"json"),e()),n&2){let r=a.$implicit;o(),s(T(2,1,r))}}function ne(n,a){if(n&1&&(t(0,"div",28)(1,"h3",32),i(2,"Results:"),e(),t(3,"ul",33),S(4,ae,3,3,"li",null,te),e()()),n&2){let r=w();o(4),C(r.searchResults())}}var ee=class n{apiService=f(Z);searchForm=new B({search:new d("",[_.minLength(2)]),category:new d("all"),sortBy:new d("name")});searchResults=c([]);isSearching=c(!1);violationCode=`
// \u274C VIOLATION: Manual Event Handling
// No debouncing, no reactive patterns

onSearchChange(event: Event) {
  const value = (event.target as HTMLInputElement).value;
  if (value.length >= 2) {
    // Called on every keystroke - too many API calls!
    this.search(value);
  }
}
`;solutionCode=`
// \u2705 SOLUTION: Reactive Forms with RxJS
// Debounced, reactive, composable

searchForm = new FormGroup({
  search: new FormControl(''),
  category: new FormControl('all'),
  sortBy: new FormControl('name')
});

// Combine multiple form controls reactively
searchResults$ = combineLatest([
  this.searchForm.get('search')!.valueChanges.pipe(
    startWith(''),
    debounceTime(300),
    distinctUntilChanged()
  ),
  this.searchForm.get('category')!.valueChanges.pipe(startWith('all')),
  this.searchForm.get('sortBy')!.valueChanges.pipe(startWith('name'))
]).pipe(
  switchMap(([search, category, sortBy]) =>
    this.searchService.search({ search, category, sortBy })
  ),
  shareReplay(1)
);
`;constructor(){x([this.searchForm.get("search").valueChanges.pipe(m(""),h(300),v()),this.searchForm.get("category").valueChanges.pipe(m("all")),this.searchForm.get("sortBy").valueChanges.pipe(m("name"))]).pipe(b(([a,r,l])=>!a||a.length<2?g([]):(this.isSearching.set(!0),this.apiService.simulateApiCall([{id:1,name:`Result for "${a}"`,category:r,sortBy:l}],500)))).subscribe({next:a=>{this.searchResults.set(a),this.isSearching.set(!1)},error:()=>{this.isSearching.set(!1)}})}static \u0275fac=function(r){return new(r||n)};static \u0275cmp=y({type:n,selectors:[["app-reactive-forms-demo"]],decls:95,vars:5,consts:[[1,"max-w-7xl","mx-auto","space-y-8"],[1,"bg-white","dark:bg-gray-800","rounded-lg","shadow-lg","p-8"],[1,"text-4xl","font-bold","text-gray-900","dark:text-gray-100","mb-3"],[1,"text-lg","text-gray-700","dark:text-gray-300","leading-relaxed"],[1,"shadow-lg"],[1,"space-y-4"],[1,"text-3xl","font-semibold","text-gray-900","dark:text-gray-100","mb-3"],[1,"text-base","text-gray-700","dark:text-gray-300","leading-relaxed"],[1,"bg-blue-50","dark:bg-blue-900/30","p-5","rounded-lg","border","border-blue-200","dark:border-blue-800"],[1,"text-lg","font-semibold","text-blue-900","dark:text-blue-100","mb-3"],[1,"list-disc","list-inside","space-y-2","text-base","text-blue-800","dark:text-blue-200"],["value","0"],["value","1"],[1,"overflow-x-auto"],[1,"text-3xl","font-semibold","text-gray-900","dark:text-gray-100","mb-3","mb-4"],[1,"text-base","text-gray-700","dark:text-gray-300","leading-relaxed","mb-6"],[1,"space-y-4",3,"formGroup"],[1,"block","text-sm","font-medium","text-base","text-gray-700","dark:text-gray-300","leading-relaxed","mb-2"],["pInputText","","type","text","formControlName","search","placeholder","Type to search (min 2 characters)...",1,"w-full"],[1,"grid","grid-cols-2","gap-5"],["formControlName","category",1,"w-full","p-2","border","rounded"],["value","all"],["value","tech"],["value","design"],["formControlName","sortBy",1,"w-full","p-2","border","rounded"],["value","name"],["value","date"],[1,"text-lg","text-gray-700","dark:text-gray-300","leading-relaxed","mt-4"],[1,"mt-4","bg-gray-100","dark:bg-gray-700","p-5","rounded"],[1,"space-y-2","text-base","text-gray-700","dark:text-gray-300","leading-relaxed"],[1,"flex","items-start"],[1,"text-green-500","mr-2"],[1,"font-semibold","mb-2"],[1,"list-disc","list-inside"]],template:function(r,l){r&1&&(t(0,"div",0)(1,"div",1)(2,"h1",2),i(3,"Reactive Forms Integration"),e(),t(4,"p",3),i(5," Combining Angular Reactive Forms with RxJS for powerful form handling patterns. "),e()(),t(6,"p-card",4)(7,"div",5)(8,"h2",6),i(9,"RxJS + Reactive Forms"),e(),t(10,"p",7),i(11," Reactive Forms' valueChanges is an Observable, making it perfect for integration with RxJS operators like debounceTime, distinctUntilChanged, and combineLatest. "),e(),t(12,"div",8)(13,"h3",9),i(14,"Common Patterns:"),e(),t(15,"ul",10)(16,"li"),i(17,"Debounced search inputs"),e(),t(18,"li"),i(19,"Combining multiple form controls"),e(),t(20,"li"),i(21,"Async validation"),e(),t(22,"li"),i(23,"Auto-save with auditTime"),e()()()()(),t(24,"p-card",4)(25,"p-tabs",11)(26,"p-tablist")(27,"p-tab",11),i(28,"\u274C Violation"),e(),t(29,"p-tab",12),i(30,"\u2705 Solution"),e()(),t(31,"p-tabpanels")(32,"p-tabpanel",11)(33,"pre",13)(34,"code"),i(35),e()()(),t(36,"p-tabpanel",12)(37,"pre",13)(38,"code"),i(39),e()()()()()(),t(40,"p-card",4)(41,"h2",14),i(42,"Live Demo"),e(),t(43,"p",15),i(44," Type in the search field - notice how results only appear after you stop typing for 300ms (debounced). "),e(),t(45,"form",16)(46,"div")(47,"label",17),i(48,"Search"),e(),F(49,"input",18),e(),t(50,"div",19)(51,"div")(52,"label",17),i(53,"Category"),e(),t(54,"select",20)(55,"option",21),i(56,"All"),e(),t(57,"option",22),i(58,"Tech"),e(),t(59,"option",23),i(60,"Design"),e()()(),t(61,"div")(62,"label",17),i(63,"Sort By"),e(),t(64,"select",24)(65,"option",25),i(66,"Name"),e(),t(67,"option",26),i(68,"Date"),e()()()()(),p(69,ie,2,0,"p",27),p(70,ne,6,0,"div",28),e(),t(71,"p-card",4)(72,"h2",14),i(73,"Key Takeaways"),e(),t(74,"ul",29)(75,"li",30)(76,"span",31),i(77,"\u2713"),e(),t(78,"span"),i(79,"Use valueChanges with debounceTime for search inputs"),e()(),t(80,"li",30)(81,"span",31),i(82,"\u2713"),e(),t(83,"span"),i(84,"Combine multiple form controls with combineLatest"),e()(),t(85,"li",30)(86,"span",31),i(87,"\u2713"),e(),t(88,"span"),i(89,"Use distinctUntilChanged to prevent duplicate API calls"),e()(),t(90,"li",30)(91,"span",31),i(92,"\u2713"),e(),t(93,"span"),i(94,"Use startWith to provide initial values"),e()()()()()),r&2&&(o(35),s(l.violationCode),o(4),s(l.solutionCode),o(6),E("formGroup",l.searchForm),o(24),u(l.isSearching()?69:-1),o(),u(l.searchResults().length>0?70:-1))},dependencies:[D,J,L,G,V,M,U,I,A,O,P,H,j,X,q,K,z,Q,N,$,W,Y,k],styles:["[_nghost-%COMP%]{display:block;width:100%}"]})};export{ee as ReactiveFormsDemoComponent};
