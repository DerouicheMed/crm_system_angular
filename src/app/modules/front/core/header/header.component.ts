import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  //this variable will be used to display the user's username in the top right corner
  //of the header
  

  constructor() { }

  ngOnInit() {
  }

}
