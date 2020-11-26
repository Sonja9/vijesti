import { BitcoinService } from './../bitcoin.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bitcoin',
  templateUrl: './bitcoin.component.html',
  styleUrls: ['./bitcoin.component.css']
})
export class BitcoinComponent implements OnInit {

  articles;
  constructor(private _bitcoinService: BitcoinService) { }

  ngOnInit(){
    this._bitcoinService.getBitcoin().subscribe(data =>{
      this.articles = data['articles'];
      console.log(data);
    })
  }

}
