import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormaService {

  private _url: string= "https://jsonplaceholder.typicode.com/posts";
  constructor(private http: HttpClient) { }

  createPost(createResource){
    return this.http.post("https://jsonplaceholder.typicode.com/posts", createResource);
  }
}
