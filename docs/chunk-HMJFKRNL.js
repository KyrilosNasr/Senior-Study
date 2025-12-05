import{c as I}from"./chunk-HQCF4P2J.js";import"./chunk-OFQQBTXX.js";import{b as $}from"./chunk-VHQBVC6O.js";import{a as k,b as q,c as M,d as O,e as D,f as H,g as P}from"./chunk-AH7MQ5KM.js";import"./chunk-K33OWSJ3.js";import"./chunk-UB7WHAP5.js";import{p as _,q as E}from"./chunk-47HPTYDK.js";import{p as y}from"./chunk-FHCI6K3X.js";import"./chunk-FPPZ4BUR.js";import{Hb as g,Jb as u,Ma as l,T as v,U as S,Xb as i,Yb as p,Zb as x,_b as T,ab as C,ha as R,nb as d,ob as c,pb as m,rb as b,sb as h,ub as t,va as o,vb as e}from"./chunk-S2MQBBOY.js";import"./chunk-6HR7AMTL.js";function N(s,r){if(s&1&&(t(0,"div",24)(1,"p",39),i(2),e(),t(3,"p",40),i(4,"\u26A0\uFE0F Multiple HTTP calls!"),e()()),s&2){let a=u();l(2),x("Total Requests: ",a.unsharedRequests())}}function F(s,r){if(s&1&&(t(0,"li"),i(1),e()),s&2){let a=r.$implicit;l(),p(a)}}function U(s,r){if(s&1&&(t(0,"div",25)(1,"ul",41),b(2,F,2,1,"li",null,m),e()()),s&2){let a=u();l(2),h(a.unsharedResults())}}function A(s,r){if(s&1&&(t(0,"div",29)(1,"p",39),i(2),e(),t(3,"p",42),i(4,"\u2705 Single HTTP call shared!"),e()()),s&2){let a=u();l(2),x("Total Requests: ",a.sharedRequests())}}function j(s,r){if(s&1&&(t(0,"li"),i(1),e()),s&2){let a=r.$implicit;l(),p(a)}}function B(s,r){if(s&1&&(t(0,"div",25)(1,"ul",41),b(2,j,2,1,"li",null,m),e()()),s&2){let a=u();l(2),h(a.sharedResults())}}function L(s,r){s&1&&(t(0,"p",43),i(1,"\u2705 Cache hit - no additional requests!"),e())}function z(s,r){if(s&1&&(t(0,"li"),i(1),e()),s&2){let a=r.$implicit;l(),p(a)}}function W(s,r){if(s&1&&(t(0,"div",33),d(1,L,2,0,"p",43),t(2,"ul",41),b(3,z,2,1,"li",null,m),e()()),s&2){let a=u();l(),c(a.cacheHit()?1:-1),l(2),h(a.shareReplayResults())}}var w=class s{apiService=R(I);unsharedRequests=o(0);sharedRequests=o(0);shareReplayRequests=o(0);unsharedResults=o([]);sharedResults=o([]);shareReplayResults=o([]);cacheHit=o(!1);violationCode=`
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
`;testUnshared(){this.unsharedRequests.set(0),this.unsharedResults.set([]);let r=this.apiService.simulateApiCall("Data",500);r.subscribe({next:a=>{this.unsharedRequests.update(n=>n+1),this.unsharedResults.update(n=>[...n,`Request ${this.unsharedRequests()}: ${a}`])}}),r.subscribe({next:a=>{this.unsharedRequests.update(n=>n+1),this.unsharedResults.update(n=>[...n,`Request ${this.unsharedRequests()}: ${a}`])}}),r.subscribe({next:a=>{this.unsharedRequests.update(n=>n+1),this.unsharedResults.update(n=>[...n,`Request ${this.unsharedRequests()}: ${a}`])}})}testShared(){this.sharedRequests.set(0),this.sharedResults.set([]);let r=this.apiService.simulateApiCall("Data",500).pipe(v());r.subscribe({next:a=>{this.sharedRequests.update(n=>n+1),this.sharedResults.update(n=>[...n,`Subscriber ${this.sharedRequests()}: ${a}`])}}),r.subscribe({next:a=>{this.sharedRequests.update(n=>n+1),this.sharedResults.update(n=>[...n,`Subscriber ${this.sharedRequests()}: ${a}`])}}),r.subscribe({next:a=>{this.sharedRequests.update(n=>n+1),this.sharedResults.update(n=>[...n,`Subscriber ${this.sharedRequests()}: ${a}`])}})}testShareReplay(){this.shareReplayRequests.set(0),this.shareReplayResults.set([]),this.cacheHit.set(!1);let r=this.apiService.simulateApiCall("Cached Data",500).pipe(S({bufferSize:1,refCount:!1}));r.subscribe({next:a=>{this.shareReplayRequests.update(n=>n+1),this.shareReplayResults.update(n=>[...n,`Subscriber 1 (initial): ${a}`])}}),setTimeout(()=>{this.cacheHit.set(!0),r.subscribe({next:a=>{this.shareReplayResults.update(n=>[...n,`Subscriber 2 (cached): ${a}`])}}),r.subscribe({next:a=>{this.shareReplayResults.update(n=>[...n,`Subscriber 3 (cached): ${a}`])}})},1e3)}static \u0275fac=function(a){return new(a||s)};static \u0275cmp=C({type:s,selectors:[["app-multicasting-operators-demo"]],decls:117,vars:9,consts:[[1,"max-w-7xl","mx-auto","space-y-8"],[1,"bg-white","dark:bg-gray-800","rounded-lg","shadow-lg","p-8"],[1,"text-4xl","font-bold","text-gray-900","dark:text-gray-100","mb-3"],[1,"text-lg","text-gray-700","dark:text-gray-300"],[1,"shadow-lg"],[1,"space-y-4"],[1,"text-3xl","font-semibold","text-gray-900","dark:text-gray-100","mb-3"],[1,"text-base","text-gray-700","dark:text-gray-300","leading-relaxed"],[1,"bg-blue-50","dark:bg-blue-900/30","p-5","rounded-lg","border","border-blue-200","dark:border-blue-800"],[1,"text-lg","font-semibold","text-blue-900","dark:text-blue-100","mb-3"],[1,"list-disc","list-inside","space-y-2","text-base","text-blue-800","dark:text-blue-200"],[1,"bg-red-50","dark:bg-red-900/30","p-5","rounded-lg","border","border-red-200","dark:border-red-800"],[1,"text-lg","font-semibold","text-red-900","dark:text-red-100","mb-3"],[1,"text-base","text-red-800","dark:text-red-200","leading-relaxed"],["value","0"],["value","1"],[1,"overflow-x-auto"],[1,"text-3xl","font-semibold","text-gray-900","dark:text-gray-100","mb-4"],[1,"text-base","text-gray-700","dark:text-gray-300","mb-6","leading-relaxed"],[1,"space-y-6"],[1,"border-2","border-red-200","dark:border-red-800","rounded-lg","p-4"],[1,"text-lg","font-semibold","text-red-800","dark:text-red-200","mb-4"],[1,"text-sm","text-gray-600","dark:text-gray-400","mb-2"],["label","Test Unshared (3 subscriptions)","icon","pi pi-times-circle","severity","danger",1,"mb-4",3,"click"],[1,"bg-red-50","dark:bg-red-900/20","p-4","rounded","mb-2"],[1,"bg-gray-100","dark:bg-gray-700","p-4","rounded"],[1,"border-2","border-green-200","dark:border-green-800","rounded-lg","p-4"],[1,"text-lg","font-semibold","text-green-800","dark:text-green-200","mb-4"],["label","Test share() (3 subscriptions)","icon","pi pi-check-circle","severity","success",1,"mb-4",3,"click"],[1,"bg-green-50","dark:bg-green-900/20","p-4","rounded","mb-2"],[1,"border-2","border-blue-200","dark:border-blue-800","rounded-lg","p-4"],[1,"text-lg","font-semibold","text-blue-800","dark:text-blue-200","mb-4"],["label","Test shareReplay() (Caching)","icon","pi pi-database",1,"mb-4",3,"click"],[1,"bg-blue-50","dark:bg-blue-900/20","p-4","rounded","mb-2"],[1,"text-3xl","font-semibold","text-gray-900","dark:text-gray-100","mb-5"],[1,"space-y-3","text-base","text-gray-700","dark:text-gray-300"],[1,"flex","items-start"],[1,"text-green-500","mr-2"],[1,"text-red-500","mr-2"],[1,"text-sm","font-semibold"],[1,"text-xs","text-red-700","dark:text-red-300"],[1,"list-disc","list-inside","text-xs","space-y-1"],[1,"text-xs","text-green-700","dark:text-green-300"],[1,"text-xs","text-blue-700","dark:text-blue-300","mb-2"]],template:function(a,n){a&1&&(t(0,"div",0)(1,"div",1)(2,"h1",2),i(3,"Part 7: Multicasting Operators"),e(),t(4,"p",3),i(5," Performance optimization: "),t(6,"code"),i(7,"share()"),e(),i(8," and "),t(9,"code"),i(10,"shareReplay()"),e()()(),t(11,"p-card",4)(12,"div",5)(13,"h2",6),i(14,"Multicasting Operators"),e(),t(15,"p",7),i(16," Multicasting operators share observable execution among multiple subscribers, preventing duplicate HTTP calls and improving performance. Critical for production applications. "),e(),t(17,"div",8)(18,"h3",9),i(19,"Key Operators:"),e(),t(20,"ul",10)(21,"li")(22,"strong"),i(23,"share():"),e(),i(24," Hot observable, no replay - Multiple subscribers share execution"),e(),t(25,"li")(26,"strong"),i(27,"shareReplay():"),e(),i(28," Replays last n values to new subscribers - Perfect for caching"),e()()(),t(29,"div",11)(30,"h3",12),i(31,"\u26A0\uFE0F Common Mistake:"),e(),t(32,"p",13),i(33," Without sharing, each subscription to an HTTP observable creates a new HTTP request. This can cause performance issues and unnecessary server load. "),e()()()(),t(34,"p-card",4)(35,"p-tabs",14)(36,"p-tablist")(37,"p-tab",14),i(38,"\u274C Violation"),e(),t(39,"p-tab",15),i(40,"\u2705 Solution"),e()(),t(41,"p-tabpanels")(42,"p-tabpanel",14)(43,"pre",16)(44,"code"),i(45),e()()(),t(46,"p-tabpanel",15)(47,"pre",16)(48,"code"),i(49),e()()()()()(),t(50,"p-card",4)(51,"h2",17),i(52,"Live Demo"),e(),t(53,"p",18),i(54," Compare unshared vs shared observables. Notice the difference in request count. "),e(),t(55,"div",19)(56,"div",20)(57,"h3",21),i(58,"\u274C Unshared Observable"),e(),t(59,"p",22),i(60," Each subscription creates a new request. 3 subscriptions = 3 requests! "),e(),t(61,"p-button",23),g("click",function(){return n.testUnshared()}),e(),d(62,N,5,1,"div",24),d(63,U,4,0,"div",25),e(),t(64,"div",26)(65,"h3",27),i(66,"\u2705 Shared Observable"),e(),t(67,"p",22),i(68," Multiple subscriptions share execution. 3 subscriptions = 1 request! "),e(),t(69,"p-button",28),g("click",function(){return n.testShared()}),e(),d(70,A,5,1,"div",29),d(71,B,4,0,"div",25),e(),t(72,"div",30)(73,"h3",31),i(74,"\u2705 shareReplay() - Cached"),e(),t(75,"p",22),i(76," First subscription makes request, subsequent subscriptions use cached result. "),e(),t(77,"p-button",32),g("click",function(){return n.testShareReplay()}),e(),d(78,W,5,1,"div",33),e()()(),t(79,"p-card",4)(80,"h2",34),i(81,"Key Takeaways"),e(),t(82,"ul",35)(83,"li",36)(84,"span",37),i(85,"\u2713"),e(),t(86,"span"),i(87,"Always use "),t(88,"code"),i(89,"shareReplay()"),e(),i(90," for HTTP observables that multiple components might subscribe to"),e()(),t(91,"li",36)(92,"span",37),i(93,"\u2713"),e(),t(94,"span"),i(95,"Use "),t(96,"code"),i(97),e(),i(98," for configuration that should stay cached"),e()(),t(99,"li",36)(100,"span",37),i(101,"\u2713"),e(),t(102,"span"),i(103,"Use "),t(104,"code"),i(105,"share()"),e(),i(106," for real-time data where caching isn't needed"),e()(),t(107,"li",36)(108,"span",37),i(109,"\u2713"),e(),t(110,"span"),i(111,"Without sharing, each subscription = new HTTP call - major performance issue!"),e()(),t(112,"li",36)(113,"span",38),i(114,"\u2717"),e(),t(115,"span"),i(116,"Never expose HTTP observables without sharing - causes duplicate requests"),e()()()()()),a&2&&(l(45),p(n.violationCode),l(4),p(n.solutionCode),l(13),c(n.unsharedRequests()>0?62:-1),l(),c(n.unsharedResults().length>0?63:-1),l(7),c(n.sharedRequests()>0?70:-1),l(),c(n.sharedResults().length>0?71:-1),l(7),c(n.shareReplayResults().length>0?78:-1),l(19),T("shareReplay(","{"," bufferSize: 1, refCount: false ","}",")"))},dependencies:[y,q,k,P,O,M,D,H,E,_,$],styles:["[_nghost-%COMP%]{display:block;width:100%}"]})};export{w as MulticastingOperatorsDemoComponent};
