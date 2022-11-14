import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  blogerData: any = [];
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getdata();
  }

  getdata() {
    this.api.getall().subscribe(res => {
      this.blogerData = res;
      console.log("incoming data", this.blogerData[0].articleDate);
    });
  }
}
