import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-businessview',
  templateUrl: './businessview.component.html',
  styleUrls: ['./businessview.component.css']
})
export class BusinessviewComponent implements OnInit {

  title='Business Summary';

  constructor() { }

  ngOnInit(): void {
  }

}
