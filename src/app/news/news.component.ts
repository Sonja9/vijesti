import { NewsService } from './../news.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  articles;
  constructor(private _newsService: NewsService) { }

  ngOnInit(){
    this._newsService.getNews().subscribe(data =>{
      this.articles = data['articles'];
      console.log(data);
    })
  }



}
