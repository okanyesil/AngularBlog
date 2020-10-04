import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Category} from '../models/category';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private apiUrl = 'https://localhost:44373/api/categories';

  constructor(private http: HttpClient) {

  }
  getCategories() {
    return this.http.get<Category[]>(this.apiUrl);
  }
  getCategoryById(id: number) {
    return this.http.get<Category>(this.apiUrl + '/' + id);
  }
}

