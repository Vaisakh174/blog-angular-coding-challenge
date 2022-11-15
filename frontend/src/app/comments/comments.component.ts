import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  blogerData: any = [];
  commentform: any = new FormGroup({
    "user": new FormControl(""),
    "comment": new FormControl("")
  });
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

  onsubmit() {
    this.api.posts(this.commentform.value).subscribe(res => {
      if (res) {
        alert("Data saved successfully")
        // console.log(this.commentform.value)
        this.getdata();
      }
      console.log(res);
    })
    console.log(this.commentform.value);
   
  }

}
