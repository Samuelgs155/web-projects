import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ArticlesService } from './articles-service';
import { WebArticlesService } from './web-articles-service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('project013_services');

  articles: any;
  webArticles: any[] = [];

  constructor(
    private articlesService: ArticlesService,
    private webArticlesService: WebArticlesService
  ) {
    this.articles = this.articlesService.sendBack();

    this.webArticlesService.sendWebBack().subscribe((data: any) => {
      this.webArticles = data;
    });
  }
}