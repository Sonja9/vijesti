import { FormaService } from './../forma.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forma',
  templateUrl: './forma.component.html',
  styleUrls: ['./forma.component.css']
})
export class FormaComponent implements OnInit {

  constructor(private _formaService: FormaService) { }

  ngOnInit(){
  }

  postData(form){
    const noviPost = { title: form.value.title , body: form.value.body};

    this._formaService.createPost(noviPost).subscribe(data => {
      console.log(data);
    });
  }
}
