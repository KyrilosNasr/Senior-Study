import{c as u}from"./chunk-VTNMHJAN.js";import"./chunk-SFQG3I6H.js";import"./chunk-NUMUFXKH.js";import{e as m}from"./chunk-JXT2X624.js";import"./chunk-FCYNDV26.js";import"./chunk-WEH2CWNU.js";import"./chunk-NGL2KP4B.js";import{a as x,b,c as g,d as v,e as f}from"./chunk-QULNL4D5.js";import"./chunk-4DGHZC6K.js";import{a as c,b as p}from"./chunk-DTTSOEG2.js";import"./chunk-7XHGMHQI.js";import"./chunk-CX3Q4OJ4.js";import{r as d}from"./chunk-M52WRTAU.js";import"./chunk-FPPZ4BUR.js";import{Kb as e,Lb as t,Za as n,lc as a,mc as i,nb as s}from"./chunk-3ITXA53T.js";import"./chunk-6HR7AMTL.js";var h=class o{router=u;violationCode=`
// \u274C VIOLATION: Synchronous Guards
// No async support, no RxJS patterns

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(): boolean {
    return this.authService.isAuthenticated; // Synchronous only
  }
}
`;solutionCode=`
// \u2705 SOLUTION: Functional Guards with RxJS
// Observable-based, composable, testable

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  
  return authService.isAuthenticated$.pipe(
    map(isAuth => {
      if (!isAuth) {
        router.navigate(['/login']);
        return false;
      }
      return true;
    }),
    catchError(() => {
      router.navigate(['/login']);
      return of(false);
    })
  );
};

// Resolver with error handling
export const userResolver: ResolveFn<User> = (route) => {
  const userService = inject(UserService);
  const router = inject(Router);
  
  return userService.getUser(route.params['id']).pipe(
    catchError(error => {
      console.error('Failed to load user:', error);
      router.navigate(['/users']);
      return of(null);
    })
  );
};
`;testGuard(){console.log("Guard would check authentication here")}static \u0275fac=function(r){return new(r||o)};static \u0275cmp=s({type:o,selectors:[["app-route-guards-demo"]],decls:64,vars:2,consts:[[1,"max-w-7xl","mx-auto","space-y-8"],[1,"bg-white","dark:bg-gray-800","rounded-lg","shadow-lg","p-8"],[1,"text-4xl","font-bold","text-gray-900","dark:text-gray-100","mb-3"],[1,"text-lg","text-gray-700","dark:text-gray-300","leading-relaxed"],[1,"shadow-lg"],[1,"space-y-4"],[1,"text-3xl","font-semibold","text-gray-900","dark:text-gray-100","mb-3"],[1,"text-base","text-gray-700","dark:text-gray-300","leading-relaxed"],[1,"bg-blue-50","dark:bg-blue-900/30","p-5","rounded-lg","border","border-blue-200","dark:border-blue-800"],[1,"text-lg","font-semibold","text-blue-900","dark:text-blue-100","mb-3"],[1,"list-disc","list-inside","space-y-2","text-base","text-blue-800","dark:text-blue-200"],["value","0"],["value","1"],[1,"overflow-x-auto"],[1,"text-3xl","font-semibold","text-gray-900","dark:text-gray-100","mb-3","mb-4"],[1,"space-y-2","text-base","text-gray-700","dark:text-gray-300","leading-relaxed"],[1,"flex","items-start"],[1,"text-green-500","mr-2"]],template:function(r,l){r&1&&(e(0,"div",0)(1,"div",1)(2,"h1",2),a(3,"Route Guards & Resolvers"),t(),e(4,"p",3),a(5," Using RxJS in functional route guards and resolvers for async route protection and data preloading. "),t()(),e(6,"p-card",4)(7,"div",5)(8,"h2",6),a(9,"RxJS in Routing"),t(),e(10,"p",7),a(11," Functional guards and resolvers can return Observables, enabling async authentication checks and data preloading with proper error handling. "),t(),e(12,"div",8)(13,"h3",9),a(14,"Benefits:"),t(),e(15,"ul",10)(16,"li"),a(17,"Async authentication checks"),t(),e(18,"li"),a(19,"Data preloading before route activation"),t(),e(20,"li"),a(21,"Error handling and fallback navigation"),t(),e(22,"li"),a(23,"Composable and testable"),t()()()()(),e(24,"p-card",4)(25,"p-tabs",11)(26,"p-tablist")(27,"p-tab",11),a(28,"\u274C Violation"),t(),e(29,"p-tab",12),a(30,"\u2705 Solution"),t()(),e(31,"p-tabpanels")(32,"p-tabpanel",11)(33,"pre",13)(34,"code"),a(35),t()()(),e(36,"p-tabpanel",12)(37,"pre",13)(38,"code"),a(39),t()()()()()(),e(40,"p-card",4)(41,"h2",14),a(42,"Key Takeaways"),t(),e(43,"ul",15)(44,"li",16)(45,"span",17),a(46,"\u2713"),t(),e(47,"span"),a(48,"Use functional guards (CanActivateFn) instead of class-based guards"),t()(),e(49,"li",16)(50,"span",17),a(51,"\u2713"),t(),e(52,"span"),a(53,"Return Observables from guards for async checks"),t()(),e(54,"li",16)(55,"span",17),a(56,"\u2713"),t(),e(57,"span"),a(58,"Use resolvers to preload data before route activation"),t()(),e(59,"li",16)(60,"span",17),a(61,"\u2713"),t(),e(62,"span"),a(63,"Handle errors gracefully with catchError and navigation fallback"),t()()()()()),r&2&&(n(35),i(l.violationCode),n(4),i(l.solutionCode))},dependencies:[d,p,c,f,b,x,g,v,m],styles:["[_nghost-%COMP%]{display:block;width:100%}"]})};export{h as RouteGuardsDemoComponent};
