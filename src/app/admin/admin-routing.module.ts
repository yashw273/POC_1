import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDetailsComponent } from '../employee-details/employee-details.component';
import { EmployeedataComponent } from '../employeedata/employeedata.component';
import { ShowdataComponent } from '../showdata/showdata.component';

const routes: Routes = [
  {path:'emp',component:EmployeeDetailsComponent},
  {path:'fillemp',component:EmployeedataComponent},
  {path:'showemp/:Empno',component:ShowdataComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
