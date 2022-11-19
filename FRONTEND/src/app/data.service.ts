import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {


  BaseUrl = 'http://127.0.0.1:8000/';

  constructor(private http:HttpClient) { }
  getData()
  {
    return this.http.get(this.BaseUrl);
  }
  postData(data:any)
  {
    return this.http.post(this.BaseUrl+'add', data);
  }
  putData(id:number, data:any)
  {
    return this.http.put(this.BaseUrl+'edit', data);
  }
  deleteData(id:any)
  {
    return this.http.delete(this.BaseUrl +'delete/'+ id);
  }

  getsingleData(id:any)
  {
    return this.http.get(this.BaseUrl + id);
  }
}
