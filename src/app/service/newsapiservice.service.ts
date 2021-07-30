import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NewsapiserviceService {

  constructor(public _http: HttpClient) { }

  newsApiUrl ="https://newsapi.org/v2/top-headlines?country=de&apiKey=0038508e3dee4b61a6fc074e24d7b365";// Germany Api

  //request
  //news()
  news():Observable <any>{
    return this._http.get(this.newsApiUrl);
  }
}
