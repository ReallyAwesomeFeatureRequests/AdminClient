import {Component} from "@angular/core";
import {AuthService} from "../auth.service";

@Component({
  selector: 'rafr-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  constructor(public auth: AuthService) {
  }
}
