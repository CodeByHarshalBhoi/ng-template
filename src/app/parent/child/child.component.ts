import { Component, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
constructor(){}

  @ContentChild('parGraph')
  paraGraphEl!: ElementRef;

  styleParaGraph(){
    console.log(this.paraGraphEl.nativeElement);
  }
}
