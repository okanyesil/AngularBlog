import { Component, OnInit } from '@angular/core';
import {Article} from '../../models/article';
import {ArticleService} from '../../services/article.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  page = 1;
  articles: Article[];
  totalCount: number;
  pageSize = 5;
  constructor(private articleService: ArticleService, private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      if (params.get('page')) {
        this.page = Number(params.get('page'));
      }
      this.articles = [];
      this.totalCount = 0;
      this.articleService.getArticles(this.page, this.pageSize).subscribe(data => {
        console.log(data);
        this.articles = data.articles;
        this.totalCount = data.totalCount;
      });
    });

  }

}
