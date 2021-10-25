import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from '../notification.service';
@Component({
  selector: 'app-showdata',
  templateUrl: './showdata.component.html',
  styleUrls: ['./showdata.component.css']
})
export class ShowdataComponent implements OnInit {
data:any;
EmpNumber:any[]=[];
EmployeDetails:any;
result:any[]=[];
EmployeeNumber:any;


  constructor(private route:ActivatedRoute,private notifyservice:NotificationService) { 
   
  }

  returnZero()
  {
  return 0;
  }
  



  ngOnInit(): void {

   
    // this.route.params.subscribe(params=> {
      
    //   // console.log(params);
    //   // this.res=params.data1;
    //     // this.data1
    //     console.log(params.data)
    //     this.data1=(localStorage.getItem("Emp"));
    //   // this.EmployeeName=JSON.parse(params.data.EmployeeName)
      
    // });
   

   this.route.paramMap.subscribe(params => {
  this.EmployeeNumber= params.get('Empno');
  this.EmpNumber.push(JSON.parse(localStorage.getItem('data')||'{}'));
this.EmployeDetails = this.EmpNumber[0].find((e:any) => e.EmployeePSNO == this.EmployeeNumber);
   console.log(this.EmployeDetails);



if(this.EmployeDetails==null)
{
this.showToasterError();
}
if(this.EmployeDetails.EmployeePSNO==this.EmployeeNumber)
{
  this.showToasterInfo();
}
  });


}
showToasterError(){
  this.notifyservice.showError("Record Not Found.")
}
showToasterInfo()
{
  this.notifyservice.showInfo("Record Found Successfully.")
}
}
