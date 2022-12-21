import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environement';
import { map, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class Dataservice {
  private apiUr =  environment

  constructor(private httpClient:HttpClient) { }

  getData():Observable<any>{  
    return this.httpClient.get(this.apiUr.firebaseApiUrl + '/posts.json').pipe(map(responseData => {
       let arr = [];
       for(const key in responseData){
        if(responseData.hasOwnProperty(key)){
          arr.push({ ...responseData[key], id:key });
        }
       }
      //  console.log(arr);
       return arr;
    }));
  };

  post(data:any):Observable<any>{
    return this.httpClient.post(this.apiUr.firebaseApiUrl + '/posts.json' , data);
  }

}
