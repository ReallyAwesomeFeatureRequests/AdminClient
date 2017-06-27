import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {ProductAreaService} from "../product-area.service";

@Component({
  selector: 'rafr-create-product-area',
  templateUrl: './create-product-area.component.html'
})
export class CreateProductAreaComponent {
  productAreaModel: ProductAreaModel;

  constructor(private productAreaService: ProductAreaService,
              private router: Router) {
    this.productAreaModel = {};
  }

  createProductArea() {
    this.productAreaService.create(this.productAreaModel)
      .subscribe(productArea => this.router.navigate([`/product-areas/${productArea.id}`]));
  }
}

interface ProductAreaModel {
  name?: string;
  description?: string;
}
