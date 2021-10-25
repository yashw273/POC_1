import { Component, Input, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class childComponent implements OnInit {
@Input() name:string='Yash';
 
@Input()  psno:number=0;
  @Output() nameClicked: EventEmitter<string> =
    new EventEmitter<string>();
    @Output() numberClicked: EventEmitter<number> =
    new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }
  onClick(): void {
    this.nameClicked.emit(`${this.name}`);
    this.numberClicked.emit(this.psno);
  }

 

}
