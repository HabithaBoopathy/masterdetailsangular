import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Black } from '../models/black';
import { Details } from '../models/details';
import { Master } from '../models/master';
import { Measure } from '../models/measure';
import { Red } from '../models/red';

import { DetailsService } from '../services/details.service';
import { RedService } from '../services/red.service';

import { MasterService } from '../services/master.service';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {
  [x: string]: any;
 public blacks: Black[] = [
  {id:1,name:'Open'},
  {id:2,name:'Closed'},
  {id:3,name:'Cancelled'},
 ];
 public measures:Measure[]=[
      {id:1,name:'litres'},
      {id:2,name:'Kilo'},
      {id:3,name:'gram'},
      {id:4,name:'ton'},
      {id:5,name:'No of pcs'},
       ];
   i=1001;     
  master:Master;
  masters:Master[];
  details:Details;
  detailses:Details[];
 public reds:Red[]=[];
//  reds:Red[];

  constructor(private httpClient: HttpClient,
    private masterService: MasterService,
    private router: Router,private detailsService:DetailsService,private redService:RedService) {
      this.master = new Master();
      this.masters = []; 
      this.details=new Details();
      this.detailses = [];
      // this.red = new Red();
      // this.reds = []; 

     }

  ngOnInit(): void {
    this.fetchMaster();
    this.fetchDetails();
    this.fetchRed();
  }
  
  reloadData() {
    this.master = new Master();
    this.details=new Details();
  this.fetchMaster();
  this.fetchDetails();
  this.fetchRed();
}

fetchMaster() {
  this.masterService.getMaster().subscribe(
  (data) => {
    this.masters = data;
  },
  (err) => {
    console.log(err);
  }
);  
}

fetchDetails() {
  this.detailsService.getDetails().subscribe(
  (data) => {
    this.detailses = data;
  },
  (err) => {
    console.log(err);
  }
);  
}
fetchRed() {
  this.redService.getRed().subscribe(
  (data) => {
    this.reds = data;
  },
  (err) => {
    console.log(err);
  }
);  
}
validateMasterData(): boolean {
  let flag = false;
 
   if (this.master.masterNo == '') {
    alert('Please enter no');
  } else if (this.master.masterDate == '') {
    alert('Please select the status');
  } 
  else if (this.master.black == '') {
    alert('Please select the status');
  } 
  else if (this.master.customerName == '') {
    alert('Please enter the customer name');
  } 
   else {
    flag = true;
  }
  return flag;
}
onRegister() {
  if (this.validateMasterData()) {
    //asynchronous vs synchronous programming
      this.masterService.createMaster(this.master).subscribe(//check the change
      (data) => {
        if (data) { 
          console.log('Checkpoint 3');
          //reload data since new record has been added
          this.reloadData();
          alert('User registered successfully')
        } 
        else
        alert(
          ' already exists'
        ); 
        },
      
      (err) => {
        console.log(err);
      }
    );
    
    console.log('Checkpoint 2');
    
  }
}
validateDetailsData(): boolean {
  let flag = false;
  if (this.details.serialNo == '') {
    alert('Please enter serial no');
   } else if (this.details.measure == '') {
     alert('Please enter unit');
   }else if (this.details.red == '') {
    alert('Please enter unit');
   }
   else if (this.details.particulars == '') {
    alert('Please fill the particulars');
  }
  else if (this.details.quantity == '') {
    alert('Please enter quantity');
  }
   else {
    flag = true;
  }
  return flag;
}

onClick() {
  if (this.validateDetailsData()) {
    //asynchronous vs synchronous programming
      this.detailsService.createDetails(this.details).subscribe(//check the change
      (data) => {
        if (data) { 
          console.log('Checkpoint 3');
          //reload data since new record has been added
          this.reloadData();
          alert('User registered successfully')
        } 
        else
        alert(
          ' already exists'
        ); 
        },
      
      (err) => {
        console.log(err);
      }
    );
    
    
    
  }
}


onClear(no: string) {
  this.detailsService.deleteDetails(no).subscribe(
  (data) => {
    if (data) {
      this.reloadData();
    } else {
      alert(
        'Error while deleting. Please look onto the backend logs'
      );
    }
  },
  (err) => {
    console.log(err);
  }
  ); 
  }
  deleteDetails(serialNo: string){
    this.detailsService.deleteDetails(serialNo).subscribe(
    (data) => {
      if (data) {
        this.reloadData();
      } else {
        alert(
          'Error while deleting. Please look onto the backend logs'
        );
      }
    },
    (err) => {
      console.log(err);
    }
    ); 
    } 
}