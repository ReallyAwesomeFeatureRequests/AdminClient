import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {ClientService} from "../client.service";

@Component({
  selector: 'rafr-create-client',
  templateUrl: './create-client.component.html'
})
export class CreateClientComponent {
  clientModel: ClientModel;

  constructor(private clientService: ClientService,
              private router: Router) {
    this.clientModel = {};
  }

  createClient() {
    this.clientService.create(this.clientModel)
      .subscribe(client => this.router.navigate([`/clients/${client.id}`]));
  }
}

interface ClientModel {
  name?: string;
  description?: string;
}
