import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-studio',
  templateUrl: './studio.component.html',
  styleUrls: ['./studio.component.css']
})
export class StudioComponent implements OnInit {

  public isCollapsed = true;
  show : string = "Show Calendar";
  constructor() { }

  ngOnInit() {
  }


  changeButtonLabel(){
    if(this.isCollapsed===false){
      this.show= "Hide Calendar";
    }
    else
      this.show="Show Calendar";
}
}
