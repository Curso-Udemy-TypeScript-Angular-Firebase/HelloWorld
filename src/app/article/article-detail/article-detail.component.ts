import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/models/article';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss']
})
export class ArticleDetailComponent implements OnInit {
  article!: Article;

  constructor(private r: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(JSON.parse(this.r.snapshot.params.article))
    this.article = JSON.parse(this.r.snapshot.params.article)
  }

}
