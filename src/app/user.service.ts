import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }


  getuserdata(){
    return this.http.get("http://localhost:3000/userdata")
  }

  postuserdata(obj:any){
    return this.http.post("http://localhost:3000/userdata/", obj)
  }

  updateuserdata(id:any, obj:any){
    return this.http.put("http://localhost:3000/userdata/"+id,obj)
  }

  deleteuserdata(id:any){
    return this.http.delete("http://localhost:3000/userdata/"+id)
  }

    
  
}
