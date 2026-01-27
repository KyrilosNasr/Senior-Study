import{c as $}from"./chunk-LFGOYEYT.js";import"./chunk-CMZ4I467.js";import{a as P}from"./chunk-CJQBBBJE.js";import{b as H}from"./chunk-PKLQWDLD.js";import{a as q,b as M,c as O,d as w,e as D}from"./chunk-3ZW5MUH5.js";import"./chunk-SHEHAVXT.js";import{a as _,b as k}from"./chunk-ST7OVFPO.js";import"./chunk-3N3GZBUB.js";import"./chunk-4O3FVBGX.js";import"./chunk-QCJRPF2F.js";import"./chunk-IZU7C3FN.js";import{r as E}from"./chunk-BO564T5E.js";import"./chunk-FPPZ4BUR.js";import{Cb as c,Db as u,Eb as h,Gb as b,Hb as g,Jb as e,Kb as t,Lb as o,T as S,U as C,Wb as x,Yb as p,Za as l,ha as R,kc as i,lc as m,mc as f,nb as T,nc as y,va as d}from"./chunk-6P3ZW5D6.js";import"./chunk-6HR7AMTL.js";function N(s,r){if(s&1&&(e(0,"div",48)(1,"p",60),i(2),t(),e(3,"p",61),i(4,"\u26A0\uFE0F Multiple HTTP calls!"),t()()),s&2){let a=p();l(2),f("Total Requests: ",a.unsharedRequests())}}function j(s,r){if(s&1&&(e(0,"li"),i(1),t()),s&2){let a=r.$implicit;l(),m(a)}}function U(s,r){if(s&1&&(e(0,"div",49)(1,"ul",62),b(2,j,2,1,"li",null,h),t()()),s&2){let a=p();l(2),g(a.unsharedResults())}}function F(s,r){if(s&1&&(e(0,"div",53)(1,"p",60),i(2),t(),e(3,"p",63),i(4,"\u2705 Single HTTP call shared!"),t()()),s&2){let a=p();l(2),f("Total Requests: ",a.sharedRequests())}}function A(s,r){if(s&1&&(e(0,"li"),i(1),t()),s&2){let a=r.$implicit;l(),m(a)}}function z(s,r){if(s&1&&(e(0,"div",49)(1,"ul",62),b(2,A,2,1,"li",null,h),t()()),s&2){let a=p();l(2),g(a.sharedResults())}}function B(s,r){s&1&&(e(0,"p",64),i(1,"\u2705 Cache hit - no additional requests!"),t())}function L(s,r){if(s&1&&(e(0,"li"),i(1),t()),s&2){let a=r.$implicit;l(),m(a)}}function W(s,r){if(s&1&&(e(0,"div",57),c(1,B,2,0,"p",64),e(2,"ul",62),b(3,L,2,1,"li",null,h),t()()),s&2){let a=p();l(),u(a.cacheHit()?1:-1),l(2),g(a.shareReplayResults())}}var I=class s{apiService=R($);unsharedRequests=d(0);sharedRequests=d(0);shareReplayRequests=d(0);unsharedResults=d([]);sharedResults=d([]);shareReplayResults=d([]);cacheHit=d(!1);violationCode=`
// \u274C VIOLATION: Multiple HTTP Calls
// Each subscription creates a new HTTP request

@Injectable()
export class ConfigService {
  private http = inject(HttpClient);
  
  // WRONG - Multiple subscriptions = multiple HTTP calls
  getConfig() {
    return this.http.get('/api/config');
  }
}

// In component
ngOnInit() {
  // Subscription 1 - HTTP call 1
  this.configService.getConfig().subscribe(config => {
    this.config = config;
  });
  
  // Subscription 2 - HTTP call 2 (duplicate!)
  this.configService.getConfig().subscribe(config => {
    this.otherConfig = config;
  });
  
  // Subscription 3 - HTTP call 3 (duplicate!)
  this.configService.getConfig().subscribe(config => {
    this.anotherConfig = config;
  });
  // Result: 3 identical HTTP calls!
}
`;solutionCode=`
// \u2705 SOLUTION: Multicasting Operators
// Single HTTP call, shared result, cached for new subscribers

@Injectable({ providedIn: 'root' })
export class ConfigService {
  private http = inject(HttpClient);
  
  // CORRECT - Cached configuration, loaded once
  config$ = this.http.get<Config>('/api/config').pipe(
    shareReplay({ bufferSize: 1, refCount: false }), // refCount: false keeps alive
    catchError(() => of(DEFAULT_CONFIG))
  );
  
  // Real-time data - no caching
  liveData$ = this.wsService.connect().pipe(
    share() // Multiple subscribers share connection
  );
}

// In component
ngOnInit() {
  // Subscription 1 - HTTP call 1
  this.configService.config$.subscribe(config => {
    this.config = config;
  });
  
  // Subscription 2 - Uses cached result (no HTTP call)
  this.configService.config$.subscribe(config => {
    this.otherConfig = config;
  });
  
  // Subscription 3 - Uses cached result (no HTTP call)
  this.configService.config$.subscribe(config => {
    this.anotherConfig = config;
  });
  // Result: 1 HTTP call, 3 subscribers get the same result!
}

// share() vs shareReplay()
// share(): Hot observable, no replay - new subscribers miss previous values
// shareReplay(): Replays last n values to new subscribers - perfect for caching
`;testUnshared(){this.unsharedRequests.set(0),this.unsharedResults.set([]);let r=this.apiService.simulateApiCall("Data",500);r.subscribe({next:a=>{this.unsharedRequests.update(n=>n+1),this.unsharedResults.update(n=>[...n,`Request ${this.unsharedRequests()}: ${a}`])}}),r.subscribe({next:a=>{this.unsharedRequests.update(n=>n+1),this.unsharedResults.update(n=>[...n,`Request ${this.unsharedRequests()}: ${a}`])}}),r.subscribe({next:a=>{this.unsharedRequests.update(n=>n+1),this.unsharedResults.update(n=>[...n,`Request ${this.unsharedRequests()}: ${a}`])}})}testShared(){this.sharedRequests.set(0),this.sharedResults.set([]);let r=this.apiService.simulateApiCall("Data",500).pipe(S());r.subscribe({next:a=>{this.sharedRequests.update(n=>n+1),this.sharedResults.update(n=>[...n,`Subscriber ${this.sharedRequests()}: ${a}`])}}),r.subscribe({next:a=>{this.sharedRequests.update(n=>n+1),this.sharedResults.update(n=>[...n,`Subscriber ${this.sharedRequests()}: ${a}`])}}),r.subscribe({next:a=>{this.sharedRequests.update(n=>n+1),this.sharedResults.update(n=>[...n,`Subscriber ${this.sharedRequests()}: ${a}`])}})}testShareReplay(){this.shareReplayRequests.set(0),this.shareReplayResults.set([]),this.cacheHit.set(!1);let r=this.apiService.simulateApiCall("Cached Data",500).pipe(C({bufferSize:1,refCount:!1}));r.subscribe({next:a=>{this.shareReplayRequests.update(n=>n+1),this.shareReplayResults.update(n=>[...n,`Subscriber 1 (initial): ${a}`])}}),setTimeout(()=>{this.cacheHit.set(!0),r.subscribe({next:a=>{this.shareReplayResults.update(n=>[...n,`Subscriber 2 (cached): ${a}`])}}),r.subscribe({next:a=>{this.shareReplayResults.update(n=>[...n,`Subscriber 3 (cached): ${a}`])}})},1e3)}static \u0275fac=function(a){return new(a||s)};static \u0275cmp=T({type:s,selectors:[["app-multicasting-operators-demo"]],decls:140,vars:9,consts:[[1,"container-responsive","space-y-responsive"],[1,"card-modern","padding-responsive","hover-lift","slide-in-up"],[1,"flex","flex-col","lg:flex-row","lg:items-center","lg:justify-between","gap-6"],[1,"flex-1"],[1,"flex","items-center","gap-3","mb-4"],[1,"w-12","h-12","sm:w-14","sm:h-14","rounded-xl","bg-gradient-to-br","from-purple-500","to-pink-600","flex","items-center","justify-center","shadow-lg"],[1,"fas","fa-share-alt","text-white","text-xl","sm:text-2xl"],[1,"badge-modern","text-xs","sm:text-sm"],[1,"heading-responsive","text-gradient","mb-4"],[1,"text-responsive","text-gray-700","dark:text-gray-300"],[1,"hidden","lg:block"],[1,"w-32","h-32","rounded-2xl","bg-gradient-to-br","from-purple-500/20","to-pink-600/20","flex","items-center","justify-center"],[1,"fas","fa-share-alt","text-6xl","text-purple-500"],[1,"card-modern","hover-lift","slide-in-up"],[1,"padding-responsive","space-y-6"],[1,"w-10","h-10","rounded-lg","bg-gradient-to-br","from-blue-500","to-purple-600","flex","items-center","justify-center"],[1,"fas","fa-lightbulb","text-white"],[1,"subheading-responsive","text-gray-900","dark:text-gray-100"],[1,"text-responsive","text-gray-700","dark:text-gray-300","leading-relaxed"],[1,"glass","rounded-xl","p-6","border-l-4","border-accent"],[1,"fas","fa-star","text-accent","text-xl"],[1,"text-lg","sm:text-xl","font-semibold","text-gray-900","dark:text-gray-100"],[1,"list-modern"],[1,"text-sm","sm:text-base","text-gray-800","dark:text-gray-200"],[1,"glass","rounded-xl","p-6","border-l-4","border-red-500"],[1,"fas","fa-exclamation-triangle","text-red-500","text-xl"],[1,"padding-responsive"],[1,"flex","items-center","gap-3","mb-6"],[1,"w-10","h-10","rounded-lg","bg-gradient-to-br","from-green-500","to-teal-600","flex","items-center","justify-center"],[1,"fas","fa-code","text-white"],["value","0"],[1,"flex","flex-wrap","gap-2","mb-6"],["value","0",1,"flex","items-center","gap-2"],[1,"fas","fa-times-circle","text-red-500"],[1,"text-sm","sm:text-base","font-semibold"],["value","1",1,"flex","items-center","gap-2"],[1,"fas","fa-check-circle","text-green-500"],[1,"code-block-modern"],[1,"overflow-x-auto","text-sm","sm:text-base"],["value","1"],[1,"w-10","h-10","rounded-lg","bg-gradient-to-br","from-purple-500","to-pink-600","flex","items-center","justify-center"],[1,"fas","fa-play-circle","text-white"],[1,"text-responsive","text-gray-700","dark:text-gray-300","mb-8"],[1,"space-y-6"],[1,"border-2","border-red-200","dark:border-red-800","rounded-lg","p-4"],[1,"text-lg","font-semibold","text-red-800","dark:text-red-200","mb-4"],[1,"text-sm","text-gray-600","dark:text-gray-400","mb-2"],["label","Test Unshared (3 subscriptions)","icon","pi pi-times-circle",1,"mb-4",3,"buttonClick"],[1,"bg-red-50","dark:bg-red-900/20","p-4","rounded","mb-2"],[1,"bg-gray-100","dark:bg-gray-700","p-4","rounded"],[1,"border-2","border-green-200","dark:border-green-800","rounded-lg","p-4"],[1,"text-lg","font-semibold","text-green-800","dark:text-green-200","mb-4"],["label","Test share() (3 subscriptions)","icon","pi pi-check-circle",1,"mb-4",3,"buttonClick"],[1,"bg-green-50","dark:bg-green-900/20","p-4","rounded","mb-2"],[1,"border-2","border-blue-200","dark:border-blue-800","rounded-lg","p-4"],[1,"text-lg","font-semibold","text-blue-800","dark:text-blue-200","mb-4"],["label","Test shareReplay() (Caching)","icon","pi pi-database",1,"mb-4",3,"buttonClick"],[1,"bg-blue-50","dark:bg-blue-900/20","p-4","rounded","mb-2"],[1,"w-10","h-10","rounded-lg","bg-gradient-to-br","from-teal-500","to-cyan-600","flex","items-center","justify-center"],[1,"fas","fa-graduation-cap","text-white"],[1,"text-sm","font-semibold"],[1,"text-xs","text-red-700","dark:text-red-300"],[1,"list-disc","list-inside","text-xs","space-y-1"],[1,"text-xs","text-green-700","dark:text-green-300"],[1,"text-xs","text-blue-700","dark:text-blue-300","mb-2"]],template:function(a,n){a&1&&(e(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5),o(6,"i",6),t(),e(7,"div")(8,"span",7),i(9,"RxJS Operators"),t()()(),e(10,"h1",8),i(11," Multicasting Operators "),t(),e(12,"p",9),i(13," Performance optimization: "),e(14,"code"),i(15,"share()"),t(),i(16," and "),e(17,"code"),i(18,"shareReplay()"),t()()(),e(19,"div",10)(20,"div",11),o(21,"i",12),t()()()(),e(22,"p-card",13)(23,"div",14)(24,"div",4)(25,"div",15),o(26,"i",16),t(),e(27,"h2",17),i(28,"What are Multicasting Operators?"),t()(),e(29,"p",18),i(30," Multicasting operators share observable execution among multiple subscribers, preventing duplicate HTTP calls and improving performance. Critical for production applications. "),t(),e(31,"div",19)(32,"div",4),o(33,"i",20),e(34,"h3",21),i(35,"Key Operators"),t()(),e(36,"ul",22)(37,"li",23)(38,"strong"),i(39,"share():"),t(),i(40," Hot observable, no replay - Multiple subscribers share execution "),t(),e(41,"li",23)(42,"strong"),i(43,"shareReplay():"),t(),i(44," Replays last n values to new subscribers - Perfect for caching "),t()()(),e(45,"div",24)(46,"div",4),o(47,"i",25),e(48,"h3",21),i(49,"Common Mistake"),t()(),e(50,"p",23),i(51," Without sharing, each subscription to an HTTP observable creates a new HTTP request. This can cause performance issues and unnecessary server load. "),t()()()(),e(52,"p-card",13)(53,"div",26)(54,"div",27)(55,"div",28),o(56,"i",29),t(),e(57,"h2",17),i(58,"Code Examples"),t()(),e(59,"p-tabs",30)(60,"p-tablist",31)(61,"p-tab",32),o(62,"i",33),e(63,"span",34),i(64,"Violation"),t()(),e(65,"p-tab",35),o(66,"i",36),e(67,"span",34),i(68,"Solution"),t()()(),e(69,"p-tabpanels")(70,"p-tabpanel",30)(71,"div",37)(72,"pre",38)(73,"code"),i(74),t()()()(),e(75,"p-tabpanel",39)(76,"div",37)(77,"pre",38)(78,"code"),i(79),t()()()()()()()(),e(80,"p-card",13)(81,"div",26)(82,"div",4)(83,"div",40),o(84,"i",41),t(),e(85,"h2",17),i(86,"Interactive Demo"),t()(),e(87,"p",42),i(88," Compare unshared vs shared observables. Notice the difference in request count. "),t(),e(89,"div",43)(90,"div",44)(91,"h3",45),i(92,"\u274C Unshared Observable"),t(),e(93,"p",46),i(94," Each subscription creates a new request. 3 subscriptions = 3 requests! "),t(),e(95,"app-enhanced-button",47),x("buttonClick",function(){return n.testUnshared()}),t(),c(96,N,5,1,"div",48),c(97,U,4,0,"div",49),t(),e(98,"div",50)(99,"h3",51),i(100,"\u2705 Shared Observable"),t(),e(101,"p",46),i(102," Multiple subscriptions share execution. 3 subscriptions = 1 request! "),t(),e(103,"app-enhanced-button",52),x("buttonClick",function(){return n.testShared()}),t(),c(104,F,5,1,"div",53),c(105,z,4,0,"div",49),t(),e(106,"div",54)(107,"h3",55),i(108,"\u2705 shareReplay() - Cached"),t(),e(109,"p",46),i(110," First subscription makes request, subsequent subscriptions use cached result. "),t(),e(111,"app-enhanced-button",56),x("buttonClick",function(){return n.testShareReplay()}),t(),c(112,W,5,1,"div",57),t()()()(),e(113,"p-card",13)(114,"div",26)(115,"div",27)(116,"div",58),o(117,"i",59),t(),e(118,"h2",17),i(119,"Key Takeaways"),t()(),e(120,"ul",22)(121,"li",23),i(122," Always use "),e(123,"code"),i(124,"shareReplay()"),t(),i(125," for HTTP observables that multiple components might subscribe to "),t(),e(126,"li",23),i(127," Use "),e(128,"code"),i(129),t(),i(130," for configuration that should stay cached "),t(),e(131,"li",23),i(132," Use "),e(133,"code"),i(134,"share()"),t(),i(135," for real-time data where caching isn't needed "),t(),e(136,"li",23),i(137," Without sharing, each subscription = new HTTP call - major performance issue! "),t(),e(138,"li",23),i(139," Never expose HTTP observables without sharing - causes duplicate requests "),t()()()()()),a&2&&(l(74),m(n.violationCode),l(5),m(n.solutionCode),l(17),u(n.unsharedRequests()>0?96:-1),l(),u(n.unsharedResults().length>0?97:-1),l(7),u(n.sharedRequests()>0?104:-1),l(),u(n.sharedResults().length>0?105:-1),l(7),u(n.shareReplayResults().length>0?112:-1),l(17),y("shareReplay(","{"," bufferSize: 1, refCount: false ","}",")"))},dependencies:[E,k,_,D,M,q,O,w,P,H],styles:["[_nghost-%COMP%]{display:block;width:100%}"]})};export{I as MulticastingOperatorsDemoComponent};
