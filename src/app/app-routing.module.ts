import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {ClientListComponent} from "./client-list/client-list.component";
import {ClientComponent} from "./client/client.component";
import {HomeComponent} from "./home/home.component";
import {CreateClientComponent} from "./create-client/create-client.component";
import {ProductAreaComponent} from "./product-area/product-area.component";
import {ProductAreaListComponent} from "./product-area-list/product-area-list.component";
import {CreateProductAreaComponent} from "./create-product-area/create-product-area.component";
import {CallbackComponent} from "./callback/callback.component";
import {AuthGuard} from "./auth-guard.service";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'callback',
    component: CallbackComponent
  },

  {
    path: 'clients',
    component: ClientListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'clients/:id',
    component: ClientComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'create-client',
    component: CreateClientComponent,
    canActivate: [AuthGuard]
  },

  {
    path: 'product-areas',
    component: ProductAreaListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'product-areas/:id',
    component: ProductAreaComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'create-product-area',
    component: CreateProductAreaComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
