import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private _url: string ="http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=49230da2eb5c4c4db4c4a9976bb73b86";
  constructor(private http: HttpClient) { }

  getNews(){
    return this.http.get(this._url);
  }
}
