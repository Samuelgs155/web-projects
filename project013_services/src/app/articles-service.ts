import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ArticlesService {

  sendBack() {
    return [
      {
        code: 1,
        description: "potatoes",
        price: 12.33
      },
      {
        code: 2,
        description: "apples",
        price: 54
      },
      {
        code: 3,
        description: "watermelon",
        price: 14
      }
    ];
  }

}
