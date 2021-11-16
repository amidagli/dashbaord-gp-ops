import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operationview',
  templateUrl: './operationview.component.html',
  styleUrls: ['./operationview.component.css']
})
export class OperationviewComponent implements OnInit {
  title = 'List of Issues';

  constructor() { }

  ngOnInit(): void {
  }

}
