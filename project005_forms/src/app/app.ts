import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('project005_forms');

  name : string = '';
  surname: string = '';

  article = {
    code: 0,
    description: "",
    price: 0
  }

  articles = [{ code: 1, description: 'potatoes', price: 10.55 },
  { code: 2, description: 'apples', price: 12.10 },
  { code: 3, description: 'melon', price: 52.30 },
  { code: 4, description: 'onions', price: 17 },
  { code: 5, description: 'pumpkins', price: 20 },
  ];

  thereAreArticles() {
    return this.articles.length > 0;
  }

  removeAnArticle(code: number) {
    for (let x = 0; x < this.articles.length; x++)
      if (this.articles[x].code == code) {
        this.articles.splice(x, 1);
        return;
      }
  }

  addAnArticle() {
    if (this.article.code == 0) {
      alert('You must insert a code different to 0.');
      return;
    }
    for (let x = 0; x < this.articles.length; x++)
      if (this.articles[x].code == this.article.code) {
        alert('There is already an article whose code is ' + this.article.code);
        return;
      }
    this.articles.push({
      code: this.article.code,
      description: this.article.description,
      price: this.article.price
    });
    this.article.code = 0;
    this.article.description = "";
    this.article.price = 0;
  }

  selectArticle(art: { code: number; description: string; price: number; }) {
    this.article.code = art.code;
    this.article.description = art.description;
    this.article.price = art.price;
  }

  updateArticle() {
    for (let x = 0; x < this.articles.length; x++)
      if (this.articles[x].code == this.article.code) {
        this.articles[x].description = this.article.description;
        this.articles[x].price = this.article.price;
        return;
      }
    alert('That article does not exist.');
  }
}
