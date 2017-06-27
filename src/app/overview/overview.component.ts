import {ChangeDetectionStrategy, Component, Input} from "@angular/core";

@Component({
  selector: 'rafr-overview',
  template: `
    <div class="card card-inverse thread-header overview-card">
      <div class="card-block">
        <h3 class="card-title">{{title}}</h3>
        <a type="button" class="btn btn-primary btn-lg btn-block create-new-button" *ngIf="createNew"
           [routerLink]="createNewLink">
          {{createNewText}}
        </a>
      </div>
    </div>
  `,
  styles: [`
    .overview-card {
      background-color: #333;
      border-color: #333;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OverviewComponent {
  @Input() title: string;
  @Input() createNewLink: string;
  @Input() createNew: boolean;
  @Input() createNewText: string;
}
