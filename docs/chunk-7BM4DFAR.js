import{a as N}from"./chunk-DIKL76TK.js";import{c as L}from"./chunk-ZIKL4GMZ.js";import"./chunk-PVYFTFE3.js";import{a as O,b as z}from"./chunk-KJPPBXDO.js";import{a as k,b as w,c as _,d as A,e as M,f as I,g as P}from"./chunk-6IHYB2AV.js";import"./chunk-IMEODX4F.js";import"./chunk-PRB5TZSC.js";import{p as T,q as D}from"./chunk-H3I524XT.js";import{o as y,p as E}from"./chunk-EFMPFDS6.js";import"./chunk-4IVXAVEU.js";import{Ab as a,Bb as e,Cb as v,Nb as g,Ob as x,Sa as l,ac as t,ba as m,bc as s,cc as C,gb as u,nc as S,oc as f,pa as o,tb as p,ub as h,zb as b}from"./chunk-ANFRTOHF.js";import"./chunk-6HR7AMTL.js";function q(i,d){if(i&1&&v(0,"p-message",22),i&2){let n=x();b("severity",n.cachedData()?"success":"info")("text",n.message())}}function H(i,d){i&1&&(a(0,"div",23)(1,"pre",27),t(2),S(3,"json"),e()()),i&2&&(l(2),s(f(3,1,d)))}var F=class i{cacheService=m(N);apiService=m(L);cachedData=o(null);cacheSize=o(0);message=o("");violationCode=`
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
`;loadData(){this.cacheService.getCached("demo-data",()=>this.apiService.simulateApiCall({id:1,name:"Cached Data",timestamp:Date.now()},1e3),!0,5e3).subscribe({next:d=>{this.cachedData.set(d),this.cacheSize.set(this.cacheService.getCacheSize()),this.message.set("Data loaded (may be from cache)")}})}clearCache(){this.cacheService.clearCache("demo-data"),this.cachedData.set(null),this.cacheSize.set(this.cacheService.getCacheSize()),this.message.set("Cache cleared")}static \u0275fac=function(n){return new(n||i)};static \u0275cmp=u({type:i,selectors:[["app-advanced-caching-demo"]],decls:89,vars:5,consts:[[1,"max-w-7xl","mx-auto","space-y-6"],[1,"bg-white","dark:bg-gray-800","rounded-lg","shadow-md","p-6"],[1,"text-3xl","font-bold","text-gray-800","dark:text-gray-200","mb-2"],[1,"text-gray-600","dark:text-gray-400"],[1,"shadow-md"],[1,"space-y-4"],[1,"text-2xl","font-semibold","text-gray-800","dark:text-gray-200"],[1,"text-gray-700","dark:text-gray-300"],[1,"bg-blue-50","dark:bg-blue-900/20","p-4","rounded-lg"],[1,"font-semibold","text-blue-900","dark:text-blue-200","mb-2"],[1,"list-disc","list-inside","space-y-1","text-blue-800","dark:text-blue-300"],["value","0"],["value","1"],[1,"bg-gray-900","text-gray-100","p-4","rounded-lg","overflow-x-auto","text-sm"],[1,"text-2xl","font-semibold","text-gray-800","dark:text-gray-200","mb-4"],[1,"space-y-6"],[1,"border-2","border-gray-200","dark:border-gray-700","rounded-lg","p-4"],[1,"text-lg","font-semibold","text-gray-800","dark:text-gray-200","mb-4"],[1,"mb-4","flex","gap-2"],["label","Load Data (Cached)","icon","pi pi-download",1,"mr-2",3,"click"],["label","Clear Cache","icon","pi pi-trash","severity","danger",3,"click"],[1,"bg-gray-100","dark:bg-gray-700","p-4","rounded","mb-2"],[3,"severity","text"],[1,"mt-4","bg-gray-100","dark:bg-gray-700","p-4","rounded"],[1,"space-y-2","text-gray-700","dark:text-gray-300"],[1,"flex","items-start"],[1,"text-green-500","mr-2"],[1,"text-sm"]],template:function(n,r){if(n&1&&(a(0,"div",0)(1,"div",1)(2,"h1",2),t(3,"Advanced Caching"),e(),a(4,"p",3),t(5," Implementing sophisticated caching strategies like stale-while-revalidate for optimal performance. "),e()(),a(6,"p-card",4)(7,"div",5)(8,"h2",6),t(9,"Caching Strategies"),e(),a(10,"p",7),t(11," Advanced caching patterns help reduce API calls, improve performance, and provide better user experience with strategies like stale-while-revalidate. "),e(),a(12,"div",8)(13,"h3",9),t(14,"Caching Patterns:"),e(),a(15,"ul",10)(16,"li")(17,"strong"),t(18,"Fresh:"),e(),t(19," Return cached data if within TTL"),e(),a(20,"li")(21,"strong"),t(22,"Stale-while-revalidate:"),e(),t(23," Return stale data immediately, update in background"),e(),a(24,"li")(25,"strong"),t(26,"TTL Management:"),e(),t(27," Time-to-live for cache entries"),e(),a(28,"li")(29,"strong"),t(30,"Cache Invalidation:"),e(),t(31," Manual and automatic cleanup"),e()()()()(),a(32,"p-card",4)(33,"p-tabs",11)(34,"p-tablist")(35,"p-tab",11),t(36,"\u274C Violation"),e(),a(37,"p-tab",12),t(38,"\u2705 Solution"),e()(),a(39,"p-tabpanels")(40,"p-tabpanel",11)(41,"pre",13)(42,"code"),t(43),e()()(),a(44,"p-tabpanel",12)(45,"pre",13)(46,"code"),t(47),e()()()()()(),a(48,"p-card",4)(49,"h2",14),t(50,"Live Demo"),e(),a(51,"div",15)(52,"div",16)(53,"h3",17),t(54,"Cache Operations"),e(),a(55,"div",18)(56,"p-button",19),g("click",function(){return r.loadData()}),e(),a(57,"p-button",20),g("click",function(){return r.clearCache()}),e()(),a(58,"div",21)(59,"p")(60,"strong"),t(61,"Cache Size:"),e(),t(62),e()(),p(63,q,1,2,"p-message",22),p(64,H,4,3,"div",23),e()()(),a(65,"p-card",4)(66,"h2",14),t(67,"Key Takeaways"),e(),a(68,"ul",24)(69,"li",25)(70,"span",26),t(71,"\u2713"),e(),a(72,"span"),t(73,"Use stale-while-revalidate for better perceived performance"),e()(),a(74,"li",25)(75,"span",26),t(76,"\u2713"),e(),a(77,"span"),t(78,"Set appropriate TTL values based on data freshness requirements"),e()(),a(79,"li",25)(80,"span",26),t(81,"\u2713"),e(),a(82,"span"),t(83,"Combine caching with shareReplay for observable caching"),e()(),a(84,"li",25)(85,"span",26),t(86,"\u2713"),e(),a(87,"span"),t(88,"Implement cache invalidation strategies"),e()()()()()),n&2){let c;l(43),s(r.violationCode),l(4),s(r.solutionCode),l(15),C(" ",r.cacheSize()),l(),h(r.message()?63:-1),l(),h((c=r.cachedData())?64:-1,c)}},dependencies:[E,w,k,P,A,_,M,I,D,T,z,O,y],styles:["[_nghost-%COMP%]{display:block;width:100%}"]})};export{F as AdvancedCachingDemoComponent};
