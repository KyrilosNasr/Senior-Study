import{a as G}from"./chunk-DJTOK3IA.js";import{a as H}from"./chunk-KTTKTIJJ.js";import{b as R,e as P,i as j,p as J,s as K,t as q}from"./chunk-A7WYH36G.js";import{b as z}from"./chunk-KJPPBXDO.js";import{a as A,b as B,c as L,d as U,e as F,f as V,g as $}from"./chunk-6IHYB2AV.js";import"./chunk-IMEODX4F.js";import"./chunk-PRB5TZSC.js";import{p as N,q as O}from"./chunk-H3I524XT.js";import{n as M,o as T,p as I}from"./chunk-EFMPFDS6.js";import"./chunk-4IVXAVEU.js";import{Ab as t,Bb as e,Nb as m,Ob as C,Sa as a,ac as n,ba as u,bc as d,cc as p,ec as w,fc as E,gb as y,gc as _,la as S,nc as x,oc as W,pa as l,pc as D,tb as k,ub as f,xb as h,yb as v,zb as c}from"./chunk-ANFRTOHF.js";import"./chunk-6HR7AMTL.js";var X=(s,r)=>r.timestamp;function Y(s,r){s&1&&(t(0,"p",26),n(1,"No messages yet"),e())}function Z(s,r){if(s&1&&(t(0,"div",30)(1,"p",31)(2,"strong"),n(3),e(),n(4),x(5,"json"),e(),t(6,"p",32),n(7),x(8,"date"),e()()),s&2){let o=r.$implicit;a(3),p("",o.type,":"),a(),p(" ",W(5,3,o.payload)),a(3),d(D(8,5,o.timestamp,"short"))}}function ee(s,r){if(s&1&&h(0,Z,9,8,"div",30,X),s&2){let o=C();v(o.messages())}}var Q=class s{websocketService=u(G);destroyRef=u(S);messages=l([]);isConnected=l(!1);messageText=l("");connectionStatus=l("Disconnected");violationCode=`
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
`;connect(){this.isConnected.set(!0),this.connectionStatus.set("Connecting..."),this.websocketService.simulateWebSocket().pipe(H(this.destroyRef)).subscribe({next:r=>{this.messages.update(o=>[...o,r]),this.connectionStatus.set("Connected")},error:()=>{this.connectionStatus.set("Error"),this.isConnected.set(!1)}})}sendMessage(){if(this.messageText().trim()){let r={type:"message",payload:{text:this.messageText(),timestamp:Date.now()},timestamp:Date.now()};this.messages.update(o=>[...o,r]),this.messageText.set("")}}disconnect(){this.isConnected.set(!1),this.connectionStatus.set("Disconnected"),this.websocketService.close()}ngOnDestroy(){this.disconnect()}static \u0275fac=function(o){return new(o||s)};static \u0275cmp=y({type:s,selectors:[["app-websockets-demo"]],decls:88,vars:9,consts:[[1,"max-w-7xl","mx-auto","space-y-6"],[1,"bg-white","dark:bg-gray-800","rounded-lg","shadow-md","p-6"],[1,"text-3xl","font-bold","text-gray-800","dark:text-gray-200","mb-2"],[1,"text-gray-600","dark:text-gray-400"],[1,"shadow-md"],[1,"space-y-4"],[1,"text-2xl","font-semibold","text-gray-800","dark:text-gray-200"],[1,"text-gray-700","dark:text-gray-300"],[1,"bg-blue-50","dark:bg-blue-900/20","p-4","rounded-lg"],[1,"font-semibold","text-blue-900","dark:text-blue-200","mb-2"],[1,"list-disc","list-inside","space-y-1","text-blue-800","dark:text-blue-300"],["value","0"],["value","1"],[1,"bg-gray-900","text-gray-100","p-4","rounded-lg","overflow-x-auto","text-sm"],[1,"text-2xl","font-semibold","text-gray-800","dark:text-gray-200","mb-4"],[1,"space-y-6"],[1,"border-2","border-gray-200","dark:border-gray-700","rounded-lg","p-4"],[1,"text-lg","font-semibold","text-gray-800","dark:text-gray-200","mb-4"],[1,"mb-4","flex","gap-2"],["label","Connect","icon","pi pi-link","severity","success",3,"click","disabled"],["label","Disconnect","icon","pi pi-unlink","severity","danger",3,"click","disabled"],[1,"bg-gray-100","dark:bg-gray-700","p-4","rounded"],[1,"mb-4"],["pInputText","","type","text","placeholder","Type a message...",1,"w-full","mb-2",3,"ngModelChange","ngModel","disabled"],["label","Send","icon","pi pi-send",3,"click","disabled"],[1,"bg-gray-100","dark:bg-gray-700","p-4","rounded","max-h-64","overflow-y-auto"],[1,"text-gray-500"],[1,"space-y-2","text-gray-700","dark:text-gray-300"],[1,"flex","items-start"],[1,"text-green-500","mr-2"],[1,"mb-2","p-2","bg-white","dark:bg-gray-800","rounded"],[1,"text-sm"],[1,"text-xs","text-gray-500"]],template:function(o,i){o&1&&(t(0,"div",0)(1,"div",1)(2,"h1",2),n(3,"WebSockets & Real-time Patterns"),e(),t(4,"p",3),n(5," Using RxJS WebSocketSubject for real-time communication with automatic reconnection. "),e()(),t(6,"p-card",4)(7,"div",5)(8,"h2",6),n(9,"RxJS WebSocket"),e(),t(10,"p",7),n(11," WebSocketSubject provides a reactive interface to WebSocket connections with built-in reconnection logic, error handling, and composability with RxJS operators. "),e(),t(12,"div",8)(13,"h3",9),n(14,"Features:"),e(),t(15,"ul",10)(16,"li"),n(17,"Automatic reconnection with exponential backoff"),e(),t(18,"li"),n(19,"Observable-based API"),e(),t(20,"li"),n(21,"Error handling and recovery"),e(),t(22,"li"),n(23,"Composable with RxJS operators"),e()()()()(),t(24,"p-card",4)(25,"p-tabs",11)(26,"p-tablist")(27,"p-tab",11),n(28,"\u274C Violation"),e(),t(29,"p-tab",12),n(30,"\u2705 Solution"),e()(),t(31,"p-tabpanels")(32,"p-tabpanel",11)(33,"pre",13)(34,"code"),n(35),e()()(),t(36,"p-tabpanel",12)(37,"pre",13)(38,"code"),n(39),e()()()()()(),t(40,"p-card",4)(41,"h2",14),n(42,"Live Demo"),e(),t(43,"div",15)(44,"div",16)(45,"h3",17),n(46,"WebSocket Connection"),e(),t(47,"div",18)(48,"p-button",19),m("click",function(){return i.connect()}),e(),t(49,"p-button",20),m("click",function(){return i.disconnect()}),e()(),t(50,"div",21)(51,"p")(52,"strong"),n(53,"Status:"),e(),n(54),e()()(),t(55,"div",16)(56,"h3",17),n(57,"Messages"),e(),t(58,"div",22)(59,"input",23),_("ngModelChange",function(g){return E(i.messageText,g)||(i.messageText=g),g}),e(),t(60,"p-button",24),m("click",function(){return i.sendMessage()}),e()(),t(61,"div",25),k(62,Y,2,0,"p",26)(63,ee,2,0),e()()()(),t(64,"p-card",4)(65,"h2",14),n(66,"Key Takeaways"),e(),t(67,"ul",27)(68,"li",28)(69,"span",29),n(70,"\u2713"),e(),t(71,"span"),n(72,"Use WebSocketSubject for reactive WebSocket connections"),e()(),t(73,"li",28)(74,"span",29),n(75,"\u2713"),e(),t(76,"span"),n(77,"Implement reconnection logic with retryWhen and exponential backoff"),e()(),t(78,"li",28)(79,"span",29),n(80,"\u2713"),e(),t(81,"span"),n(82,"Use share() to allow multiple subscribers to share one connection"),e()(),t(83,"li",28)(84,"span",29),n(85,"\u2713"),e(),t(86,"span"),n(87,"Always clean up connections in ngOnDestroy"),e()()()()()),o&2&&(a(35),d(i.violationCode),a(4),d(i.solutionCode),a(9),c("disabled",i.isConnected()),a(),c("disabled",!i.isConnected()),a(5),p(" ",i.connectionStatus()),a(5),w("ngModel",i.messageText),c("disabled",!i.isConnected()),a(),c("disabled",!i.isConnected()||!i.messageText().trim()),a(2),f(i.messages().length===0?62:63))},dependencies:[I,B,A,$,U,L,F,V,O,N,q,K,J,R,P,j,z,T,M],styles:["[_nghost-%COMP%]{display:block;width:100%}"]})};export{Q as WebsocketsDemoComponent};
