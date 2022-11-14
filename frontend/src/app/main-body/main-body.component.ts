import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-body',
  templateUrl: './main-body.component.html',
  styleUrls: ['./main-body.component.css']
})
export class MainBodyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  article_title:any="";
  dates:any="12/11/2022";
  
}
