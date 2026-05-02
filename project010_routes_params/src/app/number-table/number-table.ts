import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-number-table',
  imports: [],
  templateUrl: './number-table.html',
  styleUrl: './number-table.css',
})
export class NumberTable {

  num=0;
  table='';

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.num = parseInt(params.get("nro")!);
      this.table = '';
      for (let x = 1; x <= 10; x++) {
        let t = x * this.num;
        this.table += t + '-';
      }
    })
  }

}
