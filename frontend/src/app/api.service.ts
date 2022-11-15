import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getall() {
    
    // return this.http.get("http://localhost:3000/getall"); 
    return this.http.get("getall"); 
  }



  // getbyid(id:any){
  //   return this.http.get(`http://localhost:3000/api/getsingle/${id}`);
  //   }

  posts(data:any){
    // return this.http.post("http://localhost:3000/post",data);
    return this.http.post("post",data);
    }


  // deletes(id:any){
  //   return this.http.delete(`http://localhost:3000/api/delete/${id}`);
  //   }


  // update(data:any,id:any){
  //   return this.http.put('http://localhost:3000/api/update',{data,id});
  //   }



}
