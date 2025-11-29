import{b as W,e as V,i as j,p as B,s as $,t as q}from"./chunk-A7WYH36G.js";import{a as z,b as G}from"./chunk-KJPPBXDO.js";import{a as A,b as L,c as O,d as F,e as K,f as J,g as Z}from"./chunk-6IHYB2AV.js";import"./chunk-IMEODX4F.js";import"./chunk-PRB5TZSC.js";import{p as P,q as N}from"./chunk-H3I524XT.js";import{p as T}from"./chunk-EFMPFDS6.js";import"./chunk-4IVXAVEU.js";import{a as k,b as R}from"./chunk-LQLWCKNX.js";import{a as I}from"./chunk-5IWLABJM.js";import{Ab as t,Bb as e,Cb as S,Nb as D,Ob as w,Sa as l,ac as i,ba as u,bc as v,cc as M,ec as y,fc as h,gb as _,gc as x,pa as c,tb as m,ub as p,wb as E,xb as f,yb as b,zb as g}from"./chunk-ANFRTOHF.js";import{a as U,b as C}from"./chunk-6HR7AMTL.js";var Q=(r,o)=>o.id;function X(r,o){if(r&1&&S(0,"p-message",28),r&2){let a=o.$implicit;g("text",a)}}function Y(r,o){if(r&1&&(t(0,"div",27),f(1,X,1,1,"p-message",28,E),e()),r&2){let a=w();l(),b(a.errors)}}function ee(r,o){r&1&&m(0,Y,3,0,"div",27),r&2&&p(o.valid?-1:0)}function te(r,o){r&1&&S(0,"p-message",21),r&2&&g("text","User created successfully: "+o.email)}function ie(r,o){if(r&1&&(t(0,"div",30)(1,"p",31)(2,"strong"),i(3),e(),i(4),e()()),r&2){let a=o.$implicit;l(3),v(a.name),l(),M(" - ",a.email," ")}}function re(r,o){if(r&1&&(t(0,"div",23)(1,"h3",29),i(2,"Created Users"),e(),t(3,"div",27),f(4,ie,5,2,"div",30,Q),e()()),r&2){let a=w();l(4),b(a.users())}}var H=class r{userRepository=u(I);userValidator=u(k);userNotifier=u(R);userDto={name:"",email:"",password:""};validationResult=c(null);createdUser=c(null);users=c([]);violationCode=`
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
`;createUser(){let o=this.userValidator.validateUser(this.userDto);if(this.validationResult.set(o),o.valid){let a=C(U({id:Date.now().toString()},this.userDto),{createdAt:new Date});this.userRepository.save(a),this.userNotifier.sendWelcomeEmail(a),this.createdUser.set(a),this.loadUsers(),this.userDto={name:"",email:"",password:""}}}loadUsers(){this.users.set(this.userRepository.findAll())}constructor(){this.loadUsers()}static \u0275fac=function(a){return new(a||r)};static \u0275cmp=_({type:r,selectors:[["app-srp-demo"]],decls:87,vars:9,consts:[[1,"max-w-7xl","mx-auto","space-y-6"],[1,"bg-white","dark:bg-gray-800","rounded-lg","shadow-md","p-6"],[1,"text-3xl","font-bold","text-gray-800","dark:text-gray-200","mb-2"],[1,"text-gray-600","dark:text-gray-400"],[1,"shadow-md"],[1,"space-y-4"],[1,"text-2xl","font-semibold","text-gray-800","dark:text-gray-200"],[1,"text-gray-700","dark:text-gray-300"],[1,"bg-blue-50","dark:bg-blue-900/20","p-4","rounded-lg"],[1,"font-semibold","text-blue-900","dark:text-blue-200","mb-2"],[1,"list-disc","list-inside","space-y-1","text-blue-800","dark:text-blue-300"],["value","0"],["value","1"],[1,"bg-gray-900","text-gray-100","p-4","rounded-lg","overflow-x-auto","text-sm"],[1,"text-2xl","font-semibold","text-gray-800","dark:text-gray-200","mb-4"],[1,"text-gray-700","dark:text-gray-300","mb-6"],[1,"grid","grid-cols-1","md:grid-cols-3","gap-4"],[1,"block","text-sm","font-medium","text-gray-700","dark:text-gray-300","mb-2"],["pInputText","","type","text","placeholder","John Doe",1,"w-full",3,"ngModelChange","ngModel"],["pInputText","","type","email","placeholder","john@example.com",1,"w-full",3,"ngModelChange","ngModel"],["pInputText","","type","password","placeholder","Password123",1,"w-full",3,"ngModelChange","ngModel"],["severity","success",3,"text"],["label","Create User","icon","pi pi-plus",3,"click","disabled"],[1,"mt-6"],[1,"space-y-2","text-gray-700","dark:text-gray-300"],[1,"flex","items-start"],[1,"text-green-500","mr-2"],[1,"space-y-2"],["severity","error",3,"text"],[1,"text-lg","font-semibold","text-gray-800","dark:text-gray-200","mb-3"],[1,"bg-gray-100","dark:bg-gray-700","p-3","rounded"],[1,"text-sm","text-gray-800","dark:text-gray-200"]],template:function(a,n){if(a&1&&(t(0,"div",0)(1,"div",1)(2,"h1",2),i(3,"Single Responsibility Principle (SRP)"),e(),t(4,"p",3),i(5," A class should have only one reason to change, meaning it should have only one job or responsibility. "),e()(),t(6,"p-card",4)(7,"div",5)(8,"h2",6),i(9,"What is SRP?"),e(),t(10,"p",7),i(11," The Single Responsibility Principle states that a class should have only one reason to change. This means each class should focus on doing one thing well. When a class has multiple responsibilities, it becomes harder to maintain, test, and understand. "),e(),t(12,"div",8)(13,"h3",9),i(14,"Key Benefits:"),e(),t(15,"ul",10)(16,"li"),i(17,"Easier to understand and maintain"),e(),t(18,"li"),i(19,"Reduced coupling between classes"),e(),t(20,"li"),i(21,"Better testability"),e(),t(22,"li"),i(23,"Improved code reusability"),e()()()()(),t(24,"p-card",4)(25,"p-tabs",11)(26,"p-tablist")(27,"p-tab",11),i(28,"\u274C Violation"),e(),t(29,"p-tab",12),i(30,"\u2705 Solution"),e()(),t(31,"p-tabpanels")(32,"p-tabpanel",11)(33,"pre",13)(34,"code"),i(35),e()()(),t(36,"p-tabpanel",12)(37,"pre",13)(38,"code"),i(39),e()()()()()(),t(40,"p-card",4)(41,"h2",14),i(42,"Live Demo"),e(),t(43,"p",15),i(44," This demo uses separate services for repository, validation, and notification responsibilities. "),e(),t(45,"div",5)(46,"div",16)(47,"div")(48,"label",17),i(49,"Name"),e(),t(50,"input",18),x("ngModelChange",function(s){return h(n.userDto.name,s)||(n.userDto.name=s),s}),e()(),t(51,"div")(52,"label",17),i(53,"Email"),e(),t(54,"input",19),x("ngModelChange",function(s){return h(n.userDto.email,s)||(n.userDto.email=s),s}),e()(),t(55,"div")(56,"label",17),i(57,"Password"),e(),t(58,"input",20),x("ngModelChange",function(s){return h(n.userDto.password,s)||(n.userDto.password=s),s}),e()()(),m(59,ee,1,1),m(60,te,1,1,"p-message",21),t(61,"p-button",22),D("click",function(){return n.createUser()}),e()(),m(62,re,6,0,"div",23),e(),t(63,"p-card",4)(64,"h2",14),i(65,"Key Takeaways"),e(),t(66,"ul",24)(67,"li",25)(68,"span",26),i(69,"\u2713"),e(),t(70,"span"),i(71,"Each class should have a single, well-defined responsibility"),e()(),t(72,"li",25)(73,"span",26),i(74,"\u2713"),e(),t(75,"span"),i(76,"Separate concerns: data access, validation, and notifications"),e()(),t(77,"li",25)(78,"span",26),i(79,"\u2713"),e(),t(80,"span"),i(81,"Use dependency injection to compose services"),e()(),t(82,"li",25)(83,"span",26),i(84,"\u2713"),e(),t(85,"span"),i(86,"Makes code easier to test, maintain, and extend"),e()()()()()),a&2){let d,s;l(35),v(n.violationCode),l(4),v(n.solutionCode),l(11),y("ngModel",n.userDto.name),l(4),y("ngModel",n.userDto.email),l(4),y("ngModel",n.userDto.password),l(),p((d=n.validationResult())?59:-1,d),l(),p((s=n.createdUser())?60:-1,s),l(),g("disabled",!n.userDto.name||!n.userDto.email||!n.userDto.password),l(),p(n.users().length>0?62:-1)}},dependencies:[T,B,W,V,j,L,A,Z,F,O,K,J,N,P,q,$,G,z],styles:["[_nghost-%COMP%]{display:block;width:100%}"]})};export{H as SrpDemoComponent};
