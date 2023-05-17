import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { throwError } from 'rxjs/internal/observable/throwError';
import { catchError } from 'rxjs/internal/operators/catchError';
import { contact } from './contactmodels';


 @Injectable({
  providedIn: 'root'
})
export class AllsataService {
  updateData(updatedData: { id: any; name: any; kra: any; status: any; }) {
    throw new Error('Method not implemented.');
  }
 
  apiUrl="http://localhost:3000/user"
  constructor(private http:HttpClient) { }

  getData(){
    return this.http.get(this.apiUrl)
  }

 

  
  setData(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, data).pipe(
      catchError((error: HttpErrorResponse) => {
        console.log(error);
        return throwError('An error occurred while saving the data.');
      })
    );
  }

  updatedata(id:any, obj:any){
    return this.http.put("http://localhost:3000/user/"+id,obj)
  }

  deleteData(id:any){
    return this.http.delete("http://localhost:3000/user/"+id)
   }
   

// fetchdata(id:number){
//   return this.http.get<contact>("http://localhost:3000/user/"+id)
// }
// fetchdata(id:number)
//   {
//     return this.http.get<contact>("http://localhost:3000/posts/"+id)
//   }
// updateContact(data:contact,id:number){
//   return this.http.put<contact>("http://localhost:3000/user/"+id,data)
// }


  
  
}








