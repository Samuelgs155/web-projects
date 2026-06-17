import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ArticleService} from './Articles/article-service';
import { WebArticlesService } from './WebArticles/web-articles-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('project_13');

  articles: any;
  // articleServiceInstance: ArticleService;

  webArticles: any[] = [];

  constructor(
    private articleService: ArticleService,
    private webArticlesService: WebArticlesService,
  ) {
    this.articles = this.articleService.sendBack();
    this.webArticlesService.sendWebBack().subscribe((data: any) => {
      this.webArticles = data;
    });
  }
}
