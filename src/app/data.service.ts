import { HttpClient, HttpHeaderResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  setDataIndex(index: number) {
    throw new Error('Method not implemented.');
  }
  getData(): { name: string; kra: string; status: string; }[] {
    throw new Error('Method not implemented.');
  }
  saveData(arg0: { name: string; kra: string; status: string; }) {
    throw new Error('Method not implemented.');
  }

  constructor(private http:HttpClient) { }
// private baseUrl
// this.baseUrl = Environment.baseServiceUrl

// headerOptions :new HttpHeader({
//   'content-Type':'application/json'
// })
//   getdata(){
//     return this.http.get(`${this.baseUrl}/getuom`,this.headerOptions)
//   }
}
