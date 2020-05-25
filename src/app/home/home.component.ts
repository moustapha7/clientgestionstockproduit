import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  

  constructor() { }

  showHideSideBar : boolean = false;

  ngOnInit() {
  }


  onShowSideBarChange(showHideSideBar){
    this.showHideSideBar = showHideSideBar;
  }


  

  
}
