import {Component} from "@angular/core";

import {ProductAreaService} from "../product-area.service";
import {ProductArea} from "../product-area";
import {BaseListComponent} from "../base-list-component";

@Component({
  selector: 'rafr-product-area-list',
  template: `
    <rafr-overview [title]="'Product Areas'"
                   [createNew]="true"
                   [createNewLink]="'/create-product-area'"
                   [createNewText]="'Create New Product Area'"></rafr-overview>

    <div *ngIf="list | async; let productAreaList; else productAreaListNotLoaded">
      <rafr-product-area-list-result *ngFor="let productArea of productAreaList.list"
                                     [productArea]="productArea"></rafr-product-area-list-result>

      <rafr-paging (changePage)="setPage($event)"
                   [limit]="limit"
                   [page]="page"
                   [totalCount]="productAreaList.totalCount"></rafr-paging>
    </div>

    <ng-template #productAreaListNotLoaded>
      <rafr-loading [loadingText]="'Loading product area list'"></rafr-loading>
    </ng-template>
  `,
  styles: [`
    rafr-product-area-list-result,
    rafr-paging {
      display: block;
      margin-top: 12px;
    }
  `]
})
export class ProductAreaListComponent extends BaseListComponent<ProductArea> {
  constructor(private productAreaService: ProductAreaService) {
    super();
  }

  getList(page, limit) {
    return this.productAreaService.getList(page, limit);
  }
}
