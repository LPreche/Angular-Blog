import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: [
    './small-card.component.css',
    './small-card.responsive.component.css'
  ]
})
export class SmallCardComponent implements OnInit {
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
