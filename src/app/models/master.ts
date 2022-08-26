export class Master {
  [x: string]: any;
    masterNo:string;
    masterDate:string;
    customerName:string;
    black: string;
    serialNo:string;
    unit:string;
    particulars:string;
    quantity:string;
    measure:string;
    name!: string;
   constructor(){
    this.masterNo="";
    this.masterDate="";
    this.black="";
    this.customerName="";
    this.serialNo="";
    this.unit="";
    this.particulars="";
    this.quantity="";
    this.measure="";
   }
}
