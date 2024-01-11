import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
constructor(){};


  @ViewChild('parGraph')
  paraEl!: ElementRef;

  getValue(){
    console.log(this.paraEl.nativeElement );

  }
}
