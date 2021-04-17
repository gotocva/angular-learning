import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public myVariable: string;
  constructor() { }

  ngOnInit(): void {
  }

  textChanged() {
    console.log(this.myVariable);
  }
}
