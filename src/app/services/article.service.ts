import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ArticlePg} from '../models/article-pg';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  public loading = true;
  private apiUrl = 'https://localhost:44373/api/articles';
  constructor(private http: HttpClient) { }
  getArticles(page: number, pageSize = 5) {
    const api = `${this.apiUrl}/${page}/${pageSize}`;
    return this.http.get<ArticlePg>(api).pipe(tap(value => {
      this.loading = false;
    }));
  }


}
