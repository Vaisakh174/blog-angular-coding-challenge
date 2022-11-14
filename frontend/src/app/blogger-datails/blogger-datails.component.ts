import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blogger-datails',
  templateUrl: './blogger-datails.component.html',
  styleUrls: ['./blogger-datails.component.css']
})
export class BloggerDatailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // for mongo
  Name: any = "Vaisakh";
  count: any=0;;


  flag: any = true;

  incCount() {
    this.count++;
    this.flag = false;
  }
  decCount() {
    if (this.count > 0) {
      this.count--;
      this.flag = true;
    }
  }


}
