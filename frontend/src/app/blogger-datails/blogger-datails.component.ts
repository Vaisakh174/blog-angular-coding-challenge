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
  Name: any = "";
  blogerData: any = [];

  flag: any = true;

  incCount() {
    this.blogerData[0].followCount++;
    this.flag = false;
  }
  decCount() {
    if (this.blogerData[0].followCount > 0) {
      this.blogerData[0].followCount--;
      this.flag = true;
    }
  }
  
  getdata() {
    this.api.getall().subscribe(res => {
      this.blogerData = res;
      console.log("incoming data",this.blogerData[0].blogerName );
    });
  }


  

}
