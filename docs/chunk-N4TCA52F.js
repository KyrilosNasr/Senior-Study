import{a as G}from"./chunk-TM2USVVG.js";import{a as H}from"./chunk-U3NYYN53.js";import{b as j,e as O,i as R,s as P,v as J,w as A}from"./chunk-MWI2D735.js";import{a as z}from"./chunk-V7QHSZ7Y.js";import"./chunk-ERLXMSWH.js";import{b as q}from"./chunk-HCC77LJK.js";import{a as F,b as L,c as V,d as $,e as K}from"./chunk-FRDNIM2O.js";import"./chunk-LBBDP666.js";import{a as U,b as B}from"./chunk-O5DX6C7Z.js";import"./chunk-NNQGFXKQ.js";import"./chunk-4O3FVBGX.js";import"./chunk-NBRYHMVY.js";import"./chunk-DOJ5NW32.js";import{p as M,q as I,r as N}from"./chunk-RWFPYU6R.js";import"./chunk-FPPZ4BUR.js";import{Cb as h,Db as k,Gb as y,Gc as f,Hb as C,Hc as D,Ib as m,Ic as T,Jb as e,Kb as t,Lb as l,Wb as c,Yb as w,Za as a,ha as x,kc as n,lc as p,mc as b,nb as S,oc as E,pc as _,qc as W,ra as v,va as d}from"./chunk-LNAK4PJ4.js";import"./chunk-6HR7AMTL.js";var X=(r,s)=>s.timestamp;function Y(r,s){r&1&&(e(0,"p",51),n(1,"No messages yet"),t())}function Z(r,s){if(r&1&&(e(0,"div",54)(1,"p",55)(2,"strong"),n(3),t(),n(4),f(5,"json"),t(),e(6,"p",56),n(7),f(8,"date"),t()()),r&2){let o=s.$implicit;a(3),b("",o.type,":"),a(),b(" ",D(5,3,o.payload)),a(3),p(T(8,5,o.timestamp,"short"))}}function ee(r,s){if(r&1&&y(0,Z,9,8,"div",54,X),r&2){let o=w();C(o.messages())}}var Q=class r{websocketService=x(G);destroyRef=x(v);messages=d([]);isConnected=d(!1);messageText=d("");connectionStatus=d("Disconnected");violationCode=`
// \u274C VIOLATION: Manual WebSocket Management
// No reconnection, no error handling, memory leaks

class ChatService {
  private ws: WebSocket;
  
  connect() {
    this.ws = new WebSocket('ws://localhost:8080');
    this.ws.onmessage = (event) => {
      // No RxJS, no error handling
      this.handleMessage(event.data);
    };
  }
  
  // No reconnection logic
  // No cleanup
  // No error handling
}
`;solutionCode=`
// \u2705 SOLUTION: RxJS WebSocket
// Automatic reconnection, error handling, composable

@Injectable()
export class WebSocketService {
  private socket$!: WebSocketSubject<any>;
  
  connect(url: string): Observable<any> {
    this.socket$ = webSocket({
      url,
      openObserver: {
        next: () => console.log('Connected')
      },
      closeObserver: {
        next: () => this.reconnect()
      }
    });
    
    return this.socket$.pipe(
      retryWhen(errors => errors.pipe(
        scan((count, err) => {
          if (count >= 5) throw err;
          return count + 1;
        }, 0),
        delay(1000 * Math.pow(2, count))
      )),
      share()
    );
  }
}
`;connect(){this.isConnected.set(!0),this.connectionStatus.set("Connecting..."),this.websocketService.simulateWebSocket().pipe(H(this.destroyRef)).subscribe({next:s=>{this.messages.update(o=>[...o,s]),this.connectionStatus.set("Connected")},error:()=>{this.connectionStatus.set("Error"),this.isConnected.set(!1)}})}sendMessage(){if(this.messageText().trim()){let s={type:"message",payload:{text:this.messageText(),timestamp:Date.now()},timestamp:Date.now()};this.messages.update(o=>[...o,s]),this.messageText.set("")}}disconnect(){this.isConnected.set(!1),this.connectionStatus.set("Disconnected"),this.websocketService.close()}ngOnDestroy(){this.disconnect()}static \u0275fac=function(o){return new(o||r)};static \u0275cmp=S({type:r,selectors:[["app-websockets-demo"]],decls:112,vars:9,consts:[[1,"container-responsive","space-y-responsive"],[1,"card-modern","padding-responsive","hover-lift","slide-in-up"],[1,"flex","flex-col","lg:flex-row","lg:items-center","lg:justify-between","gap-6"],[1,"flex-1"],[1,"flex","items-center","gap-3","mb-4"],[1,"w-12","h-12","sm:w-14","sm:h-14","rounded-xl","bg-gradient-to-br","from-purple-500","to-pink-600","flex","items-center","justify-center","shadow-lg"],[1,"fas","fa-plug","text-white","text-xl","sm:text-2xl"],[1,"badge-modern","text-xs","sm:text-sm"],[1,"heading-responsive","text-gradient","mb-4"],[1,"text-responsive","text-gray-700","dark:text-gray-300"],[1,"hidden","lg:block"],[1,"w-32","h-32","rounded-2xl","bg-gradient-to-br","from-purple-500/20","to-pink-600/20","flex","items-center","justify-center"],[1,"fas","fa-plug","text-6xl","text-purple-500"],[1,"card-modern","hover-lift","slide-in-up"],[1,"padding-responsive","space-y-6"],[1,"w-10","h-10","rounded-lg","bg-gradient-to-br","from-blue-500","to-purple-600","flex","items-center","justify-center"],[1,"fas","fa-lightbulb","text-white"],[1,"subheading-responsive","text-gray-900","dark:text-gray-100"],[1,"text-responsive","text-gray-700","dark:text-gray-300","leading-relaxed"],[1,"glass","rounded-xl","p-6","border-l-4","border-accent"],[1,"fas","fa-star","text-accent","text-xl"],[1,"text-lg","sm:text-xl","font-semibold","text-gray-900","dark:text-gray-100"],[1,"list-modern"],[1,"text-sm","sm:text-base","text-gray-800","dark:text-gray-200"],[1,"padding-responsive"],[1,"flex","items-center","gap-3","mb-6"],[1,"w-10","h-10","rounded-lg","bg-gradient-to-br","from-green-500","to-teal-600","flex","items-center","justify-center"],[1,"fas","fa-code","text-white"],["value","0"],[1,"flex","flex-wrap","gap-2","mb-6"],["value","0",1,"flex","items-center","gap-2"],[1,"fas","fa-times-circle","text-red-500"],[1,"text-sm","sm:text-base","font-semibold"],["value","1",1,"flex","items-center","gap-2"],[1,"fas","fa-check-circle","text-green-500"],[1,"code-block-modern"],[1,"overflow-x-auto","text-sm","sm:text-base"],["value","1"],[1,"w-10","h-10","rounded-lg","bg-gradient-to-br","from-purple-500","to-pink-600","flex","items-center","justify-center"],[1,"fas","fa-play-circle","text-white"],[1,"space-y-8"],[1,"border-2","border-gray-200","dark:border-gray-700","rounded-lg","p-5"],[1,"text-lg","font-semibold","text-gray-800","dark:text-gray-200","mb-4"],[1,"mb-4","flex","gap-2"],["label","Connect","icon","pi pi-link",3,"buttonClick","disabled"],["label","Disconnect","icon","pi pi-unlink",3,"buttonClick","disabled"],[1,"bg-gray-100","dark:bg-gray-700","p-5","rounded"],[1,"mb-4"],["pInputText","","type","text","placeholder","Type a message...",1,"w-full","mb-2",3,"ngModelChange","ngModel","disabled"],["label","Send","icon","pi pi-send",3,"buttonClick","disabled"],[1,"bg-gray-100","dark:bg-gray-700","p-5","rounded","max-h-64","overflow-y-auto"],[1,"text-gray-500"],[1,"w-10","h-10","rounded-lg","bg-gradient-to-br","from-teal-500","to-cyan-600","flex","items-center","justify-center"],[1,"fas","fa-graduation-cap","text-white"],[1,"mb-2","p-2","bg-white","dark:bg-gray-800","rounded"],[1,"text-sm"],[1,"text-xs","text-gray-500"]],template:function(o,i){o&1&&(e(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5),l(6,"i",6),t(),e(7,"div")(8,"span",7),n(9,"RxJS Patterns"),t()()(),e(10,"h1",8),n(11," WebSockets & Real-time Patterns "),t(),e(12,"p",9),n(13," Using RxJS WebSocketSubject for real-time communication with automatic reconnection. "),t()(),e(14,"div",10)(15,"div",11),l(16,"i",12),t()()()(),e(17,"p-card",13)(18,"div",14)(19,"div",4)(20,"div",15),l(21,"i",16),t(),e(22,"h2",17),n(23,"RxJS WebSocket"),t()(),e(24,"p",18),n(25," WebSocketSubject provides a reactive interface to WebSocket connections with built-in reconnection logic, error handling, and composability with RxJS operators. "),t(),e(26,"div",19)(27,"div",4),l(28,"i",20),e(29,"h3",21),n(30,"Features"),t()(),e(31,"ul",22)(32,"li",23),n(33," Automatic reconnection with exponential backoff "),t(),e(34,"li",23),n(35," Observable-based API "),t(),e(36,"li",23),n(37," Error handling and recovery "),t(),e(38,"li",23),n(39," Composable with RxJS operators "),t()()()()(),e(40,"p-card",13)(41,"div",24)(42,"div",25)(43,"div",26),l(44,"i",27),t(),e(45,"h2",17),n(46,"Code Examples"),t()(),e(47,"p-tabs",28)(48,"p-tablist",29)(49,"p-tab",30),l(50,"i",31),e(51,"span",32),n(52,"Violation"),t()(),e(53,"p-tab",33),l(54,"i",34),e(55,"span",32),n(56,"Solution"),t()()(),e(57,"p-tabpanels")(58,"p-tabpanel",28)(59,"div",35)(60,"pre",36)(61,"code"),n(62),t()()()(),e(63,"p-tabpanel",37)(64,"div",35)(65,"pre",36)(66,"code"),n(67),t()()()()()()()(),e(68,"p-card",13)(69,"div",24)(70,"div",4)(71,"div",38),l(72,"i",39),t(),e(73,"h2",17),n(74,"Interactive Demo"),t()(),e(75,"div",40)(76,"div",41)(77,"h3",42),n(78,"WebSocket Connection"),t(),e(79,"div",43)(80,"app-enhanced-button",44),c("buttonClick",function(){return i.connect()}),t(),e(81,"app-enhanced-button",45),c("buttonClick",function(){return i.disconnect()}),t()(),e(82,"div",46)(83,"p")(84,"strong"),n(85,"Status:"),t(),n(86),t()()(),e(87,"div",41)(88,"h3",42),n(89,"Messages"),t(),e(90,"div",47)(91,"input",48),W("ngModelChange",function(u){return _(i.messageText,u)||(i.messageText=u),u}),t(),e(92,"app-enhanced-button",49),c("buttonClick",function(){return i.sendMessage()}),t()(),e(93,"div",50),h(94,Y,2,0,"p",51)(95,ee,2,0),t()()()()(),e(96,"p-card",13)(97,"div",24)(98,"div",25)(99,"div",52),l(100,"i",53),t(),e(101,"h2",17),n(102,"Key Takeaways"),t()(),e(103,"ul",22)(104,"li",23),n(105," Use WebSocketSubject for reactive WebSocket connections "),t(),e(106,"li",23),n(107," Implement reconnection logic with retryWhen and exponential backoff "),t(),e(108,"li",23),n(109," Use share() to allow multiple subscribers to share one connection "),t(),e(110,"li",23),n(111," Always clean up connections in ngOnDestroy "),t()()()()()),o&2&&(a(62),p(i.violationCode),a(5),p(i.solutionCode),a(13),m("disabled",i.isConnected()),a(),m("disabled",!i.isConnected()),a(5),b(" ",i.connectionStatus()),a(5),E("ngModel",i.messageText),m("disabled",!i.isConnected()),a(),m("disabled",!i.isConnected()||!i.messageText().trim()),a(2),k(i.messages().length===0?94:95))},dependencies:[N,B,U,K,L,F,V,$,z,A,J,P,j,O,R,q,I,M],styles:["[_nghost-%COMP%]{display:block;width:100%}"]})};export{Q as WebsocketsDemoComponent};
