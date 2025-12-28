import{a as V}from"./chunk-XHG27TGF.js";import"./chunk-EHGNNDOS.js";import"./chunk-U3NYYN53.js";import"./chunk-I5DOCIU5.js";import"./chunk-ZJVCQGJV.js";import"./chunk-YIZGALFH.js";import"./chunk-DX2N2O7I.js";import"./chunk-OUGU7G32.js";import"./chunk-3DC6BNIH.js";import"./chunk-FDMMKHFL.js";import"./chunk-EYJGCTLX.js";import"./chunk-L3DA2SQV.js";import{c as a,r as C,t as x}from"./chunk-MWI2D735.js";import{e as h}from"./chunk-YEZRGREG.js";import"./chunk-WXMMCV33.js";import"./chunk-4JJEULIU.js";import"./chunk-ERLXMSWH.js";import"./chunk-HCC77LJK.js";import{a as E,b as w,c as D,d as A,e as T}from"./chunk-FRDNIM2O.js";import"./chunk-LBBDP666.js";import{a as S,b as F}from"./chunk-O5DX6C7Z.js";import"./chunk-NNQGFXKQ.js";import"./chunk-4O3FVBGX.js";import"./chunk-NBRYHMVY.js";import"./chunk-DOJ5NW32.js";import{r as b}from"./chunk-RWFPYU6R.js";import"./chunk-FPPZ4BUR.js";import{Ib as r,Jb as e,Kb as t,Wb as f,Za as o,ha as u,kc as n,nb as p,oc as g,pc as v,qc as y,va as d}from"./chunk-LNAK4PJ4.js";import"./chunk-6HR7AMTL.js";var k=class c{activeTab=d(0);fb=u(C);customForm=this.fb.group({name:["",[a.required]],email:["",[a.required,a.email]],age:[null,[a.required,a.min(18)]],country:["",[a.required]]});formValues=d({});constructor(){this.customForm.valueChanges.subscribe(i=>{this.formValues.set(i)})}onSubmit(){this.customForm.valid?(console.log("Form submitted:",this.customForm.value),alert("Form submitted successfully!")):this.customForm.markAllAsTouched()}dynamicFormConfig={fields:[{key:"name",type:"text",label:"Name",required:!0,placeholder:"Enter your name"},{key:"email",type:"email",label:"Email",required:!0,placeholder:"Enter your email"},{key:"age",type:"number",label:"Age",required:!0,placeholder:"Enter your age",min:18,max:100},{key:"country",type:"select",label:"Country",required:!0,options:[{label:"United States",value:"US"},{label:"Canada",value:"CA"},{label:"United Kingdom",value:"UK"},{label:"Germany",value:"DE"},{label:"France",value:"FR"}]},{key:"bio",type:"textarea",label:"Biography",placeholder:"Tell us about yourself",rows:4}],submitLabel:"Submit",showCancel:!0};onDynamicFormSubmit(i){console.log("Dynamic form submitted:",i),alert("Dynamic form submitted successfully!")}static \u0275fac=function(s){return new(s||c)};static \u0275cmp=p({type:c,selectors:[["app-control-value-accessor-demo"]],decls:74,vars:8,consts:[[1,"space-y-6"],[1,"space-y-4"],[1,"text-2xl","sm:text-3xl","font-bold","text-gray-900","dark:text-gray-100"],[1,"text-gray-600","dark:text-gray-400"],[1,"w-full",3,"valueChange","value"],[1,"flex","flex-wrap","gap-2","mb-6","border-b","border-gray-200","dark:border-gray-700"],[3,"value"],[1,"font-medium"],[1,"text-xl","font-semibold","text-gray-900","dark:text-gray-100"],[1,"prose","dark:prose-invert","max-w-none"],[1,"text-gray-700","dark:text-gray-300"],[1,"list-disc","list-inside","space-y-2","text-gray-700","dark:text-gray-300"],[3,"formSubmit","config"],[1,"text-lg","font-semibold","mb-2","text-gray-900","dark:text-gray-100"],[1,"bg-gray-900","text-gray-100","p-4","rounded-lg","overflow-x-auto","text-sm"]],template:function(s,l){s&1&&(e(0,"div",0)(1,"p-card")(2,"div",1)(3,"h1",2),n(4," ControlValueAccessor Demo "),t(),e(5,"p",3),n(6," Demonstrates custom form controls using ControlValueAccessor interface. The FormFieldRendererComponent implements ControlValueAccessor to work seamlessly with Angular Reactive Forms. "),t()()(),e(7,"p-tabs",4),y("valueChange",function(m){return v(l.activeTab,m)||(l.activeTab=m),m}),e(8,"p-tablist",5)(9,"p-tab",6)(10,"span",7),n(11,"Overview"),t()(),e(12,"p-tab",6)(13,"span",7),n(14,"Dynamic Form"),t()(),e(15,"p-tab",6)(16,"span",7),n(17,"Code Examples"),t()()(),e(18,"p-tabpanels")(19,"p-tabpanel",6)(20,"div",0)(21,"p-card")(22,"div",1)(23,"h2",8),n(24," What is ControlValueAccessor? "),t(),e(25,"div",9)(26,"p",10),n(27," ControlValueAccessor is an interface that allows custom form controls to integrate seamlessly with Angular's Reactive Forms and Template-driven Forms. It provides a bridge between form controls and custom components. "),t(),e(28,"ul",11)(29,"li"),n(30,"Enables custom components to work with formControl and ngModel"),t(),e(31,"li"),n(32,"Provides writeValue() to set component value from form"),t(),e(33,"li"),n(34,"Provides registerOnChange() to notify form of value changes"),t(),e(35,"li"),n(36,"Provides registerOnTouched() to mark form as touched"),t(),e(37,"li"),n(38,"Allows setDisabledState() for disabled state management"),t()()()()(),e(39,"p-card")(40,"div",1)(41,"h2",8),n(42," Implementation in FormFieldRendererComponent "),t(),e(43,"p",10),n(44," The FormFieldRendererComponent implements ControlValueAccessor, allowing it to be used directly with Angular's form controls. This enables the dynamic form to work with reactive forms without any additional configuration. "),t()()()()(),e(45,"p-tabpanel",6)(46,"p-card")(47,"div",1)(48,"h2",8),n(49," Dynamic Form with ControlValueAccessor "),t(),e(50,"p",3),n(51," This form uses FormFieldRendererComponent which implements ControlValueAccessor internally. Each field is a custom form control that integrates seamlessly with Angular Reactive Forms. "),t(),e(52,"app-dynamic-form",12),f("formSubmit",function(m){return l.onDynamicFormSubmit(m)}),t()()()(),e(53,"p-tabpanel",6)(54,"p-card")(55,"div",0)(56,"div")(57,"h3",13),n(58," ControlValueAccessor Interface "),t(),e(59,"pre",14)(60,"code"),n(61,`interface ControlValueAccessor {
  writeValue(value: any): void;
  registerOnChange(fn: any): void;
  registerOnTouched(fn: any): void;
  setDisabledState?(isDisabled: boolean): void;
}`),t()()(),e(62,"div")(63,"h3",13),n(64," Implementation Example "),t(),e(65,"pre",14)(66,"code"),n(67,`@Component({
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => FormFieldRendererComponent),
    multi: true
  }]
})
export class FormFieldRendererComponent
  implements ControlValueAccessor {
  
  private onChange = (value: any) => {};
  private onTouched = () => {};

  writeValue(value: any): void {
    this.control.setValue(value, { emitEvent: false });
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    if (isDisabled) {
      this.control.disable();
    } else {
      this.control.enable();
    }
  }
}`),t()()(),e(68,"div")(69,"h3",13),n(70," Usage in Template "),t(),e(71,"pre",14)(72,"code"),n(73,`<form [formGroup]="form">
  <app-form-field-renderer
    [fieldConfig]="field"
    [control]="form.get('name')"
  />
</form>`),t()()()()()()()()()),s&2&&(o(7),g("value",l.activeTab),o(2),r("value","0"),o(3),r("value","1"),o(3),r("value","2"),o(4),r("value","0"),o(26),r("value","1"),o(7),r("config",l.dynamicFormConfig),o(),r("value","2"))},dependencies:[b,x,F,S,h,T,w,E,D,A,V],encapsulation:2,changeDetection:0})};export{k as ControlValueAccessorDemoComponent};
