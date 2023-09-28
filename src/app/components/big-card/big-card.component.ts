import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: [
    './big-card.component.css',
    './big-card.responsive.component.css'
  ]
})
export class BigCardComponent implements OnInit {
  @Input()
  image:string = "";

  @Input()
  date:string ="";
  
  @Input()
  id:string = "0";

  @Input()
  title:string = "";
  
  @Input()
  content:string = "";
  
  constructor() { }


  ngOnInit(): void {
  }

}
