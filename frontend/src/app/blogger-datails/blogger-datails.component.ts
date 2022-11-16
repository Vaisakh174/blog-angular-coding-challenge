import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-blogger-datails',
  templateUrl: './blogger-datails.component.html',
  styleUrls: ['./blogger-datails.component.css']
})
export class BloggerDatailsComponent implements OnInit {
  blogerData: any = [{blogerImg:"",blogerName:""}];

  flag: any = true;
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getdata();
  }




  incCount() {
    this.blogerData[0].followCount++;
    this.flag = false;
    this.updates();
  }
  decCount() {
    if (this.blogerData[0].followCount > 0) {
      this.blogerData[0].followCount--;
      this.flag = true;
      this.updates();
    }
  }
  
  getdata() {
    this.api.getall().subscribe(res => {
      this.blogerData = res;
      console.log("incoming data from  bloger details", this.blogerData[0]);
    });


  }

  updates() {
    this.api.update(this.blogerData[0].followCount,this.blogerData[0]._id).subscribe((res) => {
      // this.blogerDatas = res;
      console.log("incoming data from updatecount ",res);
      
    });
    
  }


}