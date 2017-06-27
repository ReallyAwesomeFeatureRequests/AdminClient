import {Component, DoCheck, EventEmitter, Input, Output} from "@angular/core";

@Component({
  selector: 'rafr-paging',
  template: `
    <nav aria-label="...">
      <ul class="pagination pagination-lg justify-content-end">
        <li class="page-item" [ngClass]="{disabled: page === 1}">
          <a class="page-link" (click)="setPage(page - 1)">Previous</a>
        </li>
        <li class="page-item" *ngFor="let pageNumber of numberOfPages | forNumber"
            [ngClass]="{active: page === pageNumber + 1}">
          <span class="page-link" *ngIf="page === pageNumber + 1; else showLink">{{pageNumber + 1}}</span>
          <ng-template #showLink>
            <a class="page-link" (click)="setPage(pageNumber + 1)">{{pageNumber + 1}}</a>
          </ng-template>
        </li>
        <li class="page-item" [ngClass]="{disabled: page === numberOfPages}">
          <a class="page-link" (click)="setPage(page + 1)">Next</a>
        </li>
      </ul>
    </nav>
  `
})
export class PagingComponent implements DoCheck {
  @Input() totalCount: number;
  @Input() page: number;
  @Input() limit: number;
  @Output() changePage: EventEmitter<number>;
  numberOfPages: number;

  constructor() {
    this.changePage = new EventEmitter<number>();
    this.numberOfPages = 1;
  }

  ngDoCheck() {
    let numberOfPages = Math.ceil(this.totalCount / this.limit);
    if (numberOfPages < 1) {
      numberOfPages = 1;
    }

    if (this.numberOfPages !== numberOfPages) {
      this.numberOfPages = numberOfPages;
    }
  }

  setPage(newPage) {
    if (newPage < 1) {
      newPage = 1;
    }

    this.changePage.emit(newPage);
  }
}
