import {Component} from "@angular/core";
import {ClientService} from "../client.service";
import {Client} from "../client";
import {BaseListComponent} from "../base-list-component";

@Component({
  selector: 'rafr-client-list',
  template: `
    <rafr-overview [title]="'Clients'"
                   [createNew]="true"
                   [createNewLink]="'/create-client'"
                   [createNewText]="'Create New Client'"></rafr-overview>

    <div *ngIf="list | async; let clientList; else clientListNotLoaded">
      <rafr-client-list-result *ngFor="let client of clientList.list"
                               [client]="client"></rafr-client-list-result>

      <rafr-paging (changePage)="setPage($event)"
                   [limit]="limit"
                   [page]="page"
                   [totalCount]="clientList.totalCount"></rafr-paging>
    </div>

    <ng-template #clientListNotLoaded>
      <rafr-loading [loadingText]="'Loading client list'"></rafr-loading>
    </ng-template>
  `,
  styles: [`
    rafr-client-list-result,
    rafr-paging {
      display: block;
      margin-top: 12px;
    }
  `]
})
export class ClientListComponent extends BaseListComponent<Client> {
  constructor(private clientService: ClientService) {
    super();
  }

  getList(page, limit) {
    return this.clientService.getList(page, limit);
  }
}
