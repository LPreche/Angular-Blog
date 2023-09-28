import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-card',
  templateUrl: './grid-card.component.html',
  styleUrls: [
    './grid-card.component.css',
    './grid-card.responsive.component.css'
  ]
})
export class GridCardComponent implements OnInit {

  @Input()
  date:string = "";
  
  @Input()
  image:string = "";

  @Input()
  id:string = "0";

  @Input()
  title:string ="";

  constructor() { }

  ngOnInit(): void {
  }

}
