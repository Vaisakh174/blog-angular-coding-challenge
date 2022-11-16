import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-main-body',
  templateUrl: './main-body.component.html',
  styleUrls: ['./main-body.component.css']
})
export class MainBodyComponent implements OnInit {

  blogerData: any = [{articleTitle:"",articleDate:""}];
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getdata();
  }


  getdata() {
    this.api.getall().subscribe(res => {
      this.blogerData = res;
      console.log("incoming data from main body", this.blogerData[0]);
    });
  }

}
