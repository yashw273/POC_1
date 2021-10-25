import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes,RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { childComponent} from './child/child.component';
import { AgGridModule } from 'ag-grid-angular';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeedataComponent } from './employeedata/employeedata.component';
import { ShowdataComponent } from './showdata/showdata.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs' 
import { ToastrModule } from 'ngx-toastr';

const routes :Routes=[
  { path: 'emp', component: EmployeeDetailsComponent},
  { path: 'fillemp', component: EmployeedataComponent },
  { path: 'showemp', component: ShowdataComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    EmployeeDetailsComponent,
childComponent,
EmployeedataComponent,
ShowdataComponent
  ],
  imports: [
     AgGridModule.withComponents([]), 
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatTabsModule,
    
    
    RouterModule.forRoot([
       { path: 'emp', component: EmployeeDetailsComponent},
        { path: 'fillemp', component: EmployeedataComponent },
        { path: 'showemp', component: ShowdataComponent}
    ]),
    
    
    BrowserAnimationsModule,
    ToastrModule.forRoot(
   
    ),

  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
