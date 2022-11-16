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
  
 
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getdata();
  }

  commentform: any = new FormGroup({
    "user": new FormControl(""),
    "comment": new FormControl("")
  });

  getdata() {
    this.api.getall().subscribe(res => {
      this.blogerData = res;
      console.log("incoming data for comment", this.blogerData[0].comment);
    });
  }

  onsubmit() {
    this.api.posts(this.commentform.value).subscribe(res => {
      if (res) {
        alert("Data saved successfully")
        console.log("incoming data from comment",this.commentform.value)
        this.getdata();
      }
      console.log(res);
    })
    console.log("incoming data from comment",this.commentform.value);
   
  }

}
