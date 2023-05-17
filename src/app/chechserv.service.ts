import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class ChechservService {

  constructor(private http:HttpClient) { }

  getcheck(){
    return this.http.get("http://localhost:3000/checkbox")
  }

  postcheck(obj:any):Observable<any>{
    return this.http.post("http://localhost:3000/checkbox/",obj)
  
  }
}
