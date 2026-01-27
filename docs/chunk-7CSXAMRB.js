import{a as N}from"./chunk-22WS53IB.js";import{c as z}from"./chunk-LFGOYEYT.js";import"./chunk-CMZ4I467.js";import{d as w,e as T}from"./chunk-26I6QKGV.js";import"./chunk-DS4DKGB5.js";import"./chunk-YPUDPSQH.js";import"./chunk-DEGWJE5E.js";import{a as j,b as O}from"./chunk-PKLQWDLD.js";import{a as _,b as A,c as M,d as I,e as P}from"./chunk-3ZW5MUH5.js";import"./chunk-SHEHAVXT.js";import{a as D,b as k}from"./chunk-ST7OVFPO.js";import"./chunk-3N3GZBUB.js";import"./chunk-4O3FVBGX.js";import"./chunk-QCJRPF2F.js";import"./chunk-IZU7C3FN.js";import{q as y,r as E}from"./chunk-BO564T5E.js";import"./chunk-FPPZ4BUR.js";import{Cb as h,Db as g,Ec as S,Fc as C,Ib as f,Jb as t,Kb as e,Lb as i,Wb as v,Yb as u,Za as d,ha as p,kc as a,lc as m,mc as b,nb as x,va as s}from"./chunk-6P3ZW5D6.js";import"./chunk-6HR7AMTL.js";function F(n,o){if(n&1&&i(0,"p-message",47),n&2){let r=u();f("severity",r.cachedData()?"success":"info")("text",r.message())}}function q(n,o){n&1&&(t(0,"div",48)(1,"pre",51),a(2),S(3,"json"),e()()),n&2&&(d(2),m(C(3,1,o)))}var L=class n{cacheService=p(N);apiService=p(z);cachedData=s(null);cacheSize=s(0);message=s("");violationCode=`
// \u274C VIOLATION: No Caching
// Every request hits the API

getData(): Observable<Data> {
  return this.http.get('/api/data'); // Always makes HTTP call
}

// Multiple components call this
component1.getData().subscribe(); // HTTP call 1
component2.getData().subscribe(); // HTTP call 2
component3.getData().subscribe(); // HTTP call 3
// 3 identical HTTP calls!
`;solutionCode=`
// \u2705 SOLUTION: Advanced Caching
// Stale-while-revalidate pattern

@Injectable()
export class CacheService {
  private cache = new Map<string, CacheEntry>();
  
  getCached<T>(
    key: string,
    requestFn: () => Observable<T>,
    useStale: boolean = true,
    ttl: number = 5 * 60 * 1000
  ): Observable<T> {
    const cached = this.cache.get(key);
    const now = Date.now();
    
    if (cached && (now - cached.timestamp) < ttl) {
      return of(cached.data); // Fresh data
    }
    
    if (cached && useStale) {
      // Stale-while-revalidate
      return requestFn().pipe(
        tap(data => this.cache.set(key, { data, timestamp: now })),
        startWith(cached.data) // Emit stale first
      );
    }
    
    return requestFn().pipe(
      tap(data => this.cache.set(key, { data, timestamp: now }))
    );
  }
}
`;loadData(){this.cacheService.getCached("demo-data",()=>this.apiService.simulateApiCall({id:1,name:"Cached Data",timestamp:Date.now()},1e3),!0,5e3).subscribe({next:o=>{this.cachedData.set(o),this.cacheSize.set(this.cacheService.getCacheSize()),this.message.set("Data loaded (may be from cache)")}})}clearCache(){this.cacheService.clearCache("demo-data"),this.cachedData.set(null),this.cacheSize.set(this.cacheService.getCacheSize()),this.message.set("Cache cleared")}static \u0275fac=function(r){return new(r||n)};static \u0275cmp=x({type:n,selectors:[["app-advanced-caching-demo"]],decls:113,vars:5,consts:[[1,"container-responsive","space-y-responsive"],[1,"card-modern","padding-responsive","hover-lift","slide-in-up"],[1,"flex","flex-col","lg:flex-row","lg:items-center","lg:justify-between","gap-6"],[1,"flex-1"],[1,"flex","items-center","gap-3","mb-4"],[1,"w-12","h-12","sm:w-14","sm:h-14","rounded-xl","bg-gradient-to-br","from-purple-500","to-pink-600","flex","items-center","justify-center","shadow-lg"],[1,"fas","fa-database","text-white","text-xl","sm:text-2xl"],[1,"badge-modern","text-xs","sm:text-sm"],[1,"heading-responsive","text-gradient","mb-4"],[1,"text-responsive","text-gray-700","dark:text-gray-300"],[1,"hidden","lg:block"],[1,"w-32","h-32","rounded-2xl","bg-gradient-to-br","from-purple-500/20","to-pink-600/20","flex","items-center","justify-center"],[1,"fas","fa-database","text-6xl","text-purple-500"],[1,"card-modern","hover-lift","slide-in-up"],[1,"padding-responsive","space-y-6"],[1,"w-10","h-10","rounded-lg","bg-gradient-to-br","from-blue-500","to-purple-600","flex","items-center","justify-center"],[1,"fas","fa-lightbulb","text-white"],[1,"subheading-responsive","text-gray-900","dark:text-gray-100"],[1,"text-responsive","text-gray-700","dark:text-gray-300","leading-relaxed"],[1,"glass","rounded-xl","p-6","border-l-4","border-accent"],[1,"fas","fa-star","text-accent","text-xl"],[1,"text-lg","sm:text-xl","font-semibold","text-gray-900","dark:text-gray-100"],[1,"list-modern"],[1,"text-sm","sm:text-base","text-gray-800","dark:text-gray-200"],[1,"padding-responsive"],[1,"flex","items-center","gap-3","mb-6"],[1,"w-10","h-10","rounded-lg","bg-gradient-to-br","from-green-500","to-teal-600","flex","items-center","justify-center"],[1,"fas","fa-code","text-white"],["value","0"],[1,"flex","flex-wrap","gap-2","mb-6"],["value","0",1,"flex","items-center","gap-2"],[1,"fas","fa-times-circle","text-red-500"],[1,"text-sm","sm:text-base","font-semibold"],["value","1",1,"flex","items-center","gap-2"],[1,"fas","fa-check-circle","text-green-500"],[1,"code-block-modern"],[1,"overflow-x-auto","text-sm","sm:text-base"],["value","1"],[1,"w-10","h-10","rounded-lg","bg-gradient-to-br","from-purple-500","to-pink-600","flex","items-center","justify-center"],[1,"fas","fa-play-circle","text-white"],[1,"space-y-8"],[1,"border-2","border-gray-200","dark:border-gray-700","rounded-lg","p-5"],[1,"text-lg","font-semibold","text-gray-800","dark:text-gray-200","mb-4"],[1,"mb-4","flex","gap-2"],["label","Load Data (Cached)","icon","pi pi-download",1,"mr-2",3,"click"],["label","Clear Cache","icon","pi pi-trash","severity","danger",3,"click"],[1,"bg-gray-100","dark:bg-gray-700","p-5","rounded","mb-2"],[3,"severity","text"],[1,"mt-4","bg-gray-100","dark:bg-gray-700","p-5","rounded"],[1,"w-10","h-10","rounded-lg","bg-gradient-to-br","from-teal-500","to-cyan-600","flex","items-center","justify-center"],[1,"fas","fa-graduation-cap","text-white"],[1,"text-sm"]],template:function(r,l){if(r&1&&(t(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5),i(6,"i",6),e(),t(7,"div")(8,"span",7),a(9,"RxJS Patterns"),e()()(),t(10,"h1",8),a(11," Advanced Caching "),e(),t(12,"p",9),a(13," Implementing sophisticated caching strategies like stale-while-revalidate for optimal performance. "),e()(),t(14,"div",10)(15,"div",11),i(16,"i",12),e()()()(),t(17,"p-card",13)(18,"div",14)(19,"div",4)(20,"div",15),i(21,"i",16),e(),t(22,"h2",17),a(23,"Caching Strategies"),e()(),t(24,"p",18),a(25," Advanced caching patterns help reduce API calls, improve performance, and provide better user experience with strategies like stale-while-revalidate. "),e(),t(26,"div",19)(27,"div",4),i(28,"i",20),t(29,"h3",21),a(30,"Caching Patterns"),e()(),t(31,"ul",22)(32,"li",23)(33,"strong"),a(34,"Fresh:"),e(),a(35," Return cached data if within TTL "),e(),t(36,"li",23)(37,"strong"),a(38,"Stale-while-revalidate:"),e(),a(39," Return stale data immediately, update in background "),e(),t(40,"li",23)(41,"strong"),a(42,"TTL Management:"),e(),a(43," Time-to-live for cache entries "),e(),t(44,"li",23)(45,"strong"),a(46,"Cache Invalidation:"),e(),a(47," Manual and automatic cleanup "),e()()()()(),t(48,"p-card",13)(49,"div",24)(50,"div",25)(51,"div",26),i(52,"i",27),e(),t(53,"h2",17),a(54,"Code Examples"),e()(),t(55,"p-tabs",28)(56,"p-tablist",29)(57,"p-tab",30),i(58,"i",31),t(59,"span",32),a(60,"Violation"),e()(),t(61,"p-tab",33),i(62,"i",34),t(63,"span",32),a(64,"Solution"),e()()(),t(65,"p-tabpanels")(66,"p-tabpanel",28)(67,"div",35)(68,"pre",36)(69,"code"),a(70),e()()()(),t(71,"p-tabpanel",37)(72,"div",35)(73,"pre",36)(74,"code"),a(75),e()()()()()()()(),t(76,"p-card",13)(77,"div",24)(78,"div",4)(79,"div",38),i(80,"i",39),e(),t(81,"h2",17),a(82,"Interactive Demo"),e()(),t(83,"div",40)(84,"div",41)(85,"h3",42),a(86,"Cache Operations"),e(),t(87,"div",43)(88,"p-button",44),v("click",function(){return l.loadData()}),e(),t(89,"p-button",45),v("click",function(){return l.clearCache()}),e()(),t(90,"div",46)(91,"p")(92,"strong"),a(93,"Cache Size:"),e(),a(94),e()(),h(95,F,1,2,"p-message",47),h(96,q,4,3,"div",48),e()()()(),t(97,"p-card",13)(98,"div",24)(99,"div",25)(100,"div",49),i(101,"i",50),e(),t(102,"h2",17),a(103,"Key Takeaways"),e()(),t(104,"ul",22)(105,"li",23),a(106," Use stale-while-revalidate for better perceived performance "),e(),t(107,"li",23),a(108," Set appropriate TTL values based on data freshness requirements "),e(),t(109,"li",23),a(110," Combine caching with shareReplay for observable caching "),e(),t(111,"li",23),a(112," Implement cache invalidation strategies "),e()()()()()),r&2){let c;d(70),m(l.violationCode),d(5),m(l.solutionCode),d(19),b(" ",l.cacheSize()),d(),g(l.message()?95:-1),d(),g((c=l.cachedData())?96:-1,c)}},dependencies:[E,k,D,P,A,_,M,I,T,w,O,j,y],styles:["[_nghost-%COMP%]{display:block;width:100%}"]})};export{L as AdvancedCachingDemoComponent};
