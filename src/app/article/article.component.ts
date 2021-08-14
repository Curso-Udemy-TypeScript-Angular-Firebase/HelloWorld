import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from '../models/article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  articleList: Array<Article> = new Array<Article>();

  constructor(private r:Router) { }

  ngOnInit(): void {
    this.articleList.push(
      {id: 1, name: 'Switch', description: 'Consola de Nintendo', price: 300, stock: 20500},
      {id: 2, name: 'PS5', description: 'Consola de Sony', price: 500, stock: 10},
      {id: 3, name: 'Xbox ONE', description: 'Consola de Microsoft', price: 450, stock: 3500}
    )
    console.log(this.articleList)
  }
  sendParam(_article: Article){
      this.r.navigate(["article/details", {article: JSON.stringify(_article)}])
  }
}
