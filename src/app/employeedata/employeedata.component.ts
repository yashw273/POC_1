import { Component, OnInit } from '@angular/core';
import {  FormControl, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from '../notification.service';
import * as $ from 'jquery';
@Component({
  selector: 'app-employeedata',
  templateUrl: './employeedata.component.html',
  styleUrls: ['./employeedata.component.css']
})
export class EmployeedataComponent implements OnInit {
  loginForm:any;
  
 Employee:any=[];
//  {
//    "EmployeeName"
//    "EmployeePSNO"
//    "EmployeeTiming"
//    "EmployeeLocation"
//    "EmployeePhone"

//   };
 Employee1:any[] = [];
 deleteform:any;

 newArray:any;
 item:any;
EmployeeNumber:any;
Employeedetails:any;
objectToRemove:any;
value1:any;
flag:any=0;
  constructor(private router:Router,private route:ActivatedRoute,private notifyservice:NotificationService) { 
   this.loginForm=new FormGroup({

      EmployeeName: new FormControl("",{
        validators: [
          Validators.required,
          Validators.pattern('^[a-zA-Z]+$'),
          Validators.maxLength(35)]
      }),
      EmployeePSNO: new FormControl("",{
        validators: [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern("^[0-9]*$[0-9]*$"),
          Validators.maxLength(8)]
      }),
      EmployeeTiming: new FormControl("",{
        validators: 
          [Validators.required,
          Validators.pattern("^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$")]
         
      }),
      EmployeeLocation: new FormControl("",{
        validators: 
          [Validators.required]
         
         
      }),
      EmployeePhone: new FormControl("",{
        validators: [
          Validators.required,
          Validators.pattern('([0-9]){10}'),
        ]
      })
      
       });
       this.deleteform=new FormGroup({
        EmployeePSNO: new FormControl("",{
          validators: [
            Validators.required,
            Validators.minLength(8),
            Validators.pattern("^[0-9]*$[0-9]*$"),
            Validators.maxLength(8)]
        }),
  });
}


 public validationMessages = {
  'EmployeeName': [
    { type: 'required', message: 'Employee Name is required' },
    { type: 'pattern', message: 'Employee Name Must Be In Alphabets.' },
    {type: 'maxlength', message: 'Employee Name Must Be Maximun 35 Characters'}
  ],
  'EmployeePSNO': [
    { type: 'required', message: 'Employee PSNO is required' },
    { type: 'minlength', message: 'Employee PSNO should not be less than 8 characters.' },
    { type: 'pattern', message: 'Employee PSNO Must Be A Number.' },
    {type:'maxlength',message:'Employee PSNO should not be more than 8 characters.'}
    
    
  ],
  'EmployeeTiming': [
    { type: 'required', message: 'Employee Timing is required' },
    { type: 'pattern', message: 'Employee Timing Must Be In HH:MM Format.' }
   
  ],
  'EmployeeLocation': [
    { type: 'required', message: 'Employee Location is required' },
 
   
  ],
  'EmployeePhone': [
    { type: 'required', message: 'Employee Phone is required' },
    { type: 'pattern', message: 'Employee Phone Number Must Be A 10-digit Number.' }
  ]
}


 onSubmit()
 {
   

    // let params:any=this.loginForm.value.EmployeeName; 
    // console.log(params);
   
//   this.router.navigate(['./showemp'],

//    {
//     params:{data:JSON.stringify(data)}
//    }
//  );

  // localStorage.setItem("Emp",JSON.stringify(data));
      
  // localStorage.setItem("EmpNo",JSON.stringify(data.EmployeePSNO));
  // localStorage.setItem("EmpTime",JSON.stringify(data.EmployeeTiming));
  // localStorage.setItem("EmpLocation",JSON.stringify(data.EmployeeLocation));
  // localStorage.setItem("EmpPhone",JSON.stringify(data.EmployeePhone));
//  localStorage.setItem("params",JSON.stringify(data));
  
// Employee.Empname=params.EmployeeName
// Employee.Empno=params.EmployeePSNO
// Employee.Emptime=params.EmployeeTiming
// Employee.Emplocation=params.EmployeeLocation
// Employee.Emphone=params.EmployeePhone


if(localStorage.getItem('data')==null)
{


this.Employee1.push(this.loginForm.value)
 localStorage.setItem('data',JSON.stringify(this.Employee1))
  
}
else
{

  this.Employee1.push(this.loginForm.value)
  localStorage.setItem('data',JSON.stringify(this.Employee1));

}



 console.log(this.Employee)
}

showToasterSuccess(){
  this.notifyservice.showSuccess("Record Saved Successfully")
  
}
showToasterSuccess1()
{
  this.notifyservice.showSuccess("Record Deleted Successfully")
}

showToasterError()
{
  this.notifyservice.showError("Record Does Not Exist.")
}

showToasterInfo()
{
  this.notifyservice.showInfo("Fill New Record.")
}

ondelete()
{

 this.value1= JSON.parse(localStorage.getItem('data')||'{}')
 console.log(this.value1)
//  console.log(this.Employee);
// let x=1;
//   for(var i=0;i<this.Employee.length;i++){
//     for( x in this.Employee[i]){
//         console.log(this.Employee[i][x]);
//         if(this.Employee[i][x] ===this.deleteform.controls.EmployeePSNO.value)
//         {
//           this.found=1;
//         }
//         else
//         {
//           this.found=0;
//         }
//     }
//   }

//  if(this.employeedata){
//      this.Employee.push(this.employeedata);
//  }  
// const params=this.deleteform.value;
// const item ={"EmployeePSNO":params}
// const value=Object.values(item);
// this.Employee = this.Employee[0];

// for(let emp  of this.Employee){
//   if(emp.EmployeePSNO === this.deleteform.controls.EmployeePSNO.value){
//   this.objectToRemove = emp;
//   }
// }
console.log(this.value1.length);
if(this.value1.length>0)
{
 let objectToRemove=this.value1.find((emp :any)=> emp.EmployeePSNO === this.deleteform.controls.EmployeePSNO.value)
  console.log(objectToRemove);
  if(objectToRemove)
  {
    this.value1.splice(this.value1.findIndex((a:any) => a.EmployeePSNO === objectToRemove.EmployeePSNO) ,1)
    // const NewEmployeeList = this.value1.find((emp:any)=>emp.EmployeePSNO !== objectToRemove);
    // console.log(NewEmployeeList);
    // this.Employee1 =[];
    // if(NewEmployeeList)
    // {
      // NewEmployeeList == undefined?localStorage.setItem('data',JSON.stringify(this.Employee)):
  // this.Employee.push(NewEmployeeList)
  //   localStorage.setItem('data',JSON.stringify(  this.Employee.push(NewEmployeeList)));
  // }
  // this.value1.splice(objectToRemove,1);

  console.log(this.value1);
  // this.Employee1.push(this.value1);
  localStorage.setItem('data',JSON.stringify(this.value1));
  this.showToasterSuccess1();
    
  }
  else
    {
       
      this.showToasterError();  
     }
    }
    else 
    {
      this.showToasterError();  
    }
   


    
}


  ngOnInit(): void {
   
}

id:any='empfill'
toggle(id:any):void
{
  this.id=id;
// this.showcontent=!this.showcontent;
// this.showcontent1=false;
}
// var $myGroup = $('#myGroup');
// $myGroup.on('show','.collapse', function() {
//     $myGroup.find('.collapse.in').collapse('hide');
// });
}

