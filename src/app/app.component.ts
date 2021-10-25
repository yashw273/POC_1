import { Component, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  navLinks:any[];
  activeLinkIndex = -1;
  ngOnInit(): void {
    this.router.events.subscribe(() => {
        this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
        
    });
  }
constructor(private router:Router)
  {
    this.navLinks = [
      {
          label: 'Employee Details',
          link: 'admin/emp',
          index: 0
      }, {
          label: 'Fill Employee Details',
          link: 'admin/fillemp',
          index: 1
      }, {
          label: 'Show Employee Details',
          link: 'admin/showemp/:Empno',
          index: 2
      }, 
  ];
  }
  // async loademployee()
  // {
  //   this.vcr.clear();
  //   const {EmployeeDetailsComponent}=await import ('./employee-details/employee-details.component');
  //   this.vcr.createComponent(
  //     this.cfr.resolveComponentFactory(EmployeeDetailsComponent)
  //   )
  // }
  // async fillemployee()
  // {
  //   this.vcr.clear();
  //   const {EmployeedataComponent}=await import ('./employeedata/employeedata.component');
  //   this.vcr.createComponent(
  //     this.cfr.resolveComponentFactory(EmployeedataComponent)
  //   )
  // }
  // async showemployee()
  // {
  //   this.vcr.clear();
  //   const {ShowdataComponent}=await import ('./showdata/showdata.component');
  //   this.vcr.createComponent(
  //     this.cfr.resolveComponentFactory(ShowdataComponent)
  //   )
  }
  // onclick()
  // {
  //   console.log('this is sample click')
  // }

