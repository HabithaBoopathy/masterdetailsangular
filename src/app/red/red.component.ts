import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Details } from '../models/details';
import { Master } from '../models/master';
import { Red } from '../models/red';
import { RedService } from '../services/red.service';

@Component({
  selector: 'app-red',
  templateUrl: './red.component.html',
  styleUrls: ['./red.component.css']
})
export class RedComponent implements OnInit {

  master:Master;
  masters:Master[];
  details:Details;
  detailses:Details[];
  red:Red;
  reds:Red[];
  

  constructor(            //initialize class members                                                                        
    private httpClient: HttpClient,
    private redService: RedService,
    private router: Router,
   
  ){
    this.red= new Red();
    this.reds = []; 
    this.master = new Master();
      this.masters = []; 
      this.details=new Details();
      this.detailses = [];
                                                
  }  
                           
  ngOnInit(): void {
    
    this.fetchRed();
    
}
reloadData() {
  this.red = new Red();
  this.fetchRed();
    
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
// validateRankData(): boolean {
//   let flag = false;
//   if (this.red.red == '') {
//     alert('Please enter ID');
//   } 
   
//    else {
//     flag = true;
//   }
//   return flag;
// }
// onClick() {
//   if (this.validateRankData()) {
//     //asynchronous vs synchronous programming
//       this.redService.createRed(this.red).subscribe(//check the change
//       (data) => {
//         if (data) { 
//           console.log('Checkpoint 3');
//           //reload data since new record has been added
//           this.reloadData();
//           alert('User registered successfully')
          
//         } 
//       },
//       error => console.log(error));
//     }
//       }
     
}
