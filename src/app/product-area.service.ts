import {Injectable} from "@angular/core";
import {Http} from "@angular/http";

import {BaseService} from "./base.service";
import {ProductArea} from "./product-area";

@Injectable()
export class ProductAreaService extends BaseService<ProductArea> {
  constructor(http: Http) {
    super(http);
  }

  getListUrl(): string {
    return `${this.baseUrl}product-areas`;
  }

  getOneUrl(id: number): string {
    return `${this.baseUrl}product-areas/${id}`;
  }

  updateUrl(id: number): string {
    return `${this.baseUrl}product-areas/${id}`;
  }

  createUrl(): string {
    return `${this.baseUrl}product-areas`;
  }

  destroyUrl(id: number): string {
    return `${this.baseUrl}product-areas/${id}`;
  }

  /**
   * Creates a new instance of Product Area based on the product area object provided to it
   *
   * @param productArea
   * @returns {Client}
   */
  createNewInstance(productArea: any): ProductArea {
    return new ProductArea(productArea.id, productArea.name, productArea.description);
  }
}
