import { Component, OnInit } from '@angular/core';
import { GridOptions } from 'ag-grid-community/dist/lib/entities/gridOptions';

import { ICafeteria } from './cafeteria';
import {IEmployee} from './employee';
import { EmployeeDetailsModel } from './EmployeeDetails.model';
import * as $ from 'jquery';
@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  // public gridOptions: GridOptions;
nameTitle:any
numberTitle:any
NameTitle:string='Employee Name'
cafeTitle:string='Cafeteria Entry'
cafestatus:string='YES ? NO'


// columnDefs:any;
// rowData:any;
// style = {
//   width: '400px',
//   height: '400px',
//   flex: '1 1 auto'

// };

showcontent:boolean=false;
showcontent1:boolean=false;
private _nameFilter = '';
private _cafeFilter ='';
get cafeFilter():string
{
  return this._cafeFilter;

}
set cafeFilter(value:string)
{
   this._cafeFilter = value;
    this.cafefiltered = this.performFilter1(value); 
}
  get nameFilter(): string {
    return this._nameFilter;
  }
  set nameFilter(value: string) {
    this._nameFilter = value;
    this.namefiltered = this.performFilter(value);
  }
// pageTitle:string='::Employee Details::'

namefiltered:IEmployee[]=[
  {
    "employeename":"Yash",
    "employeePSNO":10609010,
    "employeeTiming":"09.45",
    "vaccinationstatus":"Fully",
    "baselocation":"Airoli"


  },
  {
    "employeename":"Mac",
    "employeePSNO":10243128,
    "employeeTiming":"08.10",
    "vaccinationstatus":"Fully",
    "baselocation":"Pune"
  },
  {
    "employeename":"Abhinav",
    "employeePSNO":10932109,
    "employeeTiming":"11.00",
    "vaccinationstatus":"Partially",
    "baselocation":"Hyderabad"
  },
  {
    "employeename":"Robin",
    "employeePSNO":10912361,
    "employeeTiming":"09.00",
    "vaccinationstatus":"Partially",
    "baselocation":"Powai"
  },
  {
    "employeename":"Rosy",
    "employeePSNO":10234710,
    "employeeTiming":"10.30",
    "vaccinationstatus":"Fully",
    "baselocation":"Chennai"
  },
  {
    "employeename":"Vedant",
    "employeePSNO":10234123,
    "employeeTiming":"08.34",
    "vaccinationstatus":"Fully",
    "baselocation":"Pune"
  },
  {
    "employeename":"Tom",
    "employeePSNO":10234541,
    "employeeTiming":"11.41",
    "vaccinationstatus":"Partially",
    "baselocation":"Pune"
  },
  {
    "employeename":"Ayesha",
    "employeePSNO":10234810,
    "employeeTiming":"08.30",
    "vaccinationstatus":"Fully",
    "baselocation":"Powai"
  },
  {
    "employeename":"Nikhil",
    "employeePSNO":10234710,
    "employeeTiming":"10.14",
    "vaccinationstatus":"Fully",
    "baselocation":"Hyderabad"
  }
 
  ]

employees:IEmployee[]=
  [
    {
      "employeename":"Yash",
      "employeePSNO":10609010,
      "employeeTiming":"09.45",
      "vaccinationstatus":"Fully",
      "baselocation":"Airoli"
  
  
    },
    {
      "employeename":"Mac",
      "employeePSNO":10243128,
      "employeeTiming":"08.10",
      "vaccinationstatus":"Fully",
      "baselocation":"Pune"
    },
    {
      "employeename":"Abhinav",
      "employeePSNO":10932109,
      "employeeTiming":"11.00",
      "vaccinationstatus":"Partially",
      "baselocation":"Hyderabad"
    },
    {
      "employeename":"Robin",
      "employeePSNO":10912361,
      "employeeTiming":"09.00",
      "vaccinationstatus":"Partially",
      "baselocation":"Powai"
    },
    {
      "employeename":"Rosy",
      "employeePSNO":10234710,
      "employeeTiming":"10.30",
      "vaccinationstatus":"Fully",
      "baselocation":"Chennai"
    },
    {
      "employeename":"Vedant",
      "employeePSNO":10234123,
      "employeeTiming":"08.34",
      "vaccinationstatus":"Fully",
      "baselocation":"Pune"
    },
    {
      "employeename":"Tom",
      "employeePSNO":10234541,
      "employeeTiming":"11.41",
      "vaccinationstatus":"Partially",
      "baselocation":"Pune"
    },
    {
      "employeename":"Ayesha",
      "employeePSNO":10234810,
      "employeeTiming":"08.30",
      "vaccinationstatus":"Fully",
      "baselocation":"Powai"
    },
    {
      "employeename":"Nikhil",
      "employeePSNO":10234710,
      "employeeTiming":"10.14",
      "vaccinationstatus":"Fully",
      "baselocation":"Hyderabad"
    }
    
    ]



cafestats:ICafeteria[]=
[
{
  "employeename":"Yash",
  "EntryStatus":'YES',
  "employeeTiming":"05.45",
"FoodPass":"Granted"
},
{
  "employeename":"Robin",
  "EntryStatus":'NO',
  "employeeTiming":"NA",
  "FoodPass":"Granted"
},
{
  "employeename":"Abhinav",
  "EntryStatus":'YES',
  "employeeTiming":"02.15",
  "FoodPass":"Pending"
},
{
  "employeename":"Mac",
  "EntryStatus":'NO',
  "employeeTiming":"NA",
  "FoodPass":"Granted"
},
{
  "employeename":"Ben",
  "EntryStatus":'YES',
  "employeeTiming":"01.20",
  "FoodPass":"Granted"
},
{
  "employeename":"Robin",
  "EntryStatus":'YES',
  "employeeTiming":"01.20",
  "FoodPass":"Granted"
},
{
  "employeename":"Stella",
  "EntryStatus":'YES',
  "employeeTiming":"01.20",
  "FoodPass":"Pending"
},
{
  "employeename":"Advait",
  "EntryStatus":'YES',
  "employeeTiming":"01.20",
  "FoodPass":"Granted"
},
{
  "employeename":"Vedant",
  "EntryStatus":'YES',
  "employeeTiming":"01.20",
  "FoodPass":"Pending"
},
]

cafefiltered:ICafeteria[]=
[
  {
    "employeename":"Yash",
    "EntryStatus":'YES',
    "employeeTiming":"05.45",
  "FoodPass":"Granted"
  },
  {
    "employeename":"Robin",
    "EntryStatus":'NO',
    "employeeTiming":"NA",
    "FoodPass":"Granted"
  },
  {
    "employeename":"Abhinav",
    "EntryStatus":'YES',
    "employeeTiming":"02.15",
    "FoodPass":"Pending"
  },
  {
    "employeename":"Mac",
    "EntryStatus":'NO',
    "employeeTiming":"NA",
    "FoodPass":"Granted"
  },
  {
    "employeename":"Ben",
    "EntryStatus":'YES',
    "employeeTiming":"01.20",
    "FoodPass":"Granted"
  },
  {
    "employeename":"Robin",
    "EntryStatus":'YES',
    "employeeTiming":"01.20",
    "FoodPass":"Granted"
  },
  {
    "employeename":"Stella",
    "EntryStatus":'YES',
    "employeeTiming":"01.20",
    "FoodPass":"Pending"
  },
  {
    "employeename":"Advait",
    "EntryStatus":'YES',
    "employeeTiming":"01.20",
    "FoodPass":"Granted"
  },
  {
    "employeename":"Vedant",
    "EntryStatus":'YES',
    "employeeTiming":"01.20",
    "FoodPass":"Pending"
  },
]
tabid:any='Employee'
toggle(id:any):void
{
  this.tabid=id;
// this.showcontent=!this.showcontent;
// this.showcontent1=false;
}
// toggle1():void
// {
//   this.showcontent1=!this.showcontent1;
//   this.showcontent=false;
// }


employeesdetails:EmployeeDetailsModel[]=[]




  constructor() {
//     this.columnDefs = [
//       { field: "name", width: 120 },
//       { field: "number", width: 120 },
//       { field: "etime", width: 100 },
//       {headerName: 'Vaccination Status (Fully / Partially)',field: "vp", width: 460},
     
//   ];
// this.rowData=[
//   {name:"Yash",number:10683933,etime:"10:45",vp:"Fully"},
//            {name:"Mac",number:10683934,etime:"11:45",vp:"Fully"},
//             {name:"Abhinav",number:10683935,etime:"09:45",vp:"Partially"},
//             {name:"Robin",number:10683936,etime:"08:45",vp:"Partially"},
//             {name:"Rosy",number:10683937,etime:"11:40",vp:"Fully"},
//             {name:"Priya",number:10683938,etime:"09:50",vp:"Fully"},
//             {name:"Ben",number:10683939,etime:"08:10",vp:"Partially"},
//             {name:"Mike",number:10683940,etime:"11:21",vp:"Fully"},
//             {name:"Yogi",number:10683941,etime:"10:40",vp:"Partially"},
//             {name:"Abhishek",number:10683942,etime:"09:40",vp:"Fully"},
//             {name:"Stella",number:10683942,etime:"11:28",vp:"Partially"},
            
// ];
   }
  performFilter(filterBy: string): IEmployee[] {
    filterBy=filterBy.toLocaleLowerCase();
    return this.employees.filter((emp: IEmployee) =>
      emp.employeename.toLocaleLowerCase().includes(filterBy));
  }

  performFilter1(filterBy:string):ICafeteria[]
  {  filterBy=filterBy.toLocaleLowerCase();
    return this.cafestats.filter((caf: ICafeteria) =>
      caf.EntryStatus.toLocaleLowerCase().includes(filterBy));
  }
  ngOnInit(): void {
  }
  onNameClicked(message: string): void {
    this.nameTitle = message;
    
    
  }
  onNumberClicked(message1:number):void
  {
  
    this.numberTitle=message1+'/';
   
    
  }
 
  
 




   



 }
