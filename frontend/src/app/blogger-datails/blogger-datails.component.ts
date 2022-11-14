import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-blogger-datails',
  templateUrl: './blogger-datails.component.html',
  styleUrls: ['./blogger-datails.component.css']
})
export class BloggerDatailsComponent implements OnInit {

  constructor(private api : ApiService) { }

  ngOnInit(): void {this.getdata();
  }
  // for mongo
  Name: any = "Vaisakh";
  count: any = 0;;
  blogerData: any = [];

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
  
  getdata() {
    this.api.getall().subscribe(res => {
      this.blogerData = res;
      console.log("incoming data", res);
    });
  }


  

}
