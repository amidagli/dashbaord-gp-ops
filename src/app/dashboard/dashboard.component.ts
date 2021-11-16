import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  status: boolean = false;
  clickEvent(){
      this.status = !this.status;       
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
