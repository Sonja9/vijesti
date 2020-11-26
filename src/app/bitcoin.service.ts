import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BitcoinService {

  private _url: string ="http://newsapi.org/v2/everything?q=bitcoin&from=2020-10-25&sortBy=publishedAt&apiKey=49230da2eb5c4c4db4c4a9976bb73b86";
  constructor(private http: HttpClient) { }

  getBitcoin(){
    return this.http.get(this._url);
  }
}
