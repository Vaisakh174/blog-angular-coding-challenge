import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getall() {

    // return this.http.get("http://localhost:3000/getall"); 
    return this.http.get('/api/getall');
  }


  // getbyid(id:any){
  //   return this.http.get(`http://localhost:3000/api/getsingle/${id}`);
  //   }

  posts(data: any) {
    // return this.http.post("http://localhost:3000/post",data);
    return this.http.post('/api/post', data);
  }


  // deletes(id:any){
  //   return this.http.delete(`http://localhost:3000/api/delete/${id}`);
  //   }


  updates(followCount: any, _id: any) {
    return this.http.put('/api/update', { followCount, _id });
    // return this.http.put('http://localhost:3000/update',{followCount,_id});

  }



}
