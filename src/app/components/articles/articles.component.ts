import {Component, Input, OnInit} from '@angular/core';
import {Article} from '../../models/article';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  @Input()
  totalCount: number;
  @Input()
  articles: Article[];
  @Input()
  page: any;
  @Input()
  pageSize: number;
  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }
  pageChanged(event) {
    this.page = event;
    this.router.navigateByUrl(`/sayfa/${this.page}`);

  }

}
