import {Observable} from "rxjs/Observable";
import {OnInit} from "@angular/core";

export abstract class BaseListComponent<T> implements OnInit {
  list: Observable<{ list: T[], totalCount: number }>;
  page: number;
  limit: number;

  constructor() {
    this.page = 1;
    this.limit = 5;
  }

  ngOnInit() {
    this.fetchAndSetList()
  }

  fetchAndSetList() {
    if (this.page < 1) {
      this.page = 1;
    }

    this.list = this.getList(this.page, this.limit);
  }

  setPage(page) {
    this.page = page;
    this.fetchAndSetList();
  }

  setLimit(limit) {
    this.limit = limit;
    this.fetchAndSetList();
  }

  abstract getList(page, limit);
}
