import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CollectionsDataService {
  url = "http://localhost:8080/server/api/core/collections";
  constructor(private http:HttpClient) {}
  
    collections (){
      return this.http.get(this.url);
    }
  
}
