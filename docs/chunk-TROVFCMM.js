import{b as N,e as W,i as V,p as A,s as B,t as O}from"./chunk-5TVMUKYR.js";import{a as $,b as q}from"./chunk-VHQBVC6O.js";import{a as L,b as F,c as K,d as G,e as H,f as J,g as Z}from"./chunk-AH7MQ5KM.js";import"./chunk-K33OWSJ3.js";import"./chunk-UB7WHAP5.js";import{p as P,q as j}from"./chunk-47HPTYDK.js";import{p as k}from"./chunk-FHCI6K3X.js";import"./chunk-FPPZ4BUR.js";import{a as T,b as R}from"./chunk-MCUXRSC3.js";import{a as I}from"./chunk-JP7STZEX.js";import{$b as v,Hb as M,Jb as w,Ma as l,Xb as i,Yb as E,Zb as u,ab as _,ac as h,bc as b,ha as f,nb as p,ob as c,qb as D,rb as y,sb as S,tb as x,ub as e,va as g,vb as t,wb as n}from"./chunk-S2MQBBOY.js";import{a as U,b as C}from"./chunk-6HR7AMTL.js";var Q=(r,s)=>s.id;function X(r,s){if(r&1&&n(0,"p-message",73),r&2){let a=s.$implicit;x("text",a)}}function Y(r,s){if(r&1&&(e(0,"div",72),y(1,X,1,1,"p-message",73,D),t()),r&2){let a=w();l(),S(a.errors)}}function ee(r,s){r&1&&p(0,Y,3,0,"div",72),r&2&&c(s.valid?-1:0)}function te(r,s){r&1&&n(0,"p-message",51),r&2&&x("text","\u2713 User created successfully: "+s.email)}function ie(r,s){if(r&1&&(e(0,"div",77)(1,"div",78)(2,"div",79),i(3),t(),e(4,"div",80)(5,"p",81),i(6),t(),e(7,"p",82),i(8),t()(),n(9,"i",34),t()()),r&2){let a=s.$implicit;l(3),u(" ",a.name.charAt(0).toUpperCase()," "),l(3),u(" ",a.name," "),l(2),u(" ",a.email," ")}}function ne(r,s){if(r&1&&(e(0,"div",56)(1,"div",4),n(2,"i",74),e(3,"h3",75),i(4),t()(),e(5,"div",76),y(6,ie,10,3,"div",77,Q),t()()),r&2){let a=w();l(4),u(" Created Users (",a.users().length,") "),l(2),S(a.users())}}var z=class r{userRepository=f(I);userValidator=f(T);userNotifier=f(R);userDto={name:"",email:"",password:""};validationResult=g(null);createdUser=g(null);users=g([]);violationCode=`
// \u274C VIOLATION: Single Responsibility Principle
// This class has multiple responsibilities:
// 1. User data management
// 2. Validation
// 3. Email notifications
// 4. Database operations

export class UserService {
  private users: User[] = [];

  createUser(user: CreateUserDto): User {
    // Responsibility 1: Validation
    if (!this.validateEmail(user.email)) {
      throw new Error('Invalid email');
    }
    if (!this.validatePassword(user.password)) {
      throw new Error('Invalid password');
    }

    // Responsibility 2: Data persistence
    const newUser: User = {
      id: Date.now().toString(),
      ...user,
      createdAt: new Date()
    };
    this.users.push(newUser);

    // Responsibility 3: Notification
    this.sendWelcomeEmail(newUser);

    return newUser;
  }

  private validateEmail(email: string): boolean {
    return /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email);
  }

  private validatePassword(password: string): boolean {
    return password.length >= 8;
  }

  private sendWelcomeEmail(user: User): void {
    console.log(\`Sending email to \${user.email}\`);
  }
}
`;solutionCode=`
// \u2705 SOLUTION: Single Responsibility Principle
// Each class has ONE responsibility

// Responsibility 1: Data Management
@Injectable({ providedIn: 'root' })
export class UserRepositoryService {
  private users: User[] = [];

  findById(id: string): User | null {
    return this.users.find(u => u.id === id) || null;
  }

  save(user: User): void {
    this.users.push(user);
  }
}

// Responsibility 2: Validation
@Injectable({ providedIn: 'root' })
export class UserValidatorService {
  validateEmail(email: string): boolean {
    return /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email);
  }

  validatePassword(password: string): boolean {
    return password.length >= 8 && /[A-Z]/.test(password);
  }

  validateUser(user: CreateUserDto): ValidationResult {
    const errors: string[] = [];
    if (!this.validateEmail(user.email)) {
      errors.push('Invalid email');
    }
    if (!this.validatePassword(user.password)) {
      errors.push('Invalid password');
    }
    return { valid: errors.length === 0, errors };
  }
}

// Responsibility 3: Notifications
@Injectable({ providedIn: 'root' })
export class UserNotifierService {
  sendWelcomeEmail(user: User): void {
    console.log(\`Sending welcome email to \${user.email}\`);
  }
}

// Orchestrator: Uses all services via dependency injection
export class UserService {
  constructor(
    private readonly repository: UserRepositoryService,
    private readonly validator: UserValidatorService,
    private readonly notifier: UserNotifierService
  ) {}

  createUser(user: CreateUserDto): User {
    const validation = this.validator.validateUser(user);
    if (!validation.valid) {
      throw new Error(validation.errors.join(', '));
    }

    const newUser: User = {
      id: Date.now().toString(),
      ...user,
      createdAt: new Date()
    };

    this.repository.save(newUser);
    this.notifier.sendWelcomeEmail(newUser);

    return newUser;
  }
}
`;createUser(){let s=this.userValidator.validateUser(this.userDto);if(this.validationResult.set(s),s.valid){let a=C(U({id:Date.now().toString()},this.userDto),{createdAt:new Date});this.userRepository.save(a),this.userNotifier.sendWelcomeEmail(a),this.createdUser.set(a),this.loadUsers(),this.userDto={name:"",email:"",password:""}}}loadUsers(){this.users.set(this.userRepository.findAll())}constructor(){this.loadUsers()}static \u0275fac=function(a){return new(a||r)};static \u0275cmp=_({type:r,selectors:[["app-srp-demo"]],decls:141,vars:9,consts:[[1,"container-responsive","space-y-responsive"],[1,"card-modern","padding-responsive","hover-lift","slide-in-up"],[1,"flex","flex-col","lg:flex-row","lg:items-center","lg:justify-between","gap-6"],[1,"flex-1"],[1,"flex","items-center","gap-3","mb-4"],[1,"w-12","h-12","sm:w-14","sm:h-14","rounded-xl","bg-gradient-to-br","from-orange-500","to-red-600","flex","items-center","justify-center","shadow-lg"],[1,"fas","fa-cube","text-white","text-xl","sm:text-2xl"],[1,"badge-modern","text-xs","sm:text-sm"],[1,"heading-responsive","text-gradient","mb-4"],[1,"text-responsive","text-gray-700","dark:text-gray-300"],[1,"hidden","lg:block"],[1,"w-32","h-32","rounded-2xl","bg-gradient-to-br","from-orange-500/20","to-red-600/20","flex","items-center","justify-center"],[1,"fas","fa-layer-group","text-6xl","text-orange-500"],[1,"card-modern","hover-lift","slide-in-up"],[1,"padding-responsive","space-y-6"],[1,"w-10","h-10","rounded-lg","bg-gradient-to-br","from-blue-500","to-purple-600","flex","items-center","justify-center"],[1,"fas","fa-lightbulb","text-white"],[1,"subheading-responsive","text-gray-900","dark:text-gray-100"],[1,"text-responsive","text-gray-700","dark:text-gray-300","leading-relaxed"],[1,"glass","rounded-xl","p-6","border-l-4","border-accent"],[1,"fas","fa-star","text-accent","text-xl"],[1,"text-lg","sm:text-xl","font-semibold","text-gray-900","dark:text-gray-100"],[1,"list-modern"],[1,"text-sm","sm:text-base","text-gray-800","dark:text-gray-200"],[1,"padding-responsive"],[1,"flex","items-center","gap-3","mb-6"],[1,"w-10","h-10","rounded-lg","bg-gradient-to-br","from-green-500","to-teal-600","flex","items-center","justify-center"],[1,"fas","fa-code","text-white"],["value","0"],[1,"flex","flex-wrap","gap-2","mb-6"],["value","0",1,"flex","items-center","gap-2"],[1,"fas","fa-times-circle","text-red-500"],[1,"text-sm","sm:text-base","font-semibold"],["value","1",1,"flex","items-center","gap-2"],[1,"fas","fa-check-circle","text-green-500"],[1,"code-block-modern"],[1,"overflow-x-auto","text-sm","sm:text-base"],["value","1"],[1,"w-10","h-10","rounded-lg","bg-gradient-to-br","from-purple-500","to-pink-600","flex","items-center","justify-center"],[1,"fas","fa-play-circle","text-white"],[1,"text-responsive","text-gray-700","dark:text-gray-300","mb-8"],[1,"space-y-6"],[1,"grid","grid-cols-1","sm:grid-cols-2","lg:grid-cols-3","gap-4","lg:gap-6"],[1,"space-y-2"],[1,"block","text-sm","font-semibold","text-gray-700","dark:text-gray-300"],[1,"fas","fa-user","text-accent","mr-2"],["pInputText","","type","text","placeholder","John Doe",1,"input-modern",3,"ngModelChange","ngModel"],[1,"fas","fa-envelope","text-accent","mr-2"],["pInputText","","type","email","placeholder","john@example.com",1,"input-modern",3,"ngModelChange","ngModel"],[1,"fas","fa-lock","text-accent","mr-2"],["pInputText","","type","password","placeholder","Password123",1,"input-modern",3,"ngModelChange","ngModel"],["severity","success",1,"w-full","fade-in",3,"text"],[1,"flex","flex-col","sm:flex-row","gap-4","items-stretch","sm:items-center"],["label","Create User","icon","pi pi-plus",1,"btn-modern","flex-1","sm:flex-initial",3,"click","disabled"],[1,"text-sm","text-gray-500","dark:text-gray-400","italic"],[1,"fas","fa-info-circle","mr-2"],[1,"mt-8","fade-in"],[1,"w-10","h-10","rounded-lg","bg-gradient-to-br","from-teal-500","to-cyan-600","flex","items-center","justify-center"],[1,"fas","fa-graduation-cap","text-white"],[1,"mt-8","pt-6","border-t","border-gray-200","dark:border-gray-700"],[1,"text-lg","font-semibold","text-gray-900","dark:text-gray-100","mb-4","flex","items-center","gap-2"],[1,"fas","fa-book-open","text-accent"],[1,"flex","flex-wrap","gap-3"],["href","#",1,"badge-outline","hover:scale-105","transition-transform"],[1,"fas","fa-external-link-alt","mr-2"],[1,"fas","fa-video","mr-2"],[1,"fas","fa-code-branch","mr-2"],[1,"flex","flex-col","sm:flex-row","gap-4","justify-between","items-stretch","sm:items-center","fade-in"],[1,"glass","padding-responsive-sm","rounded-xl","hover-lift","flex","items-center","justify-center","gap-3","group"],[1,"fas","fa-arrow-left","text-accent","group-hover:-translate-x-1","transition-transform"],[1,"font-semibold","text-gray-900","dark:text-gray-100"],[1,"fas","fa-arrow-right","text-accent","group-hover:translate-x-1","transition-transform"],[1,"space-y-3","fade-in"],["severity","error",1,"w-full",3,"text"],[1,"fas","fa-users","text-accent","text-xl"],[1,"text-lg","sm:text-xl","font-semibold","text-gray-800","dark:text-gray-200"],[1,"grid","grid-cols-1","sm:grid-cols-2","gap-3","lg:gap-4"],[1,"glass","rounded-lg","p-4","hover-lift","border","border-gray-200","dark:border-gray-700"],[1,"flex","items-center","gap-3"],[1,"w-10","h-10","rounded-full","bg-gradient-to-br","from-accent-light","to-accent-dark","flex","items-center","justify-center","text-white","font-bold"],[1,"flex-1","min-w-0"],[1,"text-sm","sm:text-base","font-semibold","text-gray-900","dark:text-gray-100","truncate"],[1,"text-xs","sm:text-sm","text-gray-600","dark:text-gray-400","truncate"]],template:function(a,o){if(a&1&&(e(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5),n(6,"i",6),t(),e(7,"div")(8,"span",7),i(9,"SOLID Principles"),t()()(),e(10,"h1",8),i(11," Single Responsibility Principle "),t(),e(12,"p",9),i(13," A class should have only one reason to change, meaning it should have only one job or responsibility. "),t()(),e(14,"div",10)(15,"div",11),n(16,"i",12),t()()()(),e(17,"p-card",13)(18,"div",14)(19,"div",4)(20,"div",15),n(21,"i",16),t(),e(22,"h2",17),i(23,"What is SRP?"),t()(),e(24,"p",18),i(25," The Single Responsibility Principle states that a class should have only one reason to change. This means each class should focus on doing one thing well. When a class has multiple responsibilities, it becomes harder to maintain, test, and understand. "),t(),e(26,"div",19)(27,"div",4),n(28,"i",20),e(29,"h3",21),i(30,"Key Benefits"),t()(),e(31,"ul",22)(32,"li",23),i(33," Easier to understand and maintain "),t(),e(34,"li",23),i(35," Reduced coupling between classes "),t(),e(36,"li",23),i(37," Better testability "),t(),e(38,"li",23),i(39," Improved code reusability "),t()()()()(),e(40,"p-card",13)(41,"div",24)(42,"div",25)(43,"div",26),n(44,"i",27),t(),e(45,"h2",17),i(46,"Code Examples"),t()(),e(47,"p-tabs",28)(48,"p-tablist",29)(49,"p-tab",30),n(50,"i",31),e(51,"span",32),i(52,"Violation"),t()(),e(53,"p-tab",33),n(54,"i",34),e(55,"span",32),i(56,"Solution"),t()()(),e(57,"p-tabpanels")(58,"p-tabpanel",28)(59,"div",35)(60,"pre",36)(61,"code"),i(62),t()()()(),e(63,"p-tabpanel",37)(64,"div",35)(65,"pre",36)(66,"code"),i(67),t()()()()()()()(),e(68,"p-card",13)(69,"div",24)(70,"div",4)(71,"div",38),n(72,"i",39),t(),e(73,"h2",17),i(74,"Interactive Demo"),t()(),e(75,"p",40),i(76," This demo uses separate services for repository, validation, and notification responsibilities. "),t(),e(77,"div",41)(78,"div",42)(79,"div",43)(80,"label",44),n(81,"i",45),i(82,"Name "),t(),e(83,"input",46),b("ngModelChange",function(d){return h(o.userDto.name,d)||(o.userDto.name=d),d}),t()(),e(84,"div",43)(85,"label",44),n(86,"i",47),i(87,"Email "),t(),e(88,"input",48),b("ngModelChange",function(d){return h(o.userDto.email,d)||(o.userDto.email=d),d}),t()(),e(89,"div",43)(90,"label",44),n(91,"i",49),i(92,"Password "),t(),e(93,"input",50),b("ngModelChange",function(d){return h(o.userDto.password,d)||(o.userDto.password=d),d}),t()()(),p(94,ee,1,1),p(95,te,1,1,"p-message",51),e(96,"div",52)(97,"p-button",53),M("click",function(){return o.createUser()}),t(),e(98,"p",54),n(99,"i",55),i(100,"Fill all fields to enable "),t()(),p(101,ne,8,1,"div",56),t()()(),e(102,"p-card",13)(103,"div",24)(104,"div",25)(105,"div",57),n(106,"i",58),t(),e(107,"h2",17),i(108,"Key Takeaways"),t()(),e(109,"ul",22)(110,"li",23),i(111," Each class should have a single, well-defined responsibility "),t(),e(112,"li",23),i(113," Separate concerns: data access, validation, and notifications "),t(),e(114,"li",23),i(115," Use dependency injection to compose services "),t(),e(116,"li",23),i(117," Makes code easier to test, maintain, and extend "),t()(),e(118,"div",59)(119,"h3",60),n(120,"i",61),i(121," Learn More "),t(),e(122,"div",62)(123,"a",63),n(124,"i",64),i(125,"Documentation "),t(),e(126,"a",63),n(127,"i",65),i(128,"Video Tutorial "),t(),e(129,"a",63),n(130,"i",66),i(131,"GitHub Examples "),t()()()()(),e(132,"div",67)(133,"button",68),n(134,"i",69),e(135,"span",70),i(136,"Previous: Introduction"),t()(),e(137,"button",68)(138,"span",70),i(139,"Next: Open/Closed Principle"),t(),n(140,"i",71),t()()()),a&2){let m,d;l(62),E(o.violationCode),l(5),E(o.solutionCode),l(16),v("ngModel",o.userDto.name),l(5),v("ngModel",o.userDto.email),l(5),v("ngModel",o.userDto.password),l(),c((m=o.validationResult())?94:-1,m),l(),c((d=o.createdUser())?95:-1,d),l(2),x("disabled",!o.userDto.name||!o.userDto.email||!o.userDto.password),l(4),c(o.users().length>0?101:-1)}},dependencies:[k,A,N,W,V,F,L,Z,G,K,H,J,j,P,O,B,q,$],styles:["[_nghost-%COMP%]{display:block;width:100%}"]})};export{z as SrpDemoComponent};
