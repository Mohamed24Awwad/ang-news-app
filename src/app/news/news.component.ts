import { Component, OnInit } from '@angular/core';
import { NewsapiserviceService } from '../service/newsapiservice.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  constructor(public _service:NewsapiserviceService) { }


  //Displaying the news on UI elements

  newsDisplay:any=[];


  ngOnInit(): void {

    this._service.news().subscribe((result) => {
      console.log(result);
    this.newsDisplay = result.articles;
    })
  }

}
