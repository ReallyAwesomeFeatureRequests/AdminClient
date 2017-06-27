import {Component} from "@angular/core";
import {AuthService} from "./auth.service";

@Component({
  selector: 'rafr-root',
  template: `
    <rafr-header></rafr-header>

    <div class="container" id="content">
      <router-outlet></router-outlet>
    </div>

    <!--<rafr-footer></rafr-footer>-->
  `,
  styles: [`
    #content {
      padding-top: 18px;
    }
  `]
})
export class AppComponent {
  constructor(public auth: AuthService) {
    auth.handleAuthentication();
  }
}
