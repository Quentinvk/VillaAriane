import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  public isCollapsed = true;
  show : string = "Show Calendar";


  constructor() { 
  }

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
