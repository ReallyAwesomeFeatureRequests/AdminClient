import {BrowserModule} from "@angular/platform-browser";
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";

import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";
import {HomeComponent} from "./home/home.component";
import {ClientListComponent} from "./client-list/client-list.component";
import {ClientComponent} from "./client/client.component";
import {HeaderComponent} from "./header/header.component";
import {ClientService} from "./client.service";
import {ClientListResultComponent} from "./client-list-result/client-list-result.component";
import {FooterComponent} from "./footer/footer.component";
import {CreateClientComponent} from "./create-client/create-client.component";
import {CreateProductAreaComponent} from "./create-product-area/create-product-area.component";
import {ProductAreaListResultComponent} from "./product-area-list-result/product-area-list-result.component";
import {ProductAreaListComponent} from "./product-area-list/product-area-list.component";
import {ProductAreaComponent} from "./product-area/product-area.component";
import {ProductAreaService} from "./product-area.service";
import {AuthService} from "./auth.service";
import { CallbackComponent } from './callback/callback.component';
import {AuthGuard} from "./auth-guard.service";
import { LoadingComponent } from './loading/loading.component';
import { PagingComponent } from './paging/paging.component';
import { ForNumberPipe } from './for-number.pipe';
import { OverviewComponent } from './overview/overview.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClientListComponent,
    ClientComponent,
    HeaderComponent,
    ClientListResultComponent,
    FooterComponent,
    CreateClientComponent,
    CreateProductAreaComponent,
    ProductAreaListResultComponent,
    ProductAreaListComponent,
    ProductAreaComponent,
    CallbackComponent,
    LoadingComponent,
    PagingComponent,
    ForNumberPipe,
    OverviewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    ClientService,
    ProductAreaService
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
