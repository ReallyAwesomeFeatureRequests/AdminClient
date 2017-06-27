import {ChangeDetectionStrategy, Component, Input} from "@angular/core";

@Component({
  selector: 'rafr-loading',
  template: `
    <div class="card">
      <div class="card-block">
        <span i18n>{{loadingText}}</span>
        <div class="progress">
          <div class="progress-bar progress-bar-striped progress-bar-animated w-100" role="progressbar"
               aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoadingComponent {
  @Input() loadingText: string;
}
